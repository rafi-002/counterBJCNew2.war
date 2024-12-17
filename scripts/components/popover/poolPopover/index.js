
// Pool
window.$Qmatic.components.popover.PoolPopoverComponent = function(options) {
    window.$Qmatic.components.popover.BasePopoverComponent.call(this, options);
    this.visitId        = options.visitId;
    this.serviceName    = options.serviceName;
    this.totalServices    = options.totalServices;
    this.customerName   = options.customerName;
    this.disableCall    = _.isBoolean(options.disableCall) ? options.disableCall : false;
    this.isRTL          = document.getElementsByTagName("html")[0].getAttribute("dir")
                        && document.getElementsByTagName("html")[0].getAttribute("dir")
                                                .indexOf('rtl') > -1 ? true : false;
    this.views          = {
        ACTION_BAR: 'action-bar-view'
    }
}

window.$Qmatic.components.popover.PoolPopoverComponent.prototype
    = Object.create(window.$Qmatic.components.popover.BasePopoverComponent.prototype);

// correct the constructor pointer
window.$Qmatic.components.popover.PoolPopoverComponent.prototype.constructor
    = window.$Qmatic.components.popover.PoolPopoverComponent;

window.$Qmatic.components.popover.PoolPopoverComponent.prototype
    = $.extend(window.$Qmatic.components.popover.BasePopoverComponent.prototype, {
    init: function () {
        this._attachTargetEventListeners();
    },
    _attachTargetEventListeners: function () {
        this.target.addEventListener('click', this._toggleAndAttachPopoverTemplateEvents.bind(this));
    },
    _toggleAndAttachPopoverTemplateEvents: function (e) {
        if(this.instance && this.instance._isOpen) {
            this._toggleInstance();
        } else {
            this.instance = new Tooltip(this.target, {
                container: document.getElementById('renderedPopovers'),
                boundariesElement: 'viewport',
                trigger: 'manual',
                title: ' ',
                placement: this.isRTL ? 'bottom-end' : 'bottom-start',
                template: this.template,
                offset: '0, 10'
            });

            popoverController.pushPopover(this);

            var shouldAttachTemplateEvents = this.instance._tooltipNode ? false : true;

            this._toggleInstance();
            this._navigateTo(this.views.ACTION_BAR);

            if(shouldAttachTemplateEvents) {
                this._attachTemplateEvents();
            }
            this.updateContent();
        }
    },
    _attachOverlayEvent: function () {
        this.popoverOverlay.addEventListener('click', this.disposeInstance.bind(this), {once: true});
    },
    _removeOverlayEvent: function () {
        this.popoverOverlay.removeEventListener('click', this.disposeInstance);
    },
    _attachTemplateEvents: function () {
        var closeBtns   = this.instance._tooltipNode.querySelectorAll('.js-popover-close'),
            callBtn     = this.instance._tooltipNode.querySelector('.js-popover-call'),
            backBtns    = this.instance._tooltipNode.querySelectorAll('.js-popover-back');

        for(var i = 0; i < closeBtns.length; i ++) {
            closeBtns[i].addEventListener('click', this._toggleInstance.bind(this));
        }

        for(var j = 0; j < backBtns.length; j ++) {
            backBtns[j].addEventListener('click', this._navigateBack.bind(this));
        }
        if(this.disableCall) {
            callBtn.disabled = true;
        } else {
            callBtn.addEventListener('click', this._call.bind(this));
        }
    },
        updateContent: function () {
            $(this.instance._tooltipNode.querySelectorAll('.pool-popover-content-col-content')[0]).text(this.serviceName);
            $(this.instance._tooltipNode.querySelectorAll('.pool-popover-content-services')[0]).text(this.totalServices);
            if (this.customerName) {
                $(this.instance._tooltipNode.querySelectorAll('.pool-popover-content-col-content')[1]).text(this.customerName);
            } else {
                $(this.instance._tooltipNode.querySelectorAll('.pool-popover-content-col')[1]).hide();
            }
        },
    disposeInstance: function () {
        this.navigationStack = [];
        this.target.focus();
        this.instance && this.instance.dispose();
        this.popoverOverlay.style.display = "none";
    }
});

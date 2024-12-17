lowfiie = true;

REST.Request.prototype = {
		execute : function(callback){
			var request = new XMLHttpRequest();
			var url = this.uri;
			var restRequest = this;
			for(var i=0;i<this.matrixParameters.length;i++){
				url += ";" + REST.Encoding.encodePathParamName(this.matrixParameters[i][0]);
				url += "=" + REST.Encoding.encodePathParamValue(this.matrixParameters[i][1]);
			}
			for(var i=0;i<this.queryParameters.length;i++){
				if(i == 0)
					url += "?";
				else
					url += "&";
				url += REST.Encoding.encodeQueryParamNameOrValue(this.queryParameters[i][0]);
				url += "=" + REST.Encoding.encodeQueryParamNameOrValue(this.queryParameters[i][1]);
			}
			if(this.queryParameters.length > 0 || this.matrixParameters.length > 0) {
				url += "&breakcache=" + Math.random();
			} else {
				url += "?breakcache=" + Math.random();
			}
			for(var i=0;i<this.cookies.length;i++){
				document.cookie = escape(this.cookies[i][0]) 
					+ "=" + escape(this.cookies[i][1]);
			}
			request.open(this.method, url, this.async, this.username, this.password);
			var acceptSet = false;
			var contentTypeSet = false;
			for(var i=0;i<this.headers.length;i++){
				if(this.headers[i][0].toLowerCase() == 'accept')
					acceptSet = this.headers[i][1];
				if(this.headers[i][0].toLowerCase() == 'content-type')
					contentTypeSet = this.headers[i][1];
				request.setRequestHeader(REST.Encoding.encodeHeaderName(this.headers[i][0]),
						REST.Encoding.encodeHeaderValue(this.headers[i][1]));
			}
			if(!acceptSet)
				request.setRequestHeader('Accept', this.acceptHeader);
			REST.log("Got form params: "+this.formParameters.length);
			// see if we're sending an entity or a form
			if(this.entity && this.formParameters.length > 0)
				throw "Cannot have both an entity and form parameters";
			// form
			if(this.formParameters.length > 0){
				if(contentTypeSet && contentTypeSet != "application/x-www-form-urlencoded")
					throw "The ContentType that was set by header value ("+contentTypeSet+") is incompatible with form parameters";
				if(this.contentTypeHeader && this.contentTypeHeader != "application/x-www-form-urlencoded")
					throw "The ContentType that was set with setContentType ("+this.contentTypeHeader+") is incompatible with form parameters";
				contentTypeSet = "application/x-www-form-urlencoded";
				request.setRequestHeader('Content-Type', contentTypeSet);
			}else if(this.entity && !contentTypeSet && this.contentTypeHeader){
				// entity
				contentTypeSet = this.contentTypeHeader;
				request.setRequestHeader('Content-Type', this.contentTypeHeader);
			}
			// we use this flag to work around buggy browsers
			var gotReadyStateChangeEvent = false;
			if(callback){
				request.onreadystatechange = function() {
					gotReadyStateChangeEvent = true;
					REST.log("Got readystatechange");
					REST._complete(this, callback);
				};
			}
			var data = this.entity;
			if(this.entity){
				//if(this.entity instanceof Element){
				//	if(!contentTypeSet || REST._isXMLMIME(contentTypeSet))
				//		data = REST.serialiseXML(this.entity);
				//}else if(this.entity instanceof Document){
				//	if(!contentTypeSet || REST._isXMLMIME(contentTypeSet))
				//		data = this.entity;
				if(this.entity instanceof Object){
					if(!contentTypeSet || contentTypeSet == "application/json")
						data = JSON.stringify(this.entity);
				}
			}else if(this.formParameters.length > 0){
				data = '';
				for(var i=0;i<this.formParameters.length;i++){
					if(i > 0)
						data += "&";
					data += REST.Encoding.encodeFormNameOrValue(this.formParameters[i][0]);
					data += "=" + REST.Encoding.encodeFormNameOrValue(this.formParameters[i][1]);
				}
			}
			REST.log("Content-Type set to "+contentTypeSet);
			REST.log("Entity set to "+data);
			request.send(data);
			// now if the browser did not follow the specs and did not fire the events while synchronous,
			// handle it manually
			if(!this.async && !gotReadyStateChangeEvent && callback){
				REST.log("Working around browser readystatechange bug");
				REST._complete(request, callback);
			}
		},
		setAccepts : function(acceptHeader){
			REST.log("setAccepts("+acceptHeader+")");
			this.acceptHeader = acceptHeader;
		},
		setCredentials : function(username, password){
			this.password = password;
			this.username = username;
		},
		setEntity : function(entity){
			REST.log("setEntity("+entity+")");
			this.entity = entity;
		},
		setContentType : function(contentType){
			REST.log("setContentType("+contentType+")");
			this.contentTypeHeader = contentType;
		},
		setURI : function(uri){
			REST.log("setURI("+uri+")");
			this.uri = uri;
		},
		setMethod : function(method){
			REST.log("setMethod("+method+")");
			this.method = method;
		},
		setAsync : function(async){
			REST.log("setAsync("+async+")");
			this.async = async;
		},
		addCookie : function(name, value){
			REST.log("addCookie("+name+"="+value+")");
			this.cookies.push([name, value]);
		},
		addQueryParameter : function(name, value){
			REST.log("addQueryParameter("+name+"="+value+")");
			this.queryParameters.push([name, value]);
		},
		addMatrixParameter : function(name, value){
			REST.log("addMatrixParameter("+name+"="+value+")");
			this.matrixParameters.push([name, value]);
		},
		addFormParameter : function(name, value){
			REST.log("addFormParameter("+name+"="+value+")");
			this.formParameters.push([name, value]);
		},
		addHeader : function(name, value){
			REST.log("addHeader("+name+"="+value+")");
			this.headers.push([name, value]);
		}
};


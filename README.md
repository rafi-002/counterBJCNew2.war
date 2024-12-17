## How the appointment details gets dipslayed 
#When you click on the proceed button 
1. Executes the checkAppointment() fucntion
   1. Gets HC Number from patient
   2. Uses var facility = 'HC Hamad'
2. Executes verifyReception() function 
   1. Gets the current reception counter (Ex. Reception 3 )
3. Goes back to checkAppointment() function: 
   1. Sends a get request to '/GetApptDetails' fetches all appointment details for the patient
   2. Stores only the values for of elements from the index of first appointment.
   3. Compares current time to appointment time to categorize the appointment to on-time, early or late
4. After that when the appointment information is displayed they click on whatever type of appointment button shows up to print the ticket
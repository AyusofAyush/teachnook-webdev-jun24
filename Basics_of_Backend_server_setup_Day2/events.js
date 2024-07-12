// Import events module  
let events = require('events');  
// Create an eventEmitter object  
let eventEmitter = new events.EventEmitter();  
  
// Create an event handler as follows  
let connectHandler = function connected() {  
   console.log('connection succesful.');  
    
   // Fire the data_received event   
   eventEmitter.emit('data_received');  
}  
  
// Bind the connection event with the handler  
eventEmitter.on('connection', connectHandler);  
 // Bind the data_received event with the anonymous function  
eventEmitter.on('data_received', function(){  
   console.log('data received succesfully.');  
});  
// Fire the connection event   
eventEmitter.emit('connection');  
console.log("Program Ended.");  
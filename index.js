// event listener: you give it the name of an event (string), and a function to run when that event fires.
//                 you can set up as many listeners as you want for a single event.

// event emitter: wherever you call emit('eventName') method from EventEmitter class, it will alert all 
// the listeners you have set up to listen for that event, which will run whatever function you attached to the listener.



// examples

// destructure event emitter class out of the "events" library.
const { EventEmitter } = require('events');

// make an instance of the emitter class. 
const emitter = new EventEmitter();

// cool, that's it. we can now make this event emitter emit any event we want.
// you make these up yourself and can call them whatever you want. 
// to "emit" an event means to send out a message to any event "listeners" you've written
// that are set up to listen to that event. 

// firing an event doesn't do anything until you set up a listener.
// e.g. nothing will happen when you run this by itself:
emitter.emit('myEvent');

// what we want to do for this example is console log ('event has fired') when then event fires.
// so we will first write a function that does the console logging:

function alert() {
  console.log('event has fired');
}

// now we make the listener for myEvent, and give it that function we just wrote:
emitter.on('myEvent', alert);

// now emit the event again, now that we've set up a listener in the last line:
emitter.emit('myEvent');

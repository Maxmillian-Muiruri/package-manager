const { logEvents } = require("./logEvents");
const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }; 
// initialize myemitter
const myEmmiter = new MyEmitter();

// ADlistener for the log event

myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    // emit event

    myEmmitter.emit('log', 'log events emmitted!');
}, 2000);
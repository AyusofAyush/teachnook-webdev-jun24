# Basics of Backend 

## Setup a Backend server

## Node.JS
```
Node.js is a cross-platform environment and library for running JavaScript applications which is used to create networking and server-side applications.

It can be downloaded from this link https://nodejs.org/en/

Node.js is an open source server environment.

Node.js allows you to run JavaScript on the server.

`Node.js = Runtime Environment + JavaScript Library`

```


## Features of Node.js

- Extremely fast: Node.js is built on Google Chrome's V8 JavaScript Engine, so its library is very fast in code execution.

- I/O is Asynchronous and Event Driven: All APIs of Node.js library are asynchronous i.e. non-blocking. So a Node.js based server never waits for an API to return data. The server moves to the next API after calling it and a notification mechanism of Events of Node.js helps the server to get a response from the previous API call. It is also a reason that it is very fast.

- Single threaded: Node.js follows a single threaded model with event looping.

- Highly Scalable: Node.js is highly scalable because event mechanism helps the server to respond in a non-blocking way.

- No buffering: Node.js cuts down the overall processing time while uploading audio and video files. Node.js applications never buffer any data. These applications simply output the data in chunks.

- Open source: Node.js has an open source community which has produced many excellent modules to add additional capabilities to Node.js applications.


## Global Objects (window in browser / global in nodejs)
```
__dirname
__filename
Console
Process
Buffer
setImmediate(callback[, arg][, ...])
setInterval(callback, delay[, arg][, ...])
setTimeout(callback, delay[, arg][, ...])
clearImmediate(immediateObject)
clearInterval(intervalObject)
clearTimeout(timeoutObject)

```


## Node JS Timer 
```
Set timer functions:


setImmediate(): It is used to execute setImmediate.
setInterval(): It is used to define a time interval.
setTimeout(): ()- It is used to execute a one-time callback after delay milliseconds.


Clear timer functions:

clearImmediate(immediateObject): It is used to stop an immediateObject, as created by setImmediate
clearInterval(intervalObject): It is used to stop an intervalObject, as created by setInterval
clearTimeout(timeoutObject): It prevents a timeoutObject, as created by setTimeout
```

## Node.JS Errors types

- Standard JavaScript errors i.e. <EvalError>, <SyntaxError>, <RangeError>, <ReferenceError>, <TypeError>, <URIError> etc.
- System errors
- User-specified errors
- Assertion errors

## Node.js Net
```
Node.js provides the ability to perform socket programming. We can create chat application or communicate client and server applications using socket programming in Node.js


server:

File: net_server.js

const net = require('net');  
let server = net.createServer((socket) => {  
  socket.end('goodbye\n');  
}).on('error', (err) => {  
  // handle errors here  
  throw err;  
});  
// grab a random port.  
server.listen(() => {  
  address = server.address();  
  console.log('opened server on %j', address);  
});  


client:

File: net_client.js

const net = require('net');  
const client = net.connect({port: 50302}, () => {//use same port of server  
  console.log('connected to server!');  
  client.write('world!\r\n');  
});  
client.on('data', (data) => {  
  console.log(data.toString());  
  client.end();  
});  
client.on('end', () => {  
  console.log('disconnected from server');  
});  
```


## Node.Js Process
```
Node.js provides the facility to get process information such as process id, architecture, platform, version, release, uptime, upu usage etc. It can also be used to kill process, set uid, set groups, unmask etc.

arch	    returns process architecture: 'arm', 'ia32', or 'x64'
args	    returns commands line arguments as an array
env	        returns user environment
pid	        returns process id of the process
platform	returns platform of the process: 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'
release	    returns the metadata for the current node release
version	    returns the node version
versions	returns the node version and its dependencies

Process Functions

Function	    Description
cwd()	        returns path of current working directory
hrtime()	    returns the current high-resolution real time in a [seconds, nanoseconds] array
memoryUsage()	returns an object having information of memory usage.
process.kill(pid[, signal])	is used to kill the given pid.
uptime()	    returns the Node.js process uptime in seconds.


```


## Node.JS File System
```
In Node.js, file I/O is provided by simple wrappers around standard POSIX functions. Node File System (fs) module can be imported using following syntax

let fs = require('fs')

Read files
Create files
Update files
Delete files
Rename files

fs reading a file

`let fs = require("fs");  
// Asynchronous read  
fs.readFile('input.txt', function (err, data) {  
   if (err) {  
       return console.error(err);  
   }  
   console.log("Asynchronous read: " + data.toString());  
});  
// Synchronous read  vs Asyncronous read
let data = fs.readFileSync('input.txt');  
console.log("Synchronous read: " + data.toString());  
console.log("Program Ended");  `


Open a File

Flags for Read/Write
Following is a list of flags for read/write operation:

Flag	    Description
r	        open file for reading. an exception occurs if the file does not exist.
r+	        open file for reading and writing. an exception occurs if the file does not exist.
rs	        open file for reading in synchronous mode.
rs+	        open file for reading and writing, telling the os to open it synchronously. see notes for 'rs' about using this with caution.
w	        open file for writing. the file is created (if it does not exist) or truncated (if it exists).
wx	        like 'w' but fails if path exists.
w+	        open file for reading and writing. the file is created (if it does not exist) or truncated (if it exists).
wx+	        like 'w+' but fails if path exists.
a	        open file for appending. the file is created if it does not exist.
ax	        like 'a' but fails if path exists.
a+	        open file for reading and appending. the file is created if it does not exist.
ax+	        open file for reading and appending. the file is created if it does not exist.

`
let fs = require("fs");  
// Asynchronous - Opening File  
console.log("Going to open file!");  
fs.open('input.txt', 'r+', function(err, fd) {  
   if (err) {  
       return console.error(err);  
   }  
  console.log("File opened successfully!");       
});  
`
```


## Node.js Path
```
The Node.js path module is used to handle and transform files paths. This module can be imported by using the following syntax:

Syntax:

let path =  require ("path");

Path Methods
Let's see the list of methods used in path module:

Index	    Method	        Description
1.	    path.normalize(p)	    It is used to normalize a string path, taking care of '..' and '.' parts.
2.	    path.join([path1][, path2][, ...])	It is used to join all arguments together and normalize the resulting path.
3.	    path.resolve([from ...], to)	It is used to resolve an absolute path.
4.	    path.isabsolute(path)	It determines whether path is an absolute path. an absolute path will always resolve to the same location, regardless of the working directory.
5.	    path.relative(from, to)	It is used to solve the relative path from "from" to "to".
6.	    path.dirname(p)	It return the directory name of a path. It is similar to the unix dirname command
7.	    path.basename(p[, ext])	It returns the last portion of a path. It is similar to the Unix basename command.
8.	    path.extname(p)	It returns the extension of the path, from the last '.' to end of string in the last portion of the path. if there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string.
9.	    path.parse(pathstring)	It returns an object from a path string.
10.	    path.format(pathobject)	It returns a path string from an object, the opposite of path.parse above.

```


## Node.js V8 Engine
```
V8 is an open source JavaScript engine developed by the Chromium project for the Google Chrome web browser. It is written in C++. Now a days, it is used in many projects such as Couchbase, MongoDB and Node.js.

(read me about it on google)
```


## Node.JS Events
```
In Node.js applications, Events and Callbacks concepts are used to provide concurrency. As Node.js applications are single threaded and every API of Node js are asynchronous. So it uses async function to maintain the concurrency. Node uses observer pattern. Node thread keeps an event loop and after the completion of any task, it fires the corresponding event which signals the event listener function to get executed.



Event Driven Programming

```



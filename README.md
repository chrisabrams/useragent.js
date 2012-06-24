useragent.js
============

Get the current user agent using Javascript.

##Usage
To get the user agent:

	var ua = userAgent.get();

###Device
The user agent's device is a property:
	
	console.log(ua.device);


##Build
Build requires uglify-js which is a node.js module

	npm install
	./build
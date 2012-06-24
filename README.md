useragent.js
============

Get the current user agent using Javascript.

##Usage
To get the user agent:

	var ua = new userAgent

###Device
The user agent's device is a property:
	
	var device = ua.get()


##Build
Build requires uglify-js which is a node.js module

	npm install
	./build
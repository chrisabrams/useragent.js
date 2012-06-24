var userAgent = function() {};

userAgent.prototype.get = function(callback) {
	var userAgent = {};

	switch(navigator.vendor) {
		case 'Apple Computer, Inc.':
			if(navigator.userAgent.indexOf('iPod') != -1) {
				userAgent.device = 'iPod';
			}

			if(navigator.userAgent.indexOf('iPad') != -1) {
				userAgent.device = 'iPad';
			}

			if(navigator.userAgent.indexOf('iPhone') != -1) {
				userAgent.device = 'iPhone';
			}

			if(!userAgent.device) {
				userAgent.device = 'Desktop';
			}

			break;

		case 'Google Inc.':
			//Will do Chromebooks later
			break;

		default:
			userAgent.device = 'Desktop';
	}

	if(typeof callback === "function") {
		callback();
		return;
	}
	
	return userAgent;
};

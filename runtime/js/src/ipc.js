/*
 _       __      _ __    
| |     / /___ _(_) /____
| | /| / / __ `/ / / ___/
| |/ |/ / /_/ / / (__  ) 
|__/|__/\__,_/_/_/____/  
The lightweight framework for web-like apps
(c) Lea Anthony 2019-present
*/
/* jshint esversion: 6 */

function Invoke(message) {
	if (window && window.external && window.external.invoke) {
		window.external.invoke(message);
	} else {
		console.log(`[No external.invoke] ${message}`); // eslint-disable-line
	}
}

export function SendMessage(type, payload, callbackID) {
	const message = {
		type,
		callbackID,
		payload
	};

	Invoke(JSON.stringify(message));
}
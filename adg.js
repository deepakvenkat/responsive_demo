
ADG = {};
ADG.API = {
	invoke : function (data) {
		alert("Adg invoked");
		console.log(data);
	}
};

if (window.addEventListener) {
	window.addEventListener("message", function () {
		ADG.API.invoke(event.data);
	}, false);
}
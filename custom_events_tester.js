var evt;
//This is only for IE8
function bindCustomEvent (el, eventName, eventHandler) {
    if (el.attachEvent) {
        if (!el[eventName]) {
            el[eventName] = 0;
        }
        el.attachEvent("onpropertychange", function (event) {
            if (event.propertyName == eventName) {
                eventHandler(eventHandler);
            }
        });
    }
}

bindCustomEvent(document, "fakeEvents", function (evt) {
    alert('document');
});

// document.attachEvent("onfakeEvents", function () {
//     alert("in here")
// });
dispatchFakeEvent = function (el, eventName, bubble) {
    bubble = !bubble ? false : true;
    if (el.nodeType >= 1 && el[eventName] >= 0) {
        el[eventName]++;
    }
    if (bubble && el !== document) {
        dispatchFakeEvent(el.parentNode, eventName, bubble);
    }
};

document.getElementById('async-button').attachEvent('onclick', function () {
    dispatchFakeEvent(document, 'fakeEvents', true);//false = bubble
    if (document.dispatchEvent) {
        document.dispatchEvent(evt);
    }
});


//IE9
document.addEventListener("fakeEvents", function (evt) {
    alert("in here");
}, false);

if (document.createEvent) {
    evt = document.createEvent("CustomEvent");
    evt.initCustomEvent('fakeEvents', false, false, {});
}
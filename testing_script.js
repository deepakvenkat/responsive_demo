var d = new Date();
console.log(window.screen);
alert("Time zone : " + d.getTimezoneOffset() + "\n" +
"Screen Height: " + window.screen.availHeight + "\n" +
"Screen Width : " + window.screen.availWidth + "\n" +
"Geolocation : " + window.navigator.geoLocation + "\n" +
"Position : " + window.navigator.geoLocation.getCurrentPosition());
//console.log(navigator.mimeTypes);

function Map() {
  var key = this.adId + '_' + this.siteId;
  key = key.replace(/[:\,\.]/, '_');
  var startDay = '2013-05-14',
    startHour = 0,
    endDay = '2014-05-14',
    endHour = 23;
  adsStarted_aux = 0, adsCompleted_aux = 0, adsSkipped_aux = 0, pageUnlocks_aux = 0, altActionUsed_aux = 0;
  if (startDay == endDay && this.day == startDay && this.day == endDay) {
    for (var i = startHour; i < (endHour + 1); i++) {
      adsStarted_aux += this.adsStarted != undefined && this.adsStarted.partial[i] != undefined ? this.adsStarted.partial[i] : 0;
      adsCompleted_aux += this.adsCompleted != undefined && this.adsCompleted.partial[i] != undefined ? this.adsCompleted.partial[i] : 0;
      adsSkipped_aux += this.adsSkipped != undefined && this.adsSkipped.partial[i] != undefined ? this.adsSkipped.partial[i] : 0;
      altActionUsed_aux += this.altActionUsed != undefined && this.altActionUsed.partial[i] != undefined ? this.altActionUsed.partial[i] : 0;
      pageUnlocks_aux += this.pageUnlocks != undefined && this.pageUnlocks.partial[i] != undefined ? this.pageUnlocks.partial[i] : 0;
    }
  } else if (this.day == startDay) {
    for (var i = startHour; i < 24; i++) {
      adsStarted_aux += this.adsStarted != undefined && this.adsStarted.partial[i] != undefined ? this.adsStarted.partial[i] : 0;
      adsCompleted_aux += this.adsCompleted != undefined && this.adsCompleted.partial[i] != undefined ? this.adsCompleted.partial[i] : 0;
      adsSkipped_aux += this.adsSkipped != undefined && this.adsSkipped.partial[i] != undefined ? this.adsSkipped.partial[i] : 0;
      altActionUsed_aux += this.altActionUsed != undefined && this.altActionUsed.partial[i] != undefined ? this.altActionUsed.partial[i] : 0;
      pageUnlocks_aux += this.pageUnlocks != undefined && this.pageUnlocks.partial[i] != undefined ? this.pageUnlocks.partial[i] : 0;
    }
  } else if (this.day == endDay) {
    for (var i = 0; i < (endHour + 1); i++) {
      adsStarted_aux += this.adsStarted != undefined && this.adsStarted.partial[i] != undefined ? this.adsStarted.partial[i] : 0;
      adsCompleted_aux += this.adsCompleted != undefined && this.adsCompleted.partial[i] != undefined ? this.adsCompleted.partial[i] : 0;
      adsSkipped_aux += this.adsSkipped != undefined && this.adsSkipped.partial[i] != undefined ? this.adsSkipped.partial[i] : 0;
      altActionUsed_aux += this.altActionUsed != undefined && this.altActionUsed.partial[i] != undefined ? this.altActionUsed.partial[i] : 0;
      pageUnlocks_aux += this.pageUnlocks != undefined && this.pageUnlocks.partial[i] != undefined ? this.pageUnlocks.partial[i] : 0;
    }
  } else {
    adsStarted_aux += this.adsStarted != undefined && this.adsStarted.total != undefined ? this.adsStarted.total : 0;
    adsCompleted_aux += this.adsCompleted != undefined && this.adsCompleted.total != undefined ? this.adsCompleted.total : 0;
    adsSkipped_aux += this.adsSkipped != undefined && this.adsSkipped.total != undefined ? this.adsSkipped.total : 0;
    altActionUsed_aux += this.altActionUsed != undefined && this.altActionUsed.total != undefined ? this.altActionUsed.total : 0;
    pageUnlocks_aux += this.pageUnlocks != undefined && this.pageUnlocks.total != undefined ? this.pageUnlocks.total : 0;
  }
  var value = {
    adId: this.adId siteId: this.siteId,
    adsStarted: adsStarted_aux,
    adsCompleted: adsCompleted_aux,
    adsSkipped: adsSkipped_aux,
    altActionUsed: altActionUsed_aux,
    pageUnlocks: pageUnlocks_aux
  };
  emit(key, value);
}
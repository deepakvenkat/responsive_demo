(function () {

  var GMConfig = GMConfig || {};

  GMConfig.pubSettings = function () {

    var tagId = "gm-script-tag",
      tag = document.getElementById(tagId),
      pubSettings = getSettingsFromTag(tag);

    function getSettingsFromTag(tag) {
      var settings = {}, queryString, src, params,
        reg = /\\?([^?=&]+)(=([^&#]*))?/g;
      if (!tag) {
        return settings;
      }
      src = tag.src;
      try {
        src.replace(reg, function (match, p1, p2, p3) {
          if (typeof p3 === "string") {
            settings[p1] = decodeURIComponent(p3);
          }
        });
      } catch (e) {
        console.log("Error retireving pub settings");
      }
      return settings;
    }

    function getAllSettings () {
      return pubSettings;
    }

    function getSettingByName (name) {
      return pubSettings[name];
    }

    return {
      getAllSettings : getAllSettings,
      getSettingByName : getSettingByName
    };
  }();
  
  
  console.log(GMConfig.pubSettings.getAllSettings());
  console.log(GMConfig.pubSettings.getSettingByName("prop1"));
})();
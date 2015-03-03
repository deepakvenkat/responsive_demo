/*addineye.js - v_2_7_0_0 - 2014-02-09*/
var certifiedDomains = ["ds.serving-sys.com", "secure-ds.serving-sys.com", "rm.sina.com.cn", "a248.e.akamai.net", "adimg.163.com", "ad.tom.com", "richads.sina.com.hk", "cdn.fastclick.net", "bigpond.com", "images.sohu.com", "ads-eb.kbb.com", "eyeblaster.ign.com", "images.163.com", "eb.tremormedia.com", "eyeblaster.myspacecdn.com", "cn.yimg.com", "img.as.sanook.com", "msn.serving-sys.com", "msntest.serving-sys.com", "ds-cc.serving-sys.com", "detik.serving-sys.com", "s.ad.nextmedia.com", "cdn.mm.atwola.com", "ghgfhgf", "mediamind.da.vcdn.vn", "ds-vn.serving-sys.com"];
MsgProtocol = function() {};
MsgProtocol.prototype = {
  _interval_id: null,
  _last_hash: "",
  _cache_bust: 1,
  postMessage: function(message, target_url, target) {
    target = target || parent;
    if (target_url) {
      if (target.location) target.location = target_url.replace(/#.*$/, '') + '#' + (+new Date) + (this._cache_bust++) + '&' + message;
      else target.src = target_url.replace(/#.*$/, '') + '#' + (+new Date) + (this._cache_bust++) + '&' + message;
    }
  },
  receiveMessages: function(callback, delay) {
    this._interval_id && clearInterval(this._interval_id);
    this._interval_id = null;
    if (callback) {
      this._interval_id = setInterval(function() {
        var hash = document.location.hash;
        hash = hash;
        var re = /^#?\d+&/;
        if (hash !== this._last_hash && re.test(hash)) {
          this._last_hash = hash;
          callback({
            data: hash.replace(re, '')
          });
        }
      }, delay);
    }
  },
  finishMessaging: function() {
    clearInterval(this._interval_id);
    this._interval_id = null;
  }
};
if (typeof(EBG) != "undefined") EBG.msgProtocol = new MsgProtocol();
else EBG = {
  msgProtocol: new MsgProtocol()
};
INNERIFRAMEMessage = {
  LOADED: "ebInnerIframeLoaded",
  INIT: "ebInitInnerIframe",
  VERIFY: "ebVerifyInnerIframe",
  EBO: "ebO",
  GLOBALPARAMS: "ebGlobalParams",
  CONTINUE_SENDING: "ContinueSending",
  NOT_LASTMSG: "NotLastMsg",
  LASTMSG: "LastMsg",
  ADCONFIG_REQUEST: "AdConfig_Request",
  SECRET_TAGS: "Secret_Tags"
};

function ebHandleHashProtocolMsg(msgData) {
  var unEspacedData = unescape(msgData.data);
  var dataParsed = ebParseServerData(unEspacedData);
  switch (dataParsed.typeObj) {
    case INNERIFRAMEMessage.ADCONFIG_REQUEST:
      ebSetBSRequest(dataParsed);
      break;
    case INNERIFRAMEMessage.EBO:
      ebOSetter(dataParsed);
      break;
    case INNERIFRAMEMessage.GLOBALPARAMS:
      ebGlobalVariableSetter(dataParsed);
      break;
    case INNERIFRAMEMessage.SECRET_TAGS:
      ebSetSecretTags(dataParsed);
      break;
    case INNERIFRAMEMessage.VERIFY:
      _sendAddInEyeVerificationToServer(dataParsed);
      break;
  }
  switch (dataParsed.lastMsg) {
    case INNERIFRAMEMessage.NOT_LASTMSG:
      EBG.msgProtocol.postMessage(INNERIFRAMEMessage.CONTINUE_SENDING, dataParsed.parentURL);
      break;
    case INNERIFRAMEMessage.LASTMSG:
      EBG.msgProtocol.finishMessaging();
      ebCheckIfAdConfigExist();
      break;
  }
}

function _sendAddInEyeVerificationToServer(addInEyeObj) {
  var addineyePipe = "";
  if (addInEyeObj) {
    var scriptSrc = addInEyeObj.ebProtocol + addInEyeObj.ebBs + "/BurstingPipe/adServer.bs?cn=dmvld&dm=" + addInEyeObj.addineyeDomain;
    var scriptObj = document.createElement('script');
    scriptObj.src = scriptSrc;
    scriptObj.setAttribute('async', true);
    document.body.insertBefore(scriptObj, document.body.firstChild);
  }
}

function ebCheckIfAdConfigExist() {
  if (typeof(ebAdConfig) != "undefined") {
    try {
      var typeofVar = eval("typeof(" + ebAdConfig + ")");
    } catch (e) {}
    if ((typeof(ebO) != "undefined") && (typeofVar !== "undefined" || ebO.adConfig)) {
      if (typeofVar === "object") {
        eval("ebO.adConfig = " + ebAdConfig);
      }
      if (ebIsDataValid()) {
        ebWriteScript();
      }
    } else {
      window.setTimeout("ebCheckIfAdConfigExist()", 10);
    }
  }
}

function ebHandlePostMessageAddinEye(msgData) {
  if (msgData.data) {
    var dataParsed = ebParseServerData(msgData.data);
    if (dataParsed.type == INNERIFRAMEMessage.INIT) {
      ebOSetter(dataParsed.data.ebO);
      ebGlobalVariableSetter(dataParsed.data);
      ebSetSecretTags(dataParsed.data.secretTagData);
      if (ebIsDataValid()) {
        ebWriteScript();
      }
    }
    if (dataParsed.type == INNERIFRAMEMessage.VERIFY) {
      _sendAddInEyeVerificationToServer(dataParsed.data);
    }
  }
}

function ebParseServerData(text, reviver) {
  var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
  var j;

  function walk(holder, key) {
    var k, v, value = holder[key];
    if (value && typeof value === "object") {
      for (k in value) {
        if (Object.hasOwnProperty.call(value, k)) {
          v = walk(value, k);
          if (v !== undefined) {
            value[k] = v
          } else {
            delete value[k]
          }
        }
      }
    }
    return reviver.call(holder, key, value)
  }
  cx.lastIndex = 0;
  if (cx.test(text)) {
    text = text.replace(cx, function(a) {
      return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
    })
  }
  if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
    j = eval("(" + text + ")");
    return typeof reviver === "function" ? walk({
      "": j
    }, "") : j
  }
  throw new SyntaxError("JSON.parse")
}

function ebSetBSRequest(objReq) {
  ebAdConfig = ebFormat("AdConfig_{0}", objReq.adId);
  var rnd = new String(Math.random());
  rnd = rnd.substr(rnd.indexOf(".") + 1);
  var scriptSrc = ebFormat("{0}{1}/BurstingPipe/adServer.bs?cn=getdata&getserverdata=configfile&ai={2}&ord={3}", objReq.ptcl, objReq.bs, objReq.adId, rnd);
  var scriptObj = document.createElement('script');
  scriptObj.src = scriptSrc;
  scriptObj.setAttribute('async', true);
  document.body.insertBefore(scriptObj, document.body.firstChild);
}

function ebOSetter(ebOData) {
  ebO = ebOData;
  ebO.innerIframe = true;
  ebOArr = window.ebOArr || [];
  ebOArr[ebOArr.length] = ebO;
}

function ebSetSecretTags(data) {
  gstrEbPreLoadScripts = (data.gstrEbPreLoadScripts) ? data.gstrEbPreLoadScripts : undefined;
  gnEbLowBWLimit = (data.gnEbLowBWLimit) ? data.gnEbLowBWLimit : undefined;
  gstrEbPreLoadScripts = (data.gstrEbPreLoadScripts) ? data.gstrEbPreLoadScripts : undefined;
  gfEbInlineBanner = (data.gfEbInlineBanner) ? data.gfEbInlineBanner : undefined;
  gEbEyeDivRefElement = (data.gEbEyeDivRefElement) ? data.gEbEyeDivRefElement : undefined;
  gstrEbDisplayPos = (data.gstrEbDisplayPos) ? data.gstrEbDisplayPos : undefined;
  gnEbMinZIndex = (data.gnEbMinZIndex) ? data.gnEbMinZIndex : undefined;
  gfEbForceStreaming = (data.gfEbForceStreaming) ? data.gfEbForceStreaming : undefined;
  gfEbUseIntFlash = (data.gfEbUseIntFlash) ? data.gfEbUseIntFlash : undefined;
  gEbfLoadAsAS2 = (data.gEbfLoadAsAS2) ? data.gEbfLoadAsAS2 : undefined;
  gEbURLTokens = (data.gEbURLTokens) ? data.gEbURLTokens : undefined;
}

function ebGlobalVariableSetter(data) {
  ebPtcl = data.ebPtcl;
  ebBigS = data.ebBigS;
  ebResourcePath = data.ebResourcePath;
  ebRand = data.ebRand;
  ebPli = data.ebPli;
  ebAdID = data.ebAdID;
}

function ebWriteScript() {
  ebPreloadScripts("append", function() {
    var ebSrc = ebFormat("{0}/Ad{1}/eb{2}.js", ebBigS, ebO.scv, ebO.tn);
    var scriptObj = document.createElement('script');
    scriptObj.src = ebSrc;
    scriptObj.setAttribute('async', true);
    document.body.insertBefore(scriptObj, document.body.firstChild);
  });
}

function ebPreloadScripts(method, callback) {
  _customScriptArr = [];
  _customScriptBigScriptCallBack = null;
  try {
    var mmRandom = parseInt(Math.random() * 10);
    if (mmRandom == 5) {
      if (!window.ebPli) {
        window.ebPli = 0;
      }
      var protocol = (document.location.protocol == "https:") ? "https://" : "http://";
      var trackRnd = parseInt(Math.random() * 10000000000);
      var trackImg = new Image();
      var trackUrl = protocol + "bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=19&mc=imp&pli=2394928&PluID=0&rtu=-1&pcp=" + ebPli + "&ord=" + trackRnd;
      trackImg.src = trackUrl;
    }
  } catch (e) {}
  if (!window.gstrEbPreLoadScripts) {
    if (typeof(callback) == 'function') {
      callback();
    }
    return;
  }
  var scripts = gstrEbPreLoadScripts.split(";");
  if (typeof(callback) == 'function') {
    this._customScriptBigScriptCallBack = callback;
  }
  loadCustomScript(scripts, method);
}

function addScriptElement(scriptElement, element) {
  var containerElement;
  var afterElement;
  if (element) {
    containerElement = element;
    if (containerElement.childNodes.length == 0) {
      var newdiv = document.createElement("div");
      newdiv.style.display = "none";
      element.appendChild(newdiv);
    }
  } else {
    containerElement = document.head || document.documentElement;
  }
  afterElement = containerElement.firstChild;
  containerElement.insertBefore(scriptElement, afterElement);
}

function loadCustomScript(customScriptArr, method) {
  try {
    var paramsObj = {};
    if (typeof(customScriptArr) != "undefined") {
      while (customScriptArr.length > 0 && customScriptArr[customScriptArr.length - 1] == "") {
        customScriptArr.pop();
      }
      paramsObj.CSArray = customScriptArr;
      for (var i = 0; i < customScriptArr.length; i++) {
        if (customScriptArr[i].substr(0, 4) != "http") {
          customScriptArr[i] = ebResourcePath + "CustomScripts/" + customScriptArr[i];
        }
        this._customScriptArr[i] = {};
        this._customScriptArr[i].cs = customScriptArr[i];
        this._customScriptArr[i].loaded = false;
        if (method != "append") {
          document.write("<SCR" + "IPT src='" + this._customScriptArr[i].cs + "'></SCR" + "IPT>");
        }
      }
      if (method == "append") {
        this.customScriptsLoader(paramsObj);
      } else {
        this._customScriptBigScriptCallBack();
      }
    }
  } catch (e) {}
}

function customScriptsLoader(paramsObj) {
  try {
    if (typeof(paramsObj) != "undefined" && paramsObj.CSArray && paramsObj.CSArray.length > 0) {
      var customScript = paramsObj.CSArray.pop();
      paramsObj.index = paramsObj.CSArray.length;
      var $this = this;
      var currentIndex = parseInt(paramsObj.index);
      this.scriptTag(customScript, function() {
        $this.handleCustomScriptsLoaded(currentIndex);
      }, paramsObj);
      this.customScriptsLoader(paramsObj);
    }
  } catch (e) {}
}

function scriptTag(src, callback, callBackParams) {
  try {
    var callBackStr = callback.toString();
    var doc = callBackParams && callBackParams.currDoc ? callBackParams.currDoc : document;
    var scriptElem = this.createScriptElement(doc, 'script', 'text/' + (src.type || 'javascript'), src.src || src);
    scriptElem.onreadystatechange = scriptElem.onload = function() {
      var state = scriptElem.readyState;
      if (typeof(callback) == 'function' && !callback.done && (!state || /loaded|complete/.test(state))) {
        callback.done = true;
        callback(callBackParams);
      }
    };
    if (!callBackParams || !callBackParams.containerId) {
      addScriptElement(scriptElem);
    } else {
      var refScriptElem = doc.getElementById(callBackParams.containerId);
      addScriptElement(scriptElem, refScriptElem);
    }
  } catch (e) {}
}

function handleCustomScriptsLoaded(currentIndex) {
  try {
    var index = currentIndex;
    if (this._customScriptArr && this._customScriptArr[index]) {
      this._customScriptArr[index].loaded = true;
    }
    if (areAllCustomScriptsLoaded()) {
      if (typeof(this._customScriptBigScriptCallBack) == 'function') {
        this._customScriptBigScriptCallBack();
      }
    }
  } catch (e) {}
}

function areAllCustomScriptsLoaded() {
  try {
    if (this._customScriptArr) {
      for (var i = 0; i < this._customScriptArr.length; i++) {
        if (!this._customScriptArr[i].loaded) {
          return false;
        }
      }
      return true;
    }
  } catch (e) {}
}

function createScriptElement(doc, tagName, tagType, src) {
  try {
    var scriptElem = doc.createElement(tagName);
    scriptElem.type = tagType;
    scriptElem.src = src;
    scriptElem.async = false;
    return scriptElem;
  } catch (e) {}
}

function ebFormat(str) {
  for (var i = 1; i < arguments.length; i++) {
    str = str.replace(new RegExp('\\{' + (i - 1) + '\\}', 'gi'), "" + arguments[i]);
  }
  return str;
}

function ebIsDataValid() {
  var domains = typeof(certifiedDomains) != "undefined" ? certifiedDomains : ["ds.serving-sys.com", "bs.serving-sys.com", "ds.serving-sys-dev4.com", "bs.serving-sys-dev4.com"];
  return ebValidateUrlDomain(domains, [ebBigS, ebResourcePath, ebO.sms]);
}

function ebValidateUrlDomain(certDomains, urls) {
  for (var i = 0; i < urls.length; i++) {
    if (urls.hasOwnProperty(i) && !urls[i]) {
      return false;
    }
    var domain;
    var domIndex = 0;
    urls[i] = urls[i].toLowerCase();
    if (urls[i].indexOf('http://') !== -1 || urls[i].indexOf('https://') !== -1) {
      domIndex = 2;
    }
    var splited = urls[i].split("/");
    if (splited.length > domIndex) {
      domain = urls[i].split("/")[domIndex];
    }
    if (arrayContains(certDomains, domain) === -1) {
      return false;
    }
  }
  return true;
}

function arrayContains(arr, obj, start) {
  for (var i = (start || 0), j = arr.length; i < j; i++) {
    if (arr[i] === obj) {
      return i;
    }
  }
  return -1;
}

function AddinEyePostMessage() {}
AddinEyePostMessage.prototype = {
  init: function() {
    this._listenToMessages();
    var data = {
      type: INNERIFRAMEMessage.LOADED,
      data: INNERIFRAMEMessage.LOADED
    };
    var strData = "{\"type\":\"ebInnerIframeLoaded\",\"data\":\"ebInnerIframeLoaded\"}";
    parent.postMessage(strData, "*");
  },
  _listenToMessages: function() {
    if (window.addEventListener) window.addEventListener("message", ebHandlePostMessageAddinEye, false);
    else window.attachEvent("onmessage", ebHandlePostMessageAddinEye);
  }
};

function AddinEye() {
  var strSearch = document.location.search;
  if (strSearch.indexOf("strHTML") != -1 || strSearch.indexOf("strBanner") != -1 || strSearch.indexOf("strAie") != -1) {
    this._startAddineyeFlow();
  } else {
    this._checkDomain();
    if (window['postMessage']) {
      addinEyePostMessage = new AddinEyePostMessage();
      addinEyePostMessage.init();
    } else {
      EBG.msgProtocol.receiveMessages(ebHandleHashProtocolMsg, 10);
    }
  }
}
AddinEye.prototype = {
  _defaultDisplayPageLocation: "parent.parent",
  _startAddineyeFlow: function() {
    strHTML = "";
    fIsOOB = true;
    var strSearch = document.location.search;
    var myAddInEyePos = strSearch.indexOf("strAie");
    if (myAddInEyePos != -1) {
      this._handleAddIneyeVerification(strSearch);
    } else {
      var myHTMLpos = strSearch.indexOf("strHTML");
      if (myHTMLpos != -1) {
        myHTMLpos += 8;
        strHTML = strSearch.substr(myHTMLpos);
        strHTML = unescape(strHTML);
      } else {
        fIsOOB = false;
        myHTMLpos = strSearch.indexOf("strBanner");
        myHTMLpos += 10;
        strHTML = strSearch.substr(myHTMLpos);
        strHTML = unescape(strHTML);
        this._prepareParamsForCustomScripts(strHTML);
      }
      var nDPIndex = strHTML.indexOf("gstrEbDisplayPos");
      if (nDPIndex != -1) {
        nDPEndIndex = strHTML.indexOf(";", nDPIndex);
        strEbDP = strHTML.substr(nDPIndex, nDPEndIndex - nDPIndex);
        if (this._validateDisplayPos(strEbDP)) eval(strEbDP);
      }
      var fSameDomain = this._checkDomain();
      var fSameWindow = false;
      eval("try{fSameWindow = (" + this._defaultDisplayPageLocation + " == window)}catch(e){}");
      if (fSameDomain && !fSameWindow) {
        try {
          window.parent.name = "ebOuterIframe";
        } catch (e) {}
        this._writeTags();
      }
    }
  },
  _prepareParamsForCustomScripts: function(strHtml) {
    var paramsArray = strHtml.split("::");
    var index = paramsArray[36].indexOf("gEbBannerData");
    if (index != -1) {
      index += 15;
      window.ebRand = paramsArray[36].length > index ? paramsArray[36].substr(index) : null;
    }
    window.ebAdID = paramsArray[2] ? paramsArray[2] : null;
  },
  _handleAddIneyeVerification: function(strHtml) {
    var myAddInEyePos = strHtml.indexOf("strAie");
    var strAddInEye = "";
    if (myAddInEyePos != -1) {
      myAddInEyePos += 6;
      strAddInEye = strHtml.substr(myAddInEyePos);
      strAddInEye = unescape(strAddInEye);
      addInEyeObj = this._prepareVerificationJsonObj(strAddInEye);
      this._sendAddInEyeVerificationToServer(addInEyeObj);
    }
  },
  _prepareVerificationJsonObj: function(strHtml) {
    var strObj = {};
    var arrData = strHtml.split("::");
    strObj.addineyeDomain = arrData[0] ? arrData[0] : "";
    strObj.ebBs = arrData[1] ? arrData[1] : "bs.serving-sys.com";
    strObj.ebProtocol = arrData[2] ? arrData[2] : "http://";
    return strObj;
  },
  _sendAddInEyeVerificationToServer: function(addInEyeObj) {
    var addineyePipe = "";
    if (addInEyeObj) {
      addineyePipe = addInEyeObj.ebProtocol + addInEyeObj.ebBs + "/BurstingPipe/adServer.bs?cn=dmvld&dm=" + addInEyeObj.addineyeDomain;
      document.write("<scr" + "ipt src='" + addineyePipe + "'></scr" + "ipt>");
    }
  },
  _checkDomain: function() {
    if (typeof(gstrEbDisplayPos) != "undefined") this._defaultDisplayPageLocation = "parent." + gstrEbDisplayPos;
    var fSameDomain = false;
    eval("try{fSameDomain = (document.domain == " + this._defaultDisplayPageLocation + ".document.domain);}catch(e){fSameDomain = false;}");
    if (!fSameDomain) eval("try{document.domain = " + this._defaultDisplayPageLocation + ".document.domain;fSameDomain = true;}catch(e){fSameDomain = this._setDomain();}");
    return fSameDomain;
  },
  _setDomain: function() {
    var d = document.domain;
    while (d.split(".").length >= 2) {
      try {
        fValid = 0;
        document.domain = d;
        var strDispDomain = this._defaultDisplayPageLocation + ".document.domain";
        var strDomain = eval("try{" + strDispDomain + ";fValid=1}catch(e){}");
        if (fValid) return true;
      } catch (e) {}
      d = d.substr(d.indexOf(".") + 1, d.length);
    }
    return false;
  },
  _writeTags: function() {
    try {
      self.document.write("<scr" + "ipt>var gfEbOnInternalIframe=true;</scr" + "ipt>");
      if (fIsOOB) {
        strHTML = strHTML.replace(/ebsafetag/g, "script");
        self.document.write(strHTML);
      } else {
        eval(strHTML);
        var scriptSrc = "";
        if (typeof(ebSmallS) != "undefined") scriptSrc = ebSmallS = unescape(ebSmallS);
        else {
          scriptSrc = ebSrc = (typeof(ebSrc) != "undefined") ? unescape(ebSrc) : unescape(ebBigS) + ebBigSF;
          ebResourcePath = unescape(ebResourcePath);
          ebPreloadScripts("write");
        } if (scriptSrc) document.write("<scr" + "ipt src='" + scriptSrc + "'></scr" + "ipt>");
      }
      self.document.close();
    } catch (e) {}
  },
  _validateDisplayPos: function() {
    strPos = strPos.replace(/(gstrEbDisplayPos|parent|top|self|window|\.|=||\"|\')/gi, "");
    return (strPos.length == 0);
  },
  _trackPub: function() {
    var mmRandom = parseInt(Math.random() * 10);
    if (mmRandom == 5) {
      var protocol = (document.location.protocol == "https:") ? "https://" : "http://";
      var trackRnd = parseInt(Math.random() * 10000000000);
      var trackImg = new Image();
      var trackUrl = protocol + "bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=19&mc=imp&pli=2394928&PluID=0&rtu=-1&ord=" + trackRnd;
      trackImg.src = trackUrl;
    }
  }
};
try {
  addinEye = new AddinEye();
} catch (e) {}
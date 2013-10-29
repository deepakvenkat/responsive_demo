if(typeof window.jQuery === "undefined"){
	window.jQuery = window.Zepto;
}

/* jqModal - Minimalist Modaling with jQuery
  *   (http://dev.iceburg.net/jquery/jqModal/)
  *
  * Copyright (c) 2007,2008 Brice Burgess <bhb@iceburg.net>
  * Dual licensed under the MIT and GPL licenses:
  *   http://www.opensource.org/licenses/mit-license.php
  *   http://www.gnu.org/licenses/gpl.html
  *
  * $Version: 07/06/2008 +r13
  */
(function(a){a.fn.jqm=function(d){var e={overlay:50,overlayClass:"jqmOverlay",closeClass:"jqmClose",trigger:".jqModal",ajax:f,ajaxText:"",target:f,modal:f,toTop:f,onShow:f,onHide:f,onLoad:f};return this.each(function(){if(this._jqm)return c[this._jqm].c=a.extend({},c[this._jqm].c,d);b++,this._jqm=b,c[b]={c:a.extend(e,a.jqm.params,d),a:f,w:a(this).addClass("jqmID"+b),s:b},e.trigger&&a(this).jqmAddTrigger(e.trigger)})},a.fn.jqmAddClose=function(a){return l(this,a,"jqmHide")},a.fn.jqmAddTrigger=function(a){return l(this,a,"jqmShow")},a.fn.jqmShow=function(b){return this.each(function(){a.jqm.open(this._jqm,b)})},a.fn.jqmHide=function(b){return this.each(function(){a.jqm.close(this._jqm,b),window.nymag.popupInline="off",a("#fb-box-shadow").remove()})},a.jqm={hash:{},open:function(b,g){var i=c[b],k=i.c,l="."+k.closeClass,m=parseInt(i.w.css("z-index")),m=m>0?m:6e3,n=a("<div></div>").css({height:"100%",width:"100%",position:"fixed",left:0,top:0,"z-index":m-1,opacity:k.overlay/100});if(i.a)return f;i.t=g,i.a=!0,i.w.css("z-index",m),k.modal?(d[0]||j("bind"),d.push(b)):k.overlay>0?i.w.jqmAddClose(n):n=f,(i.o=n)?window.nymag.popupInline!="on"&&n.addClass(k.overlayClass).prependTo("body").fadeIn():f;if(e){a("html,body").css({height:"100%",width:"100%"});if(n){n=n.css({position:"absolute"})[0];for(var o in{Top:1,Left:1})n.style.setExpression(o.toLowerCase(),"(_=(document.documentElement.scroll"+o+" || document.body.scroll"+o+"))+'px'")}}if(k.ajax){var p=k.target||i.w,q=k.ajax,p=typeof p=="string"?a(p,i.w):a(p),q=q.substr(0,1)=="@"?a(g).attr(q.substring(1)):q;p.html(k.ajaxText).load(q,function(){k.onLoad&&k.onLoad.call(this,i),l&&i.w.jqmAddClose(a(l,i.w)),h(i)})}else l&&i.w.jqmAddClose(a(l,i.w));return k.toTop&&i.o&&i.w.before('<span id="jqmP'+i.w[0]._jqm+'"></span>').insertAfter(i.o),k.onShow?k.onShow(i):i.w.show(),h(i),f},close:function(b){var e=c[b];return e.a?(e.a=f,d[0]&&(d.pop(),d[0]||j("unbind")),e.c.toTop&&e.o&&a("#jqmP"+e.w[0]._jqm).after(e.w).remove(),e.c.onHide?e.c.onHide(e):(e.w.hide(),e.o&&e.o.fadeOut("fast",function(){a(this).remove()})),f):f},params:{}};var b=0,c=a.jqm.hash,d=[],e=a.browser.msie&&a.browser.version=="6.0",f=!1,g=a('<iframe src="javascript:false;document.write(\'\');" class="jqm"></iframe>').css({opacity:0}),h=function(b){e&&(b.o?b.o.html('<p style="width:100%;height:100%"/>').prepend(g):a("iframe.jqm",b.w)[0]||b.w.prepend(g)),i(b)},i=function(b){try{a(":input:visible",b.w)[0].focus()}catch(c){}},j=function(b){a()[b]("keypress",k)[b]("keydown",k)[b]("mousedown",k)},k=function(b){var e=c[d[d.length-1]],f=!a(b.target).parents(".jqmID"+e.s)[0];return f&&i(e),!f},l=function(b,d,e){return b.each(function(){var b=this._jqm;a(d).each(function(){this[e]||(this[e]=[],a(this).click(function(){for(var a in{jqmShow:1,jqmHide:1})for(var b in this[a])c[this[a][b]]&&c[this[a][b]].w[a](this);return f})),this[e].push(b)})})}})(jQuery)

function lbPop(a){a=nym.extend({name:null,height:null,width:null,divClass:"lbPop",url:null,bg:!0,closeBtn:!1,htmlText:null,overlay:50,overlayBG:null},a||{});if(!a.name&&!a.height&&!a.width&&!a.url&&!a.htmlText)return;var b=$("#lb-"+a.name),c=0;window.scrollY?(c=window.scrollY+(window.innerHeight-a.height)/2,c=c<window.scrollY?window.scrollY:c):(c=document.documentElement.scrollTop+(document.documentElement.clientHeight-a.height)/2,c=c<document.documentElement.scrollTop?document.documentElement.scrollTop:c),c<23&&(c=23),a.closeBtn&&(c+=17),b.length||(b=$("<div>").attr("id","lb-"+a.name).addClass(a.divClass).css({height:a.height,width:a.width}),a.bg||b.css({"background-color":"transparent","-moz-box-shadow":"none","-webkit-box-shadow":"none","box-shadow":"none"}),a.htmlText&&b.append(a.htmlText),b.prependTo("body").hide().jqm({overlay:a.overlay,onShow:function(c){var d=($(window).width()-a.width)/2;d=d<0?0:d,b.css({left:d}),c.w.show(),a.overlayBG&&c.o.css("background",a.overlayBG),b.html().length||b.load(a.url,function(){$(this).css("background-image","none"),a.closeBtn&&(b.append("<a class='gen-close' href='#'>close</a>"),$("a.gen-close",b).click(function(){return b.jqmHide(),!1}))})}}),$("a.close",b).click(function(){return b.jqmHide(),!1})),b.css({top:c}),b.jqmShow()}

if (typeof NYM === "undefined") {
    window.NYM = {}
}

NYM.dates = function () {
  return {
    convert: function (d) {
      return (d.constructor === Date ? d : d.constructor === Array ?
              new Date(d[0], d[1], d[2]) : d.constructor === Number ?
              new Date(d) : d.constructor === String ?
              new Date(d) : typeof d === "object" ?
              new Date(d.year, d.month, d.date) : NaN);
    },
    compare: function (a, b) {
      return (isFinite(a = this.convert(a).valueOf()) && isFinite(b = this.convert(b).valueOf()) ?
              (a > b) - (a < b) : NaN);
    },
    inRange: function (d, start, end) {
      return (isFinite(d = this.convert(d).valueOf()) && isFinite(start = this.convert(start).valueOf()) && isFinite(end = this.convert(end).valueOf()) ?
              start <= d && d <= end : NaN);
    }
  };
}();

// http://paulirish.com/2009/throttled-smartresize-jquery-event-handler/
// Altered by CGloddy to trigger on orientationchange for mobile devices.
if (!$.fn.smartresize) {
    (function ($, sr) {
        if (isNaN(window.orientation)) {
            // Desktop version tied to resize event.
            // debouncing function from John Hann
            // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
            var debounce = function (func, threshold, execAsap) {

                var timeout;

                return function debounced() {
                    var obj = this,
                        args = arguments;

                    function delayed() {

                        if (!execAsap) {

                            func.apply(obj, args);
                        }
                        timeout = null;
                    };

                    if (timeout) {
                        clearTimeout(timeout);
                    } else if (execAsap) {
                        func.apply(obj, args);
                    }

                    timeout = setTimeout(delayed, threshold || 100);
                };
            }
            var jq = (window.jQuery || window.Zepto);
            jq.fn[sr] = function (fn) {
                return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
            };
        } else {
            // Mobile version tied to orientation event.
            var jq = (window.jQuery || window.Zepto);
            jq.fn[sr] = function (fn) {
                return fn ? this.bind('orientationchange', fn) : this.trigger(sr);
            };
        }
    })(window.jQuery || window.Zepto, 'smartresize');
}

// debouncing function from John Hann
// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
(function ($, sr) {
    var debounce = function (func, threshold, execAsap) {
        var timeout;

        return function debounced() {
            var obj = this,
                args = arguments;

            function delayed() {
                if (!execAsap) func.apply(obj, args);
                timeout = null;
            };

            if (timeout) clearTimeout(timeout);
            else if (execAsap) func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 100);
        };
    }
    // smartresize
    jQuery.fn[sr] = function (fn) {
        return fn ? this.bind('scroll', debounce(fn)) : this.trigger(sr);
    };

})(jQuery, 'smartscroll');

NYM.domains = function () {
  return {
    hostname: window.location.hostname,
    // conditional for W3C vs. IE
    origin: (window.location.origin) ? window.location.origin : window.document.location.protocol + "//" + window.document.location.host,
    prod: false,
    local: false,
		fifPath: NYM.config.fifPath || null,
    init: function () {
    if(this.fifPath === null) {
      var d = this.hostname.split('.');
        if ((d[0] === 'nymag' && d.length === 2) || (d[1] === 'vulture' && d.length === 3) || (d[0] === 'grubstreet' || d[1] === 'grubstreet' && d.length <= 3)) {
          this.prod = true;
        } else if (this.hostname === 'localhost' || d[0].match('author') || d[0].match('publish') || d[0].match('dispatch') || window.location.port === '4502') {
          this.local = true;
        }
      }
    }
  };
}();
NYM.domains.init();

/*------------ ads intercept, options - backgroundColor,closeButton:true,creativeWidth,creativeHeight,urlToCreative ----*/
NYM.intercept = function (o) {
  var o = $.extend({
    urlToCreative: "",
    backgroundColor: "#000",
    closeButton: true,
    creativeWidth: 600,
    creativeHeight: 400
  }, o || {});

  var marginLeft = -(o.creativeWidth / 2);
  var marginTop = -(o.creativeHeight / 2);

  var overlay = $('<div id="ad-intercept-overlay"></div>');
  var closeBtn = $('<div class="gen-close">x</div>');
  var wrap = $('<div id="ad-intercept-wrap"></div>');
  var content = $('<div id="ad-intercept-content"></div>');

  if (o.closeButton) wrap.append(closeBtn);
  wrap.append(content);
  wrap.appendTo(overlay);

  overlay.css({
    'backgroundColor': o.backgroundColor
  }).appendTo($('html'));

  wrap.css({
    'marginLeft': marginLeft,
    'marginTop': marginTop
  });

  $.ajax({
    type: 'GET',
    url: o.urlToCreative,
    dataType: 'html',
    success: function (data) {
	    $(data).appendTo(content);
    }
  });

  closeBtn.on('click', function () {
    overlay.fadeOut().empty();
  })
};
/* --- END NYM.intercept() --- */

NYM.dfp = function () {
  "use strict";
  var C = {
    host: 'http://ad.doubleclick.net',
    site: '',
    sites: ["nymag", "vulture", "thecut", "grubstreet"],
    zone: '',
    zones: ['bestofny', 'bestdoctors', 'holidays', 'lawyers', 'magazine', 'guides', 'guides', 'travel', 'arts', 'news', 'fashionshows', 'fashion', 'homedesign', 'movies', 'nightlife', 'restaurants', 'shopping', 'weddings', 'everything', 'family', 'beauty', 'myny', 'test', 'homepage', 'kids'],
    kw: (document.getElementsByName('keywords').length) ? document.getElementsByName('keywords')[0].content : "null",
    kwkv: '',
    hd: '',
    fif: (NYM.domains.fifPath != null) ? NYM.domains.fifPath : (NYM.domains.prod) ? 'http://nymag.com/ads/fif-prod.html' : (document.location.href.indexOf('/designers/') != -1) ? 'http://nymag.com/ads/fif-prod.html' : (NYM.domains.local) ? 'http://nymag.com/ads/fif-prod.html' : 'http://nymag.com/ads/fif-prod.html',
    fifClass: "nym-ad",
    path: document.location.pathname,
    origin: NYM.domains.origin,
    tile: 0,
    adId: 0,
    counter: 1,
    html5: (Modernizr.postmessage) ? true : false,
    fifAds: [],
    tileGroup: '',
    scrollView: false,
    responsive: false,
    takeover: false,
    takeoverPreview: false,
    loadingFifAds: false,
    debug: (Modernizr.localstorage) ? localStorage.getItem("debugads") : false,
        //debug: true,
    googleAdClient: "ca-pub-9464321798359467",
    adsToSequence: [],
    sequencingAds: false,
    viewportWidth: 980,
    viewportHeight: 550,
    ord: Math.round(Math.random() * 1000000000)
  };

  return {
    /* GENERIC EVENT LISTENER FOR ALL BROWSERS
     * ====================================== */
    listen: function (evnt, elem, func) {
      var r;
      if (elem.addEventListener) {
        //W3C DOM
        elem.addEventListener(evnt, func, false);
      } else if (elem.attachEvent) {
        //Internet Explorer
        r = elem.attachEvent("on" + evnt, func);
        return r;
      }
    },

    confirmSchedule: function (id) {
      if (NYM.config.ads) {
        var adConfigs = (NYM.config.ads.schedule) ? NYM.config.ads.schedule : [],
            browserUrl = document.location.toString(),
            d = new Date(),
            i, j, configUrl, start, end, adId;

        for (i = 0, j = adConfigs.length; i < j; i += 1) {
          configUrl = adConfigs[i].url;
          adId = adConfigs[i].adId;
          if (browserUrl.match(configUrl) && id === adId) {
            start = adConfigs[i].active;
            end = adConfigs[i].inactive;
            return NYM.dates.inRange(d, start, end);
          }
        }
        return false;
      }
  	},

  	confirmAdSense: function (id) {
      if (NYM.config.ads) {
        var adConfigs = (NYM.config.ads.adsense) ? NYM.config.ads.adsense : [],
            d = new Date(),
            i, j, configUrl, start, end;

        for (i = 0, j = adConfigs.length; i < j; i += 1) {
          if (id === adConfigs[i].adId) {
            start = adConfigs[i].active;
            end = adConfigs[i].inactive;
            return NYM.dates.inRange(d, start, end);
          }
        }
    		return false;
      }
    },

    confirmTakeover: function () {
      if (NYM.config.ads) {
        var adConfigs = (NYM.config.ads.takeovers) ? NYM.config.ads.takeovers : [],
            pageSitename = (NYM.config.advertising.sitename) ? NYM.config.advertising.sitename : null,
            pageTakeover = (NYM.config.advertising.takeover) ? NYM.config.advertising.takeover : null,
            d = new Date(),
            u = window.location.toString(),
            i, j, style;

        for (i = 0, j = adConfigs.length; i < j; i += 1) {

          if (adConfigs[i].sitename === pageSitename &&
              adConfigs[i].takeover === pageTakeover &&
              u.match(/testNymTakeover=/) &&
              u.match(adConfigs[i].campaign.replace(/\s/g, '').toLowerCase())) {

                C.takeover = true;
                C.takeoverPreview = true;
                adConfigs[i].takeoverFn(adConfigs[i]);
          } else if (!C.takeoverPreview &&
                      adConfigs[i].sitename === pageSitename &&
                      adConfigs[i].takeover === pageTakeover &&
                      NYM.dates.inRange(d, adConfigs[i].active, adConfigs[i].inactive) &&
                      !u.match(/testNymTakeover=/)) {
            C.takeover = true;
            adConfigs[i].takeoverFn(adConfigs[i]);
          }
        }
        return false;
      }
    },

    /* DETECT IF ELEMENT IS IN VIEWPORT
    * ====================================== */
    inViewport: function (elem) {
      var me = elem.getBoundingClientRect();
      return me.top - 200 < (window.innerHeight || document.body.clientHeight);
    },

    /* VIEWPORT SIZE FOR BROWSERS THAT DO NOT
    * SUPPORT MATCHMEDIA
    * ====================================== */
    getViewportSize: function () {
      C.viewportWidth = $(window).width();
      C.viewportHeight = $(window).height();
    },

    /* MQ
    * ====================================== */
    mq: function (media, html4viewport) {
      if (window.matchMedia) {
        return Modernizr.mq(media);
      } else if (html4viewport) {
        var winWidth = C.viewportWidth;
        var minmax = html4viewport.split(',');
        var min = minmax[0];
        var max = (minmax.length > 1) ? minmax[1] : winWidth;
        if (min <= winWidth && max >= winWidth) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },

    /* FOR CACHEBUSTING
    * ====================================== */
    randomNum: function () {
      var num = Math.round(Math.random() * 1000000000);
      return num;
    },

    /* CLEAN UP STRINGS FROM ELEMENT ATTRIBUTES
    * helps with empty HTML attributes and
    * to avoid string comparisons
    * ====================================== */
    cleanString: function (string) {
      if (string === null) {
        return false;
      }
      switch (string.toLowerCase()) {
        case "true":
        case "yes":
        case "1":
          return true;
        case "false":
        case "no":
        case "0":
          return false;
        default:
          return string;
      }
    },

    /* FIND ALL FRIENDLY IFRAME WRAPPER ELEMENTS
    * default scope is entire document. can
    * pass an element selector as an argument
    * for specificity.
    * ====================================== */
    findFifAds: function (elem) {

      var adEls = [],
          rootElement = (elem) ? elem : document,
          i, j, iframeSize, adId = 0;

      // not all browsers support getElementsByClassName
      if (document.getElementsByClassName) {
        adEls = rootElement.getElementsByClassName(C.fifClass);
      } else {
        adEls = $('.' + C.fifClass);
      }

      if (adEls.length) {
        for (i = 0, j = adEls.length; i < j; i += 1) {

          if (adEls[i].getAttribute("data-iframe-size")) {
            iframeSize = adEls[i].getAttribute("data-iframe-size").split("x");
          } else {
            iframeSize = adEls[i].getAttribute("data-ad-size").split("x");
          }
          this.cacheAdInMemory(adEls[i], iframeSize);
        }
      }
    },

    /* SAVE THE AD DOM ELEMENTS TO MEMORY
    * TO SAVE ON CALLS TO THE DOM
    * ====================================== */
    cacheAdInMemory: function (adEl, iframeSize) {

      var tilegroup = this.cleanString(adEl.getAttribute("data-tilegroup"));
      if(typeof window.NYM_AD_Overrides === "undefined"){ window.NYM_AD_Overrides = {};}

      C.fifAds.push({
        elem: adEl,
        name: adEl.id,
        sz: this.cleanString(adEl.getAttribute("data-ad-size")),
        width: iframeSize[0],
        height: iframeSize[1],
        media: this.cleanString(adEl.getAttribute("data-media")),
        html4viewport: this.cleanString(adEl.getAttribute("data-html4-viewport")),
        scrollview: (typeof NYM_AD_Overrides.lazyLoad !== "undefined") ? NYM_AD_Overrides.lazyLoad : this.cleanString(adEl.getAttribute("data-scrollview")),
        defer: this.cleanString(adEl.getAttribute("data-defer")),
        onpageload: this.cleanString(adEl.getAttribute("data-onpageload")),
        fuie: this.cleanString(adEl.getAttribute("data-fuie")),
        tilegroup: tilegroup,
        loaded: this.cleanString(adEl.getAttribute("data-loaded")),
        scheduled: this.cleanString(adEl.getAttribute("data-scheduled")),
        adsense: this.cleanString(adEl.getAttribute("data-google-ad-slot")),
        takeoverDefer: this.cleanString(adEl.getAttribute("data-takeover-defer")),
        adhocKeyValue: this.cleanString(adEl.getAttribute("data-adhoc-keyvalue")),
        active: false,
        adid: C.adId += 1,
        tile: this.tileNumber(tilegroup)
      });
    },

    /* LOAD/WRITE 'RESPONSIVE' FRIENDLY iFRAME ADS
    * this assumes support for
    * HTML5 postMessage and CSS3 media queries
    * =========================================== */
    loadFifAds: function () {

      this.findFifAds();
      if (C.fifAds.length) {
        C.loadingFifAds = true;

        if (!C.responsive) {
          C.responsive = true;
          //jQuery plugin for resize junkies
          $(window).smartresize(function () {
            if (C.viewportWidth !== $(window).width() || C.viewportHeight !== $(window).height()) {
              NYM.dfp.getViewportSize();
              NYM.dfp.loadFifAds();
            }
          }, 500);
        }

        if (!C.scrollView) {
          C.scrollView = true;
          $(window).smartscroll(function () {
            NYM.dfp.loadFifAds();
          }, 400);
        }

        for (var i = 0, j = C.fifAds.length; i < j; i += 1) {

          if (!(C.fifAds[i].active)) {
            C.fifAds[i].active = true;
            C.fifAds[i].elem.className = C.fifClass + "-active";
          }
          // if an ad is supposed to be scheduled and it's not active
          if (C.fifAds[i].scheduled && !(NYM.dfp.confirmSchedule(C.fifAds[i].name))) {
            C.fifAds[i].defer = true;
            C.fifAds[i].elem.setAttribute("data-defer", "true");
          }

  		    //if (C.fifAds[i].onpageload || C.fifAds[i].defer || (C.takeover && C.fifAds[i].takeoverDefer)) {
  		    if (C.fifAds[i].onpageload || C.fifAds[i].defer) {
            continue;
          }

          if (C.fifAds[i].scrollview && !this.inViewport(C.fifAds[i].elem)) {
            $(C.fifAds[i].elem).css('visibility', 'hidden');
            continue;
          }

          if (!(C.fifAds[i].loaded) && NYM.dfp.mq(C.fifAds[i].media, C.fifAds[i].html4viewport)) {
            C.fifAds[i].loaded = true;

            if (C.fifAds[i].scrollview) {
              C.fifAds[i].scrollview = false;
              $(C.fifAds[i].elem).css('visibility', 'visible');
            }

            if (!this.confirmAdSense(C.fifAds[i].name)) {
              C.adsToSequence.push(C.fifAds[i]);
            }

          } else if (!NYM.dfp.mq(C.fifAds[i].media, C.fifAds[i].html4viewport)) {
            $(C.fifAds[i].elem).addClass("hideMe");
          } else {
            $(C.fifAds[i].elem).removeClass("hideMe");
          }

          if ($('.ssAdTop div:not(.hideMe)').length > 0) {
            $('.ssAdTopfalse')
              .removeClass('ssAdTopfalse')
              .addClass('ssAdToptrue');
          } else {
            $('.ssAdToptrue')
              .removeClass('ssAdToptrue')
              .addClass('ssAdTopfalse');
          }
        }
      }

      if (C.adsToSequence.length > 0 && !C.sequencingAds) {
        C.sequencingAds = true;
        NYM.dfp.sequenceFifAds();
      }
    },

    /* Call the first ad immediately, then wait a bit before calling the others.
    * ====================================== */
    sequenceFifAds: function () {
      var firstFifAd = C.adsToSequence.shift();
      NYM.dfp.writeFifAd(firstFifAd);
      NYM.dfp.delayAdCall();
    },

    /* Recursive function to delay each subsequent ad call
    * ====================================== */
    delayAdCall: function () {
      if (C.adsToSequence.length > 0) {
        setTimeout(function () {
          var nextFifAd = C.adsToSequence.shift();
          NYM.dfp.writeFifAd(nextFifAd);
          NYM.dfp.delayAdCall();
        }, 500);
      } else if (C.adsToSequence.length === 0) {
        C.sequencingAds = false;
        C.loadingFifAds = false;
      }
    },

    /* TODO
    * ====================================== */
    writeFifAd: function (fifAd) {

      var ad = document.createElement("iframe");
      ad.src = C.fif + "#" + encodeURIComponent(this.buildAdUrl(fifAd.sz, fifAd.adid, fifAd.tile, fifAd.adhocKeyValue));
      ad.scrolling = "no";
      ad.frameBorder = 0;
      ad.width = fifAd.width;
      ad.height = fifAd.height;
      ad.id = "ad-iframe-" + fifAd.adid;
      ad.className = "ad-iframe";

      fifAd.elem.innerHTML = "";
      fifAd.elem.appendChild(ad);
      fifAd.elem.setAttribute("data-loaded", "true");
      $(fifAd.elem).removeClass("hideMe");
    },

    /* TODO
    * ====================================== */
    tileNumber: function (tilegroup) {

      var arr = [];
      if (tilegroup) {

        if (tilegroup !== C.tileGroup && C.tile <= 16) {
          C.tileGroup = tilegroup;
          C.tile += 1;
        }

        // check the array for a match on an existing tilegroup
        for (var t = arr.length; t--;) {
          if (tilegroup === arr[t].group) {
            C.tile = arr[t].tile;
          }
        }

        //add the tile and tilegroup to an array
        arr.push({
          tile: C.tile,
          group: tilegroup
        });

      } else if (C.tile <= 16) {
        C.tile += 1;
      }

      return C.tile;
    },

    /* TODO
    * ====================================== */
    deferload: function (elem) {
      var elemID, elementsToDeferload = [],
          lookup = {};

      for (var i = 0, j = elem.length; i < j; i += 1) {
        // while looping, perform DOM manipulation here

        if (this.cleanString(elem[i].getAttribute("data-defer")) && elem[i].jquery) {
          elemID = $(elem[i]).attr("id");
          $(elem[i]).attr("data-defer", "false");
          elementsToDeferload.push(elemID);
        } else if (this.cleanString(elem[i].getAttribute("data-defer")) && elem[i].nodeType) {
          elemID = elem[i].id;
          elem[i].setAttribute("data-defer", "false");
          elementsToDeferload.push(elemID);
        }

      }

      for (var x in elementsToDeferload) {
        lookup[elementsToDeferload[x]] = elementsToDeferload[x];
      }
      for (var y in C.fifAds) {
        if (typeof lookup[C.fifAds[y].name] !== 'undefined') {
          C.fifAds[y].defer = false;
        }
      }
      if (elementsToDeferload.length > 0) {
        NYM.dfp.loadFifAds();
      }
    },

    /* TODO
    * ====================================== */
    reload: function (elem) {

      var elemID, elementsToReload = [],
          lookup = {},
          i, j;

      for (i = 0, j = elem.length; i < j; i += 1) {
        // while looping, perform DOM manipulation here
        if (elem[i].jquery) {
          elemID = $(elem[i]).attr("id");
          $(elem[i]).attr("data-loaded", "false");
        } else if (elem[i].nodeType) {
          elemID = elem[i].id;
          elem[i].setAttribute("data-loaded", "false");
        }

        elementsToReload.push(elemID);
      }

      for (var x in elementsToReload) {
        lookup[elementsToReload[x]] = elementsToReload[x];
      }

      for (var y in C.fifAds) {
        if (typeof lookup[C.fifAds[y].name] !== 'undefined') {
          C.fifAds[y].loaded = false;
        }
      }
      if (elementsToReload.length > 0) {
        C.ord = NYM.dfp.randomNum();
        NYM.dfp.loadFifAds();
      }

    },

    /* RESIZE IFRAMES BASED ON INNER CONTENT
    * ====================================== */
    fifAdResizeMessage: function (data) {

      if (data[0] !== "fifAdSize") {
        return;
      }

      var iframe = document.getElementById("ad-iframe-" + data[3]),
          width = data[1],
          height = data[2];

      // make sure the width + height values return
      // something before setting the iframe
      // width and height. this tends to happen.
      if (width > 0) {
          iframe.width = width;
      }
      if (height > 0) {
          iframe.height = height;
      }

      if (data[4]) {
        iframe.parentNode.setAttribute('data-blogvertorial', data[4]);
      }
      if (data[5]) {
        iframe.parentNode.setAttribute('data-responsive', data[5]);
      }
    },

    /* LOAD ADS IMMEDIATELY VIA DOC.WRITE (yuk!)
    * ====================================== */
    loadAd: function (o) {
      var ad;
      if (o !== null) {

        if (o.scheduled && !(NYM.dfp.confirmSchedule(o.id))) {
          return;
        } else if ((!window.postMessage && o.fuie) || (this.confirmAdSense(o.id) && this.mq(o.media, o.html4viewport)) || o.onpageload) {
          this.tileNumber();
          ad = "<script src='" + this.buildAdUrl(o.sz, o.id, C.tile) + "'></scr" + "ipt>";
          document.write(ad);
        }

      }

    },

    /* BUILD THE AD URL WITH ALL THE KEY/VALUE PAIRS
    * ============================================== */
    buildAdUrl: function (sz, id, tile, adhocKeyvalue) {
      var url, site = (C.site) ? C.site : this.getSite(),
          zone = (C.zone) ? C.zone : this.getZone(),
          test = (Modernizr.localstorage && localStorage.getItem("testads")) ? ";test=true" : "",
          lv = (C.levels) ? C.levels : this.getLevels(),
          kwkv = (C.kwkv) ? C.kwkv : this.metaKeywords(),
          hd = (C.hd) ? C.hd : this.isRetina(),
          adhockv = (adhocKeyvalue) ? ';' + adhocKeyvalue : '',
          dcopt = (C.counter === 1) ? ";dcopt=ist" : ""; // the first ad written to the page gets dcopt=ist
      url = C.host + "/adj/" + site + "/" + zone + test + ";l1=" + lv.l1 + ";l2=" + lv.l2 + ";l3=" + lv.l3 + ";l4plus=" + lv.l4plus + ";pn=" + lv.pageName + kwkv + adhockv + hd + dcopt + ";sz=" + sz + ";nymid=" + id + ";tile=" + tile + ";ord=" + C.ord;
      C.counter += 1;
      return url;
    },

    getSite: function () {
      var site,
          i,
          domains = window.location.host.split('.');

      if (typeof NYM.config === "undefined" ||
          NYM.config === null ||
          typeof NYM.config.advertising === "undefined" ||
          NYM.config.advertising === null ||
          typeof NYM.config.advertising.sitename === "undefined" ||
          NYM.config.advertising.sitename === null) {

            for (i in domains) {
              if ($.inArray(domains[i], C.sites) > 0) {
                site = "nym." + domains[i];
              }
            }
            if (typeof site === "undefined") {
              site = "nym.nymag";
            }
      } else {
        site = NYM.config.advertising.sitename;
      }

      C.site = site;
      return site;
    },

    getZone: function () {
      var zone,
          i,
          classes = document.body.className.split(" ");

      if (typeof NYM.config === "undefined" ||
          NYM.config === null ||
          typeof NYM.config.advertising === "undefined" ||
          NYM.config.advertising === null ||
          typeof NYM.config.advertising.zone === "undefined" ||
          NYM.config.advertising.zone === null) {

          if (document.getElementsByName('content.hierarchy').length) {
            zone = document.getElementsByName('content.hierarchy')[0].content.split(":")[0].replace("Channel", "").replace(/ /g, "").replace(/&/g, "-").toLowerCase();
          } else {
            for (i in classes) {
              if ($.inArray(classes[i], C.zones) > 0) {
                zone = classes[i];
              }
            }
          }
      } else {
        zone = NYM.config.advertising.zone;
      }

      C.zone = zone;
      return zone;
    },

    /* BREAK DOWN THE URL FOR LEVEL KEY/VALUE PAIRS
    * ex: http://nymag.com/this/that/path/name
    * l1=this;l2=that;l3=path;l4plus=name;
    * ============================================== */
    getLevels: function () {

      var levels = {},
          path = C.path.replace("//", "/").split('/');

      C.levels = {};
      levels.pageName = (path[path.length - 1] === "") ? "index.html" : path[path.length - 1];
      C.levels.pageName = levels.pageName;
      levels.l1 = (path[1] === "") ? "homepage" : path[1];
      C.levels.l1 = levels.l1;
      levels.l2 = (path.length > 3 && path[2] !== "") ? path[2] : (levels.pageName === "*") ? "*" : "null";
      C.levels.l2 = levels.l2;
      levels.l3 = (path.length > 4 && path[3] !== "") ? path[3] : (levels.pageName === "*") ? "*" : "null";
      C.levels.l3 = levels.l3;
      levels.l4plus = (path.length > 5 && path[4] !== "") ? path.slice(4, path.length - 1).join("-") : (levels.pageName === "*") ? "*" : "null";
      C.levels.l4plus = levels.l4plus;
      levels.splash = levels.l1 === "homepage" || (levels.l2 === "null" && levels.pageName === "index.html") || (levels.l3 === "null" && levels.pageName === "index.html");
      C.levels.splash = levels.splash;
      if (C.levels.pageName === "index.html" && C.path.match("index.html") === null) {
        path += "index.html";
      }
      return levels;
    },

    /* TEST MODE
    * ====================================== */
    isTestMode: function () {
      if (Modernizr.localstorage && window.location.toString().match(/testads=true/)) {
        localStorage.setItem("testads", true);
      } else if (Modernizr.localstorage && window.location.toString().match(/testads=false/)) {
        localStorage.removeItem("testads");
      }

      if (Modernizr.localstorage && window.location.toString().match(/debugads=true/)) {
        localStorage.setItem("debugads", true);
      } else if (Modernizr.localstorage && window.location.toString().match(/debugads=false/)) {
        localStorage.removeItem("debugads");
      }
    },

    /* DETECT RETINA / HIGH DENSITY DISPLAYS
    * ====================================== */
    isRetina: function () {
      var hd = ";hd=false";
      if (window.matchMedia) {
        if (Modernizr.mq('only screen and (-webkit-min-device-pixel-ratio : 1.5),only screen and (min-device-pixel-ratio : 1.5)')) {
          hd = ";hd=true";
        }
      }
      C.hd = hd;
      return hd;
    },

  	/* LEGACY INTERCEPT ADS
    * ====================================== */
  	loadLegacyIntercept: function (data) {
      // data should arrive as an array w/ JSON stringified from a postMessage
      var o = JSON.parse(data[1]);
      lbPop(o);
    },

  	/* NEW INTERCEPT ADS
  	 * ====================================== */
  	loadNewIntercept: function (data) {
      // data should arrive as an array w/ JSON stringified from a postMessage
      var o = JSON.parse(data[1]);
      NYM.intercept(o);
  	},

    /* GET META KEYWORDS FOR KEYWORD KEY/VALUE PAIRS
    * the only good use for meta keywords, these days
    * ============================================== */
    metaKeywords: function () {

      var kw = (document.getElementsByName('keywords').length) ? document.getElementsByName('keywords')[0].content : "null",
          kws,
          kwkv = "",
          length,
          i;
              // if keywords exist, lowercase, convert all spaces to hyphens, and replace leading/trailing spaces with commas. split into an array
      kws = kw.toLowerCase().replace(/\ /g, '-').replace(/,-/g, ',').split(",");
      // if more thn 25 keywords exist, trim the array down to 25 keywords. the url string could get too long.
      if (kws.length > 25) {
        kws.splice(-kws.length, kws.length - 25);
        length = 25;
      } else {
        length = kws.length;
      }

      // format for DFP key/value pairs
      for (i = length; i--;) {
        kwkv = kwkv + ";kw=" + kws[i];
      }

      C.kwkv = kwkv;
      return kwkv;
    },

    /* INITIALIZE – CHECK FOR HTML5 SUPPORT!
    * =================================== */
    init: function () {

      if (window.postMessage) {

        // listen for incoming FiF postMessages to resize flex ads
        NYM.dfp.listen('message', window, function (event) {

          if (event.origin !== C.origin) {
            return; // security precaution: check the origin
          }

          var data = event.data.split("|");
          if (data[0] === "fifAdSize") {
            NYM.dfp.fifAdResizeMessage(data);
          } else if (data[0] === "lbPop") {
            NYM.dfp.loadLegacyIntercept(data);
          } else if (data[0] === "intercept") {
            NYM.dfp.loadNewIntercept(data);
          }

        });

        NYM.dfp.getViewportSize();
        NYM.dfp.loadFifAds();

      }

      if (Modernizr.localstorage && localStorage.getItem("testads")) {

        $('body').append('<div id="testAdsStatus"><b>:::: NYM :::: DFP :::: test=true; ::::</b><span>click to turn off</span></div>');
        $('#testAdsStatus').click(function () {
          localStorage.removeItem("testads");
          location.reload();
        });
      }
    }
  };
}();
NYM.dfp.isTestMode();
NYM.dfp.confirmTakeover();
$(document).ready(function () {
    NYM.dfp.init();
});

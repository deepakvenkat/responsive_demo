mdp.app.PromoHandler=function(b,j){function g(){i();}function e(m){var m=$(m).parent();m.unbind("mouseover");var l=$(m).find(".promobody:first");var n=l.css("height");var k=parseInt(n.substring(0,n.length-2));$(l).animate({"height":k},700,function(){l.removeClass("hide");});$("#topinit").addClass("hide");
if(typeof(j)!="undefined"){if((typeof(j.onShow))!="undefined"){j.onShow();}}}function c(l){var k=h($(l),"promobody");$(k).animate({"height":0},700,function(){k.addClass("hide");k.removeAttr("style");if(k.parent().hasClass("initroll")){d(k);}});$("#topinit").removeClass("hide");if(typeof(j)!="undefined"){if((typeof(j.onHide))!="undefined"){j.onHide();
}}}function f(k){if(k.statusCode==0){}else{alert(k.statusMessage);}}function h(l,k){if(l.hasClass(k)){return l;}else{return h(l.parent(),k);}}function a(k){var l=$(k).parent();l.remove();if(typeof(j)!="undefined"){if((typeof(j.onHideAll))!="undefined"){j.onHideAll();}}}function d(k){k=$(k);var l;if(k.hasClass("initclick")){l="click";
}if(k.hasClass("initroll")){l="mouseover";}$(".promoinit",k).each(function(n,m){m=$(m);if(l=="click"||l=="mouseover"){m.bind(l,function(){e(this);});}else{e(m);m.click(function(){e(this);});}});}function i(){var k=$("#"+b);d(k);$(k).find(".promoclose").click(function(){c(this);});$(k).find(".promocloseall").click(function(){a(this);
});if(k.hasClass("closetimeout")){setTimeout(function(){c($(k).find(".promoclose:first"));},3000);}}g();};
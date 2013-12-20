var cuplayer = {};
 
cuplayer.getFlashVersion = function () {
	// ie
	try {
		try {
			var axo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6');
			try {
				axo.AllowScriptAccess = 'always';
			} catch (e) {
				return '6,0,0';
			}
		} catch (e) {}
		return new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];
		// other browsers
	} catch (e) {
		try {
			if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) {
				return (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1];
			}
		} catch (e) {}
	}
	return '0,0,0';
}

cuplayer.flashVersion = function(){
	try{
		var version = cuplayer.getFlashVersion().split(',').shift();
		return version
	}catch(e){
		return 0;
	}
}
	
cuplayer.getDefaultSwf = function() {
	return 'player.swf';
}

cuplayer.getPlayer = function(){
	var val = false;
	var obj = document.getElementById("cuplayer");
	try{
		var val = obj.isCUPlayer();
		
		if (val){
			return obj;
		}
	}catch(e){
		val = false;
	}
	
	obj = document.getElementById("cuplayer_alt");
	try{
		var val = obj.isCUPlayer();
		
		if (val){
			return obj;
		}
	}catch(e){
		val = false;
	}
	
	return null;
}

cuplayer.getPlayerHTML = function() {
	return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="__WIDTH__" id="cuplayer" height="__HEIGHT__" align="left">' + 
	'<param name="movie" value="__SWF__" />' +
	'<param name="quality" value="high" />' +
	'<param name="bgcolor" value="#000000" />' +
	'<param name="play" value="true" />' +
	'<param name="loop" value="false" />' +
	'<param name="wmode" value="opaque" />' +
	'<param name="scale" value="noscale" />' +
	'<param name="salign" value="lt" />' +
	'<param name="flashvars" value="__FLASHVARS__" />' +
	'<param name="allowScriptAccess" value="always" />' +
	'<param name="allowFullscreen" value="true" />' +
	'<!--[if !IE]>-->' +
	'<object type="application/x-shockwave-flash" data="__SWF__" id="cuplayer_alt" width="__WIDTH__" height="__HEIGHT__">' +
	'<param name="movie" value="__SWF__" />' +
	'<param name="quality" value="high" />' +
	'<param name="bgcolor" value="#000000" />' +
	'<param name="play" value="true" />' +
	'<param name="loop" value="false" />' +
	'<param name="wmode" value="opaque" />' +
	'<param name="scale" value="noscale" />' +
	'<param name="salign" value="lt" />' +
	'<param name="flashvars" value="__FLASHVARS__" />' +
	'<param name="allowScriptAccess" value="always" />' +
	'<param name="allowFullscreen" value="true" />' +
	'<!--<![endif]-->' +
	'<a href="http://www.adobe.com/go/getflash">' +
	'<img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" />' +
	'</a>' +
	'<!--[if !IE]>-->' +
	'</object>' +
	'<!--<![endif]-->' +
	'</object>';
}

cuplayer.getParamCode = function(obj, param, defaultValue, isFirst){
	var amp = "&";
	if (isFirst) amp = "";
	
	if (obj && obj[param]){
		if (typeof obj[param] == "string" && obj[param].length > 0){
			return amp + param + '=' + encodeURIComponent(obj[param]);
		}else if (typeof (obj[param] == "object")){
			var value = "";
			var firstInObj = true;
			for (var i=0;i<obj[param].length;i++){
				if (firstInObj){
					firstInObj = false;
				}else{
					value += "||"
				}
				value += obj[param][i];
			}
			
			return amp + param + '=' + encodeURIComponent(value);
		}
	}
	
	if (defaultValue){
		return amp + param + '=' + defaultValue;
	}
	
	return "";
}
	
cuplayer.setup = function(obj){
	var swf = cuplayer.getDefaultSwf();
	if(obj.swf && obj.swf.length > 0) {
		swf = obj.swf;
	}
	
	var html = cuplayer.getPlayerHTML().replace(/__SWF__/g, swf);
	html = html.replace(/__WIDTH__/g, obj.width);
	html = html.replace(/__HEIGHT__/g, obj.height);
	
	var flashvars = '';

	flashvars += cuplayer.getParamCode(obj, 'adXmlUrl');
	flashvars += cuplayer.getParamCode(obj, 'apiMode');
	flashvars += cuplayer.getParamCode(obj, 'muteButtonOn');
	flashvars += cuplayer.getParamCode(obj, 'muteButtonPosition');
	
	html = html.replace(/__FLASHVARS__/g, flashvars);
	
	document.getElementById(obj.div).innerHTML = html;
}

cuplayer.displayBanners = function(banners, divName, width, height){
	
	if (!banners || banners.length == 0){
		return;
	}
	
	for (var i=0; i<banners.length;i++){
		if (Number(banners[i].width) == Number(width) && Number(banners[i].height) == Number(height)){
			document.getElementById(divName).innerHTML = banners[i].sourceCode;
			for (var j=0; j<banners[i].viewTrack.length;j++){
				var a = new Image();
				a.src = banners[i].viewTrack[j];
			}
			
			break;
		}
	}
}
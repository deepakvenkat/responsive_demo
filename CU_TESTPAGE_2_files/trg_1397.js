//version '3.1';
var p39_cc_1397 = 'P17m5lRodWYN5Q28dRaT//A5G/AqPLUSSIGNqieA6LP5VU4RnA=';
var p39_pu_1397 = null;
var p39_finished_1397 = '0';
var p39_al_1397 = '1';
var p39_cb_1397 = '1';
var p39_aid = '1397';

/////////////////////////
//added KVP Short - 22/4/13
//
/////////////////////////

//<Tags_Functions>

//KVP Short function
function p39_KVP_Short(key_value,delimiter)
{
	//getting the category part from the resposne
	var cats = getTargetingTags_1397().substr(9);

	//removing Ad_Stats if exist
	var hashloc = cats.indexOf("#");
	if (hashloc >= 0) {
		cats = cats.substr(0,hashloc);
	}

	var catsArr = cats.split(';');
	var finalArr = [];

	//building the response
	for (var i = 0; i < catsArr.length; i++) {
		var val = catsArr[i].split(":")[0];
		if (val != null && val.length > 0) {
			finalArr.push(val);
		}
	}
	var ret = '';
	if (finalArr.length > 0) {
		ret = key_value + "=" + finalArr.join(delimiter + key_value + "=") + delimiter;
	}
	return ret;
}


//KVP function
function p39_KVP(key_value,delimiter) {

       var idList = '';
       var arrayResults = p39_resultsArray('','id',false);
       for (var i in arrayResults) {

          idList += (key_value +'=' + arrayResults[i] + delimiter);
       }
	return(idList)
   }

//XML function 1 - pulling the values from the XML.

function p39_getTagValues(xml, vid) {
    var xml_obj;
    var res = [];
    try {
        xml_obj = new ActiveXObject("Microsoft.XMLDOM");
        xml_obj.async = false;
        xml_obj.loadXML(xml);
    } catch (e) {
        try {
            var parser = new DOMParser();
            xml_obj = parser.parseFromString(xml, "text/xml");
        } catch (ee) {
            return;
        }
    }
    if (xml_obj) {
        var categories = xml_obj.getElementsByTagName('category');
        for (catNo = 0; catNo < categories.length; catNo++) {
            if (categories[catNo].getAttribute(vid) != '0000') {
                res[res.length] = categories[catNo].getAttribute(vid);
            }
        }
    }
    return res;
}

//XML function 2 - build array of categories from the XML response.
function p39_resultsArray(default_content_type, value_id, append_default) {
    var results = [];
    var pxml = getTargetingTags_1397();
    results = p39_getTagValues(pxml, value_id);
    if ((append_default) || (results.length === 0)) {
        results[results.length] = default_content_type;
    }
    return results;
}


//<Main Static Functions>

//encode a url
function p39_ae(su, p, v) {
    if (v) {
        return su + '&' + p + '=' + encodeURIComponent(v);
    }
    return su;
}


//cleaning the ad.yieldmanager.com as server from the url
function p39_cu(u) {
    if (u) {
        if (u.indexOf('ad.yieldmanager.com') > 0) {
            var link_pos = u.indexOf('link=$,http');
            u = u.substring(link_pos, u.length);
            u = u.replace('link=$,http', 'http');
        }
    }
    return u;
}


//zero padding, add 5 digits to the account_id and site_id in the akamai call
function p39_zp(n, c) {
    var nz = n + '';
    while (nz.length < c) {
        nz = "0" + nz;
    }
    return nz;
}

//build the Hashcode ,last part of the string (xxx) EX:(222/333/xxxxxxxxxx)
function p39_hc(s) {
    var h = 0;
    var len = s.length;

    var u = 2147483647;
    var d = 2147483648;

    for (i = 0; i < len; i++) {
        h = 31 * h + s.charCodeAt(i);

        if (h > u) {
            h -= d;
            h = -d + h % (u + d + 1);
        } else if (h < -d) {
            h -= -d - 1;
            h = u + h % (u + d + 1);
        }
    }

    if (h < 0) {
        return -h;
    }
    return h;
}

//build the Akamai directory structure 222/333/44444444
function p39_bau(u) {
    if (u) {
        var uh = p39_hc(u);
        var d1 = uh % 500;
        var d2 = parseInt(uh / 500, 10) % 500;

        var au = d1 + '/' + d2 + '/' + uh;
        au = au + p39_aid;
        return au;
    }

    return u;
}
//</Main Static Functions>


//<Show Targeting Function>

//Main function - call to Peer39
function p39_exec_1397(ct, useDOM) {
    var w = window;
    var su = null;
    var p39_pr_1397 = null; //page referer
    var p39_cc_v_1397 = p39_cc_1397; //client code
    var p39_sd_v_1397 = null;
    var p39_akamai_v_1397 = '1';
    var p39_au_v_1397 = 'http://catrg.peer39.net/';
    var p39_aid_v_1397 = '1397';
    var p39_sid_v_1397 = null;


    p39_sd_v_1397 = Math.floor(Math.random() * 1000000);

    if (w.p39_mpu_1397) {
        p39_pu_1397 = w.p39_mpu_1397;
    }

    if (!p39_pu_1397) {


        p39_pu_1397 = document.location.href;
        var ip = '0';

        try {
            p39_pu_1397 = top.location.href;
            p39_pr_1397 = document.referrer;

            if (top.location != document.location) {
                ip = '1';
            }
        } catch (e) {
            try {
                p39_pu_1397 = window.parent.document.referrer;
                ip = '2';
            } catch (ee) {
                p39_pu_1397 = document.referrer;
                ip = '3';
            }
            p39_pr_1397 = null;
        }

        p39_sd_v_1397 = p39_sd_v_1397.toString() + '' + ip;
    }

    p39_pu_1397 = p39_cu(p39_pu_1397);

//run the cleaning function.

    if (typeof (p39_clean_url_1397) == "function") {
        if (p39_pu_1397) {
            p39_pu_1397 = p39_clean_url_1397(p39_pu_1397);
        }
    }

    if (p39_akamai_v_1397 == '1') {

        //here comes the magic :-)
        su = p39_au_v_1397 + p39_bau("pu=" + decodeURIComponent(p39_pu_1397) + "&cc=" + p39_cc_v_1397);
        su = su + "?aid=" + p39_zp(p39_aid_v_1397, 5);
        if (p39_sid_v_1397) {
            su = su + "&sid=" + p39_zp(p39_sid_v_1397, 5);
        } else {
            su = su + "&sid=00000";
        }
        su = p39_ae(su, "pu", decodeURIComponent(p39_pu_1397));
        su = p39_ae(su, "cc", p39_cc_v_1397);

	//not Akamai call
    } else {
        su = p39_au_v_1397 + 'cc=' + p39_cc_v_1397;
        su = p39_ae(su, "pu", p39_pu_1397);
    }

	su = p39_ae(su, "ct", w.ct);
  	su = p39_ae(su, "sd", p39_sd_v_1397);
  	su = p39_ae(su, "et", w.p39_extrk_1397);



    su = su.substring(0, 1000);
    su = su.replace(/%\w?$/, '');

    if (useDOM) {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = su;
        document.getElementsByTagName("head")[0].appendChild(s);
    } else {
        document.write('<scr' + 'ipt type="text/javascript" src="' + su + '"> </script>');
    }


}

//Manual cleaning functions.
function p39_clean_url_1397(u) {

//global cleans
	u = u.replace(/#.*/g, "");
    	u = u.replace(/\/$/g, "");

    return u;
}


//</Show Targeting Function>
//<Main Static Module>
//run the main call to peer39
p39_exec_1397(null, true);
//</Main Static Module>


//add reformatting function
    function getCategoryString(catXml) {
            //reformat xml response as string
            categoryArray=[];
            //find category ids
            var regex = / id=[\"\"]{0,1}(\w+)/g;
            while ((catlist = regex.exec(catXml)) != null) {
                //put them into a list
                categoryArray.push('p'+catlist[1]);
            }
            //join the list with &
            var catsAsString=categoryArray.join('&');
            return catsAsString;
    }

//<Extract Categories Function>
function extractCategories(t)
{
	if((t) && (t.length > 0))
	{
		var p = t.indexOf("name=");
		var ep = 0;
		var i = 0;
		var res = [];

		while ((p <= t.length) && (p > 0))
		{
			ep = t.indexOf('"',p+6);
			res[i]=t.substring(p+6,ep);
			p = t.indexOf("name=",ep+1);
			i++;
		}

		return res;
	}

    return;
}
//</Extract Categories Function>
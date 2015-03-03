/*
 * Note : This class is built on top of : /web/common/js/lib/prototype/prototype.lite.js
 *                                        /web/common/js/lib/moofx/moo.fx.js
 *                                        /web/common/js/lib/moofx/moo.fx.utils.js
 *
 * These files must be included with this script to function.
*/

/* Instantiate main variables */
mdp.DropDownAd = function(){

    var dropDiv = $("#hptoprolloverlayer");
    var closeEffect;
    var timeout_id;
    var ad_open = false;
    var time_to_show = 5000; /*milloseconds*/
    var timeout_func = function(){
        timeout_id = setTimeout(close_ad,time_to_show);
    };
    var hoverTimer;

    /* Initializes main variables */
    /*dropEffect = $(dropDiv).effect('height', {duration: 500});*/
    /*closeEffect = $(dropDiv).effect('height', {duration: 500});*/

    /* event functions */
    dropDiv.click(function() {
        clear_timeout();
    });

    $("#hptoprollover").mouseover(function() {
        hoverTimer = setTimeout(function() {
            show_ad();
            clear_timeout();
        }, 500);
    });

    $("#hptoprollover").mouseout(function() {
        clearTimeout(hoverTimer);
    });

    $("#hptoprolloverclose").click(function(){
        clearTimeout(hoverTimer);
        clear_timeout(timeout_id);
        close_ad();
    });


    /* Shows ad with an animation effect */;
    function show_ad(){
        if(!ad_open){
            ad_open = true;
            dropDiv.fadeIn(700);
            dropDiv.css('display',"block");
            $("#hptoprollovermore").attr('src', "http://images.meredith.com/fc/images/temps/shell/mktg_dd_ad_close.gif");
            $("#hptoprollovermore").click(function() {
                close_ad(false);
            });
            timeout_func();
        }
    }

    /* Hides ad with an animation effect */
    function close_ad(ani){
        if(ad_open){
            ad_open = false;
            if(typeof(ani)!="undefined"){
                dropDiv.fadeOut(700);
            }else{
                dropDiv.css('display',"none");
            }
            $("#hptoprollovermore").unbind('click');
            $("#hptoprollovermore").attr('src', "http://images.meredith.com/fc/images/temps/shell/mktg_dd_ad_more.gif");
        }
    }

    /* Clears a timeout */
    function clear_timeout(){
        clearTimeout(timeout_id);
    }

    /* checks cookie to see if we need to drop down the ad automatically */
		/* DISABLED automatic drop down by commenting the show_ad() bit on line 86 */
   // if(!Cookie.get("hptoprollover")){
      /* if (!suppressRollover) { /* show_ad(); } */
    //  Cookie.set("hptoprollover", "true", 1, "/","","");
   // }
}

$(function(){
   mdp.DropDownAd(); 
});

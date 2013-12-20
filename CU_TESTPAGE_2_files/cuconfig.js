var cunlock_url = "http://qa.contentunlock.s3.amazonaws.com/QA_SprintTesting/Sprint28/Regression";


var cunlock_config = {
              
        // KILL SWITCH
        killswitch : false,

		// COMMON SETTINGS
		pub_site: cunlock_url, 
		env: "qa",
		ad_url: "http://ad.crwdcntrl.net/5/c=1890/pe=y?http://adserver.adtechus.com/adrawdata/3.0/5372.1/3022510/0/16/ADTECH;KVabbr=${aud_ids}", //CUBS VAST
		//ad_url: "http://ad.crwdcntrl.net/5/c=1890/pe=y?http://adserver.adtechus.com/adrawdata/3.0/5372.1/3022509/0/16/ADTECH;KVabbr=${aud_ids}",  //VAST
		//ad_url: "http://ad.crwdcntrl.net/5/c=1890/pe=y?http://adserver.adtechus.com/adrawdata/3.0/5372.1/3022511/0/16/ADTECH;KVabbr=${aud_ids}", //LB
		geo_countries : ['US','AR'],
		exclude_browsers : ['IE6'],
		exclude_urls : [],
		
		//CUBS
		bs_swf_location : "http://d2qyyy30tr7ear.cloudfront.net/swf/brandselect.swf",
		api_mode : true,
		no_of_slates : 1,
		ad_timeout : 10,
		banner_message : "CUBS",
		//backfill_tag: "http://ad3.liverail.com/?LR_PUBLISHER_ID=1331&LR_CAMPAIGN_ID=229&LR_SCHEMA=vast2",
		backfill_tag: "http://adserver.adtechus.com/adrawdata/3.0/5372.1/3028958/0/16/ADTECH;",
		//backfill_tag: "http://ad.crwdcntrl.net/5/c=1890/pe=y?http://adserver.adtechus.com/adrawdata/3.0/5372.1/3022510/0/16/ADTECH;KVabbr=${aud_ids}",//CUBS
		
		//MODAL
		placement : 1,
		companion_banner : false,
		cu_lite : false,
		continue_text: "Continue on to OKMagazine.com.",
		modal_title_label: "Modal Test is greater than 20",
		
		// SITE SPECIFIC
		publisher_ID : 'Dennis_QA',
		site_ID : 'DENNIS_QA1',
		unit_width : "600px",
              
                // LOGGING
                enable_logging: {
                on: false,      
                verbose: false
		},
				
		// SLOW LOAD
		slow_load : false,
		
		// DEBUG MODE
		debug_mode : false,
		
		// LOTAME
		lotame_enabled : true,
		lotame_pub_id: "3434", 
		lotame_pub_switch : true,
		
		// COMSCORE
		comscore_enabled :true,
        media_metrix_enabled : true,
		
		// PEER 39
		peer39_enabled : true,
		
		// LEAVE BEHIND
		enable_leave_behind : true,
		
		// AUTO SCROLLs
		enable_auto_scroll : true,
		
		// CENTER UNIT
		center_unit : true,
				
		// MARKUP
		markup_active : 0,
		
		main_content : {
			selector : ".cunlock_main_content",
			index : 0
		},
		first_paragraph : {
			selector : ".cunlock_first_paragraph",
			index : 0
		},
		exclusions : [],
		hide_also : [],
		
		// AUDIENCE SEGMENTATION		
		audience_params : {
			enabled : false,
			audience_ids : ["18327"],
			kill : false,
			alternative_tag : "http://qa.contentunlock.s3.amazonaws.com/adtech_templates/internal_player.js"
			//alternative_tag : "http://ad.crwdcntrl.net/5/c=1890/pe=y?http://adserver.adtechus.com/adrawdata/3.0/5372.1/3022510/0/16/ADTECH;KVabbr=${aud_ids}",
		},
		
		// ALT ACTION
		allow_alternative_action : true,	
		alt_action_type :  'facebook_like_button',
		
		// NUMBER OF ADS TO SHOW
		num_ads : 1,

		// BRANDBOX
		brandbox_enabled : true,
		brandbox_bg_color : '#FFFFFF',		
		brandbox_message : '<center>Watch ad below</center>', 
		brandbox_logo_URL : 'http://d1cyvnjc1olxmw.cloudfront.net/CU%20logos/Genesis_logo.png',
		brandbox_font_color : 'black',
		brandbox_font_size : '30px',

		// SKIP AD
		enable_skip : true,
		skip_time : 10,
		skip_bottom_margin : 65,
		skip_fadeout_time : 5,
		
		//MUTE BUTTON
		mute_button: "true",
		mute_button_position: "BottomLeft",
		
		// ASYNC MODE
		asynchronous_mode : true,
		refresh_threshold : 2,
		
		// PAGE RULES
		pre_lock_free_views : 0,
		post_unlock_free_views : 0,
		lock_default_referral : 1,
		lock_default_content : 1,
		referral_exceptions : [],
		content_exceptions : [],
		//content_exceptions : [{name: "keywords", content:["features"]}],
		
		// FREQUENCY CAP 
		frequency_cap : {
			locks : 100,
			hours : 72
		},
		
		//SECTIONS SETTINGS
		sections: [ { name: '' , properties: { frequency_cap :
		{locks : 100, hours : 24}, post_unlock_free_views : 0, enable_skip : true, skip_time : 8, brandbox_enabled : true, brandbox_message : 'TEST Message', 
		brandbox_bg_color : '#4F7EB4', allow_alternative_action : false, asynchronous_mode : false, refresh_threshold : 3
			} }
			]
};

(function() {
    var cu = document.createElement('script'); 
    cu.type = 'text/javascript'; 
    cu.src = cunlock_url + "/cu/cu.js";
    //cu.src = "http://dev.contentunlock.s3.amazonaws.com/CUN-1011/cu.js";
    var s = document.getElementsByTagName('script')[0]; 
    s.parentNode.insertBefore(cu, s);
 })();
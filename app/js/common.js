$(function() {
	'use strict'; 
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
	  var View = function () {
	    this.initEvents();
	  };
	View.prototype = {
	    initEvents: function () {
	      var _this = this;
	      $(document).on('mouseover', '.top_section_nav_social_item', function(e){return _this.changeImage(e)});
	      $(document).on('mouseover', '.raid_section_players_item ', function(e){return _this.changeImage(e)});
	      $(document).on('click', '.solution_section_problems_boost_button ', function(e){return _this.openModal()});
	      $(document).on('click', '.popup_form_close ', function(e){return _this.closeModal()});
	      $(document).on('click', '.popup_form_cancel ', function(e){return _this.closeModal()});
	      $(document).on('click', '.arrow ', function(e){return _this.slideTop()});
	      $(document).on('click', '.arrow ', function(e){return _this.slideTop()});
	      $(document).scroll('body ', function(e){return _this.scrollPage(e)});


	    },
	    changeImage: function(ev) {
	    	if(ev.currentTarget == $('.top_section_nav_social_item')[0]) {
	    		$(ev.currentTarget).find('img').attr('src','img/top_soc_hov-1.png');
	    		$(ev.currentTarget).hover(function(){
 
				},function(){
     				$(this).find('img').attr('src','img/topsoc1.png'); 
			})
	    	} else if (ev.currentTarget == $('.top_section_nav_social_item')[1]) {
	    		$(ev.currentTarget).find('img').attr('src','img/top_soc_hov-2.png');
	    		$(ev.currentTarget).hover(function(){
 
				},function(){
     				$(this).find('img').attr('src','img/topsoc2.png'); 
			})	    		
	    	} else if (ev.currentTarget == $('.top_section_nav_social_item')[2]) {
	    		$(ev.currentTarget).find('img').attr('src','img/top_soc_hov-3.png');
	    		$(ev.currentTarget).hover(function(){
 
				},function(){
     				$(this).find('img').attr('src','img/topsoc3.png'); 
			})	 	    		
	    	}
	    	else if (ev.currentTarget == $('.raid_section_players_item')[0]) {
    		$(ev.currentTarget).find('img').attr('src','img/player_hov.png');
	    		$(ev.currentTarget).hover(function(){
 
				},function(){
     				$(this).find('img').attr('src','img/leftc.png'); 
			})	    		
	    	}
	    	else if (ev.currentTarget == $('.raid_section_players_item')[1]) {
    		$(ev.currentTarget).find('img').attr('src','img/player_hov2.png');
	    		$(ev.currentTarget).hover(function(){
 
				},function(){
     				$(this).find('img').attr('src','img/rightc.png'); 
			})	    		
	    	}
	    },
	    openModal: function(e) {
	    	$('.popup_wrapper').removeClass('fadeOut').addClass('fadeIn');
	    	$('.wrapper').addClass('blur');
	    	$('.popup_wrapper').show();
	    	$('html, body').css({
    			overflow: 'hidden',
    			height: '100%'
			});


	    },
	    closeModal: function(e) {
	    	$('.popup_wrapper').removeClass('fadeIn').addClass('fadeOut');	 
	    	$('.wrapper').removeClass('blur');
			$('html, body').css({
			    overflow: 'auto',
			    height: 'auto'
			});
	    	setTimeout(function () {
                $('.popup_wrapper').hide();	  
            }, 700);  	   	
	    },
	    slideTop: function(e) {
	    	$("html, body").animate({ scrollTop: 0 }, "slow");
	    },
	    scrollPage: function(e) {
	    	if ($(window).scrollTop() > 50) {
	    		$('.arrow').show();
	    	} else {
	    		$('.arrow').hide();
	    	}
	    }

	/*//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});*/

}

window.currentView = new View();
});

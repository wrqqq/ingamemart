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
	      //$(document).on('submit', '#about_form', function(e){return _this.onSubmitAboutForm(e)});
	      // $(document).on('click', '.section_app_platinum', function(e){return _this.popupModal(e)});
	      $(document).on('mouseover', '.top_section_nav_social_item', function(e){return _this.changeImage(e)});
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

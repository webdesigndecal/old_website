var menu_flag = 0;
var menu2_flag = 0;
var PAGE;

$(document).ready(function(){
	
	PAGE = $('#data_page').text();
	if (PAGE == "ABOUT") {
		
		$('#about_main_container').waypoint(function(direction){
			if (direction == 'down'){
				$('#nav_active').show();
			} else {
				$('#nav_active').hide();
			}
		}, {offset: '200px'});
		
		$('#about_curriculum').waypoint(function(direction){
			if (direction == 'down'){
				$('#nav_active').css({'left': '150px', 'background': '#9b59b6'});
			} else {
				$('#nav_active').css({'left': '30px', 'background': '#de6868'});
			}
		}, {offset: '200px'});
		
		$('#about_schedule').waypoint(function(direction){
			if (direction == 'down'){
				$('#nav_active').css({'left': '260px', 'background': '#5485bb'});
			} else {
				$('#nav_active').css({'left': '150px', 'background': '#9b59b6'});
			}
		}, {offset: '200px'});
		
		$('#about_instructors').waypoint(function(direction){
			if (direction == 'down'){
				$('#nav_active').css({'left': '376px', 'background': '#1abc9c'});
			} else {
				$('#nav_active').css({'left': '260px', 'background': '#5485bb'});
			}
		}, {offset: '200px'});
		
		
		$('#nav_about').click(function(){
			$('html, body').animate({'scrollTop': '500px'});
		});
		
		$('#nav_curriculum').click(function(){
			$('html, body').animate({'scrollTop': '1227px'});
		});
		
		$('#nav_schedule').click(function(){
			$('html, body').animate({'scrollTop': '2324px'});
		});
		
		$('#nav_instructors').click(function(){
			$('html, body').animate({'scrollTop': '4538px'});
		});
		
	}
	
	$(window).scroll(function(e){
		
		var scrollY = $(window).scrollTop();
		
		if (menu2_flag) {
			$('#nav_menu_popover').hide();
			menu2_flag = 0;
		}
		
		if (scrollY <= 500){
			$('#cover').show();
			$('#nav').css({'position': 'absolute', 'top': '500px'});
			$('#nav_menu').hide();
		} else {
			$('#cover').hide();
			$('#nav').css({'position': 'fixed', 'top': '0px'});
			$('#nav_menu').show();
		}
		
	});

	$('#cover_menu').click(function(){
		if (!menu_flag) {
			$('#cover_menu_icon').css({'left': '120px'});
			$('#cover_menu_caption').css({'top': '-30px'});
			$('#cover_menu_list').show('fade', 500);
			setTimeout(function(){
				$('#cover_menu_back').show();
			}, 400);
			menu_flag = 1;
			return false;
		}
	});
	
	$('#cover_menu_icon').click(function(){
		if (menu_flag) {
			$('#cover_menu_icon').css({'left': '0px'});
			$('#cover_menu_caption').css({'top': '0px'});
			$('#cover_menu_back').hide();
			$('#cover_menu_list').hide('fade', 500);
			menu_flag = 0;
			return false;
		}
	});
	
	$('#nav_menu').click(function(){
		if (!menu2_flag) {
			$('#nav_menu_popover').show();
			menu2_flag = 1;
		} else {
			$('#nav_menu_popover').hide();
			menu2_flag = 0;
		}
	});
	
	$('.gradebook').click(function(){
		$('#viewport').addClass('blur');
		$('#modal').show('fade', 500);
		$('#notification_gradebook').css({'margin-left': '0px'});
	});
	
	$('.showcase').click(function(){
		$('#viewport').addClass('blur');
		$('#modal').show('fade', 500);
		$('#notification_showcase').css({'margin-left': '0px'});
	});
	
	$('.modal_notification_dismiss').click(function(){
		$('.modal_notification_container').css({'margin-left': '-100%'});
		setTimeout(function(){
			$('#viewport').removeClass('blur');
			$('#modal').hide('fade', 500);
		}, 500);
	});
	
});
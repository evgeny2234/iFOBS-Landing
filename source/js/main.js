$(document).ready(function () {

var browser = "none";
if (navigator.userAgent.match(/msie/i) || navigator.userAgent.match(/trident/i) ){
	browser = "ie";
}

//открываем сайт всегда с первого слайда
$(window).on( 'load', function() {
	$('html, body').animate({
	scrollTop: 0
	}, 1);
});

var lang = "ru";  //изначально ставим русский
function loadJSON(callback) {
    var request = new XMLHttpRequest();
    request.overrideMimeType("application/json");
    request.open('GET', 'build/json/localizations.json', true);
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == "200")
        {
            callback(request.responseText);
        }
    }
request.send(null);
}
var data
loadJSON(function(response) {
	data = JSON.parse(response);
	variables(lang, data);
});


function variables(lang, data) {

var SelectorData = [
["#mainTitle", data[lang].misc.mainTitle],
["#advantages", data[lang].misc.companyName],
["#advantages", data[lang].misc.mainMenu[0].text],
["#for_banks", data[lang].misc.mainMenu[1].text],
["#corp_clients", data[lang].misc.mainMenu[2].text],
["#private_clients", data[lang].misc.mainMenu[3].text],
["#sequrity", data[lang].misc.mainMenu[4].text],
["#ifobs_mobile", data[lang].misc.mainMenu[5].text],
["#contacts", data[lang].misc.mainMenu[6].text],
["#welcomeMessage", data[lang].misc.welcomeMessage],
["#showMore", data[lang].misc.learnMore],

["#five_reasons", data[lang].slides.advantages.slideHeader],
["#s_slider_title_1", data[lang].slides.advantages.slideLists[0].title],
["#s_slider_title_2", data[lang].slides.advantages.slideLists[1].title],
["#s_slider_title_3", data[lang].slides.advantages.slideLists[2].title],
["#s_slider_title_4", data[lang].slides.advantages.slideLists[3].title],
["#s_slider_title_5", data[lang].slides.advantages.slideLists[4].title],
["#title_1_1", data[lang].slides.advantages.slideLists[0].list[0]],
["#title_1_2", data[lang].slides.advantages.slideLists[0].list[1]],
["#title_1_3", data[lang].slides.advantages.slideLists[0].list[2]],
["#title_2_1", data[lang].slides.advantages.slideLists[1].list[0]],
["#title_2_2", data[lang].slides.advantages.slideLists[1].list[1]],
["#title_2_3", data[lang].slides.advantages.slideLists[1].list[2]],
["#title_2_4", data[lang].slides.advantages.slideLists[1].list[3]],
["#title_2_5", data[lang].slides.advantages.slideLists[1].list[4]],
["#title_3_1", data[lang].slides.advantages.slideLists[2].list[0]],
["#title_3_2", data[lang].slides.advantages.slideLists[2].list[1]],
["#title_3_3", data[lang].slides.advantages.slideLists[2].list[2]],
["#title_4_1", data[lang].slides.advantages.slideLists[3].list[0]],
["#title_4_2", data[lang].slides.advantages.slideLists[3].list[1]],
["#title_4_3", data[lang].slides.advantages.slideLists[3].list[2]],
["#title_4_4", data[lang].slides.advantages.slideLists[3].list[3]],
["#title_5_1", data[lang].slides.advantages.slideLists[4].list[0]],
["#title_5_2", data[lang].slides.advantages.slideLists[4].list[1]],
["#title_5_3", data[lang].slides.advantages.slideLists[4].list[2]],

["#slide_3_title", data[lang].slides.bankservices.slideHeader],
["#slide_3_num_1", data[lang].slides.bankservices.slideLists[0].list[0].text],
["#slide_3_num_2", data[lang].slides.bankservices.slideLists[0].list[1].text],
["#slide_3_num_3", data[lang].slides.bankservices.slideLists[0].list[2].text],
["#slide_3_num_4", data[lang].slides.bankservices.slideLists[0].list[3].text],
["#slide_3_num_5", data[lang].slides.bankservices.slideLists[0].list[4].text],

["#slide_4_title", data[lang].slides.corporatecustomers.slideHeader],
["#slide_4_num_1", data[lang].slides.corporatecustomers.slideLists[0].list[0].text],
["#slide_4_num_2", data[lang].slides.corporatecustomers.slideLists[0].list[1].text],
["#slide_4_num_3", data[lang].slides.corporatecustomers.slideLists[0].list[2].text],
["#slide_4_num_4", data[lang].slides.corporatecustomers.slideLists[0].list[3].text],
["#slide_4_num_5", data[lang].slides.corporatecustomers.slideLists[0].list[4].text],

["#slide_5_title", data[lang].slides.privatecustomers.slideHeader],
["#slide_5_num_1", data[lang].slides.privatecustomers.slideLists[0].list[0].text],
["#slide_5_num_2", data[lang].slides.privatecustomers.slideLists[0].list[1].text],
["#slide_5_num_3", data[lang].slides.privatecustomers.slideLists[0].list[2].text],
["#slide_5_num_4", data[lang].slides.privatecustomers.slideLists[0].list[3].text],
["#slide_5_num_5", data[lang].slides.privatecustomers.slideLists[0].list[4].text],

["#slide_6_title", data[lang].slides.security.slideHeader],
["#slide_6_un_title_1", data[lang].slides.security.slideLists[0].title],
["#slide_6_num_1", data[lang].slides.security.slideLists[0].list[0].text],
["#slide_6_num_2", data[lang].slides.security.slideLists[0].list[1].text],
["#slide_6_num_3", data[lang].slides.security.slideLists[0].list[2].text],
["#slide_6_un_title_2", data[lang].slides.security.slideLists[1].title],
["#slide_6_num_4", data[lang].slides.security.slideLists[1].list[0].text],
["#slide_6_num_5", data[lang].slides.security.slideLists[1].list[1].text],
["#slide_6_num_6", data[lang].slides.security.slideLists[1].list[2].text],

["#slide_7_title", data[lang].slides.ifobsmobile.slideHeader],
["#slide_7_un_title_1", data[lang].slides.ifobsmobile.slideLists[0].title],
["#slide_7_num_1", data[lang].slides.ifobsmobile.slideLists[0].list[0].text],
["#slide_7_num_2", data[lang].slides.ifobsmobile.slideLists[0].list[1].text],
["#slide_7_num_3", data[lang].slides.ifobsmobile.slideLists[0].list[2].text],
["#slide_7_un_title_2", data[lang].slides.ifobsmobile.slideLists[1].title],
["#slide_7_num_4", data[lang].slides.ifobsmobile.slideLists[1].list[0].text],
["#slide_7_num_5", data[lang].slides.ifobsmobile.slideLists[1].list[1].text],
["#slide_7_num_6", data[lang].slides.ifobsmobile.slideLists[1].list[2].text],

["#slide_8_title", data[lang].slides.contacts.slideHeader],
["#phone", data[lang].slides.contacts.contacts.phone],
["#phoneNumber", data[lang].slides.contacts.contacts.phoneNumber],
["#email", data[lang].slides.contacts.contacts.email],
["#kharkiv_adress", data[lang].slides.contacts.contacts.kharkivAddress],
["#kyiv_adress", data[lang].slides.contacts.contacts.kyivAddress],
["#cscompany", data[lang].slides.contacts.contacts.copy],
["#copyLink", data[lang].slides.contacts.contacts.copyLink],
["#date", data[lang].slides.contacts.contacts.date]
]
	for(var i=0; i<80; i++) {
		$(SelectorData[i][0]).html(SelectorData[i][1]);
	}
}

$('.localiz_').click(function(){
	var lang = $(this).data('langname');
	local_active(this);
	variables(lang, data, function() {
		$('.arrow_down').addClass("opacity_style_full");	
	});
	//$(this).html(data[lng][lang]);
})

local_active('.local_ru')
function local_active(subj) {
	$(".localiz_").removeClass('localizations_active');
	$(subj).addClass('localizations_active');
}
	
$('.m_content__').click(function(){
	var num_list = $(this).data('ulnumber');
	$(".appear_menu__").removeClass('appear_menu');
	$(".app_menu_"+num_list).addClass('appear_menu');
})

//при мобайле показываем или скрываем блоки на слайдах 6,7
$('.title-mob-cont').click(function(){
	var afterNum = $(this).data('containernum');
	$('.title-mob-cont').removeClass('active_h_item');
	$('.arrow_down').removeClass('visibleArrow');
	$('.mob-title-'+afterNum+" i").addClass('visibleArrow');

	$(this).addClass('active_h_item');
	
	$(".addon-cont").removeClass('appear_menu');
	$(".addon-container-"+afterNum).addClass('appear_menu');
})

//Опускаем/поднимаем менюшку
var check = false;
$('.menu_up_down').click(function(){
	if(!check) {
		$('header').addClass('menu_click_UP');
		$('header').removeClass('menu_click_DOWN');
		$('header').removeClass( "header_low" );
		check = true;
		return;
	}
	if(check) {
		$('header').removeClass('menu_click_UP');
		$('header').addClass('menu_click_DOWN');
		$('header').removeClass( "header_low" );
		check = false;
		return;
	}
})

var check2 = false;
$('#navBARbuttonMenu').click(function(){
	if(check2) {
		$('.navMenu').removeClass("header_ACTIVE");
		check2 = false;
		return;
	}
	if(!check2) {
		$('.navMenu').addClass("header_ACTIVE");
		check2 = true;
		return;
	}
})

//Плавное появление IFOBS, ДОБРО ПОЖАЛОВАТЬ В ИНТЕРНЕТ-БАНКИНГ
$( ".upper_container" ).animate({
    top: "100px",
    opacity: 1
  }, 3000, function() {
  	$( "#welcomeMessage" ).animate({
  		opacity: 1
  	}, 3000, function f1() {
  		$('#showMore').addClass('showMore_animate');
  		//$('.arrow_down').addClass("opacity_style_full");
  	});
});

	//плавно выезжаем на втором слайде
	function secondAnimation () {
		$( ".m_content_1" ).animate({
		    top: "0px",
		    opacity: 1
		  }, 900, function() {
		  	$( ".m_content_2" ).animate({
		  		top: "0px",
		   		opacity: 1
		  	}, 900, function() {
		  		$( ".m_content_3" ).animate({
			  		top: "0px",
			   		opacity: 1
			    }, 900, function() {
		  			$( ".m_content_4" ).animate({
				  		top: "0px",
				   		opacity: 1
				   	}, 900, function() {
			  			$( ".m_content_5" ).animate({
					  		top: "0px",
					   		opacity: 1
		  				}, 900);
		  			});
		  		});
		  	});
		});
	}

	//что делаем если екран меньше чем 768 px
	function low_size() {
		$('header').addClass( "header_low" );
		$('#mainTitle').addClass( "mainTitle_low" );
		$('#welcomeMessage').addClass( "welcomeMessage_low" );
		$('#showMore').addClass( "showMore_low" );
		$('.upper_container').addClass( "upper_container_low" );
		$('.simple_logo').addClass( "simple_logo_low" );
	}

	//что делаем если екран больше чем 768 px
	function high_size() {
		//$('header').removeClass( "header_low" );
		$('#mainTitle').removeClass( "mainTitle_low" );
		$('#welcomeMessage').removeClass( "welcomeMessage_low" );
		$('#showMore').removeClass( "showMore_low" );
		$('.upper_container').removeClass( "upper_container_low" );
		$('.simple_logo').removeClass( "simple_logo_low" );
		$('.navMenu').removeClass("header_ACTIVE");
		$('.arrow_down').removeClass('visibleArrow');
	}

if( $(window).width()<=768) {
  	low_size();
}
$( window ).resize(function() {
  if( $(window).width()<=768) {
  	low_size();
  }
  if( $(window).width()<768) {
  	$('.navMenu').addClass("header_ACTIVE");
  }
  else {
  	high_size();
  }
});

var listener;
var counter = 0;

$('.js-page-control').click(function(){
	var pageControl = $(this).data('pagecounterid');
	if(pageControl==1) {
		secondAnimation ();
	}
	slider_buttons(pageControl);
	click_remove_classes();
	counter=pageControl;
	for(var i=1;i<9;i++) {
		$('.slide'+i).removeClass('z-inverse_'+i);
	}
})

function click_remove_classes() {
	$('.cont').removeClass('cont_fixed');
	$('.contain_2').removeClass('cont_fixed');
	$('.slide').css({"backgroundPositionY": "0vh"});
	for(var i=1;i<9;i++) {
		$('.slide').removeClass('z-inverse_'+i);
	}
}

function slider_buttons(counter) {
	$(".s_button").removeClass('s_button_active');
	$(".sb_"+counter).addClass('s_button_active');
	$('.nav-click').removeClass('nav_click_active');
 	$('.nav_l_'+counter).addClass('nav_click_active');
 	$(".s_button").addClass('s_button_opacity');	
}

//меняем Z-index чтоб при прокрутке вверх был эффект наезжания и темные блоки стопались в топе, а след страница на них наежала
function z_inverse_add() {
	var i = 1;
	for(i=1; i<=8;i++) 
	{
		$('.slide'+i).addClass('z-inverse_'+i);
	}
}
//когда снова крутим вниз, ставим Все на Свои места
function z_inverse_remove() {
	var i = 1;
	for(i=1; i<=8;i++) 
	{
		$('.slide'+i).removeClass('z-inverse_'+i);
	}
	$('.cont, .contain_1, .contain_2').removeClass('cont_fixed');
}

function back_parallax_up(counter) {
	$('.slide'+counter).css({
		"backgroundPositionY": "-2vh"
	});
	$('.slide'+counter).animate({
		backgroundPositionY: '0vh'
	}, 1900, function(){
		
	});
}
function back_parallax_down(counter) {
	$('.slide'+counter).animate({
		backgroundPositionY: '-25vh'
	}, 1900, function(){
	});
}

//плавный переход по якорям
$("#menu").on("click","a", function (event) {
	$('.nav-click').removeClass('nav_click_active');
	$(this).addClass('nav_click_active');
	//отменяем стандартную обработку нажатия по ссылке
	event.preventDefault();
	//забираем идентификатор бока с атрибута href
	var id  = $(this).attr('href'),
	//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
	//анимируем переход на расстояние - top за 1500 мс
	$('html, body').animate({scrollTop: top}, 2000);
});

$(".js-page-control").on("click", function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
	top = $(id).offset().top;
	$('html, body').animate({scrollTop: top}, 2000);
});

//плавный скролл по колесику
var elem = document.getElementById('body');
    if (elem.addEventListener) {
      if ('onwheel' in document) {
        // IE9+, FF17+
        elem.addEventListener("wheel", onWheel);
      } else if ('onmousewheel' in document) {
        // устаревший вариант события
        elem.addEventListener("mousewheel", onWheel);
      } else {
        // Firefox < 17
        elem.addEventListener("MozMousePixelScroll", onWheel);
      }
    } else { // IE8-
      elem.attachEvent("onmousewheel", onWheel);
    }
    // Это решение предусматривает поддержку IE8-
    function onWheel(e) {
        e = e || window.event;
        // deltaY, detail содержат пиксели
        // wheelDelta не дает возможность узнать количество пикселей
        // onwheel || MozMousePixelScroll || onmousewheel
        var delta = e.deltaY || e.detail || e.wheelDelta;
        if(browser == "ie") {
      	    delta = -delta;
        }
		var array = [ $('#first_slide_main').offset().top, $('#advantages_ifobs').offset().top, $('#for_banks_ifobs').offset().top, $('#coorporate_ifobs').offset().top, $('#private_clients_ifobs').offset().top, $('#sequrity_ifobs').offset().top, $('#mobile_ifobs').offset().top, $('#contacts_ifobs').offset().top]
		if(listener) {
			return;
		}
		listener = true;
	    if(delta<0) {
			if(counter>1) {
				back_parallax_up(counter);  //эффект параллакса для фона при прокрутке вверх
				z_inverse_add();
				$('.contain_'+counter).removeClass('cont_fixed'); //эффект парраллакса для темных блоков
				counter--;
				$('.contain_'+(counter+2)).addClass('cont_fixed');  //эффект парраллакса для темных блоков
				slider_buttons(counter);
	    		$('body,html').animate({scrollTop: array[counter]}, 2000, function(){  //плавный скролл
	    			listener = false;
	    		});
		    	}
		    	else {
		    		listener = false;
		    	}
	    }
	    if(delta>0) {
	    	if(counter<=6) {
	 			z_inverse_remove()
	    		counter++;
	    		$('.contain_'+counter).addClass('cont_fixed'); //эффект парраллакса для темных блоков
	    		$(".s_button").addClass('s_button_opacity');  //плавеное появление кнопок слайдера
	    		slider_buttons(counter);
	    		if(counter==1) {
	    			secondAnimation ();
	    		}
	    		$('body,html').animate({scrollTop: array[counter]}, 2000, function(){  //плавный скролл
	    			listener = false;
	    		});
	    		back_parallax_down(counter); //эффект параллакса для фона при прокрутке вниз
	    	}
	    	else {
	    		listener = false;
	    	}
	    }
	    e.preventDefault();
	    e.stopPropagation();
    }

});
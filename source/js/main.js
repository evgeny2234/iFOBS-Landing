$(document).ready(function () {

//открываем сайт всегда с первого слайда
$(window).on( 'load', function() {
	$('body,html').animate({
	scrollTop: 0
	}, 1);
});

	var lang = 'ru';

	function variables(local, callback) {

		$.get({
			url: 'build/json/localizations.json',
			success: function(data) {

				var miscMainTitle       = data[lang].misc.mainTitle;
				var miscCompanyName     = data[lang].misc.companyName;
				var miscMainTitleText0  = data[lang].misc.mainMenu[0].text;
				var miscMainTitleSlide0 = data[lang].misc.mainMenu[0].slide;
				var miscMainTitleText1  = data[lang].misc.mainMenu[1].text;
				var miscMainTitleSlide1 = data[lang].misc.mainMenu[1].slide;
				var miscMainTitleText2  = data[lang].misc.mainMenu[2].text;
				var miscMainTitleSlide2 = data[lang].misc.mainMenu[2].slide;
				var miscMainTitleText3  = data[lang].misc.mainMenu[3].text;
				var miscMainTitleSlide3 = data[lang].misc.mainMenu[3].slide;
				var miscMainTitleText4  = data[lang].misc.mainMenu[4].text;
				var miscMainTitleSlide4 = data[lang].misc.mainMenu[4].slide;
				var miscMainTitleText5  = data[lang].misc.mainMenu[5].text;
				var miscMainTitleSlide5 = data[lang].misc.mainMenu[5].slide;
				var miscMainTitleText6  = data[lang].misc.mainMenu[6].text;
				var miscMainTitleSlide6 = data[lang].misc.mainMenu[6].slide;
				var miscWelcomeMessage  = data[lang].misc.welcomeMessage;
				var miscLearnMore       = data[lang].misc.learnMore;

				var slidesAdvantagesSlideHeader         = data[lang].slides.advantages.slideHeader;

				var slidesAdvantagesSlideLists0Priority = data[lang].slides.advantages.slideLists[0].priority;
				var slidesAdvantagesSlideLists0Title    = data[lang].slides.advantages.slideLists[0].title;
				var slidesAdvantagesSlideLists0List     = data[lang].slides.advantages.slideLists[0].list;

				var slidesAdvantagesSlideLists1Priority = data[lang].slides.advantages.slideLists[1].priority;
				var slidesAdvantagesSlideLists1Title    = data[lang].slides.advantages.slideLists[1].title;
				var slidesAdvantagesSlideLists1List     = data[lang].slides.advantages.slideLists[1].list;

				var slidesAdvantagesSlideLists2Priority = data[lang].slides.advantages.slideLists[2].priority;
				var slidesAdvantagesSlideLists2Title    = data[lang].slides.advantages.slideLists[2].title;
				var slidesAdvantagesSlideLists2List     = data[lang].slides.advantages.slideLists[2].list;

				var slidesAdvantagesSlideLists3Priority = data[lang].slides.advantages.slideLists[3].priority;
				var slidesAdvantagesSlideLists3Title    = data[lang].slides.advantages.slideLists[3].title;
				var slidesAdvantagesSlideLists3List     = data[lang].slides.advantages.slideLists[3].list;

				var slidesAdvantagesSlideLists4Priority = data[lang].slides.advantages.slideLists[4].priority;
				var slidesAdvantagesSlideLists4Title    = data[lang].slides.advantages.slideLists[4].title;
				var slidesAdvantagesSlideLists4List     = data[lang].slides.advantages.slideLists[4].list;
				//конец 2 слайда

				//начало 3 слайда
				var slidesAdvantagesBankservicesSvgTemplate            = data[lang].slides.bankservices.svgTemplate;
				var slidesAdvantagesBankservicesSlideHeader            = data[lang].slides.bankservices.slideHeader;
				var slidesAdvantagesBankservicesSlideLists             = data[lang].slides.bankservices.slideLists;
				var slidesAdvantagesBankservicesSlideListsTitle        = data[lang].slides.bankservices.slideLists[0].title;
				var slidesAdvantagesBankservicesSlideListsListIcon0    = data[lang].slides.bankservices.slideLists[0].list[0].icon;
				var slidesAdvantagesBankservicesSlideListsListText0    = data[lang].slides.bankservices.slideLists[0].list[0].text;
				var slidesAdvantagesBankservicesSlideListsListIcon1    = data[lang].slides.bankservices.slideLists[0].list[1].icon;
				var slidesAdvantagesBankservicesSlideListsListText1    = data[lang].slides.bankservices.slideLists[0].list[1].text;
				var slidesAdvantagesBankservicesSlideListsListIcon2    = data[lang].slides.bankservices.slideLists[0].list[2].icon;
				var slidesAdvantagesBankservicesSlideListsListText2    = data[lang].slides.bankservices.slideLists[0].list[2].text;
				var slidesAdvantagesBankservicesSlideListsListIcon3    = data[lang].slides.bankservices.slideLists[0].list[3].icon;
				var slidesAdvantagesBankservicesSlideListsListText3    = data[lang].slides.bankservices.slideLists[0].list[3].text;
				var slidesAdvantagesBankservicesSlideListsListIcon4    = data[lang].slides.bankservices.slideLists[0].list[4].icon;
				var slidesAdvantagesBankservicesSlideListsListText4    = data[lang].slides.bankservices.slideLists[0].list[4].text;
				//конец 3 слайда

				//начало 4 слайда
				var slidesAdvantagesCorporatecustomersSvgTemplate            = data[lang].slides.corporatecustomers.svgTemplate;
				var slidesAdvantagesCorporatecustomersSlideHeader            = data[lang].slides.corporatecustomers.slideHeader;
				var slidesAdvantagesCorporatecustomersSlideLists             = data[lang].slides.corporatecustomers.slideLists;
				var slidesAdvantagesCorporatecustomersSlideListsTitle        = data[lang].slides.corporatecustomers.slideLists[0].title;
				var slidesAdvantagesCorporatecustomersSlideListsListIcon0    = data[lang].slides.corporatecustomers.slideLists[0].list[0].icon;
				var slidesAdvantagesCorporatecustomersSlideListsListText0    = data[lang].slides.corporatecustomers.slideLists[0].list[0].text;
				var slidesAdvantagesCorporatecustomersSlideListsListIcon1    = data[lang].slides.corporatecustomers.slideLists[0].list[1].icon;
				var slidesAdvantagesCorporatecustomersSlideListsListText1    = data[lang].slides.corporatecustomers.slideLists[0].list[1].text;
				var slidesAdvantagesCorporatecustomersSlideListsListIcon2    = data[lang].slides.corporatecustomers.slideLists[0].list[2].icon;
				var slidesAdvantagesCorporatecustomersSlideListsListText2    = data[lang].slides.corporatecustomers.slideLists[0].list[2].text;
				var slidesAdvantagesCorporatecustomersSlideListsListIcon3    = data[lang].slides.corporatecustomers.slideLists[0].list[3].icon;
				var slidesAdvantagesCorporatecustomersSlideListsListText3    = data[lang].slides.corporatecustomers.slideLists[0].list[3].text;
				var slidesAdvantagesCorporatecustomersSlideListsListIcon4    = data[lang].slides.corporatecustomers.slideLists[0].list[4].icon;
				var slidesAdvantagesCorporatecustomersSlideListsListText4    = data[lang].slides.corporatecustomers.slideLists[0].list[4].text;
				//конец 4 слайда

				//начало 5 слайда
				var slidesAdvantagesPrivatecustomersSvgTemplate              = data[lang].slides.privatecustomers.svgTemplate;
				var slidesAdvantagesPrivatecustomersSlideHeader              = data[lang].slides.privatecustomers.slideHeader;
				var slidesAdvantagesPrivatecustomersSlideLists               = data[lang].slides.privatecustomers.slideLists;
				var slidesAdvantagesPrivatecustomersSlideListsTitle          = data[lang].slides.privatecustomers.slideLists[0].title;
				var slidesAdvantagesPrivatecustomersSlideListsListIcon0      = data[lang].slides.privatecustomers.slideLists[0].list[0].icon;
				var slidesAdvantagesPrivatecustomersSlideListsListText0      = data[lang].slides.privatecustomers.slideLists[0].list[0].text;
				var slidesAdvantagesPrivatecustomersSlideListsListIcon1      = data[lang].slides.privatecustomers.slideLists[0].list[1].icon;
				var slidesAdvantagesPrivatecustomersSlideListsListText1      = data[lang].slides.privatecustomers.slideLists[0].list[1].text;
				var slidesAdvantagesPrivatecustomersSlideListsListIcon2      = data[lang].slides.privatecustomers.slideLists[0].list[2].icon;
				var slidesAdvantagesPrivatecustomersSlideListsListText2      = data[lang].slides.privatecustomers.slideLists[0].list[2].text;
				var slidesAdvantagesPrivatecustomersSlideListsListIcon3      = data[lang].slides.privatecustomers.slideLists[0].list[3].icon;
				var slidesAdvantagesPrivatecustomersSlideListsListText3      = data[lang].slides.privatecustomers.slideLists[0].list[3].text;
				var slidesAdvantagesPrivatecustomersSlideListsListIcon4      = data[lang].slides.privatecustomers.slideLists[0].list[4].icon;
				var slidesAdvantagesPrivatecustomersSlideListsListText4      = data[lang].slides.privatecustomers.slideLists[0].list[4].text;
				//конец 5 слайда

				//начало 6 слайда
				var slidesAdvantagesSecuritySvgTemplate            = data[lang].slides.security.svgTemplate;
				var slidesAdvantagesSecuritySlideHeader            = data[lang].slides.security.slideHeader;
				var slidesAdvantagesSecuritySlideLists             = data[lang].slides.security.slideLists;
				var slidesAdvantagesSecuritySlideListsTitle1        = data[lang].slides.security.slideLists[0].title;
				var slidesAdvantagesSecuritySlideListsListIcon0    = data[lang].slides.security.slideLists[0].list[0].icon;
				var slidesAdvantagesSecuritySlideListsListText0    = data[lang].slides.security.slideLists[0].list[0].text;
				var slidesAdvantagesSecuritySlideListsListIcon1    = data[lang].slides.security.slideLists[0].list[1].icon;
				var slidesAdvantagesSecuritySlideListsListText1    = data[lang].slides.security.slideLists[0].list[1].text;
				var slidesAdvantagesSecuritySlideListsListIcon2    = data[lang].slides.security.slideLists[0].list[2].icon;
				var slidesAdvantagesSecuritySlideListsListText2    = data[lang].slides.security.slideLists[0].list[2].text;
				var slidesAdvantagesSecuritySlideListsTitle2        = data[lang].slides.security.slideLists[1].title;
				var slidesAdvantagesSecuritySlideListsListIcon3    = data[lang].slides.security.slideLists[1].list[0].icon;
				var slidesAdvantagesSecuritySlideListsListText3    = data[lang].slides.security.slideLists[1].list[0].text;
				var slidesAdvantagesSecuritySlideListsListIcon4    = data[lang].slides.security.slideLists[1].list[1].icon;
				var slidesAdvantagesSecuritySlideListsListText4    = data[lang].slides.security.slideLists[1].list[1].text;
				var slidesAdvantagesSecuritySlideListsListIcon5    = data[lang].slides.security.slideLists[1].list[2].icon;
				var slidesAdvantagesSecuritySlideListsListText5    = data[lang].slides.security.slideLists[1].list[2].text;
				//конец 6 слайда

				//начало 7 слайда
				var slidesAdvantagesIfobsmobileSvgTemplate            = data[lang].slides.ifobsmobile.svgTemplate;
				var slidesAdvantagesIfobsmobileSlideHeader            = data[lang].slides.ifobsmobile.slideHeader;
				var slidesAdvantagesIfobsmobileSlideLists             = data[lang].slides.ifobsmobile.slideLists;
				var slidesAdvantagesIfobsmobileSlideListsTitle1        = data[lang].slides.ifobsmobile.slideLists[0].title;
				var slidesAdvantagesIfobsmobileSlideListsListIcon0    = data[lang].slides.ifobsmobile.slideLists[0].list[0].icon;
				var slidesAdvantagesIfobsmobileSlideListsListText0    = data[lang].slides.ifobsmobile.slideLists[0].list[0].text;
				var slidesAdvantagesIfobsmobileSlideListsListIcon1    = data[lang].slides.ifobsmobile.slideLists[0].list[1].icon;
				var slidesAdvantagesIfobsmobileSlideListsListText1    = data[lang].slides.ifobsmobile.slideLists[0].list[1].text;
				var slidesAdvantagesIfobsmobileSlideListsListIcon2    = data[lang].slides.ifobsmobile.slideLists[0].list[2].icon;
				var slidesAdvantagesIfobsmobileSlideListsListText2    = data[lang].slides.ifobsmobile.slideLists[0].list[2].text;
				var slidesAdvantagesIfobsmobileSlideListsTitle2        = data[lang].slides.ifobsmobile.slideLists[1].title;
				var slidesAdvantagesIfobsmobileSlideListsListIcon3    = data[lang].slides.ifobsmobile.slideLists[1].list[0].icon;
				var slidesAdvantagesIfobsmobileSlideListsListText3    = data[lang].slides.ifobsmobile.slideLists[1].list[0].text;
				var slidesAdvantagesIfobsmobileSlideListsListIcon4    = data[lang].slides.ifobsmobile.slideLists[1].list[1].icon;
				var slidesAdvantagesIfobsmobileSlideListsListText4    = data[lang].slides.ifobsmobile.slideLists[1].list[1].text;
				var slidesAdvantagesIfobsmobileSlideListsListIcon5    = data[lang].slides.ifobsmobile.slideLists[1].list[2].icon;
				var slidesAdvantagesIfobsmobileSlideListsListText5    = data[lang].slides.ifobsmobile.slideLists[1].list[2].text;
				//конец 7 слайда

				//начало 8 слайда
				var slidesAdvantagesIContactsSlideHeader              = data[lang].slides.contacts.slideHeader;
				var slidesAdvantagesIContactsContactsAnnotation       = data[lang].slides.contacts.contacts.annotation;
				var slidesAdvantagesIContactsContactsNameField        = data[lang].slides.contacts.contacts.nameField;
				var slidesAdvantagesIContactsContactsEmailField       = data[lang].slides.contacts.contacts.emailField;
				var slidesAdvantagesIContactsContactsConfirm          = data[lang].slides.contacts.contacts.confirm;
				var slidesAdvantagesIContactsContactsPhone            = data[lang].slides.contacts.contacts.phone;
				var slidesAdvantagesIContactsContactsPhoneNumber      = data[lang].slides.contacts.contacts.phoneNumber;
				var slidesAdvantagesIContactsContactsEmail            = data[lang].slides.contacts.contacts.email;
				var slidesAdvantagesIContactsContactsEmailAddress     = data[lang].slides.contacts.contacts.emailAddress;
				var slidesAdvantagesIContactsContactsKharkivAddress   = data[lang].slides.contacts.contacts.kharkivAddress;
				var slidesAdvantagesIContactsContactsKharkivMap       = data[lang].slides.contacts.contacts.kharkivMap;
				var slidesAdvantagesIContactsContactsKyivAddress      = data[lang].slides.contacts.contacts.kyivAddress;
				var slidesAdvantagesIContactsContactsKyivMap          = data[lang].slides.contacts.contacts.kyivMap;
				var slidesAdvantagesIContactsContactsCopy             = data[lang].slides.contacts.contacts.copy;
				var slidesAdvantagesIContactsContactsCopyLink         = data[lang].slides.contacts.contacts.copyLink;
				var slidesAdvantagesIContactsContactsDate             = data[lang].slides.contacts.contacts.date;
				//конец 7 слайда



				function local() {

				//хедер
				$('#advantages').text(miscMainTitleText0);
				$('#for_banks').text(miscMainTitleText1);
				$('#corp_clients').text(miscMainTitleText2);
				$('#private_clients').text(miscMainTitleText3);
				$('#sequrity').text(miscMainTitleText4);
				$('#ifobs_mobile').text(miscMainTitleText5);
				$('#contacts').text(miscMainTitleText6);

				//первый слайд
				$('#mainTitle').text(miscMainTitle);
				$('#welcomeMessage').text(miscWelcomeMessage);
				$('#showMore').html(miscLearnMore+"<i class=\"arrow_down\"></i>");
				//конец 1 слайда

				//второй слайд
				$('#five_reasons').text(slidesAdvantagesSlideHeader);

				$('#s_slider_title_1').text(slidesAdvantagesSlideLists0Title);
				$('#s_slider_title_2').text(slidesAdvantagesSlideLists1Title);
				$('#s_slider_title_3').text(slidesAdvantagesSlideLists2Title);
				$('#s_slider_title_4').text(slidesAdvantagesSlideLists3Title);
				$('#s_slider_title_5').text(slidesAdvantagesSlideLists4Title);


				$('#title_1_1').html(data[lang].slides.advantages.slideLists[0].list[0]);
				$('#title_1_2').html(data[lang].slides.advantages.slideLists[0].list[1]);
				$('#title_1_3').html(data[lang].slides.advantages.slideLists[0].list[2]);

				$('#title_2_1').html(data[lang].slides.advantages.slideLists[1].list[0]);
				$('#title_2_2').html(data[lang].slides.advantages.slideLists[1].list[1]);
				$('#title_2_3').html(data[lang].slides.advantages.slideLists[1].list[2]);
				$('#title_2_4').html(data[lang].slides.advantages.slideLists[1].list[3]);
				$('#title_2_5').html(data[lang].slides.advantages.slideLists[1].list[4]);

				$('#title_3_1').html(data[lang].slides.advantages.slideLists[2].list[0]);
				$('#title_3_2').html(data[lang].slides.advantages.slideLists[2].list[1]);
				$('#title_3_3').html(data[lang].slides.advantages.slideLists[2].list[2]);

				$('#title_4_1').html(data[lang].slides.advantages.slideLists[3].list[0]);
				$('#title_4_2').html(data[lang].slides.advantages.slideLists[3].list[1]);
				$('#title_4_3').html(data[lang].slides.advantages.slideLists[3].list[2]);
				$('#title_4_4').html(data[lang].slides.advantages.slideLists[3].list[3]);

				$('#title_5_1').html(data[lang].slides.advantages.slideLists[4].list[0]);
				$('#title_5_2').html(data[lang].slides.advantages.slideLists[4].list[1]);
				$('#title_5_3').html(data[lang].slides.advantages.slideLists[4].list[2]);
				//конец 2 слайа

				//начало 3 слайда
				$('#slide_3_title').html(slidesAdvantagesBankservicesSlideHeader);
				$('#slide_3_num_1').html(slidesAdvantagesBankservicesSlideListsListText0);
				$('#slide_3_num_2').html(slidesAdvantagesBankservicesSlideListsListText1);
				$('#slide_3_num_3').html(slidesAdvantagesBankservicesSlideListsListText2);
				$('#slide_3_num_4').html(slidesAdvantagesBankservicesSlideListsListText3);
				$('#slide_3_num_5').html(slidesAdvantagesBankservicesSlideListsListText4);
				//конец 3 слайда


				//начало 4 слайда
				$('#slide_4_title').html(slidesAdvantagesCorporatecustomersSlideHeader);
				$('#slide_4_num_1').html(slidesAdvantagesCorporatecustomersSlideListsListText0);
				$('#slide_4_num_2').html(slidesAdvantagesCorporatecustomersSlideListsListText1);
				$('#slide_4_num_3').html(slidesAdvantagesCorporatecustomersSlideListsListText2);
				$('#slide_4_num_4').html(slidesAdvantagesCorporatecustomersSlideListsListText3);
				$('#slide_4_num_5').html(slidesAdvantagesCorporatecustomersSlideListsListText4);
				//конец 4 слайда


				//начало 5 слайда
				$('#slide_5_title').html(slidesAdvantagesPrivatecustomersSlideHeader);
				$('#slide_5_num_1').html(slidesAdvantagesPrivatecustomersSlideListsListText0);
				$('#slide_5_num_2').html(slidesAdvantagesPrivatecustomersSlideListsListText1);
				$('#slide_5_num_3').html(slidesAdvantagesPrivatecustomersSlideListsListText2);
				$('#slide_5_num_4').html(slidesAdvantagesPrivatecustomersSlideListsListText3);
				$('#slide_5_num_5').html(slidesAdvantagesPrivatecustomersSlideListsListText4);
				//конец 5 слайда


				//начало 6 слайда
				$('#slide_6_title').html(slidesAdvantagesSecuritySlideHeader);
				$('#slide_6_un_title_1').html(slidesAdvantagesSecuritySlideListsTitle1);
				$('#slide_6_num_1').html(slidesAdvantagesSecuritySlideListsListText0);
				$('#slide_6_num_2').html(slidesAdvantagesSecuritySlideListsListText1);
				$('#slide_6_num_3').html(slidesAdvantagesSecuritySlideListsListText2);
				$('#slide_6_un_title_2').html(slidesAdvantagesSecuritySlideListsTitle2);
				$('#slide_6_num_4').html(slidesAdvantagesSecuritySlideListsListText3);
				$('#slide_6_num_5').html(slidesAdvantagesSecuritySlideListsListText4);
				$('#slide_6_num_6').html(slidesAdvantagesSecuritySlideListsListText5);
				//конец 6 слайда


				//начало 7 слайда
				$('#slide_7_title').html(slidesAdvantagesIfobsmobileSlideHeader);
				$('#slide_7_un_title_1').html(slidesAdvantagesIfobsmobileSlideListsTitle1);
				$('#slide_7_num_1').html(slidesAdvantagesIfobsmobileSlideListsListText0);
				$('#slide_7_num_2').html(slidesAdvantagesIfobsmobileSlideListsListText1);
				$('#slide_7_num_3').html(slidesAdvantagesIfobsmobileSlideListsListText2);
				$('#slide_7_un_title_2').html(slidesAdvantagesIfobsmobileSlideListsTitle2);
				$('#slide_7_num_4').html(slidesAdvantagesIfobsmobileSlideListsListText3);
				$('#slide_7_num_5').html(slidesAdvantagesIfobsmobileSlideListsListText4);
				$('#slide_7_num_6').html(slidesAdvantagesIfobsmobileSlideListsListText5);
				//конец 7 слайда


				//начало 8 слайда
				$('#slide_8_title').html(slidesAdvantagesIContactsSlideHeader);
				
				$('#phoneNumber').text(slidesAdvantagesIContactsContactsPhoneNumber);
				$('#copyLink').text(slidesAdvantagesIContactsContactsCopyLink );
				$('#phone').text(slidesAdvantagesIContactsContactsPhone);
				$('#email').text(slidesAdvantagesIContactsContactsEmail);

				$('#kyiv_adress').html(slidesAdvantagesIContactsContactsKyivAddress);
				$('#kharkiv_adress').html(slidesAdvantagesIContactsContactsKharkivAddress);

				$('#date').html(slidesAdvantagesIContactsContactsDate);
				$('#cscompany').html(slidesAdvantagesIContactsContactsCopy);

				}
				local();

				if(callback) {
					callback();
				}
			}
		})
	}

	//локализация
	local_active('.local_ru')
	function local_active(subj) {
		$(".localiz_").removeClass('localizations_active');
		$(subj).addClass('localizations_active');
	}
	variables(lang);
	$('.local_ru').click(function() {
		local_active(this);
		lang = 'ru';
		variables(lang, function() {
			$('.arrow_down').addClass("opacity_style_full");	
		});
	})
	$('.local_ua').click(function() {
		local_active(this);
		lang = 'ua';
		variables(lang, function() {
			$('.arrow_down').addClass("opacity_style_full");	
		});
	})
	$('.local_en').click(function() {
		local_active(this);
		lang = 'en';
		variables(lang, function() {
			$('.arrow_down').addClass("opacity_style_full");	
		});
	})

	//Опускаем/поднимаем менюшку
	var check = false;
	$('.menu_up_down').click(function(){
		if(check) {
			$('header').css({
			"top":"-60px",
			"transition":"1s"
			})
			check = false;
			return;
		}
		if(!check) {
			$('header').css({
			"top":"0px",
			"transition":"1s"
			})
			check = true;
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
	  		$('#showMore').css({
	  			"display": "block",
	  			"opacity":"1",
	  			"cursor": "pointer"
	  		});
	  		//$('#showMore').addClass("showMore_full");
	  		$('.arrow_down').addClass("opacity_style_full");
	  	});
	});

	//плавно выезжаем на втором слайде
	function secondAnimation () {
		$( ".m_content_1" ).animate({
		    top: "0px",
		    opacity: 1
		  }, 1500, function() {
		  	$( ".m_content_2" ).animate({
		  		top: "0px",
		   		opacity: 1
		  	}, 1500, function() {
		  		$( ".m_content_3" ).animate({
			  		top: "0px",
			   		opacity: 1
			    }, 1500, function() {
		  			$( ".m_content_4" ).animate({
				  		top: "0px",
				   		opacity: 1
				   	}, 1500, function() {
			  			$( ".m_content_5" ).animate({
					  		top: "0px",
					   		opacity: 1
		  				}, 1500);
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
		$('header').removeClass( "header_low" );
		$('#mainTitle').removeClass( "mainTitle_low" );
		$('#welcomeMessage').removeClass( "welcomeMessage_low" );
		$('#showMore').removeClass( "showMore_low" );
		$('.upper_container').removeClass( "upper_container_low" );
		$('.simple_logo').removeClass( "simple_logo_low" );
	}


if( $(window).width()<=768) {
  	low_size();
}
$( window ).resize(function() {
  if( $(window).width()<=768) {
  	low_size();
  }
  else {
  	high_size();
  }
});

var listener;
var counter = 0;

$('#showMore, #advantages, .sb_1').click(function () {
	counter = 1;
	secondAnimation ();
	slider_buttons(counter);
	click_remove_classes()
})
$('#for_banks, .sb_2').click(function () {
	counter = 2;
	slider_buttons(counter);
	click_remove_classes()
})
$('#corp_clients, .sb_3').click(function () {
	counter = 3;
	slider_buttons(counter);
	click_remove_classes()
})
$('#private_clients, .sb_4').click(function () {
	counter = 4;
	slider_buttons(counter);
	click_remove_classes()
})
$('#sequrity, .sb_5').click(function () {
	counter = 5;
	slider_buttons(counter);
	click_remove_classes()
})
$('#ifobs_mobile, .sb_6').click(function () {
	counter = 6;
	slider_buttons(counter);
	click_remove_classes()
})
$('#contacts, .sb_7').click(function () {
	counter = 7;
	slider_buttons(counter);
	click_remove_classes()
})

$('.nav-click, .s_button').click(function(){
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


//плавный скролл по сайту колесиком
window.onmousewheel = function(e) {

var array = [ $('#first_slide_main').offset().top, $('#advantages_ifobs').offset().top, $('#for_banks_ifobs').offset().top, $('#coorporate_ifobs').offset().top, $('#private_clients_ifobs').offset().top, $('#sequrity_ifobs').offset().top, $('#mobile_ifobs').offset().top, $('#contacts_ifobs').offset().top]

	if(listener) {
		return;
	}
	listener = true;
    var delta = e.deltaY || e.detail || e.wheelDelta;
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
	$('body,html').animate({scrollTop: top}, 2000);
});
$("a").on("click", function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
	top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 2000);
});




});


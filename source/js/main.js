$(document).ready(function () {

	//var localizations;  //
	var lang = 'ru';

	function variables(local) {

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


				//var slidesAdvantagesSlideHeader         = {idLang: "qqq", text: tedata[lang].slides.advantages.slideHeader};
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


				var slidesAdvantagesSecuritySvgTemplate            = data[lang].slides.security.svgTemplate;
				var slidesAdvantagesSecuritySlideHeader            = data[lang].slides.security.slideHeader;
				var slidesAdvantagesSecuritySlideLists             = data[lang].slides.security.slideLists;
				var slidesAdvantagesSecuritySlideListsTitle        = data[lang].slides.security.slideLists[0].title;
				var slidesAdvantagesSecuritySlideListsListIcon0    = data[lang].slides.security.slideLists[0].list[0].icon;
				var slidesAdvantagesSecuritySlideListsListText0    = data[lang].slides.security.slideLists[0].list[0].text;
				var slidesAdvantagesSecuritySlideListsListIcon1    = data[lang].slides.security.slideLists[0].list[1].icon;
				var slidesAdvantagesSecuritySlideListsListText1    = data[lang].slides.security.slideLists[0].list[1].text;
				var slidesAdvantagesSecuritySlideListsListIcon2    = data[lang].slides.security.slideLists[0].list[2].icon;
				var slidesAdvantagesSecuritySlideListsListText2    = data[lang].slides.security.slideLists[0].list[2].text;
				var slidesAdvantagesSecuritySlideListsTitle        = data[lang].slides.security.slideLists[1].title;
				var slidesAdvantagesSecuritySlideListsListIcon0    = data[lang].slides.security.slideLists[1].list[0].icon;
				var slidesAdvantagesSecuritySlideListsListText0    = data[lang].slides.security.slideLists[1].list[0].text;
				var slidesAdvantagesSecuritySlideListsListIcon1    = data[lang].slides.security.slideLists[1].list[1].icon;
				var slidesAdvantagesSecuritySlideListsListText1    = data[lang].slides.security.slideLists[1].list[1].text;
				var slidesAdvantagesSecuritySlideListsListIcon2    = data[lang].slides.security.slideLists[1].list[2].icon;
				var slidesAdvantagesSecuritySlideListsListText2    = data[lang].slides.security.slideLists[1].list[2].text;


				var slidesAdvantagesIfobsmobileSvgTemplate            = data[lang].slides.ifobsmobile.svgTemplate;
				var slidesAdvantagesIfobsmobileSlideHeader            = data[lang].slides.ifobsmobile.slideHeader;
				var slidesAdvantagesIfobsmobileSlideLists             = data[lang].slides.ifobsmobile.slideLists;
				var slidesAdvantagesIfobsmobileSlideListsTitle        = data[lang].slides.ifobsmobile.slideLists[0].title;
				var slidesAdvantagesIfobsmobileSlideListsListIcon0    = data[lang].slides.ifobsmobile.slideLists[0].list[0].icon;
				var slidesAdvantagesIfobsmobileSlideListsListText0    = data[lang].slides.ifobsmobile.slideLists[0].list[0].text;
				var slidesAdvantagesIfobsmobileSlideListsListIcon1    = data[lang].slides.ifobsmobile.slideLists[0].list[1].icon;
				var slidesAdvantagesIfobsmobileSlideListsListText1    = data[lang].slides.ifobsmobile.slideLists[0].list[1].text;
				var slidesAdvantagesIfobsmobileSlideListsListIcon2    = data[lang].slides.ifobsmobile.slideLists[0].list[2].icon;
				var slidesAdvantagesIfobsmobileSlideListsListText2    = data[lang].slides.ifobsmobile.slideLists[0].list[2].text;
				var slidesAdvantagesIfobsmobileSlideListsTitle        = data[lang].slides.ifobsmobile.slideLists[1].title;
				var slidesAdvantagesIfobsmobileSlideListsListIcon0    = data[lang].slides.ifobsmobile.slideLists[1].list[0].icon;
				var slidesAdvantagesIfobsmobileSlideListsListText0    = data[lang].slides.ifobsmobile.slideLists[1].list[0].text;
				var slidesAdvantagesIfobsmobileSlideListsListIcon1    = data[lang].slides.ifobsmobile.slideLists[1].list[1].icon;
				var slidesAdvantagesIfobsmobileSlideListsListText1    = data[lang].slides.ifobsmobile.slideLists[1].list[1].text;
				var slidesAdvantagesIfobsmobileSlideListsListIcon2    = data[lang].slides.ifobsmobile.slideLists[1].list[2].icon;
				var slidesAdvantagesIfobsmobileSlideListsListText2    = data[lang].slides.ifobsmobile.slideLists[1].list[2].text;


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

				//alert(miscLearnMore);	

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
				$('#showMore').text(miscLearnMore);

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


				}

				local();
			}
		})
	}

	//клацаем по языкам и переводим сайт
	variables(lang);
	$('.local_ru').click(function() {
		// body...
		lang = 'ru';
		variables(lang);
	})
	$('.local_ua').click(function() {
		// body...
		lang = 'ua';
		variables(lang);
	})
	$('.local_en').click(function() {
		// body...
		lang = 'en';
		variables(lang);
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
	  	}, 3000, function() {
	  		$('#showMore').css({
	  			"display": "block",
	  			"opacity":"1",
	  			"cursor": "pointer"
	  		});
	  		$('.arrow_down').css({
	  			"display": "block",
	  			"opacity":"1",
	  			"cursor": "pointer"
	  		});
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


//отслеживаем скролл




window.onscroll = function() {
	var top = $(".m_content_1").offset().top - $(window).scrollTop();
	if(top<=500) {
		secondAnimation ()
	}
}



});


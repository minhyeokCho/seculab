/* 《 스크립트 》 */
$(document).ready(function(){
	$('#header').length && headerFixed(); //헤더 고정
	$('.btn_top').length && goTop(); //상단 이동
	$('.main_slide').length && mainSlide(); //메인 슬라이드
	$('.pnr_slide').length && pnrSlide(); //PROJECTS 슬라이드
});

function mainSlide() {// 메인 슬라이드
	var mainSlide = new Swiper('.main_slide', {
		slidesPerView : 1,
		loop:true,
		loopAdditionalSlides : 1,
		speed:800,
		autoplay:{
			delay:5000,
			disableOnInteraction:false
		},
		pagination: {
			el: ".swiper_bullet",
			type : 'bullets',
			clickable: true,
		}
	});
}

function pnrSlide() {// PROJECTS 슬라이드
	var pnrSlide = new Swiper('.pnr_slide', {
		slidesPerView : 5,
		loop:true,
		loopAdditionalSlides : 5,
		speed:800,
		spaceBetween: 6, 
		observer: true,
		observeParents: true,
		autoplay:{
			delay:1500,
			disableOnInteraction:false
		},
		navigation : {
			prevEl : '.arr_prev',
			nextEl : '.arr_next',
		},
		breakpoints: {
			1201: {
				spaceBetween: 20
			}
		}
	});
}

function headerFixed() { //헤더 고정
	var $header = $('#header');

	$(window).on('scroll.headerFixed', function () {
		if ($(this).scrollTop() > 0) {
			$header.addClass('fixed');
		} else {
			$header.removeClass('fixed');
		}
	});
}

function goTop() { // 상단 이동
	$('.btn_top').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, '500');
	})
}

// 모바일 메뉴
$(document).ready(function() {
	var $btnMenu = $('.btn_menu');
	var $mMenu = $('.m_menu');
	var breakpoint = 1200;
	var isOpen = false;

	function handleMobileMenuState() {
		if ($(window).width() > breakpoint) {
			$mMenu.hide();
			$btnMenu.removeClass('active');
			$('body').removeClass('no-scroll');
			isOpen = false;
		}
	}

	handleMobileMenuState();

	$btnMenu.on('click', function(e) {
		e.preventDefault();
		if ($(window).width() <= breakpoint) {
			$(this).toggleClass('active'); 

			if(!isOpen) {
				$mMenu.stop(true, true).fadeIn(300);
				$('body').addClass('no-scroll')
			}else {
				$mMenu.stop(true, true).fadeOut(300);
				$('body').removeClass('no-scroll')
			}

			isOpen = !isOpen
		}
	});

	var resizeTimer;
	$(window).on('resize', function() {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
			handleMobileMenuState(); 
		}, 200); 
	});

	$('.m_menu .dept_01 > a').on('click', function(e) {
		e.preventDefault(); 

		var $parentLi = $(this).parent('.dept_01');
		var $dept_02 = $parentLi.children('.dept_02');

		var isAlreadyActive = $parentLi.hasClass('active');

		$('.m_menu .dept_02').stop().slideUp(300);
		$('.m_menu .dept_01').removeClass('active');

		if (!isAlreadyActive) {
			$parentLi.addClass('active');
			$dept_02.stop().slideDown(300);
		}
	});
});

//GNB 메뉴
$(document).ready(function() {
	var $header = $('#header');
	var $dept02 = $('.menu_wrap .dept_02');
	var $menuBg = $('.menu_bg');
	var $nav = $('.menu_wrap nav');

	$dept02.hide();
	$menuBg.hide();

	// nav 영역에 마우스가 들어왔을 때
	$nav.on('mouseenter', function() {
		$dept02.stop().fadeIn(300);
		$menuBg.stop().slideDown(300);
		$header.addClass('wh')
	});

	// nav 영역에서 마우스가 나갔을 때
	$header.on('mouseleave', function() {
		$dept02.stop().fadeOut(300);
		$menuBg.stop().slideUp(300);
		$header.removeClass('wh')
	});
});
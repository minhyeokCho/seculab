/* 《 스크립트 》 */
$(document).ready(function(){
	$('#header').length && headerFixed(); //헤더 고정
	$('.main_slide').length && mainSlide(); //메인 슬라이드
	$('.pnr_slide').length && pnrSlide(); //PROJECTS 슬라이드
});

function mainSlide() {// 메인 슬라이드
	var mainSlide = new Swiper('.main_slide', {
		slidesPerView : '1',
		loop:true,
		loopAdditionalSlides : 1,
		speed:800,
		// autoplay:{
		//   delay:500,
		//   disableOnInteraction:false
		// },
		pagination: {
			el: ".swiper_bullet",
			type : 'bullets',
			clickable: true,
		}
	});
}

function pnrSlide() {// PROJECTS 슬라이드
	var pnrSlide = new Swiper('.pnr_slide', {
		slidesPerView : 'auto',
		loop:true,
		loopAdditionalSlides : 10,
		speed:800,
		spaceBetween: 20, 
		// autoplay:{
		//   delay:500,
		//   disableOnInteraction:false
		// },
		slidesPerGroup: 1,
		grid: {
			rows: 2,
			fill: 'row'
		},
		navigation : {
			prevEl : '.arr_prev', // 이번 버튼 클래스명
			nextEl : '.arr_next', // 다음 버튼 클래스명
		},
	});
}

function headerFixed() {
	var $header = $('#header');

	$(window).on('scroll.headerFixed', function () {
		if ($(this).scrollTop() > 0) {
			$header.addClass('fixed');
		} else {
			$header.removeClass('fixed');
		}
	});
}

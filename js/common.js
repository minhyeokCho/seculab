/* 《 스크립트 》 */
$(document).ready(function(){
	$('.main_slide').length && mainSlide(); //메인 슬라이드
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


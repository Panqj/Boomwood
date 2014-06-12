$(function($) {
	$("#m-about").hover(function() {
		$(".mega-menu, #about-bamboozle, #about-bamboozle div").css("display", "block");
		$("#our-range, #our-range div").css("display", "none");
		$(".extras").css("display", "block");
	});
	$("#m-out").hover(function() {
		$(".mega-menu, #our-range, #our-range div").css("display", "block");
		$("#about-bamboozle, #about-bamboozle div").css("display", "none");
		$(".extras").css("display", "block");
	});
	$(".mega-menu").mouseleave(function() {
		$(".mega-menu, .mega-menu .container>div").css("display", "none");
	})
	
	$("nav .nav li:nth-child(n+3) a").hover(function() {
		$(".mega-menu, .mega-menu .container>div").css("display", "none");
	});
	
	$("nav .nav li:nth-child(1) a").hover(function() {
		$(".mega-menu, .mega-menu .container>div").css("display", "none");
	});

	effect = { left: true, fade: true, easing: 'pow2', order: 'rectangle', duration: 2000 };
	var demoSlider_2 = Sliderman.slider({container: 'full-slider', width: 1600, height: 680, effects: [ effect ],
		display: {
			autoplay: 5000
			// loading: {background: '#000000', opacity: 0.5, image: 'img/loading.gif'},
			// buttons: {hide: true, opacity: 1, prev: {className: 'SliderNamePrev_2', label: ''}, next: {className: 'SliderNameNext_2', label: ''}},
			// description: {hide: true, background: '#000000', opacity: 0.4, height: 50, position: 'bottom'},
			// navigation: {container: 'SliderNameNavigation_2', label: '<img src="img/clear.gif" />'}
		}
	});
	
})
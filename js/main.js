$(function($) {
	$("#m-about").hover(function() {
		$(".mega-menu, #about-bamboozle, #about-bamboozle div").css("display", "block");
		$("#our-range, #our-range div").css("display", "none");
		$("#gallery, #gallery div").css("display", "none");
		$(".extras").css("display", "block");
	});
	$("#m-out").hover(function() {
		$(".mega-menu, #our-range, #our-range div").css("display", "block");
		$("#about-bamboozle, #about-bamboozle div").css("display", "none");
		$("#gallery, #gallery div").css("display", "none");
		$(".extras").css("display", "block");
	});
	$("#m-gallery").hover(function() {
		$(".mega-menu, #gallery, #gallery div").css("display", "block");
		$("#about-bamboozle, #about-bamboozle div").css("display", "none");
		$("#our-range, #our-range div").css("display", "none");
		$(".extras").css("display", "block");
	})
	$(".mega-menu").mouseleave(function() {
		$(".mega-menu, .mega-menu .container>div").css("display", "none");
	})
	
	$("nav .nav li:nth-child(n+4) a").hover(function() {
		$(".mega-menu, .mega-menu .container>div").css("display", "none");
	});
	
})
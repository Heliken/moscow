/* Trigger when page is ready */


$(document).ready(function(){

	// Your functions go here
	var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
	var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

	if (isSafari && iOS) {
	   //$("body").addClass("body_safari");
	}
	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
	if(isAndroid) {
	  // $("body").addClass("body_safari");
	}
	$(".test-wrap:not(.test-wrap_simple)").slick({
		arrows:false,
		fade:true,
		draggable:false,
        accessibility:false,
        scroll:false,
        swipe:false,
        touchMove:false,
        initialSlide:0,
        infinite:false,
        slide:".test-unit",
        adaptiveHeight:true,
	})
	$(".test-wrap_simple").slick({
		arrows:false,
		fade:true,
		draggable:false,
		speed:600,
        accessibility:false,
        scroll:false,
        swipe:false,
        touchMove:false,
        initialSlide:0,
        infinite:false,
        slide:".test-unit",
        adaptiveHeight:true,
	})		
	$(".test-unit-content-button").click(function(){
		$(".test-wrap").slick("slickNext");
		$(".test-wrap_simple").slick("slickNext");
		$(".progress").addClass("progress_active");
		
	});
	$('.test-unit_question-info').slick({
		arrows:false,
		fade:true,
		draggable:false,
        accessibility:false,
        scroll:false,
        swipe:false,
        touchMove:false,
        adaptiveHeight:true,
	})
	$(".test-unit_question-results-unit-button").click(function(){
		$(".test-wrap").slick("slickNext");
		var current=$(".progress-unit_current");
		current.removeClass("progress-unit_current");
		current.next().addClass("progress-unit_current");
		
	})
	$(".test-unit_final-button").click(function(){
		$(".test-wrap").slick("slickGoTo",1,false);
		$(".test-unit_question-info").slick("slickGoTo",0,false);
		$(".progress-unit").removeClass("progress-unit_active progress-unit_correct progress-unit_wrong");
		$(".progress-unit").eq("0").addClass("progress-unit_current");
	})
	$(".test-unit_question-answers-unit").click(function(){
		var text=$(this).html();
		$(this).parents(".test-unit_question-info").slick("slickNext");
		if($(this).hasClass("test-unit_question-answers-unit_correct")){
			var current=$(".progress-unit_current").addClass("progress-unit_correct");
			$(this).parents(".test-unit_question-info").find(".test-unit_question-results").addClass("test-unit_question-results_correct");
		} else{
			var current=$(".progress-unit_current").addClass("progress-unit_wrong");
		}
		$(this).parents(".test-unit_question-info").find(".test-unit_question-results-unit_wrong .test-unit_question-results-unit-info-header-title").html(text);
	})
	
	imageSize();
	$(".toTest1").click(function(){
		$('html, body').animate({
            scrollTop: $("#test1").offset().top - 50
        }, 1000);
	})
	$(".toTest2").click(function(){
		$('html, body').animate({
            scrollTop: $("#test2").offset().top - 50
        }, 1000);
	})
	$(".test-unit_question-button").click(function(){
		$(".test-wrap_simple").slick("slickNext");
		$(this).parents(".test-unit_question").find(".test-unit_question-image").addClass("test-unit_question-image_move");
	})
});
function imageSize(){
	$(".test-unit_question-top").each(function(){

		var pretitleHeight=$(this).find(".test-unit_question-pretitle").outerHeight(true);
		var titleHeight=$(this).find(".test-unit_question-title").outerHeight(true);
		var sum=pretitleHeight+titleHeight;
		var img=$(this).find(".test-unit_question-image");
		img.css({"height":"calc(100% - "+sum+"px)"});
	})
	$(".test-unit_final-top").each(function(){
		var pretitleHeight=$(this).find(".test-unit-content-pretitle").outerHeight(true);
		var titleHeight=$(this).find(".test-unit-content-title").outerHeight(true);
		var sum=pretitleHeight+titleHeight;
		var img=$(this).find(".test-unit_final-image");
		img.css({"height":"calc(100% - "+sum+"px)"});
	});
}
$(window).on("resize load",function(){
	imageSize();
})

/* Optional triggers

$(window).load(function() {
	
});

$(window).resize(function() { 
	
});

*/
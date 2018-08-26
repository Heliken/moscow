/* Trigger when page is ready */


$(document).ready(function(){

	// Your functions go here
	var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
	var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

	if (isSafari && iOS) {
	   $("body").addClass("body_safari");
	}
	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
	if(isAndroid) {
	   $("body").addClass("body_safari");
	}
	$(".main-wrap").slick({
		arrows:false,
		fade:true,
		draggable:false,
        accessibility:false,
        scroll:false,
        swipe:false,
        touchMove:false,
        initialSlide:0,
        infinite:false,
        slide:".main-unit",
        adaptiveHeight:true,
	})	
	$(".main-unit-content-button").click(function(){
		$(".main-wrap").slick("slickNext");
		$(".progress").addClass("progress_active");
		$('body,html').animate({
			scrollTop: 0
		}, 500);
	});
	$('.main-unit_question-info').slick({
		arrows:false,
		fade:true,
		draggable:false,
        accessibility:false,
        scroll:false,
        swipe:false,
        touchMove:false,
        adaptiveHeight:true,
	})
	$(".main-unit_question-results-unit-button").click(function(){
		$(".main-wrap").slick("slickNext");
		var current=$(".progress-unit_current");
		current.removeClass("progress-unit_current");
		current.next().addClass("progress-unit_current");
		$('body,html').animate({
			scrollTop: 0
		}, 500);
	})
	$(".main-unit_final-button").click(function(){
		$(".main-wrap").slick("slickGoTo",1,false);
		$(".main-unit_question-info").slick("slickGoTo",0,false);
		$(".progress-unit").removeClass("progress-unit_active progress-unit_correct progress-unit_wrong");
		$(".progress-unit").eq("0").addClass("progress-unit_current");
	})
	$(".main-unit_question-answers-unit").click(function(){
		var text=$(this).html();
		$(this).parents(".main-unit_question-info").slick("slickNext");
		if($(this).hasClass("main-unit_question-answers-unit_correct")){
			var current=$(".progress-unit_current").addClass("progress-unit_correct");
			$(this).parents(".main-unit_question-info").find(".main-unit_question-results").addClass("main-unit_question-results_correct");
		} else{
			var current=$(".progress-unit_current").addClass("progress-unit_wrong");
		}
		$(this).parents(".main-unit_question-info").find(".main-unit_question-results-unit_wrong .main-unit_question-results-unit-info-header-title").html(text);
	})
	
	imageSize();
});
function imageSize(){
	$(".main-unit_question-top").each(function(){

		var pretitleHeight=$(this).find(".main-unit_question-pretitle").outerHeight(true);
		var titleHeight=$(this).find(".main-unit_question-title").outerHeight(true);
		var sum=pretitleHeight+titleHeight;
		var img=$(this).find(".main-unit_question-image");
		img.css({"height":"calc(100% - "+sum+"px)"});
	})
	$(".main-unit_final-top").each(function(){
		var pretitleHeight=$(this).find(".main-unit-content-pretitle").outerHeight(true);
		var titleHeight=$(this).find(".main-unit-content-title").outerHeight(true);
		var sum=pretitleHeight+titleHeight;
		var img=$(this).find(".main-unit_final-image");
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
/* Trigger when page is ready */
$(document).ready(function(){

	// Your functions go here

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
		$(this).parents(".main-unit_question-info").slick("slickNext");
		if($(this).hasClass("main-unit_question-answers-unit_correct")){
			var current=$(".progress-unit_current").addClass("progress-unit_correct");
			$(this).parents(".main-unit_question-info").find(".main-unit_question-results").addClass("main-unit_question-results_correct");
		} else{
			var current=$(".progress-unit_current").addClass("progress-unit_wrong");
		}

	})
});


/* Optional triggers

$(window).load(function() {
	
});

$(window).resize(function() { 
	
});

*/
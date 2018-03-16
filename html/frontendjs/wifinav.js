 $(document).ready(function () {
 	
 	var bodyWidth = $('body').width();

 	$("#sliderCards>li").width(bodyWidth*0.8);
	$("#sliderCards>li").css({padding: '20px'});	

	var maxHeight = 0;
	$('#sliderCards>li').each(function() {
		if($(this).height() > maxHeight) {
			maxHeight = $(this).height();  
		}
	});
	$("#sliderCards>li").height(maxHeight);

	var liWidth = $("#sliderCards>li").outerWidth(true);

	
	var initialPos = (bodyWidth-liWidth)/2;
	$("#sliderCards").css({left: initialPos});
	
	var bolinhasWidth = $('ul.bolinhas').width();
	var liWidthOuterFalse = $("#sliderCards>li").outerWidth(false);
	var initialBolinhasPos = (liWidthOuterFalse-bolinhasWidth)/2;
	$("ul.bolinhas").css({left: initialBolinhasPos});

	$( document ).on( "swiperight", "#sliderCards>li", function( event ) {
		moveRight(this);
    });

	$( document ).on( "swipeleft", "#sliderCards>li", function( event ) {
		moveLeft(this);
    });

	function moveRight(element){
		var first = $(element).hasClass('first');
		if(!first){
			$("#sliderCards").animate({ 
				left: "+="+liWidth,
			}, 300 );
		}
	}

	function moveLeft(element){
 		var last = $(element).hasClass('last');
		if(!last){
		$("#sliderCards").animate({ 
			left: "-="+liWidth,
			}, 300 );
		}
 	}


 })


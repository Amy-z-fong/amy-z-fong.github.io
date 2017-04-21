$(document).ready(function(){

	$('#about').click(function(){
		$( "#world-map, .pin" ).fadeOut( "slow" );
		$("#about-container").fadeIn( "slow");
	});

	$('#name').click(function(){
		$( "#world-map, .pin" ).fadeIn( "slow" );
		$("#about-container").fadeOut( "slow");
	});




$('#about').hover(function(){

	$('#about').addClass("about-hovered");
}, function(){
$('#about').removeClass("about-hovered");
});

$('#name').hover(function(){
	$('#name').addClass("name-hovered");
}, function(){
$('#name').removeClass("name-hovered");
});

// LOS ANGELES

$('#los-angeles').click(function(){
	$( "#world-map, .pin" ).fadeOut( "slow" );
	$("#modal-container-los-angeles").fadeIn( "slow ");
});


$('#los-angeles').hover(function(){
	$(this).addClass("element-hovered");
}, function(){
$(this).removeClass("element-hovered");
});

	$("#modal-overlay-los-angeles").click(
		function(){
			$("#modal-container-los-angeles").fadeOut( "slow");
			$( "#world-map, .pin" ).fadeIn( "slow" );
		}
	);

	$( "#carousel-next" ).click(function(){
    currentMarginLeft=parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (currentMarginLeft==-1920) {
      return false;
    } else {
      $( '#carousel' ).css( "margin-left", currentMarginLeft-960 );
    }
  });

$( "#carousel-prev" ).click(function(){
  currentMarginLeft=parseInt($('#carousel').css('margin-left').replace("px", ""));
  if (currentMarginLeft==0) {
    return false;
  } else {
    $( '#carousel' ).css( "margin-left", currentMarginLeft+960 );
  }
});


// DC

$('#DC').click(function(){

	$( "#world-map, .pin" ).fadeOut( "slow" );
	$("#modal-container-DC").fadeIn( "slow ");
});


$('#DC').hover(function(){
	$(this).addClass("element-hovered");
}, function(){
$(this).removeClass("element-hovered");
});

	$("#modal-overlay-DC").click(
		function(){
			$("#modal-container-DC").fadeOut( "slow");
			$( "#world-map, .pin" ).fadeIn( "slow" );
		}
	);
});

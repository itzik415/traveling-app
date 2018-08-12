

$(document).ready(function() {

    //Nav icon react when there is a click on one of its elements
    $(".navigation__item").click(function(){
        $('#navi-toggle').attr('checked', false);
    });

    //"discoer tours" and "learn more" buttons sliding slow to the right section
    $('#header-btn, #learn-more-btn').click(function(){
    	$('html, body').animate({
    		scrollTop : $('#section-tours').offset().top
    	}, 500) 	
    })
})
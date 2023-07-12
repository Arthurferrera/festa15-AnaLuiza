function go_to(item){

    $("html, body").animate({scrollTop: $(item).offset().top}, 500);

    if( $('.menu_mobile').is(':visible') ){

        $('.menu_mobile').hide('slide', {'direction': 'left'}, 200);

    }

}

function menu(){ 

    if( $('.menu_mobile').is(':visible') ){

        $('.menu_mobile').hide('slide', {'direction': 'left'}, 200);

    }else{

        $('.menu_mobile').show('slide', {'direction': 'left'}, 400);

    }

}

function loading(){

    $('.loading').fadeOut(400);

    $('body').css({'overflow':'auto'});

    setTimeout(function(){

        $('.loading').remove();

    }, 1000);

}

function scroll_to_top(){
    
    $("html, body").animate({scrollTop: $("body").offset().top}, 500);

}

function show_button(){

    if( $(document).scrollTop() > 400 ){
        
        if( !$('.back_top').is(':visible') ){
            $('.back_top').fadeIn(500);
        }

    }else{

        if( $('.back_top').is(':visible') ){
            $('.back_top').fadeOut(300);
        }

    }
}

function control_music(){

    if( $('.box_playlist').is(':visible') ){

        $('.box_playlist').hide('slide', {'direction': 'left'}, 200);            

    }else{

        $('.box_playlist').show('slide', {'direction': 'left'}, 200);     

    }

}

$(document).bind('scroll', function(){

    show_button();

});

window.onload = function(e){
    setTimeout(function(){
        loading();   
        show_button();
		
		var playerstatus = $('#box_playlist_control').attr('data-playerstatus');
		if(playerstatus=='on')
		{		
			$('#modal_play').modal('show');			
		}
		//console.log(playerstatus);
    }, 1000);
}
jQuery(document).ready(function ($) {
    // Inizio documento

    var arrowLeft = $('#arrow-left');
    var arrowRight = $('#arrow-right');


    arrowRight.click(function () { 
        
        if (( $('.first').hasClass('active') ) && ( $('.first-index').hasClass('index-image-color') ) ) {
            
            $('.first').removeClass('active').addClass('display_none');
            $('.first').next().addClass('active');
            $('.first-index').removeClass('index-image-color');
            $('.first-index').next().addClass('index-image-color');
            
         
        } else if ( $('.first').next().hasClass('active') ) {
            
            $('.first').next().removeClass('active');           
            $('.last').prev().addClass('active');   
            $('.first-index').next().removeClass('index-image-color');
            $('.last-index').prev().addClass('index-image-color');

        } else if ( $('.last').prev().hasClass('active') ) {

            $('.last').prev().removeClass('active');
            $('.last').addClass('active');
            $('.last-index').prev().removeClass('index-image-color');
            $('.last-index').addClass('index-image-color');
            
        } else {

            $('.last').removeClass('active');
            $('.first').addClass('active');
            $('.last-index').removeClass('index-image-color');
            $('.first-index').addClass('index-image-color');
        
        }

    });

    arrowLeft.click( function() {
        
        if ( $('.first').hasClass('active') ) {
            
            $('.first').removeClass('active').addClass('display_none');
            $('.last').addClass('active');
            $('.first-index').removeClass('index-image-color');
            $('.last-index').addClass('index-image-color');

        
        } else if ( $('.last').hasClass('active') ) {
            
            $('.last').removeClass('active');           
            $('.last').prev().addClass('active');
            $('.last-index').prev().addClass('index-image-color');
            $('.last-index').removeClass('index-image-color');

        } else if ( $('.last').prev().hasClass('active')) {

            $('.last').prev().removeClass('active');
            $('.first').next().addClass('active');
            $('.first-index').next().addClass('index-image-color');
            $('.last-index').prev().removeClass('index-image-color');
            
        } else {

            $('.first').next().removeClass('active');
            $('.first').addClass('active');
            $('.first-index').addClass('index-image-color');
            $('.first-index').next().removeClass('index-image-color');
            
        }

    });


    
    $(document).keydown(function (e) { 
        console.log(e.keyCode);

        if (e.keyCode == 39) {
            
            if (( $('.first').hasClass('active') ) && ( $('.first-index').hasClass('index-image-color') ) ) {
            
                $('.first').removeClass('active').addClass('display_none');
                $('.first').next().addClass('active');
                $('.first-index').removeClass('index-image-color');
                $('.first-index').next().addClass('index-image-color');
                
             
            } else if ( $('.first').next().hasClass('active') ) {
                
                $('.first').next().removeClass('active');           
                $('.last').prev().addClass('active');   
                $('.first-index').next().removeClass('index-image-color');
                $('.last-index').prev().addClass('index-image-color');
    
            } else if ( $('.last').prev().hasClass('active') ) {
    
                $('.last').prev().removeClass('active');
                $('.last').addClass('active');
                $('.last-index').prev().removeClass('index-image-color');
                $('.last-index').addClass('index-image-color');
                
            } else {
    
                $('.last').removeClass('active');
                $('.first').addClass('active');
                $('.last-index').removeClass('index-image-color');
                $('.first-index').addClass('index-image-color');
            
            }

        } else if ( e.keyCode == 37 ) {
            
            if ( $('.first').hasClass('active') ) {
            
                $('.first').removeClass('active').addClass('display_none');
                $('.last').addClass('active');
                $('.first-index').removeClass('index-image-color');
                $('.last-index').addClass('index-image-color');
    
            
            } else if ( $('.last').hasClass('active') ) {
                
                $('.last').removeClass('active');           
                $('.last').prev().addClass('active');
                $('.last-index').prev().addClass('index-image-color');
                $('.last-index').removeClass('index-image-color');
    
            } else if ( $('.last').prev().hasClass('active')) {
    
                $('.last').prev().removeClass('active');
                $('.first').next().addClass('active');
                $('.first-index').next().addClass('index-image-color');
                $('.last-index').prev().removeClass('index-image-color');
                
            } else {
    
                $('.first').next().removeClass('active');
                $('.first').addClass('active');
                $('.first-index').addClass('index-image-color');
                $('.first-index').next().removeClass('index-image-color');
                
            }
            
        }
        
    });
    
}); // Fine Documento 
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
            
        
        } else if ( ( $('.first').next().hasClass('active') ) && ( $('.first-index').next().hasClass('index-image-color'))) {
            
            $('.first').next().removeClass('active');           
            $('.last').prev().addClass('active');   
            $('.first-index').next().removeClass('index-image-color');
            $('.last-index').perv().addClass('index-image-color');

        } else if ( $('.last').prev().hasClass('active')) {

            $('.last').prev().removeClass('active');
            $('.last').addClass('active');
            
        } else {

            $('.last').removeClass('active');
            $('.first').addClass('active');
        
        }

    });

    arrowLeft.click( function() {
        
        if ( $('.first').hasClass('active') ) {
            
            $('.first').removeClass('active').addClass('display_none');
            $('.last').addClass('active');

        
        } else if ( $('.last').hasClass('active') ) {
            
            $('.last').removeClass('active');           
            $('.last').prev().addClass('active');

        } else if ( $('.last').prev().hasClass('active')) {

            $('.last').prev().removeClass('active');
            $('.first').next().addClass('active');
            
        } else {

            $('.first').next().removeClass('active');
            $('.first').addClass('active');
        
        }

    });


    
    $(document).keydown(function (e) { 
        console.log(e.keyCode);

        if (e.keyCode == 39) {
            
            if ( $('.first').hasClass('active') ) {
            
                $('.first').removeClass('active').addClass('display_none');
                $('.first').next().addClass('active');
    
            
            } else if ( $('.first').next().hasClass('active') ) {
                
                $('.first').next().removeClass('active');           
                $('.last').prev().addClass('active');
    
            } else if ( $('.last').prev().hasClass('active')) {
    
                $('.last').prev().removeClass('active');
                $('.last').addClass('active');
                
            } else {
    
                $('.last').removeClass('active');
                $('.first').addClass('active');
            
            }

        } else if ( e.keyCode == 37 ) {
            
            if ( $('.first').hasClass('active') ) {
            
                $('.first').removeClass('active').addClass('display_none');
                $('.last').addClass('active');
    
            
            } else if ( $('.last').hasClass('active') ) {
                
                $('.last').removeClass('active');           
                $('.last').prev().addClass('active');
    
            } else if ( $('.last').prev().hasClass('active')) {
    
                $('.last').prev().removeClass('active');
                $('.first').next().addClass('active');
                
            } else {
    
                $('.first').next().removeClass('active');
                $('.first').addClass('active');
            
            }
            
        }
        
    });
    
}); // Fine Documento 
jQuery(document).ready(function ($) {
    // Inizio documento

    var arrowLeft = $('#arrow-left');
    var arrowRight = $('#arrow-right');


    arrowRight.click(function () { 
        

        if ( $('.first').hasClass('active') ) {
            
            $('.first').removeClass('active').addClass('display_none');
            $('.first').next().addClass('active');

        
        } else if ( $('.first').next().hasClass('active') ) {
            
            $('.first').next().removeClass('active');           
            $('.last').prev().addClass('active');

        } else if ( $('.last').prev().hasClass('active')) {

            $('.last').prev().removeClass('active');
            $('.last').addClass('active');
            
        } else  {
            $('.last').removeClass('active');
            $('.first').addClass('active');
        }



    });
    
}); // Fine Documento 
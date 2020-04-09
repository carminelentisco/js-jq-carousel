jQuery(document).ready(function ($) {
    // Inizio documento

    var arrowLeft = $('#arrow-left');
    var arrowRight = $('#arrow-right');


    arrowRight.click(function () { 
        

        if ( $('.first').hasClass('active') ) {
            
            $('.first').hide();
            $('.first').next().show();

        
        } else if ( $('.first').next().hasClass('active') ) {
            
            console.log('ci siamo');
        
        }

    });
    
}); // Fine Documento 
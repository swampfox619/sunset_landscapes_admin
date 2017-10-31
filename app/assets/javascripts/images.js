$(document).on("turbolinks:load", function(){

    if(window.innerWidth >= 768){
        
        $('#all').click(function(){
            $('.landscaping').css('display', 'flex')
            $('.outdoor').css('display', 'flex')
            $('.drought').css('display', 'flex')
            $('.pergola').css('display', 'flex')
        });
    
        $('#landscaping').click(function(){
            $('.landscaping').css('display', 'flex')
            $('.outdoor').css('display', 'none')
            $('.drought').css('display', 'none')    
            $('.pergola').css('display', 'none')
        });
        
        $('#pergola').click(function(){
            $('.landscaping').css('display', 'none')
            $('.outdoor').css('display', 'none')
            $('.drought').css('display', 'none')    
            $('.pergola').css('display', 'flex')
        });
    
        $('#drought').click(function(){
            $('.landscaping').css('display', 'none')
            $('.outdoor').css('display', 'none')
            $('.drought').css('display', 'flex')    
            $('.pergola').css('display', 'none')
        });
        
        $('#outdoor').click(function(){
            $('.landscaping').css('display', 'none')
            $('.outdoor').css('display', 'flex')
            $('.drought').css('display', 'none')    
            $('.pergola').css('display', 'none')
        });
    

    };
})
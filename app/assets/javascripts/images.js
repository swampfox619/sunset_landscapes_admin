// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require lightbox
//= require responsiveslides
//= require_tree .

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
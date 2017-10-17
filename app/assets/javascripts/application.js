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

    // Tabs on Services Page
    $('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
        console.log('click');
        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });

    $('#gallery-list').hover(function(){
        $(this).css('cursor', 'pointer');
    });

    if(window.innerWidth >= 768){
        

        $(function() {
            $(".rslides").responsiveSlides();
            console.log('working')
        });


        $('#all').click(function(){
            $('.landscaping').css('display', 'inline')
                             .attr("data-lightbox", "all");
            $('.outdoor').css('display', 'inline')
                         .attr("data-lightbox", "all");
            $('.drought').css('display', 'inline')
                         .attr("data-lightbox", "all");
            $('.pergola').css('display', 'inline')
                         .attr("data-lightbox", "all");
        });
    
        $('#landscaping').click(function(){
            $('.landscaping').css('display', 'inline')
                             .attr("data-lightbox", "landscaping");
            $('.outdoor').css('display', 'none')
                         .attr("data-lightbox", "outdoor");
            $('.drought').css('display', 'none')    
                         .attr("data-lightbox", "drought");
            $('.pergola').css('display', 'none')
                         .attr("data-lightbox", "pergola");
        });
        
        $('#pergola').click(function(){
            $('.landscaping').css('display', 'none')
                             .attr("data-lightbox", "landscaping");
            $('.outdoor').css('display', 'none')
                         .attr("data-lightbox", "outdoor");
            $('.drought').css('display', 'none')    
                         .attr("data-lightbox", "drought");
            $('.pergola').css('display', 'inline')
                         .attr("data-lightbox", "pergola");
        });
    
        $('#drought').click(function(){
            $('.landscaping').css('display', 'none')
                             .attr("data-lightbox", "landscaping");
            $('.outdoor').css('display', 'none')
                         .attr("data-lightbox", "outdoor");
            $('.drought').css('display', 'inline')    
                         .attr("data-lightbox", "drought");
            $('.pergola').css('display', 'none')
                         .attr("data-lightbox", "pergola");
        });
        
        $('#outdoor').click(function(){
            $('.landscaping').css('display', 'none')
                             .attr("data-lightbox", "landscaping");
            $('.outdoor').css('display', 'inline')
                         .attr("data-lightbox", "outdoor");
            $('.drought').css('display', 'none')    
                         .attr("data-lightbox", "drought");
            $('.pergola').css('display', 'none')
                         .attr("data-lightbox", "pergola");
        });
    
    
        $('.services').css({
            opacity    : 0,
            transform  : 'scale(.8)',
        });
    
    
        $('.gallery-link').mouseover(function(){
            $(this).css({
                opacity    : 1,
                transform  : 'scale(1.1)',
                transition : 'transform 1s, opacity 1s',
                cursor     : 'pointer',
            });
            $('[data-toggle="tooltip"]').tooltip(); 
        });
        
        $('.gallery-link').mouseleave(function(){
            $(this).css({
                opacity    : .7,
                transform  : 'scale(1)',
                transition : 'transform 1s, opacity 1s'
            });
        });
        
        $(window).scroll(function(){
            var hT = $('.services').offset().top,
                hH = $('.services').outerHeight(),
                wH = $(window).height(),
                wS = $(this).scrollTop();
            if (wS > (hT+hH-wH)){
                $('.services').css({
                    opacity    : 1,
                    transform  : 'scale(1)',
                    transition : 'opacity 1s, transform 1s'
                });
            };
        });
    };
})
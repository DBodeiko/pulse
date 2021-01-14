$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/left_solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/right_solid.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false
                }
            }    
        ]
    });
});

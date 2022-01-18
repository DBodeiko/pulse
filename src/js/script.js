$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/left_solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/right_solid.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: false,
                  arrows: false
                  
                  
                }
                

            }

        ]
    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
    

    function toggleSlide(item) {
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            }) 
        })

    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    /* Modal */

    $('[data-model=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow')
    });
    $('.overlay').click( function (e) { 
        if ( e.target == this )
        {$('.overlay, #consultation, #thanks, #order').fadeOut('slow')}
    });

    $('.button_mini').each(function(i){
        $(this).on('click', function(){
           $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
           $('.overlay, #order').fadeIn('slow'); 
        })
    });
    

    function valideForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
                
            },
            messages: {
                name: {
                    required: "Please enter your name",
                    minlength: jQuery.validator.format("Enter {0} symbols!")
                  },
                phone: "Please enter your phone number",
                email: {
                  required: "Please enter your email",
                  email: "Email address entered incorrectly"
                }
            }
        });
    };
    valideForms ('#consultation-form');
    valideForms ('#consultation form');
    valideForms ('#order form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");
    
    
    
    $('form').submit(function(e) {
        e.preventDefault();
        if (!$(this).valid()) {
            return;
        }
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });
    /* scroll */

    $(window).scroll(function(){
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    new WOW().init();
});




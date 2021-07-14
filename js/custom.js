$(function(){
    //banner slider;
   $('.banner-slider').slick({
       arrows: false,
       dots: true,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 5000,
   }); 
    
    //about video pop up;
    $('.venobox').venobox(); 
    
    //team slider;
    $('.team-slider').slick({
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 4,
        responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
      }
    },     
     {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
      }
    },        
    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
    });
    
    //feedback slider;
    $('.feedback-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
          responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    }
    ]
    });
    
    //funfact counter;
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
    
    //brand-slider;
    $('.brand-slider').slick({
        slidesToShow : 5,
        centerMode : true,
        centerPadding : '0px',
        prevArrow : '<i class="fas fa-chevron-left prevBtn"></i>',
        nextArrow : '<i class="fas fa-chevron-right nextBtn"></i>',
         responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
      }
    },         
             
    ]
    });
});
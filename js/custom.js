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
    });
});
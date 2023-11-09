$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,/* vong lap vo tan*/ 
    margin:20,
    nav:false,/* thanh dieu huong*/
    dots: true,/* dau cham*/
    autoplay: true, /*slide tu dong chay*/
    autoplayTimeout: 2000,/*tgian tu chuyen slide*/
    responsive:{ /* hien thi item tren cac khoang man hinh*/
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
  });
  
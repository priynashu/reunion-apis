const menuBtn=$('.menu-btn');
const menu=$('.navbar .menu');


$(document).ready(function(){// this ready function is not required if we use jQuery at the end
  $(window).scroll(function(){
    if(this.scrollY >20){
      $('.navbar').addClass("sticky");
    }else {
      $('.navbar').removeClass("sticky");
    }
    if(this.scrollY>500){
      $('.scroll-up-btn').addClass("show");
    }
    else{
      $('.scroll-up-btn').removeClass("show");
    }


  });
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop:0});
  });

  // menu bar toggle
  menuBtn.click(function(){
    menu.toggleClass('active');
    $(".menu-btn i").toggleClass('active');
  });

  // typing script
  var typed = new Typed(".typing",{
    strings:["YouTuber","Developer","Blogger","Gamer","FreeLancer"],
    typeSpeed:100,
    backSpeed:80,
    loop: true
  });
  var typed2 = new Typed(".typing-2",{
    strings:["YouTuber","Developer","Blogger","Gamer","FreeLancer"],
    typeSpeed:100,
    backSpeed:80,
    loop: true
  });
  // owl-carousel script
  $('.carousel').owlCarousel({
    margin:20,
    loop:true,
    autoplayTimeOut:2000,
    autoplayHoverPause:true,
    responsive:{
      0:{
      items:1,
      nav:false
    },
      600:{
      items:2,
      nav:false
    },
      1000:{
      items:3,
      nav:false
      }
    }
  });

});

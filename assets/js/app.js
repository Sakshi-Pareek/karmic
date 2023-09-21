// -----------navbar------------

let label = document.querySelector("#label") 
let navbox = document.querySelector(".navbox") 
label.addEventListener("click" , function (){
    navbox.classList.toggle("left-0")
})
function showNav() {
    document.body.classList.toggle('overflow-hidden')
    document.getElementById("label").classList.toggle("cross_icon");
}
// -----------preloader-----------------
setTimeout(() => {
  const box = document.getElementById("box");

  box.style.display = "none";

  window.scrollTo(0, 0);

  document.body.classList.remove("overflow-hidden");
}, 2000);
// ------------------backtotop---------------------
$(document).ready(function () {
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          $('#scroll').fadeIn();
      } else {
          $('#scroll').fadeOut();
      }
  });
  $('#scroll').click(function () {
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
  });
});
// ------------------------upcoming----------------------------------
$('.upcoming_slider').slick({
    dots: false,
    arrows:false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          centerMode:true,
          centerPadding:'50px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // ----------------------------------project-------------------------------
$('.project_slider').slick({
    dots: false,
    arrows:false,
    infinite: false,
    centerMode:true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          centerMode:true,
          centerPadding:'50px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // ----------------------------------services------------------------------
  $('.service_slider').slick({
    dots: false,
    arrows:false,
    infinite: false,
    centerMode:true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          centerMode:true,
          centerPadding:'50px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  AOS.init({
    duration: 1200,
    once: true,
}
);
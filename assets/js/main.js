$(function() {

	$('.course_slider').slick({
	  infinite: true,
	  dots: true,
	  arrows: true,
	  speed: 800,
	  autoplay: true,
  	autoplaySpeed: 6000,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	});

	$('.photo_slider').slick({
  		infinite: true,
  		dots: true,
	  	arrows: true,
	  	autoplay: true,
  		autoplaySpeed: 5000,
  		slidesToShow: 3,
  		slidesToScroll: 1,
  		prevArrow: '<span class="prev_arrow"><i class="fa fa-arrow-left" aria-hidden="true"></i></span>',
  		nextArrow: '<span class="next_arrow"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>',
  		responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
	});

})

let popup1 = document.getElementById('mypopup-1'),
  popupToggle1 = document.getElementById('myBtn-1'),
  popupClose1 = document.getElementById('close-1');

popupToggle1.onclick = function() {
  popup1.style.display = "block";
};

popupClose1.onclick = function() {
  popup1.style.display = "none";
};
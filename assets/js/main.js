$(function() {

  $("#nav-toggle").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });

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
        arrows: false,
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

let popup2 = document.getElementById('mypopup-2'),
  popupToggle2 = document.getElementById('myBtn-2'),
  popupClose2 = document.getElementById('close-2');

popupToggle2.onclick = function() {
  popup2.style.display = "block";
};

popupClose2.onclick = function() {
  popup2.style.display = "none";
};

var openModalEntry = document.querySelectorAll("#crs_btn");
var showModalEntry = document.querySelectorAll(".modal-window_entry");
var closeModalEntry = document.querySelectorAll(".close-course");

for(var i = 0; i < openModalEntry.length; i++){
  openModalEntry[i].addEventListener("click", function(event) {
    event.preventDefault();
    showModalEntry[0].classList.add("show-entry");
  });
};

for(var i = 0; i < closeModalEntry.length; i++){
  closeModalEntry[i].addEventListener("click", function(event) {
    event.preventDefault();
    showModalEntry[0].classList.remove("show-entry");
  });
};
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



const course_btn = document.querySelector('.change__btn'),
      blocks = document.querySelectorAll('.courses__cards'),
      course_btn_items = document.querySelectorAll('.change_button');

function filter() {
  course_btn.addEventListener('click', event => {
    const targetID = event.target.dataset.id
    const target = event.target

    if (target.classList.contains('change_button')) {
      course_btn_items.forEach(change_button => change_button.classList.remove('active'))
      target.classList.add('active')
    }

    switch(targetID) {
      case 'all':
        getItems('courses__cards')
        break
      case 'kids':
        getItems(targetID)
        break
      case 'schoolboy':
        getItems(targetID)
        break
      case 'teenager':
        getItems(targetID)
        break
      case 'adult':
        getItems(targetID)
        break
    }
  })
}

filter()

function getItems(ClassName) {
  blocks.forEach(item => {
    if (item.classList.contains(ClassName))
      item.style.display = 'flex'
    else
      item.style.display = 'none'
  })
}
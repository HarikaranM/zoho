window.addEventListener('scroll', function() {
    const mainHeader = document.querySelector('.all4');
    const scrollPos = window.scrollY;
  
    if (scrollPos > 50) {
      mainHeader.classList.add('fixed');
    } else {
      mainHeader.classList.remove('fixed');
    }
  });
  window.addEventListener('scroll', function() {
    const mainHeader = document.querySelector('.zoho1 img');
    const scrollPos = window.scrollY;
  
    if (scrollPos > 50) {
      mainHeader.classList.add('fixed');
    } else {
      mainHeader.classList.remove('fixed');
    }
  });
  window.addEventListener('scroll', function() {
    const mainHeader = document.querySelector('.zoho3 img');
    const scrollPos = window.scrollY;
  
    if (scrollPos > 50) {
      mainHeader.classList.add('fixed');
    } else {
      mainHeader.classList.remove('fixed');
    }
  });
  window.addEventListener('scroll', function() {
    const mainHeader = document.querySelector('.zoho4 img');
    const scrollPos = window.scrollY;
  
    if (scrollPos > 50) {
      mainHeader.classList.add('fixed');
    } else {
      mainHeader.classList.remove('fixed');
    }
  });
  window.addEventListener('scroll', function() {
    const mainHeader = document.querySelector('.all9 .btn');
    const scrollPos = window.scrollY;
  
    if (scrollPos > 50) {
      mainHeader.classList.add('fixed');
    } else {
      mainHeader.classList.remove('fixed');
    }
  });
  window.addEventListener('scroll', function() {
    const links = document.querySelectorAll('.all8'); // Select all links
    const scrollPos = window.scrollY; // Get current scroll position
    
    // Loop through each link
    links.forEach(link => {
        // Check if scroll position is greater than 50
        if (scrollPos > 50) {
            link.classList.add('fixed'); // Add 'fixed' class
        } else {
            link.classList.remove('fixed'); // Remove 'fixed' class
        }
    });
});




const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelector('.carousel').children;
const totalImages = images.length;
let index = 0;

prev.addEventListener('click', () => {
  nextImage('next');
})

next.addEventListener('click', () => {
  nextImage('prev');
})

function nextImage(direction) {
  if(direction == 'next') {
    index++;
    if(index == totalImages) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('main');
  }
  images[index].classList.add('main');
}

const videoContainer = document.querySelector(".video-embed");

const videoEmbedPlaceholder = () => {
  // Get the video ID
  let id = videoContainer.getAttribute("data-youtube-id").split("v=")[1];
  // Add video image to page
  videoContainer.innerHTML += `<div class="video-embed-placeholder"><img src="https://img.youtube.com/vi/${id}/maxresdefault.jpg" alt=""></div>`;
};

const videoEmbedLoader = () => {
  // Get the video ID
  let id = videoContainer.getAttribute("data-youtube-id").split("v=")[1];
  // Remove placeholder image
  document.querySelector(".video-embed-placeholder").remove();
  // Add video iframe to page
  videoContainer.innerHTML += `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
};

videoEmbedPlaceholder();

if (videoContainer) {
  const videoPlaceholder = document.querySelector(".video-embed-placeholder");

  videoPlaceholder.addEventListener("click", () => {
    videoEmbedLoader();
  });
}


var slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex1 = 1}    
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";  
  dots[slideIndex1-1].className += " active";
}



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides1");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1;}    
    if (n < 1) {slideIndex = slides.length;}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}


document.addEventListener("DOMContentLoaded", function() {
  var dropdownHeadings = document.querySelectorAll(".dropdown-heading");
  
  dropdownHeadings.forEach(function(heading) {
    heading.addEventListener("click", function() {
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
        dropdownContent.style.display = "block";
      } else {
        dropdownContent.style.display = "none";
      }
    });
  });
});
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("dot1");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active1", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active1";
}

// Add auto-play functionality
setInterval(function() {
  plusSlides(1);
}, 7000); // Change slides every 7 seconds




// About team

// Add event listeners to the dropdown buttons
document.querySelectorAll('.dropbtn').forEach(button => {
    button.addEventListener('click', () => {
      // Toggle the dropdown content
      button.nextElementSibling.classList.toggle('show');
    });
  });
  
  // Close the dropdown menu when clicking outside
  document.addEventListener('click', event => {
    if (!event.target.matches('.dropbtn')) {
      // Close all dropdown menus
      document.querySelectorAll('.dropdown-content').forEach(content => {
        content.classList.remove('show');
      });
    }
  });
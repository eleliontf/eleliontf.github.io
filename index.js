let slideIndex = 1;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("dot1");

  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active1", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active1";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

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



  // 

// Get the current year
const currentYear = new Date().getFullYear();

// Update the copyright year
document.getElementById('dating').innerText = `Copyright ©️ ${currentYear}`;

// Add a digital clock
// setInterval(() => {
//   const currentTime = new Date();
//   const hours = currentTime.getHours();
//   const minutes = currentTime.getMinutes();
//   const seconds = currentTime.getSeconds();
//   document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
// }, 1000);



// Add a digital clock in WAT (UTC+1)
setInterval(() => {
  const currentTime = new Date();
  const hours = (currentTime.getUTCHours() + 1) % 24; // Offset by 1 hour for WAT
  const minutes = currentTime.getUTCMinutes();
  const seconds = currentTime.getUTCSeconds();
  document.getElementById('clock').innerText = `WAT ${hours}:${minutes}:${seconds}`;
}, 1000);

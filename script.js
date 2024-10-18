let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// Sélectionnez tous les éléments <a> de la barre de navigation
const navLinks = document.querySelectorAll('ul li a');

// Parcourez chaque lien et ajoutez un event listener
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Retirer la classe 'active' de tous les liens
        navLinks.forEach(link => link.classList.remove('clicked'));

        // Ajouter la classe 'clicked' à l'élément cliqué
        this.classList.add('clicked');
    });
});


function CVDownloaded() {
  alert("Cv Downloaded")
}

// Portfolio

// Get references to the slider elements
const sliderFor = document.querySelector('.slider-for');
const sliderNav = document.querySelector('.slider-nav');
const slidesFor = sliderFor.querySelectorAll('div');
const slidesNav = sliderNav.querySelectorAll('div');

// Variable to track the current slide
let currentslide = 0;

// Function to show the main slide
function showSlide(index) {
  // Hide all slides
  slidesFor.forEach((slide, i) => {
    slide.style.display = 'none';
  });

  // Show the selected slide
  slidesFor[index].style.display = 'block';
}

// Function to update the navigation to match the current slide
function updateNav(index) {
  // Remove active class from all nav slides
  slidesNav.forEach((slide) => {
    slide.style.opacity = '0.5';
  });

  // Add active state to the selected nav slide
  slidesNav[index].style.opacity = '1';
}

// Function to go to a specific slide
function goToSlide(index) {
  currentslide = index;
  showSlide(currentslide);
  updateNav(currentslide);
}

// Initialize slider (show the first slide)
function initSlider() {
  showSlide(0);   // Show the first slide by default
  updateNav(0);   // Highlight the first navigation slide

  // Add click event listeners to the navigation slides
  slidesNav.forEach((slide, index) => {
    slide.addEventListener('click', () => {
      goToSlide(index);
    });
  });
}

// Start the slider
initSlider();



// skills
var ClickButton = document.querySelector("#click-btn");
function showpic() {
  var show = document.querySelector(".ph2");
  console.log(show);
  show.classList.add("show");
  ClickButton.remove();
}

var slidebox = document.getElementById('slidebox')
function checkslide(){
var boxposition = slidebox.getBoundingClientRect().top;
var screenposition = window.innerHeight;
if (boxposition<screenposition){
  slidebox.classList.add('visible');

}
}

window.addEventListener('scroll', checkslide);


checkslide();
// end skills
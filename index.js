/*** window onload functionality ***/
window.onload = function(){

  generateProjectTiles();
  generatePaperTiles();
  generateEducationTiles();

}





/*** fading animation between sections ***/

// Get all sections on the page
const allSections = document.querySelectorAll('section');

// Add a scroll event listener
window.addEventListener('scroll', () => {
  // Loop through each section
  allSections.forEach(section => {
    // Check if the section is in the viewport
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    const viewportHeight = window.innerHeight;
    if (sectionTop < viewportHeight && sectionBottom > 0) {
      // If the section is in view, add the 'in-view' class
      section.classList.add('in-view');
    } else {
      // If the section is not in view, remove the 'in-view' class
      section.classList.remove('in-view');
    }
  });
});





/*** Dark Mode toggling ***/


// Get dark mode preference from local storage
var isDarkMode = localStorage.getItem('darkMode') === 'true';

// Set CSS class based on dark mode preference
if (isDarkMode) {
  document.body.classList.add('dark-mode');
} else {
  document.body.classList.remove('dark-mode');
}

const darkModeToggle = document.querySelector("#dark-mode-toggle");

darkModeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    // Set dark mode preference to local storage
    if (isDarkMode) {
        localStorage.setItem('darkMode', 'false');
        isDarkMode = false;
    } else {
        localStorage.setItem('darkMode', 'true');
        isDarkMode = true;
    }
  
  });
  

/*** Random shape generation ***/
const svg = document.querySelector('.background-shapes');

// Randomize the position of each shape
const shapes = svg.querySelectorAll('circle, rect');

shapes.forEach(shape => {
  const x = Math.floor(Math.random() * 120); // Random number between 10 and 90
  const y = Math.floor(Math.random() * 50) + 20; // Random number between 10 and 90
  const op = Math.random() * 0.5; // Random number between 10 and 90
  const r = Math.floor(Math.random() * 255); 
  const g = Math.floor(Math.random() * 255); 
  const b = Math.floor(Math.random() * 255); 

  shape.setAttribute('cx', x);
  shape.setAttribute('cy', y);
  shape.setAttribute('x', x);
  shape.setAttribute('y', y);
  shape.setAttribute('opacity', op);
  shape.setAttribute('fill', "rgb("+r.toString()+","+g.toString()+","+b.toString()+")")
});














//Gather The variables you need
const panels = document.querySelectorAll('.panel'); // document.querySelector takes what you have from html and css and uses it on JS

panels.forEach((panels) => {
  // .forEach is a function that takes a list of ever item that has the selected argument
  panels.addEventListener('click', () => {
    // addEventListener is what creates the dynamic sets for your website
    removeActiveClasses(); // calling a function to remove the current active class in the panel
    // after removing the active class from the current panel the one you click will be added to the active class
    panels.classList.add('active'); // classList is used to remove or add a class to your elements
  });
});

function removeActiveClasses() {
  //functions are used to be called over and over again
  panels.forEach((panels) => {
    // as you can see we are using forEach for all the panels
    panels.classList.remove('active'); // and using classList to remove the active class
  });
}

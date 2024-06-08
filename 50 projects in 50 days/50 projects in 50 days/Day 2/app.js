const progress = document.getElementById('progress'); // if you want to get an element that has an ID you use getElementById
const prev = document.getElementById('pre');
const next = document.getElementById('next');
const circle = document.querySelectorAll('.circle');

// since we will be incrementing the progress we want a let variable which will allow us to mutate it
let currentActive = 1; // by default we are putting it on 1
//something else that should be noted is that the variable above is on a global scope which allows anything to use it

next.addEventListener('click', () => {
  currentActive++; //by doing the ++ we are incrementing the progress
  if (currentActive > circle.length) {
    // if the current active is greater than the circle length so more than the number of circles in the html
    currentActive = circle.length; // it will equal the last circle in the element
  }
  update(); // update function will be used for the styles
});

//we copy the code above and paste below with some minor changes
prev.addEventListener('click', () => {
  currentActive--; // so like the ++ just with the minus sign
  if (currentActive < 1) {
    // if its less than one
    currentActive = 1; // it will stay in 1
  }

  update();
});

function update() {
  circle.forEach((circle, idx) => {
    if (idx < currentActive) {
      // so if its greater than the currentActive
      circle.classList.add('active'); // we add the active class
    } else {
      circle.classList.remove('active'); // otherwise remove it
    }
  });

  const actives = document.querySelectorAll('.active'); // another global scope for all the active

  //the style in here as you would think help us manipulate the styles in our css folder
  progress.style.width = // in this case we want to change the width for the bar move each time we click next or prev
    ((actives.length - 1) / (circle.length - 1)) * 100 + '%'; // since its going to correlate with circle we want to divide it and add the percentage to the final product

  //this is used to disable or enable the buttons
  if (currentActive === 1) {
    prev.disabled = true; // so if the currentActive is already at 1 we want to disable prev btn
  } else if (currentActive === circle.length) {
    next.disabled = true; // if the currentActive is at the circle's length we disable the next btn
  } else {
    //otherwise both are enabled
    prev.disabled = false;
    next.disabled = false;
  }
}

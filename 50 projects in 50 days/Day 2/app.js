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
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  progress.style.width =
    ((actives.length - 1) / (circle.length - 1)) * 100 + '%';

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circle.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

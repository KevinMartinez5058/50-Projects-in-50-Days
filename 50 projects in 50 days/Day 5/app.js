const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30); // think of this as a timer with the number as its duration goes in milliseconds

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int); // and this is how we stop the setInterval timer
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// sometimes we're going to use the internet to find what we need for our projects
//stackoverflow can help with unique functions or problems that you could be facing
//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

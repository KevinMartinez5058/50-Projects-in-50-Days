const labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
  label.innerHTML = label.innerText //innerHTML and innerText are used to manipulate the html itself with text going further into the letters
    .split('') //by using the split method we're making our text above into an array so every letter is now in the array
    .map(
      //then we put them into the a new array
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span> ` // then we use that new array to make our text into span
    ) // the idx is used to delay the animation that is in the css, while the letter is as it states the letter in the array
    .join(''); //afterwards we just put them back together
});

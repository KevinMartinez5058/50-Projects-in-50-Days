const boxes = document.querySelectorAll('.box');

//we want to make a project where the items come in from side to side when you're scrolling down
window.addEventListener('scroll', checkBoxes);

checkBoxes();
function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4; //innerHeight is the number of the whats currently on your screen

  boxes.forEach((box) => {
    //boxes forEach so we can look at target what we want to manipulate
    const boxTop = box.getBoundingClientRect().top; // getBoundingClientRect is looking at the innerHeight for the box

    if (boxTop < triggerBottom) {
      box.classList.add('show'); // then we just add a simple classList.add and remove
    } else {
      box.classList.remove('show');
    }
  });
}

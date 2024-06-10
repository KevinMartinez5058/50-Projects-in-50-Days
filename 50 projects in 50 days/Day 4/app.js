const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
  search.classList.toggle('active'); // we seen what add and remove does now toggle is a mix of both. you click and it will give you an add if you click again it removes the class
  input.focus(); //the focus method like it implies focuses on that element so in this case the input of the search bar will be focused and ready to type in the search bar
});

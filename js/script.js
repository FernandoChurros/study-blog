const listNav = document.querySelectorAll('.list_nav');
const itemsList = document.querySelectorAll('.items_list');

// function show(id) {
//    const item = document.querySelector(`${id}`);
//    item.classList.toggle('active');
// }

// document.querySelector('#html_list').addEventListener('click', () => {
//    show('#html');
// })

// document.querySelector('#css_list').addEventListener('click', () => {
//    show('#css');
// })

for (let i = 0; i < listNav.length; i++) {
   listNav[i].onclick = () => {

      itemsList[i].classList.toggle('active');
   }
}
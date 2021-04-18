const listNav = document.querySelectorAll('.list_nav');
const itemsList = document.querySelectorAll('.items_list');

for (let i = 0; i < listNav.length; i++) {
   listNav[i].onclick = () => {

      itemsList[i].classList.toggle('active');
   }
}
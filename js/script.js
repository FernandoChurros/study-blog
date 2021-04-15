const htmlItem = document.querySelectorAll('.items_list');

function show(id) {
   const item = document.querySelector(`${id}`);
   item.classList.toggle('active');
}

document.querySelector('#html_list').addEventListener('click', () => {
   show('#html');
})

document.querySelector('#css_list').addEventListener('click', () => {
   show('#css');
})
const button = document.querySelector('.humburher-wrap');
const block = document.querySelector('.mobile-navigation');


button.addEventListener('click', (e) => {
    block.classList.toggle('active');
});

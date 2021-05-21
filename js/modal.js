const modalBtn = document.querySelector('.more'),
    modalBlock = document.querySelector('.modal');


modalBtn.addEventListener('click', (e) => {
    modalBlock.classList.remove('hidden');
});
modalBlock.addEventListener('click', (e) => {
    if (e.target.classList.contains('overlay') ||
        e.target.classList.contains('modal__close')) {
        modalBlock.classList.add('hidden');
    }
});


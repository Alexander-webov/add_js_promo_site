
const featureLink = document.querySelectorAll('.feature__link');
const featureSub = document.querySelectorAll('.feature-sub');

featureLink.forEach((btn, i) => {
    btn.addEventListener('click', function () {
        if (btn.classList.contains('feature__link_active')) {
            btn.classList.remove('feature__link_active');
            featureSub[i].classList.add('hidden');
        } else {
            featureLink.forEach((el) => {
                el.classList.remove('feature__link_active');
            });

            featureSub.forEach((el) => {
                el.classList.add('hidden');
            });
            btn.classList.add('feature__link_active');
            featureSub[i].classList.remove('hidden');
        }

    })
});


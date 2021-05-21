const SPEED = 1;
const scrolled = (e) => {
    e.preventDefault();
    const target = e.target;
    if (target.matches('[href^="#"]')) {
        let start = 0;
        const pageY = window.pageYOffset;
        const hash = target.hash;
        const elem = document.querySelector(hash)
        const cordinateElem = elem.getBoundingClientRect().top;
        const step = time => {
            if (!start) start = time;
            const progress = time - start;
            const r = (cordinateElem < 0 ?
                Math.max(pageY - progress / SPEED, pageY + cordinateElem) :
                Math.min(pageY + progress / SPEED, pageY + cordinateElem));
            window.scrollTo(0, r);
            if (r < pageY + cordinateElem) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }
}
document.body.addEventListener('click', scrolled);



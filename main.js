// USING RELLAX
let rellax = new Rellax('.rellax');

function scrollAppear() {
    const introText = document.querySelector('.what_is_grow');
    const introParagraph = document.querySelector('.grow_text');
    const introPosition = introText.getBoundingClientRect().top;
    const introParagraphPosition = introParagraph.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if ((introPosition < screenPosition) && (introParagraphPosition < screenPosition < screenPosition)) {
        introText.classList.add('what_is_grow_appear');
        introParagraph.classList.add('what_is_grow_appear');
        paragraphOne.classList.add('video-paragraph-appear');
        paragraphTwo.classList.add('video-paragraph-appear');
    }
}

window.addEventListener('scroll', scrollAppear);

// ANIMATE IMAGES WITH FOR LOOP
const illustrations = document.querySelectorAll('.illustration');

illustrations.forEach(illustration => {
    illustration.addEventListener('mouseover', function () {
        illustration.classList.add('illustration-effect');
    });

    illustration.addEventListener('mouseout', function () {
        illustration.classList.remove('illustration-effect');
    })
})


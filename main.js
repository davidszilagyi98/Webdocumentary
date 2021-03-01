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


// VIDEO TEXT FADE IN

function scrollAppear() {
    var textFade = document.querySelector('.text_fade')
    var textPosition = textFade.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (textPosition < screenPosition) {
        textFade.classList.add('text_appear');
    }
}

window.addEventListener('scroll', scrollAppear);

function scrollAppear2() {
    var textFade2 = document.querySelector('.text_fade2')
    var textPosition2 = textFade2.getBoundingClientRect().top;
    var screenPosition2 = window.innerHeight / 1.3;

    if (textPosition2 < screenPosition2) {
        textFade2.classList.add('text_appear2');
    }
}

window.addEventListener('scroll', scrollAppear2);



//VIDEO 

let myVideo = document.getElementById('myvideo');

function playPause() {
    if (myVideo.paused) {
        myVideo.play();
        playpause.style.opacity = '0';
        myVideo.controls = true;
    }
    else {
        myVideo.pause();
        playpause.style.opacity = '1';
        myVideo.controls = false;
    }
}

playpause.addEventListener('click', playPause);


let myVideo2 = document.getElementById('myvideo2');
myVideo2.controls = true;

function playPause2() {
    if (myVideo2.paused) {
        myVideo2.play();
        playpause2.style.opacity = '0';
    }
    else {
        myVideo2.pause();
        playpause2.style.opacity = '1';
    }
}

playpause2.addEventListener('click', playPause2);

document.addEventListener('DOMContentLoaded', function(e) {
    iniciarApp();
})

function iniciarApp() {
    crearGaleria();
    animacionScroll();
    animacionHeader();
    scrollNav();
}

function animacionHeader() {
    const titulo = document.querySelector('.nombre-sitio');
    const slogan = document.querySelector('.slogan');
    setTimeout(() => {
        titulo.classList.add('mostrar-sitio');
        titulo.style.opacity = '1';
        titulo.style.transition = 'opacity .5s'
    }, 1000);

    setTimeout(() => {
        slogan.classList.add('mostrar-slogan');
        slogan.style.transform = 'translateX(0)';
        slogan.style.transition = 'transform 0.8s';
    }, 1500);
}


function crearGaleria() {
    const galeria = document.querySelector('.galeria');
    for(let i = 1; i < 8; i++){
        let imagen = document.createElement('DIV');
        imagen.classList.add('imagen');
        imagen.innerHTML = `<img src="img/imagen_${i}.jpg" alt="imagen galeria">`;
        galeria.appendChild(imagen);
    }
    
}

function animacionScroll() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        const barra = document.querySelector('.barra');
        const contenidoHeader = document.querySelector('.contenido-header');

        if(header.getBoundingClientRect().bottom < 0) {
            barra.classList.add('nav-fijo');
            header.classList.add('no-padding');
            contenidoHeader.classList.add('no-margin');
        } else{
            barra.classList.remove('nav-fijo');
            header.classList.remove('no-padding');
            contenidoHeader.classList.remove('no-margin');
        }


        const nosotros = document.querySelector('.nosotros');
        const nosotrosBg = document.querySelector('.contenido-nosotros');
        const textoNosotros = document.querySelector('.texto-nosotros');
        if(nosotros.getBoundingClientRect().top < 800) {
            nosotrosBg.classList.add('mostrar-bg');
            nosotrosBg.style.opacity = '1';
            nosotrosBg.style.transition = 'opacity .5s';
            setTimeout(() => {
                textoNosotros.classList.add('mostrar-nosotros');
                textoNosotros.style.transform = 'translateX(0)';
                textoNosotros.style.transition = 'transform .5s';
            }, 500);
        }

        const basicoBg = document.querySelector('.basico .contenido-modelo');
        const textoBasico = document.querySelector('.texto-basico');
        if(basicoBg.getBoundingClientRect().top < 800) {
            basicoBg.classList.add('mostrar-bg-texto');
            basicoBg.style.opacity = '1';
            basicoBg.style.transition = 'opacity .5s';
            setTimeout(() => {
                textoBasico.classList.add('mostrar-texto-basico');
                textoBasico.style.transform = 'translateX(0)';
                textoBasico.style.transition = 'transform .5s';
            }, 500);
        }

        const premierBg = document.querySelector('.premier .contenido-modelo');
        const textoPremier = document.querySelector('.texto-premier');
        if(premierBg.getBoundingClientRect().top < 800) {
            premierBg.classList.add('mostrar-bg-premier');
            premierBg.style.opacity = '1';
            premierBg.style.transition = 'opacity .5s';
            setTimeout(() => {
                textoPremier.classList.add('mostrar-premier');
                textoPremier.style.transform = 'translateX(0)';
                textoPremier.style.transition = 'transform .5s';
            }, 500);
        }

        const eliteBg = document.querySelector('.elite .contenido-modelo');
        const textoElite = document.querySelector('.texto-elite');
        if(eliteBg.getBoundingClientRect().top < 800) {
            eliteBg.classList.add('mostrar-bg-elite');
            eliteBg.style.opacity = '1';
            eliteBg.style.transition = 'opacity .5s';
            setTimeout(() => {
                textoElite.classList.add('mostrar-elite');
                textoElite.style.transform = 'translateX(0)';
                textoElite.style.transition = 'transform .5s';
            }, 500);
        }
    })
}

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion a');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({ behavior: 'smooth' });
        })
    }) 
}

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');
    
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    hamburger.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.classList.remove('active');
});




/* $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('.sidepanel').fadeIn();
    } else {
        $('.sidepanel').fadeOut();
    }
}); */



/* 
window.onload = function (){
    const parallax = document.querySelector('.parallax');
     
    if (parallax) {
        const forest1 = document.querySelector('.parallax__forest_1');
        const forest2 = document.querySelector('.parallax__forest_2');
        const forest3 = document.querySelector('.parallax__forest_3');

        const forForest1 = 40;
        const forForest2 = 20;
        const forForest3 = 10;

        const speed = 0.05;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;
         
        function setMouseParallaxStyle() {
            const distX = coordXprocent - coordXprocent;
            const distY = coordYprocent - coordYprocent;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            forest1.style.cssText = `transform: translate(${positionX / forForest1}%,${positionY / forForest1}%);`;
            forest2.style.cssText = `transform: translate(${positionX / forForest2}%,${positionY / forForest2}%);`;
            forest3.style.cssText = `transform: translate(${positionX / forForest3}%,${positionY / forForest3}%);`;

            requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle();

        parallax.addEventListener("mousemove", function (e) {
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;


        });
     }
} */
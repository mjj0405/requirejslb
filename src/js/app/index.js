define(['swiper'], function(swiper) {
    var banner = document.querySelector('.banner')
    new swiper(banner, {
        autoplay: 2000,
        // delay: 5000,
        loop: true
    });
})
$(document).ready(function () {
    $('.slider').slick({
        arrows: false, 
        slidesToShow: 5, 
        speed: 900,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slideToScroll: 1,
                    dots: true, 
                    
                }
            },
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 2,
                    slideToScroll: 1,
                    dots: true, 
                    
                }
            },{
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }]
    });


    ///
    $('.review__slider').slick({
        arrows: false, 
        slidesToShow: 3, 
        speed: 900,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    slideToScroll: 1,
                    dots: true, 
                    
                }
            }]
    });

    ////

    $('.slider-lg').slick({
        arrows: false, 
        slidesToShow: 3, 
        speed: 900,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    slideToScroll: 1,
                    dots: true, 
                    
                }
            }]
    });

    let inputEmail=document.querySelector('input[data-rule]');

    inputEmail.addEventListener('blur', function() {
        let rule=this.dataset.rule;
        let value =this.value;
        let check;
        this.classList.remove('invalid');
        this.classList.remove('valid');

        if (rule === 'email') {
            check = /.+@.+\..+/i.test(value) 
            if (check) {
                this.classList.add('valid');
            } else {
                this.classList.add('invalid');
            }
        } 

    })

});
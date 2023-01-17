
function sidebar(){
    document.getElementById("navbarNav").style.display = "block";
    document.getElementById("navbarNav").style.transition = ".3s";
    document.getElementById("icon-x").style.display = "block";
}

function sidebarclose(){
    document.getElementById("navbarNav").style.display = "none";
    document.getElementById("icon-x").style.display = "none";
}

function projectslide(){

}

// services-slides
$('.services-slides').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 500,
    margin: 25,
    center: true,
    autoplayHoverPause: true,
    autoplay: false,

    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1024: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
});
$('.services-slides-two').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 500,
    margin: 25,
    center: true,
    autoplayHoverPause: true,
    autoplay: true,

    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1024: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
});

// Projects Slides
$('.project-slide').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    smartSpeed: 500,
    margin: 25,
    center: true,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='fas fa-arrow-left'></i>",
        "<i class='fas fa-arrow-right'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1024: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
});
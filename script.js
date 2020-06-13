//! side bar withot jquery
// const sideNav = document.querySelectorAll(".sidenav");
// eslint-disable-next-line no-undef
// M.Sidenav.init(sideNav);


//* side bar
// eslint-disable-next-line no-undef
$(document).ready(function () {
    // eslint-disable-next-line no-undef
    $(".sidenav").sidenav();
});



// ! slider without jquery
// const slider = document.querySelectorAll(".slider");
// M.Slider.init(slider , {
//     indicators:false,
//     height:500,
//     interval:3000,
//     transition:600
// });



// * slider
$(document).ready(function () {
    $(".slider").slider({
        indicators:false,
        height: 500,
        transition:600,
        interval:3000
    });
});



//! parallax without jquery
// const slider = document.querySelectorAll(".slider");
// M.Slider.init(slider);


//* parallax

$(document).ready(function () {
    $(".parallax").parallax();
});


//! materialboxed without jquery 

// const materialBox = document.querySelectorAll(".materialboxed");
// M.Materialbox.init(materialBox);


//* materialbox

$(document).ready(function () {
    $(".materialboxed").materialbox();
});

//! scrollspy without jquery
// const scrollspy = document.querySelectorAll(".scrollspy");
// M.ScrollSpy.init(scrollspy);


// * scrollspy
$(document).ready(function () {
    $(".scrollspy").scrollSpy({
        scrollOffset:100,
        activeClass:'active'
    });
});


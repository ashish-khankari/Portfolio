//Smooth Scroll Animation

var navbarTags = document.querySelectorAll(".nav-menu a");

var Interval;
for (var i = 0; i < navbarTags.length; i++) {
    navbarTags[i].addEventListener('click', function (event) {
        event.preventDefault();

        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);

        //  Interval = setInterval(scrollVertically, 50, targetSection)

        Interval = setInterval(function () {
            scrollVertically(targetSection);
        }, 20)
    })
}


function scrollVertically(targetSection) {
    var targetSectionCoordintes = targetSection.getBoundingClientRect();
    if (targetSectionCoordintes.top <= 0) {
        clearInterval(Interval);
    }
    window.scrollBy(0, 50);
}



// Skill Section Animation

var progressBars = document.querySelectorAll('.skill-progress > div');

function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}

function checkScroll() {
    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}

window.addEventListener('scroll', checkScroll)


















// function initialBars(){
//     for (let bar of progressBars){
//         bar.style.width = 0 + '%'

//     }
// }

// initialBars();


// function animation(){
//     var coordinates = skillsContainer.getBoundingClientRect();
//     var targetbars =
// }

// function initialBars() {
//     for (let bar of progressBars) {
//         bar.style.width = 0 + '%'
//     }
// }

// initialBars();

// // function fillBars() {
// //     for (let bar of progressBars) {
// //         let targetWidth = bar.getAttribute('data-bar-width');
// //         let currentWidth = 0;
// //         let interval = setInterval(function () {
// //             if (currentWidth > targetWidth) {
// //                 clearInterval(interval);
// //             } else {
// //                 currentWidth++;
// //                 bar.style.width = currentWidth + '%';
// //             }
// //         }, 3)

// //     }
// // }

// function fillbar(){
//     for(let bar of progressBars){
//         let targetWidth = bar.getAttribute('data-bar-width');
//         let currentWidth = 0;
//         let interval = setInterval(function(){
//             if(currentWidth == window.innerHeight)
//         })
//     }
// }

// function checkScroll() {

//     var coordinates = skillsContainer.getBoundingClientRect();
//     if (!animationDone && coordinates.top < window.innerHeight) {
//         animationDone = true;
//         // fillBars()
//     }
//     if(coordinates.top > window.innerHeight){
//         animationDone = false;
//         initialBars();

//     }
// }
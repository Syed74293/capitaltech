// setMarqueeSpeed();

// current page
document.addEventListener("DOMContentLoaded", function () {
    let listItems = document.querySelectorAll('.navbar-items a');


    document.querySelector('marquee').style.width = '100%';

    listItems.forEach(element => {
        let href = element.getAttribute('href'); // Get the href attribute

        // Check if the href matches the window's pathname
        if (href === window.location.pathname) {
            element.classList.add('active');
        }
    });

    listItems = document.querySelectorAll('.navbar-hoverable-menu-items a');

    listItems.forEach(element => {
        let href = element.getAttribute('href'); // Get the href attribute
        // Check if the href matches the window's pathname
        if (href === window.location.pathname) {
            element.classList.add('active');
        }
    });
});

function setMarqueeSpeed() {
    const marquee = document.getElementsByTagName('marquee')[0];
    const screenWidth = window.innerWidth;

    if (screenWidth > 820 && screenWidth < 1600) {
        // Adjust the speed for larger screens
        marquee.setAttribute('scrollamount', '8');
    }

    else if (screenWidth <= 820 && screenWidth > 599) {
        // Adjust the speed for larger screens
        marquee.setAttribute('scrollamount', '6');
    }

    else if (screenWidth <= 599 && screenWidth > 485) {
        // Adjust the speed for larger screens
        marquee.setAttribute('scrollamount', '5');
    }

    else if (screenWidth <= 485) {
        // Adjust the speed for larger screens
        marquee.setAttribute('scrollamount', '4');
    }

    else {
        // Adjust the speed for larger screens
        marquee.setAttribute('scrollamount', '9');
    }

}


// Call the function on page load and when the window is resized
// window.addEventListener('resize', setMarqueeSpeed);

// copyerror
let copyerrorbool = true;

// control right click
document.oncontextmenu = function (event) {
    copyerror(event);
};

// control left double click
document.ondblclick = function (event) {
    copyerror(event);
};

// control left double click
document.ondragstart = function (event) {
    copyerror(event);
};

// // control keyboard shortcuts
// document.onkeydown = function (event) {
//     // f12 key
//     if (event.keyCode === 123 || event.which === 123) {
//         copyerror(event);
//     }
//     // ctrl u
//     if (event.ctrlKey && event.keyCode === 85) {
//         copyerror(event);
//     }
// };

function copyerror(event) {
    event.preventDefault();
    if (copyerrorbool == true) {
        document.querySelector('.copyerror').style.display = 'flex';
        document.querySelector('.copyerror').style.opacity = 1;
        copyerrorbool = false;

        setTimeout(() => {
            document.querySelector('.copyerror').style.opacity = 0;
            setTimeout(() => {
                copyerrorbool = true;
                document.querySelector('.copyerror').style.display = 'none';
            }, 500);
        }, 2000);
    }
}

// check if element is in viewport for on scroll animations
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// buttons on scroll animations
window.addEventListener('scroll', () => {
    if (isElementInViewport(document.querySelector('.btnsec'))) {
        document.getElementsByClassName('btnsec-btn')[0].style.opacity = '1';
        document.getElementsByClassName('btnsec-btn')[1].style.opacity = '1';
    }
});

// set heights for collapsable menus
let collapsableMenuHeights = [];
const collapsableMenus = document.getElementsByClassName('collapsable-navbar-hoverable-menu');

for (let i = 0; i < collapsableMenus.length; i++) {
    collapsableMenuHeights[i] = collapsableMenus[i].scrollHeight + 'px'; // Use scrollHeight to get actual height
    collapsableMenus[i].style.maxHeight = '0px';
    collapsableMenus[i].style.transition = 'max-height 0.3s ease';
}

let collapsableNavbar = document.getElementById('collapsable-navbar');
let collapsableHeight = collapsableNavbar.scrollHeight + 'px'; // Use scrollHeight to get actual height
collapsableNavbar.style.maxHeight = '0px';
collapsableNavbar.style.transition = 'max-height 0.3s ease';

function show_collapsable() {
    if (collapsableNavbar.style.maxHeight === '0px') {
        document.querySelector('.menubtn>img').src = './images/close.png';
        document.querySelector('.menubtn>img').alt = 'Close';
        document.querySelector('.menubtn>img').style.animation = 'rotateForward 0.25s alternate-reverse 0s 1 forwards linear';
        collapsableNavbar.style.borderTopWidth = '1px';
        collapsableNavbar.style.maxHeight = collapsableHeight;
    } else {
        document.querySelector('.menubtn>img').src = './images/menu.png';
        document.querySelector('.menubtn>img').alt = 'Menu';
        document.querySelector('.menubtn>img').style.animation = 'rotateReverse 0.25s alternate-reverse 0s 1 forwards linear';
        collapsableHeight = collapsableNavbar.scrollHeight + 'px'; // Update the height
        collapsableNavbar.style.maxHeight = '0px';
        collapsableNavbar.style.borderTopWidth = '0px';
    }
}

function show_collapsable_menu(n) {
    if (collapsableMenus[n].style.maxHeight === '0px') {
        document.getElementsByClassName('collapsable-navbar-hoverable')[n].querySelector('img').style.transform = 'rotate(180deg)';
        collapsableNavbar.style.maxHeight =
            parseInt(collapsableHeight) + parseInt(collapsableMenuHeights[n]) + 'px'; // Combine heights
        collapsableHeight = parseInt(collapsableHeight) + parseInt(collapsableMenuHeights[n]) + 'px';
        collapsableMenus[n].style.maxHeight = collapsableMenuHeights[n];
    } else {
        document.getElementsByClassName('collapsable-navbar-hoverable')[n].querySelector('img').style.transform = 'rotate(0deg)';
        collapsableMenus[n].style.maxHeight = '0px';
        collapsableNavbar.style.maxHeight = collapsableHeight;
    }
}
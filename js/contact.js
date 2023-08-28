// current page
document.addEventListener("DOMContentLoaded", function () {
    let listItems = document.querySelectorAll('.navbar-items a');

    checkViewport();

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

// control keyboard shortcuts
document.onkeydown = function (event) {
    // f12 key
    if (event.keyCode === 123 || event.which === 123) {
        copyerror(event);
    }
    // ctrl u
    if (event.ctrlKey && event.keyCode === 85) {
        copyerror(event);
    }
};

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

function isElementInViewportWithBottomEdited(element) {
    const rect = element.getBoundingClientRect();
    const viewportHeight = (window.innerHeight || document.documentElement.clientHeight);
    return (
        rect.top >= 70 &&
        rect.bottom - 70 <= viewportHeight
    );
}

function checkViewport() {
    if (isElementInViewport(document.getElementsByClassName('map')[0].getElementsByTagName('iframe')[0]) || isElementInViewport(document.getElementsByClassName('maptxt')[0])) {
        document.getElementsByClassName('map')[0].getElementsByTagName('iframe')[0].style.animation = 'fadeDown 1.2s alternate 0s 1 forwards ease'
    }
    if (isElementInViewport(document.getElementsByClassName('map')[1].getElementsByTagName('iframe')[0]) || isElementInViewport(document.getElementsByClassName('maptxt')[1])) {
        document.getElementsByClassName('map')[1].getElementsByTagName('iframe')[0].style.animation = 'fadeDown 1.2s alternate 0s 1 forwards ease'
    }
    if (isElementInViewport(document.getElementsByClassName('map')[1].getElementsByTagName('iframe')[0]) || isElementInViewport(document.getElementsByClassName('formsec')[0]) || isElementInViewport(document.getElementById('check'))) {
        document.querySelector('.formsec').style.animation = 'fadeDown 1.2s alternate 0s 1 forwards ease'
    }
    if (isElementInViewport(document.querySelector('.info-right')) || isElementInViewport(document.querySelector('.info-right').getElementsByTagName('h2')[0])) {
        for (let i = 0; i < document.querySelector('.info-right').getElementsByTagName('h2').length; i++)
            document.querySelector('.info-right').getElementsByTagName('h2')[i].style.animation = `fadeRight 1.2s alternate 0.${i}s 1 forwards ease`;
    }
    if (isElementInViewport(document.querySelector('.info-left')) || isElementInViewport(document.querySelector('.info-left').getElementsByTagName('h2')[0])) {
        for (let i = 0; i < document.querySelector('.info-left').getElementsByTagName('h2').length; i++)
            document.querySelector('.info-left').getElementsByTagName('h2')[i].style.animation = `fadeLeft 1.2s alternate 0.${i}s 1 forwards ease`;
    }
    for (let i = 0; i < document.getElementsByClassName('location-flex-container').length; i++) {
        if (isElementInViewport(document.getElementsByClassName('location-flex-container')[i].getElementsByTagName('img')[0])) {
            document.getElementsByClassName('location-flex-container')[i].getElementsByTagName('img')[0].style.animation = `fadeIn 1.2s alternate 0s 1 forwards ease`;
        }
    }
    for (let i = 0; i < document.getElementsByClassName('location-flex-container').length; i++) {
        if (isElementInViewport(document.getElementsByClassName('location-flex-container')[i].getElementsByClassName('location-container-heading')[0])) {
            if (i == 0)
                document.getElementsByClassName('location-flex-container')[i].getElementsByClassName('location-container-heading')[0].style.animation = `fadeLeft 1.2s alternate 0s 1 forwards ease`;
            else
                document.getElementsByClassName('location-flex-container')[i].getElementsByClassName('location-container-heading')[0].style.animation = `fadeDown 1.2s alternate 0s 1 forwards ease`;
        }
    }
    for (let i = 0; i < document.getElementsByClassName('location-flex-container').length; i++) {
        for (let k = 0; k < document.getElementsByClassName('location-flex-container')[i].getElementsByClassName('location-container-content').length; k++) {
            if (isElementInViewport(document.getElementsByClassName('location-flex-container')[i].getElementsByClassName('location-container-content')[k])) {
                if (i == 0)
                    document.getElementsByClassName('location-flex-container')[i].getElementsByClassName('location-container-content')[k].style.animation = `fadeLeft 1.2s alternate 0.${k}s 1 forwards ease`;
                else
                    document.getElementsByClassName('location-flex-container')[i].getElementsByClassName('location-container-content')[k].style.animation = `fadeRight 1.2s alternate 0.${k}s 1 forwards ease`;
            }
        }
    }
}

window.addEventListener('scroll', checkViewport);

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

document.querySelector('.formsec>form>button').addEventListener('click', (e) => {
    e.preventDefault();
    for (let i = 0; i < document.querySelector('.formsec>form').getElementsByTagName('input').length; i++) {
        for (let i = 0; i < document.querySelector('.formsec>form').getElementsByTagName('textarea').length; i++) {
            if (document.querySelector('.formsec>form').getElementsByTagName('textarea')[i].value == '') {
                document.querySelector('.formsec>form').getElementsByTagName('textarea')[i].style.outline = '1px solid #990000';
                document.querySelector('.formsec>form').getElementsByTagName('label')[4].style.opacity = 1;
            }
            setTimeout(() => {
                document.querySelector('.formsec>form').getElementsByTagName('textarea')[i].style.outline = 'none';
                document.querySelector('.formsec>form').getElementsByTagName('label')[4].style.opacity = 0;
                for (let i = 0; i < document.querySelector('.formsec>form').getElementsByTagName('input').length; i++) {
                    document.querySelector('.formsec>form').getElementsByTagName('input')[i].style.outline = 'none';
                    document.querySelector('.formsec>form').getElementsByTagName('label')[i].style.opacity = 0;
                }
            }, 5000);
        }
        if (document.querySelector('.formsec>form').getElementsByTagName('input')[i].value == '') {
            document.querySelector('.formsec>form').getElementsByTagName('input')[i].style.outline = '1px solid #990000';
            document.querySelector('.formsec>form').getElementsByTagName('label')[i].style.opacity = 1;
        }
    }
    // if (document.querySelector('').value != ('') || (null) || (undefined)) {

    //     document.getElementById('submit-email').disabled = true;

    //     // Get the email value
    //     const email = document.querySelector('.add-email').value;

    //     // Send the email value using the Fetch API
    //     fetch('/subscribed', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ email: email })
    //     })
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             // Handle the response data (if needed)
    //             console.log('Email sent successfully:', data);
    //             document.querySelector('.subscription').classList.add('done');
    //         })
    //         .catch(error => {
    //             console.error('Error sending email:', error);
    //         });
    // }
});
// Navigation Active
$(function () {
    $('a').each(function () {
        if ($(this).prop('href') == window.location.href) {
            $(this).addClass('active'); $(this).parents('li').addClass('active');
        }
    });
});

// Apply Height for inherit in navigation
document.querySelector('.nav').style.height = `${$('#navigation').height()}px`;

// Navigation After 300 Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY >= 300) {
        document.getElementById('navigation').style.opacity = '0.9';
        document.querySelector('.hidenav').style.display = 'block';
    }
    else {
        document.getElementById('navigation').style.opacity = '1';
        document.querySelector('#navigation').style.top = '0px';
        document.querySelector('.hidenav').style.display = 'none';
    }
});

// How to Hide After 300 Scroll
function hide_nav() {
    document.querySelector('#navigation').style.top = '-100px';
}

// Hamburger Navigation
function menu() {
    if (document.getElementById('bar').style.width != '100vw') {
        document.getElementById('bar').style.width = '100vw';
        document.querySelector('body').style.overflow = 'hidden';
    } else {
        document.getElementById('bar').style.width = '0vw';
        document.querySelector('body').style.overflow = 'unset';
    }
}

// Search
function search() {
    let input = document.getElementById('filter').value;
    input = input.toLowerCase();
    window.location = `https://www.aliexpress.com/w/wholesale-${input}.html?catId=0&initiative_id=SB_20230312005443&SearchText=${input}&spm=a2g0o.productlist.1000002.0`;
}

// Load Page Cancel
function loaded() {
    document.querySelector('#load').style.display = 'none';
    document.querySelector('body').style.overflow = 'unset';
}
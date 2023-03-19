let k = 0;
function limit() {
    return Math.abs(document.body.scrollHeight - 625);
}

for (k = 0; k <document.getElementsByClassName('containers').length ; k++)
    document.getElementsByClassName('containers')[k].removeAttribute('target');

for (k = 0; k < 20; k++)
    document.querySelector('.wrap').getElementsByClassName('containers')[k].style.display = 'flex';
    
window.addEventListener('scroll', () => {

    if (window.scrollY < Math.abs(limit() - 50) && window.scrollY > Math.abs(limit() - 100)) {

        let product_limit = k + 20;

        while (k < product_limit) {


            if (k >= document.querySelector('.gallery').getElementsByClassName('containers').length) {
                k++;
                document.getElementById('soon').style.display = 'block';
                continue;
            }
            document.querySelector('.gallery').getElementsByClassName('containers')[k].style.display = 'flex';
            k++;

        }

    }

});

// Show More
function more(n) {
    if (n == 0)
        window.location = `https://s.click.aliexpress.com/e/_DBB6wmv`;
    else
        window.location = `https://s.click.aliexpress.com/e/_DEhA7E9`;
}

// const con = document.getElementsByClassName('showcase')[2].getElementsByClassName('containers');
// for (let x = 0; x < Math.floor(Math.random() * ((con.length / 4) - 0) + 0); x++) {
//     let value=Math.floor(Math.random() * ((con.length / 4) - 0) + 0);
//     con[0].outerHTML = `
//     <a class="containers">
    
//     <script type="text/javascript">
// 	atOptions = {
// 		'key' : '1f63d209961133e7874e095a8872e423',
// 		'format' : 'iframe',
// 		'height' : 250,
// 		'width' : 300,
// 		'params' : {}
// 	};
// 	document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.profitabledisplaynetwork.com/1f63d209961133e7874e095a8872e423/invoke.js"></scr' + 'ipt>');
//     </script>
    
//     </a>`;
//     // console.log(e);
// }
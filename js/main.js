document.addEventListener('DOMContentLoaded', () => {
// keep the line above exactly as it is



// event handler for #clicky and .textbox
document.querySelector('#clicky').onclick = () => {
    // the next line hides the element that has class="brown"
    document.querySelector('.textbox').style.display = 'none';
    // the next line changes the bg of the element that has class="second"
    document.querySelector('.second').style.background = '#5940ff';
}



// // keep the line below exactly as it is
});

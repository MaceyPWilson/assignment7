document.addEventListener('DOMContentLoaded', () => {
// keep the line above exactly as it is

document.querySelector('#image-one').onmouseover = () => {
    document.querySelector('#image-one').style.display = 'none';
}
document.querySelector('#image-one').onmouseleave = () => {
    document.querySelector('#image-one').style.display = 'inline-block';
}

document.querySelector('#image-two').onmouseover = () => {
    document.querySelector('#image-two').style.display = 'none';
}
document.querySelector('#image-two').onmouseleave = () => {
    document.querySelector('#image-two').style.display = 'inline-block';
}

// // keep the line below exactly as it is
});

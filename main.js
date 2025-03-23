function toggleFade() {
    let box = document.getElementById('seemore');
    if (box.style.display == "none") {
        box.style.display = "flex";
    }
    else {
        box.style.display = "none";
    }
    

}

function scaleBox() {
    let box = document.getElementById('scaleBox');
    box.style.transform = box.style.transform === 'scale(1.5)' ? 'scale(1)' : 'scale(1.5)';
}
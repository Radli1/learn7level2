let images = [
    '1.jpeg',
    '3.jpg',
    ];

let num = 0;
function forwImg() {
    let slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function backImg() {
    let slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}

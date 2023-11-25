//them gia tri socket cho client
import socket from '/socketManager';

// Slider of Product
const sliderContainer = document.querySelector('.slider-image-container');
const listCircle = document.querySelector('.list-circle');
const limit = sliderContainer.children.length;
let count = 0; 

setInterval(() => {
    if (count == 3) {
        count = 0;
        sliderContainer.style.transform = `translateX(${count}%)`;
        for (const iterator of listCircle.children) {
            iterator.classList.remove('active');
        }
        listCircle.children[count].classList.add('active');
    } else {
        count++;
        sliderContainer.style.transform = `translateX(-${count * 100}%)`;

        for (const iterator of listCircle.children) {
            iterator.classList.remove('active');
        }
        listCircle.children[count].classList.add('active');
    }
}, 2000);
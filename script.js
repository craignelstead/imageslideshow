//Array of images
//Each index entry in the array must match the file name, e.g. 'image1.jpg'
//Each index entry must have a comma after it, besides the last entry
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
];

let currentIndex = 0;

//Cycles through images in array
function changeImage (){
    currentIndex = (currentIndex + 1) % images.length; //Increment by 1, then loop back to start
    document.getElementById('slideshow').src = `./${images[currentIndex]}`;
}

setInterval(changeImage, 10000);
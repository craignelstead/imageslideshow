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
    let slideshow = document.getElementById('slideshow');

    currentIndex = (currentIndex + 1) % images.length; //Increment by 1, then loop back to start
    slideshow.src = `./${images[currentIndex]}`;

    //Check time to see if screen should be black or show content
    determineDisplayStatus(slideshow);
}

//Checks the current time. If it is night time, the image will not be visible
//and the screen will be black.
function determineDisplayStatus (slideshow) {
    //displayStartTime is the integer correlating to the hour of the day the
    //display should begin showing images. displayStartTime = 7 would begin
    //displaying content at 7:00am local time.
    let displayStartTime = 7;

    //displayEndTime is the integer correlating to the hour of the day the
    //display should stop showing images. displayEndTime = 22 would stop
    //displaying content at 10:00pm local time
    let displayEndTime = 22;

    //Determine if display should be visible based on the time
    let currentTime = new Date().getHours();
    console.log(currentTime);
    
    if (currentTime < displayStartTime || currentTime >= displayEndTime) {
        slideshow.setAttribute('hidden', true);
        console.log('it is night')
    } else {
        slideshow.removeAttribute('hidden');
        console.log('it is day');
    }
}

//setInterval's second argument is the duration, in milliseconds, that the 
//current image will display. 1000 milliseconds = 1 second.
setInterval(changeImage, 10000);
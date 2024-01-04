
// Get all images
const imageArray = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg'
]

function getRandomImage() {
    // get random index
    const randomIndex = Math.floor(Math.random() * imageArray.length);

    // get an image from random index
    const selectedImage = imageArray[randomIndex];

    // Display the image
    document.getElementById("image").src = "./images/" + selectedImage;
}

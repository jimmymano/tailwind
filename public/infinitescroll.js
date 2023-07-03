const imageContainer = document.getElementById("imgcontainer");
const loader = document.getElementById("loader")

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = 'ENXN259PVpyIzxVkLlnpnbiIaIs_FI6o2Zuwoe1hJjs';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// helper functions create DRY code
function setAttributes(element,attributes){
for(const key in attributes){
    element.setAttribute(key,attributes[key]);
}
}


//Check if all images were loaded
function imageLoaded(){

imagesLoaded++
console.log(imagesLoaded)
 if(imagesLoaded === totalImages){
    ready = true;
    loader.hidden = true;
    console.log('ready',ready)
 }
}

function displayPhotos(){
    imagesLoaded = 0;
    totalImages = photosArray.length;
    photosArray.forEach((photo) =>{
        //Create <a> to link to Unsplash
        const item = document.createElement('a');
        // item.setAttribute('href', photo.links.html)
        // item.setAttribute('target', '_blank');
        setAttributes(item,{
            href:photo.links.html,
            target: '_blank',
        })

        //Create img for photo
        const img = document.createElement('img');
        // img.setAttribute('src', photo.urls.regular);
        // img.setAttribute('alt',photo.alt_description);
        // img.setAttribute('title',photo.alt_description);
        setAttributes(img,{
            src:photo.urls.regular,
            alt:photo.alt_description,
            title:photo.alt_description
        })

        //add event listener for on image load
        img.addEventListener('load',imageLoaded)

        //Put <img> inside <a> then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);
    })
}

async function getPhotos(){
try{
const response = await fetch(apiUrl);
photosArray = await response.json();
displayPhotos();

}catch(error){
    //Catch Error Here
    console.log(error)
}
}

// Check to see if scrolled
window.addEventListener('scroll',() =>{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
        ready = false;
        console.log('load more')
    getPhotos()
    }
})

// On Load
getPhotos()

//alt descript
//links.html
//urls.regular

//how to display data
// getphotos 
// fetch(apiUrl)
// get response of photosArray. response.json = photosArray
// we call a displayPhotos() function on photosArray.
// displayPhotos() creates an HTML element for each photo
// element structure is a>img[src="photos.urls.regular"][alt="photo.alt_description"][title="photo.alt_description"]
// since we are using forEach and that returns undefined we must create an empty array variable and push the photo array items into it
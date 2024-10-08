var images = [];
loadImgs();

async function loadImgs() {
    // Load the projects from serverside JSON
    fetch("JSON/imgList.json")
    .then(response => response.json())
    .then(jsonResponse => {
        images = jsonResponse.images;
        displayImgs(images);
    });
}

function displayImgs(images) {
    const imageList = document.querySelector("#imgGrid");
    images.forEach((image) => {
        const imgID = image.replace(".", "");
        imageList.innerHTML += `<li class="galImgItem" id="${imgID}Item"></li>`;
        const imgItem = document.querySelector(`#${imgID}Item`);
        imgItem.innerHTML += `<img src="ProjectPics/${image}" class="galleryImg">`;
    });
}

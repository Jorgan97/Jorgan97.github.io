const imageID = document.querySelector("#projectGallery");
const titleID = document.querySelector("#projectGalleryTitle");
const hrefID = document.querySelector("#imageLink");
let imageIndex = 0;

firstImage();

async function firstImage() {
    projects = await loadProjects();
    displayImage();
}

async function nextImage() {
    let projects = await loadProjects();
    let maxProjectIndex = projects.length - 1;

    imageIndex++;
    if (imageIndex == maxProjectIndex + 1) {
        imageIndex = 0;
    }

    displayImage();
}
async function previousImage() {
    let projects = await loadProjects();
    let maxProjectIndex = projects.length - 1;

    imageIndex--;
    if (imageIndex < 0) {
        imageIndex = maxProjectIndex;
    }

    displayImage();
}

function displayImage() {
    let imageSrc = "ProjectPics/" + projects[imageIndex].thumbnail;
    imageID.src = imageSrc;
    titleID.innerText = projects[imageIndex].title
    setProject(projects[imageIndex]);
}

function setProject(arg) {
    sessionStorage.setItem("id", arg.id);
}

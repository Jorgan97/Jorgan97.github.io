var projects = [];
main();

function main() {
    loadProjects();
}
async function loadProjects() {
    // Load the projects from serverside JSON
    fetch("Projects.json")
    .then(response => response.json())
    .then(jsonResponse => {
        // Make the objects usable, the add to the site
        createObjects(jsonResponse);
        listProjects();
    });
}
// Create an array of project objects, exclude the template object
function createObjects(jsonResponse) {
    let projectKeys = Object.keys(jsonResponse);
    for (var i = 0; i < projectKeys.length - 1; i++) {
        projects.push(jsonResponse[projectKeys[i]]);
    }
}
// List the projects using HTML
function listProjects() {
    const projTable = document.querySelector("#projectTable");
    projects.forEach((project) => {
        const titleHTML = `<p class="projTitle">${project.title}</p>`
        const subHTML = `<p class="projSub">${project.subtitle}</p>`
        let thumbHTML = null;

        // Check if a thumbnail image is defined
        if (project.thumbnail.length == 0) {
            thumbHTML = '<img src="ProjectPics/noImage.png" class="thumbnail">'
        } else {
            thumbHTML = `<img src="ProjectPics/${project.thumbnail}" class="thumbnail">`
        }
        // Add a table row of HTML
        projTable.innerHTML += `<tr class="projListing">${titleHTML + subHTML + thumbHTML}</tr>`
    
    });
}

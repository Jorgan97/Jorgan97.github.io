var projects = [];
main();

function main() {
    loadProjects();
}
async function loadProjects() {
    fetch("Projects.json")
    .then(response => response.json())
    .then(jsonResponse => {
        createObjects(jsonResponse);
        listProjects();
    });
}
function createObjects(jsonResponse) {
    let projectKeys = Object.keys(jsonResponse);
    for (var i = 0; i < projectKeys.length - 1; i++) {
        projects.push(jsonResponse[projectKeys[i]]);
    }
}
function listProjects() {
    const projTable = document.querySelector("#projectTable");
    projects.forEach((project) => {
        const titleHTML = `<p class="projTitle">${project.title}</p>`
        const subHTML = `<p class="projSub">${project.subtitle}</p>`
        let thumbHTML = null;
        if (project.thumbnail.length == 0) {
            thumbHTML = '<img src="ProjectPics/noImage.png" class="thumbnail">'
        } else {
            thumbHTML = `<img src="ProjectPics/${project.thumbnail}" class="thumbnail">`
        }
        projTable.innerHTML += `<tr class="projListing">${titleHTML + subHTML + thumbHTML}</tr>`
    
    });
}

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
    const projList = document.querySelector("#projectList");
    projects.forEach((project) => {
        // Create project content
        const titleHTML = `<p class="projTitle">${project.title}</p>`;
        const subHTML = `<p class="projSub">${project.subtitle}</p>`;
        let thumbHTML = null;
        if (project.thumbnail.length == 0) {
            thumbHTML = '<img src="images/noImage.png" class="thumbnail">';
        } else {
            thumbHTML = `<img src="ProjectPics/${project.thumbnail}" class="thumbnail">`;
        }

        projList.innerHTML += `<li class="projectItem" id="${project.id}"></li>`;
        const projItem = document.querySelector(`#${project.id}`);
        projItem.innerHTML += `<a class="projLink" id="${project.id}Link" href="Projects/${project.id}.html"></a>`;
        const projLink = document.querySelector(`#${project.id}Link`);
        projLink.innerHTML += `<div class="projectHead" id="${project.id}Head"></div>` + thumbHTML;
        const projHead = document.querySelector(`#${project.id}Head`);
        projHead.innerHTML += titleHTML + subHTML;
    });
}

loadProjects(listProjects);

// List the projects using HTML
function listProjects(projects) {
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

        // Creating objects in order of inheritence
        projList.innerHTML += `<li class="projectItem" id="${project.id}Item"></li>`;
        const projItem = document.querySelector(`#${project.id}Item`);
        projItem.innerHTML += `<a class="projLink" id="${project.id}" href="projectViewer.html" onclick="javascript:setProject(this)"></a>`;
        const projLink = document.querySelector(`#${project.id}`);
        projLink.innerHTML += `<div class="projectHead" id="${project.id}Head"></div>` + thumbHTML;
        const projHead = document.querySelector(`#${project.id}Head`);
        projHead.innerHTML += titleHTML + subHTML;
    });
}

function setProject(arg) {
    sessionStorage.setItem("id", arg.id);
}

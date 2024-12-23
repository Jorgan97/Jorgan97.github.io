async function loadProjects(jsonFile) {
    // Load the projects from server side JSON
    let response = await fetch(jsonFile);
    let objects = createObjects(await response.json());
    return objects;
}

// Create an array of project objects, exclude the template object
function createObjects(jsonResponse) {
    objects = [];
    let projectKeys = Object.keys(jsonResponse);
    projectKeys.forEach(key => objects.push(jsonResponse[key]));

    // Take all but the last object
    objects = objects.slice(0, -1);
    return objects;
}

function displayThisProject(project, projList) {
    const titleHTML = `<p class="projTitle">${project.title}</p>`;
        const subHTML = `<p class="projSub">${project.subtitle}</p>`;

        const subProjCount = project.subProjects.length;
        let subProjCountHTML = '';
        if (subProjCount > 0) {
            subProjCountHTML = `<p class='subProjectCount'>${subProjCount} Subprojects</p>`;
        }

        const tagsHTML = `<span class=\"tags\" id=${project.id}Tags></span>`;
        const tags = project.tags
        let tagHTML = "";
        tags.forEach(i => {
            let html = `<p class="tagText">${i}</p>\n`;
            tagHTML += html;
        });

        let thumbHTML = null;
        if (project.thumbnail.length == 0) {
            thumbHTML = '<img src="images/noImage.png" class="thumbnail">';
        } else {
            thumbHTML = `<img src="ProjectPics/${project.thumbnail}" class="thumbnail">`;
        }

        // Creating objects in order of inheritance
        projList.innerHTML += `<li class="projectItem" id="${project.id}Item"></li>`;
        const projItem = document.querySelector(`#${project.id}Item`);

        projItem.innerHTML += `<a class="projLink" id="${project.id}" href="projectViewer.html" onclick="javascript:setProject(this)"></a>`;
        const projLink = document.querySelector(`#${project.id}`);

        projLink.innerHTML += thumbHTML + `<div class="projectHead" id="${project.id}Head"></div>`;
        const projHead = document.querySelector(`#${project.id}Head`);

        projHead.innerHTML += titleHTML + subProjCountHTML + subHTML + tagsHTML;
        const projTags = document.querySelector(`#${project.id}Tags`);
        
        projTags.innerHTML += tagHTML;
}

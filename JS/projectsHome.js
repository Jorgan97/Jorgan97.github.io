listProjects();

// List the projects using HTML
async function listProjects() {
    const projects = await loadProjects("JSON/Projects.json");
    const projList = document.querySelector("#projectList");
    const visibleProjects = 2;
    projects.slice(0, visibleProjects).forEach((project) => {
        // Create project content
        const titleHTML = `<p class="projTitle">${project.title}</p>`;
        const subHTML = `<p class="projSub">${project.subtitle}</p>`;

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
        projHead.innerHTML += titleHTML + subHTML + tagsHTML;
        const projTags = document.querySelector(`#${project.id}Tags`);
        projTags.innerHTML += tagHTML;
    });
    projList.innerHTML += `<li class='projectItem' id='seeMore'></li>`;
    const seeMore = document.querySelector('#seeMore');
    seeMore.innerHTML += `<a class='projLink' id='seeMoreLink' href='projects.html'></a>`;
    const seeMoreLink = document.querySelector('#seeMoreLink');
    seeMoreLink.innerHTML += `<img class='thumbnail' style='auto'src='ProjectPics/seeMoreThum.png'>`;
    seeMoreLink.innerHTML += `<div class='projectHead' id='seeMoreDiv'></div>`;
    const seeMoreDiv = document.querySelector('#seeMoreDiv');
    seeMoreDiv.innerHTML += `<h2 id='seeMoreButton'>See More ></h2>`
}

function setProject(arg) {
    sessionStorage.setItem("id", arg.id);
}

listProjects();

// List the projects using HTML
async function listProjects() {
    const projects = await loadProjects("JSON/Projects.json");
    const projList = document.querySelector("#someProjects");
    const visibleProjects = 2;
    projects.slice(0, visibleProjects).forEach((project) => {
        // Create project content
        displayThisProject(project, projList)
    });

    
    projList.innerHTML += `<li class='projectItem' id='seeMore'></li>`;
    const seeMore = document.querySelector('#seeMore');

    seeMore.innerHTML +=  `<a class='projLink someProjLink' id='seeMoreLink' href='projects.html'></a>`;
    const seeMoreLink = document.querySelector('#seeMoreLink');

    seeMoreLink.innerHTML += `<div class="someProjLink" id="seeMoreProjDiv"$>`
    const projLinkDiv = document.querySelector(`#seeMoreProjDiv`);

    projLinkDiv.innerHTML += `<img class='thumbnail' src='ProjectPics/seeMoreThum.png'>`;
    projLinkDiv.innerHTML += `<div class='projectHead someProjectHead' id='seeMoreDiv'></div>`;
    const seeMoreDiv = document.querySelector('#seeMoreDiv');

    seeMoreDiv.innerHTML += `<p id='seeMoreButton'>See More ><p>`;
}

function setProject(arg) {
    sessionStorage.setItem("id", arg.id);
}

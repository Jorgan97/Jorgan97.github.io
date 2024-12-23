displayProject();

async function displayProject() {
    const [project, subProjects] = await getThisProject("JSON/Projects.json");
    const title = `<h1 class="viewerTitle">${project.title}</h1>`;
    const subTitle = `<h2 class="viewerSub">${project.subtitle}</h2>`;
    const tags = project.tags;
    let tagHTML = "";
    tags.forEach(i => {
        let html = `<p1 class="tagText">${i}</p1>\n`;
        tagHTML += html;
    });

    const thumbHTML = getThumbnail(project);
    const date = `<p style="font-size: 14pt; font-style:italic; margin-bottom: 10px">${project.date}</p>`
    const body = project.discussion;

    let subProjectContents = "";
    console.log(subProjects.length)
    if (subProjects.length != 0) {
        subProjectContents = "<p class='viewerBody' style='margin-bottom: 5px;'>This project is made up of sub-projects:</p><ul class='projectContents'>";
        subProjects.forEach((subProject) => {
            subProjectContents += `<li><a class="emailLink" style="font-weight: 400" href="#${subProject.id}"><u>${subProject.title}</u></a></li>`
        });
    subProjectContents += '</ul></p>';
}

    let subProjectPage = "";
    subProjects.forEach((subProject) => {
        const header = `<h2 style='margin-top:50px' class="viewerSub" id="${subProject.id}"><b>${subProject.title}</b></h2>`;
        const subDate = `<p style="font-size: 14pt; font-style:italic; margin-bottom: 10px">${subProject.date}</p>`
        const subThumb = getThumbnail(subProject);
        const discussion = subProject.discussion;
        subProjectPage += header + subDate + subThumb + discussion;
    });

    const page = document.querySelector("#projectViewer");
    page.innerHTML += title + subTitle + tagHTML + date + thumbHTML + body + subProjectContents + subProjectPage;
}

async function getThisProject(jsonFile) {
    const projectID = sessionStorage.getItem("id");
    let projects = await loadProjects(jsonFile);
    let project = null;
    projects.forEach((proj) => {
        if (proj.id == projectID) {
            project = proj
        }
    });

    let subProjects = [];
    const allSubProjects = await loadProjects("JSON/subProjects.json");
    allSubProjects.forEach((possibleSubProject) => {
        project.subProjects.forEach((subProjectID) => {
            if (possibleSubProject.id == subProjectID) {
                subProjects.push(possibleSubProject);
            }
        });
    });

    return [project, subProjects];
}

function getThumbnail(project) {
    let thumbHTML = null;
    if (project.thumbnail.length == 0) {
        thumbHTML = '<img src="images/noImage.png" class="viewerCover">';
    } else {
        thumbHTML = `<img src="ProjectPics/${project.thumbnail}" class="viewerCover">`;
    }
    return thumbHTML;
}
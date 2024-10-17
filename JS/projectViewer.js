const projectID = sessionStorage.getItem("id");
displayProject();

async function displayProject(projects) {
    projects = await loadProjects();
    let project = null;
    projects.forEach((proj) => {
        if (proj.id == projectID) {
            project = proj
        }
    });
    const title = `<h1 class="viewerTitle">${project.title}</h1>`;
    const subTitle = `<h2 class="viewerSub">${project.subtitle}</h2>`;

    const tags = project.tags;
    let tagHTML = "";
    tags.forEach(i => {
        let html = `<p class="tagText">${i}</p>\n`;
        tagHTML += html;
    });

    let thumbHTML = null;
    if (project.thumbnail.length == 0) {
        thumbHTML = '<img src="images/noImage.png" class="viewerCover">';
    } else {
        thumbHTML = `<img src="ProjectPics/${project.thumbnail}" class="viewerCover">`;
    }
    const date = `<p style="font-size: 14pt; font-style:italic; margin-bottom: 10px">${project.date}</p>`
    const body = project.discussion;

    const page = document.querySelector("#projectViewer");
    page.innerHTML += title + subTitle + tagHTML + date + thumbHTML + body;

    console.log(project.subProjects == []);
    if (project.subProjects != []) {
        console.log("Hello");
    }
}
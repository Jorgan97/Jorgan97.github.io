const projectID = sessionStorage.getItem("id");
loadProjects(displayProject);

function displayProject(projects) {
    let project = null;
    projects.forEach((proj) => {
        if (proj.id == projectID) {
            project = proj
        }
    });
    const title = `<h1 class="viewerTitle">${project.title}</h1>`;
    const subTitle = `<h2 class="viewerSub">${project.subtitle}</h2>`;

    let thumbHTML = null;
    if (project.thumbnail.length == 0) {
        thumbHTML = '<img src="images/noImage.png" class="viewerCover">';
    } else {
        thumbHTML = `<img src="ProjectPics/${project.thumbnail}" class="viewerCover">`;
    }
    const date = `<p style="font-size: 14pt; font-style:italic; margin-bottom: 10px">${project.date}</p>`
    const body = project.discussion;

    const page = document.querySelector("#projectViewer");
    page.innerHTML += title + subTitle + date + thumbHTML + body;
}
listProjects();

// List the projects using HTML
async function listProjects() {
    const projects = await loadProjects("JSON/Projects.json");
    const projList = document.querySelector("#projectList");
    projects.forEach((project) => {
        // Create project content
        displayThisProject(project, projList)
    });
}

function setProject(arg) {
    sessionStorage.setItem("id", arg.id);
}

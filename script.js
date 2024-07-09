main();

function main() {
    loadProjects();
}
async function loadProjects() {
    fetch("Projects.json")
    .then(response => response.json())
    .then(jsonResponse => createObjects(jsonResponse))
}
function createObjects(jsonResponse) {
    let projectKeys = Object.keys(jsonResponse);
    let projects = [];
    for (var i = 0; i < projectKeys.length - 1; i++) {
        projects.push(jsonResponse[projectKeys[i]]);
    }
    console.log(projects);
}
function listProjects() {
    const projTable = document.querySelector("#projectTable");
    projTable.innerHTML += '';

}
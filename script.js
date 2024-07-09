var projects = [];
main();

function main() {
    loadProjects();
}
async function loadProjects() {
    fetch("Projects.json")
    .then(response => response.json())
    .then(jsonResponse => {
        createObjects(jsonResponse);
        listProjects();
    });
}
function createObjects(jsonResponse) {
    let projectKeys = Object.keys(jsonResponse);
    for (var i = 0; i < projectKeys.length - 1; i++) {
        projects.push(jsonResponse[projectKeys[i]]);
    }
}
function listProjects() {
    const projTable = document.querySelector("#projectTable");
    projects.forEach((i) => projTable.innerHTML += `<tr class="projListing"><p class="projTitle">${i["title"]}</p><p class="projSub">${i["subtitle"]}</p></tr>`);
}

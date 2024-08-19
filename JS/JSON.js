async function loadProjects(func) {
    // Load the projects from server side JSON
    let response = await fetch("JSON/Projects.json");
    let objects = createObjects(await response.json());
    return objects;
}

// Create an array of project objects, exclude the template object
function createObjects(jsonResponse) {
    objects = [];
    let projectKeys = Object.keys(jsonResponse);
    for (var i = 0; i < projectKeys.length - 1; i++) {
        objects.push(jsonResponse[projectKeys[i]]);
    }
    return objects;
}

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
    return objects;
}

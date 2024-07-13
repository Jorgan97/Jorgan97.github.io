async function loadProjects(func) {
    // Load the projects from serverside JSON
    fetch("JSON/Projects.json")
    .then(response => response.json())
    .then(jsonResponse => {
        objects = createObjects(jsonResponse);
        func(objects);
        return objects;
    });
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

main();

function main() {
    populate();
}

async function populate() {
    fetch("Projects.json")
    .then(response => response.json())
    .then(jsonResponse => console.log(jsonResponse))
}
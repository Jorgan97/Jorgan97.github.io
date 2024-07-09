main();

async function populate() {
    const requestURL = "https://github.com/Jorgan97/Jorgan97.github.io/blob/11729ed1f19991c97925614425f5b81274105ded/Projects.json";
    $.getJSON(requestURL, function(json) {
        console.log(json);
    });
}

function main() {
    populate();
}
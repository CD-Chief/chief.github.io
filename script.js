

function hidePages() {
    const pages = document.getElementsByClassName('page');

    for (let i = 0; i < pages.length; i++) {
        pages[i].setAttribute('style', 'display: none');
    }
}

function showPage(Button) {
    console.log("working");
    const buttonName = Button.name;
    hidePages();

    if (buttonName == "home") {
        document.getElementById("main").setAttribute("style", "display: flex");
    } else if (buttonName == "projects") {
        document.getElementById(buttonName).setAttribute("style", "display: flex");
    }
}

function toggleProjectContent(project) {
    const projectContent = project.querySelector(".project-content");
    let currentDisplay = window.getComputedStyle(projectContent).display;
    if (currentDisplay == "none") {
        projectContent.style.display = "flex";
    } else {
        projectContent.style.display = "none";
    }
}
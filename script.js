

function hidePages() {
    const pages = document.getElementsByClassName('page');

    for (let i = 0; i < pages.length; i++) {
        pages[i].setAttribute('style', 'display: none');
    }
}

function showPage(Button) {
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
    let contentMaxHieght = projectContent.style.maxHeight;
    // Get scrollHeight
    projectContent.style.display = "block";
    let fullHeight = projectContent.scrollHeight;
    projectContent.style.display = "flex";

    if (contentMaxHieght === "" || contentMaxHieght === "0px") {
        projectContent.style.maxHeight = fullHeight + "px";
    } else {
        projectContent.style.maxHeight = "0px";
    }
}




function hidePages() {
    const pages = document.getElementsByClassName('page');

    for (let i = 0; i < pages.length; i++) {
        pages[i].setAttribute('style', 'display: none');
    }
}

function showNav() {
    const nav = document.getElementsByClassName('nav-button');

    for (let i = 0; i < nav.length; i++) {
        nav[i].setAttribute('style', 'display: inline-block');
    }
}

function hideNav(nav) {
    nav.setAttribute('style', 'display: none');
}

function showPage(name, nav) {
    hidePages();
    showNav();
    document.getElementById(name).setAttribute("style", "display: flex");
    hideNav(nav);

}

function toggleProjectContent(project) {
    const projectContent = project.querySelector(".project-content");
    let contentMaxHeight = projectContent.style.maxHeight;
    // Get scrollHeight
    projectContent.style.display = "block";
    let fullHeight = projectContent.scrollHeight;
    projectContent.style.display = "flex";

    if (contentMaxHeight === "" || contentMaxHeight === "0px") {
        projectContent.style.maxHeight = fullHeight + "px";
    } else {
        projectContent.style.maxHeight = "0px";
    }
}


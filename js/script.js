


function initPage() {
    setMenus();
}

function setMenus() {
    $("#menu_1").click(function() {
        setContent("#mainContents", "mainContent1.html");
    });

    $("#menu_2").click(function() {
        setContent("#mainContents", "mainContent2.html");
    });
}

async function setContent(targetId, templateName) {
    let pageContent = await loadTemplate(templateName);
    $(targetId).html(pageContent);
}

async function loadTemplate(templateName) {
    const content = await fetch(templateName);
    return content.text();
}

$(function() {
    initPage();
});
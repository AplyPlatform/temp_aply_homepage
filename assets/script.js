


function initPage() {
    setMenus();
}

function setMenus() {
    $("#menu_main").click(function() {        
        setContent("#mainContents", "main.html");
    });

    $("#menu_about").click(function() {        
        setContent("#mainContents", "about.html");
    });

    $("#menu_history").click(function() {        
        setContent("#mainContents", "history.html");
    });

    $("#menu_team").click(function() {        
        setContent("#mainContents", "team.html");
    });

    $("#menu_location").click(function() {        
        setContent("#mainContents", "location.html");
    });

    $("#menu_recruit").click(function() {        
        setContent("#mainContents", "recruit.html");
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
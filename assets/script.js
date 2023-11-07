function initPage() {
    setMenus();
}


    $("#menu_about").click(function() {        
        setContent("#mainContents", "about.html");
    });

    $("#menu_service").click(function() {        
        setContent("#mainContents", "service.html");
    });

    $("#menu_team").click(function() {        
        setContent("#mainContents", "team.html");
    });

    $("#menu_contact").click(function() {        
        setContent("#mainContents", "contact.html");
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
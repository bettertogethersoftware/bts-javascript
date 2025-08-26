(function () {/*** https://aistudio.google.com/prompts/new_chat ***/
    //Validated: 2025-02-19
    var targetUrl = "aistudio";
    const currentUrlLowerCase = window.location.href.toLowerCase();
    //debug
    //alert("currentUrlLowerCase: " + currentUrlLowerCase + ", " + "targetUrl: " + targetUrl);
    if (!currentUrlLowerCase.includes(targetUrl))
        return;
    /***************/

    window.location.href = "https://aistudio.google.com/prompts/new_chat";
})();
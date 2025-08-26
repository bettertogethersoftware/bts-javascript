(function () {/*** claude ***/
    //Validated: //normal:2025-02-19
    var targetUrl = "claude";
    const currentUrlLowerCase = window.location.href.toLowerCase();
    //debug
    //alert("currentUrlLowerCase: " + currentUrlLowerCase + ", targetUrl: " + targetUrl);
    if (!currentUrlLowerCase.includes(targetUrl))
        return;
    /***************/
    window.location.href = "https://claude.ai/new";
})();
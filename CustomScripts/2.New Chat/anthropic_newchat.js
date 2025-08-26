(function () {
    /*** anthropic ***/
    //Validated:

    var targetUrl = "anthropic";
    const currentUrlLowerCase = window.location.href.toLowerCase();
    //debug
    //alert("currentUrlLowerCase: " + currentUrlLowerCase + ", " + "targetUrl: " + targetUrl);
    if (!currentUrlLowerCase.includes(targetUrl))
        return;
    /***************/

    var anchor = document.querySelector('[data-testid="new-prompt-button"]');
    if (anchor) {
        anchor.click();
    } else {
        window.location.href = "https://console.anthropic.com/workbench";
    }

})();
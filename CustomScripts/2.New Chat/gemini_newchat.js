(function () {/*** gemini ***/
    //Validated:
    //normal:2025-02-19
    var targetUrl = "gemini";
    const currentUrlLowerCase = window.location.href.toLowerCase();
    //debug
    //alert("currentUrlLowerCase: " + currentUrlLowerCase + ", " + "targetUrl: " + targetUrl);
    if (!currentUrlLowerCase.includes(targetUrl))
        return;
    /***************/

    //var div = document.querySelector('div.e214291b');
    //if (div) {
    //    div.click();
    //    return;
    //}

    //const buttonByDataTestId = document.querySelector('[data-test-id="start-new-conversation-button"]');
    //if (buttonByDataTestId) {
    //    buttonByDataTestId.click();
    //}

    window.location.href = "https://gemini.google.com/";

})();

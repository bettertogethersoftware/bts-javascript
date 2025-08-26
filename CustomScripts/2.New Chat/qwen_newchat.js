(function () {
    /*** gemini ***/
    //Validated:
    //normal:2025-02-19
    var targetUrl = "qwen";
    const currentUrlLowerCase = window.location.href.toLowerCase();
    //debug
    //alert("currentUrlLowerCase: " + currentUrlLowerCase + ", " + "targetUrl: " + targetUrl);
    if (!currentUrlLowerCase.includes(targetUrl))
        return;
    /***************/

    window.location.href = "https://chat.qwen.ai/";
    
})();
(function () {
    var targetUrl = "genspark.ai";
    const currentUrlLowerCase = window.location.href.toLowerCase();
    //debug
    //alert("currentUrlLowerCase: " + currentUrlLowerCase + ", " + "targetUrl: " + targetUrl);
    if (!currentUrlLowerCase.includes(targetUrl))
        return;
    /***************/

    window.location.href = "https://www.genspark.ai/agents?type=moa_chat";
})();
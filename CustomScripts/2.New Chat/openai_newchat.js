(function () {
    //Validated: 
    //normal:2025-02-21
    var targetUrl = "openai";
    const currentUrlLowerCase = window.location.href.toLowerCase();
    // Debug alert to check current URL and target URL
    //alert("currentUrlLowerCase: " + currentUrlLowerCase + ", targetUrl: " + targetUrl);
    if (!currentUrlLowerCase.includes(targetUrl))
        return;
    /**************/
    if (currentUrlLowerCase.includes("prompts")) {
        location.reload(true);
    } else {
        location.reload(true);
    }
   
})();
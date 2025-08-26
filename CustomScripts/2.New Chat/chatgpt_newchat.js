(function () {/*** chatgpt ***/
    //Validated:
    //4o mini:2025-02-19
    //o3 mini:2025-02-19
    var targetUrl = "chatgpt";
    const currentUrlLowerCase = window.location.href.toLowerCase();
    //debug
    //alert("currentUrlLowerCase: " + currentUrlLowerCase + ", " + "targetUrl: " + targetUrl);
    if (!currentUrlLowerCase.includes(targetUrl))
        return;
    /***************/

    window.location.href = "https://chatgpt.com/?";

})();
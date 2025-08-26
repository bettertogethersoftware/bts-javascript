(function () {/*** deepseek ***/
    //Validated:
    //normal:2025-02-19
    var targetUrl = "deepseek";
    const currentUrlLowerCase = window.location.href.toLowerCase();
    //debug
    //alert("currentUrlLowerCase: " + currentUrlLowerCase + ", " + "targetUrl: " + targetUrl);
    if (!currentUrlLowerCase.includes(targetUrl))
        return;
    /***************/

    //var div = document.querySelector('div._217e214');
    //if (div) {
    //    div.click();
    //}
    window.location.href = "https://chat.deepseek.com/";
    
})();
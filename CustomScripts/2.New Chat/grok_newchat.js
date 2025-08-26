(function () {/*** grok ***/
    //Validated: 
    //normal:2025-02-21
    var targetUrl = "grok";
    const currentUrlLowerCase = window.location.href.toLowerCase();
    // Debug alert to check current URL and target URL
    //alert("currentUrlLowerCase: " + currentUrlLowerCase + ", targetUrl: " + targetUrl);
    if (!currentUrlLowerCase.includes(targetUrl))
        return;
    /**************/
    //var chatLink = document.querySelector('a[href="/chat"]');
    //if (chatLink) {
    //    //alert("Chat link found, clicking it now.");
    //    chatLink.click();
    //} else {
    //    //alert("Chat link not found.");
    //}


    window.location.href = "https://grok.com/";

})();
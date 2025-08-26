(function () {/*** gemini ***/
    // Validated:
    // normal: 2025-02-19
    var targetUrl = "duckduckgo";
    const currentUrlLowerCase = window.location.href.toLowerCase();

    // Debug
    // alert("currentUrlLowerCase: " + currentUrlLowerCase + ", " + "targetUrl: " + targetUrl);
    if (!currentUrlLowerCase.includes(targetUrl)) {
        return;
    }

    /***************/

    const event = new KeyboardEvent('keydown', {
        bubbles: true,
        ctrlKey: true,
        shiftKey: true,
        key: 'O',
        code: 'KeyO',
        keyCode: 79, // 'O' key
        which: 79
    });

    // Dispatch the event on the document or a specific element
    document.dispatchEvent(event);
})();
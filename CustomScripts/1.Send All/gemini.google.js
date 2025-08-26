(function () {
    /*** gemini ***/
    //Validated: 2025-02-19
    var targetUrl = "gemini";
    const currentUrlLowerCase = window.location.href.toLowerCase();
    //debug
    //alert("currentUrlLowerCase: " + currentUrlLowerCase + ", " + "targetUrl: " + targetUrl);
    if (!currentUrlLowerCase.includes(targetUrl))
        return;
    /***************/

    // Select the rich text editor within the rich-textarea
    const richTextEditor = document.querySelector("rich-textarea .ql-editor");
    if (richTextEditor) {
        richTextEditor.focus(); // Ensure the editor has focus

        // Simulate text insertion
        richTextEditor.textContent += "^TEXT^";
        richTextEditor.dispatchEvent(new Event("input", { bubbles: true }));

        setTimeout(() => {
            // Select the "Send message" button using its class
            const sendButton = document.querySelector("button.send-button");
            if (sendButton) {
                sendButton.click();
            } else {
                console.error("Error: Send message button not found");
            }
        }, 500);
    } else {
        console.error("Error: Rich text editor not found");
    }
})();
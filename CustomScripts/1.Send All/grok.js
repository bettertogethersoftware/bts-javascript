(function () {
    /*** grok ***/
    // Validated: 2025-02-21
    var targetUrl = "grok";
    const currentUrlLowerCase = window.location.href.toLowerCase();
    //alert("Debug: currentUrlLowerCase: " + currentUrlLowerCase + ", targetUrl: " + targetUrl);
    if (!currentUrlLowerCase.includes(targetUrl)) {
        //alert("Debug: URL does not include target URL. Exiting.");
        return;
    }

    // Select the textarea within the container.
    const textarea = document.querySelector("div.relative.z-10 textarea");
    if (textarea) {
        //alert("Debug: Textarea found. Focusing and injecting text natively.");
        textarea.focus(); // Ensure the textarea has focus

        // Use the native setter for the textarea's value.
        const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
        nativeSetter.call(textarea, textarea.value + "^TEXT^");
        textarea.dispatchEvent(new Event("input", { bubbles: true }));
        //alert("Debug: Text injected. Current value: " + textarea.value);

        setTimeout(() => {
            // Select the send button using its classes and type attribute.
            const button = document.querySelector("button.group.flex.flex-col.justify-center[type='submit']");
            if (button) {
                //alert("Debug: Send button found. Clicking button.");
                button.click();
            } else {
                //alert("Error: Send button not found");
                console.error("Error: Send button not found");
            }
        }, 500);
    } else {
        //alert("Error: Textarea not found");
        console.error("Error: Textarea not found");
    }
})();
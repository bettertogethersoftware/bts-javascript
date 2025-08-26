(function () {
    // Validated: 2025-02-21
    var targetUrl = "duckduckgo";
    const currentUrlLowerCase = window.location.href.toLowerCase();

    if (!currentUrlLowerCase.includes(targetUrl)) {
        return; // Exit if the URL does not include the target URL
    }

    // Select the textarea using its class name
    const textarea = document.querySelector("textarea[name='user-prompt']");
    if (textarea) {
        textarea.focus(); // Ensure the textarea has focus

        // Use the native setter for the textarea's value
        const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
        nativeSetter.call(textarea, textarea.value + "^TEXT^");
        textarea.dispatchEvent(new Event("input", { bubbles: true }));

        setTimeout(() => {
            // Select the send button using its class name
            const button = document.querySelector("button[aria-label='Send']");
            if (button) {
                button.click(); // Simulate a click on the button
            } else {
                console.error("Error: Send button not found");
            }
        }, 500);
    } else {
        console.error("Error: Textarea not found");
    }
})();
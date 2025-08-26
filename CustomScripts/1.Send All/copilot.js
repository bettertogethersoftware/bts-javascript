(function () {


    // Select the textarea by its ID.
    const textarea = document.getElementById("userInput");

    if (textarea) {
        // Focus the textarea.
        textarea.focus();

        // Use the native setter for the textarea's value.
        const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
        nativeSetter.call(textarea, textarea.value + "^TEXT^");

        // Dispatch an input event to notify any listeners of the change.
        textarea.dispatchEvent(new Event("input", { bubbles: true }));

        setTimeout(() => {
            // Select the send button using its title attribute.
            const button = document.querySelector("button[title='Submit message']");
            if (button) {
                button.click();
            } else {
                console.error("Error: Send button not found");
            }
        }, 500);
    } else {
        console.error("Error: Textarea not found");
    }
})();
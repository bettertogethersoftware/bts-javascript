(function () {
    /*** deepseek ***/
    //Validated: 2025-02-19
    var targetUrl = "deepseek";
    const currentUrlLowerCase = window.location.href.toLowerCase();
    //debug
    //alert("currentUrlLowerCase: " + currentUrlLowerCase + ", " + "targetUrl: " + targetUrl);
    if (!currentUrlLowerCase.includes(targetUrl))
        return;
    /***************/

    const textarea = document.querySelector("#chat-input");
    if (textarea) {
        textarea.focus(); // Ensure the textarea has focus

        // Define the text to insert
        const insertText = '^TEXT^';

        // Update the textarea's value using the native setter
        const nativeSetter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value').set;
        nativeSetter.call(textarea, textarea.value + insertText);

        // Dispatch an InputEvent to simulate real user input
        const inputEvent = new InputEvent('input', {
            bubbles: true,
            cancelable: true,
            data: insertText,
            inputType: 'insertText'
        });
        textarea.dispatchEvent(inputEvent);

        // Wait a bit before attempting to click the send button
        setTimeout(() => {
            const buttonSelectors = [
                'div[role="button"]._7436101'
                // Additional selectors can be added here if needed
            ];

            let buttonClicked = false;

            for (const selector of buttonSelectors) {
                const button = document.querySelector(selector);
                if (button) {
                    button.click();
                    buttonClicked = true;
                    break;
                }
            }

            if (!buttonClicked) {
                console.error("Error: Send button not found");
            }
        }, 500);
    } else {
        console.error("Error: Textarea not found");
    }

})();
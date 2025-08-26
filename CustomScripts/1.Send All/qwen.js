(function () {
    /*** qwen ***/
    //Validated: 2025-02-19
    var targetUrl = "qwen";
    const currentUrlLowerCase = window.location.href.toLowerCase();

    if (!currentUrlLowerCase.includes(targetUrl))
        return;
    /****************/

    // Select the textarea by its ID and placeholder
    const textarea = document.querySelector('#chat-input');
    if (textarea) {
        // Focus the textarea
        textarea.focus();

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

        // Wait briefly before attempting to click the send button
        setTimeout(() => {
            // Define button selectors - using ID from the provided button
            const buttonSelectors = [
                '#send-message-button'
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
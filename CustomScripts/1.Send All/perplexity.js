(function () {
    /*** perplexity ***/
    var targetUrl = "perplexity";
    const currentUrlLowerCase = window.location.href.toLowerCase();
    if (!currentUrlLowerCase.includes(targetUrl)) return;

    // Select the contenteditable div
    const inputDiv = document.querySelector('#ask-input[contenteditable="true"]');
    if (inputDiv) {
        inputDiv.focus();

        const insertText = '^TEXT^';
        inputDiv.innerHTML += insertText;

        // Dispatch input event
        const inputEvent = new InputEvent('input', {
            bubbles: true,
            cancelable: true,
            data: insertText,
            inputType: 'insertText'
        });
        inputDiv.dispatchEvent(inputEvent);

        // Wait briefly before clicking send
        setTimeout(() => {
            const sendButton = document.querySelector('[data-testid="submit-button"]');
            if (sendButton) {
                sendButton.click();
            } else {
                console.error("Error: Send button not found");
            }
        }, 500);
    } else {
        console.error("Error: Input div not found");
    }
})();

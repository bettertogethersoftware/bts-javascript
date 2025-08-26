(function () {
    /*** you.com injection ***/
    var targetUrl = "you.com";
    const currentUrlLowerCase = window.location.href.toLowerCase();
    if (!currentUrlLowerCase.includes(targetUrl)) return;

    const textarea = document.querySelector('#search-input-textarea');
    if (textarea) {
        textarea.focus();

        // Replace with text (or append to existing)
        textarea.value = '^TEXT^';

        // Simulate typing a space to "trigger" the button appearance
        textarea.setRangeText(' ', textarea.value.length, textarea.value.length, 'end');
        
        // Keyboard event (simulate space key)
        textarea.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true }));
        textarea.dispatchEvent(new KeyboardEvent('keypress', { key: ' ', bubbles: true }));
        textarea.dispatchEvent(new KeyboardEvent('keyup', { key: ' ', bubbles: true }));

        // Fire both input and change just in case
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
        textarea.dispatchEvent(new Event('change', { bubbles: true }));

        // Wait for UI to react and show the button
        setTimeout(() => {
            // Find the actual submit button
            const sendButton = document.querySelector('button[aria-label="Submit query"]');
            if (sendButton) {
                sendButton.click();
            } else {
                console.error("Error: Submit button not found");
            }
        }, 300);
    } else {
        console.error("Error: Textarea not found");
    }
})();

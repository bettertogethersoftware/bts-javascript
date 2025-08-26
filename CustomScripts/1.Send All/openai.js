(function () {
    /*** openai ***/
    // Validated: 2025-02-21
    // chat and assistant
    const targetUrl = "openai";
    const currentUrlLowerCase = window.location.href.toLowerCase();

    // Early return if not on correct page
    if (!currentUrlLowerCase.includes(targetUrl)) {
        return;
    }


    // 2. Helper function to insert text and trigger events
    const insertTextAtCursor = (element, text) => {
        // Focus the element
        element.focus();

        // Get selection
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);

        // Insert text
        const textNode = document.createTextNode(text);
        range.insertNode(textNode);
        range.collapse(false);

        // Create and dispatch multiple events to properly simulate user input
        const events = [
            new InputEvent('beforeinput', { bubbles: true, cancelable: true }),
            new InputEvent('input', { bubbles: true, cancelable: false }),
            new Event('change', { bubbles: true }),
        ];

        events.forEach(event => {
            element.dispatchEvent(event);
        });

        // Force a DOM update
        element.dispatchEvent(new Event('blur'));
        element.dispatchEvent(new Event('focus'));
    };

    // 3. Main execution
    try {
        // Find editor - using more specific selector
        const editor = document.querySelector("div.tiptap.ProseMirror[contenteditable='true']");
        if (!editor) {
            throw new Error("Editor element not found");
        }

        // Set data-focused attribute
        editor.setAttribute('data-focused', 'true');

        // Insert text
        insertTextAtCursor(editor, "^TEXT^");

        // Click send button after ensuring text was inserted
        setTimeout(() => {
            const sendButton = document.querySelector("button.Wmjjd[data-color='primary']");
            if (!sendButton) {
                throw new Error("Send button not found");
            }
            // Enable the button if it's disabled
            sendButton.disabled = false;
            sendButton.click();
        }, 500); // Increased timeout to 1000ms

    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
})();
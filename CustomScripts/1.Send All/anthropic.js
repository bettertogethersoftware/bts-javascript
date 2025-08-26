(function () {
    /*** anthropic ***/
    // Validated: 2025-02-21
    const targetUrl = "anthropic";
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



    try {
        // Find all editors
        const editors = document.querySelectorAll("div.ProseMirror[contenteditable='true']");

        // Check if there is at least one element
        if (editors.length === 0) {
            throw new Error("Editor element not found");
        }

        // Get the last editor
        const editor = editors[editors.length - 1];
        // Insert text
        try {
            editor.textContent = "";
        } catch (error) {
            //in openai somehow this is not working
        }

        insertTextAtCursor(editor, "^TEXT^");

        // Click send button after short delay
        setTimeout(() => {
            const button = document.querySelector('button[data-testid="run-button"]');
            if (button) {
                button.click();
            } else {
                console.error('Run button not found.');
            }

        }, 500);

    } catch (error) {
        console.error(`Claude javascript error: ${error.message}`);
    }
})();
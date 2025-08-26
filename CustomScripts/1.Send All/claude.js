(function () {
    /*** claude ***/
    // Validated: 2025-02-21
    const targetUrl = "claude";
    const currentUrlLowerCase = window.location.href.toLowerCase();

    // Early return if not on correct page
    if (!currentUrlLowerCase.includes(targetUrl)) {
        console.debug("Not on Claude page - exiting");
        return;
    }

    // Helper function to insert text and dispatch input event
    const insertTextAtCursor = (element, text) => {
        element.focus();
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const textNode = document.createTextNode(text);
        range.insertNode(textNode);
        range.collapse(false);

        // Dispatch input event
        element.dispatchEvent(new Event('input', { bubbles: true }));
    };

    // Main execution
    try {
        // Find editor
        const editor = document.querySelector("div.ProseMirror[contenteditable='true']");
        if (!editor) {
            throw new Error("Editor element not found");
        }

        // Insert text
        insertTextAtCursor(editor, "^TEXT^");

        // Click send button after short delay
        setTimeout(() => {
            const sendButton = document.querySelector('button[aria-label="Send message"]');
            if (!sendButton) {
                throw new Error("Send button not found");
            }
            sendButton.focus();
            sendButton.click();
        }, 500);

    } catch (error) {
        console.error(`Claude javascript error: ${error.message}`);
    }
})();
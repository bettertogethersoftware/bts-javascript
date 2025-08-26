(function () {
    /*** https://getmerlin.in ***/
    //Validated: 2025-08-26
    var targetUrl = "getmerlin";
    const currentUrlLowerCase = window.location.href.toLowerCase();

    if (!currentUrlLowerCase.includes(targetUrl))
        return;

    /***************/
    const editableDiv = document.querySelector('div.tiptap.ProseMirror[contenteditable="true"]');
    if (editableDiv) {
        editableDiv.focus();

        // Insert text properly for ProseMirror
        const text = "^TEXT^";
        editableDiv.innerHTML = "<p>" + text + "</p>";

        // Trigger ProseMirror to detect the change
        editableDiv.dispatchEvent(new Event("input", { bubbles: true }));

        setTimeout(() => {
            const sendButton = document.querySelector('button.rounded-full svg.lucide-send');
            if (sendButton) {
                sendButton.closest("button").click();
            } else {
                console.error("Error: Send button not found");
            }
        }, 500);
    } else {
        console.error("Error: Editable div not found");
    }
})();

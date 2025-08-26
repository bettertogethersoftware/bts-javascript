(function () {
    const TARGET_URL = "genspark.ai";
    const currentUrlLowerCase = window.location.href.toLowerCase();

    if (!currentUrlLowerCase.includes(TARGET_URL)) {
        return;
    }

    const textarea = document.querySelector("textarea.search-input[name='query']");
    if (textarea) {
        textarea.focus();
        textarea.value = "^TEXT^";  // put your text here
        textarea.dispatchEvent(new Event("input", { bubbles: true }));

        setTimeout(() => {
            // On genspark.ai, the send button is inside .input-icon
            const sendButton = document.querySelector(".input-icon");
            if (sendButton) {
                sendButton.click();
            } else {
                console.error("Error: Send button not found");
            }
        }, 500);
    } else {
        console.error("Error: Textarea not found");
    }
})();

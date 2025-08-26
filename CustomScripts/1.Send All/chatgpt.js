(function () {
    /*** https://chatgpt.com ***/
    //Validated: 2025-02-19
    var targetUrl = "chatgpt";
    const currentUrlLowerCase = window.location.href.toLowerCase();
    //debug
    //alert("currentUrlLowerCase: " + currentUrlLowerCase + ", " + "targetUrl: " + targetUrl);
    if (!currentUrlLowerCase.includes(targetUrl))
        return;
    /***************/

    const textarea = document.querySelector("#prompt-textarea");
    if (textarea) {
        textarea.focus(); // Ensure the textarea has focus

        // Simulate Space
        textarea.textContent += "^TEXT^";
        textarea.dispatchEvent(new Event("input", { bubbles: true }));

        setTimeout(() => {
            const buttonSelectors = [
                '[data-testid="send-button"]',
                "button.mb-1.mr-1.flex",
                '[data-testid="fruitjuice-send-button"]',
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
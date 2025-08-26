(function () {
    /*** https://aistudio.google.com/prompts/new_chat ***/
    //Validated: 2025-02-19
    var targetUrl = "aistudio";
    const currentUrlLowerCase = window.location.href.toLowerCase();
    //debug
    //alert("currentUrlLowerCase: " + currentUrlLowerCase + ", " + "targetUrl: " + targetUrl);
    if (!currentUrlLowerCase.includes(targetUrl))
        return;
    /***************/

    // Target the inner textarea within the ms-autosize-textarea component
    const textarea = document.querySelector("ms-autosize-textarea textarea");

    if (textarea) {
        textarea.focus(); // Ensure the textarea has focus

        // Set the value and trigger input events.  .textContent won't work well with Angular.
        textarea.value += "^TEXT^";

        // Dispatch 'input' and 'change' events for Angular to properly detect changes
        textarea.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
        textarea.dispatchEvent(new Event('change', { bubbles: true, cancelable: true })); // Angular often listens for 'change'


        setTimeout(() => {
            // More specific selector, targeting the button by its classes and attributes
            const buttonSelectors = [
                "button.run-button[type='submit'][aria-label='Run']", // Highly specific, prefer this
                "button.run-button",                                   // Less specific, but still good
                "button[aria-label='Run']"                            // Based on aria-label, also reliable
            ];

            let buttonClicked = false;

            for (const selector of buttonSelectors) {
                const button = document.querySelector(selector);
                if (button) {
                    //check if the button is enabled before clicking it.
                    if (!button.hasAttribute('disabled')) {
                        button.click();
                        buttonClicked = true;
                        break; // Exit the loop after the first successful click
                    } else {
                        console.warn("Button found but is disabled:", button);
                    }
                }
            }

            if (!buttonClicked) {
                console.error("Error: Send button not found or all found buttons were disabled.");
            }
        }, 700);  // Delay to allow Angular to process the input event
    } else {
        console.error("Error: Textarea not found");
    }
})();
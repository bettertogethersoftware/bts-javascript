(function () {
    const TARGET_URL = "copilot";

    // Only run on Copilot pages
    if (!window.location.href.toLowerCase().includes(TARGET_URL)) {
        return;
    }

    function toggleDisplay(selector, displayValue) {
        const el = document.querySelector(selector);
        if (el) {
            el.style.display = displayValue;
        } else {
            console.error(`Element not found: ${selector}`);
        }
    }

    // Use the Copilot textarea as anchor
    const targetDiv = document.querySelector('#userInput');
    if (targetDiv) {
        const computedDisplay = window.getComputedStyle(targetDiv).display;
        const isVisible = computedDisplay !== 'none';
        const displayValue = isVisible ? 'none' : '';

        // Toggle main Copilot UI containers
        toggleDisplay('#userInput', displayValue);                 // textarea
        toggleDisplay('[data-testid="composer-input"]', displayValue); // wrapper
        toggleDisplay('.relative.max-h-full.w-expanded-composer', displayValue); // full input container
    } else {
        console.error("Target element not found: #userInput");
    }
})();

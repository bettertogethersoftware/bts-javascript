(function () {
    const TARGET_URL = "openai";

    // Check if the current URL includes the target string
    if (!window.location.href.toLowerCase().includes(TARGET_URL)) {
        return;
    }

    // Function to safely toggle the display of an element
    function toggleDisplay(elementSelector, displayValue) {
        const element = document.querySelector(elementSelector);
        if (element) {
            element.style.display = displayValue;
        } else {
            console.error(`Element not found: ${elementSelector}`);
        }
    }

    if (window.location.href.toLowerCase().includes("prompts")) {
        // Toggle the display of elements in the specified order
        const targetDiv = document.querySelector('.kIFo2');
        if (targetDiv) {
            const computedDisplay = window.getComputedStyle(targetDiv).display;
            const isVisible = computedDisplay !== 'none';
            const displayValue = isVisible ? 'none' : '';

            // Toggle elements in the required order
            toggleDisplay('.kIFo2', displayValue);
        } else {
            console.error("Target element not found:");
        }
    } else {
        const targetDiv = document.querySelector('.add-message-wrapper');
        if (targetDiv) {
            const computedDisplay = window.getComputedStyle(targetDiv).display;
            const isVisible = computedDisplay !== 'none';
            const displayValue = isVisible ? 'none' : '';
            toggleDisplay('.add-message-wrapper', displayValue);
        } else {
            console.error("Target element not found:");
        }
    }

})();
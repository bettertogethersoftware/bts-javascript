(function () {
    const TARGET_URL = "genspark";

    // Run only on genspark
    if (!window.location.href.toLowerCase().includes(TARGET_URL)) {
        return;
    }

    // Helper to toggle display
    function toggleDisplay(elementSelector, displayValue) {
        const elements = document.querySelectorAll(elementSelector);
        if (elements.length > 0) {
            elements.forEach(el => el.style.display = displayValue);
        } else {
            console.error(`Element not found: ${elementSelector}`);
        }
    }

    // Use a main wrapper to decide visibility
    const targetDiv = document.querySelector('.input-wrapper-wrapper');
    if (targetDiv) {
        const computedDisplay = window.getComputedStyle(targetDiv).display;
        const isVisible = computedDisplay !== 'none';
        const displayValue = isVisible ? 'none' : '';

        // Toggle the key Genspark UI elements
        toggleDisplay('.input-wrapper-wrapper', displayValue);
        toggleDisplay('.prompt-input-wrapper', displayValue);
        toggleDisplay('.models-wrapper', displayValue);
        toggleDisplay('.web-knowledge-toggle', displayValue);
    } else {
        console.error("Target element not found: .input-wrapper-wrapper");
    }
})();

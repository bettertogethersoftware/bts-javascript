(function () {
    const TARGET_URL = "aistudio";

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

    // Toggle the display of elements in the specified order
    const systemInstructions = document.querySelector('ms-system-instructions');
    if (systemInstructions) {
        const computedDisplay = window.getComputedStyle(systemInstructions).display;
        const isVisible = computedDisplay !== 'none';
        const displayValue = isVisible ? 'none' : '';

        // Toggle elements in the required order
        toggleDisplay('ms-system-instructions', displayValue);
        toggleDisplay('.header-container', displayValue);
        toggleDisplay('ms-run-settings', displayValue);
        toggleDisplay('navbar', displayValue);
        toggleDisplay('footer[_ngcontent-ng-c108319326]', displayValue);
    } else {
        console.error("Target element not found: ms-system-instructions");
    }
})();
(function () {
    const TARGET_URL = "gemini";

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
    const targetDiv = document.querySelector('input-container');
    if (targetDiv) {
        const computedDisplay = window.getComputedStyle(targetDiv).display;
        const isVisible = computedDisplay !== 'none';
        const displayValue = isVisible ? 'none' : '';

        // Toggle elements in the required order
        toggleDisplay('input-container', displayValue);
        toggleDisplay('div.icon-buttons-container', displayValue);
        toggleDisplay('input-container.ng-tns-c2448033297-1', displayValue);
        toggleDisplay('.boqOnegoogleliteOgbOneGoogleBar', displayValue);
        toggleDisplay('.side-nav-menu-button', displayValue);


    } else {
        console.error("Target element not found: input-container");
    }
})();
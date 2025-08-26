(function () {
    const TARGET_URL = "duckduckgo";

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
    const targetDiv = document.querySelector('div.ZJkVzU5Sj6kQzKPSRIbo.OSr3HfP5yh1yrVYBPxCE');
    if (targetDiv) {
        const computedDisplay = window.getComputedStyle(targetDiv).display;
        const isVisible = computedDisplay !== 'none';
        const displayValue = isVisible ? 'none' : '';

        // Toggle elements in the required order
        toggleDisplay('div.ZJkVzU5Sj6kQzKPSRIbo.OSr3HfP5yh1yrVYBPxCE', displayValue);
        toggleDisplay('.ZmusGegMkG9sO4AhKft1', displayValue);
    } else {
        console.error("Target element not found: div.ZJkVzU5Sj6kQzKPSRIbo.OSr3HfP5yh1yrVYBPxCE");
    }
})();
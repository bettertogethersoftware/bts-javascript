(function () {
    const TARGET_URL = "claude";

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

    // Toggle the display of the target container and related elements
    const targetDiv = document.querySelector('div.sticky.mx-auto.w-full.pt-6.z-\\[5\\]');
    if (targetDiv) {
        const computedDisplay = window.getComputedStyle(targetDiv).display;
        const isVisible = computedDisplay !== 'none';
        const displayValue = isVisible ? 'none' : '';

        // Toggle the target element and related elements
        toggleDisplay('div.sticky.mx-auto.w-full.pt-6.z-\\[5\\]', displayValue);
        toggleDisplay('div.sticky.top-0', displayValue);
        toggleDisplay('nav[data-testid="menu-sidebar"]', displayValue);
        toggleDisplay('.sticky.bottom-0.mx-auto', displayValue);
        
    } else {
        console.error("Target element not found: div.sticky.mx-auto.w-full.pt-6.z-\\[5\\]");
    }
})();
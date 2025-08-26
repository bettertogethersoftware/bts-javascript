(function () {
    const TARGET_URL = "anthropic";

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
    const targetDiv = document.querySelector('nav.z-sidebar');
    if (targetDiv) {
        const computedDisplay = window.getComputedStyle(targetDiv).display;
        const isVisible = computedDisplay !== 'none';
        const displayValue = isVisible ? 'none' : '';

        // Toggle elements in the required order
        toggleDisplay('nav.z-sidebar', displayValue);
        toggleDisplay('div.w-full.pl-9.md\\:pl-0', displayValue);
        //toggleDisplay('div.flex.w-full.pb-3', displayValue);

        
    } else {
        console.error("Target element not found");
    }
})();
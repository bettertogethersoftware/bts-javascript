(function () {
    const TARGET_URL = "grok";

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
    const targetDiv = document.querySelector('div.flex.flex-row.gap-2');
    if (targetDiv) {
        const computedDisplay = window.getComputedStyle(targetDiv).display;
        const isVisible = computedDisplay !== 'none';
        const displayValue = isVisible ? 'none' : '';

        // Toggle elements in the required order
        toggleDisplay('div.flex.flex-row.gap-2', displayValue);
        toggleDisplay('.h-16.top-0', displayValue);
		toggleDisplay('.query-bar', displayValue);
        toggleDisplay('form.w-full', displayValue);
        toggleDisplay('.relative.w-full', displayValue);
    } else {
        console.error("Target element not found: div.flex.flex-row.gap-2");
    }
})();
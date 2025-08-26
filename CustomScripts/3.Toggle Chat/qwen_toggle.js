(function () {
    const TARGET_URL = "qwen";

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
    const targetDiv = document.querySelector('div.sticky.top-0');
    if (targetDiv) {
        const computedDisplay = window.getComputedStyle(targetDiv).display;
        const isVisible = computedDisplay !== 'none';
        const displayValue = isVisible ? 'none' : '';
        toggleDisplay('#sidebar', displayValue);
        toggleDisplay('div.sticky.top-0', displayValue);
        toggleDisplay('div.absolute.-top-12.pointer-events-none.left-0.right-0.z-30.flex.justify-center', displayValue);
        toggleDisplay('div.pb-12', displayValue);
        toggleDisplay('div.MobileGenerateModeControl', displayValue);
        toggleDisplay('.bg-white.dark\\:bg-gray-900.flex.flex-col-reverse', displayValue);
        toggleDisplay('div.pb-\\[2rem\\]', displayValue);

    } else {
        console.error("Target element not found");
    }
})();
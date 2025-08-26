(function () {
    const TARGET_URL = "mistral";

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
    const targetDiv = document.querySelector('div.relative.right-0.bottom-0.left-0.z-30.flex.w-full.flex-col.items-center');
    if (targetDiv) {
        const computedDisplay = window.getComputedStyle(targetDiv).display;
        const isVisible = computedDisplay !== 'none';
        const displayValue = isVisible ? 'none' : '';

        // Toggle elements in the required order
        toggleDisplay('div.relative.right-0.bottom-0.left-0.z-30.flex.w-full.flex-col.items-center', displayValue);
        toggleDisplay('div.absolute.bottom-3.z-10.self-center', displayValue);
        toggleDisplay('div.left-0.right-0.top-0.z-20.flex.w-full.flex-row.items-center.justify-between.transition-shadow', displayValue);


        
    } else {
        console.error("Target element not found");
    }
})();
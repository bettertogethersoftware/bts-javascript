(function () {
    const TARGET_URL = "getmerlin";

    // Only run on getmerlin pages
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

    // Find the main prompt area container
    const targetDiv = document.querySelector('.pointer-events-auto.relative.w-full.rounded-2xl.border.bg-background.p-3.shadow');
    if (targetDiv) {
        const computedDisplay = window.getComputedStyle(targetDiv).display;
        const isVisible = computedDisplay !== 'none';
        const displayValue = isVisible ? 'none' : '';

        // Toggle the main chat UI container
        toggleDisplay('.pointer-events-auto.relative.w-full.rounded-2xl.border.bg-background.p-3.shadow', displayValue);
    } else {
        console.error("Target element not found: .pointer-events-auto.relative.w-full.rounded-2xl.border.bg-background.p-3.shadow");
    }
})();

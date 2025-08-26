(function () {
    const TARGET_URL = "deepseek";

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
    const targetDiv = document.querySelector('div._2be88ba');
    if (targetDiv) {
        const computedDisplay = window.getComputedStyle(targetDiv).display;
        const isVisible = computedDisplay !== 'none';
        const displayValue = isVisible ? 'none' : '';

        // Toggle elements in the required order
        toggleDisplay('div._2be88ba', displayValue);
        toggleDisplay('div._88681e8', displayValue);
        toggleDisplay('div._871cbca', displayValue);
        toggleDisplay('.dc04ec1d.a02af2e6', displayValue);
        
    } else {
        console.error("Target element not found: div.cbcaa82c");
    }
})();
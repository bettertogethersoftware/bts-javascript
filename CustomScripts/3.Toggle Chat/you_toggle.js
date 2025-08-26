(function () {
    const TARGET_URL = "you.com";

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
            console.log(`Element not found: ${elementSelector}`);
        }
    }

    // Function to toggle the specific div you want to hide/show
    function toggleTargetDiv() {
        const targetDiv = document.querySelector('div._152h7oi3._152h7oi4');
        
        if (targetDiv) {
            const computedDisplay = window.getComputedStyle(targetDiv).display;
            const isVisible = computedDisplay !== 'none';
            const displayValue = isVisible ? 'none' : 'block';
            
            // Toggle the main target div
            targetDiv.style.display = displayValue;
            
            // Toggle other related elements if they exist
            toggleDisplay('#sidebar', displayValue);
            toggleDisplay('div.sticky.top-0', displayValue);
            toggleDisplay('div.absolute.-top-12.pointer-events-none.left-0.right-0.z-30.flex.justify-center', displayValue);
            toggleDisplay('div.pb-12', displayValue);
            toggleDisplay('div.MobileGenerateModeControl', displayValue);
            toggleDisplay('.bg-white.dark\\:bg-gray-900.flex.flex-col-reverse', displayValue);
            toggleDisplay('div.pb-\\[2rem\\]', displayValue);
            
            console.log('Toggled display:', isVisible ? 'hidden' : 'visible');
        } else {
            console.log("Target element not found - trying alternative selectors");
            
            // Try alternative selectors if the main one doesn't work
            const alternativeSelectors = [
                'div[class*="_152h7oi3"]',
                '#ChatQueryBar',
                'form._1975xbj1',
                'div.bbyqz20'
            ];
            
            for (const selector of alternativeSelectors) {
                const altElement = document.querySelector(selector);
                if (altElement) {
                    const computedDisplay = window.getComputedStyle(altElement).display;
                    const isVisible = computedDisplay !== 'none';
                    altElement.style.display = isVisible ? 'none' : 'block';
                    console.log(`Toggled element with selector: ${selector}`);
                    break;
                }
            }
        }
    }

    // Run the function
    toggleTargetDiv();
})();
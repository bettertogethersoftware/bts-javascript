(function () {
    const TARGET_URL = "perplexity";

    if (!window.location.href.toLowerCase().includes(TARGET_URL)) return;

    // Function to toggle an element's display
    function toggleElement(selector, useClosestContainer = false) {
        const el = document.querySelector(selector);
        if (el) {
            if (useClosestContainer) {
                const container = el.closest('div.bg-raised.w-full');
                if (container) {
                    container.style.display = container.style.display === 'none' ? '' : 'none';
                }
            } else {
                el.style.display = el.style.display === 'none' ? '' : 'none';
            }
        } else {
            console.error(`Element not found: ${selector}`);
        }
    }

    // Wait for the element to exist (handles dynamic loading)
    function waitForElement(selector, callback) {
        const el = document.querySelector(selector);
        if (el) {
            callback(el);
        } else {
            setTimeout(() => waitForElement(selector, callback), 100);
        }
    }

    // Toggle the #ask-input container
    waitForElement('#ask-input', () => toggleElement('#ask-input', true));

    // Toggle the .sticky-tabs-ref element
    waitForElement('.sticky-tabs-ref', () => toggleElement('.sticky-tabs-ref'));

})();

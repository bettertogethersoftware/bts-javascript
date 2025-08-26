/*** all ***/
//Validated:
//normal:2025-02-19
var targetUrl = ".";
const currentUrlLowerCase = window.location.href.toLowerCase();
//debug
//alert("currentUrlLowerCase: " + currentUrlLowerCase + ", " + "targetUrl: " + targetUrl);
//if (!currentUrlLowerCase.includes(targetUrl))
//    return;
/***************/
// Set an interval to run every 5 seconds


const intervalId = setInterval(() => {
    // Remove the first div by its two class names
    const div1 = document.querySelector('div._4KjPzfFqnPyBgIgiXkX.WUu09DCcg0kLBfHD9jrH');
    if (div1) {
        div1.remove();
        console.log('Removed first div.');
    }

    // Remove the second div by its several class names
    const div2 = document.querySelector(
        'div._4KjPzfFqnPyBgIgiXkX.frvBxo3OzNO6g_x_mz5H.mboJcBcmq4BzeSkocC95.VjIk2TJT4stQgyeHQSMo.uYZBnLDnIyswhKWzZLSW._rGGQOLsfdi_VLt1WJu6'
    );
    if (div2) {
        div2.remove();
        console.log('Removed second div.');
    }

    // Remove the third div by its ID
    const div3 = document.getElementById('smac12489o0');
    if (div3) {
        div3.remove();
        console.log('Removed third div.');
    }

    // Remove the banner div with class "row banner-a"
    const bannerDiv = document.querySelector('div.row.banner-a');
    if (bannerDiv) {
        bannerDiv.remove();
        console.log('Removed banner div.');
    }

    // Check the computed overflow values for <html> and <body>
    const computedHtmlOverflow = window.getComputedStyle(document.documentElement).overflow;
    const computedBodyOverflow = window.getComputedStyle(document.body).overflow;
    console.log('Computed overflow:', computedHtmlOverflow, computedBodyOverflow);

    // Assume scrolling is disabled if overflow is "hidden"
    let updated = false;

    if (computedHtmlOverflow === 'hidden') {
        document.documentElement.style.setProperty('overflow', 'auto', 'important');
        updated = true;
        console.log('Updated html overflow from hidden to auto.');
    } else {
        console.log('HTML scrolling appears enabled.');
    }

    if (computedBodyOverflow === 'hidden') {
        document.body.style.setProperty('overflow', 'auto', 'important');
        updated = true;
        console.log('Updated body overflow from hidden to auto.');
    } else {
        console.log('Body scrolling appears enabled.');
    }

    // If either element was updated, inject a style element to enforce the overflow rules.
    if (updated) {
        const style = document.createElement('style');
        style.textContent = `
          html, body {
            overflow: auto !important;
          }
        `;
        document.head.appendChild(style);
        console.log('Injected style to enable scrollbars.');
    } else {
        console.log('No changes made; scrollbars are already enabled.');
    }

    // Remove potential event handlers that might block scrolling (if needed)
    window.onwheel = null;
    window.onmousewheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
    console.log('Cleared scrolling-related event handlers.');

}, 1);

// After 5 seconds, stop removal and conditionally re-enable scrolling if it appears disabled.
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Stopped removing elements.');


}, 5000);

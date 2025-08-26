var targetUrl = "Unused_target";
const currentUrlLowerCase = window.location.href.toLowerCase();
//debug
//alert("currentUrlLowerCase: " + currentUrlLowerCase + ", " + "targetUrl: " + targetUrl);
if (!currentUrlLowerCase.includes(targetUrl))
    return;
/***************/


window.chrome.webview.addEventListener('message', event => {
    // Handle the message from C#
    console.log('Received response from C#:', event.data);
});

////

window.chrome.webview.postMessage("Hello from JavaScript!");

// Or using the helper function (if you added the script)
callCSharp("Hello from the helper function!");

// For sending JSON data
callCSharp(JSON.stringify({
    action: "updateData",
    value: 42,
    text: "Some information"
}));
// // // chrome.runtime.onInstalled.addListener(function() {
// // //     chrome.windows.create({
// // //       url: chrome.runtime.getURL("popup.html"),
// // //       state: "fullscreen"
// // //     });
// // //   });


//   chrome.browserAction.onClicked.addListener(function() {
//     chrome.windows.create({
//       url: chrome.runtime.getURL("popup.html"),
//       state: "fullscreen"
//     });
//   });

//   chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     if (message.action === "openFullScreen") {
//       chrome.windows.create({
//         url: chrome.runtime.getURL("popup.html"),
//         state: "fullscreen"
//       });
//     }
//   });

//   chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     if (message.action === "showPopup" || message.action === "openFullScreen") {
//       chrome.windows.create({
//         url: chrome.runtime.getURL("popup.html"),
//         state: "fullscreen"
//       });
//     }
//   });
  
//   // Listen for messages from the content script
// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     // Check if the message is to create a full-screen window
//     if (message.action === "openFullScreen") {
//       // Create a full-screen window
//       chrome.windows.create({
//         url: chrome.runtime.getURL("popup.html"),
//         state: "fullscreen"
//       });
//     }
//   });




// Listen for messages from content scripts
// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     // Check if the message is to open a full-screen window
//     if (message.action === "openFullScreen") {
//       openFullScreenWindow();
//     }
//   });
  
//   // Function to open a full-screen window
//   function openFullScreenWindow() {
//     chrome.windows.create({
//       url: chrome.runtime.getURL("popup.html"),
//       state: "fullscreen"
//     });
//   }

// Listen for the extension button click event
chrome.action.onClicked.addListener(function() {
    openFullScreenWindow();
  });
  
  // Listen for messages from content scripts
  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // Check if the message is to open a full-screen window
    if (message.action === "openFullScreen" || message.action ==="showPopup") {
      openFullScreenWindow();
    }
  });
  
  // Function to open a full-screen window
  function openFullScreenWindow() {
    chrome.windows.create({
      url: chrome.runtime.getURL("popup.html"),
      state: "fullscreen"
    });
  }
  
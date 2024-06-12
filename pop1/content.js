// var currentDate = new Date().toDateString();
//     // var targetDate = new Date('Mon Jun 10 2024');
//     var targetDate = new Date('Thu Jun 06 2024');
    

//     if (currentDate > targetDate) {
        // content.js
// var fullscreen = false;

// document.addEventListener("fullscreenchange", function () {
//   fullscreen = !fullscreen;
// });

// // Automatically trigger a full-screen window after 10 seconds
// setInterval(function() {
//   if (!fullscreen) {
//     chrome.runtime.sendMessage({action: "showPopup"});
//   }
// }, 10000);
// setInterval(function() {
//     if (!fullscreen) {
//       chrome.runtime.sendMessage({action: "openFullScreen"});
//     }
//   }, 10000);

// // Trigger a full-screen window immediately when any key is pressed
// document.addEventListener('keydown', function() {
//   chrome.runtime.sendMessage({action: "openFullScreen"});
// });

// document.addEventListener('click', function() {
//     chrome.runtime.sendMessage({action: "showPopup"});
//   });
// }



var fullscreen = false;

// Listen for fullscreen change events and update the fullscreen variable accordingly
document.addEventListener("fullscreenchange", function () {
  fullscreen = document.fullscreenElement !== null;
});

// Automatically trigger actions after a certain interval
setInterval(function() {
  // Check if not in fullscreen mode
  if (!fullscreen) {
    // Send message to show popup
    chrome.runtime.sendMessage({ action: "showPopup" }, function(response) {
      if (chrome.runtime.lastError) {
        console.error("Error sending showPopup message:", chrome.runtime.lastError.message);
      }
    });

    // Send message to open fullscreen window
    chrome.runtime.sendMessage({ action: "openFullScreen" }, function(response) {
      if (chrome.runtime.lastError) {
        console.error("Error sending openFullScreen message:", chrome.runtime.lastError.message);
      }
    });
  }
}, 10000);

// Listen for keydown events to trigger actions
document.addEventListener('keydown', function(event) {
  // Check if not in fullscreen mode
  if (!fullscreen) {
    // Send message to open fullscreen window
    chrome.runtime.sendMessage({ action: "openFullScreen" }, function(response) {
      if (chrome.runtime.lastError) {
        console.error("Error sending openFullScreen message:", chrome.runtime.lastError.message);
      }
    });
  }
});

// Listen for click events to trigger actions
document.addEventListener('click', function(event) {
  // Check if not in fullscreen mode
  if (!fullscreen) {
    // Send message to show popup
    chrome.runtime.sendMessage({ action: "showPopup" }, function(response) {
      if (chrome.runtime.lastError) {
        console.error("Error sending showPopup message:", chrome.runtime.lastError.message);
      }
    });
  }
});

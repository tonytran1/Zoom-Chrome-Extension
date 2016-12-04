$(document).ready(function () {
  var scaleUpInterval;
  var scaleDownInterval;
  var scale = 1.00;

  $('#zoom-in').on('click', function() {
    scale += 0.005;
    sendToTab(scale);
  });

  $('#zoom-out').on('click', function() {
    scale -= 0.005;
    sendToTab(scale);
  });

  $('#zoom-in').on('mousedown', function() {
    scaleUpInterval = setInterval(function() {
      scale += 0.005;
      sendToTab(scale);
    }, 20);
  }).on('mouseup mouseleave', function() {
    clearInterval(scaleUpInterval);
  });

  $('#zoom-out').on('mousedown', function() {
    scaleDownInterval = setInterval(function() {
      scale -= 0.005;
      sendToTab(scale);
    }, 20);
  }).on('mouseup mouseleave', function() {
    clearInterval(scaleDownInterval);
  });

  $('#reset').on('click', function() {
    scale = 1.00;
    sendToTab(scale);
  });

  function sendToTab(scale) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { scale: scale });
    });
  }
});

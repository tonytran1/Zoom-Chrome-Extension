var scale = 1.0;

$('#zoom-in').on('click', function() {
  scale += 0.1;
  sendToTab(scale);
});

$('#zoom-out').on('click', function() {
  scale -= 0.1;
  sendToTab(scale);
});


function sendToTab(scale) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { scale: scale });
  });
}

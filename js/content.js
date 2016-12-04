(function() {
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.scale) {
      setScale(request.scale);
    }
    return true;
  });

  function setScale(scale) {
    document.body.style.webkitTransform =  'scale(' + scale +')';
    document.body.style.msTransform =   'scale(' + scale +')';
    document.body.style.transform = 'scale(' + scale +')';
  }
})();

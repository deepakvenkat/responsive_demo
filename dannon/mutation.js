var divLoadTime;
(function() {

  if ( !! window.MutationObserver) {
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length > 0)
          if (mutation.addedNodes[0].className === "cunlock_main_content") {
            divLoadTime = Date.now();
            console.log("Div load " + divLoadTime);
          }
      });
    });

    observer.observe(document, {
      childList: true,
      subtree: true,
      attributes: false,
      characterData: false
    });
  }
}());

window.onload = function() {
  var onloadTime = Date.now();
  console.log("window load " + onloadTime);
  console.log("difference between cu div load and window load " + (onloadTime - divLoadTime));
};
// this is the code which will be injected into a given page...

(function() {

  // well we can't interact with our CodeMirror instances from here...so lets inject our magic code directly into the DOM
  if (document.getElementById('magicscript') == null) {

    // make an XHR request from here back to itself...this prevents flags from flaying for unmatching protocols
    var xhr = new XMLHttpRequest();
    xhr.onload = function(e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {

          // Inject that bad boy!
          var m = document.createElement("script");
          m.id = 'magicscript';
          m.innerHTML = xhr.responseText;
          document.getElementsByTagName("head")[0].appendChild(m);

        }
      }
    }; // Implemented elsewhere.
    xhr.open("GET", chrome.extension.getURL('js/magic.js'), true);
    xhr.send();
  }

})();

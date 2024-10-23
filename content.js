chrome.runtime.onMessage.addListener((message) => {
    if (message.isTLS) {
      // TLSが使われている場合、URIの色を緑に
      document.body.style.backgroundColor = "lightgreen";
    } else {
      // TLSが使われていない場合、URIの色を赤に
      document.body.style.backgroundColor = "lightcoral";
    }
});
  
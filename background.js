chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
      const isTLS = tab.url.startsWith('https://');
      chrome.tabs.sendMessage(tabId, { isTLS });
    }
});

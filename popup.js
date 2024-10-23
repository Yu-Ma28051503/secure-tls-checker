chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    const isTLS = activeTab.url.startsWith('https://');
    
    document.getElementById('status').innerText = isTLS ? 'This page is using TLS.' : 'This page is not using TLS.';
});

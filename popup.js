let showTitlesButton = document.getElementById('title');
chrome.storage.sync.get({ "show-titles": true }, function (result) {
    showTitlesButton.checked = result['show-titles'];
});

showTitlesButton.onclick = function (element) {
    chrome.storage.sync.get({ "show-titles": true }, function (result) {
        chrome.storage.sync.set({ 'show-titles': !result['show-titles'] }, function () { });
    });
};

let darkModeButton = document.getElementById('darkMode');
chrome.storage.sync.get({ "dark-mode": true }, function (result) {
    darkModeButton.checked = result['dark-mode'];
});

darkModeButton.onclick = function (element) {
    chrome.storage.sync.get({ "dark-mode": true }, function (result) {
        chrome.storage.sync.set({ 'dark-mode': !result['dark-mode'] }, function () { });
    });
};

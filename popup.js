let showTitlesButton = document.getElementById('title');
chrome.storage.sync.get(['show-titles'], function (result) {
    showTitlesButton.innerText = (result['show-titles'] ? 'Disable' : 'Enable') + ' showing titles';
});

showTitlesButton.onclick = function (element) {
    chrome.storage.sync.get(['show-titles'], function (result) {
        chrome.storage.sync.set({ 'show-titles': !result['show-titles'] }, function () {
            showTitlesButton.innerText = (!result['show-titles'] ? 'Disable' : 'Enable') + ' showing titles';
        });
    });
};

let darkModeButton = document.getElementById('darkMode');
chrome.storage.sync.get(['dark-mode'], function (result) {
    darkModeButton.innerText = (result['dark-mode'] ? 'Disable' : 'Enable') + ' dark mode';
});

darkModeButton.onclick = function (element) {
    chrome.storage.sync.get(['dark-mode'], function (result) {
        chrome.storage.sync.set({ 'dark-mode': !result['dark-mode'] }, function () {
            darkModeButton.innerText = (!result['dark-mode'] ? 'Disable' : 'Enable') + ' dark mode';
        });
    });
};
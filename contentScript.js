var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {

        var games = document.getElementsByClassName("ems-sdk-product-tile-link");

        for (game of games) {
            // don't redundantly add titles
            if (game.childNodes.length > 2)
                continue;

            // title element
            var name = JSON.parse(game.dataset.telemetryMeta).name;
            var node = document.createElement("DIV");
            node.className = "price";
            node.style.marginTop = "5px";
            var t = document.createTextNode(name);
            node.appendChild(t);

            // insert before price
            game.insertBefore(node, game.childNodes[1]);
        }

    });
});

chrome.storage.sync.get({ "show-titles": true }, function (result) {
    console.log(result);
    var showTitles = result["show-titles"];
    console.log(showTitles);

    if (showTitles) {
        observer.observe(document, { attributes: true, subtree: true });
    }
});

chrome.storage.sync.get({ "dark-mode": true }, function (result) {
    console.log(result);
    var darkModeEnabled = result["dark-mode"];

    if (darkModeEnabled) {
        var link = document.createElement("link");
        link.href = chrome.extension.getURL("dark.css");
        link.type = "text/css";
        link.rel = "stylesheet";
        document.getElementsByTagName("head")[0].appendChild(link);
    }
});



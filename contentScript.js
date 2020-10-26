var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        var games = document.getElementsByClassName("ems-sdk-product-tile-link");

        for (game of games) {
            // don't add redundantly add title
            if (game.childNodes.length > 2)
                continue;
            var name = JSON.parse(game.dataset.telemetryMeta).name;
            var node = document.createElement("SPAN");
            var t = document.createTextNode(name);
            node.appendChild(t);
            // insert before price
            game.insertBefore(node, game.childNodes[1]);
        }

    });
});

observer.observe(document, { attributes: true, subtree: true });
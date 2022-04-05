//getURL that returns an array with all valid URLs present in a data-set, http and https
function getURL(data) {
    var url = [];
    var urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    var urlArray = data.match(urlRegex);
    for (var i = 0; i < urlArray.length; i++) {
        url.push(urlArray[i]);
    }
    return url;
}
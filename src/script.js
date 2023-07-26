function setup () {
    changeFavicon();
}

function changeFavicon () {
    const faviconLinks = document.querySelectorAll('link[rel*="icon"');
    newIconUrl = chrome.runtime.getURL('assets/twitter.ico');

    faviconLinks.forEach(linkTag => linkTag.href = newIconUrl);
}

setup();

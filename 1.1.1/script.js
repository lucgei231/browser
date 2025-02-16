document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-mode');
    const goButton = document.getElementById('go-button');
    const urlInput = document.getElementById('url-input');
    const iframe = document.getElementById('iframe-content');
    const body = document.body;
    const gradientButton = document.getElementById('toggle-gradient');

    toggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
    });

    gradientButton.addEventListener('click', function() {
        body.classList.toggle('gradient-mode');
    });

    goButton.addEventListener('click', function() {
        let url = urlInput.value;
        if (!url.startsWith('http')) {
            url = 'http://' + url;
        }
        iframe.src = url;

        fetchFavicon(url);
    });

    function fetchFavicon(url) {
        const link = document.createElement('link');
        link.rel = 'shortcut icon';
        link.type = 'image/x-icon';
        link.href = new URL('/favicon.ico', url).href;
        document.head.appendChild(link);
    }

    // Set default mode based on user's system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-mode');
    } else {
        body.classList.add('light-mode');
    }
});

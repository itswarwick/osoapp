self.addEventListener('install', event => {
    console.log('Service worker installing...');
    // Add a call to skipWaiting here if you want the new service worker to activate immediately.
    // self.skipWaiting();
});

self.addEventListener('activate', event => {
    console.log('Service worker activating...');
    // Perform any task you want to do during activation
});

self.addEventListener('fetch', event => {
    console.log('Fetching:', event.request.url);
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

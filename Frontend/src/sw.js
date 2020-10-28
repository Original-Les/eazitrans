// install service worker
self.addEventListener('install', evt => {
    evt.waitUntil(installServiceWorker);
    console.log('service worker has been installed');
});

async function installServiceWorker() {
    const cache = await caches.open('app-cache');

    cache.put(request, response)
}

// activate event 
self.addEventListener('activate', evt => {
    console.log('service worker has been activated');
});

// fetch event
self.addEventListener('fetch', evt => {
    console.log('fetch event', evt, );
})
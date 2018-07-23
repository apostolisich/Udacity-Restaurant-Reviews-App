let cacheName = 'v1';
let cacheFiles = [
    './',
    './index.html',
    './restaurant.html',
    './css/styles.css',
    './js/dbhelper.js',
    './js/main.js',
    './js/restaurant_info.js',
    './data/restaurants.json',
    './img/1.jpg,',
    './img/2.jpg,',
    './img/3.jpg,',
    './img/4.jpg,',
    './img/5.jpg,',
    './img/6.jpg,',
    './img/7.jpg,',
    './img/8.jpg,',
    './img/9.jpg,',
    './img/10.jpg,'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName)
        .then(function(cache) {
            cache.addAll(cacheFiles);
            console.log("Cache opened!");
        })
        .catch(function(error) {
            console.log("Caches didn't open: " + error)
        })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(cacheNames.map(function(thisCacheName) {
                if(thisCacheName !== cacheName) {
                    console.log("Removing cache files from: ", thisCaheName);
                    return caches.delete(thisCacheName);
                }
            }))
        })
    )
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response){
            if(response)
                return response;
            return fetch(event.request);
        })
    );
});
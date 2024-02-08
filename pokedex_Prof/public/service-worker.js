const PREACHE_NAME = 'app-shell'
const POKE_CACHE = 'poke-cache'
const POKE_SPRITE = 'poke-sprite'

const URL = 'http://127.0.0.1:3000'

const APP_SHELL_FILES = [
    '/',
    'https://cnd.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css',
    'favicon.ico',
    '/sprites/placeholder.png'
]


self.addEventListener('install', function(event) {
    console.log('SW: installed')

    event.waitUntil(
        caches.open(APP_SHELL_FILES).then(function(cache) {
            cache.addAll(APP_SHELL_FILES)
        })
    )
});

self.addEventListener('activate', function(event) {
    console.log('SW: activated')
})


// Cache only
function getFromCache(cache, request){
    return caches.open(cache).then(function(cache) {
        return cache.match(request).then(function(cachedResult) {
            if(cachedResult) {
                console.log('return from cache' + request.url)
                return cachedResult
            }else {
                console.log('couldn\'t find in cache' + request.url)
            }
            
        })
    })
}

function getFromCacheOrNetwork(cache, request, defaultResponse = null) {
    return caches.open(cacheName).then(function(cache) {
        return cache.match(request).then(function(cachedResult) {
            if(cachedResult) {
                console.log('return from cache' + request.url)
                return cachedResult
            }else {
                console.log('returned from network' + request.url)
                return fetch(request).then(function(networkResult) {
                    cache.put(request, networkResult.clone())
                    return networkResult
                }).catch(function(error) {
                    console.log("Error fetching" + request.url, error)
                    if(onError){
                     return onError();
                    }
                });
            }
            
        })
    })
}

function getPlaceholder(){
    return caches.open(APP_SHELL_FILES).then(function(cache) {
        return cache.match('/icons/placeholder.png')
    })
}

self.addEventListener('fetch', function(event) {
 // Request.url = http://127.0.0.1:3000/blaalba.file
 //File dans le cache = /blaalba.file
 //donc on utilise un replace

 // Si on cherche un fichier du pre-cache => cache only
    if(APP_SHELL_FILES.includes(event.request.url.replace(URL, ''))) {
    event.respondWith(getFromCache(APP_SHELL_FILES, event.request))
 }
 else if(event.request.url.includes('https://pokeapi.co/api')) {
    event.respondWith(getFromCacheOrNetwork(POKE_CACHE, event.request))
 }
 else if(event.request.url.includes('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon')) {
    event.respondWith(getFromCacheOrNetwork(POKE_SPRITE, event.request, getPlaceholder))
 }
 else {
// Sinon je fais une requete classique    
    event.respondWith(fetch(event.request))
 }
})




self.addEventListener
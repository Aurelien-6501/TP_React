const PREACHE_NAME = 'app-shell'
const POKE_CACHE = 'poke-cache'

self.addEventListener('install', function(event) {
    console.log('SW: installed')

    caches.open(PREACHE_NAME).then(function(cache) {
        cache.addAll([
            '/',
            'https://cnd.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css',
            'favicon.ico'
            
            
        ]).then(function() {

        })
    })
});

self.addEventListener('activate', function(event) {
    console.log('SW: activated')
})

self.addEventListener('fetch', function(event) {
    console.log('SW: fetch')
    event.preventDefault()
    event.responseWith(
        caches.match(event.request.url).then(
            function(response) {
            if(response) {
                return response
            }else {
                return fetch(event.request).then(
                    function(fetchResponse){
                        if(event.request.url.starsWith('https://pokeapi.co/api/v2/')) {
                            caches.open(POKE_CACHE).then(function(cache) {
                                cache.put(event.request.url, fetchResponse.clone())
                            })
                        }
                    }
                )
            }
        })   
    )

})
let cacheName = 'daojunportfolio';
let filesToCache = [
  'images/1.jpg',
  'images/2.jpg',
  'images/3.jpg',
  'images/4.jpg',
  'images/5.jpg',
  'images/6.jpg',
  'images/7.jpg',
  'images/8.jpg',
  'images/9.jpg',
  'images/fb.jpg',
  'images/gmail.jpg',
  'images/insta.jpg',
  'images/intro.jpg',
  'images/android-android-phone-cell-phone-cellphone-404280.jpg',
  'images/background-black-black-and-white-creepy-619419.jpg',
  'images/light-creative-camera-metal-2004159.jpg',
  'images/light-sea-dawn-landscape-33545.jpg',
  'images/macbook-pro-beside-black-pen-and-coffee-3803254.jpg',
  'about.html',
  'contact.html',
  'projects.html',
  'style.css',
  'script.js'
  'manifest.json'
]

/* 
start the service worker, when the user access
the website online. This will add the all the files 
listed in filesToCache to the browser cache.

*/
self.addEventListener('install', function(e){
  console.log("on install")
    console.log(cacheName);
  e.waitUntil(
    caches.open(cacheName).then(function(cache){
      console.log("Adding files to cache")
      return cache.addAll(filesToCache)
    })
  )
})

/*
If offline or if the file exists in the cache, then it will fetch the files from cache
*/
self.addEventListener('fetch', function(e){
  e.respondWith(
    caches.match(e.request).then(function(response){
        console.log("Fetching "+e.request.url);
      return response || fetch (e.request)
    })
  )
})

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});
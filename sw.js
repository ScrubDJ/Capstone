let cacheName = 'daojunportfolio';
let filesToCache = [
  '/',
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  'fb.jpg',
  'gmail.jpg',
  'insta.jpg',
  'intro.jpg',
  'android-android-phone-cell-phone-cellphone-404280.jpg',
  'background-black-black-and-white-creepy-619419.jpg',
  'light-creative-camera-metal-2004159.jpg',
  'light-sea-dawn-landscape-33545.jpg',
  'macbook-pro-beside-black-pen-and-coffee-3803254.jpg',
  'about.html',
  'contact.html',
  'projects.html',
  'style.css',
  'script.js'
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
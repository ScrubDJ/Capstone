let cacheName = 'daojun-portfolio';
let filesToCache = [
  '/',
  '/Images/1.jpg',
  '/Images/2.jpg',
  '/Images/3.jpg',
  '/Images/4.jpg',
  '/Images/4.jpg',
  '/Images/5.jpg',
  '/Images/6.jpg',
  '/Images/7.jpg',
  '/Images/8.jpg',
  "/Images/android-android-phone-cell-phone-cellphone-404280.jpg",
  "/Images/background-black-black-and-white-creepy-619419.jpg",
  "/Images/intro.jpg",
  "/Images/light-creative-camera-metal-2004159.jpg",
  "/Images/light-sea-dawn-landscape-33545.jpg",
  "/Images/macbook-pro-beside-black-pen-and-coffee-3803254.jpg",
  "/Images/fb.jpg",
  "/Images/insta.jpg",
  "/Images/gmail.jpg",
  '/about.html',
  '/contact.html',
  '/projects.html',
  '/index.html',
  '/package-lock.json',
  '/style.css',
  '/script.js',
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
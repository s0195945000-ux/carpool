const CACHE = 'dangbibi-v1';
const ASSETS = [
  '/carpool/',
  '/carpool/index.html',
  '/carpool/bgm.mp3',
  '/carpool/icon.png',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS).catch(()=>{}))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});

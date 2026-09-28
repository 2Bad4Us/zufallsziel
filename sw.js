// Minimaler Service Worker: cached die App-Seite, alles andere geht ans Netz
const C = 'zufallsziel-v1';
self.addEventListener('install', e => e.waitUntil(caches.open(C).then(c => c.addAll(['./', 'manifest.json', 'icon-512.png']))));
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate')
    e.respondWith(fetch(e.request).catch(() => caches.match('./')));
});

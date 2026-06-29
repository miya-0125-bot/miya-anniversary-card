// v0.28 測試期：不快取，避免手機吃舊檔。
self.addEventListener("install", event => self.skipWaiting());
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", event => event.respondWith(fetch(event.request)));

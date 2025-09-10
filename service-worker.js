self.addEventListener("install", event => {
  self.skipWaiting(); // sofort aktivieren
});

self.addEventListener("activate", event => {
  clients.claim(); // sofort für alle Tabs übernehmen
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});

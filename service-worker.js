self.addEventListener('fetch', function(event) {
    if (event.request.url.includes("brave_shields")) {
        console.log("[+]");
        event.respondWith(new Response(JSON.stringify({ shieldsEnabled: false })));
    }
});

self.addEventListener('activate', function(event) {
    event.waitUntil(clients.claim());
    console.log("[+] sw");
});

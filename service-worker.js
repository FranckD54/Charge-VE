self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("charge-ve").then(c => c.addAll(["./"]))
  );
});

const DB_NAME = 'MediaPortalDB';
const DB_VERSION = 1;
const STORES = { downloads: 'downloads', images: 'images', offlineQueue: 'offlineQueue', preferences: 'preferences' };

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORES.downloads)) {
        const d = db.createObjectStore(STORES.downloads, { keyPath: 'id', autoIncrement: true });
        d.createIndex('fileName', 'fileName', { unique: false });
        d.createIndex('timestamp', 'timestamp', { unique: false });
      }
      if (!db.objectStoreNames.contains(STORES.images)) {
        const i = db.createObjectStore(STORES.images, { keyPath: 'url' });
        i.createIndex('timestamp', 'timestamp', { unique: false });
      }
      if (!db.objectStoreNames.contains(STORES.offlineQueue)) {
        const q = db.createObjectStore(STORES.offlineQueue, { keyPath: 'id', autoIncrement: true });
        q.createIndex('timestamp', 'timestamp', { unique: false });
        q.createIndex('type', 'type', { unique: false });
      }
      if (!db.objectStoreNames.contains(STORES.preferences)) {
        db.createObjectStore(STORES.preferences, { keyPath: 'key' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getAll(storeName) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readonly');
    const request = tx.objectStore(storeName).getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function get(storeName, key) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const request = db.transaction(storeName, 'readonly').objectStore(storeName).get(key);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function put(storeName, data) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const request = db.transaction(storeName, 'readwrite').objectStore(storeName).put(data);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function remove(storeName, key) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const request = db.transaction(storeName, 'readwrite').objectStore(storeName).delete(key);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

async function clear(storeName) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const request = db.transaction(storeName, 'readwrite').objectStore(storeName).clear();
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

export async function saveDownload(download) { return put(STORES.downloads, { ...download, timestamp: Date.now() }); }
export async function getDownloads() { return getAll(STORES.downloads); }
export async function getDownload(id) { return get(STORES.downloads, id); }
export async function removeDownload(id) { return remove(STORES.downloads, id); }
export async function cacheImage(url, blob) { return put(STORES.images, { url, blob, timestamp: Date.now() }); }
export async function getCachedImage(url) { return get(STORES.images, url); }
export async function clearOldImages(maxAgeMs = 30 * 24 * 60 * 60 * 1000) {
  const all = await getAll(STORES.images);
  const cutoff = Date.now() - maxAgeMs;
  for (const img of all) { if (img.timestamp < cutoff) await remove(STORES.images, img.url); }
}
export async function queueRequest(request) { return put(STORES.offlineQueue, { ...request, timestamp: Date.now(), retries: 0 }); }
export async function getQueuedRequests() { return getAll(STORES.offlineQueue); }
export async function removeQueuedRequest(id) { return remove(STORES.offlineQueue, id); }
export async function clearQueue() { return clear(STORES.offlineQueue); }
export async function setPreference(key, value) { return put(STORES.preferences, { key, value, timestamp: Date.now() }); }
export async function getPreference(key) { const r = await get(STORES.preferences, key); return r?.value; }
export async function getAllPreferences() { const all = await getAll(STORES.preferences); const p = {}; for (const i of all) p[i.key] = i.value; return p; }
export { STORES, openDB };

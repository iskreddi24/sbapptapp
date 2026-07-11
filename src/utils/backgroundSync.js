import { queueRequest, getQueuedRequests, removeQueuedRequest } from '../db/indexedDB';
import api from '../services/api';

let isSyncing = false;

export async function addToSyncQueue(config) {
  await queueRequest({ type: config.method?.toUpperCase() || 'GET', url: config.url, data: config.data, headers: config.headers });
}

export async function processSyncQueue() {
  if (isSyncing || !navigator.onLine) return;
  isSyncing = true;
  try {
    const requests = await getQueuedRequests();
    for (const req of requests) {
      try { await api({ method: req.type, url: req.url, data: req.data, headers: req.headers }); await removeQueuedRequest(req.id); }
      catch (error) { if (req.retries >= 3) { await removeQueuedRequest(req.id); console.warn('Dropping queued request after 3 retries:', req.url); } }
    }
  } catch (error) { console.error('Sync queue processing error:', error); }
  finally { isSyncing = false; }
}

if (typeof window !== 'undefined') { window.addEventListener('online', () => setTimeout(processSyncQueue, 2000)); }

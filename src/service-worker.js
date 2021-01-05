/* eslint-disable */
import {precacheAndRoute} from 'workbox-precaching';
// Your other import statements go here.

precacheAndRoute(self.__WB_MANIFEST);
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})
self.addEventListener('message', (e) => {
  if (e.data.action === 'skipWaiting') self.skipWaiting()
})

/* eslint-disable no-console */

import { register } from 'register-service-worker'

console.log('ENVIRONMENT:',process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
  register(`service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.'
      )
    },
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    // this.caches.keys().then(keys => { keys.forEach(key => caches.delete(key)) })
    },
    updated (registration) {
      console.log('New content is available; please refresh.')
      document.dispatchEvent(
        new CustomEvent('swUpdated', { detail: registration })
      );
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}

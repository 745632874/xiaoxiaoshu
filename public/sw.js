// Service Worker for 率土百科 PWA
const CACHE_NAME = 'stzb-wiki-v1';
const urlsToCache = [
  '/',
  '/mini',
  '/heroes',
  '/formations',
  '/kaihuang',
  '/skills',
  '/guides',
  '/simulator',
  '/gacha',
  '/ocr',
  '/tools',
  '/community',
  '/feedback'
];

// 安装事件
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// 激活事件
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 请求拦截
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 返回缓存或网络请求
        if (response) {
          return response;
        }
        
        return fetch(event.request).then(response => {
          // 不缓存非成功响应
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          
          return response;
        }).catch(() => {
          // 离线时返回缓存的首页
          return caches.match('/mini');
        });
      })
  );
});

// 推送通知（可选）
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : '率土百科有新更新！',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    vibrate: [100, 50, 100],
    data: {
      url: '/'
    }
  };
  
  event.waitUntil(
    self.registration.showNotification('率土百科', options)
  );
});

// 通知点击
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow(event.notification.data.url || '/')
  );
});

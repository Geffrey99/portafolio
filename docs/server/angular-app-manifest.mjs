
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/mi-portafolio"
  }
],
  assets: new Map([
['index.csr.html', {size: 694, hash: '58092844d5bc4cd5c995453452c77f63cc2c5cd260bda63deba4a0bfde160299', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1034, hash: 'a1b5ff0e625bcb5e45f53a4dc29f28e10782878fd757a199243feda9a33aaae7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 8655, hash: 'aacbdcf26bd9b1b4587a5f5f6d6f4611839c503d99d87a98c149f1fad8263eac', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-QVEMZVUY.css', {size: 280, hash: 'bhGb5Xxk96k', text: () => import('./assets-chunks/styles-QVEMZVUY_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};

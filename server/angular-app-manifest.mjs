
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: new Map([
['index.csr.html', {size: 680, hash: '689dab44b67e943b49fc7e45a5d93a97309d7d7055a843aed5b05dda23aeb805', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1020, hash: '83f30ee6a6eb9f12a9ee13967ee6ac64244c3d71eeee4409017bd9b63cecf5c3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 7530, hash: 'f6af2b39d7867e5d0dfb20bb5a2427b09c5a393e041c63b0929e495e7529f5ce', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-QVEMZVUY.css', {size: 280, hash: 'bhGb5Xxk96k', text: () => import('./assets-chunks/styles-QVEMZVUY_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};


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
['index.csr.html', {size: 693, hash: '24248185bd11469c94371663934dbef56fe5052ebcdd02acacbb7c99c2138d00', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1033, hash: 'bb85897ec66e7f88dc5fee91c9821c20e4b70402e5858ca47715b6bf83042992', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['o/index.html', {size: 8654, hash: 'ea94e725892fe7c09c3e65377e5248bc840bf082eb195e1fef2a6b1db284a2ed', text: () => import('./assets-chunks/o_index_html.mjs').then(m => m.default)}], 
['styles-QVEMZVUY.css', {size: 280, hash: 'bhGb5Xxk96k', text: () => import('./assets-chunks/styles-QVEMZVUY_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};

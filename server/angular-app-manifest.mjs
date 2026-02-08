
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/curriculo"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 717, hash: 'e49a0ff252421f9f85a8b2b8cf1111c66de38de8e8ad462f9684967de46a7930', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 954, hash: '03c28b8e01f50dd2d7db74a0314e8859308a35d4a385ad42abd4a55b20e4ad0c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'curriculo/index.html': {size: 6143, hash: '868ea0b9cea4a93d97b6aae415201da66a9b08f580857637ec55d90fa8b0b268', text: () => import('./assets-chunks/curriculo_index_html.mjs').then(m => m.default)},
    'index.html': {size: 10178, hash: '41579de3116bfe161ebfef766b3a5d6da0bcf25d81cdc842a3840120e3160046', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 8332, hash: '349f16aedc09d6414e0d8871baddcd9c0cf57332c5878ba9c243a1188d8b8607', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-3NQ6ULQC.css': {size: 269, hash: 'G3/4GbXM/aM', text: () => import('./assets-chunks/styles-3NQ6ULQC_css.mjs').then(m => m.default)}
  },
};

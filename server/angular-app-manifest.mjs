
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/curriculo"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 717, hash: '985a30d1adca990d19a43ac4796110d370fdcc184c5eddff7573fd06b7eb6ece', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 954, hash: 'aefdbbeb2e1876fface09fe2ec3d6f1b1522d4ba7b8635a5417f81fa251ed8d3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'curriculo/index.html': {size: 6143, hash: 'ca9d564bafca5e1ec800a231f128574d4006373441dea5ce89301f2a34eff920', text: () => import('./assets-chunks/curriculo_index_html.mjs').then(m => m.default)},
    'index.html': {size: 10178, hash: '8b43584d5ec74675dabe30f8f00f6fcfdf2868e7f40e05fa4d2f830c91f1df1f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 8332, hash: '5a5a5ede4b4680ec27b975ac5c36016631b71053afb98151e2785d02a5ebcd1a', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-3NQ6ULQC.css': {size: 269, hash: 'G3/4GbXM/aM', text: () => import('./assets-chunks/styles-3NQ6ULQC_css.mjs').then(m => m.default)}
  },
};

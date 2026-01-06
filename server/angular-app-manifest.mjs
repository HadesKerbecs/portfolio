
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
    'index.csr.html': {size: 717, hash: '2c27f89df69cc9e06e90b1afdf8cd5290102932511a8e6ed09430268e1ac2df5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 954, hash: 'd107acd7572668475f9dab2a6b116dfb05a31841b3fd48da4041465399ed29e1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 10178, hash: '1a19b1dbf36fdcfe7f3e1bf62d9b6a66a78c48e9f993098aea6f443bfe5bd994', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'curriculo/index.html': {size: 6143, hash: '4a87220846ce8ea2311c073d7d406d2f3bac35a6ce8870a1b9485a46c8867958', text: () => import('./assets-chunks/curriculo_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 8144, hash: 'd2169c46d9c6aa48177d62ef0251fd009ca4b60a8186bcb3cdf869d5adc52020', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-3NQ6ULQC.css': {size: 269, hash: 'G3/4GbXM/aM', text: () => import('./assets-chunks/styles-3NQ6ULQC_css.mjs').then(m => m.default)}
  },
};

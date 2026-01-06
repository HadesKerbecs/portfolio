
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
    'index.csr.html': {size: 717, hash: '69bd361d2c3ce50ed1d2edc609b6df34b4ca720d050c925ced4eedb77e13990e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 954, hash: 'ab683a6e559070acad46ac1b390214af0525cc1e85743121b3ac7e5b9ef172f9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 7362, hash: '4a7dd4483e6ec11ef748bb450730283a35b77b44de16d77d6fcae531caf99850', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'curriculo/index.html': {size: 5609, hash: 'a730405ad8f07481829b56147da5f28db1a2cadbe29cdd3d02007d76feea211e', text: () => import('./assets-chunks/curriculo_index_html.mjs').then(m => m.default)},
    'index.html': {size: 9322, hash: 'f841fcada6ccd61878616ace1a2b0b67ac6520c6e43185c26aa8cf97d95f5e2d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-3NQ6ULQC.css': {size: 269, hash: 'G3/4GbXM/aM', text: () => import('./assets-chunks/styles-3NQ6ULQC_css.mjs').then(m => m.default)}
  },
};

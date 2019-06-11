import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'ie11-css-custom-props',
  globalStyle: 'src/global/global.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        {
          src: 'global/global.css',
          dest: 'global.css'
        }
      ]
    }
  ]
};

After cloning, execute `npm install`

Use `vite` to start dev server that will reload after file changes
Use `vite build` to create production build. You can look at it later with `vite preview`

Go to `cd fake-wordpress-page` and run `npx  http-server` to see your chart embedded on semi-real external page.

Every time you change scripts, you need to run `vite build` and copy from `/dist/assets/index-<hash>.js` to `fake-wordpress-page/scatterplot.js`
### List all installed global packages
`npm list -g --depth 0`
### npm globally installation
`npm install --global package-name` or `npm i package-name `
### npm devDependency installation
`npm install --save-dev package-name`
### Live Server
`live-server public` public folder contains index.html
### Babel setup
- `npm install --save-dev @babel/core @babel/cli`
- `npm install --save-dev @babel/preset-env` for @babel/preset-env
- `npm install --save-dev @babel/preset-react` for @babel/preset-react
- .babelrc file `{"presets": ["@babel/preset-env","@babel/preset-react"]}`
### Run code from terminal with babel
- `npx babel src/app.js --out-file=public/scripts/app.js`
- or `npx babel src/app.js -o public/scripts/app.js`
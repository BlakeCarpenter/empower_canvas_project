find . -maxdepth 2 -name package.json -execdir npm i \;
(cd server; npm run build; node dist/scripts/init.js)
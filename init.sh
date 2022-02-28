find . -maxdepth 2 -name package.json -execdir npm i \;
(cd server; node dist/scripts/init.js)
bash run.sh
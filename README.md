# node uglify template

## how to use

install dependency
```
npm install
```
build src to dist folder with babel
```
npm run build
```
build public folder with uglify
```
npm run uglify
```
you can add deployment script and upload public folder to web hosting

example
```
aws s3 cp ./public s3://yourbucket/ --recursive
```
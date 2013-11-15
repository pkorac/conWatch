# conWatch

This is a simple nodejs tool that can concatenate, uglify and watch files.

## Usage
```./conWatch fileOne.js fileTwo.js fileThree.js -u -o combined.js```

## Reference
```./conWatch [files] -u -o outputfile.js```
* [files] - which files to watch
* -u - uglify (compression) flag
* -o outputfile - which file to output to


## Requrements
- Install [Node](http://nodejs.org/#download)
- Install [uglify-js](https://npmjs.org/package/uglify-js)

```npm install -g uglify-js```

## Installation
### Using git
1. Clone this repository
```git clone git@github.com:pkorac/conWatch```
2. Run the command
```./conWatch fileOne.js fileTwo.js fileThree.js -u -o combined.js```

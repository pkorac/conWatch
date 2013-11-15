
# conWatch

This is a simple nodejs tool that can concatenate, uglify and watch files.

## Usage
```./conWatch fileOne.js fileTwo.js fileThree.js -u -o combined.js```

[files] - which files to watch

-u - uglify (compression) flag

-o outputfile - which file to output to



## Requrements
- [Node](http://nodejs.org/#download)
- [uglify-js](https://npmjs.org/package/uglify-js)
```npm install -g uglify-js```

## Installation
### Using git
1. Clone this repository
```git clone git@github.com:pkorac/conWatch```
2. Run the command
```./conWatch fileOne.js fileTwo.js fileThree.js -u -o combined.js```

### Using npm
1. Install the module
```npm install conWatch```
2. Run the command
```./conWatch fileOne.js fileTwo.js fileThree.js -u -o combined.js```

#!/usr/bin/env node

var fs = require('fs'),
	exec = require('child_process').exec;

var filesToWatch = [];
var uglify = false;
var outputFile = "combined.js";


var compile = function(){

	var catString = 'cat ' + filesToWatch.join(' ') + ' > ' + outputFile;
	exec( catString, function(){
		console.log( "Concatenated files into ", outputFile );

		if( uglify ){

			var uglifyString = 'uglify ' + outputFile;
			exec( uglifyString, function(){
				console.log( "Compressed " + outputFile );
			} );
		}

	} );	

};

if ( process.argv.length > 2 ){

	for ( var i = 2; i < process.argv.length; i++ ){

		// uglify flag
		if ( process.argv[i] === "-u" )	 {
			uglify = true;

		// oputput file
		} else if ( process.argv[i] === "-o" && process.argv[i+1] ){
			outputFile = process.argv[i+1];
			break;

		// file to watch
		} else {

			filesToWatch.push( process.argv[i] );

			fs.watchFile( process.argv[i], { interval: 2000 } , compile );
		}
	}
	compile();
}

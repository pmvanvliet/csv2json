/*
Microsoft DEV283x (edX) module 1 assignment.
(c)2018
Author: pmvanvliet
*/
// Node.js modules
const fs = require('fs')
const path = require('path')
// Special module
const csv = require('csvtojson')
// Join input and output filesnames to OS independent paths
const csvFile = path.join(__dirname, 'customer-data.csv')
const jsonOutputFile = path.join(__dirname, 'customer-data.json')

csv()
	.fromFile(csvFile)
	.on('end_parsed', (jsonObj) => {
		// We reached the end of the CSV file, write now the object as a string to file
		writeFile(JSON.stringify(jsonObj, null, 2)) // Indent 2
	})
	.on('error', (err) => {
		console.log('Error received while parsing CSV: %s', err)
		process.exit(1)
	})
//
function writeFile(data) {
	fs.writeFile(jsonOutputFile, data, function(err) {
	  if (err) {
		console.log('Error received while writing outputfile: %s', err)
		return process.exit(1)
	  }
	})
}
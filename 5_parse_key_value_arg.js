#!/usr/local/bin/node 
const yargs = require('yargs');

const args = yargs.argv;

console.log('Name: ' + args.name);
console.log('Age: ' + args.age);

// Pass argument --name=tan --age=45

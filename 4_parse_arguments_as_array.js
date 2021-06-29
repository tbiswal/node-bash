#!/usr/local/bin/node 
const yargs = require('yargs');

const argv = yargs.array('time').argv;


if (argv.time) {
    console.log('The current time is: ', new Date().toLocaleTimeString());

    if (argv.time.includes('year')) {
        console.log('The current year is: ', new Date().getFullYear());
    }
    if (argv.time.includes('month')) {
        console.log('The current month is: ', new Date().getMonth() + 1);
    }
    if (argv.time.includes('day')) {
        console.log('The current day is: ', new Date().getDate());
    }
}


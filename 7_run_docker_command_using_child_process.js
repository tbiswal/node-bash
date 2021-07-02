#!/usr/local/bin/node 
const { exec } = require('child_process');
  
// Print docker version
exec('docker -v', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: No. of directories = ${stdout}`);
  if (stderr!= "")
  console.error(`stderr: ${stderr}`);
});

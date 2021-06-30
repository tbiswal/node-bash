#!/usr/local/bin/node 
var dockerCLI = require('docker-cli-js');
var DockerOptions = dockerCLI.Options;
var Docker = dockerCLI.Docker;

var docker = new Docker();

docker.command('version', function (err, data) {
  console.log('data = ', data);
});

docker.command('ps').then(function (data) {
  console.log('data = ', data);
});

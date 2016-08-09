var Docker = require('dockerode');

var docker = new Docker({socketPath: '/var/run/docker.sock'});

//docker.info(function(data) {
//    console.log(data);
//});

//var image = docker.getImage('ubuntu');

//console.log(image);
//console.log(docker);

var opts = {};
var listImages = docker.listImages(function(err, data) {
    console.log(err);
    console.log(data);
});
//console.log(listImages);
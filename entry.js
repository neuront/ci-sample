var Mocha = require('mocha');
var mocha = new Mocha();
mocha.addFile('./test.js');
mocha.run(function(failures){
    process.on('exit', function () {
        process.exit(failures);
    });
});

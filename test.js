var page = require('webpage').create();
page.open('http://localhost:8080/', function (status) {
    phantom.exit();
});

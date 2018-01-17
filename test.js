var page = require('webpage').create();

describe('Page load', function() {
    it('loaded', function() {
        page.open('http://localhost:8080/', function (status) {
            assert.eq(status, 'CI');
            phantom.exit();
        });
    });
});

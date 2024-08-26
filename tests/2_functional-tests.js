const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    test('Convert Valid Input', function(done) {
        chai
            .request(server)
            .keepOpen()
            .get('/api/convert/?input=10L')
            .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.equal(res.body.returnUnit, 'gal');
                assert.equal(res.body.returnNum, 2.64172);
                done();
            })
    });
    test('Convert Invalid Unit Input', function(done) {
        chai
            .request(server)
            .keepOpen()
            .get('/api/convert/?input=32g')
            .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.equal(res.body, "invalid unit");
                done();
            })
    });
    test('Convert Invalid Number Input', function(done) {
        chai
            .request(server)
            .keepOpen()
            .get('/api/convert/?input=3/7.2/4kg')
            .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.equal(res.body, "invalid number");
                done();
            })
    });
    test('Convert Invalid Number and Invalid Unit Input', function(done) {
        chai
            .request(server)
            .keepOpen()
            .get('/api/convert/?input=3/7.2/4kilomegagram')
            .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.equal(res.body, "invalid number and unit");
                done();
            })
    });
    test('Convert Input With No Number', function(done) {
        chai
            .request(server)
            .keepOpen()
            .get('/api/convert/?input=kg')
            .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.equal(res.body.returnUnit, 'lbs');
                assert.equal(res.body.returnNum, 2.20462);
                done();
            })
    });
});

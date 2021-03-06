/**
 * These are mocha tests that ensure input functionality is correct using
 * Survey. It should be run along with inputTests.html and
 * links.js. Following the links and the instructions in the links should each
 * cause a new test to pass. All the links should result in all the tests 
 * passing.
 *
 * The csv Tea_houses_editable.csv should be imported with the tableId
 * Tea_houses_editable.
 */
/* global describe, it, chai, data */
'use strict';

describe('Survey Methods', function() {
    
    var assert = chai.assert;

    it('#add default: State contains epsilon', function() {
        var column = data.getColumnData('State');
        assert.include(column, 'epsilon', 'not present: ' + column);
    });

    it('#add custom: State contains zeta', function() {
        var column = data.getColumnData('State');
        assert.include(column, 'zeta', 'not present: ' + column);
    });

    it('#add values: Name contains surveyName', function() {
        var column = data.getColumnData('Name');
        assert.include(column, 'surveyName', 'not present: ' + column);
    });

    it('#add values: Customers contains 111', function() {
        var column = data.getColumnData('Customers');
        assert.include(column, '111', 'not present: ' + column);
    });

    it('#add custom values: Name contains surveyName2', function() {
        var column = data.getColumnData('Name');
        assert.include(column, 'surveyName2', 'not present: ' + column);
    });

    it('#add customvalues: Customers contains 222', function() {
        var column = data.getColumnData('Customers');
        assert.include(column, '222', 'not present: ' + column);
    });

    it('#add custom unicode saved correctly', function() {
        var column = data.getColumnData('Name');
        var target = 'Testing Survey «ταБЬℓσ»: 1<2 & 4+1>3, now" 20% off!';
        assert.include(column, target, 'not present: ' + column);
    });

    it('#add custom screenPath: State contains screenPath', function() {
        var column = data.getColumnData('State');
        assert.include(column, 'screenPath', 'not present: ' + column);
    });

    it('#edit default: State contains eta', function() {
        var column = data.getColumnData('State');
        assert.include(column, 'eta', 'not present: ' + column);
    });

    it('#edit custom: State contains theta', function() {
        var column = data.getColumnData('State');
        assert.include(column, 'theta', 'not present: ' + column);
    });

    it('#edit custom screenpath: State contains iota', function() {
        var column = data.getColumnData('State');
        assert.include(column, 'iota', 'not present: ' + column);
    });


});

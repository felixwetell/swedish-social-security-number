'use strict';

import { verifySsn, verifySex } from '../src/index.js';

let ssn = "9710286098";
let invalidSsn = "9710286198"

QUnit.test( "Verify SSN", function( assert ) {
    assert.ok( verifySsn(ssn) === true, "Passed!" );
});

QUnit.test( "Verify invalid SSN", function( assert ) {
    assert.ok( verifySsn(invalidSsn) === false, "Passed!" );
});

QUnit.test( "Verify sex", function( assert ) {
    assert.ok( verifySex(ssn) === 'Male', "Passed!" );
});
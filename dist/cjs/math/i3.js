'use strict';

var test = require('../test.js');

const a = (a) => {
    console.log(a + 123 + test.abc);
};

exports.a = a;

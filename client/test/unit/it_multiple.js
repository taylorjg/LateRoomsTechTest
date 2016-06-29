'use strict';

window.it_multiple = function (description, fn, testCases) {

    var numTests = testCases.length;
    var formattedTestCountSuffix = ' (' + numTests +  ' ' + ((numTests === 1) ? 'test' : 'tests') + ')';

    var isArray = Array.isArray || function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };

    var invokeNormalItForTestCase = function (testCase) {
        var json = JSON.stringify(testCase);
        if (json.length > 50) {
            json = json.substr(0, 50) + '...';
        }
        var formattedTestCaseSuffix = '(' + json + ')';
        it(description + formattedTestCaseSuffix, function () {
            if (isArray(testCase)) {
                fn.apply(this, testCase);
            } else {
                fn.call(this, testCase);
            }
        });
    };

    describe(description + formattedTestCountSuffix, function () {
        for (var i = 0; i < numTests; i++) {
            invokeNormalItForTestCase(testCases[i]);
        }
    });
};

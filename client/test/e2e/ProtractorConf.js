exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        'mainPageSpec.js'
    ],
    framework: 'jasmine'
};

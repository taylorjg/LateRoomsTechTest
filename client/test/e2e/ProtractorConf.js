exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        'mainPageSpec.js',
        'addCityDialogSpec.js'
    ],
    framework: 'jasmine'
};

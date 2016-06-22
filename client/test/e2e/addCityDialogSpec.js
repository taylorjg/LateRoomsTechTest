var MainPage = require('./PageObjects/mainPage');
var AddCityDialog = require('./PageObjects/addCityDialog');

describe('Add City Dialog', function () {

    var mainPage;
    var addCityDialog;

    beforeEach(function() {
        mainPage = new MainPage();
        addCityDialog = new AddCityDialog();
    });

    it('clicking Add City button shows the Add City dialog', function () {
        mainPage.get();
        mainPage.addCityBtn().click();
        expect(addCityDialog.city().isPresent()).toBe(true);
        expect(addCityDialog.country().isPresent()).toBe(true);
        expect(addCityDialog.attraction().isPresent()).toBe(true);
    });
});

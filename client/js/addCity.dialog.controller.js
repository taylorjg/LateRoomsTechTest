'use strict';

function AddCityDialogController($uibModalInstance) {

    const vm = this;
    vm.onOk = onOk;
    vm.onCancel = onCancel;
    vm.onAddAttraction = onAddAttraction;
    vm.onRemoveAttraction = onRemoveAttraction;
    vm.item = {
        city: 'Paris',
        country: 'France',
        attractions: ['Eiffel Tower', 'River Seine']
    };
    vm.attraction = '';

    function onOk() {
        $uibModalInstance.close('Blah');
    }

    function onCancel() {
        $uibModalInstance.dismiss();
    }

    function onAddAttraction() {
        vm.item.attractions.push(vm.attraction);
        vm.attraction = '';
    }

    function onRemoveAttraction(index) {
        vm.item.attractions.splice(index, 1);
    }
}

AddCityDialogController.$inject = ['$uibModalInstance'];

module.exports = AddCityDialogController;

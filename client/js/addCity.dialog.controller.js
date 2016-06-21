'use strict';

function AddCityDialogController($uibModalInstance) {

    const vm = this;
    vm.onOk = onOk;
    vm.onCancel = onCancel;

    function onOk() {
        $uibModalInstance.close('Blah');
    }

    function onCancel() {
        $uibModalInstance.dismiss();
    }
}

AddCityDialogController.$inject = ['$uibModalInstance'];

module.exports = AddCityDialogController;

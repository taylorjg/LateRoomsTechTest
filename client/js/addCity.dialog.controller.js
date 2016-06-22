function AddCityDialogController($uibModalInstance) {

    const vm = this;
    vm.onOk = onOk;
    vm.onCancel = onCancel;
    vm.onAddAttraction = onAddAttraction;
    vm.onRemoveAttraction = onRemoveAttraction;
    vm.item = {
        City: '',
        Country: '',
        Attractions: []
    };
    vm.attraction = '';

    function onOk() {
        $uibModalInstance.close(vm.item);
    }

    function onCancel() {
        $uibModalInstance.dismiss();
    }

    function onAddAttraction() {
        vm.item.Attractions.push(vm.attraction);
        vm.attraction = '';
    }

    function onRemoveAttraction(index) {
        vm.item.Attractions.splice(index, 1);
    }
}

AddCityDialogController.$inject = ['$uibModalInstance'];

module.exports = AddCityDialogController;

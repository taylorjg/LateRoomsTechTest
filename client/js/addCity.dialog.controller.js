function AddCityDialogController($uibModalInstance) {

    const vm = this;
    vm.onOk = onOk;
    vm.onCancel = onCancel;
    vm.onAddAttraction = onAddAttraction;
    vm.onRemoveAttraction = onRemoveAttraction;
    vm.feedbackClasses = feedbackClasses;
    vm.item = {
        City: '',
        Country: '',
        Attractions: [],
        Visited: false
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

    function feedbackClasses(c) {
        return {
            'has-feedback': c.$touched,
            'has-success': c.$touched && c.$valid,
            'has-error': c.$touched && c.$invalid
        };
    }
}

AddCityDialogController.$inject = ['$uibModalInstance'];

module.exports = AddCityDialogController;

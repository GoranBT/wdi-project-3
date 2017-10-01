angular
  .module('hiddenTravellr')
  .controller('RegisterCtrl', RegisterCtrl)
  .controller('LoginCtrl', LoginCtrl);

RegisterCtrl.$inject = ['$auth', '$state'];
function RegisterCtrl($auth, $state) {
  const vm = this;
  vm.user = {};

  function submit() {
    if (vm.registerForm.$valid) {
      $auth.signup(vm.user)
        .then(() => $state.go('login'))
        .catch(() => $state.go('register'));
    }
  }

  vm.submit = submit;
}

LoginCtrl.$inject = ['$auth', '$state'];
function LoginCtrl($auth, $state) {
  const vm = this;
  vm.credentials = {};

  function submit() {
    if (vm.loginForm.$valid) {
      $auth.login(vm.credentials)
        .then(() => $state.go('locationsIndex'))
        .catch(() => $state.go('login'));
    }
  }

  vm.submit = submit;
}

LogoutCtrl.$inject = ['$auth', '$state'];
function LogoutCtrl($auth, $state) {
  const vm = this;
  vm.credentials = {};
  $auth.logout()
    .then(() => {
      $state.go('locationsIndex');
    });
}

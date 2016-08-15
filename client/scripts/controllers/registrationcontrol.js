AppRegistration.controller('RegistrationController',  ['$scope', '$log', '$http', '$window', 'RegisterFactory', function($scope, $log, $http, $window, RegisterFactory) {
  //Independent Variables
  $scope.username_register;
  $scope.password_register;

  $scope.submit = function(username, password){
    console.log("Registering");
    RegisterFactory.postData(username, password);
  }
}]);

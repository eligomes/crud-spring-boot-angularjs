angular.module("app").controller("newUserController", function ($scope, usersAPI, $location) {

	$scope.addUser = function (user) {
		usersAPI.saveUser(user).success(function (data) {
			delete $scope.user;
			$scope.userForm.$setPristine();
			$location.path("/api/user");
		});
	};
});
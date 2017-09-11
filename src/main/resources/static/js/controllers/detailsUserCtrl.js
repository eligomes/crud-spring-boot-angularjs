angular.module("app").controller("detailsUserCtrl", function ($scope, $routeParams, user, usersAPI, $location) {

	$scope.user = user.data;
	
	$scope.updateUser = function (user) {
		usersAPI.saveUser(user).success(function (data) {
			delete $scope.user;
			$scope.userForm.$setPristine();
			$location.path("/api/user");
		});
	};
	
});
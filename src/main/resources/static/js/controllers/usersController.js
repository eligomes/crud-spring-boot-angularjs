angular.module("app").controller("usersController", function ($scope, users, $location, usersAPI) {
	$scope.users = users.data;
	
	$scope.deleteUser = function (id) {
		usersAPI.deleteUser(id).success(function (data) {
			$location.path("/api/user");
		});
	};
	
	$scope.orderBy = function (field) {
		$scope.criterioDeOrdenacao = field;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
	
});
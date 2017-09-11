app.config(function($routeProvider) {
	$routeProvider.when('/user', {
		templateUrl : '/views/users.html',
		controller : 'usersController',
		resolve: {
			users: function (usersAPI) {
				return usersAPI.getUsers();
			}
		}
	});
	
	$routeProvider.when('/user/add', {
		templateUrl : '/views/newUser.html',
		controller : 'newUserController',
	});
	
	$routeProvider.when("/user/:id", {
		templateUrl: "views/detailsUser.html",
		controller: "detailsUserCtrl",
		resolve: {
			user: function (usersAPI, $route) {
				return usersAPI.getUser($route.current.params.id);
			}
		}
	});

	$routeProvider.otherwise({
		redirectTo : "/user"
	});
});
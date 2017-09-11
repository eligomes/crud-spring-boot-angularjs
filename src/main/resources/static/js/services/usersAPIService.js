angular.module("app").factory("usersAPI", function ($http, config) {
	var _getUsers = function () {
		return $http.get(config.baseUrl + "/api/user");
	};

	var _getUser = function (id) {
		return $http.get(config.baseUrl + "/api/user/" + id);
	};

	var _saveUser = function (users) {
		return $http.post(config.baseUrl + "/api/user", users);
	};
	
	var _deleteUser = function (id) {
		return $http.delete(config.baseUrl + "/api/user/" + id);
	};

	return {
		getUsers: _getUsers,
		getUser: _getUser,
		saveUser: _saveUser,
		deleteUser: _deleteUser
	};
});
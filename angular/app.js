var app = angular.module('xapp', []);

app.controller('xctrl', function ($scope) {
	$scope.operate = function (code) {
		var a = parseInt($scope.obj1); // bisa pakai '+'
		var b = parseInt($scope.obj2); // bisa pakai '+'
		switch (code){
			case 1:
				$scope.operation = "ADD";
				$scope.result = a + b;
				break;
			case 2:
				$scope.operation = "SUBSTRACTION";
				$scope.result = a - b;
				break;
			case 3:
				$scope.operation = "MULTIPLY";
				$scope.result = a * b;
				break;
			case 4:
				$scope.operation = "DIVIDE";
				$scope.result = a / b;
				break;
		}
	};
});
var MyApp = angular.module('Appku',[]); //inisialisasi angular module

MyApp.controller('crud',  function($scope,$http){ //membuat controller sesuai dengan view
	//tampilkan data
	$scope.GetData=function(){
		$http.get('api/data.php?req=get').then(function(response){
			// console.log(response);
			$scope.isiData=response.data.data;
			// console.log($scope.isiData);
		});
	}
	$scope.GetData();
	

});
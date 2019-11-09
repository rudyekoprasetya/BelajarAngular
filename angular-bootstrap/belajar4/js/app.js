var MyApp = angular.module('Appku',[]); //inisialisasi angular module

MyApp.controller('tampilData',  function($scope,$http){ //membuat controller sesuai dengan view
	$http.get('MOCK_DATA.json').then(function(response){ //mengambil file JSON
		console.log(response);
		$scope.isiData=response.data; //memasukan respons ke variable isiData
	});

});
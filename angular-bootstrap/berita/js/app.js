var MyApp = angular.module('Appku',[]); //inisialisasi angular module

MyApp.controller('berita',  function($scope,$http){ //membuat controller sesuai dengan view
	$http.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=51dfd39984fe476f90f625457f70c96a').then(function(response){ //mengambil data dari berita terbaru news API
		// console.log(response);
		$scope.isiData=response.data.articles; //memasukan respons ke variable isiData
	});

});
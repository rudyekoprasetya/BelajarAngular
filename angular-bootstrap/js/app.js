var MyApp = angular.module('Appku',[]); //inisialisasi angular module

MyApp.controller('tampil',  function($scope){ //membuat controller sesuai dengan view

});

MyApp.controller('kalkulator',  function($scope){ //membuat controller kalkulator	
	//membuat fungsi operasi perhitungan
	$scope.operasi=function(aksi) {
		//memasukan data form ke dalam variable
		var angka1=+$scope.angka1;
		var angka2=+$scope.angka2;		
		if(aksi=='tambah') { //untuk tambah
			$scope.hasil=angka1+angka2; //memasukan hasil
		} else if(aksi=='kurang') { //untuk kurang
			$scope.hasil=angka1-angka2; //memasukan hasil
		} else if(aksi=='kali'){ //untuk kali
			$scope.hasil=angka1*angka2; //memasukan hasil
		} else if(aksi=='bagi') { //untuk bagi
			$scope.hasil=angka1/angka2; //memasukan hasil
		}
	};

});



var MyApp = angular.module('Appku',[]); //inisialisasi angular module

MyApp.controller('crud',  function($scope,$http){ //membuat controller sesuai dengan view

	//bersihkan form
	$scope.ClearData=function(){
		$scope.id='';
		$scope.nama='';
		$scope.alamat='';
		$scope.gaji='';
		$scope.idEdit='';
		$scope.namaEdit='';
		$scope.alamatEdit='';
		$scope.gajiEdit='';
	}

	//tampilkan data
	$scope.GetData=function(){
		$http.get('api/data.php?req=get').then(function(response){
			console.log(response.data.message);
			$scope.isiData=response.data.data;
			// console.log($scope.isiData);
		});
	}
	$scope.GetData();

	// tambah data
	$scope.InsertData=function(){
		$http({
			method: 'POST',
			url: 'api/data.php?req=post',
			data: {'id':$scope.id, 'nama':$scope.nama, 'alamat':$scope.alamat, 'gaji':$scope.gaji}
		}).then(function(response){
			console.log(response.data.message);
			$scope.GetData();
			$scope.ClearData();
		});
	}

	//edit data
	$scope.getID=function(id){
		// console.log(id);
		$http({
			method: 'POST',
			url: 'api/data.php?req=edit',
			data: {'id':id}
		}).then(function(response){
			console.log(response.data.message);
			$scope.idEdit=response.data.data[0].id;
			$scope.namaEdit=response.data.data[0].nama;
			$scope.alamatEdit=response.data.data[0].alamat;
			$scope.gajiEdit=+response.data.data[0].gaji;
		});		
	}

	// update data
	$scope.updateData=function(){
		$http({
			method: 'POST',
			url: 'api/data.php?req=put',
			data: {'id':$scope.idEdit, 'nama':$scope.namaEdit, 'alamat':$scope.alamatEdit, 'gaji':$scope.gajiEdit}
		}).then(function(response){
			console.log(response.data.message);
			$scope.GetData();
			$scope.ClearData();
		});
	}

	// hapus data
	$scope.delData=function(id){
		$http({
			method: 'POST',
			url: 'api/data.php?req=del',
			data: {'id':id}
		}).then(function(response){
			console.log(response.data.message);
			$scope.GetData();
		});
	}
	

});
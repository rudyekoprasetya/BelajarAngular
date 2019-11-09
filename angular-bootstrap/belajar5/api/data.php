<?php
header("Access-Control-Allow-Origin: *"); //agar api bisa di buka di browser
header("Content-type: application/json; charset=utf-8");
include("config.php");

$request=$_GET['req'];

if($request=='get') {
	$qry="SELECT * FROM pengurus ORDER BY id";
	$query=mysqli_query($con,$qry);
	$row=mysqli_fetch_assoc($query);

	while($row=mysqli_fetch_assoc($query)) {
		$data[]=$row;
	}

	$response=array(
		'response' => 202,
		'message' => 'Sukses',
		'data' => $data
	);

	echo json_encode($response);
} elseif ($request=='post') {
	$id=$_POST['id'];
	$nama=$_POST['nama'];
	$alamat=$_POST['alamat'];
	$gaji=$_POST['gaji'];
	$qry="INSERT INTO pengurus VALUES('$id','$nama','$alamat',$gaji)";
	$query=mysqli_query($con,$qry);
	$response=array(
		'response' => '200',
		'message' => 'Sukses'
	);
	echo json_encode($response);
} elseif ($request=='edit') {
	$id=$_GET['id'];
	$qry="SELECT * FROM pengurus WHERE id='$id'";
	$query=mysqli_query($con,$qry);
	$row=mysqli_fetch_assoc($query);

	$data[]=array(
		'id'=>$row['id'],
		'nama'=>$row['nama'],
		'alamat'=>$row['alamat'],
		'gaji'=>$row['gaji']
	);

	$response=array(
		'response' => '200',
		'message' => 'Sukses',
		'data' => $data
	);
	
	echo json_encode($response);
} elseif ($request=='del') {
	$id=$_POST['id'];
	$qry="DELETE FROM pengurus WHERE id='$id'";	
	$query=mysqli_query($con,$qry);
	$response=array(
		'response'=>'200',
		'message'=>'Data Berhasil dihapus'
		);
	echo json_encode($response);
} elseif ($request=='put') {
	$id=$_POST['id'];
	$nama=$_POST['nama'];
	$alamat=$_POST['alamat'];
	$gaji=$_POST['gaji'];
	$qry="UPDATE pengurus SET nama='$nama', alamat='$alamat', gaji='$gaji' WHERE id='$id'";
	$query=mysqli_query($con,$qry);
	$response=array(
		'response'=>'200',
		'message'=>'Data Berhasil diubah'
		);
	echo json_encode($response);
}
?>
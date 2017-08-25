<?php
$con = mysqli_connect('eu-cdbr-west-01.cleardb.com','bf61db3a4c2178','ff378929','heroku_61f787cd12e01c6');
$sql="update pruebas set estado=0 where codProd='camacho'";
$result = mysqli_query($con, $sql);
$txt="";
$myArray = array();

if ($result) {
    echo "1";
} else {
    echo "Error updating record: " . $con->error;
}

//$result->close();
?>
<?php

$path = $_SERVER["DOCUMENT_ROOT"] . "/" . $_SERVER["REQUEST_URI"];

if(file_exists($path)){
	return false;
} else {
	require $_SERVER["DOCUMENT_ROOT"] . "/index.php";
}

<?php
// this function allows us to print out stuff on web console.
function console_log($output, $with_script_tags = TRUE){
    $jscode = 'console.log('. json_encode($output, JSON_HEX_TAG) .')';
    if($with_script_tags){
        $jscode = '<script>' . $jscode . '</script>';
        echo "$jscode";
    } else{
        echo "$jscode";
    };
};

$mysqli = new mysqli('localhost', 'gustadev', 'Gust4Fer1106');

if(!$mysqli){
    die("INDEX.PHP was not able to connect to the database");
}else{
    console_log("We're in the Database.");
};


?>
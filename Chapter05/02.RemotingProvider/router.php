<?php

if(isset($HTTP_RAW_POST_DATA)) {
    header('Content-Type: text/javascript');
    $data = json_decode($HTTP_RAW_POST_DATA);
}else{
    die('Invalid request.');
}

require_once("./classes/$data->action.php");

$cls = new $data->action;

$params = $data->data;

$result = call_user_func_array(array($cls, $data->method), $params);

$response = array(
    'type'   => 'rpc',
    'tid'    => $data->tid,
    'action' => $data->action,
    'method' => $data->method,
    'result' => $result
);

echo json_encode($response);

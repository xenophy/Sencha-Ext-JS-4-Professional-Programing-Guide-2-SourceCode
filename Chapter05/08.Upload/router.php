<?php

$isForm = false;
$isUpload = false;

if(isset($HTTP_RAW_POST_DATA)) {
    header('Content-Type: text/javascript');
    $data = json_decode($HTTP_RAW_POST_DATA);
} else if(isset($_POST['extAction'])) {
    $isForm = true;
    $isUpload = $_POST['extUpload'] == 'true';
    $data = new stdClass;
    $data->action = $_POST['extAction'];
    $data->method = $_POST['extMethod'];
    $data->tid = isset($_POST['extTID']) ? $_POST['extTID'] : null;
    $data->data = array($_POST, $_FILES);
} else {
    die('Invalid request.');
}

function doRPC($data) {

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

    return $response;
}

if(is_array($data)){
    $response = array();
    foreach($data as $d) {
        $response[] = doRpc($d);
    }
} else {
    $response = doRpc($data);
}

if($isForm && $isUpload) {
    echo '<html><body><textarea>';
    echo json_encode($response);
    echo '</textarea></body></html>';
} else {
    echo json_encode($response);
}

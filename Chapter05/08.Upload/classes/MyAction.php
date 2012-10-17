<?php
class MyAction
{
    public function getInfo($id) {
        $ret = array(
            'success' => true,
            'data' => array(
                'uid' => $id,
                'email' => 'kotsutsumi@xenophy.com',
                'name' => '小堤　一弘'
            )
        );
        return $ret;
    }
    public function updateInfo($o, $files) {

        // $files['photo-path']

        // do move uploaded file

        // success case
        $ret = array(
            'success' => true,
            'message' => $files['photo-path']['name'] . 'がアップロードされました。'
        );

        return $ret;
    }
}

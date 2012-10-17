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
    public function updateInfo($o) {

        // $o->uid
        // $o->email
        // $o->name

        // success case
        $ret = array(
            'success' => true
        );

        // invalid case
        $ret = array(
            'success' => false,
            'errors' => array(
                'email' => '入力されたメールアドレスは、既に登録されています。'
            )
        );

        return $ret;
    }
}

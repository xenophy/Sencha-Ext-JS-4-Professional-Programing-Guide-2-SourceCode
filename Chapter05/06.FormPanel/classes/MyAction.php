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
}

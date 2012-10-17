<?php
class MyAction
{
    public function getGrid($o) {
        $ret = array();
        for($i = 1; $i <= 5; ++$i){
            array_push($ret, array(
                'name'=>'会社' . $i,
                'employees'=>$i
            ));
        }
        return $ret;
    }
}

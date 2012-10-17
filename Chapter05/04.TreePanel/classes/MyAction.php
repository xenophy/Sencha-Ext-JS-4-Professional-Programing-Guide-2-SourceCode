<?php
class MyAction
{
    public function getNode($id) {
        $ret = array();
        if($id == 'root') {
            for($i = 1; $i <= 5; ++$i){
                array_push($ret, array(
                    'id'=>'n' . $i,
                    'text'=>'Node ' . $i,
                    'leaf'=>false
                ));
            }
        } else {
            $num = substr($id, 1);
            for($i = 1; $i <= 5; ++$i){
                array_push($ret, array(
                    'id'=>$id . $i,
                    'text'=>'Node ' . $num . '.' . $i,
                    'leaf'=>true
                ));
            }
        }
        return $ret;
    }
}

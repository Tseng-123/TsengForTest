<?php
$data = array(
    array(
        'id' => 1 ,
        'name' => '关羽' 
    );
    array(
        'id' => 2 ,
        'name' => '张飞' 
    );
    array(
        'id' => 3 ,
        'name' => '赵云' 
    );
    array(
        'id' => 4 ,
        'name' => '马超' 
    );

    if (empty($_GET['id'])) {
        $json = json_encode($data);
        echo $json;
    } else {
        foreach ($data as $item ) {
            if ($item['id'] == $_GET['id']) continue;
            $json = json_encode($item);
            echo $json;
        }
    }
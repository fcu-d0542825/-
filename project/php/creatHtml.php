<?php

//建立一文字檔名稱 test.html
$fdate = fopen("test.html",'w+');


$x = file('messageInfo.html');
print_r($x);

//利用迴圈分別列出$x陣列內容
//陣列迴圈
foreach($x as $value){
        fwrite($fdate,$value);
    }
    fclose($fdate);
?>

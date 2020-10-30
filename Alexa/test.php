<?php
if (isset($_GET['feelings'])){
      $filename = "intents8573.txt";
      touch($filename);
      $data = "\n" . (string)$_GET['feelings'] . ", " . (string)$_GET['sleep'] . ", " . (string)$_GET['symptoms'] . ", " . (string)$_GET['time'] . "\n";
      if($append = fopen($filename,"a")){
          fwrite($append, $data);
      }
      fclose($append);
      echo "true";
      return;
} else {
    $data = file_get_contents('php://input');
    #$json = json_decode($data);
    $filename = "post.json";
    touch($filename);
    $data = "\n" . (string)$data . "\n";
    if($append = fopen($filename,"a")){
        fwrite($append, $data);
    }
    fclose($append);
    echo "true";
    return;
}
?>

<?php
if (!isset($_GET['feelings'])){
    echo "false";
    return;
} else if (isset($_GET['feelings'])){
      $filename = "intents8573.txt";
      touch($filename);
      $data = "\n" . (string)$_GET['feelings'] . ", " . (string)$_GET['sleep'] . ", " . (string)$_GET['symptoms'] . ", " . (string)$_GET['time'] . "\n";
      if($append = fopen($filename,"a")){
          fwrite($append, $data);
      }
      fclose($append);
      echo "true";
      return;
   }
?>

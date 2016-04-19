<?php

function make_thumb($src, $dest, $tw) {
  $si = imagecreatefromjpeg($src);

  $w = imagesx($si);
  $h = imagesy($si);

  $th = floor($h*($tw/$w));

  $vi = imagecreatetruecolor($tw, $th);

  imagecopyresized($vi, $si, 0, 0, 0, 0, $tw, $th, $w, $h);

  imagejpeg($vi, $dest)
}

function get_file_extension($file_name) {
  return substr(strrchr($file_name,"."),1);
}

function get_files($img_dir, $exts = array("jpg")) {
  $files = array();

  if($handle = $opendir($img_dir)) {
    while(false !== ($file = readdir($handle))) {
      $extension = strtolower(get_file_extension($file));
      if($extension && in_array($extension, $exts)) {
        $files[] = $file;
      }
    }
    closedir($handle);
  }
  return $files;
}





?>

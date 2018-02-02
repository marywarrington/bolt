<?php

$filter = new Twig_SimpleFilter('rgb2hex', function ($rgb) {
  $rgb = str_replace('rgb(', '', $rgb);
  $rgb = str_replace(')', '', $rgb);
  $rgb = str_replace(' ', '', $rgb);

  $rgbArray = explode(',', $rgb);

  // Round RGB values in case JSON RGB output contains decimal points
  $rgbArray[0] = round($rgbArray[0], 0);
  $rgbArray[1] = round($rgbArray[1], 0);
  $rgbArray[2] = round($rgbArray[2], 0);

  $hex = "#";
  $hex .= str_pad(dechex($rgbArray[0]), 2, "0", STR_PAD_LEFT);
  $hex .= str_pad(dechex($rgbArray[1]), 2, "0", STR_PAD_LEFT);
  $hex .= str_pad(dechex($rgbArray[2]), 2, "0", STR_PAD_LEFT);

  return $hex;
});
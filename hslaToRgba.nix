{ lib, builtins }:

let
  mod = x: y: x - y * (builtins.floor (x / y));
  abs = x: if x < 0 then -x else x;

  hslaToRgba = hsla:
    let
      h = mod hsla.h 360 / 60.0;
      s = hsla.s;
      l = hsla.l;
      a = hsla.a;

      c = (1 - abs(2 * l - 1)) * s;
      x = c * (1 - abs (mod h 2 - 1));
      m = l - c / 2;

      rgb' =
        if h < 1 then { r = c; g = x; b = 0; }
        else if h < 2 then { r = x; g = c; b = 0; }
        else if h < 3 then { r = 0; g = c; b = x; }
        else if h < 4 then { r = 0; g = x; b = c; }
        else if h < 5 then { r = x; g = 0; b = c; }
        else { r = c; g = 0; b = x; };

      round = x: builtins.floor (x * 255 + 0.5);
      r = round (rgb'.r + m);
      g = round (rgb'.g + m);
      b = round (rgb'.b + m);
      alpha = round a;

      toHex = x: let
        hex = lib.toHexString (lib.min 255 (lib.max 0 x));
      in if builtins.stringLength hex == 1 then "0${hex}" else hex;
    in
    "${toHex r}${toHex g}${toHex b}${toHex alpha}";
in
hslaToRgba

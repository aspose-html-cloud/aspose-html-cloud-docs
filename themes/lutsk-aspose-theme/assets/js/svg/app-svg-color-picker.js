(function (global, factory) {
  "use strict";

  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = global.document
      ? factory(global)
      : function (win) {
          if (!win.document) {
            throw new Error("AppSvgColorPicker needs a window with document");
          }
          return factory(win);
        };
    return;
  }

  // Default use (no module export)
  factory(global);
})(typeof window !== "undefined" ? window : this, function (window) {
  // BEGIN factory

  /////////////////////////////SVGColor//////////////////////////////////////////
  var Color = /** @class */ (function () {
    function Color() {
      this.rgb = [0, 0, 0];
      this.hsl = [0, 0, 0];
      this.hsv = [0, 0, 0];
      this.hwb = [0, 0, 0];
      this.cmyk = [0, 0, 0, 0];
      this.ncol = "R";
      this.opacity = 1;
      this.valid = false;
      this.lch = [0, 0, 0];
      this.oklch = [0, 0, 0];
      this.lab = [0, 0, 0];
      this.oklab = [0, 0, 0];
      this.xyz = [0, 0, 0];
    }
    Color.prototype.ToRgbString = function () {
      return (
        "rgb(" + this.rgb[0] + ", " + this.rgb[1] + ", " + this.rgb[2] + ")"
      );
    };
    Color.prototype.ToRgbaString = function () {
      return (
        "rgba(" +
        this.rgb[0] +
        ", " +
        this.rgb[1] +
        ", " +
        this.rgb[2] +
        ", " +
        this.opacity +
        ")"
      );
    };
    Color.prototype.ToHwbString = function () {
      return (
        "hwb(" +
        this.hwb[0] +
        ", " +
        Math.round(this.hwb[1] * 100) +
        "%, " +
        Math.round(this.hwb[2] * 100) +
        "%)"
      );
    };
    Color.prototype.ToHwbStringDecimal = function () {
      return (
        "hwb(" + this.hwb[0] + ", " + this.hwb[1] + ", " + this.hwb[2] + ")"
      );
    };
    Color.prototype.ToHwbaString = function () {
      return (
        "hwba(" +
        this.hwb[0] +
        ", " +
        Math.round(this.hwb[1] * 100) +
        "%, " +
        Math.round(this.hwb[2] * 100) +
        "%, " +
        this.opacity +
        ")"
      );
    };
    Color.prototype.ToHslString = function () {
      return (
        "hsl(" +
        this.hsl[0] +
        ", " +
        Math.round(this.hsl[1] * 100) +
        "%, " +
        Math.round(this.hsl[2] * 100) +
        "%)"
      );
    };
    Color.prototype.ToHslStringDecimal = function () {
      return (
        "hsl(" + this.hsl[0] + ", " + this.hsl[1] + ", " + this.hsl[2] + ")"
      );
    };
    Color.prototype.ToHslaString = function () {
      return (
        "hsla(" +
        this.hsl[0] +
        ", " +
        Math.round(this.hsl[1] * 100) +
        "%, " +
        Math.round(this.hsl[2] * 100) +
        "%, " +
        this.opacity +
        ")"
      );
    };
    Color.prototype.ToHsvString = function () {
      return (
        "hsv(" +
        this.hsv[0] +
        ", " +
        Math.round(this.hsv[1] * 100) +
        "%, " +
        Math.round(this.hsv[2] * 100) +
        "%)"
      );
    };
    Color.prototype.ToHsvStringDecimal = function () {
      return (
        "hsv(" + this.hsv[0] + ", " + this.hsv[1] + ", " + this.hsv[2] + ")"
      );
    };
    Color.prototype.ToHsvaString = function () {
      return (
        "hsva(" +
        this.hsv[0] +
        ", " +
        Math.round(this.hsv[1] * 100) +
        "%, " +
        Math.round(this.hsv[2] * 100) +
        "%, " +
        this.opacity +
        ")"
      );
    };
    Color.prototype.ToCmykString = function () {
      return (
        "cmyk(" +
        Math.round(this.cmyk[0] * 100) +
        "%, " +
        Math.round(this.cmyk[1] * 100) +
        "%, " +
        Math.round(this.cmyk[2] * 100) +
        "%, " +
        Math.round(this.cmyk[3] * 100) +
        "%)"
      );
    };
    Color.prototype.ToCmykStringDecimal = function () {
      return (
        "cmyk(" +
        this.cmyk[0] +
        ", " +
        this.cmyk[1] +
        ", " +
        this.cmyk[2] +
        ", " +
        this.cmyk[3] +
        ")"
      );
    };
    Color.prototype.ToNcolString = function () {
      return (
        this.ncol +
        ", " +
        Math.round(this.hwb[1] * 100) +
        "%, " +
        Math.round(this.hwb[2] * 100) +
        "%"
      );
    };
    Color.prototype.ToNcolStringDecimal = function () {
      return this.ncol + ", " + this.hwb[1] + ", " + this.hwb[2];
    };
    Color.prototype.ToNcolaString = function () {
      return (
        this.ncol +
        ", " +
        Math.round(this.hwb[1] * 100) +
        "%, " +
        Math.round(this.hwb[2] * 100) +
        "%, " +
        this.opacity
      );
    };
    Color.prototype.ToName = function () {
      var r, g, b;
      var colorhexs = GetColorArr("hexs");
      for (var i = 0; i < colorhexs.length; i++) {
        r = parseInt(colorhexs[i].substr(0, 2), 16);
        g = parseInt(colorhexs[i].substr(2, 2), 16);
        b = parseInt(colorhexs[i].substr(4, 2), 16);
        if (this.rgb[0] === r && this.rgb[1] === g && this.rgb[2] === b) {
          return GetColorArr("names")[i];
        }
      }
      return "";
    };
    Color.prototype.ToNames = function (n) {
      var r, g, b;
      var colorhexs = GetColorArr("hexs");
      var srgb = this.rgb.map(function (c) {
        return c / 255;
      });
      srgb.push(1);
      var similarities = [];
      for (var i = 0; i < colorhexs.length; i++) {
        r = parseInt(colorhexs[i].substr(0, 2), 16);
        g = parseInt(colorhexs[i].substr(2, 2), 16);
        b = parseInt(colorhexs[i].substr(4, 2), 16);
        if (GetColorArr("names")[i] == "Maroon") {
          var dd = b - r;
        }
        similarities.push({
          hex: "#" + colorhexs[i],
          name: GetColorArr("names")[i],
          similarity:
            this.rgb[0] === r && this.rgb[1] === g && this.rgb[2] === b
              ? 1
              : cosineSimilarity(srgb, [r / 255, g / 255, b / 255, 1]),
        });
      }
      return similarities
        .sort(function (a, b) {
          return b.similarity - a.similarity;
        })
        .slice(0, n);
    };
    Color.prototype.ToHexString = function () {
      var r = ToHex(this.rgb[0]);
      var g = ToHex(this.rgb[1]);
      var b = ToHex(this.rgb[2]);
      return "#" + r + g + b;
    };
    Color.prototype.ToLchString = function () {
      return (
        "lch(" +
        this.lch[0] +
        "%, " +
        Number((this.lch[1] / 1.5).toFixed(3)) +
        "%, " +
        this.lch[2] +
        "%)"
      );
    };
    Color.prototype.ToLchStringDecimal = function () {
      return (
        "lch(" + this.lch[0] + ", " + this.lch[1] + ", " + this.lch[2] + ")"
      );
    };
    Color.prototype.ToOkLchString = function () {
      return (
        "oklch(" +
        Number((this.oklch[0] / 0.01).toFixed(3)) +
        "%, " +
        Number((this.oklch[1] / 0.004).toFixed(3)) +
        "%, " +
        this.oklch[2] +
        "%)"
      );
    };
    Color.prototype.ToOkLchStringDecimal = function () {
      return (
        "oklch(" +
        this.oklch[0] +
        ", " +
        this.oklch[1] +
        ", " +
        this.oklch[2] +
        ")"
      );
    };
    Color.prototype.ToLabString = function () {
      return (
        "lab(" +
        this.lab[0] +
        "%, " +
        Number((this.lab[1] / 1.25).toFixed(3)) +
        "%, " +
        Number((this.lab[2] / 1.25).toFixed(3)) +
        "%)"
      );
    };
    Color.prototype.ToLabStringDecimal = function () {
      return (
        "lab(" + this.lab[0] + ", " + this.lab[1] + ", " + this.lab[2] + ")"
      );
    };
    Color.prototype.ToOkLabString = function () {
      return (
        "oklab(" +
        Number((this.oklab[0] / 0.01).toFixed(3)) +
        "%, " +
        Number((this.oklab[1] / 0.004).toFixed(3)) +
        "%, " +
        Number((this.oklab[2] / 0.004).toFixed(3)) +
        "%)"
      );
    };
    Color.prototype.ToXyzString = function () {
      return (
        "xyz(" +
        Number((this.xyz[0] / 0.01).toFixed(3)) +
        "%, " +
        Number((this.xyz[1] / 0.01).toFixed(3)) +
        "%, " +
        Number((this.xyz[2] / 0.01).toFixed(3)) +
        "%)"
      );
    };
    Color.prototype.ToOkLabStringDecimal = function () {
      return (
        "oklab(" +
        this.oklab[0] +
        ", " +
        this.oklab[1] +
        ", " +
        this.oklab[2] +
        ")"
      );
    };
    return Color;
  })();
  function Substr(str, index, length) {
    return str.substr(index, length);
  }
  function check(f) {
    return f();
  }
  function dotp(x, y) {
    return x
      .map(function (a, i) {
        return a * y[i];
      })
      .reduce(function (a, b) {
        return a + b;
      }, 0);
  }
  function cosineSimilarity(A, B) {
    var delim = Math.sqrt(dotp(A, A)) * Math.sqrt(dotp(B, B));
    var similarity = dotp(A, B) / (delim == 0 ? 1 : delim);
    return similarity;
  }
  function ConvertFrom(color) {
    var typ = "";
    var rgb = [];
    var hsl = [];
    var hsv = [];
    var hwb = [];
    var cmyk = [];
    var lch = [];
    var oklch = [];
    var lab = [];
    var oklab = [];
    var xyz = [];
    var arr = [];
    color = TrimSpaces(color.toLowerCase());
    var x = Substr(color, 0, 1).toUpperCase();
    var y = color.substr(1);
    var a = 1;
    if (
      (x === "R" ||
        x === "Y" ||
        x === "G" ||
        x === "C" ||
        x === "B" ||
        x === "M" ||
        x === "W") &&
      !isNaN(Number(y))
    ) {
      if (!(color.length == 6 && color.indexOf(",") == -1)) {
        color = "ncol(" + color + ")";
      }
    }
    if (color.length != 3 && color.length != 6 && !isNaN(Number(color))) {
      color = "ncol(" + color + ")";
    }
    if (color.indexOf(",") > 0 && color.indexOf("(") === -1) {
      color = "ncol(" + color + ")";
    }
    if (
      check(function () {
        switch (Substr(color, 0, 3)) {
          case "rgb":
          case "hsl":
          case "hsv":
          case "hwb":
          case "lch":
          case "lab":
          case "xyz": {
            typ = Substr(color, 0, 3);
            color = color.substr(3);
            return true;
          }
        }
        switch (Substr(color, 0, 4)) {
          case "ncol": {
            if (color.split(",").length == 4 && color.indexOf("ncola") == -1) {
              color = color.replace("ncol", "ncola");
            }
            typ = "ncol";
            color = color.substr(4);
            return true;
          }
          case "cmyk": {
            typ = "cmyk";
            color = color.substr(4);
            return true;
          }
        }
        switch (Substr(color, 0, 5)) {
          case "oklab":
          case "oklch": {
            typ = Substr(color, 0, 5);
            color = color.substr(5);
            return true;
          }
        }
        return false;
      })
    ) {
      var arrlength = 3;
      var opacity = false;
      if (Substr(color, 0, 1).toLowerCase() === "a") {
        arrlength = 4;
        opacity = true;
        color = color.substr(1);
      } else if (typ == "cmyk") {
        arrlength = 4;
        if (color.split(",").length == 5) {
          arrlength = 5;
          opacity = true;
        }
      }
      color = color.replace("(", "");
      color = color.replace(")", "");
      var arrStr = color.split(",");
      arr = [];
      if (typ == "rgb") {
        if (arrStr.length != arrlength) {
          return new Color();
        }
        for (var i = 0; i < arrlength; i++) {
          if (arrStr[i] == "" || arrStr[i] == " ") {
            arrStr[i] = "0";
          }
          if (i < 3) {
            if (arrStr[i].indexOf("%") > -1) {
              arrStr[i] = arrStr[i].replace("%", "");
              arr[i] = Number(arrStr[i]) / 100;
              arr[i] = Math.round(arr[i] * 255);
            } else {
              arr[i] =
                Number(arrStr[i]) > 255 ? 255 : Math.round(Number(arrStr[i]));
            }
          }
          if (i == 3) {
            arr[i] = Number(arrStr[i]);
            if (arr[i] > 1) {
              arr[i] = 1;
            }
          }
        }
        rgb = [arr[0], arr[1], arr[2]];
        if (opacity == true) {
          a = arr[3];
        }
      } else if (
        typ == "lab" ||
        typ == "oklab" ||
        typ == "lch" ||
        typ == "oklch" ||
        typ == "xyz"
      ) {
        if (arrStr.length < arrlength) {
          var tmp = [];
          for (var i = 0; i < arrlength; i++) {
            if (i < arrStr.length) tmp[i] = arrStr[i];
            else tmp[i] = "0";
          }
          arrStr = tmp;
        }
        for (var i = 0; i < arrlength; i++) {
          if (arrStr[i].indexOf("%") > -1) {
            arrStr[i] = arrStr[i].replace("%", "");
            if (isNaN(Number(arrStr[i]))) {
              return new Color();
            }
            arr[i] = Number(arrStr[i]);
            if (typ == "lab") {
              arr[i] *= i == 0 ? 1 : 1.25;
            } else if (typ == "lch") {
              if (i == 1) arr[i] *= 1.5;
            } else if (typ == "oklab") {
              arr[i] *= i == 0 ? 0.01 : 0.004;
            } else if (typ == "oklch") {
              if (i == 0) arr[i] *= 0.01;
              else if (i == 1) arr[i] *= 0.004;
            } else if (typ == "xyz") {
              arr[i] *= 0.01;
            }
          } else arr[i] = Number(arrStr[i]);
        }
        var d65 = [];
        if (typ == "lab") {
          lab = [arr[0], arr[1], arr[2]];
          var d50 = Lab_to_XYZ(lab);
          d65 = D50_to_D65(d50);
        } else if (typ == "oklab") {
          oklab = [arr[0], arr[1], arr[2]];
          d65 = OKLab_to_XYZ(oklab);
        } else if (typ == "lch") {
          lch = [arr[0], arr[1], arr[2]];
          lab = LCH_to_Lab(lch);
          var d50 = Lab_to_XYZ(lab);
          d65 = D50_to_D65(d50);
        } else if (typ == "oklch") {
          oklch = [arr[0], arr[1], arr[2]];
          oklab = OKLCH_to_OKLab(oklch);
          d65 = OKLab_to_XYZ(oklab);
        } else if (typ == "xyz") {
          d65 = [arr[0], arr[1], arr[2]];
        }
        if (d65 != null) xyz = d65;
        rgb = gam_sRGB(XYZ_to_lin_sRGB(d65)).map(function (val) {
          return val < 0 ? 0 : val > 1 ? 255 : Math.round(val * 255);
        });
      } else if (
        typ == "hsl" ||
        typ == "hsv" ||
        typ == "hwb" ||
        typ == "ncol"
      ) {
        if (arrStr.length < arrlength) {
          var tmp = [];
          for (var i = 0; i < arrlength; i++) {
            if (i < arrStr.length) tmp[i] = arrStr[i];
            else tmp[i] = "0";
          }
          arrStr = tmp;
        }
        if (typ == "hsl" || typ == "hwb" || typ == "hsv") {
          if (Number(arrStr[0]) >= 360) {
            arr[0] = 0;
          }
        }
        for (var i = 1; i < arrlength; i++) {
          if (arrStr[i].indexOf("%") > -1) {
            arrStr[i] = arrStr[i].replace("%", "");
            if (isNaN(Number(arrStr[i]))) {
              return new Color();
            }
            arr[i] = Number(arrStr[i]);
            arr[i] = arr[i] / 100;
          } else {
            arr[i] = Number(arrStr[i]);
          }
          if (arr[i] > 1) {
            arr[i] = 1;
          }
          if (arr[i] < 0) {
            arr[i] = 0;
          }
        }
        if (typ == "hsl") {
          hsl = [Number(arrStr[0]), arr[1], arr[2]];
          rgb = HslToRgb(hsl[0], hsl[1], hsl[2]);
        }
        if (typ == "hsv") {
          hsv = [Number(arrStr[0]), arr[1], arr[2]];
          hsl = HsvToHsl(hsv);
          rgb = HslToRgb(hsl[0], hsl[1], hsl[2]);
        }
        if (typ == "hwb") {
          hwb = [Number(arrStr[0]), arr[1], arr[2]];
          rgb = HwbToRgb(hwb[0], hwb[1], hwb[2]);
        }
        if (typ == "ncol") {
          rgb = NcolToRgb(arrStr[0], arr[1], arr[2]);
        }
        if (opacity == true) {
          a = arr[3];
        }
      }
      if (typ == "cmyk") {
        if (arrStr.length < arrlength) {
          var tmp = [];
          for (var i = 0; i < arrlength; i++) {
            if (i < arrStr.length) tmp[i] = arrStr[i];
            else tmp[i] = "0";
          }
          arrStr = tmp;
        }
        for (var i = 0; i < arrlength; i++) {
          if (arrStr[i].indexOf("%") > -1) {
            arrStr[i] = arrStr[i].replace("%", "");
            arr[i] = Number(arrStr[i]);
            if (isNaN(Number(arrStr[i]))) {
              return new Color();
            }
            arr[i] = arr[i] / 100;
          } else {
            arr[i] = Number(arrStr[i]);
          }
          if (arr[i] > 1) {
            arr[i] = 1;
          }
          if (arr[i] < 0) {
            arr[i] = 0;
          }
        }
        cmyk = arr;
        rgb = CmykToRgb(cmyk[0], cmyk[1], cmyk[2], cmyk[3]);
        if (opacity == true) {
          a = arr[4];
        }
      }
    } else if (Substr(color, 0, 3) == "ncs") {
      rgb = NcsToRgb(color);
    } else {
      var match = false;
      var colornames = GetColorArr("names");
      for (var i = 0; i < colornames.length; i++) {
        if (color.toLowerCase() == colornames[i].toLowerCase()) {
          var colorhexs = GetColorArr("hexs");
          match = true;
          rgb = [
            parseInt(colorhexs[i].substr(0, 2), 16),
            parseInt(colorhexs[i].substr(2, 2), 16),
            parseInt(colorhexs[i].substr(4, 2), 16),
          ];
          break;
        }
      }
      if (match == false) {
        rgb = [];
        color = color.replace("#", "");
        if (color.length == 3) {
          color =
            Substr(color, 0, 1) +
            Substr(color, 0, 1) +
            Substr(color, 1, 1) +
            Substr(color, 1, 1) +
            Substr(color, 2, 1) +
            Substr(color, 2, 1);
        }
        for (var i = 0; i < color.length; i++) {
          if (!IsHex(Substr(color, i, 1))) {
            return new Color();
          }
        }
        rgb[0] = parseInt(color.substr(0, 2), 16);
        rgb[1] = parseInt(color.substr(2, 2), 16);
        rgb[2] = parseInt(color.substr(4, 2), 16);
      }
    }
    return ColorObject(
      rgb,
      a,
      hsl,
      hsv,
      hwb,
      cmyk,
      lab,
      oklab,
      lch,
      oklch,
      xyz
    );
  }
  function ColorObject(
    rgb,
    a,
    hsl,
    hsv,
    hwb,
    cmyk,
    lab,
    oklab,
    lch,
    oklch,
    xyz
  ) {
    if (rgb.length == 0) {
      return new Color();
    }
    rgb = rgb.map(function (val) {
      return Math.round(val);
    });
    var sRgb = rgb.map(function (val) {
      return val / 255;
    });
    var d65 = lin_sRGB_to_XYZ(lin_sRGB(sRgb));
    var d50 = D65_to_D50(d65);
    if (lab.length == 0) lab = XYZ_to_Lab(d50);
    if (oklab.length == 0) oklab = XYZ_to_OKLab(d65);
    if (lch.length == 0) lch = Lab_to_LCH(lab);
    if (oklch.length == 0) oklch = OKLab_to_OKLCH(oklab);
    if (hsl.length == 0) hsl = SRgbToHsl(sRgb);
    if (hsv.length == 0) hsv = HslToHsv(hsl);
    if (hwb.length == 0) hwb = SRgbToHwb(sRgb, hsl);
    if (cmyk.length == 0) cmyk = SRgbToCmyk(sRgb);
    if (xyz.length == 0) xyz = D50_to_D65(Lab_to_XYZ(lab));
    var hue = hsl[0];
    var ncol = HueToNcol(hue);
    var color = new Color();
    color.rgb = rgb;
    color.hsl = hsl.map(function (c) {
      return Number(c.toFixed(3));
    });
    color.hsv = hsv.map(function (c) {
      return Number(c.toFixed(3));
    });
    color.hwb = hwb.map(function (c) {
      return Number(c.toFixed(3));
    });
    color.cmyk = cmyk.map(function (c) {
      return Number(c.toFixed(3));
    });
    color.ncol = ncol.substr(0, 1) + Math.round(Number(ncol.substr(1)));
    color.lab = lab.map(function (c) {
      return Number(c.toFixed(3));
    });
    color.oklab = oklab.map(function (c) {
      return Number(c.toFixed(3));
    });
    color.lch = lch.map(function (c) {
      return Number(c.toFixed(3));
    });
    color.oklch = oklch.map(function (c) {
      return Number(c.toFixed(3));
    });
    color.xyz = xyz.map(function (c) {
      return Number(c.toFixed(3));
    });
    color.opacity = Number(a.toFixed(3));
    color.valid = true;
    return color;
  }
  function GetColorArr(x) {
    if (x == "names")
      return [
        "AliceBlue",
        "AntiqueWhite",
        "Aqua",
        "Aquamarine",
        "Azure",
        "Beige",
        "Bisque",
        "Black",
        "BlanchedAlmond",
        "Blue",
        "BlueViolet",
        "Brown",
        "BurlyWood",
        "CadetBlue",
        "Chartreuse",
        "Chocolate",
        "Coral",
        "CornflowerBlue",
        "Cornsilk",
        "Crimson",
        "Cyan",
        "DarkBlue",
        "DarkCyan",
        "DarkGoldenRod",
        "DarkGray",
        "DarkGrey",
        "DarkGreen",
        "DarkKhaki",
        "DarkMagenta",
        "DarkOliveGreen",
        "DarkOrange",
        "DarkOrchid",
        "DarkRed",
        "DarkSalmon",
        "DarkSeaGreen",
        "DarkSlateBlue",
        "DarkSlateGray",
        "DarkSlateGrey",
        "DarkTurquoise",
        "DarkViolet",
        "DeepPink",
        "DeepSkyBlue",
        "DimGray",
        "DimGrey",
        "DodgerBlue",
        "FireBrick",
        "FloralWhite",
        "ForestGreen",
        "Fuchsia",
        "Gainsboro",
        "GhostWhite",
        "Gold",
        "GoldenRod",
        "Gray",
        "Grey",
        "Green",
        "GreenYellow",
        "HoneyDew",
        "HotPink",
        "IndianRed",
        "Indigo",
        "Ivory",
        "Khaki",
        "Lavender",
        "LavenderBlush",
        "LawnGreen",
        "LemonChiffon",
        "LightBlue",
        "LightCoral",
        "LightCyan",
        "LightGoldenRodYellow",
        "LightGray",
        "LightGrey",
        "LightGreen",
        "LightPink",
        "LightSalmon",
        "LightSeaGreen",
        "LightSkyBlue",
        "LightSlateGray",
        "LightSlateGrey",
        "LightSteelBlue",
        "LightYellow",
        "Lime",
        "LimeGreen",
        "Linen",
        "Magenta",
        "Maroon",
        "MediumAquaMarine",
        "MediumBlue",
        "MediumOrchid",
        "MediumPurple",
        "MediumSeaGreen",
        "MediumSlateBlue",
        "MediumSpringGreen",
        "MediumTurquoise",
        "MediumVioletRed",
        "MidnightBlue",
        "MintCream",
        "MistyRose",
        "Moccasin",
        "NavajoWhite",
        "Navy",
        "OldLace",
        "Olive",
        "OliveDrab",
        "Orange",
        "OrangeRed",
        "Orchid",
        "PaleGoldenRod",
        "PaleGreen",
        "PaleTurquoise",
        "PaleVioletRed",
        "PapayaWhip",
        "PeachPuff",
        "Peru",
        "Pink",
        "Plum",
        "PowderBlue",
        "Purple",
        "RebeccaPurple",
        "Red",
        "RosyBrown",
        "RoyalBlue",
        "SaddleBrown",
        "Salmon",
        "SandyBrown",
        "SeaGreen",
        "SeaShell",
        "Sienna",
        "Silver",
        "SkyBlue",
        "SlateBlue",
        "SlateGray",
        "SlateGrey",
        "Snow",
        "SpringGreen",
        "SteelBlue",
        "Tan",
        "Teal",
        "Thistle",
        "Tomato",
        "Turquoise",
        "Violet",
        "Wheat",
        "White",
        "WhiteSmoke",
        "Yellow",
        "YellowGreen",
      ];
    if (x == "hexs")
      return [
        "f0f8ff",
        "faebd7",
        "00ffff",
        "7fffd4",
        "f0ffff",
        "f5f5dc",
        "ffe4c4",
        "000000",
        "ffebcd",
        "0000ff",
        "8a2be2",
        "a52a2a",
        "deb887",
        "5f9ea0",
        "7fff00",
        "d2691e",
        "ff7f50",
        "6495ed",
        "fff8dc",
        "dc143c",
        "00ffff",
        "00008b",
        "008b8b",
        "b8860b",
        "a9a9a9",
        "a9a9a9",
        "006400",
        "bdb76b",
        "8b008b",
        "556b2f",
        "ff8c00",
        "9932cc",
        "8b0000",
        "e9967a",
        "8fbc8f",
        "483d8b",
        "2f4f4f",
        "2f4f4f",
        "00ced1",
        "9400d3",
        "ff1493",
        "00bfff",
        "696969",
        "696969",
        "1e90ff",
        "b22222",
        "fffaf0",
        "228b22",
        "ff00ff",
        "dcdcdc",
        "f8f8ff",
        "ffd700",
        "daa520",
        "808080",
        "808080",
        "008000",
        "adff2f",
        "f0fff0",
        "ff69b4",
        "cd5c5c",
        "4b0082",
        "fffff0",
        "f0e68c",
        "e6e6fa",
        "fff0f5",
        "7cfc00",
        "fffacd",
        "add8e6",
        "f08080",
        "e0ffff",
        "fafad2",
        "d3d3d3",
        "d3d3d3",
        "90ee90",
        "ffb6c1",
        "ffa07a",
        "20b2aa",
        "87cefa",
        "778899",
        "778899",
        "b0c4de",
        "ffffe0",
        "00ff00",
        "32cd32",
        "faf0e6",
        "ff00ff",
        "800000",
        "66cdaa",
        "0000cd",
        "ba55d3",
        "9370db",
        "3cb371",
        "7b68ee",
        "00fa9a",
        "48d1cc",
        "c71585",
        "191970",
        "f5fffa",
        "ffe4e1",
        "ffe4b5",
        "ffdead",
        "000080",
        "fdf5e6",
        "808000",
        "6b8e23",
        "ffa500",
        "ff4500",
        "da70d6",
        "eee8aa",
        "98fb98",
        "afeeee",
        "db7093",
        "ffefd5",
        "ffdab9",
        "cd853f",
        "ffc0cb",
        "dda0dd",
        "b0e0e6",
        "800080",
        "663399",
        "ff0000",
        "bc8f8f",
        "4169e1",
        "8b4513",
        "fa8072",
        "f4a460",
        "2e8b57",
        "fff5ee",
        "a0522d",
        "c0c0c0",
        "87ceeb",
        "6a5acd",
        "708090",
        "708090",
        "fffafa",
        "00ff7f",
        "4682b4",
        "d2b48c",
        "008080",
        "d8bfd8",
        "ff6347",
        "40e0d0",
        "ee82ee",
        "f5deb3",
        "ffffff",
        "f5f5f5",
        "ffff00",
        "9acd32",
      ];
    return [];
  }
  function HslToRgb(hue, sat, light) {
    hue = hue / 60;
    var t1, t2;
    if (light <= 0.5) {
      t2 = light * (sat + 1);
    } else {
      t2 = light + sat - light * sat;
    }
    t1 = light * 2 - t2;
    var r = HueToRgb(t1, t2, hue + 2) * 255;
    var g = HueToRgb(t1, t2, hue) * 255;
    var b = HueToRgb(t1, t2, hue - 2) * 255;
    return [r, g, b];
  }
  function HueToRgb(t1, t2, hue) {
    if (hue < 0) hue += 6;
    if (hue >= 6) hue -= 6;
    if (hue < 1) return (t2 - t1) * hue + t1;
    else if (hue < 3) return t2;
    else if (hue < 4) return (t2 - t1) * (4 - hue) + t1;
    else return t1;
  }
  function HwbToRgb(hue, white, black) {
    var rgb = HslToRgb(hue, 1, 0.5).map(function (val) {
      return val / 255;
    });
    var tot = white + black;
    if (tot > 1) {
      white = white / tot;
      black = black / tot;
    }
    for (var i = 0; i < 3; i++) {
      rgb[i] *= 1 - white - black;
      rgb[i] += white;
      rgb[i] = rgb[i] * 255;
    }
    return rgb.map(function (c) {
      return Math.round(c);
    });
  }
  function CmykToRgb(c, m, y, k) {
    var r = 255 - Math.min(1, c * (1 - k) + k) * 255;
    var g = 255 - Math.min(1, m * (1 - k) + k) * 255;
    var b = 255 - Math.min(1, y * (1 - k) + k) * 255;
    return [r, g, b].map(function (cl) {
      return Math.round(cl);
    });
  }
  function NcolToRgb(ncol, white, black) {
    var h = 0;
    if (isNaN(Number(Substr(ncol, 0, 1)))) {
      var letter = Substr(ncol, 0, 1).toUpperCase();
      var percent = ncol.substr(1) == "" ? 0 : Number(ncol.substr(1));
      if (letter == "R") {
        h = 0 + percent * 0.6;
      }
      if (letter == "Y") {
        h = 60 + percent * 0.6;
      }
      if (letter == "G") {
        h = 120 + percent * 0.6;
      }
      if (letter == "C") {
        h = 180 + percent * 0.6;
      }
      if (letter == "B") {
        h = 240 + percent * 0.6;
      }
      if (letter == "M") {
        h = 300 + percent * 0.6;
      }
      if (letter == "W") {
        h = 0;
        white = 1 - percent / 100;
        black = percent / 100;
      }
    } else h = Number(ncol);
    return HwbToRgb(h, white, black);
  }
  function HueToNcol(hue) {
    while (hue >= 360) {
      hue = hue - 360;
    }
    if (hue < 60) {
      return "R" + hue / 0.6;
    }
    if (hue < 120) {
      return "Y" + (hue - 60) / 0.6;
    }
    if (hue < 180) {
      return "G" + (hue - 120) / 0.6;
    }
    if (hue < 240) {
      return "C" + (hue - 180) / 0.6;
    }
    if (hue < 300) {
      return "B" + (hue - 240) / 0.6;
    }
    if (hue < 360) {
      return "M" + (hue - 300) / 0.6;
    }
    return "";
  }
  function NcsToRgb(ncs) {
    var black1,
      chroma1,
      red1 = 0,
      factor1,
      blue1 = 0,
      red2,
      green1 = 0,
      green2,
      blue2,
      max,
      factor2,
      grey,
      r,
      g,
      b;
    ncs = TrimSpaces(ncs).toUpperCase();
    ncs = ncs.replace("(", "");
    ncs = ncs.replace(")", "");
    ncs = ncs.replace("NCS", "NCS ");
    ncs = ncs.replace("  ", " ");
    if (ncs.indexOf("NCS") == -1) {
      ncs = "NCS " + ncs;
    }
    var matchs = ncs.match(
      /^(?:NCS|NCS\sS)\s(\d{2})(\d{2})-(N|[A-Z])(\d{2})?([A-Z])?$/
    );
    if (matchs === null) return [];
    var grs = matchs;
    var black = parseInt(grs[1]);
    var chroma = parseInt(grs[2]);
    var bc = grs[3];
    if (bc != "N" && bc != "Y" && bc != "R" && bc != "B" && bc != "G") {
      return [];
    }
    var percent = parseInt(grs[4]);
    if (bc != "N") {
      black1 = 1.05 * black - 5.25;
      chroma1 = chroma;
      if (bc == "Y" && percent <= 60) {
        red1 = 1;
      } else if ((bc == "Y" && percent > 60) || (bc == "R" && percent <= 80)) {
        if (bc == "Y") {
          factor1 = percent - 60;
        } else {
          factor1 = percent + 40;
        }
        red1 = (Math.sqrt(14884 - Math.pow(factor1, 2)) - 22) / 100;
      } else if ((bc == "R" && percent > 80) || bc == "B") {
        red1 = 0;
      } else if (bc == "G") {
        factor1 = percent - 170;
        red1 = (Math.sqrt(33800 - Math.pow(factor1, 2)) - 70) / 100;
      }
      if (bc == "Y" && percent <= 80) {
        blue1 = 0;
      } else if ((bc == "Y" && percent > 80) || (bc == "R" && percent <= 60)) {
        if (bc == "Y") {
          factor1 = percent - 80 + 20.5;
        } else {
          factor1 = percent + 20 + 20.5;
        }
        blue1 = (104 - Math.sqrt(11236 - Math.pow(factor1, 2))) / 100;
      } else if ((bc == "R" && percent > 60) || (bc == "B" && percent <= 80)) {
        if (bc == "R") {
          factor1 = percent - 60 - 60;
        } else {
          factor1 = percent + 40 - 60;
        }
        blue1 = (Math.sqrt(10000 - Math.pow(factor1, 2)) - 10) / 100;
      } else if ((bc == "B" && percent > 80) || (bc == "G" && percent <= 40)) {
        if (bc == "B") {
          factor1 = percent - 80 - 131;
        } else {
          factor1 = percent + 20 - 131;
        }
        blue1 = (122 - Math.sqrt(19881 - Math.pow(factor1, 2))) / 100;
      } else if (bc == "G" && percent > 40) {
        blue1 = 0;
      }
      if (bc == "Y") {
        green1 = (85 - (17 / 20) * percent) / 100;
      } else if (bc == "R" && percent <= 60) {
        green1 = 0;
      } else if (bc == "R" && percent > 60) {
        factor1 = percent - 60 + 35;
        green1 = (67.5 - Math.sqrt(5776 - Math.pow(factor1, 2))) / 100;
      } else if (bc == "B" && percent <= 60) {
        factor1 = 1 * percent - 68.5;
        green1 = (6.5 + Math.sqrt(7044.5 - Math.pow(factor1, 2))) / 100;
      } else if ((bc == "B" && percent > 60) || (bc == "G" && percent <= 60)) {
        green1 = 0.9;
      } else if (bc == "G" && percent > 60) {
        factor1 = percent - 60;
        green1 = (90 - (1 / 8) * factor1) / 100;
      }
      factor1 = (red1 + green1 + blue1) / 3;
      red2 = ((factor1 - red1) * (100 - chroma1)) / 100 + red1;
      green2 = ((factor1 - green1) * (100 - chroma1)) / 100 + green1;
      blue2 = ((factor1 - blue1) * (100 - chroma1)) / 100 + blue1;
      if (red2 > green2 && red2 > blue2) {
        max = red2;
      } else if (green2 > red2 && green2 > blue2) {
        max = green2;
      } else if (blue2 > red2 && blue2 > green2) {
        max = blue2;
      } else {
        max = (red2 + green2 + blue2) / 3;
      }
      factor2 = 1 / max;
      r = ((red2 * factor2 * (100 - black1)) / 100) * 255;
      g = ((green2 * factor2 * (100 - black1)) / 100) * 255;
      b = ((blue2 * factor2 * (100 - black1)) / 100) * 255;
      if (r > 255) {
        r = 255;
      }
      if (g > 255) {
        g = 255;
      }
      if (b > 255) {
        b = 255;
      }
      if (r < 0) {
        r = 0;
      }
      if (g < 0) {
        g = 0;
      }
      if (b < 0) {
        b = 0;
      }
    } else {
      grey = (1 - black / 100) * 255;
      if (grey > 255) {
        grey = 255;
      }
      if (grey < 0) {
        grey = 0;
      }
      r = grey;
      g = grey;
      b = grey;
    }
    return [r, g, b].map(function (c) {
      return Math.round(c);
    });
  }
  function SRgbToHsl(sRgb) {
    var min,
      max,
      l,
      s,
      maxcolor,
      h = 0;
    min = sRgb[0];
    max = sRgb[0];
    maxcolor = 0;
    for (var i = 0; i < sRgb.length - 1; i++) {
      if (sRgb[i + 1] <= min) {
        min = sRgb[i + 1];
      }
      if (sRgb[i + 1] >= max) {
        max = sRgb[i + 1];
        maxcolor = i + 1;
      }
    }
    if (maxcolor == 0) {
      h = (sRgb[1] - sRgb[2]) / (max - min);
    }
    if (maxcolor == 1) {
      h = 2 + (sRgb[2] - sRgb[0]) / (max - min);
    }
    if (maxcolor == 2) {
      h = 4 + (sRgb[0] - sRgb[1]) / (max - min);
    }
    h *= 60;
    if (h < 0) {
      h += 360;
    }
    l = (min + max) / 2;
    if (min == max) {
      s = 0;
    } else {
      if (l < 0.5) {
        s = (max - min) / (max + min);
      } else {
        s = (max - min) / (2 - max - min);
      }
    }
    return [h, s, l];
  }
  function SRgbToHwb(sRgb, hsl) {
    var white = Math.min(sRgb[0], sRgb[1], sRgb[2]);
    var black = 1 - Math.max(sRgb[0], sRgb[1], sRgb[2]);
    return [hsl[0], white, black];
  }
  function SRgbToCmyk(sRgb) {
    var c, m, y, k;
    var r = sRgb[0];
    var g = sRgb[1];
    var b = sRgb[2];
    var max = Math.max(r, g, b);
    k = 1 - max;
    if (k == 1) {
      c = 0;
      m = 0;
      y = 0;
    } else {
      c = (1 - r - k) / (1 - k);
      m = (1 - g - k) / (1 - k);
      y = (1 - b - k) / (1 - k);
    }
    return [c, m, y, k];
  }
  function ToHex(n) {
    var hex = n.toString(16);
    while (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  }
  function TrimSpaces(x) {
    return x.replace(/^\s+|\s+$/g, "");
  }
  function IsHex(x) {
    return "0123456789ABCDEFabcdef".indexOf(x) > -1;
  }
  function HslToHsv(hsl) {
    var hslH = hsl[0],
      hslS = hsl[1],
      hslL = hsl[2];
    var hsv1 = (hslS * (hslL < 50 ? hslL : 100 - hslL)) / 100;
    var hsvS = hsv1 === 0 ? 0 : ((2 * hsv1) / (hslL + hsv1)) * 100;
    var hsvV = hslL + hsv1;
    return [hslH, hsvS, hsvV];
  }
  function HsvToHsl(hsv) {
    var hsvH = hsv[0],
      hsvS = hsv[1],
      hsvV = hsv[2];
    var hslL = ((200 - hsvS) * hsvV) / 100;
    var _a = [
        hslL === 0 || hslL === 200
          ? 0
          : ((hsvS * hsvV) / 100 / (hslL <= 100 ? hslL : 200 - hslL)) * 100,
        (hslL * 5) / 10,
      ],
      hslS = _a[0],
      hslV = _a[1];
    return [hsvH, hslS, hslV];
  }
  var D50 = [0.3457 / 0.3585, 1.0, (1.0 - 0.3457 - 0.3585) / 0.3585];
  function lin_sRGB(RGB) {
    return RGB.map(function (val) {
      var sign = val < 0 ? -1 : 1;
      var abs = Math.abs(val);
      if (abs < 0.04045) {
        return val / 12.92;
      }
      return sign * Math.pow((abs + 0.055) / 1.055, 2.4);
    });
  }
  function gam_sRGB(RGB) {
    return RGB.map(function (val) {
      var sign = val < 0 ? -1 : 1;
      var abs = Math.abs(val);
      if (abs > 0.0031308) {
        return sign * (1.055 * Math.pow(abs, 1 / 2.4) - 0.055);
      }
      return 12.92 * val;
    });
  }
  function multiplyMatrices(a, b) {
    var aRows = a.length;
    var aColumns = a[0].length;
    var bRows = b.length;
    var c = [0, 0, 0];
    for (var i = 0; i < aRows; i++)
      for (var j = 0; j < aColumns; j++) c[i] += a[i][j] * b[j];
    return c;
  }
  function lin_sRGB_to_XYZ(rgb) {
    var M = [
      [0.41239079926595934, 0.357584339383878, 0.1804807884018343],
      [0.21263900587151027, 0.715168678767756, 0.07219231536073371],
      [0.01933081871559182, 0.11919477979462598, 0.9505321522496607],
    ];
    return multiplyMatrices(M, rgb);
  }
  function XYZ_to_lin_sRGB(XYZ) {
    var M = [
      [3.2409699419045226, -1.537383177570094, -0.4986107602930034],
      [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559],
      [0.05563007969699366, -0.20397695888897652, 1.0569715142428786],
    ];
    return multiplyMatrices(M, XYZ);
  }
  function D65_to_D50(XYZ) {
    var M = [
      [1.0479298208405488, 0.022946793341019088, -0.05019222954313557],
      [0.029627815688159344, 0.990434484573249, -0.01707382502938514],
      [-0.009243058152591178, 0.015055144896577895, 0.7518742899580008],
    ];
    return multiplyMatrices(M, XYZ);
  }
  function D50_to_D65(XYZ) {
    var M = [
      [0.9554734527042182, -0.023098536874261423, 0.0632593086610217],
      [-0.028369706963208136, 1.0099954580058226, 0.021041398966943008],
      [0.012314001688319899, -0.020507696433477912, 1.3303659366080753],
    ];
    return multiplyMatrices(M, XYZ);
  }
  function XYZ_to_Lab(XYZ) {
    var ε = 216 / 24389;
    var κ = 24389 / 27;
    var xyz = XYZ.map(function (value, i) {
      return value / D50[i];
    });
    var f = xyz.map(function (value) {
      return value > ε ? Math.cbrt(value) : (κ * value + 16) / 116;
    });
    return [116 * f[1] - 16, 500 * (f[0] - f[1]), 200 * (f[1] - f[2])];
  }
  function Lab_to_XYZ(Lab) {
    var κ = 24389 / 27;
    var ε = 216 / 24389;
    var f = [];
    f[1] = (Lab[0] + 16) / 116;
    f[0] = Lab[1] / 500 + f[1];
    f[2] = f[1] - Lab[2] / 200;
    var xyz = [
      Math.pow(f[0], 3) > ε ? Math.pow(f[0], 3) : (116 * f[0] - 16) / κ,
      Lab[0] > κ * ε ? Math.pow((Lab[0] + 16) / 116, 3) : Lab[0] / κ,
      Math.pow(f[2], 3) > ε ? Math.pow(f[2], 3) : (116 * f[2] - 16) / κ,
    ];
    return xyz.map(function (value, i) {
      return value * D50[i];
    });
  }
  function Lab_to_LCH(Lab) {
    var hue = (Math.atan2(Lab[2], Lab[1]) * 180) / Math.PI;
    return [
      Lab[0],
      Math.sqrt(Math.pow(Lab[1], 2) + Math.pow(Lab[2], 2)),
      hue >= 0 ? hue : hue + 360,
    ];
  }
  function LCH_to_Lab(LCH) {
    return [
      LCH[0],
      LCH[1] * Math.cos((LCH[2] * Math.PI) / 180),
      LCH[1] * Math.sin((LCH[2] * Math.PI) / 180),
    ];
  }
  function XYZ_to_OKLab(XYZ) {
    var XYZtoLMS = [
      [0.8190224432164319, 0.3619062562801221, -0.12887378261216414],
      [0.0329836671980271, 0.9292868468965546, 0.03614466816999844],
      [0.048177199566046255, 0.26423952494422764, 0.6335478258136937],
    ];
    var LMStoOKLab = [
      [0.2104542553, 0.793617785, -0.0040720468],
      [1.9779984951, -2.428592205, 0.4505937099],
      [0.0259040371, 0.7827717662, -0.808675766],
    ];
    var LMS = multiplyMatrices(XYZtoLMS, XYZ);
    return multiplyMatrices(
      LMStoOKLab,
      LMS.map(function (c) {
        return Math.cbrt(c);
      })
    );
  }
  function OKLab_to_XYZ(OKLab) {
    var LMStoXYZ = [
      [1.2268798733741557, -0.5578149965554813, 0.28139105017721583],
      [-0.04057576262431372, 1.1122868293970594, -0.07171106666151701],
      [-0.07637294974672142, -0.4214933239627914, 1.5869240244272418],
    ];
    var OKLabtoLMS = [
      [0.99999999845051981432, 0.39633779217376785678, 0.21580375806075880339],
      [1.0000000088817607767, -0.1055613423236563494, -0.063854174771705903402],
      [1.0000000546724109177, -0.089484182094965759684, -1.2914855378640917399],
    ];
    var LMSnl = multiplyMatrices(OKLabtoLMS, OKLab);
    return multiplyMatrices(
      LMStoXYZ,
      LMSnl.map(function (c) {
        return Math.pow(c, 3);
      })
    );
  }
  function OKLab_to_OKLCH(OKLab) {
    var hue = (Math.atan2(OKLab[2], OKLab[1]) * 180) / Math.PI;
    return [
      OKLab[0],
      Math.sqrt(Math.pow(OKLab[1], 2) + Math.pow(OKLab[2], 2)),
      hue >= 0 ? hue : hue + 360,
    ];
  }
  function OKLCH_to_OKLab(OKLCH) {
    return [
      OKLCH[0],
      OKLCH[1] * Math.cos((OKLCH[2] * Math.PI) / 180),
      OKLCH[1] * Math.sin((OKLCH[2] * Math.PI) / 180), // b
    ];
  }
  function convertColor(cl, format) {
    switch (format) {
      case "rgb":
        return cl.ToRgbString();
      case "hex":
        return cl.ToHexString();
      case "hsl":
        return cl.ToHslString();
      case "hsv":
        return cl.ToHsvString();
      case "hwb":
        return cl.ToHwbString();
      case "cmyk":
        return cl.ToCmykString();
      case "lab":
        return cl.ToLabString();
      case "oklab":
        return cl.ToOkLabString();
      case "lch":
        return cl.ToLchString();
      case "oklch":
        return cl.ToOkLchString();
      case "xyz":
        return cl.ToXyzString();
      case "ncol":
        return cl.ToNcolString();
      case "rgba":
        return cl.ToRgbaString();
      case "hsla":
        return cl.ToHslaString();
      case "hsva":
        return cl.ToHsvaString();
      case "hwba":
        return cl.ToHwbaString();
      case "name":
        return cl.ToName();
    }
    return "";
  }
  ////////////////////////////////////////////////////////////////////////

  var registrator = (function () {
    var core = {
      initialized: false,
      className: "AppSvgColor",

      register: function () {
        if (typeof window !== "undefined" && window.document) {
          window.document.addEventListener(
            "DOMContentLoaded",
            core.class.init,
            false
          );
        }
      },

      getColorString: function (color, format) {
        if (format == "HEX") return color.ToHexString();
        else if (format == "RGB") return color.ToRgbString();
        else if (format == "NCOL") return color.ToNcolString();
        else if (format == "CMYK") return color.ToCmykString();
        else if (format == "HSL") return color.ToHslString();
        else if (format == "HWB") return color.ToHwbString();
        else if (format == "LAB") return color.ToLabString();
        else if (format == "OKLAB") return color.ToOkLabString();
        else if (format == "LCH") return color.ToLchString();
        else if (format == "OKLCH") return color.ToOkLchString();
        else if (format == "HSV") return color.ToHsvString();
        else if (format == "XYZ") return color.ToXyzString();
      },

      class: function (targetElement) {
        var app = {
          className: core.className,
          addEventListener: addEventListener,
          removeEventListener: removeEventListener,
          target: targetElement,
          bindInputFieldContainer: bindInputFieldContainer,
          bindOutputFieldContainer: bindOutputFieldContainer,
          selectedColor: ConvertFrom('#7FFFD4'),
        };

        function addEventListener(type, listener, useCapture, wantsUntrusted) {
          return targetElement.addEventListener(
            type,
            listener,
            useCapture,
            wantsUntrusted
          );
        }

        function dispatchEvent(event) {
          return targetElement.dispatchEvent(event);
        }

        function removeEventListener(type, listener, useCapture) {
          return targetElement.removeEventListener(type, listener, useCapture);
        }

        function draw() {
          var targetElement = app.target;
          while (targetElement.firstChild) {
            targetElement.removeChild(targetElement.lastChild);
          }
          var canvas = (app.canvas = window.document.createElement("canvas"));
          canvas.className = "colorPallete";
          var context = app.canvas.getContext("2d");

          var gradient = context.createLinearGradient(0, 0, canvas.width, 0);

          // Create color gradient
          gradient.addColorStop(0, "rgb(255,   0,   0)");
          gradient.addColorStop(0.15, "rgb(255,   0, 255)");
          gradient.addColorStop(0.33, "rgb(0,     0, 255)");
          gradient.addColorStop(0.49, "rgb(0,   255, 255)");
          gradient.addColorStop(0.67, "rgb(0,   255,   0)");
          gradient.addColorStop(0.84, "rgb(255, 255,   0)");
          gradient.addColorStop(1, "rgb(255,   0,   0)");
          // Apply gradient to canvas
          context.fillStyle = gradient;
          context.fillRect(0, 0, canvas.width, canvas.height);

          // Create semi transparent gradient (white -> trans. -> black)
          gradient = context.createLinearGradient(0, 0, 0, canvas.height);
          gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
          gradient.addColorStop(0.5, "rgba(255, 255, 255, 0)");
          gradient.addColorStop(0.5, "rgba(0,     0,   0, 0)");
          gradient.addColorStop(1, "rgba(0,     0,   0, 1)");
          // Apply gradient to canvas
          context.fillStyle = gradient;
          context.fillRect(0, 0, canvas.width, canvas.height);

          var preview = (app.preview = window.document.createElement("canvas"));
          preview.className = "colorPickerPreview";
          targetElement.appendChild(preview);
          targetElement.appendChild(canvas);

          setColor(app.selectedColor);
        }

        function enableEvents() {
          var drag = false;
          function mousedown(e) {
            drag = true;
            changeColor(e);
          }

          function mousemove(e) {
            if (drag) {
              changeColor(e);
            }
          }

          function mouseup(e) {
            drag = false;
          }

          var canvas = app.canvas;
          var context = app.canvas.getContext("2d");
          var preview = app.preview;
          function changeColor(e) {
            var rect = canvas.getBoundingClientRect();

            x = e.clientX - rect.left;
            if (x < 0) x = 0;
            else if (x > rect.width) x = rect.width - 1;

            y = e.clientY - rect.top;
            if (y < 0) y = 0;
            else if (y > rect.height) y = rect.height - 1;

            var imageData = context.getImageData(x, y, 1, 1).data;
            setColor(
              ConvertFrom(
                "rgb(" +
                  imageData[0] +
                  "," +
                  imageData[1] +
                  "," +
                  imageData[2] +
                  ")"
              )
            );
          }

          canvas.addEventListener("mousedown", mousedown, false);
          document.addEventListener("mouseup", mouseup, false);
          document.addEventListener("mousemove", mousemove, false);
        }

        function setColor(color) {
          // if(rgb.alpha == undefined)
          //     rgb.alpha = 1.0;

          app.selectedColor = color;

          var ev = new CustomEvent("colorChanged", {
            detail: {
              color: app.selectedColor,
            },
          });

          app.target.dispatchEvent(ev);
          app.preview.style.backgroundColor = color.ToRgbaString();
        }

        function bindOutputFieldContainer(target, format) {
          while (target.firstChild) {
            target.removeChild(target.lastChild);
          }

          var container = window.document.createElement("div");
          container.className = "colorInputValueContainer flex-grow-1";
          target.appendChild(container);

          var label = window.document.createElement("label");
          label.className = "colorChannelLabel mw-100px";
          label.innerText = getFormatLabel(format);
          container.appendChild(label);

          var input = window.document.createElement("input");
          input.className = "colorInput";
          input.type = "text";
          input.readOnly = true;
          input.value = core.getColorString(app.selectedColor, format);
          container.appendChild(input);

          app.addEventListener("colorChanged", (e) => {
            input.value = core.getColorString(e.detail.color, format);
          });

          var copy = window.document.createElement("a");
          copy.className = "actionButton";
          copy.type = "button";
          copy.innerText = "copy";
          container.appendChild(copy);

          copy.addEventListener("click", (e) => {
            navigator.clipboard.writeText(input.value);
          });
        }

        function getFormatLabel(format) {
          return format;
        }

        function bindInputFieldContainer(target, format) {
          while (target.firstChild) {
            target.removeChild(target.lastChild);
          }
          var label = window.document.createElement("div");
          label.innerText = "Color Model:";
          label.className = "description flexEmptyLeft tae ";
          target.appendChild(label);

          var select = createColorTypeSelector();
          target.appendChild(select);
          select.addEventListener("change", (e) => {
            drawColorFormatFields(holder, e.target.value);
          });
          select.value = format;

          var _break = window.document.createElement("div");
          _break.className = "flexBreak";
          target.appendChild(_break);

          var holder = window.document.createElement("div");
          holder.className = "colorInputValueContainer flex-grow-1";
          target.appendChild(holder);

          drawColorFormatFields(holder, format);
        }

        function createColorTypeSelector() {
          var types = ["HEX", "RGB", "NCOL", "CMYK", "HSL", "HWB", "LAB", "OKLAB", "LCH", "OKLCH", "HSV", "XYZ"];

          var selectList = window.document.createElement("select");
          selectList.className = "colorSelect backgroundBlue";
          for (var i = 0; i < types.length; i++) {
            var option = document.createElement("option");
            option.value = types[i];
            option.text = types[i];
            selectList.appendChild(option);
          }

          return selectList;
        }

        function drawColorFormatFields(target, format) {
          while (target.firstChild) {
            target.removeChild(target.lastChild);
          }

          if (format == "HEX") drawHexFormat(target);
          else if (format == "RGB") drawRgbFormat(target);
          else if (format == "NCOL") drawNColFormat(target);
          else if (format == "CMYK") drawCmykFormat(target);
          else if (format == "HSL") drawHslFormat(target);
          else if (format == "HWB") drawHwbFormat(target);
          else if (format == "LAB") drawLabFormat(target);
          else if (format == "OKLAB") drawOkLabFormat(target);
          else if (format == "LCH") drawLchFormat(target);
          else if (format == "OKLCH") drawOkLchFormat(target);
          else if (format == "HSV") drawHsvFormat(target);
          else if (format == "XYZ") drawXyzFormat(target);
        }

        function drawHexFormat(target) {
          var label = window.document.createElement("label");
          label.className = "colorChannelLabel mw-100px";
          label.innerText = "HEX";
          target.appendChild(label);

          var input = window.document.createElement("input");
          input.className = "colorInput";
          input.type = "text";
          input.value = app.selectedColor.ToHexString();
          target.appendChild(input);

          var lock = false;
          app.addEventListener("colorChanged", (e) => {
            if (!lock) {
              input.value = e.detail.color.ToHexString();
            }
          });

          input.addEventListener("input", (e) => {
            lock = true;
            var c = ConvertFrom(input.value);
            if (c != undefined) {
              setColor(c);
            }
            lock = false;
          });
        }
        function drawNColFormat(target) {
            var label = window.document.createElement("label");
            label.className = "colorChannelLabel";
            label.innerText = "NCOL";
            target.appendChild(label);
  
            var input = window.document.createElement("input");
            input.className = "colorInput";
            input.type = "text";
            input.value = app.selectedColor.ToNcolString();
            target.appendChild(input);
  
            var lock = false;
            app.addEventListener("colorChanged", (e) => {
              if (!lock) {
                input.value = e.detail.color.ToNcolString();
              }
            });
  
            input.addEventListener("input", (e) => {
              lock = true;
              var c = ConvertFrom(input.value);
              if (c != undefined) {
                setColor(c);
              }
              lock = false;
            });
          }
        function drawRgbFormat(target) {
            drawColor(
                target,
                app.selectedColor.rgb,
                "RGB",
                (i) => app.selectedColor.rgb[i],
                (i, val) =>
                  "rgb(" +
                  (i == 0 ? val : app.selectedColor.rgb[0]) +
                  "," +
                  (i == 1 ? val : app.selectedColor.rgb[1]) +
                  "," +
                  (i == 2 ? val : app.selectedColor.rgb[2]) +
                  ")"
              );
        }
        function drawHslFormat(target) {
            drawColor(
                target,
                app.selectedColor.hsl,
                "HSL",
                (i) => app.selectedColor.hsl[i],
                (i, val) =>
                  "hsl(" +
                  (i == 0 ? val : app.selectedColor.hsl[0]) +
                  "," +
                  (i == 1 ? val : app.selectedColor.hsl[1]) +
                  "," +
                  (i == 2 ? val : app.selectedColor.hsl[2]) +
                  ")"
              );
        }
        function drawHwbFormat(target) {
            drawColor(
                target,
                app.selectedColor.hwb,
                "HWB",
                (i) => app.selectedColor.hwb[i],
                (i, val) =>
                  "hwb(" +
                  (i == 0 ? val : app.selectedColor.hwb[0]) +
                  "," +
                  (i == 1 ? val : app.selectedColor.hwb[1]) +
                  "," +
                  (i == 2 ? val : app.selectedColor.hwb[2]) +
                  ")"
              );
        }
        function drawLabFormat(target) {
            drawColor(
                target,
                app.selectedColor.lab,
                "LAB",
                (i) => app.selectedColor.lab[i],
                (i, val) =>
                  "lab(" +
                  (i == 0 ? val : app.selectedColor.lab[0]) +
                  "," +
                  (i == 1 ? val : app.selectedColor.lab[1]) +
                  "," +
                  (i == 2 ? val : app.selectedColor.lab[2]) +
                  ")"
              );
        }
        function drawOkLabFormat(target) {
            drawColor(
                target,
                app.selectedColor.oklab,
                "LAB",
                (i) => app.selectedColor.oklab[i],
                (i, val) =>
                  "oklab(" +
                  (i == 0 ? val : app.selectedColor.oklab[0]) +
                  "," +
                  (i == 1 ? val : app.selectedColor.oklab[1]) +
                  "," +
                  (i == 2 ? val : app.selectedColor.oklab[2]) +
                  ")"
              );
        }
        function drawOkLchFormat(target) {
            drawColor(
                target,
                app.selectedColor.oklch,
                "LCH",
                (i) => app.selectedColor.oklch[i],
                (i, val) =>
                  "oklch(" +
                  (i == 0 ? val : app.selectedColor.oklch[0]) +
                  "," +
                  (i == 1 ? val : app.selectedColor.oklch[1]) +
                  "," +
                  (i == 2 ? val : app.selectedColor.oklch[2]) +
                  ")"
              );
        }
        function drawLchFormat(target) {
            drawColor(
                target,
                app.selectedColor.lch,
                "LCH",
                (i) => app.selectedColor.lch[i],
                (i, val) =>
                  "lch(" +
                  (i == 0 ? val : app.selectedColor.lch[0]) +
                  "," +
                  (i == 1 ? val : app.selectedColor.lch[1]) +
                  "," +
                  (i == 2 ? val : app.selectedColor.lch[2]) +
                  ")"
              );
        }
        function drawHsvFormat(target) {
            drawColor(
                target,
                app.selectedColor.hsv,
                "HSV",
                (i) => app.selectedColor.hsv[i],
                (i, val) =>
                  "lch(" +
                  (i == 0 ? val : app.selectedColor.hsv[0]) +
                  "," +
                  (i == 1 ? val : app.selectedColor.hsv[1]) +
                  "," +
                  (i == 2 ? val : app.selectedColor.hsv[2]) +
                  ")"
              );
        }
        function drawXyzFormat(target) {
            drawColor(
                target,
                app.selectedColor.xyz,
                "XYZ",
                (i) => app.selectedColor.xyz[i],
                (i, val) =>
                  "xyz(" +
                  (i == 0 ? val : app.selectedColor.xyz[0]) +
                  "," +
                  (i == 1 ? val : app.selectedColor.xyz[1]) +
                  "," +
                  (i == 2 ? val : app.selectedColor.xyz[2]) +
                  ")"
              );
        }

        function drawColor(target, color, format, fGetCh, fGetCl) {
          for (let i = 0; i < format.length; i++) {
            let label = window.document.createElement("label");
            label.className = "colorChannelLabel";
            label.innerText = format[i];
            target.appendChild(label);
            let c = window.document.createElement("input");
            c.className = "colorInput";
            c.value = color[i];
            target.appendChild(c);
            var lock = false;
            app.addEventListener("colorChanged", (e) => {
              if (!lock) c.value = fGetCh(i);
            });
            c.addEventListener("input", (e) => {
              lock = true;
              var cl = fGetCl(i, e.target.value);
              console.log(cl);
              setColor(ConvertFrom(cl));
              lock = false;
            });
          }
        }

        function drawCmykFormat(target) {
          drawColor(
            target,
            app.selectedColor.cmyk,
            "CMYK",
            (i) => app.selectedColor.cmyk[i],
            (i, val) =>
              "cmyk(" +
              (i == 0 ? val : app.selectedColor.cmyk[0]) +
              "," +
              (i == 1 ? val : app.selectedColor.cmyk[1]) +
              "," +
              (i == 2 ? val : app.selectedColor.cmyk[2]) +
              "," +
              (i == 3 ? val : app.selectedColor.cmyk[3]) +
              ")"
          );
        }
        draw();
        enableEvents();
        return app;
      },
    };

    core.class.init = function () {
      if (core.initialized) return;
      initialized = true;
    };

    core.register();

    return core.class;
  })();

  if (typeof window.appSvgColor === "undefined") {
    window.appSvgColorPicker = window.AppSvgColorPicker = registrator;
  }

  return registrator;
  // END factory
});

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _misc = require("./misc");

Object.keys(_misc).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _misc[key];
    }
  });
});

var _Boxes = require("./Boxes");

Object.keys(_Boxes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Boxes[key];
    }
  });
});

var _Tiles = require("./Tiles");

Object.keys(_Tiles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Tiles[key];
    }
  });
});

var _LogoGrid = require("./LogoGrid");

Object.keys(_LogoGrid).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _LogoGrid[key];
    }
  });
});

var _Fade = require("./Fade");

Object.keys(_Fade).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Fade[key];
    }
  });
});
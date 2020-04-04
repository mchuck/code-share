'use strict';

var Belt_List = require("bs-platform/lib/js/belt_List.js");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");

function CurrentPath(Props) {
  var url = ReasonReactRouter.useUrl(undefined, /* () */0);
  return Belt_List.reduce(url.path, "", (function (a, b) {
                return a + b;
              }));
}

var make = CurrentPath;

exports.make = make;
/* ReasonReactRouter Not a pure module */

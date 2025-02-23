"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDraggableFlatListContext = void 0;
var react_1 = __importStar(require("react"));
var DraggableFlatListContext = react_1.default.createContext(undefined);
function DraggableFlatListProvider(_a) {
  var activeKey = _a.activeKey,
    onDragEnd = _a.onDragEnd,
    keyExtractor = _a.keyExtractor,
    horizontal = _a.horizontal,
    children = _a.children;
  var value = react_1.useMemo(
    function () {
      return {
        activeKey: activeKey,
        keyExtractor: keyExtractor,
        onDragEnd: onDragEnd,
        horizontal: horizontal,
      };
    },
    [activeKey, onDragEnd, keyExtractor, horizontal]
  );
  return react_1.default.createElement(
    DraggableFlatListContext.Provider,
    { value: value },
    children
  );
}
exports.default = DraggableFlatListProvider;
function useDraggableFlatListContext() {
  var value = react_1.useContext(DraggableFlatListContext);
  if (!value) {
    throw new Error(
      "useDraggableFlatListContext must be called within DraggableFlatListProvider"
    );
  }
  return value;
}
exports.useDraggableFlatListContext = useDraggableFlatListContext;

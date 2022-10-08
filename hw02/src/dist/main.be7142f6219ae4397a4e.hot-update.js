"use strict";
self["webpackHotUpdate"]("main",{

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var lappdelegate_1 = __webpack_require__(/*! ./lappdelegate */ "./src/lappdelegate.ts");
var LAppDefine = __importStar(__webpack_require__(/*! ./lappdefine */ "./src/lappdefine.ts"));
window.onload = function () {
    if (lappdelegate_1.LAppDelegate.getInstance().initialize() == false) {
        return;
    }
    lappdelegate_1.LAppDelegate.getInstance().run();
};
window.onbeforeunload = function () { return lappdelegate_1.LAppDelegate.releaseInstance(); };
window.onresize = function () {
    if (LAppDefine.CanvasSize === 'auto') {
        lappdelegate_1.LAppDelegate.getInstance().onResize();
    }
};
window.update = function (x, y, scale) {
    console.log(x);
    lappdelegate_1.LAppDelegate.getInstance().runModel(x, y, scale);
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "0b4ce5a0cb8ba4b1b62d"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iZTcxNDJmNjIxOWFlNDM5N2E0ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSx3RkFBOEM7QUFDOUMsOEZBQTJDO0FBSzNDLE1BQU0sQ0FBQyxNQUFNLEdBQUc7SUFFZCxJQUFJLDJCQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSyxFQUFFO1FBQ3BELE9BQU87S0FDUjtJQUVELDJCQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBS0YsTUFBTSxDQUFDLGNBQWMsR0FBRyxjQUFZLGtDQUFZLENBQUMsZUFBZSxFQUFFLEVBQTlCLENBQThCLENBQUM7QUFLbkUsTUFBTSxDQUFDLFFBQVEsR0FBRztJQUNoQixJQUFJLFVBQVUsQ0FBQyxVQUFVLEtBQUssTUFBTSxFQUFFO1FBQ3BDLDJCQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDdkM7QUFDSCxDQUFDLENBQUM7QUFzQkYsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsS0FBYTtJQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2YsMkJBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNuRCxDQUFDOzs7Ozs7Ozs7VUMzREQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQgeyBMQXBwRGVsZWdhdGUgfSBmcm9tICcuL2xhcHBkZWxlZ2F0ZSc7XG5pbXBvcnQgKiBhcyBMQXBwRGVmaW5lIGZyb20gJy4vbGFwcGRlZmluZSc7XG5cbi8qKlxuICog44OW44Op44Km44K244Ot44O844OJ5b6M44Gu5Yem55CGXG4gKi9cbndpbmRvdy5vbmxvYWQgPSAoKTogdm9pZCA9PiB7XG4gIC8vIGNyZWF0ZSB0aGUgYXBwbGljYXRpb24gaW5zdGFuY2VcbiAgaWYgKExBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLmluaXRpYWxpemUoKSA9PSBmYWxzZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIExBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLnJ1bigpO1xufTtcblxuLyoqXG4gKiDntYLkuobmmYLjga7lh6bnkIZcbiAqL1xud2luZG93Lm9uYmVmb3JldW5sb2FkID0gKCk6IHZvaWQgPT4gTEFwcERlbGVnYXRlLnJlbGVhc2VJbnN0YW5jZSgpO1xuXG4vKipcbiAqIFByb2Nlc3Mgd2hlbiBjaGFuZ2luZyBzY3JlZW4gc2l6ZS5cbiAqL1xud2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xuICBpZiAoTEFwcERlZmluZS5DYW52YXNTaXplID09PSAnYXV0bycpIHtcbiAgICBMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5vblJlc2l6ZSgpO1xuICB9XG59O1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cgeyB1cGRhdGU6IGFueTsgfVxufVxuXG4vKipcbiAqIEBTdHJvbmcgYmFzZWxpbmUgaGVyZSFcbiAqXG4gKiB1cGRhdGUgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0geCB4IGNvb3JkaW5hdGVcbiAqIEBwYXJhbSB5IHkgY29vcmRpbmF0ZVxuICogQHBhcmFtIHNjYWxlIHpvb20gaW4gb3Igem9vbSBvdXRcbiAqIEBUT0RPIOWwh3VwZGF0ZeaOm+S4indpbmRvd1xuICpcbiAqIHggPT4gLTEuNX4yLjVcbiAqIHkgPT4gLTAuN34xXG4gKiBzY2FsZT0+MC43fjEuNVxuICovXG5cblxud2luZG93LnVwZGF0ZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGU6IG51bWJlcikgPT4ge1xuICBjb25zb2xlLmxvZyh4KTtcbiAgTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkucnVuTW9kZWwoeCwgeSwgc2NhbGUpO1xufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjBiNGNlNWEwY2I4YmE0YjFiNjJkXCI7IH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
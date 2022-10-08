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
    if (x > 1) {
        x = x - 1.5;
    }
    console.log(x);
    lappdelegate_1.LAppDelegate.getInstance().runModel(x, y, scale);
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "bcc97e084de6ae203c55"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zZjUxNjdmYTY2MWZjZDU0MDNhNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSx3RkFBOEM7QUFDOUMsOEZBQTJDO0FBSzNDLE1BQU0sQ0FBQyxNQUFNLEdBQUc7SUFFZCxJQUFJLDJCQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSyxFQUFFO1FBQ3BELE9BQU87S0FDUjtJQUVELDJCQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBS0YsTUFBTSxDQUFDLGNBQWMsR0FBRyxjQUFZLGtDQUFZLENBQUMsZUFBZSxFQUFFLEVBQTlCLENBQThCLENBQUM7QUFLbkUsTUFBTSxDQUFDLFFBQVEsR0FBRztJQUNoQixJQUFJLFVBQVUsQ0FBQyxVQUFVLEtBQUssTUFBTSxFQUFFO1FBQ3BDLDJCQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDdkM7QUFDSCxDQUFDLENBQUM7QUFzQkYsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsS0FBYTtJQUNsRCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUM7UUFDUixDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUNiO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNmLDJCQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDbkQsQ0FBQzs7Ozs7Ozs7O1VDOURELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHsgTEFwcERlbGVnYXRlIH0gZnJvbSAnLi9sYXBwZGVsZWdhdGUnO1xuaW1wb3J0ICogYXMgTEFwcERlZmluZSBmcm9tICcuL2xhcHBkZWZpbmUnO1xuXG4vKipcbiAqIOODluODqeOCpuOCtuODreODvOODieW+jOOBruWHpueQhlxuICovXG53aW5kb3cub25sb2FkID0gKCk6IHZvaWQgPT4ge1xuICAvLyBjcmVhdGUgdGhlIGFwcGxpY2F0aW9uIGluc3RhbmNlXG4gIGlmIChMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5pbml0aWFsaXplKCkgPT0gZmFsc2UpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5ydW4oKTtcbn07XG5cbi8qKlxuICog57WC5LqG5pmC44Gu5Yem55CGXG4gKi9cbndpbmRvdy5vbmJlZm9yZXVubG9hZCA9ICgpOiB2b2lkID0+IExBcHBEZWxlZ2F0ZS5yZWxlYXNlSW5zdGFuY2UoKTtcblxuLyoqXG4gKiBQcm9jZXNzIHdoZW4gY2hhbmdpbmcgc2NyZWVuIHNpemUuXG4gKi9cbndpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHtcbiAgaWYgKExBcHBEZWZpbmUuQ2FudmFzU2l6ZSA9PT0gJ2F1dG8nKSB7XG4gICAgTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkub25SZXNpemUoKTtcbiAgfVxufTtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHsgdXBkYXRlOiBhbnk7IH1cbn1cblxuLyoqXG4gKiBAU3Ryb25nIGJhc2VsaW5lIGhlcmUhXG4gKlxuICogdXBkYXRlIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHggeCBjb29yZGluYXRlXG4gKiBAcGFyYW0geSB5IGNvb3JkaW5hdGVcbiAqIEBwYXJhbSBzY2FsZSB6b29tIGluIG9yIHpvb20gb3V0XG4gKiBAVE9ETyDlsId1cGRhdGXmjpvkuIp3aW5kb3dcbiAqXG4gKiB4ID0+IC0xLjV+Mi41XG4gKiB5ID0+IC0wLjd+MVxuICogc2NhbGU9PjAuN34xLjVcbiAqL1xuXG5cbndpbmRvdy51cGRhdGUgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlOiBudW1iZXIpID0+IHtcbiAgaWYgKHggPiAxKXtcbiAgICB4ID0geCAtIDEuNTtcbiAgfVxuICBjb25zb2xlLmxvZyh4KTtcbiAgTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkucnVuTW9kZWwoeCwgeSwgc2NhbGUpO1xufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImJjYzk3ZTA4NGRlNmFlMjAzYzU1XCI7IH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
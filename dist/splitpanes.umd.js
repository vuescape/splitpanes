(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["splitpanes"] = factory();
	else
		root["splitpanes"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "5b84":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_splitpanes_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7ba0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_splitpanes_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_splitpanes_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_splitpanes_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7ba0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/splitpanes.vue?vue&type=script&lang=js&
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/* harmony default export */ var splitpanesvue_type_script_lang_js_ = ({
  props: {
    watchSlots: {
      type: Boolean,
      default: false
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    pushOtherPanes: {
      type: Boolean,
      default: true
    },
    dblClickSplitter: {
      type: Boolean,
      default: true
    },
    circularReferencePropertyExclusions: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      container: {
        vnode: null,
        offsetLeft: null,
        offsetTop: null
      },
      slotsCount: 0,
      vnodes: [],
      panes: [],
      splitters: [],
      touch: {
        mouseDown: false,
        dragging: false,
        activeSplitter: null
      },
      // Detect double click on touch devices.
      splitterTaps: {
        splitter: null,
        timeoutId: null
      },
      slotsCopy: ''
    };
  },
  methods: {
    bindEvents: function bindEvents() {
      if ('ontouchstart' in window) {
        document.addEventListener('touchmove', this.onMouseMove, {
          passive: false
        });
        document.addEventListener('touchend', this.onMouseUp);
      } // Passive: false to prevent scrolling while touch dragging.


      document.addEventListener('mousemove', this.onMouseMove, {
        passive: false
      });
      document.addEventListener('mouseup', this.onMouseUp);
    },
    onMouseDown: function onMouseDown(e, splitterIndex) {
      this.touch.mouseDown = true;
      this.touch.activeSplitter = splitterIndex;
    },
    onMouseMove: function onMouseMove(e) {
      if (this.touch.mouseDown) {
        // Prevent scrolling while touch dragging (only works with an active event, eg. passive: false).
        e.preventDefault();
        this.touch.dragging = true;
        this.calculatePanesSize(this.getCurrentMouseDrag(e));
        this.$emit('resize', this.panes.map(function (pane) {
          return {
            min: pane.min,
            max: pane.max,
            width: pane.width
          };
        }));
      }
    },
    onMouseUp: function onMouseUp() {
      var _this = this;

      if (this.touch.dragging) {
        this.$emit('resized', this.panes.map(function (pane) {
          return {
            min: pane.min,
            max: pane.max,
            width: pane.width
          };
        }));
      }

      this.touch.mouseDown = false; // Keep dragging flag until click event is finished (click happens immediately after mouseup)
      // in order to prevent emitting `splitter-click` event if splitter was dragged.

      setTimeout(function () {
        return _this.touch.dragging = false;
      }, 100);
    },
    // If touch device, detect double tap manually (2 taps separated by less than 500ms).
    onSplitterClick: function onSplitterClick(e, splitterIndex) {
      if ('ontouchstart' in window) {
        e.preventDefault(); // eslint-disable-next-line

        var _this$splitterTaps = this.splitterTaps,
            timeoutId = _this$splitterTaps.timeoutId,
            splitter = _this$splitterTaps.splitter;

        if (splitter !== splitterIndex) {
          splitter = splitterIndex;
          timeoutId = setTimeout(function () {
            return splitter = null;
          }, 500);
        } else this.onSplitterDblClick(e, splitterIndex);
      }

      if (!this.touch.dragging) this.$emit('splitter-click', this.panes[splitterIndex]);
    },
    // On splitter dbl click or dbl tap maximize this pane.
    onSplitterDblClick: function onSplitterDblClick(e, splitterIndex) {
      var totalMinWidths = 0;
      this.panes = this.panes.map(function (pane, i) {
        pane.width = i === splitterIndex ? pane.max : pane.min;
        if (i !== splitterIndex) totalMinWidths += pane.min;
        return pane;
      });
      this.panes[splitterIndex].width -= totalMinWidths;
      this.$emit('pane-maximize', this.panes[splitterIndex]);
    },
    getCurrentMouseDrag: function getCurrentMouseDrag(e) {
      return {
        x: e.touches ? e.touches[0].clientX : e.clientX,
        y: e.touches ? e.touches[0].clientY : e.clientY
      };
    },
    // Recursively sum all the offsetTop values from current element up the tree until body.
    // By doing so a padding or margin on a parent won't cause a wrong calculation.
    getContainerOffsetTop: function getContainerOffsetTop() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.container.offsetTop === null || force) {
        var el = this.container.vnode;
        var top = el.offsetTop;

        while (el = el.offsetParent) {
          top += el.offsetTop;
        }

        this.container.offsetTop = top;
      }

      return this.container.offsetTop;
    },
    // Recursively sum all the offsetTop values from current element up the tree until body.
    getContainerOffsetLeft: function getContainerOffsetLeft() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.container.offsetLeft === null || force) {
        var el = this.container.vnode;
        var left = el.offsetLeft;

        while (el = el.offsetParent) {
          left += el.offsetLeft;
        }

        this.container.offsetLeft = left;
      }

      return this.container.offsetLeft;
    },
    // Returns the drag percentage of the splitter relative to the 2 panes it's inbetween.
    // if the sum of width of the 2 cells  is 60%, the dragPercentage range will be 0 to 100% of this 60%.
    getCurrentDragPercentage: function getCurrentDragPercentage(drag) {
      var splitterIndex = this.touch.activeSplitter;
      var doc = document.documentElement;
      var scrollTop = this.horizontal ? (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0) : null;
      var offset = this["getContainerOffset".concat(this.horizontal ? 'Top' : 'Left')]();
      drag = drag[this.horizontal ? 'y' : 'x'] - offset + scrollTop; // In the code bellow 'size' refers to 'width' for vertical and 'height' for horizontal layout.

      var containerSize = this.container.vnode[this.horizontal ? 'clientHeight' : 'clientWidth'];
      var sumPrevPanesSize = 0;
      this.panes.forEach(function (pane, i) {
        return sumPrevPanesSize += i < splitterIndex ? pane.width : 0;
      });
      return drag * 100 / containerSize;
    },
    calculatePanesSize: function calculatePanesSize(drag) {
      var splitterIndex = this.touch.activeSplitter;
      var sums = {
        prevPanesSize: this.sumPrevPanesSize(splitterIndex),
        nextPanesSize: this.sumNextPanesSize(splitterIndex),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      };
      var minDrag = 0 + (this.pushOtherPanes ? 0 : sums.prevPanesSize);
      var maxDrag = 100 - (this.pushOtherPanes ? 0 : sums.nextPanesSize);
      var dragPercentage = Math.max(Math.min(this.getCurrentDragPercentage(drag), maxDrag), minDrag); // If not pushing other panes, panes to resize are right before and right after splitter.

      var panesToResize = [splitterIndex, splitterIndex + 1];
      var paneBefore = this.panes[panesToResize[0]] || null;
      var paneAfter = this.panes[panesToResize[1]] || null;
      var paneBeforeMaxReached = paneBefore.max < 100 && dragPercentage >= paneBefore.max + sums.prevPanesSize;
      var paneAfterMaxReached = paneAfter.max < 100 && dragPercentage <= 100 - (paneAfter.max + this.sumNextPanesSize(splitterIndex + 1)); // Prevent dragging beyond pane max.

      if (paneBeforeMaxReached || paneAfterMaxReached) {
        if (paneBeforeMaxReached) {
          paneBefore.width = paneBefore.max;
          paneAfter.width = Math.max(100 - paneBefore.max - sums.prevPanesSize - sums.nextPanesSize, 0);
        } else {
          paneBefore.width = Math.max(100 - paneAfter.max - sums.prevPanesSize - this.sumNextPanesSize(splitterIndex + 1), 0);
          paneAfter.width = paneAfter.max;
        }

        return;
      } // When pushOtherPanes = true, find the closest expanded pane on each side of the splitter.


      if (this.pushOtherPanes) {
        var vars = this.doPushOtherPanes(sums, dragPercentage);
        if (!vars) return; // Prevent other calculation.
        else {
            sums = vars.sums;
            panesToResize = vars.panesToResize;
            paneBefore = this.panes[panesToResize[0]] || null;
            paneAfter = this.panes[panesToResize[1]] || null;
          }
      }

      if (paneBefore !== null) {
        paneBefore.width = Math.min(Math.max(dragPercentage - sums.prevPanesSize - sums.prevReachedMinPanes, paneBefore.min), paneBefore.max);
      }

      if (paneAfter !== null) {
        paneAfter.width = Math.min(Math.max(100 - dragPercentage - sums.nextPanesSize - sums.nextReachedMinPanes, paneAfter.min), paneAfter.max);
      }
    },
    doPushOtherPanes: function doPushOtherPanes(sums, dragPercentage) {
      var _this2 = this;

      var splitterIndex = this.touch.activeSplitter;
      var panesToResize = [splitterIndex, splitterIndex + 1]; // Pushing Down.
      // Going smaller than the current pane min width: take the previous expanded pane.

      if (dragPercentage < sums.prevPanesSize + this.panes[panesToResize[0]].min) {
        panesToResize[0] = this.findPrevExpandedPane(splitterIndex).index;
        sums.prevReachedMinPanes = 0; // If pushing a n-2 or less pane, from splitter, then make sure all in between is at min size.

        if (panesToResize[0] < splitterIndex) {
          this.panes.forEach(function (pane, i) {
            if (i > panesToResize[0] && i <= splitterIndex) {
              pane.width = pane.min;
              sums.prevReachedMinPanes += pane.min;
            }
          });
        }

        sums.prevPanesSize = this.sumPrevPanesSize(panesToResize[0]); // If nothing else to push down, cancel dragging.

        if (panesToResize[0] === undefined) {
          sums.prevReachedMinPanes = 0;
          this.panes[0].width = this.panes[0].min;
          this.panes.forEach(function (pane, i) {
            if (i > 0 && i <= splitterIndex) {
              pane.width = pane.min;
              sums.prevReachedMinPanes += pane.min;
            }
          });
          this.panes[panesToResize[1]].width = 100 - sums.prevReachedMinPanes - this.panes[0].min - sums.prevPanesSize - sums.nextPanesSize;
          return null;
        }
      } // Pushing Up.
      // Pushing up beyond min width is reached: take the next expanded pane.


      if (dragPercentage > 100 - sums.nextPanesSize - this.panes[panesToResize[1]].min) {
        panesToResize[1] = this.findNextExpandedPane(splitterIndex).index;
        sums.nextReachedMinPanes = 0; // If pushing a n+2 or more pane, from splitter, then make sure all in between is at min size.

        if (panesToResize[1] > splitterIndex + 1) {
          this.panes.forEach(function (pane, i) {
            if (i > splitterIndex && i < panesToResize[1]) {
              pane.width = pane.min;
              sums.nextReachedMinPanes += pane.min;
            }
          });
        }

        sums.nextPanesSize = this.sumNextPanesSize(panesToResize[1] - 1); // If nothing else to push up, cancel dragging.

        if (panesToResize[1] === undefined) {
          sums.nextReachedMinPanes = 0;
          this.panes[this.panes.length - 1].width = this.panes[this.panes.length - 1].min;
          this.panes.forEach(function (pane, i) {
            if (i < _this2.panes.length - 1 && i >= splitterIndex + 1) {
              pane.width = pane.min;
              sums.nextReachedMinPanes += pane.min;
            }
          });
          this.panes[panesToResize[0]].width = 100 - sums.prevPanesSize - sums.nextReachedMinPanes - this.panes[this.panes.length - 1].min - sums.nextPanesSize;
          return null;
        }
      }

      return {
        sums: sums,
        panesToResize: panesToResize
      };
    },
    sumPrevPanesSize: function sumPrevPanesSize(splitterIndex) {
      return this.panes.reduce(function (total, pane, i) {
        return total + (i < splitterIndex ? pane.width : 0);
      }, 0);
    },
    sumNextPanesSize: function sumNextPanesSize(splitterIndex) {
      return this.panes.reduce(function (total, pane, i) {
        return total + (i > splitterIndex + 1 ? pane.width : 0);
      }, 0);
    },
    // Return the previous pane from siblings which has a size (width for vert or height for horz) of more than 0.
    findPrevExpandedPane: function findPrevExpandedPane(splitterIndex) {
      var pane = {};

      var arr = _toConsumableArray(this.panes);

      arr.reverse().some(function (p) {
        if (p.index < splitterIndex && p.width > p.min) pane = p;
        return p.index < splitterIndex && p.width > p.min;
      });
      return pane;
    },
    // Return the next pane from siblings which has a size (width for vert or height for horz) of more than 0.
    findNextExpandedPane: function findNextExpandedPane(splitterIndex) {
      var pane = {};
      this.panes.some(function (p) {
        if (p.index > splitterIndex + 1 && p.width > p.min) pane = p;
        return p.index > splitterIndex + 1 && p.width > p.min;
      });
      return pane;
    }
  },
  mounted: function mounted() {
    this.container.vnode = this.$refs.container;
    this.bindEvents();
    this.$emit('ready');
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('touchmove', this.onMouseMove, {
      passive: false
    });
    document.removeEventListener('mousemove', this.onMouseMove, {
      passive: false
    });
    document.removeEventListener('touchend', this.onMouseUp);
    document.removeEventListener('mouseup', this.onMouseUp);
  },
  computed: {
    defaultWidth: function defaultWidth() {
      return 100 / this.vnodes.length;
    }
  },
  beforeUpdate: function beforeUpdate() {
    var _this3 = this;

    // Not the first time but all the others, save the current width before re-render and
    // reapply on rendering.
    if (this.panes.length) {
      this.$slots.default.forEach(function (vnode) {
        // Discard empty text nodes.
        if (!vnode.tag && !(vnode.text || '').trim()) return;
        var _vnode$elm = vnode.elm;
        _vnode$elm = _vnode$elm === void 0 ? {} : _vnode$elm;
        var _vnode$elm$parentNode = _vnode$elm.parentNode;
        _vnode$elm$parentNode = _vnode$elm$parentNode === void 0 ? {} : _vnode$elm$parentNode;
        var id = _vnode$elm$parentNode.id,
            className = _vnode$elm$parentNode.className,
            _vnode$elm$parentNode2 = _vnode$elm$parentNode.style;
        _vnode$elm$parentNode2 = _vnode$elm$parentNode2 === void 0 ? {} : _vnode$elm$parentNode2;
        var width = _vnode$elm$parentNode2.width,
            height = _vnode$elm$parentNode2.height;

        if (className === 'splitpanes__pane' && (id = id.replace('pane_', '')) && _this3.panes[id] && (width || height)) {
          // Before saving computed css width or height into `savedWidth` check if `splitpanes-size` has changed.
          // If so save this value instead (means size has changed programmatically).
          var _vnode$elm2 = vnode.elm;
          _vnode$elm2 = _vnode$elm2 === void 0 ? {} : _vnode$elm2;
          var _vnode$elm2$attribute = _vnode$elm2.attributes;
          _vnode$elm2$attribute = _vnode$elm2$attribute === void 0 ? {} : _vnode$elm2$attribute;
          var _vnode$elm2$attribute2 = _vnode$elm2$attribute['splitpanes-size'];
          _vnode$elm2$attribute2 = _vnode$elm2$attribute2 === void 0 ? {} : _vnode$elm2$attribute2;
          var paneSizeInDOM = _vnode$elm2$attribute2.value;
          if (paneSizeInDOM !== undefined) _this3.panes[id].savedWidth = parseFloat(paneSizeInDOM);else _this3.panes[id].savedWidth = parseFloat(width || height);
        }
      });
    }
  },
  render: function render(createEl) {
    var _this4 = this;

    var splitPanesChildren = [];
    if (!this.$slots.default) splitPanesChildren.push(createEl('div', 'Splitpanes needs some content here.'));else {
      // Since we are adding splitter nodes in DOM, we need to keep track if slots have changed
      // to avoid an infinite loop.
      var slotsHaveChanged = false;

      if (this.watchSlots) {
        var discardProps = ['$options', '$parent', '$root', '$el', '$refs', '$slots', '$scopedSlots', '$vnode', '_data', '__vue__', '_self', '_vnode', '_watcher', '_watchers', '_computedWatchers', '_renderProxy', 'vnodes', 'container', 'Ctor', 'context', 'parent', 'componentInstance', 'componentOptions', 'fnContext', 'fnOptions'].concat(_toConsumableArray(this.circularReferencePropertyExclusions));
        var slotsExport = JSON.stringify(this.$slots.default, function (name, val) {
          // Discard the properties listed in array to prevent circular reference.
          return discardProps.indexOf(name) > -1 ? undefined : val;
        });
        slotsHaveChanged = this.slotsCopy !== slotsExport;
        if (slotsHaveChanged) this.slotsCopy = slotsExport;
      } // Create the panes and splitters arrays each time the slots are updated.


      if (this.slotsCount !== this.$slots.default.length || slotsHaveChanged) {
        this.vnodes = this.$slots.default.filter(function (vnode) {
          return vnode.tag || (vnode.text || '').trim();
        });
        this.vnodes.forEach(function (vnode, i) {
          var _vnode$data = vnode.data;
          _vnode$data = _vnode$data === void 0 ? {} : _vnode$data;
          var _vnode$data$attrs = _vnode$data.attrs,
              attrs = _vnode$data$attrs === void 0 ? {} : _vnode$data$attrs; // Extract min, max & default size from the panes HTML attributes.

          var _attrs$splitpanesMin = attrs['splitpanes-min'],
              min = _attrs$splitpanesMin === void 0 ? 0 : _attrs$splitpanesMin,
              _attrs$splitpanesMax = attrs['splitpanes-max'],
              max = _attrs$splitpanesMax === void 0 ? 100 : _attrs$splitpanesMax,
              _attrs$splitpanesSiz = attrs['splitpanes-size'],
              Default = _attrs$splitpanesSiz === void 0 ? _this4.defaultWidth : _attrs$splitpanesSiz;
          var savedWidth = _this4.panes[i] && _this4.panes[i].savedWidth !== undefined ? _this4.panes[i].savedWidth : null;

          _this4.$set(_this4.panes, i, {
            // ! \\ Reapply saved width (if any) after slots have changed.
            width: savedWidth !== null ? savedWidth : parseFloat(Default),
            index: i,
            min: parseFloat(min),
            max: parseFloat(max)
          });

          if (i) _this4.$set(_this4.splitters, i - 1, {
            id: "splitter-".concat(i - 1),
            index: i - 1
          });
        });
        this.slotsCount = this.$slots.default.length;
      }

      this.vnodes.forEach(function (vnode, i) {
        // Splitter.
        if (i) {
          var splitterAttributes = {
            id: i - 1,
            class: 'splitpanes__splitter',
            ref: "splitter-".concat(i - 1),
            on: _objectSpread({}, 'ontouchstart' in window ? {
              touchstart: function touchstart(e) {
                return _this4.onMouseDown(e, i - 1);
              }
            } : {}, {
              mousedown: function mousedown(e) {
                return _this4.onMouseDown(e, i - 1);
              },
              click: function click(e) {
                return _this4.onSplitterClick(e, i);
              }
            }, _this4.dblClickSplitter ? {
              dblclick: function dblclick(e) {
                return _this4.onSplitterDblClick(e, i);
              }
            } : {})
          };
          splitPanesChildren.push(createEl('div', splitterAttributes));
        } // Pane.


        var paneAttributes = {
          attrs: {
            id: "pane_".concat(i)
          },
          class: 'splitpanes__pane',
          style: _objectSpread({}, _this4.horizontal ? {
            height: "".concat(_this4.panes[i].width, "%")
          } : null, !_this4.horizontal ? {
            width: "".concat(_this4.panes[i].width, "%")
          } : null),
          on: {
            click: function click(e) {
              return _this4.$emit('pane-click', _this4.panes[i]);
            }
          }
        };
        splitPanesChildren.push(createEl('div', paneAttributes, [vnode]));
      });
    } // Wrapper.

    var wrapperAttributes = {
      class: ['splitpanes', "splitpanes--".concat(this.horizontal ? 'horizontal' : 'vertical'), this.touch.dragging ? 'splitpanes--dragging' : ''],
      ref: 'container'
    };
    return createEl('div', wrapperAttributes, splitPanesChildren);
  }
});
// CONCATENATED MODULE: ./src/components/splitpanes.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_splitpanesvue_type_script_lang_js_ = (splitpanesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/splitpanes.vue?vue&type=style&index=0&lang=scss&
var splitpanesvue_type_style_index_0_lang_scss_ = __webpack_require__("5b84");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/splitpanes.vue
var render, staticRenderFns





/* normalize component */

var component = normalizeComponent(
  components_splitpanesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var splitpanes = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (splitpanes);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=splitpanes.umd.js.map
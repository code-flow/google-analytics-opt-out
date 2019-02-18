/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\nvar __ = wp.i18n.__;\nvar _wp$blocks = wp.blocks,\n    registerBlockType = _wp$blocks.registerBlockType,\n    createBlock = _wp$blocks.createBlock;\nvar TextControl = wp.components.TextControl;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (registerBlockType('gaoop/opt-out-block', {\n  title: __('Analytics Opt Out', 'gaoop'),\n  category: 'widgets',\n  icon: wp.element.createElement(\n    'svg',\n    { width: '18', height: '20',\n      xmlns: 'http://www.w3.org/2000/svg' },\n    wp.element.createElement('path', {\n      d: 'M15.61 16.086c.093.094.14.2.14.316 0 .118-.047.211-.14.282a2.763 2.763 0 0 1-2.075.878c-.82 0-1.512-.292-2.074-.878L7.383 12.64l-.88.879c.165.398.247.808.247 1.23 0 .938-.328 1.734-.984 2.39-.657.657-1.454.985-2.391.985-.938 0-1.734-.328-2.39-.984C.327 16.484 0 15.688 0 14.75c0-.937.328-1.734.984-2.39.657-.657 1.453-.985 2.391-.985.164 0 .316.012.457.035l1.16-1.16-1.16-1.16c-.14.023-.293.035-.457.035-.938 0-1.734-.328-2.39-.984C.327 7.484 0 6.688 0 5.75c0-.937.328-1.734.984-2.39.657-.657 1.453-.985 2.391-.985.937 0 1.734.328 2.39.984.657.657.985 1.454.985 2.391 0 .422-.082.832-.246 1.23l.879.88 4.078-4.044a2.763 2.763 0 0 1 2.074-.878c.82 0 1.512.293 2.074.878.094.07.141.164.141.282a.437.437 0 0 1-.14.316L9.772 10.25l5.836 5.836zM3.374 4.625c-.305 0-.568.111-.791.334a1.081 1.081 0 0 0-.334.791c0 .305.111.568.334.791.223.223.486.334.791.334.305 0 .568-.111.791-.334.223-.223.334-.486.334-.791 0-.305-.111-.568-.334-.791a1.081 1.081 0 0 0-.791-.334zm0 9c-.305 0-.568.111-.791.334a1.081 1.081 0 0 0-.334.791c0 .305.111.568.334.791.223.223.486.334.791.334.305 0 .568-.111.791-.334.223-.223.334-.486.334-.791 0-.305-.111-.568-.334-.791a1.081 1.081 0 0 0-.791-.334zm3.937-3.797a.407.407 0 0 0-.298.123.407.407 0 0 0-.123.299c0 .117.04.217.123.299a.407.407 0 0 0 .298.123.407.407 0 0 0 .3-.123.407.407 0 0 0 .122-.299.407.407 0 0 0-.123-.299.407.407 0 0 0-.299-.123z',\n      fill: '#000' }),\n    wp.element.createElement('path', { fill: '#196EEE', d: 'M16 0H18V4H16z' }),\n    wp.element.createElement('path', { fill: '#D9442F', d: 'M16 4H18V8H16z' }),\n    wp.element.createElement('path', { fill: '#FFBB04', d: 'M16 8H18V12H16z' }),\n    wp.element.createElement('path', { fill: '#176CED', d: 'M16 12H18V16H16z' }),\n    wp.element.createElement('path', { fill: '#03A25D', d: 'M16 16H18V20H16z' })\n  ),\n  keywords: ['gaoop', __('Analytics Opt Out', 'gaoop')],\n  attributes: {\n    content: {\n      source: 'text',\n      selector: 'a',\n      default: __('Click here to opt out', 'gaoop')\n    }\n  },\n\n  transforms: {\n    to: [{\n      type: 'block',\n      blocks: ['core/paragraph'],\n      transform: function transform(_ref) {\n        var content = _ref.content;\n\n        return createBlock('core/paragraph', {\n          content: content\n        });\n      }\n    }],\n    from: [{\n      type: 'block',\n      blocks: ['core/paragraph'],\n      transform: function transform(_ref2) {\n        var content = _ref2.content;\n\n        return createBlock('gaoop/opt-out-block', {\n          content: content\n        });\n      }\n    }]\n  },\n\n  edit: function edit(props) {\n    var isSelected = props.isSelected,\n        setAttributes = props.setAttributes;\n\n\n    var content = '' === props.attributes.content ? __('Click here to opt out', 'gaoop') : props.attributes.content;\n\n    return isSelected ? wp.element.createElement(TextControl, {\n      label: __('Enter a link text', 'gaoop'),\n      value: content,\n      onChange: function onChange(value) {\n        return setAttributes({ content: value });\n      }\n    }) : wp.element.createElement(\n      'a',\n      { className: 'gaoop-block', href: '#' },\n      content\n    );\n  },\n  save: function save(props) {\n\n    var content = '' === props.attributes.content ? __('Click here to opt out', 'gaoop') : props.attributes.content;\n\n    return wp.element.createElement(\n      'a',\n      { className: 'gaoop-block',\n        href: 'javascript:gaoop_analytics_optout();' },\n      content\n    );\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Jsb2Nrcy9vcHQtb3V0LmpzP2M4YzciXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciBfd3AkYmxvY2tzID0gd3AuYmxvY2tzLFxuICAgIHJlZ2lzdGVyQmxvY2tUeXBlID0gX3dwJGJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZSxcbiAgICBjcmVhdGVCbG9jayA9IF93cCRibG9ja3MuY3JlYXRlQmxvY2s7XG52YXIgVGV4dENvbnRyb2wgPSB3cC5jb21wb25lbnRzLlRleHRDb250cm9sO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyQmxvY2tUeXBlKCdnYW9vcC9vcHQtb3V0LWJsb2NrJywge1xuICB0aXRsZTogX18oJ0FuYWx5dGljcyBPcHQgT3V0JywgJ2dhb29wJyksXG4gIGNhdGVnb3J5OiAnd2lkZ2V0cycsXG4gIGljb246IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAnc3ZnJyxcbiAgICB7IHdpZHRoOiAnMTgnLCBoZWlnaHQ6ICcyMCcsXG4gICAgICB4bWxuczogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB9LFxuICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHtcbiAgICAgIGQ6ICdNMTUuNjEgMTYuMDg2Yy4wOTMuMDk0LjE0LjIuMTQuMzE2IDAgLjExOC0uMDQ3LjIxMS0uMTQuMjgyYTIuNzYzIDIuNzYzIDAgMCAxLTIuMDc1Ljg3OGMtLjgyIDAtMS41MTItLjI5Mi0yLjA3NC0uODc4TDcuMzgzIDEyLjY0bC0uODguODc5Yy4xNjUuMzk4LjI0Ny44MDguMjQ3IDEuMjMgMCAuOTM4LS4zMjggMS43MzQtLjk4NCAyLjM5LS42NTcuNjU3LTEuNDU0Ljk4NS0yLjM5MS45ODUtLjkzOCAwLTEuNzM0LS4zMjgtMi4zOS0uOTg0Qy4zMjcgMTYuNDg0IDAgMTUuNjg4IDAgMTQuNzVjMC0uOTM3LjMyOC0xLjczNC45ODQtMi4zOS42NTctLjY1NyAxLjQ1My0uOTg1IDIuMzkxLS45ODUuMTY0IDAgLjMxNi4wMTIuNDU3LjAzNWwxLjE2LTEuMTYtMS4xNi0xLjE2Yy0uMTQuMDIzLS4yOTMuMDM1LS40NTcuMDM1LS45MzggMC0xLjczNC0uMzI4LTIuMzktLjk4NEMuMzI3IDcuNDg0IDAgNi42ODggMCA1Ljc1YzAtLjkzNy4zMjgtMS43MzQuOTg0LTIuMzkuNjU3LS42NTcgMS40NTMtLjk4NSAyLjM5MS0uOTg1LjkzNyAwIDEuNzM0LjMyOCAyLjM5Ljk4NC42NTcuNjU3Ljk4NSAxLjQ1NC45ODUgMi4zOTEgMCAuNDIyLS4wODIuODMyLS4yNDYgMS4yM2wuODc5Ljg4IDQuMDc4LTQuMDQ0YTIuNzYzIDIuNzYzIDAgMCAxIDIuMDc0LS44NzhjLjgyIDAgMS41MTIuMjkzIDIuMDc0Ljg3OC4wOTQuMDcuMTQxLjE2NC4xNDEuMjgyYS40MzcuNDM3IDAgMCAxLS4xNC4zMTZMOS43NzIgMTAuMjVsNS44MzYgNS44MzZ6TTMuMzc0IDQuNjI1Yy0uMzA1IDAtLjU2OC4xMTEtLjc5MS4zMzRhMS4wODEgMS4wODEgMCAwIDAtLjMzNC43OTFjMCAuMzA1LjExMS41NjguMzM0Ljc5MS4yMjMuMjIzLjQ4Ni4zMzQuNzkxLjMzNC4zMDUgMCAuNTY4LS4xMTEuNzkxLS4zMzQuMjIzLS4yMjMuMzM0LS40ODYuMzM0LS43OTEgMC0uMzA1LS4xMTEtLjU2OC0uMzM0LS43OTFhMS4wODEgMS4wODEgMCAwIDAtLjc5MS0uMzM0em0wIDljLS4zMDUgMC0uNTY4LjExMS0uNzkxLjMzNGExLjA4MSAxLjA4MSAwIDAgMC0uMzM0Ljc5MWMwIC4zMDUuMTExLjU2OC4zMzQuNzkxLjIyMy4yMjMuNDg2LjMzNC43OTEuMzM0LjMwNSAwIC41NjgtLjExMS43OTEtLjMzNC4yMjMtLjIyMy4zMzQtLjQ4Ni4zMzQtLjc5MSAwLS4zMDUtLjExMS0uNTY4LS4zMzQtLjc5MWExLjA4MSAxLjA4MSAwIDAgMC0uNzkxLS4zMzR6bTMuOTM3LTMuNzk3YS40MDcuNDA3IDAgMCAwLS4yOTguMTIzLjQwNy40MDcgMCAwIDAtLjEyMy4yOTljMCAuMTE3LjA0LjIxNy4xMjMuMjk5YS40MDcuNDA3IDAgMCAwIC4yOTguMTIzLjQwNy40MDcgMCAwIDAgLjMtLjEyMy40MDcuNDA3IDAgMCAwIC4xMjItLjI5OS40MDcuNDA3IDAgMCAwLS4xMjMtLjI5OS40MDcuNDA3IDAgMCAwLS4yOTktLjEyM3onLFxuICAgICAgZmlsbDogJyMwMDAnIH0pLFxuICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZmlsbDogJyMxOTZFRUUnLCBkOiAnTTE2IDBIMThWNEgxNnonIH0pLFxuICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZmlsbDogJyNEOTQ0MkYnLCBkOiAnTTE2IDRIMThWOEgxNnonIH0pLFxuICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZmlsbDogJyNGRkJCMDQnLCBkOiAnTTE2IDhIMThWMTJIMTZ6JyB9KSxcbiAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGZpbGw6ICcjMTc2Q0VEJywgZDogJ00xNiAxMkgxOFYxNkgxNnonIH0pLFxuICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZmlsbDogJyMwM0EyNUQnLCBkOiAnTTE2IDE2SDE4VjIwSDE2eicgfSlcbiAgKSxcbiAga2V5d29yZHM6IFsnZ2Fvb3AnLCBfXygnQW5hbHl0aWNzIE9wdCBPdXQnLCAnZ2Fvb3AnKV0sXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICBjb250ZW50OiB7XG4gICAgICBzb3VyY2U6ICd0ZXh0JyxcbiAgICAgIHNlbGVjdG9yOiAnYScsXG4gICAgICBkZWZhdWx0OiBfXygnQ2xpY2sgaGVyZSB0byBvcHQgb3V0JywgJ2dhb29wJylcbiAgICB9XG4gIH0sXG5cbiAgdHJhbnNmb3Jtczoge1xuICAgIHRvOiBbe1xuICAgICAgdHlwZTogJ2Jsb2NrJyxcbiAgICAgIGJsb2NrczogWydjb3JlL3BhcmFncmFwaCddLFxuICAgICAgdHJhbnNmb3JtOiBmdW5jdGlvbiB0cmFuc2Zvcm0oX3JlZikge1xuICAgICAgICB2YXIgY29udGVudCA9IF9yZWYuY29udGVudDtcblxuICAgICAgICByZXR1cm4gY3JlYXRlQmxvY2soJ2NvcmUvcGFyYWdyYXBoJywge1xuICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfV0sXG4gICAgZnJvbTogW3tcbiAgICAgIHR5cGU6ICdibG9jaycsXG4gICAgICBibG9ja3M6IFsnY29yZS9wYXJhZ3JhcGgnXSxcbiAgICAgIHRyYW5zZm9ybTogZnVuY3Rpb24gdHJhbnNmb3JtKF9yZWYyKSB7XG4gICAgICAgIHZhciBjb250ZW50ID0gX3JlZjIuY29udGVudDtcblxuICAgICAgICByZXR1cm4gY3JlYXRlQmxvY2soJ2dhb29wL29wdC1vdXQtYmxvY2snLCB7XG4gICAgICAgICAgY29udGVudDogY29udGVudFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XVxuICB9LFxuXG4gIGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcbiAgICB2YXIgaXNTZWxlY3RlZCA9IHByb3BzLmlzU2VsZWN0ZWQsXG4gICAgICAgIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzO1xuXG5cbiAgICB2YXIgY29udGVudCA9ICcnID09PSBwcm9wcy5hdHRyaWJ1dGVzLmNvbnRlbnQgPyBfXygnQ2xpY2sgaGVyZSB0byBvcHQgb3V0JywgJ2dhb29wJykgOiBwcm9wcy5hdHRyaWJ1dGVzLmNvbnRlbnQ7XG5cbiAgICByZXR1cm4gaXNTZWxlY3RlZCA/IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUZXh0Q29udHJvbCwge1xuICAgICAgbGFiZWw6IF9fKCdFbnRlciBhIGxpbmsgdGV4dCcsICdnYW9vcCcpLFxuICAgICAgdmFsdWU6IGNvbnRlbnQsXG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBjb250ZW50OiB2YWx1ZSB9KTtcbiAgICAgIH1cbiAgICB9KSA6IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICdhJyxcbiAgICAgIHsgY2xhc3NOYW1lOiAnZ2Fvb3AtYmxvY2snLCBocmVmOiAnIycgfSxcbiAgICAgIGNvbnRlbnRcbiAgICApO1xuICB9LFxuICBzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cbiAgICB2YXIgY29udGVudCA9ICcnID09PSBwcm9wcy5hdHRyaWJ1dGVzLmNvbnRlbnQgPyBfXygnQ2xpY2sgaGVyZSB0byBvcHQgb3V0JywgJ2dhb29wJykgOiBwcm9wcy5hdHRyaWJ1dGVzLmNvbnRlbnQ7XG5cbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2EnLFxuICAgICAgeyBjbGFzc05hbWU6ICdnYW9vcC1ibG9jaycsXG4gICAgICAgIGhyZWY6ICdqYXZhc2NyaXB0Omdhb29wX2FuYWx5dGljc19vcHRvdXQoKTsnIH0sXG4gICAgICBjb250ZW50XG4gICAgKTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ibG9ja3Mvb3B0LW91dC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);
"use strict";var _react=_interopRequireDefault(require("react"));Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _createSuper(a){var b=_isNativeReflectConstruct();return function(){var c,d=_getPrototypeOf(a);if(b){var e=_getPrototypeOf(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return _possibleConstructorReturn(this,c)}}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var Confirmation=function(a){function b(){var a;_classCallCheck(this,b);for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return a=c.call.apply(c,[this].concat(e)),_defineProperty(_assertThisInitialized(a),"state",{confirmation:""}),a}_inherits(b,a);var c=_createSuper(b);return _createClass(b,[{key:"componentDidMount",value:function componentDidMount(){var a=this.props.confirmation,b=/<script>(.+)<\/script>/gi.exec(a);b?(a=a.replace(b[0],""),this.setState({confirmation:a},function(){return window.eval(b[1])})):this.setState({confirmation:a})}},{key:"render",value:function render(){var a=this.state.confirmation,b=this.props.SFormConfirmation;return b?_react["default"].createElement(b,{success:!0,message:a}):_react["default"].createElement("div",{className:"form-confirmation",dangerouslySetInnerHTML:{__html:a}})}}]),b}(_react["default"].Component),_default=Confirmation;exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Gb3JtRWxlbWVudHMvRm9ybUNvbmZpcm1hdGlvbi5qc3giXSwibmFtZXMiOlsiQ29uZmlybWF0aW9uIiwiY29uZmlybWF0aW9uIiwicHJvcHMiLCJleHRyYWN0c2NyaXB0IiwiZXhlYyIsInJlcGxhY2UiLCJzZXRTdGF0ZSIsIndpbmRvdyIsImV2YWwiLCJzdGF0ZSIsIlNGb3JtQ29uZmlybWF0aW9uIiwiX19odG1sIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiJhQUFBLG9ELG13RUFFTUEsQ0FBQUEsWSx3TkFDSSxDQUNOQyxZQUFZLENBQUUsRUFEUixDLDJIQUlZLElBQ1pBLENBQUFBLENBRFksQ0FDSyxLQUFLQyxLQURWLENBQ1pELFlBRFksQ0FFWkUsQ0FBYSxDQUFHLDJCQUEyQkMsSUFBM0IsQ0FBZ0NILENBQWhDLENBRkosQ0FHZEUsQ0FIYyxFQUloQkYsQ0FBWSxDQUFHQSxDQUFZLENBQUNJLE9BQWIsQ0FBcUJGLENBQWEsQ0FBQyxDQUFELENBQWxDLENBQXVDLEVBQXZDLENBSkMsQ0FLaEIsS0FBS0csUUFBTCxDQUFjLENBQUVMLFlBQVksQ0FBWkEsQ0FBRixDQUFkLENBQWdDLGlCQUFNTSxDQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWUwsQ0FBYSxDQUFDLENBQUQsQ0FBekIsQ0FBTixDQUFoQyxDQUxnQixFQU9oQixLQUFLRyxRQUFMLENBQWMsQ0FBRUwsWUFBWSxDQUFaQSxDQUFGLENBQWQsQ0FFSCxDLHVDQUVRLElBQ0NBLENBQUFBLENBREQsQ0FDa0IsS0FBS1EsS0FEdkIsQ0FDQ1IsWUFERCxDQUVDUyxDQUZELENBRXVCLEtBQUtSLEtBRjVCLENBRUNRLGlCQUZELENBSVAsTUFBT0EsQ0FBQUEsQ0FBaUIsQ0FDdEIsZ0NBQUMsQ0FBRCxFQUFtQixPQUFPLEdBQTFCLENBQTJCLE9BQU8sQ0FBRVQsQ0FBcEMsRUFEc0IsQ0FHdEIsdUNBQUssU0FBUyxDQUFDLG1CQUFmLENBQW1DLHVCQUF1QixDQUFFLENBQUVVLE1BQU0sQ0FBRVYsQ0FBVixDQUE1RCxFQUVILEMsT0F6QndCVyxrQkFBTUMsUyxXQTJCbEJiLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBDb25maXJtYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBjb25maXJtYXRpb246ICcnLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGxldCB7IGNvbmZpcm1hdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBleHRyYWN0c2NyaXB0ID0gLzxzY3JpcHQ+KC4rKTxcXC9zY3JpcHQ+L2dpLmV4ZWMoY29uZmlybWF0aW9uKTtcbiAgICBpZiAoZXh0cmFjdHNjcmlwdCkge1xuICAgICAgY29uZmlybWF0aW9uID0gY29uZmlybWF0aW9uLnJlcGxhY2UoZXh0cmFjdHNjcmlwdFswXSwgJycpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbmZpcm1hdGlvbiB9LCAoKSA9PiB3aW5kb3cuZXZhbChleHRyYWN0c2NyaXB0WzFdKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb25maXJtYXRpb24gfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29uZmlybWF0aW9uIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgU0Zvcm1Db25maXJtYXRpb24gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gU0Zvcm1Db25maXJtYXRpb24gPyAoXG4gICAgICA8U0Zvcm1Db25maXJtYXRpb24gc3VjY2VzcyBtZXNzYWdlPXtjb25maXJtYXRpb259IC8+XG4gICAgKSA6IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb25maXJtYXRpb25cIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbmZpcm1hdGlvbiB9fSAvPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENvbmZpcm1hdGlvbjtcblxuIl19
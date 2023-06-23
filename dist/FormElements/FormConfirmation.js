"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized")),_inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits")),_possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn")),_getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_react=_interopRequireDefault(require("react"));function _createSuper(a){var b=_isNativeReflectConstruct();return function(){var c,d=(0,_getPrototypeOf2["default"])(a);if(b){var e=(0,_getPrototypeOf2["default"])(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return(0,_possibleConstructorReturn2["default"])(this,c)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}var Confirmation=function(a){function b(){var a;(0,_classCallCheck2["default"])(this,b);for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return a=c.call.apply(c,[this].concat(e)),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"state",{confirmation:""}),a}(0,_inherits2["default"])(b,a);var c=_createSuper(b);return(0,_createClass2["default"])(b,[{key:"componentDidMount",value:function componentDidMount(){var a=this.props.confirmation,b=/<script>(.+)<\/script>/gi.exec(a);b?(a=a.replace(b[0],""),this.setState({confirmation:a},function(){return window.eval(b[1])})):this.setState({confirmation:a})}},{key:"render",value:function render(){var a=this.state.confirmation,b=this.props.SFormConfirmation;return b?_react["default"].createElement(b,{success:!0,message:a}):_react["default"].createElement("div",{className:"form-confirmation",dangerouslySetInnerHTML:{__html:a}})}}]),b}(_react["default"].Component),_default=Confirmation;exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Gb3JtRWxlbWVudHMvRm9ybUNvbmZpcm1hdGlvbi5qc3giXSwibmFtZXMiOlsiQ29uZmlybWF0aW9uIiwiY29uZmlybWF0aW9uIiwicHJvcHMiLCJleHRyYWN0c2NyaXB0IiwiZXhlYyIsInJlcGxhY2UiLCJzZXRTdGF0ZSIsIndpbmRvdyIsImV2YWwiLCJzdGF0ZSIsIlNGb3JtQ29uZmlybWF0aW9uIiwiX19odG1sIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiJrN0NBRU1BLENBQUFBLFksd1FBQ0ksQ0FDTkMsWUFBWSxDQUFFLEVBRFIsQywwSkFJWSxJQUNaQSxDQUFBQSxDQURZLENBQ0ssS0FBS0MsS0FEVixDQUNaRCxZQURZLENBRVpFLENBQWEsQ0FBRywyQkFBMkJDLElBQTNCLENBQWdDSCxDQUFoQyxDQUZKLENBR2RFLENBSGMsRUFJaEJGLENBQVksQ0FBR0EsQ0FBWSxDQUFDSSxPQUFiLENBQXFCRixDQUFhLENBQUMsQ0FBRCxDQUFsQyxDQUF1QyxFQUF2QyxDQUpDLENBS2hCLEtBQUtHLFFBQUwsQ0FBYyxDQUFFTCxZQUFZLENBQVpBLENBQUYsQ0FBZCxDQUFnQyxpQkFBTU0sQ0FBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlMLENBQWEsQ0FBQyxDQUFELENBQXpCLENBQU4sQ0FBaEMsQ0FMZ0IsRUFPaEIsS0FBS0csUUFBTCxDQUFjLENBQUVMLFlBQVksQ0FBWkEsQ0FBRixDQUFkLENBRUgsQyx1Q0FFUSxJQUNDQSxDQUFBQSxDQURELENBQ2tCLEtBQUtRLEtBRHZCLENBQ0NSLFlBREQsQ0FFQ1MsQ0FGRCxDQUV1QixLQUFLUixLQUY1QixDQUVDUSxpQkFGRCxDQUlQLE1BQU9BLENBQUFBLENBQWlCLENBQ3RCLGdDQUFDLENBQUQsRUFBbUIsT0FBTyxHQUExQixDQUEyQixPQUFPLENBQUVULENBQXBDLEVBRHNCLENBR3RCLHVDQUFLLFNBQVMsQ0FBQyxtQkFBZixDQUFtQyx1QkFBdUIsQ0FBRSxDQUFFVSxNQUFNLENBQUVWLENBQVYsQ0FBNUQsRUFFSCxDLE9BekJ3Qlcsa0JBQU1DLFMsV0EyQmxCYixZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIENvbmZpcm1hdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBjb25maXJtYXRpb246ICcnLFxyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgbGV0IHsgY29uZmlybWF0aW9uIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgZXh0cmFjdHNjcmlwdCA9IC88c2NyaXB0PiguKyk8XFwvc2NyaXB0Pi9naS5leGVjKGNvbmZpcm1hdGlvbik7XHJcbiAgICBpZiAoZXh0cmFjdHNjcmlwdCkge1xyXG4gICAgICBjb25maXJtYXRpb24gPSBjb25maXJtYXRpb24ucmVwbGFjZShleHRyYWN0c2NyaXB0WzBdLCAnJyk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb25maXJtYXRpb24gfSwgKCkgPT4gd2luZG93LmV2YWwoZXh0cmFjdHNjcmlwdFsxXSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbmZpcm1hdGlvbiB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY29uZmlybWF0aW9uIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgeyBTRm9ybUNvbmZpcm1hdGlvbiB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gU0Zvcm1Db25maXJtYXRpb24gPyAoXHJcbiAgICAgIDxTRm9ybUNvbmZpcm1hdGlvbiBzdWNjZXNzIG1lc3NhZ2U9e2NvbmZpcm1hdGlvbn0gLz5cclxuICAgICkgOiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb25maXJtYXRpb25cIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbmZpcm1hdGlvbiB9fSAvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ29uZmlybWF0aW9uO1xyXG5cclxuIl19
"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized")),_inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits")),_possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn")),_getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_react=_interopRequireDefault(require("react"));function _createSuper(a){var b=_isNativeReflectConstruct();return function(){var c,d=(0,_getPrototypeOf2["default"])(a);if(b){var e=(0,_getPrototypeOf2["default"])(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return(0,_possibleConstructorReturn2["default"])(this,c)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}var Confirmation=function(a){function b(){var a;(0,_classCallCheck2["default"])(this,b);for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return a=c.call.apply(c,[this].concat(e)),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"state",{confirmation:""}),a}(0,_inherits2["default"])(b,a);var c=_createSuper(b);return(0,_createClass2["default"])(b,[{key:"componentDidMount",value:function componentDidMount(){var a=this.props.confirmation,b=/<script>(.+)<\/script>/gi.exec(a);b?(a=a.replace(b[0],""),this.setState({confirmation:a},function(){return window.eval(b[1])})):this.setState({confirmation:a})}},{key:"render",value:function render(){var a=this.state.confirmation,b=this.props.SFormConfirmation;return b?_react["default"].createElement(b,{success:!0,message:a}):_react["default"].createElement("div",{className:"form-confirmation",dangerouslySetInnerHTML:{__html:a}})}}]),b}(_react["default"].Component),_default=Confirmation;exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDb25maXJtYXRpb24iLCJhIiwiYiIsIl9jbGFzc0NhbGxDaGVjazIiLCJkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZSIsIkFycmF5IiwiZiIsImMiLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJfZGVmaW5lUHJvcGVydHkyIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZDIiLCJjb25maXJtYXRpb24iLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZVN1cGVyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwiY29tcG9uZW50RGlkTW91bnQiLCJwcm9wcyIsImV4dHJhY3RzY3JpcHQiLCJleGVjIiwicmVwbGFjZSIsInNldFN0YXRlIiwid2luZG93IiwiZXZhbCIsInJlbmRlciIsInN0YXRlIiwiU0Zvcm1Db25maXJtYXRpb24iLCJfcmVhY3QiLCJjcmVhdGVFbGVtZW50Iiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJjbGFzc05hbWUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiX2RlZmF1bHQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL0Zvcm1FbGVtZW50cy9Gb3JtQ29uZmlybWF0aW9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBDb25maXJtYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBjb25maXJtYXRpb246ICcnLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGxldCB7IGNvbmZpcm1hdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBleHRyYWN0c2NyaXB0ID0gLzxzY3JpcHQ+KC4rKTxcXC9zY3JpcHQ+L2dpLmV4ZWMoY29uZmlybWF0aW9uKTtcbiAgICBpZiAoZXh0cmFjdHNjcmlwdCkge1xuICAgICAgY29uZmlybWF0aW9uID0gY29uZmlybWF0aW9uLnJlcGxhY2UoZXh0cmFjdHNjcmlwdFswXSwgJycpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbmZpcm1hdGlvbiB9LCAoKSA9PiB3aW5kb3cuZXZhbChleHRyYWN0c2NyaXB0WzFdKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb25maXJtYXRpb24gfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29uZmlybWF0aW9uIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgU0Zvcm1Db25maXJtYXRpb24gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gU0Zvcm1Db25maXJtYXRpb24gPyAoXG4gICAgICA8U0Zvcm1Db25maXJtYXRpb24gc3VjY2VzcyBtZXNzYWdlPXtjb25maXJtYXRpb259IC8+XG4gICAgKSA6IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb25maXJtYXRpb25cIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbmZpcm1hdGlvbiB9fSAvPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENvbmZpcm1hdGlvbjtcblxuIl0sIm1hcHBpbmdzIjoidTdDQUVNLENBQUFBLFlBQVksVUFBQUMsQ0FBQSxXQUFBQyxFQUFBLE1BQUFELENBQUEsSUFBQUUsZ0JBQUEsa0JBQUFELENBQUEsVUFBQUUsQ0FBQSxDQUFBQyxTQUFBLENBQUFDLE1BQUEsQ0FBQUMsQ0FBQSxDQUFBQyxLQUFBLENBQUFKLENBQUEsRUFBQUssQ0FBQSxHQUFBQSxDQUFBLENBQUFMLENBQUEsQ0FBQUssQ0FBQSxHQUFBRixDQUFBLENBQUFFLENBQUEsRUFBQUosU0FBQSxDQUFBSSxDQUFBLFNBQUFSLENBQUEsQ0FBQVMsQ0FBQSxDQUFBQyxJQUFBLENBQUFDLEtBQUEsQ0FBQUYsQ0FBQSxRQUFBRyxNQUFBLENBQUFOLENBQUEsTUFBQU8sZ0JBQUEsZ0JBQUFDLHVCQUFBLGFBQUFkLENBQUEsVUFDUixDQUNOZSxZQUFZLENBQUUsRUFDaEIsQ0FBQyxFQUFBZixDQUFBLElBQUFnQixVQUFBLGFBQUFmLENBQUEsQ0FBQUQsQ0FBQSxNQUFBUyxDQUFBLENBQUFRLFlBQUEsQ0FBQWhCLENBQUEsV0FBQWlCLGFBQUEsYUFBQWpCLENBQUEsR0FBQWtCLEdBQUEscUJBQUFDLEtBQUEsQ0FFRCxTQUFBQyxrQkFBQSxDQUFvQixJQUNaLENBQUFOLENBQVksQ0FBSyxJQUFJLENBQUNPLEtBQUssQ0FBM0JQLFlBQVksQ0FDWlEsQ0FBYSxDQUFHLDBCQUEwQixDQUFDQyxJQUFJLENBQUNULENBQVksQ0FBQyxDQUMvRFEsQ0FBYSxFQUNmUixDQUFZLENBQUdBLENBQVksQ0FBQ1UsT0FBTyxDQUFDRixDQUFhLENBQUMsQ0FBQyxDQUFDLENBQUUsRUFBRSxDQUFDLENBQ3pELElBQUksQ0FBQ0csUUFBUSxDQUFDLENBQUVYLFlBQVksQ0FBWkEsQ0FBYSxDQUFDLENBQUUsaUJBQU0sQ0FBQVksTUFBTSxDQUFDQyxJQUFJLENBQUNMLENBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBRXBFLElBQUksQ0FBQ0csUUFBUSxDQUFDLENBQUVYLFlBQVksQ0FBWkEsQ0FBYSxDQUFDLENBRWxDLENBQUMsR0FBQUksR0FBQSxVQUFBQyxLQUFBLENBRUQsU0FBQVMsT0FBQSxDQUFTLElBQ0MsQ0FBQWQsQ0FBWSxDQUFLLElBQUksQ0FBQ2UsS0FBSyxDQUEzQmYsWUFBWSxDQUNaZ0IsQ0FBaUIsQ0FBSyxJQUFJLENBQUNULEtBQUssQ0FBaENTLGlCQUFpQixDQUV6QixNQUFPLENBQUFBLENBQWlCLENBQ3RCQyxNQUFBLFlBQUFDLGFBQUEsQ0FBQ2hDLENBQWlCLEVBQUNpQyxPQUFPLElBQUNDLE9BQU8sQ0FBRXBCLENBQWEsQ0FBRSxDQUFDLENBRXBEaUIsTUFBQSxZQUFBQyxhQUFBLFFBQUtHLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQ0MsdUJBQXVCLENBQUUsQ0FBRUMsTUFBTSxDQUFFdkIsQ0FBYSxDQUFFLENBQUUsQ0FFM0YsQ0FBQyxJQUFBZCxDQUFBLEVBekJ3QnNDLGlCQUFLLENBQUNDLFNBQVMsRUFBQUMsUUFBQSxDQTJCM0IxQyxZQUFZLENBQUEyQyxPQUFBLFlBQUFELFFBQUEifQ==
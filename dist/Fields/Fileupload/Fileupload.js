"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireWildcard(require("react")),_reactDropzone=_interopRequireDefault(require("react-dropzone")),_GFDropzone=_interopRequireDefault(require("./GFDropzone")),_InputLabel=_interopRequireDefault(require("../../FormElements/InputLabel"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return _getRequireWildcardCache=function(){return a},a}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var b=_getRequireWildcardCache();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c["default"]=a,b&&b.set(a,c),c}function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _createSuper(a){var b=_isNativeReflectConstruct();return function(){var c,d=_getPrototypeOf(a);if(b){var e=_getPrototypeOf(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return _possibleConstructorReturn(this,c)}}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var Fileupload=function(a){function b(){var a;_classCallCheck(this,b);for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return a=c.call.apply(c,[this].concat(e)),_defineProperty(_assertThisInitialized(a),"state",{imagePreviewUrl:a.props.field.preview||null,selectedFile:!!a.props.field.preview||null,uploadFileText:"No file chosen",previewID:a.props.value||null,errorText:a.props.error||!1}),_defineProperty(_assertThisInitialized(a),"inputFile",_react["default"].createRef()),_defineProperty(_assertThisInitialized(a),"onChangeHandler",function(b){var c=a.props.field,d=c.hasPreview,e=c.allowedExtensions;if(a.setState({imagePreviewUrl:null,selectedFile:b.target.files[0],uploadFileText:b.target.files[0]?b.target.files[0].name:"No file chosen"}),d&&b.target&&b.target.files[0]){var f=b.target.files[0].name.split(".").pop().toLowerCase(),g=-1<e.indexOf(f);if(g){var h=new FileReader;h.onloadend=function(){a.setState({imagePreviewUrl:h.result,previewID:!1})},h.readAsDataURL(b.target.files[0])}}}),_defineProperty(_assertThisInitialized(a),"removeFilePreview",function(){var b=a.props,c=b.field,d=b.unsetError;a.inputFile.current.value="",a.setState({imagePreviewUrl:null,selectedFile:null,previewID:!1}),d(c.id)}),_defineProperty(_assertThisInitialized(a),"prepareAllowedTypes",function(a){var b=a.split(",");return b=b.map(function(a){return".".concat(a.replace(/\s/g,""))}).join(", "),b}),_defineProperty(_assertThisInitialized(a),"onButtonClickHandler",function(){a.inputFile.current.click()}),_defineProperty(_assertThisInitialized(a),"removeFile",function(b,c){b.preventDefault();var d=a.props.updateForm;d({target:{value:""}},c),a.inputFile.current.value="",a.setState({imagePreviewUrl:!1,selectedFile:!1,previewID:!1,uploadFileText:"No file chosen"})}),a}_inherits(b,a);var c=_createSuper(b);return _createClass(b,[{key:"render",value:function render(){var a=this,b=this.state,c=b.selectedFile,d=b.uploadFileText,e=b.imagePreviewUrl,f=b.previewID,g=this.props,h=g.field,i=g.value,j=g.validationMessage,k=g.touched,l=g.setTouched,m=g.hideField,n=g.updateForm,o=g.formID,p=g.fieldError,q=g.styledComponents,r=g.error,s=g.unsetError,t=g.dropzoneText,u=h.id,v=h.type,w=h.label,x=h.cssClass,y=h.isRequired,z=h.description,A=h.descriptionPlacement,B=h.labelPlacement,C=h.width,D=h.allowedExtensions,E=h.buttonText,F=h.hasPreview,G=h.maxFileSize,H=q||!1,I=H.Button,J=void 0===I?"button":I,K=H.Label,L=void 0===K?"label":K,M=H.FileWrapper,N=void 0===M?"div":M,O=H.Box,P=void 0===O?"div":O,Q=-1<x.indexOf("dropzone");return _react["default"].createElement(P,{width:C,className:j&&k||r?"form-field error ".concat(x):"form-field ".concat(x),style:{display:m?"none":void 0}},_react["default"].createElement(N,{className:v},_react["default"].createElement(_InputLabel["default"],{formId:o,id:u,label:w,labelPlacement:B,isRequired:y,styledComponent:q}),"above"===A&&z?z&&_react["default"].createElement("div",{className:"description"},z):Q?_react["default"].createElement(_GFDropzone["default"],{dropzoneText:t,field:h,id:u,formID:o,isRequired:y,updateForm:n,setTouched:l,unsetError:s}):_react["default"].createElement(_react["default"].Fragment,null,G&&_react["default"].createElement("input",{type:"hidden",name:"MAX_FILE_SIZE",value:1048576*G}),_react["default"].createElement("input",{id:"input_".concat(o,"_").concat(u),name:"input_".concat(u),type:"file",required:y,ref:this.inputFile,onChange:function onChange(b){var c,d,e;a.onChangeHandler(b),n({target:{value:null===b||void 0===b||null===(c=b.target)||void 0===c||null===(d=c.files)||void 0===d||null===(e=d[0])||void 0===e?void 0:e.name}},h),l(u),s(u)},onBlur:function onBlur(a){var b,c,d;n({target:{value:null===a||void 0===a||null===(b=a.target)||void 0===b||null===(c=b.files)||void 0===c||null===(d=c[0])||void 0===d?void 0:d.name}},h),l(u)},accept:this.prepareAllowedTypes(D)||void 0,"aria-label":w,"aria-describedby":"error_".concat(o,"_").concat(u),"aria-invalid":!!j||!!r,hidden:"hidden"}),f&&h.preview&&_react["default"].createElement("input",{type:"hidden",name:"file-upload-preview",value:f}),F&&_react["default"].createElement("div",{className:"file-preview",style:c&&e?{backgroundImage:"url(".concat(e,")")}:void 0},c&&e&&_react["default"].createElement("button",{type:"button",className:"remove-file",onClick:function onClick(){return a.removeFilePreview()}})),_react["default"].createElement("div",{"aria-pressed":"false",tabIndex:"0",role:"button",className:"fileUpload",onClick:this.onButtonClickHandler},_react["default"].createElement(J,{color:"yellow",tabIndex:"-1",type:"button"},E||"Choose a file"),!c&&_react["default"].createElement("span",{className:"no-file"},d)),c&&_react["default"].createElement("div",null,_react["default"].createElement("button",{type:"button",onClick:function onClick(b){return a.removeFile(b,h)}},"remove file"),_react["default"].createElement("span",null,d)),z&&_react["default"].createElement("div",{className:"description"},z)),(j&&k||r)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(u)},j||r),p&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(o,"_").concat(u)},p)))}}]),b}(_react.Component),_default=Fileupload;exports["default"]=_default;
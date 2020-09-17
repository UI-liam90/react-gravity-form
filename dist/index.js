"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"RenderFields",{enumerable:!0,get:function get(){return _RenderFields["default"]}}),Object.defineProperty(exports,"FormError",{enumerable:!0,get:function get(){return _FormError["default"]}}),Object.defineProperty(exports,"FormConfirmation",{enumerable:!0,get:function get(){return _FormConfirmation["default"]}}),Object.defineProperty(exports,"validateField",{enumerable:!0,get:function get(){return _validation.validateField}}),Object.defineProperty(exports,"Submit",{enumerable:!0,get:function get(){return _Submit["default"]}}),exports["default"]=void 0;var _react=_interopRequireWildcard(require("react")),_isomorphicUnfetch=_interopRequireDefault(require("isomorphic-unfetch")),_RenderFields=_interopRequireDefault(require("./FormElements/RenderFields")),_FormError=_interopRequireDefault(require("./FormElements/FormError")),_FormConfirmation=_interopRequireDefault(require("./FormElements/FormConfirmation")),_validation=require("./Helpers/validation"),_utils=require("./Helpers/utils"),_Submit=_interopRequireDefault(require("./FormElements/Submit"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return _getRequireWildcardCache=function(){return a},a}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var b=_getRequireWildcardCache();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c["default"]=a,b&&b.set(a,c),c}function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _createForOfIteratorHelper(a,b){var c;if("undefined"==typeof Symbol||null==a[Symbol.iterator]){if(Array.isArray(a)||(c=_unsupportedIterableToArray(a))||b&&a&&"number"==typeof a.length){c&&(a=c);var d=0,e=function(){};return{s:e,n:function n(){return d>=a.length?{done:!0}:{done:!1,value:a[d++]}},e:function e(a){throw a},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f,g=!0,h=!1;return{s:function s(){c=a[Symbol.iterator]()},n:function n(){var a=c.next();return g=a.done,a},e:function e(a){h=!0,f=a},f:function f(){try{g||null==c["return"]||c["return"]()}finally{if(h)throw f}}}}function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){asyncGeneratorStep(h,d,e,f,g,"next",a)}function g(a){asyncGeneratorStep(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _iterableToArray(a){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _createSuper(a){var b=_isNativeReflectConstruct();return function(){var c,d=_getPrototypeOf(a);if(b){var e=_getPrototypeOf(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return _possibleConstructorReturn(this,c)}}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var GravityForm=function(a){function b(a){var d;return _classCallCheck(this,b),d=c.call(this,a),_defineProperty(_assertThisInitialized(d),"getFieldPrepopulatedValue",function(a,b,c){var d,e=!1,f=a.inputName&&b&&b[a.inputName];if(c&&c[a.id]?e=!0:c&&a.inputs&&a.inputs.some(function(a){c[a.id]&&(e=!0)}),"checkbox"===a.type)d=a.choices.filter(function(c){return f?c.value===b[a.inputName]:c.isSelected}).map(function(a){return a.value}),e&&(d=a.inputs.filter(function(a){return c[a.id]}).map(function(a){return a.label}));else if("radio"===a.type){if(f)d=b[a.inputName];else{var g=a.choices.find(function(a){return a.isSelected});d=g?g.value:""}}else if("select"===a.type){var h=a.choices.filter(function(c){return f?c.value===b[a.inputName]:c.isSelected}).map(function(a){return{value:a.value,label:a.text}});d=h&&0<h.length?h[0]:""}else d=f?b[a.inputName]:e?c[a.id]:a.defaultValue;return d}),_defineProperty(_assertThisInitialized(d),"updateFieldsValuesBasedOnEntry",function(a){for(var b,c=d.state,e=c.formValues,f=c.formData,g=Object.keys(e),h=!1,j=_objectSpread({},e),k=function(b){var c=g[b];if(a[c]){var i=f.fields.filter(function(a){return a.id==c});if(!i[0])return"continue";var k=d.getFieldPrepopulatedValue(i[0],[],a);k&&e[c]&&e[c].value&&e[c].value!=k&&(j[c].value=k,h=!0)}},l=0;l<g.length;l++)b=k(l),"continue"===b;h&&d.setState({formValues:j})}),_defineProperty(_assertThisInitialized(d),"setTouched",function(a){d.setState({touched:_objectSpread(_objectSpread({},d.state.touched),{},_defineProperty({},a,!0))})}),_defineProperty(_assertThisInitialized(d),"unsetError",function(a){var b=d.state.errorMessages;!b||b[a]&&(delete b[a],d.setState({errorMessages:b}))}),_defineProperty(_assertThisInitialized(d),"updateFormHandler",function(a,b){var c,e=d.state,f=e.formValues,g=e.conditioanlIds,h=e.conditionFields,j=b.id,k=b.type,l=b.isRequired;if("checkbox"===b.type){var m=_toConsumableArray(f[b.id].value),n=m.indexOf(a.target.value);-1<n?m.splice(n,1):m.push(a.target.value),c=m}else if("date"==b.type&&"datepicker"!==b.dateType){var o=b.subId,p=b.dateLabel,q=_toConsumableArray(f[b.id].value);q[o]={val:a.target.value,label:p},c=q}else if("consent"==b.type)c=a.target?a.target.checked:"null";else if("password"===b.type||"email"===b.type&&b.emailConfirmEnabled){var r=b.subId,s=f[b.id]&&f[b.id].value?_toConsumableArray(f[b.id].value):[];s[r]={val:a.target.value},c=s}else c=a.target?a.target.value:"null";"text"===k&&-1<b.cssClass.indexOf("iban")&&(k="iban");var t=(0,_validation.validateField)(c,b);if(-1!==g.indexOf(j)){f[j].value=c;for(var w=0;w<h.length;w++){var u=h[w].id,v=d.checkConditionalLogic(h[w].conditionalLogic,f);f[u].hideField=v,v&&(f[u].isRequired&&v&&(f[u].value=""),f[u].valid=!!f[u].isRequired)}}d.setState({formValues:_objectSpread(_objectSpread({},f),{},_defineProperty({},j,{value:c,id:j,valid:t,label:b.label,pageNumber:b.pageNumber,cssClass:b.cssClass,isRequired:b.isRequired}))},function(){var a=d.props,e=a.onChange,f=a.onChangeField;e&&e(d.state.formValues),f&&f(_defineProperty({},j,{value:c,id:j,valid:t,label:b.label,pageNumber:b.pageNumber,cssClass:b.cssClass,isRequired:b.isRequired}))})}),_defineProperty(_assertThisInitialized(d),"scrollToConfirmation",function(){var a=d.props,b=a.onChangePage,c=a.jumpToConfirmation;if(b&&b(),c){var e=!!d.wrapperRef&&d.wrapperRef.getBoundingClientRect();if(e&&window){var f=window.pageYOffset||document.documentElement.scrollTop;window.scrollTo({top:f+e.top-100})}}}),_defineProperty(_assertThisInitialized(d),"onSubmit",function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b){var c,e,f,g,h,i,j,k,l;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:c=d.props.onSubmit,e=new FormData(b.target),b.preventDefault(),c?c(e):(d.setState({submitting:!0,submitSuccess:!1,submitFailed:!1,confirmationMessage:!1,errorMessages:!1}),f=d.props,g=f.formID,h=f.backendUrl,i=f.jumpToConfirmation,j=f.onSubmitSuccess,k=f.onError,l=h.substring(0,h.indexOf("/wp-json")),(0,_isomorphicUnfetch["default"])("".concat(l,"/wp-json/gf/v2/forms/").concat(g,"/submissions"),{method:"POST",body:e}).then(function(a){return a.json()}).then(function(a){if(a&&a.is_valid){if(j){var g=j(a);if(!g)return!1}var b=a.confirmation_message,c=b||!1,e=c.type,f=c.link;if(e&&f&&"redirect"===e&&"undefined"!=typeof window)return window.location.replace(f),!1;d.setState({submitting:!1,submitSuccess:!0,confirmationMessage:a.confirmation_message}),i&&d.scrollToConfirmation()}else throw{response:a}})["catch"](function(a){var b=a&&a.response&&a.response.validation_messages?a.response.validation_messages:"Something went wrong";k?(k(b),d.setState({submitting:!1,submitFailed:!0})):d.setState({submitting:!1,submitFailed:!0,errorMessages:b}),i&&d.scrollToConfirmation()}));case 4:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}()),_defineProperty(_assertThisInitialized(d),"getNextStep",function(a){var b=d.state,c=b.formValues,e=b.pages,f=a+1,g=e[a-1];return!!c[g]&&(!0===c[g].hideField&&(f=d.getNextStep(f)),f)}),_defineProperty(_assertThisInitialized(d),"getPrevStep",function(a){var b=d.state,c=b.formValues,e=b.pages,f=a-1,g=e[a-3]||0;return c[g]&&!0===c[g].hideField&&(f=d.getPrevStep(f)),f}),_defineProperty(_assertThisInitialized(d),"nextStep",function(a){a&&a.preventDefault();var b=d.state,c=b.activePage,e=b.formValues,f=d.props,g=f.activePage,h=f.beforeNextPage,i=d.getNextStep(c);h&&h(c,e,i),g&&g(i),d.setState({activePage:i},function(){return d.scrollToConfirmation()})}),_defineProperty(_assertThisInitialized(d),"prevStep",function(a){a&&a.preventDefault();var b=d.state.activePage,c=d.props.activePage,e=d.getPrevStep(b)||1;c&&c(e),d.setState({activePage:e},function(){return d.scrollToConfirmation()})}),_defineProperty(_assertThisInitialized(d),"checkConditionalLogic",function(a){var b=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],c=a.rules,e=a.actionType;if(!c)return!0;for(var f=b||d.state.formValues,g="hide"!==e,h=[],j=0;j<c.length;j++){var k=c[j],l=k.fieldId,m=k.value,n=k.operator,o=f[l].value&&f[l].value.value?f[l].value.value:f[l].value||!1,p=Array.isArray(o)?o.join(""):o;h[j]=m?p&&m==p?"hide"===e:p&&p.includes(m)?"hide"===e:"hide"!==e:p||m?"hide"!==e:"hide"===e,"isnot"===n&&(h[j]=!h[j])}return g=h.every(function(a){return!0===a}),g}),_defineProperty(_assertThisInitialized(d),"isFieldDisabled",function(a){var b=d.state.formData,c=Object.keys(a),e=c.some(function(d){if(b&&b.pagination){var e=a[d].pageNumber,f=c.filter(function(b){return"page"===a[b].type&&a[b].pageNumber==e});if(f&&0<f.length)return!a[d].hideField&&a[d].valid&&!a[f[0]].hideField}return!a[d].hideField&&a[d].valid});return e}),d.state={submitFailed:!1,errorMessages:!1,formValues:{},loading:!0,submitting:!1,submitSuccess:!1,confirmationMessage:!1,isValid:!1,formData:{},touched:{},activePage:!1,conditionFields:{},conditioanlIds:{},isMultipart:!1},d}_inherits(b,a);var c=_createSuper(b);return _createClass(b,[{key:"componentDidMount",value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(){var b,c,d,e,f,g,h,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B=this;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b=this.props,c=b.formID,d=b.backendUrl,e=b.populatedFields,f=b.populatedEntry,g=b.fetchOptions,h=b.initialPage,j=b.getParams,this._isMounted=!0,k=!1,l=j?Object.keys(j).map(function(a){return"".concat(a,"=").concat(j[a])}).join("&"):"",m="".concat(d,"/").concat(c).concat(l?"?".concat(l):""),a.next=7,(0,_isomorphicUnfetch["default"])(m,g).then(function(a){return a.json()}).then(function(a){return a})["catch"](function(){return!1});case 7:if(n=a.sent,n&&this._isMounted){o={},p=[],q=[],r=[],s=_createForOfIteratorHelper(n.fields);try{for(s.s();!(t=s.n()).done;){if(u=t.value,v=void 0,"page"===u.type&&r.push(u.id),v=this.getFieldPrepopulatedValue(u,e,f),"fileupload"===u.type&&(k=!0),u.conditionalLogic){for(w={id:u.id,conditionalLogic:u.conditionalLogic},x=u.conditionalLogic.rules.map(function(a){return a.fieldId}),y=0;y<x.length;y++)z=parseInt(x[y]),-1===q.indexOf(z)&&q.push(z);p.push(w)}o[u.id]={valid:(0,_validation.validateField)(v,u),value:v,label:u.label,pageNumber:u.pageNumber,cssClass:u.cssClass,isRequired:u.isRequired,type:u.type}}}catch(a){s.e(a)}finally{s.f()}for(A=0;A<p.length;A++)o[p[A].id].hideField=this.checkConditionalLogic(p[A].conditionalLogic,o);this.setState({formData:n,formValues:o,activePage:h||!!n.pagination&&1,conditionFields:p,conditioanlIds:q,isMultipart:k,pages:r,populatedEntry:f||!1},function(){var a=B.props,b=a.nextStep,c=a.prevStep,d=a.activePage;b&&b(function(){return B.nextStep}),c&&c(function(){return B.prevStep}),d&&d(B.state.activePage)})}case 9:case"end":return a.stop();}},a,this)}));return function componentDidMount(){return a.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function componentDidUpdate(a){var b=this.props,c=b.populatedEntry,d=b.initialPage,e=a.populatedEntry;c&&e&&!(0,_utils.equalShallow)(c,e)&&this.updateFieldsValuesBasedOnEntry(c),d&&d!==this.state.activePage&&this.setState({activePage:d})}},{key:"componentWillUnmount",value:function componentWillUnmount(){this._isMounted=!1}},{key:"render",value:function render(){var a=this,b=this.state,c=b.formData,d=b.formValues,e=b.submitFailed,f=b.submitSuccess,g=b.touched,h=b.submitting,i=b.activePage,j=b.isMultipart,k=this.props,l=k.title,m=k.submitIcon,n=k.saveStateToHtmlField,o=k.styledComponents,p=k.customComponents,q=k.errorMessage,r=k.dropzoneText,s=k.loadingSpinner,t=k.onError,u=o||!1,v=u.Button,w=u.Loading,x=u.GFWrapper,y=void 0===x?"div":x,z=u.FormError,A=u.FormConfirmation,B=c.cssClass,C=this.isFieldDisabled(d),D=!!i&&Object.keys(d).some(function(a){return d[a].pageNumber===i&&!d[a].hideField&&d[a].valid});return _react["default"].createElement(y,{ref:function ref(b){return a.wrapperRef=b},className:"form-wrapper",css:{position:"relative"},id:"gravity_form_".concat(this.props.formID)},c.title?null:w&&_react["default"].createElement(w,{isLoading:!0}),e&&!f&&!t&&_react["default"].createElement(_FormError["default"],{SFormError:z||!1,errorMessage:q||"There was a problem with your submission"}),f&&this.state.confirmationMessage&&_react["default"].createElement(_FormConfirmation["default"],{confirmation:this.state.confirmationMessage,SFormConfirmation:A}),!f&&c.fields?_react["default"].createElement("form",{onSubmit:function onSubmit(b){return a.onSubmit(b)},className:B,encType:j?"multipart/form-data":void 0,noValidate:!0},(c.title||c.description)&&_react["default"].createElement("div",null,c.title&&l?_react["default"].createElement("h3",{className:"form-title"},c.title):null,c.description?_react["default"].createElement("p",{className:"form-description"},c.description):null),_react["default"].createElement("div",{className:"form-wrapper"},_react["default"].createElement(_RenderFields["default"],{styledComponents:o,customComponents:p,fields:c.fields,formValues:d,submitFailed:e,submitSuccess:f,updateForm:this.updateFormHandler,touched:g,setTouched:this.setTouched,pagination:c.pagination,activePage:i,prevStep:this.prevStep,nextStep:this.nextStep,isNextDisabled:D,checkConditionalLogic:this.checkConditionalLogic,saveStateToHtmlField:n,enableHoneypot:c.enableHoneypot,errors:this.state.errorMessages,unsetError:this.unsetError,dropzoneText:r}),(!c.pagination||c.pagination&&c.pagination.pages.length===i)&&_react["default"].createElement(_Submit["default"],{Button:v,Loading:w,formData:c,submitIcon:m,isDisabled:C,submitting:h,prevStep:this.prevStep,loadingSpinner:s}))):"")}}]),b}(_react.Component);GravityForm.defaultProps={title:!0,submitIcon:!1,saveStateToHtmlField:!1,jumpToConfirmation:!0};var _default=GravityForm;exports["default"]=_default;
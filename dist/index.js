"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"FormConfirmation",{enumerable:!0,get:function get(){return _FormElements.FormConfirmation}}),Object.defineProperty(exports,"FormError",{enumerable:!0,get:function get(){return _FormElements.FormError}}),Object.defineProperty(exports,"RenderFields",{enumerable:!0,get:function get(){return _FormElements.RenderFields}}),Object.defineProperty(exports,"Submit",{enumerable:!0,get:function get(){return _FormElements.Submit}}),exports["default"]=void 0,Object.defineProperty(exports,"validateField",{enumerable:!0,get:function get(){return _validation.validateField}});var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator")),_extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_react=_interopRequireWildcard(require("react")),_isomorphicUnfetch=_interopRequireDefault(require("isomorphic-unfetch")),_FormElements=require("./FormElements"),_form=require("./Helpers/form"),_validation=require("./Helpers/validation");function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d["default"]=a,c&&c.set(a,d),d}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var GravityForm=function(a){var b,c=a.initialPage,d=a.populatedEntry,e=a.onChange,f=(0,_react.useState)(!1),g=(0,_slicedToArray2["default"])(f,2),h=g[0],i=g[1],j=(0,_react.useState)(!1),k=(0,_slicedToArray2["default"])(j,2),l=k[0],m=k[1],n=(0,_react.useState)({}),o=(0,_slicedToArray2["default"])(n,2),p=o[0],q=o[1],r=(0,_react.useState)(!1),s=(0,_slicedToArray2["default"])(r,2),t=s[0],u=s[1],v=(0,_react.useState)(!1),w=(0,_slicedToArray2["default"])(v,2),x=w[0],y=w[1],z=(0,_react.useState)(!1),A=(0,_slicedToArray2["default"])(z,2),B=A[0],C=A[1],D=(0,_react.useState)({}),E=(0,_slicedToArray2["default"])(D,2),F=E[0],G=E[1],H=(0,_react.useState)({}),I=(0,_slicedToArray2["default"])(H,2),J=I[0],K=I[1],L=(0,_react.useState)(c||1),M=(0,_slicedToArray2["default"])(L,2),N=M[0],O=M[1],P=(0,_react.useState)({}),Q=(0,_slicedToArray2["default"])(P,2),R=Q[0],S=Q[1],T=(0,_react.useState)({}),U=(0,_slicedToArray2["default"])(T,2),V=U[0],W=U[1],X=(0,_react.useState)(!1),Y=(0,_slicedToArray2["default"])(X,2),Z=Y[0],$=Y[1],_=(0,_react.useState)(!1),aa=(0,_slicedToArray2["default"])(_,2),ba=aa[0],ca=aa[1],da=(0,_react.useState)(!1),ea=(0,_slicedToArray2["default"])(da,2),fa=ea[0],ga=ea[1],ha=(0,_react.useState)({}),ia=(0,_slicedToArray2["default"])(ha,2),ja=ia[0],ka=ia[1],la=(0,_react.useRef)(null),ma=(0,_react.useCallback)(function(a){(0,_form.updateFieldsValuesBasedOnEntry)(a)},[]);(0,_react.useEffect)(function(){(0,_form.fetchForm)(_objectSpread({setFormData:G,setFormValues:q,setActivePage:O,setConditionFields:S,setConditionalIds:W,setPages:ka,setIsMultiPart:$},a))},[]),(0,_react.useEffect)(function(){e&&e(p)},[p]),(0,_react.useEffect)(function(){d&&ma(d)},[d]);var na=function(){if(la){var a=la.current.querySelector(".form-field.error");a&&a.scrollIntoView()}},oa=a.title,pa=a.formID,qa=a.submitIcon,ra=a.saveStateToHtmlField,sa=a.styledComponents,ta=a.customComponents,ua=a.errorMessage,va=a.dropzoneText,wa=a.loadingSpinner,xa=a.onError,ya=a.language,za=a.apiKeys,Aa=sa||!1,Ba=Aa.Button,Ca=Aa.Loading,Da=Aa.FormError,Ea=Aa.FormConfirmation,Fa=Aa.GFWrapper,Ga=void 0===Fa?"div":Fa,Ha=F||{},Ia=Ha.cssClass,Ja=Ha.button,Ka=void 0===Ja?{}:Ja,La=Ka.conditionalLogic,Ma=La&&(0,_form.checkConditionalLogic)(La,0<Object.keys(p).length?p:F.fields),Na=function(a){a.preventDefault(),(0,_form.prevStep)(p,ja,N,O,ca)},Oa=function(){var b=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function c(b){var d,e,f,g,h,j,k,l,n,o;return _regenerator["default"].wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(d=a.onSubmit,e=a.filterFormData,f=new FormData(b.target),e&&(f=e(f,p)),b.preventDefault(),g=(0,_form.forceValidation)(N,p,ga,K),g){c.next=8;break}return na(),c.abrupt("return",!1);case 8:d?d(f):(u(!0),y(!1),i(!1),C(!1),m(!1),h=a.formID,j=a.backendUrl,k=a.jumpToConfirmation,l=a.onSubmitSuccess,n=a.onError,o=j.substring(0,j.indexOf("/wp-json")),(0,_isomorphicUnfetch["default"])("".concat(o,"/wp-json/gf/v2/forms/").concat(h,"/submissions"),{method:"POST",body:f}).then(function(a){return a.json()}).then(function(b){if(b&&b.is_valid){if(l){var c=l(b);if(!c)return!1}var d=b.confirmation_message,e=d||!1,f=e.type,g=e.link;if(f&&g&&"redirect"===f&&"undefined"!=typeof window)return window.location.replace(g),!1;u(!1),y(!0),C(d),k&&(0,_form.scrollToConfirmation)(a,la,k)}else throw{response:b}})["catch"](function(b){var c=b&&b.response&&b.response.validation_messages?b.response.validation_messages:"Something went wrong";n?(n(c),u(!1),i(!0)):(u(!1),i(!0),m(c)),k&&(0,_form.scrollToConfirmation)(a,la)}));case 9:case"end":return c.stop()}},c)}));return function onSubmit(){return b.apply(this,arguments)}}();return _react["default"].createElement(Ga,{ref:la,className:"form-wrapper",id:"gravity_form_".concat(pa)},F.title?null:Ca&&_react["default"].createElement(Ca,{isLoading:!0}),h&&!x&&!xa&&_react["default"].createElement(_FormElements.FormError,{SFormError:Da||!1,errorMessage:ua||"There was a problem with your submission"}),x&&B&&_react["default"].createElement(_FormElements.FormConfirmation,{confirmation:B,SFormConfirmation:Ea}),!x&&F.fields?_react["default"].createElement("form",{id:"gravity_form_element_".concat(pa),onSubmit:function onSubmit(a){return Oa(a)},className:"".concat(Ia," gravity_form_element"),encType:Z?"multipart/form-data":void 0,noValidate:!0},(F.title||F.description)&&_react["default"].createElement("div",null,F.title&&oa?_react["default"].createElement("h3",{className:"form-title"},F.title):null,F.description?_react["default"].createElement("p",{className:"form-description"},F.description):null),_react["default"].createElement("div",{className:"form-wrapper"},(null===F||void 0===F||null===(b=F.pagination)||void 0===b?void 0:b.pages)&&_react["default"].createElement(_FormElements.ProgressBar,{pagination:F.pagination,activePage:N,firstPageCssClass:F.firstPageCssClass}),_react["default"].createElement(_FormElements.RenderFields,(0,_extends2["default"])({styledComponents:sa,customComponents:ta,fields:F.fields,formValues:p,submitFailed:h,submitSuccess:x,updateForm:function updateForm(a,b,c){return(0,_form.updateFormHandler)(b,a,c,p,q,V,R)},touched:J,setTouched:function setTouched(a){return(0,_form.setTouchedHandler)(a,J,K)},setErrorMessages:m,pagination:F.pagination,activePage:N,prevStep:function prevStep(a){return Na(a)},nextStep:function nextStep(b){return(0,_form.nextStep)(b,a,ja,p,N,O,ca,K,ga)},checkConditionalLogic:function checkConditionalLogic(a,b){return(0,_form.checkConditionalLogic)(a,b=!1)},saveStateToHtmlField:ra,enableHoneypot:F.enableHoneypot,errors:l,unsetError:function unsetError(a){return(0,_form.unsetError)(a,l)},dropzoneText:va,pageClicked:ba,language:ya,apiKeys:za},a)),(!F.pagination||F.pagination&&F.pagination.pages.length===N)&&_react["default"].createElement(_FormElements.Submit,{Button:Ba,Loading:Ca,formData:F,submitIcon:qa,submitting:t,prevStep:function prevStep(a){return Na(a)},loadingSpinner:wa,hideSubmitButton:Ma}))):"")};GravityForm.defaultProps={title:!0,submitIcon:!1,saveStateToHtmlField:!1,jumpToConfirmation:!0};var _default=GravityForm;exports["default"]=_default;
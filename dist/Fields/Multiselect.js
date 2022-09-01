"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard"),_interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray")),_slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireWildcard(require("react")),_reactSelect=_interopRequireDefault(require("react-select")),_InputLabel=_interopRequireDefault(require("../FormElements/InputLabel")),_default=function(a){var b,c=a.field,d=a.value,e=a.validationMessage,f=a.touched,g=a.setTouched,h=a.setFocusClass,i=a.updateForm,j=a.hideField,k=a.styledComponents,l=a.error,m=a.unsetError,n=a.cssClass,o=(0,_objectWithoutProperties2["default"])(a,["field","value","validationMessage","touched","setTouched","setFocusClass","updateForm","hideField","styledComponents","error","unsetError","cssClass"]),p=c.id,q=c.formId,r=c.type,s=c.label,t=c.isRequired,u=c.choices,v=c.placeholder,w=c.description,x=c.descriptionPlacement,y=c.labelPlacement,z=c.width,A=c.customName,B=(0,_react.useState)(""),C=(0,_slicedToArray2["default"])(B,2),D=C[0],E=C[1],F=u.map(function(a){return{value:a.value,label:a.text}}),G=u.filter(function(a){return a.isSelected});G=G.length?[{label:G[0].text,value:G[0].value}]:"";var H=(0,_react.useState)(d||G),I=(0,_slicedToArray2["default"])(H,2),J=I[0],K=I[1],L=function(a){K(a);var b={target:{value:a&&0<a.length?a.map(function(a){return a.value}):""}};i(b,c),m(p)},M=function(){var a={target:{value:J&&0<J.length?J.map(function(a){return a.value}):""}};i(a,c),g(p),E("")},N=k||!1,O=N.ReactSelect,P=N.Label,Q=void 0===P?"label":P,R=N.Box,S=void 0===R?"div":R,T=O||_reactSelect["default"],U=(0,_toConsumableArray2["default"])(J);return J&&0<K.length&&U.shift(),_react["default"].createElement(S,{width:z,className:e&&f||l?"form-field error ".concat(n," ").concat(D):"form-field ".concat(n," ").concat(D),style:{display:j?"none":void 0}},_react["default"].createElement("div",{className:r},_react["default"].createElement(_InputLabel["default"],{formId:q,id:p,label:s,labelPlacement:y,isRequired:t,styledComponent:k}),"above"===x&&w&&_react["default"].createElement("div",{className:"description"},w),_react["default"].createElement(T,{name:A||"input_".concat(p),required:t,value:J,onChange:function onChange(a){L(a,c),m(p)},onBlur:function onBlur(){return M()},onFocus:function onFocus(){h(!0),E("is-open")},placeholder:v,options:F,autoFocus:!1,isMulti:!0,inputId:"input_".concat(q,"_").concat(p)}),_react["default"].createElement("input",{type:"hidden",name:"input_".concat(p,"[]"),required:t,value:J&&(null===(b=J[0])||void 0===b?void 0:b.value)?J[0].value:""}),U&&0<U.length&&U.map(function(a){return _react["default"].createElement("input",{type:"hidden",name:"input_".concat(p,"[]"),value:a.value})}),"above"!==x&&w&&_react["default"].createElement("div",{className:"description"},w),(e&&f||l)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(q,"_").concat(p)},e||l)))};exports["default"]=_default;
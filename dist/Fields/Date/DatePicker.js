"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireDefault(require("react")),_reactDatepicker=_interopRequireDefault(require("react-datepicker")),_ValidationMessage=_interopRequireDefault(require("../../FormElements/ValidationMessage"));require("react-datepicker/dist/react-datepicker.css");var _excluded=["field","value","validationMessage","touched","setTouched","updateForm","error","unsetError","setFocusClass","setDate","startDate","styledComponents"],_default=function(a){var b=a.format,c=a.defaultProps,d=c.field,e=c.value,f=c.validationMessage,g=c.touched,h=c.setTouched,i=c.updateForm,j=c.error,k=c.unsetError,l=c.setFocusClass,m=c.setDate,n=c.startDate,o=c.styledComponents,p=(0,_objectWithoutProperties2["default"])(c,_excluded),q=d.id,r=d.isRequired,s=d.formId,t=d.placeholder,u=d.cssClass,v=d.datepickerOptions,w=d.dateType,x=(o||!1).DatePicker,y=void 0===x?"div":x,z=function adjustDatePickerOptions(a){if(w&&"datepicker"===w&&a){var b=Object.keys(a);if(b&&0<b.length)for(var c=0;c<b.length;c++)("minDate"===b[c]||"maxDate"===b[c])&&(a[b[c]]=new Date(a[b[c]]))}return a}(v)||{};return _react["default"].createElement(_react["default"].Fragment,null,_react["default"].createElement(y,{className:"ginput_container ginput_container_date"},_react["default"].createElement(_reactDatepicker["default"],(0,_extends2["default"])({name:"input_".concat(q),id:"input_".concat(s,"_").concat(q),type:"text",className:"datepicker hasDatepicker",selected:n,onChange:function onChange(a){m(a),i({target:{value:a}},d),h(q),k(q),l(a)},onBlur:function onBlur(){i({target:{value:n}},d),h(q),k(q),l(n)},dateFormat:b||void 0,onFocus:function onFocus(){return l(!0)},autoComplete:"off",required:r,placeholderText:t,maxDate:u.includes("past")&&new Date},z))),(f&&g||j)&&_react["default"].createElement(_ValidationMessage["default"],{validationMessage:f,error:j,id:q}))};exports["default"]=_default;
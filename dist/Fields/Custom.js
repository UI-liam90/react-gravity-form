"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireDefault(require("react")),_excluded=["field","styledComponents","component"],_default=function(a){var b=a.field,c=a.styledComponents,d=a.component,e=(0,_objectWithoutProperties2["default"])(a,_excluded),f=b.cssClass,g=b.width,h=(c||!1).Box,i=void 0===h?"div":h,j=d;return j?_react["default"].createElement(i,{width:g,className:"form-field form-field--custom ".concat(f)},_react["default"].createElement(j,(0,_extends2["default"])({field:b,styledComponents:c},e))):""};exports["default"]=_default;
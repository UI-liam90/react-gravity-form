"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard"),_interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized")),_inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits")),_possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn")),_getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_react=_interopRequireWildcard(require("react")),_reactDropzone=_interopRequireDefault(require("react-dropzone")),_GFDropzone=_interopRequireDefault(require("./GFDropzone")),_InputLabel=_interopRequireDefault(require("../../FormElements/InputLabel"));function _createSuper(a){var b=_isNativeReflectConstruct();return function(){var c,d=(0,_getPrototypeOf2["default"])(a);if(b){var e=(0,_getPrototypeOf2["default"])(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return(0,_possibleConstructorReturn2["default"])(this,c)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}var Fileupload=function(a){function b(){var a;(0,_classCallCheck2["default"])(this,b);for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return a=c.call.apply(c,[this].concat(e)),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"state",{imagePreviewUrl:a.props.field.preview||null,selectedFile:!!a.props.field.preview||null,uploadFileText:"No file chosen",previewID:a.props.value||null,errorText:a.props.error||!1}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"inputFile",_react["default"].createRef()),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"onChangeHandler",function(b){var c=a.props.field,d=c.hasPreview,e=c.allowedExtensions;if(a.setState({imagePreviewUrl:null,selectedFile:b.target.files[0],uploadFileText:b.target.files[0]?b.target.files[0].name:"No file chosen"}),d&&b.target&&b.target.files[0]){var f=b.target.files[0].name.split(".").pop().toLowerCase(),g=-1<e.indexOf(f);if(g){var h=new FileReader;h.onloadend=function(){a.setState({imagePreviewUrl:h.result,previewID:!1})},h.readAsDataURL(b.target.files[0])}}}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"removeFilePreview",function(){var b=a.props,c=b.field,d=b.unsetError;a.inputFile.current.value="",a.setState({imagePreviewUrl:null,selectedFile:null,previewID:!1}),d(c.id)}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"prepareAllowedTypes",function(a){var b=a.split(",");return b=b.map(function(a){return".".concat(a.replace(/\s/g,""))}).join(", "),b}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"onButtonClickHandler",function(){a.inputFile.current.click()}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"removeFile",function(b,c){b.preventDefault();var d=a.props.updateForm;d({target:{value:""}},c),a.inputFile.current.value="",a.setState({imagePreviewUrl:!1,selectedFile:!1,previewID:!1,uploadFileText:"No file chosen"})}),a}(0,_inherits2["default"])(b,a);var c=_createSuper(b);return(0,_createClass2["default"])(b,[{key:"render",value:function render(){var a=this,b=this.state,c=b.selectedFile,d=b.uploadFileText,e=b.imagePreviewUrl,f=b.previewID,g=this.props,h=g.field,i=g.value,j=g.validationMessage,k=g.touched,l=g.setTouched,m=g.hideField,n=g.updateForm,o=g.formID,p=g.fieldError,q=g.styledComponents,r=g.error,s=g.unsetError,t=g.dropzoneText,u=h.id,v=h.type,w=h.label,x=h.cssClass,y=h.isRequired,z=h.description,A=h.descriptionPlacement,B=h.labelPlacement,C=h.width,D=h.allowedExtensions,E=h.buttonText,F=h.hasPreview,G=h.maxFileSize,H=q||!1,I=H.Button,J=void 0===I?"button":I,K=H.Label,L=void 0===K?"label":K,M=H.FileWrapper,N=void 0===M?"div":M,O=H.Box,P=void 0===O?"div":O,Q=-1<x.indexOf("dropzone");return _react["default"].createElement(P,{width:C,className:j&&k||r?"form-field error ".concat(x):"form-field ".concat(x),style:{display:m?"none":void 0}},_react["default"].createElement(N,{className:v},_react["default"].createElement(_InputLabel["default"],{formId:o,id:u,label:w,labelPlacement:B,isRequired:y,styledComponent:q}),"above"===A&&z&&z&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:z}}),Q?_react["default"].createElement(_GFDropzone["default"],{dropzoneText:t,field:h,id:u,formID:o,isRequired:y,updateForm:n,setTouched:l,unsetError:s}):_react["default"].createElement(_react["default"].Fragment,null,G&&_react["default"].createElement("input",{type:"hidden",name:"MAX_FILE_SIZE",value:1048576*G}),_react["default"].createElement("input",{id:"input_".concat(o,"_").concat(u),name:"input_".concat(u),type:"file",required:y,ref:this.inputFile,onChange:function onChange(b){var c,d,e;a.onChangeHandler(b),n({target:{value:null===b||void 0===b||null===(c=b.target)||void 0===c||null===(d=c.files)||void 0===d||null===(e=d[0])||void 0===e?void 0:e.name}},h),l(u),s(u)},onBlur:function onBlur(a){var b,c,d;n({target:{value:null===a||void 0===a||null===(b=a.target)||void 0===b||null===(c=b.files)||void 0===c||null===(d=c[0])||void 0===d?void 0:d.name}},h),l(u)},accept:this.prepareAllowedTypes(D)||void 0,"aria-label":w,"aria-describedby":"error_".concat(o,"_").concat(u),"aria-invalid":!!j||!!r,hidden:"hidden"}),f&&h.preview&&_react["default"].createElement("input",{type:"hidden",name:"file-upload-preview",value:f}),F&&_react["default"].createElement("div",{className:"file-preview",style:c&&e?{backgroundImage:"url(".concat(e,")")}:void 0},c&&e&&_react["default"].createElement("button",{type:"button",className:"remove-file",onClick:function onClick(){return a.removeFilePreview()}})),_react["default"].createElement("div",{"aria-pressed":"false",tabIndex:"0",role:"button",className:"fileUpload",onClick:this.onButtonClickHandler},_react["default"].createElement(J,{color:"yellow",tabIndex:"-1",type:"button"},E||"Choose a file"),!c&&_react["default"].createElement("span",{className:"no-file"},d)),c&&_react["default"].createElement("div",null,_react["default"].createElement("button",{type:"button",onClick:function onClick(b){return a.removeFile(b,h)}},"remove file"),_react["default"].createElement("span",null,d)),z&&"above"!==A&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:z}})),(j&&k||r)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(u)},j||r),p&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(o,"_").concat(u)},p)))}}]),b}(_react.Component),_default=Fileupload;exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9GaWVsZHMvRmlsZXVwbG9hZC9GaWxldXBsb2FkLmpzeCJdLCJuYW1lcyI6WyJGaWxldXBsb2FkIiwiaW1hZ2VQcmV2aWV3VXJsIiwicHJvcHMiLCJmaWVsZCIsInByZXZpZXciLCJzZWxlY3RlZEZpbGUiLCJ1cGxvYWRGaWxlVGV4dCIsInByZXZpZXdJRCIsInZhbHVlIiwiZXJyb3JUZXh0IiwiZXJyb3IiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImV2ZW50IiwiaGFzUHJldmlldyIsImFsbG93ZWRFeHRlbnNpb25zIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJmaWxlcyIsIm5hbWUiLCJleHRlbnNpb24iLCJzcGxpdCIsInBvcCIsInRvTG93ZXJDYXNlIiwiaXNTdWNjZXNzIiwiaW5kZXhPZiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwidW5zZXRFcnJvciIsImlucHV0RmlsZSIsImN1cnJlbnQiLCJpZCIsInR5cGVzIiwiYWNjZXB0IiwibWFwIiwic3RyIiwicmVwbGFjZSIsImpvaW4iLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZUZvcm0iLCJzdGF0ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJoaWRlRmllbGQiLCJmb3JtSUQiLCJmaWVsZEVycm9yIiwic3R5bGVkQ29tcG9uZW50cyIsImRyb3B6b25lVGV4dCIsInR5cGUiLCJsYWJlbCIsImNzc0NsYXNzIiwiaXNSZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsIndpZHRoIiwiYnV0dG9uVGV4dCIsIm1heEZpbGVTaXplIiwiQnV0dG9uIiwiTGFiZWwiLCJGaWxlV3JhcHBlciIsIkJveCIsImhhc0Ryb3B6b25lIiwiZGlzcGxheSIsIl9faHRtbCIsIm9uQ2hhbmdlSGFuZGxlciIsInByZXBhcmVBbGxvd2VkVHlwZXMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJyZW1vdmVGaWxlUHJldmlldyIsIm9uQnV0dG9uQ2xpY2tIYW5kbGVyIiwicmVtb3ZlRmlsZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6IjhzREFLTUEsQ0FBQUEsVSx3UUFDSSxDQUNOQyxlQUFlLENBQUUsRUFBS0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxPQUFqQixFQUE0QixJQUR2QyxDQUVOQyxZQUFZLEdBQUUsRUFBS0gsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxPQUFuQixFQUFvQyxJQUYxQyxDQUdORSxjQUFjLENBQUUsZ0JBSFYsQ0FJTkMsU0FBUyxDQUFFLEVBQUtMLEtBQUwsQ0FBV00sS0FBWCxFQUFvQixJQUp6QixDQUtOQyxTQUFTLENBQUUsRUFBS1AsS0FBTCxDQUFXUSxLQUFYLElBTEwsQyx3RkFRSUMsa0JBQU1DLFNBQU4sRSw4RkFFTSxTQUFBQyxDQUFLLENBQUksT0FDaUIsRUFBS1gsS0FBTCxDQUFXQyxLQUQ1QixDQUNqQlcsQ0FEaUIsR0FDakJBLFVBRGlCLENBQ0xDLENBREssR0FDTEEsaUJBREssQ0FVekIsR0FSQSxFQUFLQyxRQUFMLENBQWMsQ0FDWmYsZUFBZSxDQUFFLElBREwsQ0FFWkksWUFBWSxDQUFFUSxDQUFLLENBQUNJLE1BQU4sQ0FBYUMsS0FBYixDQUFtQixDQUFuQixDQUZGLENBR1paLGNBQWMsQ0FBRU8sQ0FBSyxDQUFDSSxNQUFOLENBQWFDLEtBQWIsQ0FBbUIsQ0FBbkIsRUFDWkwsQ0FBSyxDQUFDSSxNQUFOLENBQWFDLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0JDLElBRFYsQ0FFWixnQkFMUSxDQUFkLENBUUEsQ0FBSUwsQ0FBVSxFQUFJRCxDQUFLLENBQUNJLE1BQXBCLEVBQThCSixDQUFLLENBQUNJLE1BQU4sQ0FBYUMsS0FBYixDQUFtQixDQUFuQixDQUFsQyxDQUF5RCxJQUVqREUsQ0FBQUEsQ0FBUyxDQUFHUCxDQUFLLENBQUNJLE1BQU4sQ0FBYUMsS0FBYixDQUFtQixDQUFuQixFQUFz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LENBREgsQ0FqSUosQ0FURixDQWlKSCxDLE9BMVFzQjBCLGdCLFdBNlFWN0UsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERyb3B6b25lIGZyb20gXCJyZWFjdC1kcm9wem9uZVwiO1xyXG5pbXBvcnQgR0ZEcm9wem9uZSBmcm9tIFwiLi9HRkRyb3B6b25lXCI7XHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gXCIuLi8uLi9Gb3JtRWxlbWVudHMvSW5wdXRMYWJlbFwiO1xyXG5cclxuY2xhc3MgRmlsZXVwbG9hZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBpbWFnZVByZXZpZXdVcmw6IHRoaXMucHJvcHMuZmllbGQucHJldmlldyB8fCBudWxsLFxyXG4gICAgc2VsZWN0ZWRGaWxlOiB0aGlzLnByb3BzLmZpZWxkLnByZXZpZXcgPyB0cnVlIDogbnVsbCxcclxuICAgIHVwbG9hZEZpbGVUZXh0OiBcIk5vIGZpbGUgY2hvc2VuXCIsXHJcbiAgICBwcmV2aWV3SUQ6IHRoaXMucHJvcHMudmFsdWUgfHwgbnVsbCxcclxuICAgIGVycm9yVGV4dDogdGhpcy5wcm9wcy5lcnJvciB8fCBmYWxzZSxcclxuICB9O1xyXG5cclxuICBpbnB1dEZpbGUgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuXHJcbiAgb25DaGFuZ2VIYW5kbGVyID0gZXZlbnQgPT4ge1xyXG4gICAgY29uc3QgeyBoYXNQcmV2aWV3LCBhbGxvd2VkRXh0ZW5zaW9ucyB9ID0gdGhpcy5wcm9wcy5maWVsZDtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpbWFnZVByZXZpZXdVcmw6IG51bGwsXHJcbiAgICAgIHNlbGVjdGVkRmlsZTogZXZlbnQudGFyZ2V0LmZpbGVzWzBdLFxyXG4gICAgICB1cGxvYWRGaWxlVGV4dDogZXZlbnQudGFyZ2V0LmZpbGVzWzBdXHJcbiAgICAgICAgPyBldmVudC50YXJnZXQuZmlsZXNbMF0ubmFtZVxyXG4gICAgICAgIDogXCJObyBmaWxlIGNob3NlblwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGhhc1ByZXZpZXcgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5maWxlc1swXSkge1xyXG4gICAgICAvLyBjaGVjayBmaWxlIHR5cGVcclxuICAgICAgY29uc3QgZXh0ZW5zaW9uID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdLm5hbWVcclxuICAgICAgICAuc3BsaXQoXCIuXCIpXHJcbiAgICAgICAgLnBvcCgpXHJcbiAgICAgICAgLnRvTG93ZXJDYXNlKCk7IC8vIGZpbGUgZXh0ZW5zaW9uIGZyb20gaW5wdXQgZmlsZVxyXG4gICAgICBjb25zdCBpc1N1Y2Nlc3MgPSBhbGxvd2VkRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTsgLy8gaXMgZXh0ZW5zaW9uIGluIGFjY2VwdGFibGUgdHlwZXNcclxuICAgICAgaWYgKGlzU3VjY2Vzcykge1xyXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaW1hZ2VQcmV2aWV3VXJsOiByZWFkZXIucmVzdWx0LFxyXG4gICAgICAgICAgICBwcmV2aWV3SUQ6IGZhbHNlLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJlbW92ZUZpbGVQcmV2aWV3ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBmaWVsZCwgdW5zZXRFcnJvciB9ID0gdGhpcy5wcm9wcztcclxuICAgIHRoaXMuaW5wdXRGaWxlLmN1cnJlbnQudmFsdWUgPSBcIlwiO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGltYWdlUHJldmlld1VybDogbnVsbCxcclxuICAgICAgc2VsZWN0ZWRGaWxlOiBudWxsLFxyXG4gICAgICBwcmV2aWV3SUQ6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICB1bnNldEVycm9yKGZpZWxkLmlkKTtcclxuICB9O1xyXG5cclxuICBwcmVwYXJlQWxsb3dlZFR5cGVzID0gdHlwZXMgPT4ge1xyXG4gICAgbGV0IGFjY2VwdCA9IHR5cGVzLnNwbGl0KFwiLFwiKTtcclxuICAgIGFjY2VwdCA9IGFjY2VwdC5tYXAoc3RyID0+IGAuJHtzdHIucmVwbGFjZSgvXFxzL2csIFwiXCIpfWApLmpvaW4oXCIsIFwiKTtcclxuICAgIHJldHVybiBhY2NlcHQ7XHJcbiAgfTtcclxuXHJcbiAgb25CdXR0b25DbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmlucHV0RmlsZS5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfTtcclxuXHJcbiAgcmVtb3ZlRmlsZSA9IChlLCBmaWVsZCkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgeyB1cGRhdGVGb3JtIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgdXBkYXRlRm9ybSh7IHRhcmdldDogeyB2YWx1ZTogXCJcIiB9IH0sIGZpZWxkKTtcclxuICAgIHRoaXMuaW5wdXRGaWxlLmN1cnJlbnQudmFsdWUgPSBcIlwiO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGltYWdlUHJldmlld1VybDogZmFsc2UsXHJcbiAgICAgIHNlbGVjdGVkRmlsZTogZmFsc2UsXHJcbiAgICAgIHByZXZpZXdJRDogZmFsc2UsXHJcbiAgICAgIHVwbG9hZEZpbGVUZXh0OiBcIk5vIGZpbGUgY2hvc2VuXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHNlbGVjdGVkRmlsZSwgdXBsb2FkRmlsZVRleHQsIGltYWdlUHJldmlld1VybCwgcHJldmlld0lEIH0gPVxyXG4gICAgICB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgZmllbGQsXHJcbiAgICAgIHZhbHVlLFxyXG4gICAgICB2YWxpZGF0aW9uTWVzc2FnZSxcclxuICAgICAgdG91Y2hlZCxcclxuICAgICAgc2V0VG91Y2hlZCxcclxuICAgICAgaGlkZUZpZWxkLFxyXG4gICAgICB1cGRhdGVGb3JtLFxyXG4gICAgICBmb3JtSUQsXHJcbiAgICAgIGZpZWxkRXJyb3IsXHJcbiAgICAgIHN0eWxlZENvbXBvbmVudHMsXHJcbiAgICAgIGVycm9yLFxyXG4gICAgICB1bnNldEVycm9yLFxyXG4gICAgICBkcm9wem9uZVRleHQsXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHtcclxuICAgICAgaWQsXHJcbiAgICAgIHR5cGUsXHJcbiAgICAgIGxhYmVsLFxyXG4gICAgICBjc3NDbGFzcyxcclxuICAgICAgaXNSZXF1aXJlZCxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIGRlc2NyaXB0aW9uUGxhY2VtZW50LFxyXG4gICAgICBsYWJlbFBsYWNlbWVudCxcclxuICAgICAgd2lkdGgsXHJcbiAgICAgIGFsbG93ZWRFeHRlbnNpb25zLFxyXG4gICAgICBidXR0b25UZXh0LFxyXG4gICAgICBoYXNQcmV2aWV3LFxyXG4gICAgICBtYXhGaWxlU2l6ZSxcclxuICAgIH0gPSBmaWVsZDtcclxuICAgIGNvbnN0IHtcclxuICAgICAgQnV0dG9uID0gXCJidXR0b25cIixcclxuICAgICAgTGFiZWwgPSBcImxhYmVsXCIsXHJcbiAgICAgIEZpbGVXcmFwcGVyID0gXCJkaXZcIixcclxuICAgICAgQm94ID0gXCJkaXZcIixcclxuICAgIH0gPSBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGhhc0Ryb3B6b25lID0gY3NzQ2xhc3MuaW5kZXhPZihcImRyb3B6b25lXCIpID4gLTE7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEJveFxyXG4gICAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yXHJcbiAgICAgICAgICAgID8gYGZvcm0tZmllbGQgZXJyb3IgJHtjc3NDbGFzc31gXHJcbiAgICAgICAgICAgIDogYGZvcm0tZmllbGQgJHtjc3NDbGFzc31gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/IFwibm9uZVwiIDogdW5kZWZpbmVkIH19XHJcbiAgICAgID5cclxuICAgICAgICA8RmlsZVdyYXBwZXIgY2xhc3NOYW1lPXt0eXBlfT5cclxuICAgICAgICAgIDxJbnB1dExhYmVsXHJcbiAgICAgICAgICAgIGZvcm1JZD17Zm9ybUlEfVxyXG4gICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgIGxhYmVsPXtsYWJlbH1cclxuICAgICAgICAgICAgbGFiZWxQbGFjZW1lbnQ9e2xhYmVsUGxhY2VtZW50fVxyXG4gICAgICAgICAgICBpc1JlcXVpcmVkPXtpc1JlcXVpcmVkfVxyXG4gICAgICAgICAgICBzdHlsZWRDb21wb25lbnQ9e3N0eWxlZENvbXBvbmVudHN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSBcImFib3ZlXCIgJiYgZGVzY3JpcHRpb24gJiYgZGVzY3JpcHRpb24gJiYgKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGVzY3JpcHRpb24gfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7aGFzRHJvcHpvbmUgPyAoXHJcbiAgICAgICAgICAgIDxHRkRyb3B6b25lXHJcbiAgICAgICAgICAgICAgZHJvcHpvbmVUZXh0PXtkcm9wem9uZVRleHR9XHJcbiAgICAgICAgICAgICAgZmllbGQ9e2ZpZWxkfVxyXG4gICAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgICBmb3JtSUQ9e2Zvcm1JRH1cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtpc1JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgIHVwZGF0ZUZvcm09e3VwZGF0ZUZvcm19XHJcbiAgICAgICAgICAgICAgc2V0VG91Y2hlZD17c2V0VG91Y2hlZH1cclxuICAgICAgICAgICAgICB1bnNldEVycm9yPXt1bnNldEVycm9yfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICB7bWF4RmlsZVNpemUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiTUFYX0ZJTEVfU0laRVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXttYXhGaWxlU2l6ZSAqIDEwNDg1NzZ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlEfV8ke2lkfWB9XHJcbiAgICAgICAgICAgICAgICBuYW1lPXtgaW5wdXRfJHtpZH1gfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICByZWY9e3RoaXMuaW5wdXRGaWxlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZUhhbmRsZXIoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGFyZ2V0OiB7IHZhbHVlOiBldmVudD8udGFyZ2V0Py5maWxlcz8uWzBdPy5uYW1lIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZFxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcclxuICAgICAgICAgICAgICAgICAgdW5zZXRFcnJvcihpZCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25CbHVyPXtldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0YXJnZXQ6IHsgdmFsdWU6IGV2ZW50Py50YXJnZXQ/LmZpbGVzPy5bMF0/Lm5hbWUgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGFjY2VwdD17XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZUFsbG93ZWRUeXBlcyhhbGxvd2VkRXh0ZW5zaW9ucykgfHwgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cclxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e2BlcnJvcl8ke2Zvcm1JRH1fJHtpZH1gfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXshIXZhbGlkYXRpb25NZXNzYWdlIHx8ICEhZXJyb3J9XHJcbiAgICAgICAgICAgICAgICBoaWRkZW49XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge3ByZXZpZXdJRCAmJiBmaWVsZC5wcmV2aWV3ICYmIChcclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImZpbGUtdXBsb2FkLXByZXZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cHJldmlld0lEfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtoYXNQcmV2aWV3ICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsZS1wcmV2aWV3XCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRmlsZSAmJiBpbWFnZVByZXZpZXdVcmxcclxuICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZVByZXZpZXdVcmx9KWAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRGaWxlICYmIGltYWdlUHJldmlld1VybCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZW1vdmUtZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnJlbW92ZUZpbGVQcmV2aWV3KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgYXJpYS1wcmVzc2VkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9XCIwXCJcclxuICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsZVVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQnV0dG9uQ2xpY2tIYW5kbGVyfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJ5ZWxsb3dcIiB0YWJJbmRleD1cIi0xXCIgdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICB7YnV0dG9uVGV4dCB8fCBcIkNob29zZSBhIGZpbGVcIn1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgeyFzZWxlY3RlZEZpbGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuby1maWxlXCI+e3VwbG9hZEZpbGVUZXh0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge3NlbGVjdGVkRmlsZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLnJlbW92ZUZpbGUoZSwgZmllbGQpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlIGZpbGVcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPnt1cGxvYWRGaWxlVGV4dH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiBkZXNjcmlwdGlvblBsYWNlbWVudCAhPT0gXCJhYm92ZVwiICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRlc2NyaXB0aW9uIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHsoKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yKSAmJiAoXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIiBpZD17YGVycm9yXyR7aWR9YH0+XHJcbiAgICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlIHx8IGVycm9yfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2ZpZWxkRXJyb3IgJiYgKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2Zvcm1JRH1fJHtpZH1gfT5cclxuICAgICAgICAgICAgICB7ZmllbGRFcnJvcn1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0ZpbGVXcmFwcGVyPlxyXG4gICAgICA8L0JveD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWxldXBsb2FkO1xyXG4iXX0=
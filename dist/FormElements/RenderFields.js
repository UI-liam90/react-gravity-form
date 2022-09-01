"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard"),_interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireWildcard(require("react")),_RenderField=_interopRequireDefault(require("./RenderField")),divideFieldsIntoPages=function(a,b){for(var c,d=b.map(function(){return[]}),e=0;e<a.length;e++)c=d[a[e].pageNumber],d[a[e].pageNumber-1]&&("page"===a[e].type?d[a[e].pageNumber-2].push(a[e]):d[a[e].pageNumber-1].push(a[e]));return d},getMaxFieldId=function(a){for(var b=0,c=0;c<a.length;c++)parseInt(a[c].id)>b&&(b=parseInt(a[c].id));return b+1},fieldTypes=["checkbox","email","hidden","html","number","phone","radio","select","multiselect","text","textarea","website","page","date","fileupload","consent","password","section","scustom","name","address","buckarooideal","postcode"],honeyPotLables=["Name","Email","Phone","Comments"],honeypotLabel=honeyPotLables[Math.floor(Math.random()*Math.floor(4))],_default=function(a){function b(a){return _react["default"].createElement(_RenderField["default"],(0,_extends2["default"])({key:"".concat(a.formId,"-").concat(a.id),field:a,formValues:d,submitFailed:f,setTouched:i,setErrorMessages:j,submitSuccess:g,updateForm:e,touched:h,pages:k&&k.pages.length,prevStep:m,nextStep:n,isNextDisabled:o,checkConditionalLogic:p,saveStateToHtmlField:q,styledComponents:s,customComponents:t,error:!!(v&&v[a.id])&&v[a.id],unsetError:u,dropzoneText:w,language:y,apiKeys:z},A))}var c=a.fields,d=a.formValues,e=a.updateForm,f=a.submitFailed,g=a.submitSuccess,h=a.touched,i=a.setTouched,j=a.setErrorMessages,k=a.pagination,l=a.activePage,m=a.prevStep,n=a.nextStep,o=a.isNextDisabled,p=a.checkConditionalLogic,q=a.saveStateToHtmlField,r=a.enableHoneypot,s=a.styledComponents,t=a.customComponents,u=a.unsetError,v=a.errors,w=a.dropzoneText,x=a.pageClicked,y=a.language,z=a.apiKeys,A=(0,_objectWithoutProperties2["default"])(a,["fields","formValues","updateForm","submitFailed","submitSuccess","touched","setTouched","setErrorMessages","pagination","activePage","prevStep","nextStep","isNextDisabled","checkConditionalLogic","saveStateToHtmlField","enableHoneypot","styledComponents","customComponents","unsetError","errors","dropzoneText","pageClicked","language","apiKeys"]),B=k?divideFieldsIntoPages(c,k.pages):void 0,C=getMaxFieldId(c),D=(0,_react.useState)(""),E=(0,_slicedToArray2["default"])(D,2),F=E[0],G=E[1],H=(0,_react.useRef)();(0,_react.useEffect)(function(){H.current=l});var I=H.current;return _react["default"].createElement("div",{className:"form-fields".concat(k&&1<k.pages.length?" hasPages ".concat(x?"":" noPageClicked"):"")},k&&1<k.pages.length?k.pages.map(function(a,c){return _react["default"].createElement("div",{className:"page".concat(l===c+1?" active":"").concat(I&&c===I&&l!==c+1&&I!==l?" prevStep":""),key:"page-".concat(c)},a&&_react["default"].createElement("div",{className:"gf_step"},_react["default"].createElement("span",null,a)),B[c].map(function(a){return fieldTypes.includes(a.type)&&b(a)}))}):c.map(function(a){return fieldTypes.includes(a.type)&&b(a)}),r&&_react["default"].createElement("div",{className:"form-field gform_validation_container"},_react["default"].createElement("label",{htmlFor:"input_".concat(C),className:"gf-label "},honeypotLabel),_react["default"].createElement("input",{type:"text",name:"input_".concat(C),id:"input_".concat(C),value:F,onChange:function onChange(a){return G(a.target.value)},autoComplete:"off"})))};exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Gb3JtRWxlbWVudHMvUmVuZGVyRmllbGRzLmpzeCJdLCJuYW1lcyI6WyJkaXZpZGVGaWVsZHNJbnRvUGFnZXMiLCJmaWVsZHMiLCJwYWdlcyIsImFyciIsInRtcEZpZWxkcyIsIm1hcCIsImkiLCJsZW5ndGgiLCJwYWdlTnVtYmVyIiwidHlwZSIsInB1c2giLCJnZXRNYXhGaWVsZElkIiwibWF4IiwicGFyc2VJbnQiLCJpZCIsImZpZWxkVHlwZXMiLCJob25leVBvdExhYmxlcyIsImhvbmV5cG90TGFiZWwiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwcm9wcyIsInJlbmRlckZpbGVkIiwiZmllbGQiLCJmb3JtSWQiLCJmb3JtVmFsdWVzIiwic3VibWl0RmFpbGVkIiwic2V0VG91Y2hlZCIsInNldEVycm9yTWVzc2FnZXMiLCJzdWJtaXRTdWNjZXNzIiwidXBkYXRlRm9ybSIsInRvdWNoZWQiLCJwYWdpbmF0aW9uIiwicHJldlN0ZXAiLCJuZXh0U3RlcCIsImlzTmV4dERpc2FibGVkIiwiY2hlY2tDb25kaXRpb25hbExvZ2ljIiwic2F2ZVN0YXRlVG9IdG1sRmllbGQiLCJzdHlsZWRDb21wb25lbnRzIiwiY3VzdG9tQ29tcG9uZW50cyIsImVycm9ycyIsInVuc2V0RXJyb3IiLCJkcm9wem9uZVRleHQiLCJsYW5ndWFnZSIsImFwaUtleXMiLCJyZXN0IiwiYWN0aXZlUGFnZSIsImVuYWJsZUhvbmV5cG90IiwicGFnZUNsaWNrZWQiLCJkaXZpZGVkRmllbGRzIiwibWF4SUQiLCJob25leXBvdFZhbHVlIiwic2V0SG9uZXlwb3RWYWx1ZSIsInByZXZTdGVwdFJlZiIsImN1cnJlbnQiLCJwcmV2Q291bnQiLCJwYWdlIiwiaW5kZXgiLCJpbmNsdWRlcyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6InFvQkFHTUEscUJBQXFCLENBQUcsU0FBQ0MsQ0FBRCxDQUFTQyxDQUFULENBQW1CLENBRy9DLE9BQ1FDLENBQUFBLENBRFIs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RixDQUlFLHlDQUNFLElBQUksQ0FBQyxNQURQLENBRUUsSUFBSSxpQkFBV2lDLENBQVgsQ0FGTixDQUdFLEVBQUUsaUJBQVdBLENBQVgsQ0FISixDQUlFLEtBQUssQ0FBRUMsQ0FKVCxDQUtFLFFBQVEsQ0FBRSxrQkFBQVEsQ0FBQyxRQUFJUCxDQUFBQSxDQUFnQixDQUFDTyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFwQixDQUxiLENBTUUsWUFBWSxDQUFDLEtBTmYsRUFKRixDQWhDSixDQWdESCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZW5kZXJGaWVsZCBmcm9tICcuL1JlbmRlckZpZWxkJztcblxuY29uc3QgZGl2aWRlRmllbGRzSW50b1BhZ2VzID0gKGZpZWxkcywgcGFnZXMpID0+IHtcbiAgY29uc3QgdG1wRmllbGRzID0gcGFnZXMubWFwKGl0ZW0gPT4gW10pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYXJyID0gdG1wRmllbGRzW2ZpZWxkc1tpXS5wYWdlTnVtYmVyXTtcbiAgICBpZiAodG1wRmllbGRzW2ZpZWxkc1tpXS5wYWdlTnVtYmVyIC0gMV0pIHtcbiAgICAgIC8vIG1vdmUgcGFnZSBmaWVsZCB0byB0aGUgZmlyc3QgZ3JvdXBcbiAgICAgIGlmIChmaWVsZHNbaV0udHlwZSA9PT0gJ3BhZ2UnKSB7XG4gICAgICAgIHRtcEZpZWxkc1tmaWVsZHNbaV0ucGFnZU51bWJlciAtIDJdLnB1c2goZmllbGRzW2ldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRtcEZpZWxkc1tmaWVsZHNbaV0ucGFnZU51bWJlciAtIDFdLnB1c2goZmllbGRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRtcEZpZWxkcztcbn07XG5cbmNvbnN0IGdldE1heEZpZWxkSWQgPSBmaWVsZHMgPT4ge1xuICBsZXQgbWF4ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocGFyc2VJbnQoZmllbGRzW2ldLmlkKSA+IG1heCkge1xuICAgICAgbWF4ID0gcGFyc2VJbnQoZmllbGRzW2ldLmlkKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1heCArIDE7XG59O1xuXG5jb25zdCBmaWVsZFR5cGVzID0gW1xuICAnY2hlY2tib3gnLFxuICAnZW1haWwnLFxuICAnaGlkZGVuJyxcbiAgJ2h0bWwnLFxuICAnbnVtYmVyJyxcbiAgJ3Bob25lJyxcbiAgJ3JhZGlvJyxcbiAgJ3NlbGVjdCcsXG4gICdtdWx0aXNlbGVjdCcsXG4gICd0ZXh0JyxcbiAgJ3RleHRhcmVhJyxcbiAgJ3dlYnNpdGUnLFxuICAncGFnZScsXG4gICdkYXRlJyxcbiAgJ2ZpbGV1cGxvYWQnLFxuICAnY29uc2VudCcsXG4gICdwYXNzd29yZCcsXG4gICdzZWN0aW9uJyxcbiAgJ3NjdXN0b20nLFxuICAnbmFtZScsXG4gICdhZGRyZXNzJyxcbiAgJ2J1Y2thcm9vaWRlYWwnLFxuICAncG9zdGNvZGUnLFxuXTtcblxuY29uc3QgaG9uZXlQb3RMYWJsZXMgPSBbJ05hbWUnLCAnRW1haWwnLCAnUGhvbmUnLCAnQ29tbWVudHMnXTtcbmNvbnN0IGhvbmV5cG90TGFiZWwgPSBob25leVBvdExhYmxlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDQpKV07XG5cbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+IHtcbiAgY29uc3Qge1xuICAgIGZpZWxkcyxcbiAgICBmb3JtVmFsdWVzLFxuICAgIHVwZGF0ZUZvcm0sXG4gICAgc3VibWl0RmFpbGVkLFxuICAgIHN1Ym1pdFN1Y2Nlc3MsXG4gICAgdG91Y2hlZCxcbiAgICBzZXRUb3VjaGVkLFxuICAgIHNldEVycm9yTWVzc2FnZXMsXG4gICAgcGFnaW5hdGlvbixcbiAgICBhY3RpdmVQYWdlLFxuICAgIHByZXZTdGVwLFxuICAgIG5leHRTdGVwLFxuICAgIGlzTmV4dERpc2FibGVkLFxuICAgIGNoZWNrQ29uZGl0aW9uYWxMb2dpYyxcbiAgICBzYXZlU3RhdGVUb0h0bWxGaWVsZCxcbiAgICBlbmFibGVIb25leXBvdCxcbiAgICBzdHlsZWRDb21wb25lbnRzLFxuICAgIGN1c3RvbUNvbXBvbmVudHMsXG4gICAgdW5zZXRFcnJvcixcbiAgICBlcnJvcnMsXG4gICAgZHJvcHpvbmVUZXh0LFxuICAgIHBhZ2VDbGlja2VkLFxuICAgIGxhbmd1YWdlLFxuICAgIGFwaUtleXMsXG4gICAgLi4ucmVzdFxuICB9ID0gcHJvcHM7XG5cbiAgLy8gZ2V0IHBhZ2UgaW5kZXhlc1xuICBjb25zdCBkaXZpZGVkRmllbGRzID0gcGFnaW5hdGlvbiA/IGRpdmlkZUZpZWxkc0ludG9QYWdlcyhmaWVsZHMsIHBhZ2luYXRpb24ucGFnZXMpIDogdW5kZWZpbmVkO1xuICBjb25zdCBtYXhJRCA9IGdldE1heEZpZWxkSWQoZmllbGRzKTtcbiAgY29uc3QgW2hvbmV5cG90VmFsdWUsIHNldEhvbmV5cG90VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IHByZXZTdGVwdFJlZiA9IHVzZVJlZigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByZXZTdGVwdFJlZi5jdXJyZW50ID0gYWN0aXZlUGFnZTtcbiAgfSk7XG4gIGNvbnN0IHByZXZDb3VudCA9IHByZXZTdGVwdFJlZi5jdXJyZW50O1xuXG4gIGZ1bmN0aW9uIHJlbmRlckZpbGVkKGZpZWxkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZW5kZXJGaWVsZFxuICAgICAgICBrZXk9e2Ake2ZpZWxkLmZvcm1JZH0tJHtmaWVsZC5pZH1gfVxuICAgICAgICBmaWVsZD17ZmllbGR9XG4gICAgICAgIGZvcm1WYWx1ZXM9e2Zvcm1WYWx1ZXN9XG4gICAgICAgIHN1Ym1pdEZhaWxlZD17c3VibWl0RmFpbGVkfVxuICAgICAgICBzZXRUb3VjaGVkPXtzZXRUb3VjaGVkfVxuICAgICAgICBzZXRFcnJvck1lc3NhZ2VzPXtzZXRFcnJvck1lc3NhZ2VzfVxuICAgICAgICBzdWJtaXRTdWNjZXNzPXtzdWJtaXRTdWNjZXNzfVxuICAgICAgICB1cGRhdGVGb3JtPXt1cGRhdGVGb3JtfVxuICAgICAgICB0b3VjaGVkPXt0b3VjaGVkfVxuICAgICAgICBwYWdlcz17cGFnaW5hdGlvbiAmJiBwYWdpbmF0aW9uLnBhZ2VzLmxlbmd0aH1cbiAgICAgICAgcHJldlN0ZXA9e3ByZXZTdGVwfVxuICAgICAgICBuZXh0U3RlcD17bmV4dFN0ZXB9XG4gICAgICAgIGlzTmV4dERpc2FibGVkPXtpc05leHREaXNhYmxlZH1cbiAgICAgICAgY2hlY2tDb25kaXRpb25hbExvZ2ljPXtjaGVja0NvbmRpdGlvbmFsTG9naWN9XG4gICAgICAgIHNhdmVTdGF0ZVRvSHRtbEZpZWxkPXtzYXZlU3RhdGVUb0h0bWxGaWVsZH1cbiAgICAgICAgc3R5bGVkQ29tcG9uZW50cz17c3R5bGVkQ29tcG9uZW50c31cbiAgICAgICAgY3VzdG9tQ29tcG9uZW50cz17Y3VzdG9tQ29tcG9uZW50c31cbiAgICAgICAgZXJyb3I9e2Vycm9ycyAmJiBlcnJvcnNbZmllbGQuaWRdID8gZXJyb3JzW2ZpZWxkLmlkXSA6IGZhbHNlfVxuICAgICAgICB1bnNldEVycm9yPXt1bnNldEVycm9yfVxuICAgICAgICBkcm9wem9uZVRleHQ9e2Ryb3B6b25lVGV4dH1cbiAgICAgICAgbGFuZ3VhZ2U9e2xhbmd1YWdlfVxuICAgICAgICBhcGlLZXlzPXthcGlLZXlzfVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgZm9ybS1maWVsZHMke1xuICAgICAgICBwYWdpbmF0aW9uICYmIHBhZ2luYXRpb24ucGFnZXMubGVuZ3RoID4gMVxuICAgICAgICAgID8gYCBoYXNQYWdlcyAkeyFwYWdlQ2xpY2tlZCA/ICcgbm9QYWdlQ2xpY2tlZCcgOiAnJ31gXG4gICAgICAgICAgOiAnJ1xuICAgICAgfWB9XG4gICAgPlxuICAgICAge3BhZ2luYXRpb24gJiYgcGFnaW5hdGlvbi5wYWdlcy5sZW5ndGggPiAxXG4gICAgICAgID8gcGFnaW5hdGlvbi5wYWdlcy5tYXAoKHBhZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHBhZ2Uke2FjdGl2ZVBhZ2UgPT09IGluZGV4ICsgMSA/ICcgYWN0aXZlJyA6ICcnfSR7XG4gICAgICAgICAgICAgICAgcHJldkNvdW50ICYmXG4gICAgICAgICAgICAgICAgaW5kZXggPT09IHByZXZDb3VudCAmJlxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UgIT09IGluZGV4ICsgMSAmJlxuICAgICAgICAgICAgICAgIHByZXZDb3VudCAhPT0gYWN0aXZlUGFnZVxuICAgICAgICAgICAgICAgICAgPyAnIHByZXZTdGVwJ1xuICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAga2V5PXtgcGFnZS0ke2luZGV4fWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtwYWdlICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmX3N0ZXBcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntwYWdlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAge2RpdmlkZWRGaWVsZHNbaW5kZXhdLm1hcChcbiAgICAgICAgICAgICAgICBmaWVsZCA9PiBmaWVsZFR5cGVzLmluY2x1ZGVzKGZpZWxkLnR5cGUpICYmIHJlbmRlckZpbGVkKGZpZWxkKVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSlcbiAgICAgICAgOiBmaWVsZHMubWFwKGZpZWxkID0+IGZpZWxkVHlwZXMuaW5jbHVkZXMoZmllbGQudHlwZSkgJiYgcmVuZGVyRmlsZWQoZmllbGQpKX1cbiAgICAgIHtlbmFibGVIb25leXBvdCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZCBnZm9ybV92YWxpZGF0aW9uX2NvbnRhaW5lclwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgaW5wdXRfJHttYXhJRH1gfSBjbGFzc05hbWU9XCJnZi1sYWJlbCBcIj5cbiAgICAgICAgICAgIHtob25leXBvdExhYmVsfVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPXtgaW5wdXRfJHttYXhJRH1gfVxuICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke21heElEfWB9XG4gICAgICAgICAgICB2YWx1ZT17aG9uZXlwb3RWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEhvbmV5cG90VmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG4iXX0=
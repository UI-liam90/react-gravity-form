"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _forceValidation=_interopRequireDefault(require("./forceValidation")),_getNextStep=_interopRequireDefault(require("./getNextStep")),_default=function(a,b,c,d,e,f,g,h,i){a.preventDefault();var j=b.activePage,k=(0,_forceValidation["default"])(e,d,i,h);if(!k)return!1;var l=(0,_getNextStep["default"])(e,c,d);j&&j(e,d,l),f(l),g(!0),i(!1),f(l),g(!0),i(!1)};exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGVmYXVsdCIsImV2ZW50IiwicHJvcHMiLCJwYWdlcyIsImZvcm1WYWx1ZXMiLCJhY3RpdmVQYWdlIiwic2V0QWN0aXZlUGFnZSIsInNldFBhZ2VDbGlja2VkIiwic2V0VG91Y2hlZCIsInNldFNob3dQYWdlVmFsaWRhdGlvbk1zZyIsInByZXZlbnREZWZhdWx0IiwiYmVmb3JlTmV4dFBhZ2UiLCJpc1BhZ2VWYWxpZGF0ZWQiLCJmb3JjZVZhbGlkYXRpb24iLCJuZXh0UGFnZSIsImdldE5leHRTdGVwIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9IZWxwZXJzL2Zvcm0vbmV4dFN0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZvcmNlVmFsaWRhdGlvbiBmcm9tICcuL2ZvcmNlVmFsaWRhdGlvbic7XG5pbXBvcnQgZ2V0TmV4dFN0ZXAgZnJvbSAnLi9nZXROZXh0U3RlcCc7XG5cbmV4cG9ydCBkZWZhdWx0IChcbiAgZXZlbnQsXG4gIHByb3BzLFxuICBwYWdlcyxcbiAgZm9ybVZhbHVlcyxcbiAgYWN0aXZlUGFnZSxcbiAgc2V0QWN0aXZlUGFnZSxcbiAgc2V0UGFnZUNsaWNrZWQsXG4gIHNldFRvdWNoZWQsXG4gIHNldFNob3dQYWdlVmFsaWRhdGlvbk1zZ1xuKSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHsgYWN0aXZlUGFnZTogYmVmb3JlTmV4dFBhZ2UgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGlzUGFnZVZhbGlkYXRlZCA9IGZvcmNlVmFsaWRhdGlvbihcbiAgICBhY3RpdmVQYWdlLFxuICAgIGZvcm1WYWx1ZXMsXG4gICAgc2V0U2hvd1BhZ2VWYWxpZGF0aW9uTXNnLFxuICAgIHNldFRvdWNoZWRcbiAgKTtcbiAgaWYgKCFpc1BhZ2VWYWxpZGF0ZWQpIHJldHVybiBmYWxzZTtcblxuICBjb25zdCBuZXh0UGFnZSA9IGdldE5leHRTdGVwKGFjdGl2ZVBhZ2UsIHBhZ2VzLCBmb3JtVmFsdWVzKTtcblxuICBpZiAoYmVmb3JlTmV4dFBhZ2UpIHtcbiAgICBiZWZvcmVOZXh0UGFnZShhY3RpdmVQYWdlLCBmb3JtVmFsdWVzLCBuZXh0UGFnZSk7XG4gIH1cbiAgc2V0QWN0aXZlUGFnZShuZXh0UGFnZSk7XG4gIHNldFBhZ2VDbGlja2VkKHRydWUpO1xuICBzZXRTaG93UGFnZVZhbGlkYXRpb25Nc2coZmFsc2UpO1xuXG4gIHNldEFjdGl2ZVBhZ2UobmV4dFBhZ2UpO1xuICBzZXRQYWdlQ2xpY2tlZCh0cnVlKTtcbiAgc2V0U2hvd1BhZ2VWYWxpZGF0aW9uTXNnKGZhbHNlKTtcbn07XG4iXSwibWFwcGluZ3MiOiJrVUFHZSxRQUFBQSxDQUNiQyxDQUFLLENBQ0xDLENBQUssQ0FDTEMsQ0FBSyxDQUNMQyxDQUFVLENBQ1ZDLENBQVUsQ0FDVkMsQ0FBYSxDQUNiQyxDQUFjLENBQ2RDLENBQVUsQ0FDVkMsQ0FBd0IsQ0FDckIsQ0FDSFIsQ0FBSyxDQUFDUyxjQUFjLENBQUMsQ0FBQyxJQUNGLENBQUFDLENBQWMsQ0FBS1QsQ0FBSyxDQUFwQ0csVUFBVSxDQUVaTyxDQUFlLENBQUcsR0FBQUMsMkJBQWUsRUFDckNSLENBQVUsQ0FDVkQsQ0FBVSxDQUNWSyxDQUF3QixDQUN4QkQsQ0FDRixDQUFDLENBQ0QsR0FBSSxDQUFDSSxDQUFlLENBQUUsU0FFdEIsR0FBTSxDQUFBRSxDQUFRLENBQUcsR0FBQUMsdUJBQVcsRUFBQ1YsQ0FBVSxDQUFFRixDQUFLLENBQUVDLENBQVUsQ0FBQyxDQUV2RE8sQ0FBYyxFQUNoQkEsQ0FBYyxDQUFDTixDQUFVLENBQUVELENBQVUsQ0FBRVUsQ0FBUSxDQUFDLENBRWxEUixDQUFhLENBQUNRLENBQVEsQ0FBQyxDQUN2QlAsQ0FBYyxHQUFLLENBQUMsQ0FDcEJFLENBQXdCLEdBQU0sQ0FBQyxDQUUvQkgsQ0FBYSxDQUFDUSxDQUFRLENBQUMsQ0FDdkJQLENBQWMsR0FBSyxDQUFDLENBQ3BCRSxDQUF3QixHQUFNLENBQ2hDLENBQUMsQ0FBQU8sT0FBQSxZQUFBaEIsUUFBQSJ9
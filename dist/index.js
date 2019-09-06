"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _RenderFields = _interopRequireDefault(require("./FormElements/RenderFields"));

var _FormError = _interopRequireDefault(require("./FormElements/FormError"));

var _FormConfirmation = _interopRequireDefault(require("./FormElements/FormConfirmation"));

var _validation = require("./Helpers/validation");

var _Submit = _interopRequireDefault(require("./FormElements/Submit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GravityForm =
/*#__PURE__*/
function (_Component) {
  _inherits(GravityForm, _Component);

  function GravityForm(props) {
    var _this;

    _classCallCheck(this, GravityForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GravityForm).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "setTouched", function (id) {
      _this.setState({
        touched: _objectSpread({}, _this.state.touched, _defineProperty({}, id, true))
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateFormHandler", function (event, field) {
      var _this$state = _this.state,
          formValues = _this$state.formValues,
          conditioanlIds = _this$state.conditioanlIds,
          conditionFields = _this$state.conditionFields;
      var id = field.id,
          type = field.type,
          isRequired = field.isRequired; // Set new value

      var value;

      if (field.type === 'checkbox') {
        var values = _toConsumableArray(formValues[field.id].value);

        var index = values.indexOf(event.target.value);

        if (index > -1) {
          values.splice(index, 1);
        } else {
          values.push(event.target.value);
        }

        value = values;
      } else if (field.type == 'date') {
        var subId = field.subId,
            dateLabel = field.dateLabel;

        var _values = _toConsumableArray(formValues[field.id].value);

        _values[subId] = {
          val: event.target.value,
          label: dateLabel
        };
        value = _values;
      } else {
        value = event.target ? event.target.value : 'null';
      } // if field is IBAN


      if (type === 'text' && field.cssClass.indexOf('iban') > -1) {
        type = 'iban';
      } // Validate field


      var valid = (0, _validation.validateField)(value, type, isRequired, field); // if field ID is somewhere in conditional fields
      // recalculate all conditions

      if (conditioanlIds.indexOf(id) !== -1) {
        formValues[id].value = value;

        for (var i = 0; i < conditionFields.length; i++) {
          var _id = conditionFields[i].id;

          var hide = _this.checkConditionalLogic(conditionFields[i].conditionalLogic, formValues);

          formValues[_id].hideField = hide;

          if (hide) {
            if (formValues[_id].isRequired && hide) {
              formValues[_id].value = '';
            }

            formValues[_id].valid = !!formValues[_id].isRequired;
          }
        }
      }

      _this.setState({
        formValues: _objectSpread({}, formValues, _defineProperty({}, id, {
          value: value,
          id: id,
          valid: valid,
          label: field.label,
          pageNumber: field.pageNumber,
          cssClass: field.cssClass,
          isRequired: field.isRequired
        }))
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmit",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(event) {
        var _this$props, formID, backendUrl, gfSubmissionUrl, data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({
                  submitting: true,
                  submitSuccess: false,
                  submitFailed: false,
                  confirmationMessage: false,
                  errorMessages: false
                });

                _this$props = _this.props, formID = _this$props.formID, backendUrl = _this$props.backendUrl;
                gfSubmissionUrl = backendUrl.substring(0, backendUrl.indexOf('/wp-json'));
                data = new FormData(event.target);

                _axios["default"].post("".concat(gfSubmissionUrl, "/wp-json/gf/v2/forms/").concat(formID, "/submissions"), data).then(function (response) {
                  if (response.data && response.data.is_valid) {
                    _this.setState({
                      submitting: false,
                      submitSuccess: true,
                      confirmationMessage: response.data.confirmation_message
                    });
                  } else {
                    _this.setState({
                      submitting: false,
                      submitFailed: true,
                      errorMessages: 'Something went wrong'
                    });
                  }
                })["catch"](function (error) {
                  _this.setState({
                    submitting: false,
                    submitFailed: true,
                    errorMessages: error.response.data.validation_messages
                  });
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "nextStep", function () {
      var activePage = _this.state.activePage;

      _this.setState({
        activePage: activePage + 1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "prevStep", function (e) {
      e.preventDefault();
      var activePage = _this.state.activePage;

      _this.setState({
        activePage: activePage - 1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "checkConditionalLogic", function (condition) {
      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var rules = condition.rules,
          actionType = condition.actionType;
      if (!rules) return true;
      var formValues = fields || _this.state.formValues; // show only if is selected "All fields" (it should be tweaked in future)
      // works only "show/hide when field is equal to"

      var hideField = actionType !== 'hide';
      var hideBasedOnRules = [];

      for (var i = 0; i < rules.length; i++) {
        var _rules$i = rules[i],
            fieldId = _rules$i.fieldId,
            value = _rules$i.value;
        var conditionFieldValue = formValues[fieldId].value;
        var stringValue = Array.isArray(conditionFieldValue) ? conditionFieldValue.join('') : conditionFieldValue;

        if (stringValue && value === stringValue) {
          hideBasedOnRules[i] = actionType === 'hide';
        } else {
          hideBasedOnRules[i] = actionType !== 'hide';
        }
      }

      hideField = hideBasedOnRules.every(function (i) {
        return i === true;
      }); // formValues[id].hideField = hideField;
      // this.setState({ formValues });

      return hideField;
    });

    _this.state = {
      submitFailed: false,
      errorMessages: false,
      formValues: {},
      loading: true,
      submitting: false,
      submitSuccess: false,
      confirmationMessage: false,
      isValid: false,
      formData: {},
      touched: {},
      activePage: false,
      conditionFields: {},
      conditioanlIds: {},
      isMultipart: false
    };
    return _this;
  }

  _createClass(GravityForm, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var _this$props2, formID, backendUrl, isMultipart, form, formValues, conditionFields, conditioanlIds, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, field, value, preselected, tmpField, ids, _i, id, i;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$props2 = this.props, formID = _this$props2.formID, backendUrl = _this$props2.backendUrl;
                this._isMounted = true;
                isMultipart = false;
                _context2.next = 5;
                return _axios["default"].get("".concat(backendUrl, "/").concat(formID)).then(function (response) {
                  return response.data;
                })["catch"](function () {
                  return false;
                });

              case 5:
                form = _context2.sent;

                if (!(form && this._isMounted)) {
                  _context2.next = 31;
                  break;
                }

                formValues = {};
                conditionFields = [];
                conditioanlIds = []; // eslint-disable-next-line no-restricted-syntax

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 13;

                for (_iterator = form.fields[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  field = _step.value;
                  value = void 0;

                  if (field.type === 'checkbox') {
                    value = field.choices.filter(function (choice) {
                      return choice.isSelected;
                    }).map(function (choice) {
                      return choice.value;
                    });
                  } else if (field.type === 'radio') {
                    preselected = field.choices.find(function (choice) {
                      return choice.isSelected;
                    });
                    value = preselected ? preselected.value : '';
                  } else {
                    value = field.defaultValue;

                    if (field.type === 'fileupload') {
                      isMultipart = true;
                    }
                  } // grab all conditional logic fields


                  if (field.conditionalLogic) {
                    tmpField = {
                      id: field.id,
                      conditionalLogic: field.conditionalLogic
                    };
                    ids = field.conditionalLogic.rules.map(function (item) {
                      return item.fieldId;
                    });

                    for (_i = 0; _i < ids.length; _i++) {
                      id = parseInt(ids[_i]);

                      if (conditioanlIds.indexOf(id) === -1) {
                        conditioanlIds.push(id);
                      }
                    }

                    conditionFields.push(tmpField);
                  }

                  formValues[field.id] = {
                    valid: (0, _validation.validateField)(value, field.type, field.isRequired),
                    value: value,
                    label: field.label,
                    pageNumber: field.pageNumber,
                    cssClass: field.cssClass,
                    isRequired: field.isRequired
                  };
                } // check condition logic


                _context2.next = 21;
                break;

              case 17:
                _context2.prev = 17;
                _context2.t0 = _context2["catch"](13);
                _didIteratorError = true;
                _iteratorError = _context2.t0;

              case 21:
                _context2.prev = 21;
                _context2.prev = 22;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 24:
                _context2.prev = 24;

                if (!_didIteratorError) {
                  _context2.next = 27;
                  break;
                }

                throw _iteratorError;

              case 27:
                return _context2.finish(24);

              case 28:
                return _context2.finish(21);

              case 29:
                for (i = 0; i < conditionFields.length; i++) {
                  formValues[conditionFields[i].id].hideField = this.checkConditionalLogic(conditionFields[i].conditionalLogic, formValues);
                }

                this.setState({
                  formData: form,
                  formValues: formValues,
                  activePage: form.pagination ? 1 : false,
                  conditionFields: conditionFields,
                  conditioanlIds: conditioanlIds,
                  isMultipart: isMultipart
                });

              case 31:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[13, 17, 21, 29], [22,, 24, 28]]);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          formData = _this$state2.formData,
          formValues = _this$state2.formValues,
          submitFailed = _this$state2.submitFailed,
          submitSuccess = _this$state2.submitSuccess,
          touched = _this$state2.touched,
          submitting = _this$state2.submitting,
          activePage = _this$state2.activePage,
          isMultipart = _this$state2.isMultipart;
      var _this$props3 = this.props,
          title = _this$props3.title,
          submitIcon = _this$props3.submitIcon,
          saveStateToHtmlField = _this$props3.saveStateToHtmlField,
          styledComponents = _this$props3.styledComponents;

      var _ref2 = styledComponents || false,
          Button = _ref2.Button,
          Loading = _ref2.Loading,
          _ref2$GFWrapper = _ref2.GFWrapper,
          GFWrapper = _ref2$GFWrapper === void 0 ? 'div' : _ref2$GFWrapper;

      var cssClass = formData.cssClass;
      var isDisabled = Object.keys(formValues).some(function (x) {
        return !formValues[x].hideField && formValues[x].valid;
      });
      var isNextDisabled = activePage ? Object.keys(formValues).some(function (x) {
        return formValues[x].pageNumber === activePage && !formValues[x].hideField && formValues[x].valid;
      }) : false;
      return _react["default"].createElement(GFWrapper, {
        className: "form-wrapper",
        css: {
          position: 'realtive'
        },
        id: "gravity_form_".concat(this.props.formID)
      }, formData.title ? null : Loading && _react["default"].createElement(Loading, {
        isLoading: true
      }), submitFailed && !submitSuccess && _react["default"].createElement(_FormError["default"], {
        fields: formValues,
        errors: this.state.errorMessages,
        errorMessage: "There was a problem with your submission"
      }), submitSuccess && this.state.confirmationMessage && _react["default"].createElement(_FormConfirmation["default"], {
        confirmation: this.state.confirmationMessage
      }), !submitSuccess && formData.fields ? _react["default"].createElement("form", {
        onSubmit: function onSubmit(e) {
          return _this2.onSubmit(e);
        },
        className: cssClass,
        encType: isMultipart ? 'multipart/form-data' : undefined,
        noValidate: true
      }, (formData.title || formData.description) && _react["default"].createElement("div", null, formData.title && title ? _react["default"].createElement("h3", {
        className: "form-title"
      }, formData.title) : null, formData.description ? _react["default"].createElement("p", {
        className: "form-description"
      }, formData.description) : null), _react["default"].createElement("div", {
        className: "form-wrapper"
      }, _react["default"].createElement(_RenderFields["default"], {
        styledComponents: styledComponents,
        fields: formData.fields,
        formValues: formValues,
        submitFailed: submitFailed,
        submitSuccess: submitSuccess,
        updateForm: this.updateFormHandler,
        touched: touched,
        setTouched: this.setTouched,
        pagination: formData.pagination,
        activePage: activePage,
        prevStep: this.prevStep,
        nextStep: this.nextStep,
        isNextDisabled: isNextDisabled,
        checkConditionalLogic: this.checkConditionalLogic,
        saveStateToHtmlField: saveStateToHtmlField,
        enableHoneypot: formData.enableHoneypot
      }), (!formData.pagination || formData.pagination && formData.pagination.pages.length === activePage) && _react["default"].createElement(_Submit["default"], {
        Button: Button,
        Loading: Loading,
        formData: formData,
        submitIcon: submitIcon,
        isDisabled: isDisabled,
        submitting: submitting,
        prevStep: this.prevStep
      }))) : '');
    }
  }]);

  return GravityForm;
}(_react.Component);

GravityForm.defaultProps = {
  title: true,
  submitIcon: false,
  saveStateToHtmlField: false
};
var _default = GravityForm;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHcmF2aXR5Rm9ybSIsInByb3BzIiwiaWQiLCJzZXRTdGF0ZSIsInRvdWNoZWQiLCJzdGF0ZSIsImV2ZW50IiwiZmllbGQiLCJmb3JtVmFsdWVzIiwiY29uZGl0aW9hbmxJZHMiLCJjb25kaXRpb25GaWVsZHMiLCJ0eXBlIiwiaXNSZXF1aXJlZCIsInZhbHVlIiwidmFsdWVzIiwiaW5kZXgiLCJpbmRleE9mIiwidGFyZ2V0Iiwic3BsaWNlIiwicHVzaCIsInN1YklkIiwiZGF0ZUxhYmVsIiwidmFsIiwibGFiZWwiLCJjc3NDbGFzcyIsInZhbGlkIiwiaSIsImxlbmd0aCIsImhpZGUiLCJjaGVja0NvbmRpdGlvbmFsTG9naWMiLCJjb25kaXRpb25hbExvZ2ljIiwiaGlkZUZpZWxkIiwicGFnZU51bWJlciIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0dGluZyIsInN1Ym1pdFN1Y2Nlc3MiLCJzdWJtaXRGYWlsZWQiLCJjb25maXJtYXRpb25NZXNzYWdlIiwiZXJyb3JNZXNzYWdlcyIsImZvcm1JRCIsImJhY2tlbmRVcmwiLCJnZlN1Ym1pc3Npb25VcmwiLCJzdWJzdHJpbmciLCJkYXRhIiwiRm9ybURhdGEiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJpc192YWxpZCIsImNvbmZpcm1hdGlvbl9tZXNzYWdlIiwiZXJyb3IiLCJ2YWxpZGF0aW9uX21lc3NhZ2VzIiwiYWN0aXZlUGFnZSIsImUiLCJjb25kaXRpb24iLCJmaWVsZHMiLCJydWxlcyIsImFjdGlvblR5cGUiLCJoaWRlQmFzZWRPblJ1bGVzIiwiZmllbGRJZCIsImNvbmRpdGlvbkZpZWxkVmFsdWUiLCJzdHJpbmdWYWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsImpvaW4iLCJldmVyeSIsImxvYWRpbmciLCJpc1ZhbGlkIiwiZm9ybURhdGEiLCJpc011bHRpcGFydCIsIl9pc01vdW50ZWQiLCJnZXQiLCJmb3JtIiwiY2hvaWNlcyIsImZpbHRlciIsImNob2ljZSIsImlzU2VsZWN0ZWQiLCJtYXAiLCJwcmVzZWxlY3RlZCIsImZpbmQiLCJkZWZhdWx0VmFsdWUiLCJ0bXBGaWVsZCIsImlkcyIsIml0ZW0iLCJwYXJzZUludCIsInBhZ2luYXRpb24iLCJ0aXRsZSIsInN1Ym1pdEljb24iLCJzYXZlU3RhdGVUb0h0bWxGaWVsZCIsInN0eWxlZENvbXBvbmVudHMiLCJCdXR0b24iLCJMb2FkaW5nIiwiR0ZXcmFwcGVyIiwiaXNEaXNhYmxlZCIsIk9iamVjdCIsImtleXMiLCJzb21lIiwieCIsImlzTmV4dERpc2FibGVkIiwicG9zaXRpb24iLCJvblN1Ym1pdCIsInVuZGVmaW5lZCIsImRlc2NyaXB0aW9uIiwidXBkYXRlRm9ybUhhbmRsZXIiLCJzZXRUb3VjaGVkIiwicHJldlN0ZXAiLCJuZXh0U3RlcCIsImVuYWJsZUhvbmV5cG90IiwicGFnZXMiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFc7Ozs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIscUZBQU1BLEtBQU47O0FBRGlCLGlFQWdHTixVQUFDQyxFQUFELEVBQVE7QUFDbkIsWUFBS0MsUUFBTCxDQUFjO0FBQ1pDLFFBQUFBLE9BQU8sb0JBQU8sTUFBS0MsS0FBTCxDQUFXRCxPQUFsQixzQkFBNEJGLEVBQTVCLEVBQWlDLElBQWpDO0FBREssT0FBZDtBQUdELEtBcEdrQjs7QUFBQSx3RUFzR0MsVUFBQ0ksS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQUEsd0JBQ29CLE1BQUtGLEtBRHpCO0FBQUEsVUFDNUJHLFVBRDRCLGVBQzVCQSxVQUQ0QjtBQUFBLFVBQ2hCQyxjQURnQixlQUNoQkEsY0FEZ0I7QUFBQSxVQUNBQyxlQURBLGVBQ0FBLGVBREE7QUFBQSxVQUU5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VjtBQUVFLFFBQUEsT0FBTyxFQUFFQyxPQUZYO0FBR0UsUUFBQSxRQUFRLEVBQUV2QixRQUhaO0FBSUUsUUFBQSxVQUFVLEVBQUVtQixVQUpkO0FBS0UsUUFBQSxVQUFVLEVBQUVNLFVBTGQ7QUFNRSxRQUFBLFVBQVUsRUFBRTVELFVBTmQ7QUFPRSxRQUFBLFFBQVEsRUFBRSxLQUFLd0U7QUFQakIsUUFyQkosQ0FmRixDQURELEdBa0RDLEVBckVKLENBREY7QUEwRUQ7Ozs7RUFoV3VCSSxnQjs7QUFtVzFCOUcsV0FBVyxDQUFDK0csWUFBWixHQUEyQjtBQUN6QnhCLEVBQUFBLEtBQUssRUFBRSxJQURrQjtBQUV6QkMsRUFBQUEsVUFBVSxFQUFFLEtBRmE7QUFHekJDLEVBQUFBLG9CQUFvQixFQUFFO0FBSEcsQ0FBM0I7ZUFNZXpGLFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSZW5kZXJGaWVsZHMgZnJvbSAnLi9Gb3JtRWxlbWVudHMvUmVuZGVyRmllbGRzJztcbmltcG9ydCBGb3JtRXJyb3IgZnJvbSAnLi9Gb3JtRWxlbWVudHMvRm9ybUVycm9yJztcbmltcG9ydCBGb3JtQ29uZmlybWF0aW9uIGZyb20gJy4vRm9ybUVsZW1lbnRzL0Zvcm1Db25maXJtYXRpb24nO1xuaW1wb3J0IHsgdmFsaWRhdGVGaWVsZCB9IGZyb20gJy4vSGVscGVycy92YWxpZGF0aW9uJztcbmltcG9ydCBTdWJtaXQgZnJvbSAnLi9Gb3JtRWxlbWVudHMvU3VibWl0JztcblxuY2xhc3MgR3Jhdml0eUZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3VibWl0RmFpbGVkOiBmYWxzZSxcbiAgICAgIGVycm9yTWVzc2FnZXM6IGZhbHNlLFxuICAgICAgZm9ybVZhbHVlczoge30sXG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICBzdWJtaXRTdWNjZXNzOiBmYWxzZSxcbiAgICAgIGNvbmZpcm1hdGlvbk1lc3NhZ2U6IGZhbHNlLFxuICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgICBmb3JtRGF0YToge30sXG4gICAgICB0b3VjaGVkOiB7fSxcbiAgICAgIGFjdGl2ZVBhZ2U6IGZhbHNlLFxuICAgICAgY29uZGl0aW9uRmllbGRzOiB7fSxcbiAgICAgIGNvbmRpdGlvYW5sSWRzOiB7fSxcbiAgICAgIGlzTXVsdGlwYXJ0OiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBmb3JtSUQsIGJhY2tlbmRVcmwgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICBsZXQgaXNNdWx0aXBhcnQgPSBmYWxzZTtcbiAgICBjb25zdCBmb3JtID0gYXdhaXQgYXhpb3NcbiAgICAgIC5nZXQoYCR7YmFja2VuZFVybH0vJHtmb3JtSUR9YClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXG4gICAgICAuY2F0Y2goKCkgPT4gZmFsc2UpO1xuXG4gICAgaWYgKGZvcm0gJiYgdGhpcy5faXNNb3VudGVkKSB7XG4gICAgICBjb25zdCBmb3JtVmFsdWVzID0ge307XG4gICAgICBjb25zdCBjb25kaXRpb25GaWVsZHMgPSBbXTtcbiAgICAgIGNvbnN0IGNvbmRpdGlvYW5sSWRzID0gW107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgZm9ybS5maWVsZHMpIHtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgIHZhbHVlID0gZmllbGQuY2hvaWNlcy5maWx0ZXIoY2hvaWNlID0+IGNob2ljZS5pc1NlbGVjdGVkKS5tYXAoY2hvaWNlID0+IGNob2ljZS52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgIGNvbnN0IHByZXNlbGVjdGVkID0gZmllbGQuY2hvaWNlcy5maW5kKGNob2ljZSA9PiBjaG9pY2UuaXNTZWxlY3RlZCk7XG4gICAgICAgICAgdmFsdWUgPSBwcmVzZWxlY3RlZCA/IHByZXNlbGVjdGVkLnZhbHVlIDogJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUgPSBmaWVsZC5kZWZhdWx0VmFsdWU7XG4gICAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdmaWxldXBsb2FkJykge1xuICAgICAgICAgICAgaXNNdWx0aXBhcnQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdyYWIgYWxsIGNvbmRpdGlvbmFsIGxvZ2ljIGZpZWxkc1xuICAgICAgICBpZiAoZmllbGQuY29uZGl0aW9uYWxMb2dpYykge1xuICAgICAgICAgIGNvbnN0IHRtcEZpZWxkID0ge1xuICAgICAgICAgICAgaWQ6IGZpZWxkLmlkLFxuICAgICAgICAgICAgY29uZGl0aW9uYWxMb2dpYzogZmllbGQuY29uZGl0aW9uYWxMb2dpYyxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNvbnN0IGlkcyA9IGZpZWxkLmNvbmRpdGlvbmFsTG9naWMucnVsZXMubWFwKGl0ZW0gPT4gaXRlbS5maWVsZElkKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaWQgPSBwYXJzZUludChpZHNbaV0pO1xuICAgICAgICAgICAgaWYgKGNvbmRpdGlvYW5sSWRzLmluZGV4T2YoaWQpID09PSAtMSkge1xuICAgICAgICAgICAgICBjb25kaXRpb2FubElkcy5wdXNoKGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uZGl0aW9uRmllbGRzLnB1c2godG1wRmllbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybVZhbHVlc1tmaWVsZC5pZF0gPSB7XG4gICAgICAgICAgdmFsaWQ6IHZhbGlkYXRlRmllbGQodmFsdWUsIGZpZWxkLnR5cGUsIGZpZWxkLmlzUmVxdWlyZWQpLFxuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIGxhYmVsOiBmaWVsZC5sYWJlbCxcbiAgICAgICAgICBwYWdlTnVtYmVyOiBmaWVsZC5wYWdlTnVtYmVyLFxuICAgICAgICAgIGNzc0NsYXNzOiBmaWVsZC5jc3NDbGFzcyxcbiAgICAgICAgICBpc1JlcXVpcmVkOiBmaWVsZC5pc1JlcXVpcmVkLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy8gY2hlY2sgY29uZGl0aW9uIGxvZ2ljXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmRpdGlvbkZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3JtVmFsdWVzW2NvbmRpdGlvbkZpZWxkc1tpXS5pZF0uaGlkZUZpZWxkID0gdGhpcy5jaGVja0NvbmRpdGlvbmFsTG9naWMoXG4gICAgICAgICAgY29uZGl0aW9uRmllbGRzW2ldLmNvbmRpdGlvbmFsTG9naWMsXG4gICAgICAgICAgZm9ybVZhbHVlcyxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvcm1EYXRhOiBmb3JtLFxuICAgICAgICBmb3JtVmFsdWVzLFxuICAgICAgICBhY3RpdmVQYWdlOiBmb3JtLnBhZ2luYXRpb24gPyAxIDogZmFsc2UsXG4gICAgICAgIGNvbmRpdGlvbkZpZWxkcyxcbiAgICAgICAgY29uZGl0aW9hbmxJZHMsXG4gICAgICAgIGlzTXVsdGlwYXJ0LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gIH1cblxuICBzZXRUb3VjaGVkID0gKGlkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0b3VjaGVkOiB7IC4uLnRoaXMuc3RhdGUudG91Y2hlZCwgW2lkXTogdHJ1ZSB9LFxuICAgIH0pO1xuICB9O1xuXG4gIHVwZGF0ZUZvcm1IYW5kbGVyID0gKGV2ZW50LCBmaWVsZCkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybVZhbHVlcywgY29uZGl0aW9hbmxJZHMsIGNvbmRpdGlvbkZpZWxkcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgeyBpZCwgdHlwZSwgaXNSZXF1aXJlZCB9ID0gZmllbGQ7XG4gICAgLy8gU2V0IG5ldyB2YWx1ZVxuICAgIGxldCB2YWx1ZTtcbiAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgY29uc3QgdmFsdWVzID0gWy4uLmZvcm1WYWx1ZXNbZmllbGQuaWRdLnZhbHVlXTtcbiAgICAgIGNvbnN0IGluZGV4ID0gdmFsdWVzLmluZGV4T2YoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIHZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWVzLnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHZhbHVlID0gdmFsdWVzO1xuICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PSAnZGF0ZScpIHtcbiAgICAgIGNvbnN0IHsgc3ViSWQsIGRhdGVMYWJlbCB9ID0gZmllbGQ7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBbLi4uZm9ybVZhbHVlc1tmaWVsZC5pZF0udmFsdWVdO1xuICAgICAgdmFsdWVzW3N1YklkXSA9IHtcbiAgICAgICAgdmFsOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICAgIGxhYmVsOiBkYXRlTGFiZWwsXG4gICAgICB9O1xuICAgICAgdmFsdWUgPSB2YWx1ZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gZXZlbnQudGFyZ2V0ID8gZXZlbnQudGFyZ2V0LnZhbHVlIDogJ251bGwnO1xuICAgIH1cbiAgICAvLyBpZiBmaWVsZCBpcyBJQkFOXG4gICAgaWYgKHR5cGUgPT09ICd0ZXh0JyAmJiBmaWVsZC5jc3NDbGFzcy5pbmRleE9mKCdpYmFuJykgPiAtMSkge1xuICAgICAgdHlwZSA9ICdpYmFuJztcbiAgICB9XG4gICAgLy8gVmFsaWRhdGUgZmllbGRcbiAgICBjb25zdCB2YWxpZCA9IHZhbGlkYXRlRmllbGQodmFsdWUsIHR5cGUsIGlzUmVxdWlyZWQsIGZpZWxkKTtcblxuICAgIC8vIGlmIGZpZWxkIElEIGlzIHNvbWV3aGVyZSBpbiBjb25kaXRpb25hbCBmaWVsZHNcbiAgICAvLyByZWNhbGN1bGF0ZSBhbGwgY29uZGl0aW9uc1xuICAgIGlmIChjb25kaXRpb2FubElkcy5pbmRleE9mKGlkKSAhPT0gLTEpIHtcbiAgICAgIGZvcm1WYWx1ZXNbaWRdLnZhbHVlID0gdmFsdWU7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmRpdGlvbkZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB7IGlkIH0gPSBjb25kaXRpb25GaWVsZHNbaV07XG4gICAgICAgIGNvbnN0IGhpZGUgPSB0aGlzLmNoZWNrQ29uZGl0aW9uYWxMb2dpYyhjb25kaXRpb25GaWVsZHNbaV0uY29uZGl0aW9uYWxMb2dpYywgZm9ybVZhbHVlcyk7XG4gICAgICAgIGZvcm1WYWx1ZXNbaWRdLmhpZGVGaWVsZCA9IGhpZGU7XG4gICAgICAgIGlmIChoaWRlKSB7XG4gICAgICAgICAgaWYgKGZvcm1WYWx1ZXNbaWRdLmlzUmVxdWlyZWQgJiYgaGlkZSkge1xuICAgICAgICAgICAgZm9ybVZhbHVlc1tpZF0udmFsdWUgPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9ybVZhbHVlc1tpZF0udmFsaWQgPSAhIWZvcm1WYWx1ZXNbaWRdLmlzUmVxdWlyZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvcm1WYWx1ZXM6IHtcbiAgICAgICAgLi4uZm9ybVZhbHVlcyxcbiAgICAgICAgW2lkXToge1xuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIGlkLFxuICAgICAgICAgIHZhbGlkLFxuICAgICAgICAgIGxhYmVsOiBmaWVsZC5sYWJlbCxcbiAgICAgICAgICBwYWdlTnVtYmVyOiBmaWVsZC5wYWdlTnVtYmVyLFxuICAgICAgICAgIGNzc0NsYXNzOiBmaWVsZC5jc3NDbGFzcyxcbiAgICAgICAgICBpc1JlcXVpcmVkOiBmaWVsZC5pc1JlcXVpcmVkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdWJtaXR0aW5nOiB0cnVlLFxuICAgICAgc3VibWl0U3VjY2VzczogZmFsc2UsXG4gICAgICBzdWJtaXRGYWlsZWQ6IGZhbHNlLFxuICAgICAgY29uZmlybWF0aW9uTWVzc2FnZTogZmFsc2UsXG4gICAgICBlcnJvck1lc3NhZ2VzOiBmYWxzZSxcbiAgICB9KTtcbiAgICBjb25zdCB7IGZvcm1JRCwgYmFja2VuZFVybCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBnZlN1Ym1pc3Npb25VcmwgPSBiYWNrZW5kVXJsLnN1YnN0cmluZygwLCBiYWNrZW5kVXJsLmluZGV4T2YoJy93cC1qc29uJykpO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcbiAgICBheGlvc1xuICAgICAgLnBvc3QoYCR7Z2ZTdWJtaXNzaW9uVXJsfS93cC1qc29uL2dmL3YyL2Zvcm1zLyR7Zm9ybUlEfS9zdWJtaXNzaW9uc2AsIGRhdGEpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5pc192YWxpZCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICAgICAgICBzdWJtaXRTdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlybWF0aW9uTWVzc2FnZTogcmVzcG9uc2UuZGF0YS5jb25maXJtYXRpb25fbWVzc2FnZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc3VibWl0RmFpbGVkOiB0cnVlLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlczogJ1NvbWV0aGluZyB3ZW50IHdyb25nJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICAgICAgc3VibWl0RmFpbGVkOiB0cnVlLFxuICAgICAgICAgIGVycm9yTWVzc2FnZXM6IGVycm9yLnJlc3BvbnNlLmRhdGEudmFsaWRhdGlvbl9tZXNzYWdlcyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBuZXh0U3RlcCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGFjdGl2ZVBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVQYWdlOiBhY3RpdmVQYWdlICsgMSxcbiAgICB9KTtcbiAgfTtcblxuICBwcmV2U3RlcCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgYWN0aXZlUGFnZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZVBhZ2U6IGFjdGl2ZVBhZ2UgLSAxLFxuICAgIH0pO1xuICB9O1xuXG4gIGNoZWNrQ29uZGl0aW9uYWxMb2dpYyA9IChjb25kaXRpb24sIGZpZWxkcyA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgeyBydWxlcywgYWN0aW9uVHlwZSB9ID0gY29uZGl0aW9uO1xuICAgIGlmICghcnVsZXMpIHJldHVybiB0cnVlO1xuXG4gICAgY29uc3QgZm9ybVZhbHVlcyA9IGZpZWxkcyB8fCB0aGlzLnN0YXRlLmZvcm1WYWx1ZXM7XG5cbiAgICAvLyBzaG93IG9ubHkgaWYgaXMgc2VsZWN0ZWQgXCJBbGwgZmllbGRzXCIgKGl0IHNob3VsZCBiZSB0d2Vha2VkIGluIGZ1dHVyZSlcbiAgICAvLyB3b3JrcyBvbmx5IFwic2hvdy9oaWRlIHdoZW4gZmllbGQgaXMgZXF1YWwgdG9cIlxuICAgIGxldCBoaWRlRmllbGQgPSBhY3Rpb25UeXBlICE9PSAnaGlkZSc7XG4gICAgY29uc3QgaGlkZUJhc2VkT25SdWxlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHsgZmllbGRJZCwgdmFsdWUgfSA9IHJ1bGVzW2ldO1xuICAgICAgY29uc3QgY29uZGl0aW9uRmllbGRWYWx1ZSA9IGZvcm1WYWx1ZXNbZmllbGRJZF0udmFsdWU7XG5cbiAgICAgIGNvbnN0IHN0cmluZ1ZhbHVlID0gQXJyYXkuaXNBcnJheShjb25kaXRpb25GaWVsZFZhbHVlKVxuICAgICAgICA/IGNvbmRpdGlvbkZpZWxkVmFsdWUuam9pbignJylcbiAgICAgICAgOiBjb25kaXRpb25GaWVsZFZhbHVlO1xuICAgICAgaWYgKHN0cmluZ1ZhbHVlICYmIHZhbHVlID09PSBzdHJpbmdWYWx1ZSkge1xuICAgICAgICBoaWRlQmFzZWRPblJ1bGVzW2ldID0gYWN0aW9uVHlwZSA9PT0gJ2hpZGUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGlkZUJhc2VkT25SdWxlc1tpXSA9IGFjdGlvblR5cGUgIT09ICdoaWRlJztcbiAgICAgIH1cbiAgICB9XG4gICAgaGlkZUZpZWxkID0gaGlkZUJhc2VkT25SdWxlcy5ldmVyeShpID0+IGkgPT09IHRydWUpO1xuICAgIC8vIGZvcm1WYWx1ZXNbaWRdLmhpZGVGaWVsZCA9IGhpZGVGaWVsZDtcbiAgICAvLyB0aGlzLnNldFN0YXRlKHsgZm9ybVZhbHVlcyB9KTtcbiAgICByZXR1cm4gaGlkZUZpZWxkO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBmb3JtRGF0YSxcbiAgICAgIGZvcm1WYWx1ZXMsXG4gICAgICBzdWJtaXRGYWlsZWQsXG4gICAgICBzdWJtaXRTdWNjZXNzLFxuICAgICAgdG91Y2hlZCxcbiAgICAgIHN1Ym1pdHRpbmcsXG4gICAgICBhY3RpdmVQYWdlLFxuICAgICAgaXNNdWx0aXBhcnQsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgdGl0bGUsIHN1Ym1pdEljb24sIHNhdmVTdGF0ZVRvSHRtbEZpZWxkLCBzdHlsZWRDb21wb25lbnRzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgQnV0dG9uLCBMb2FkaW5nLCBHRldyYXBwZXIgPSAnZGl2JyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcbiAgICBjb25zdCB7IGNzc0NsYXNzIH0gPSBmb3JtRGF0YTtcblxuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBPYmplY3Qua2V5cyhmb3JtVmFsdWVzKS5zb21lKFxuICAgICAgeCA9PiAhZm9ybVZhbHVlc1t4XS5oaWRlRmllbGQgJiYgZm9ybVZhbHVlc1t4XS52YWxpZCxcbiAgICApO1xuICAgIGNvbnN0IGlzTmV4dERpc2FibGVkID0gYWN0aXZlUGFnZVxuICAgICAgPyBPYmplY3Qua2V5cyhmb3JtVmFsdWVzKS5zb21lKFxuICAgICAgICB4ID0+IGZvcm1WYWx1ZXNbeF0ucGFnZU51bWJlciA9PT0gYWN0aXZlUGFnZVxuICAgICAgICAgICAgJiYgIWZvcm1WYWx1ZXNbeF0uaGlkZUZpZWxkXG4gICAgICAgICAgICAmJiBmb3JtVmFsdWVzW3hdLnZhbGlkLFxuICAgICAgKVxuICAgICAgOiBmYWxzZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8R0ZXcmFwcGVyXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0td3JhcHBlclwiXG4gICAgICAgIGNzcz17eyBwb3NpdGlvbjogJ3JlYWx0aXZlJyB9fVxuICAgICAgICBpZD17YGdyYXZpdHlfZm9ybV8ke3RoaXMucHJvcHMuZm9ybUlEfWB9XG4gICAgICA+XG4gICAgICAgIHtmb3JtRGF0YS50aXRsZSA/IG51bGwgOiBMb2FkaW5nICYmIDxMb2FkaW5nIGlzTG9hZGluZyAvPn1cblxuICAgICAgICB7c3VibWl0RmFpbGVkICYmICFzdWJtaXRTdWNjZXNzICYmIChcbiAgICAgICAgICA8Rm9ybUVycm9yXG4gICAgICAgICAgICBmaWVsZHM9e2Zvcm1WYWx1ZXN9XG4gICAgICAgICAgICBlcnJvcnM9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlc31cbiAgICAgICAgICAgIGVycm9yTWVzc2FnZT1cIlRoZXJlIHdhcyBhIHByb2JsZW0gd2l0aCB5b3VyIHN1Ym1pc3Npb25cIlxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAge3N1Ym1pdFN1Y2Nlc3MgJiYgdGhpcy5zdGF0ZS5jb25maXJtYXRpb25NZXNzYWdlICYmIChcbiAgICAgICAgICA8Rm9ybUNvbmZpcm1hdGlvbiBjb25maXJtYXRpb249e3RoaXMuc3RhdGUuY29uZmlybWF0aW9uTWVzc2FnZX0gLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7IXN1Ym1pdFN1Y2Nlc3MgJiYgZm9ybURhdGEuZmllbGRzID8gKFxuICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICBvblN1Ym1pdD17ZSA9PiB0aGlzLm9uU3VibWl0KGUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3NDbGFzc31cbiAgICAgICAgICAgIGVuY1R5cGU9e2lzTXVsdGlwYXJ0ID8gJ211bHRpcGFydC9mb3JtLWRhdGEnIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgbm9WYWxpZGF0ZVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsoZm9ybURhdGEudGl0bGUgfHwgZm9ybURhdGEuZGVzY3JpcHRpb24pICYmIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7Zm9ybURhdGEudGl0bGUgJiYgdGl0bGUgPyA8aDMgY2xhc3NOYW1lPVwiZm9ybS10aXRsZVwiPntmb3JtRGF0YS50aXRsZX08L2gzPiA6IG51bGx9XG4gICAgICAgICAgICAgICAge2Zvcm1EYXRhLmRlc2NyaXB0aW9uID8gKFxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9ybS1kZXNjcmlwdGlvblwiPntmb3JtRGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPFJlbmRlckZpZWxkc1xuICAgICAgICAgICAgICAgIHN0eWxlZENvbXBvbmVudHM9e3N0eWxlZENvbXBvbmVudHN9XG4gICAgICAgICAgICAgICAgZmllbGRzPXtmb3JtRGF0YS5maWVsZHN9XG4gICAgICAgICAgICAgICAgZm9ybVZhbHVlcz17Zm9ybVZhbHVlc31cbiAgICAgICAgICAgICAgICBzdWJtaXRGYWlsZWQ9e3N1Ym1pdEZhaWxlZH1cbiAgICAgICAgICAgICAgICBzdWJtaXRTdWNjZXNzPXtzdWJtaXRTdWNjZXNzfVxuICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm09e3RoaXMudXBkYXRlRm9ybUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgdG91Y2hlZD17dG91Y2hlZH1cbiAgICAgICAgICAgICAgICBzZXRUb3VjaGVkPXt0aGlzLnNldFRvdWNoZWR9XG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17Zm9ybURhdGEucGFnaW5hdGlvbn1cbiAgICAgICAgICAgICAgICBhY3RpdmVQYWdlPXthY3RpdmVQYWdlfVxuICAgICAgICAgICAgICAgIHByZXZTdGVwPXt0aGlzLnByZXZTdGVwfVxuICAgICAgICAgICAgICAgIG5leHRTdGVwPXt0aGlzLm5leHRTdGVwfVxuICAgICAgICAgICAgICAgIGlzTmV4dERpc2FibGVkPXtpc05leHREaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBjaGVja0NvbmRpdGlvbmFsTG9naWM9e3RoaXMuY2hlY2tDb25kaXRpb25hbExvZ2ljfVxuICAgICAgICAgICAgICAgIHNhdmVTdGF0ZVRvSHRtbEZpZWxkPXtzYXZlU3RhdGVUb0h0bWxGaWVsZH1cbiAgICAgICAgICAgICAgICBlbmFibGVIb25leXBvdD17Zm9ybURhdGEuZW5hYmxlSG9uZXlwb3R9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHsoIWZvcm1EYXRhLnBhZ2luYXRpb25cbiAgICAgICAgICAgICAgICB8fCAoZm9ybURhdGEucGFnaW5hdGlvbiAmJiBmb3JtRGF0YS5wYWdpbmF0aW9uLnBhZ2VzLmxlbmd0aCA9PT0gYWN0aXZlUGFnZSkpICYmIChcbiAgICAgICAgICAgICAgICA8U3VibWl0XG4gICAgICAgICAgICAgICAgICBCdXR0b249e0J1dHRvbn1cbiAgICAgICAgICAgICAgICAgIExvYWRpbmc9e0xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICBmb3JtRGF0YT17Zm9ybURhdGF9XG4gICAgICAgICAgICAgICAgICBzdWJtaXRJY29uPXtzdWJtaXRJY29ufVxuICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17aXNEaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgIHN1Ym1pdHRpbmc9e3N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgICBwcmV2U3RlcD17dGhpcy5wcmV2U3RlcH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApIDogKFxuICAgICAgICAgICcnXG4gICAgICAgICl9XG4gICAgICA8L0dGV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG5cbkdyYXZpdHlGb3JtLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6IHRydWUsXG4gIHN1Ym1pdEljb246IGZhbHNlLFxuICBzYXZlU3RhdGVUb0h0bWxGaWVsZDogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcmF2aXR5Rm9ybTtcbiJdfQ==
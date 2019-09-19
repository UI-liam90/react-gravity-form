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
      } else if (field.type == 'consent') {
        value = event.target ? event.target.checked : 'null';
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
      }, function () {
        // pass state to parent component
        var onChange = _this.props.onChange;

        if (onChange) {
          onChange(_this.state.formValues);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHcmF2aXR5Rm9ybSIsInByb3BzIiwiaWQiLCJzZXRTdGF0ZSIsInRvdWNoZWQiLCJzdGF0ZSIsImV2ZW50IiwiZmllbGQiLCJmb3JtVmFsdWVzIiwiY29uZGl0aW9hbmxJZHMiLCJjb25kaXRpb25GaWVsZHMiLCJ0eXBlIiwiaXNSZXF1aXJlZCIsInZhbHVlIiwidmFsdWVzIiwiaW5kZXgiLCJpbmRleE9mIiwidGFyZ2V0Iiwic3BsaWNlIiwicHVzaCIsInN1YklkIiwiZGF0ZUxhYmVsIiwidmFsIiwibGFiZWwiLCJjaGVja2VkIiwiY3NzQ2xhc3MiLCJ2YWxpZCIsImkiLCJsZW5ndGgiLCJoaWRlIiwiY2hlY2tDb25kaXRpb25hbExvZ2ljIiwiY29uZGl0aW9uYWxMb2dpYyIsImhpZGVGaWVsZCIsInBhZ2VOdW1iZXIiLCJvbkNoYW5nZSIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0dGluZyIsInN1Ym1pdFN1Y2Nlc3MiLCJzdWJtaXRGYWlsZWQiLCJjb25maXJtYXRpb25NZXNzYWdlIiwiZXJyb3JNZXNzYWdlcyIsImZvcm1JRCIsImJhY2tlbmRVcmwiLCJnZlN1Ym1pc3Npb25VcmwiLCJzdWJzdHJpbmciLCJkYXRhIiwiRm9ybURhdGEiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJpc192YWxpZCIsImNvbmZpcm1hdGlvbl9tZXNzYWdlIiwiZXJyb3IiLCJ2YWxpZGF0aW9uX21lc3NhZ2VzIiwiYWN0aXZlUGFnZSIsImUiLCJjb25kaXRpb24iLCJmaWVsZHMiLCJydWxlcyIsImFjdGlvblR5cGUiLCJoaWRlQmFzZWRPblJ1bGVzIiwiZmllbGRJZCIsImNvbmRpdGlvbkZpZWxkVmFsdWUiLCJzdHJpbmdWYWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsImpvaW4iLCJldmVyeSIsImxvYWRpbmciLCJpc1ZhbGlkIiwiZm9ybURhdGEiLCJpc011bHRpcGFydCIsIl9pc01vdW50ZWQiLCJnZXQiLCJmb3JtIiwiY2hvaWNlcyIsImZpbHRlciIsImNob2ljZSIsImlzU2VsZWN0ZWQiLCJtYXAiLCJwcmVzZWxlY3RlZCIsImZpbmQiLCJkZWZhdWx0VmFsdWUiLCJ0bXBGaWVsZCIsImlkcyIsIml0ZW0iLCJwYXJzZUludCIsInBhZ2luYXRpb24iLCJ0aXRsZSIsInN1Ym1pdEljb24iLCJzYXZlU3RhdGVUb0h0bWxGaWVsZCIsInN0eWxlZENvbXBvbmVudHMiLCJCdXR0b24iLCJMb2FkaW5nIiwiR0ZXcmFwcGVyIiwiaXNEaXNhYmxlZCIsIk9iamVjdCIsImtleXMiLCJzb21lIiwieCIsImlzTmV4dERpc2FibGVkIiwicG9zaXRpb24iLCJvblN1Ym1pdCIsInVuZGVmaW5lZCIsImRlc2NyaXB0aW9uIiwidXBkYXRlRm9ybUhhbmRsZXIiLCJzZXRUb3VjaGVkIiwicHJldlN0ZXAiLCJuZXh0U3RlcCIsImVuYWJsZUhvbmV5cG90IiwicGFnZXMiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFc7Ozs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIscUZBQU1BLEtBQU47O0FBRGlCLGlFQWdHTixVQUFDQyxFQUFELEVBQVE7QUFDbkIsWUFBS0MsUUFBTCxDQUFjO0FBQ1pDLFFBQUFBLE9BQU8sb0JBQU8sTUFBS0MsS0FBTCxDQUFXRCxPQUFsQixzQkFBNEJGLEVBQTVCLEVBQWlDLElBQWpDO0FBREssT0FBZDtBQUdELEtBcEdrQjs7QUFBQSx3RUFzR0MsVUFBQ0ksS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQUEsd0JBQ29CLE1BQUtGLEtBRHpCO0FBQUEsVUFDNUJHLFVBRDRCLGVBQzVCQSxVQUQ0QjtBQUFBLFVBQ2hCQyxjQURnQixlQUNoQkEsY0FEZ0I7QUFBQSxVQUNBQyxlQURB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WmpCO0FBYUUsUUFBQSxjQUFjLEVBQUVSLGNBYmxCO0FBY0UsUUFBQSxxQkFBcUIsRUFBRSxLQUFLdkUscUJBZDlCO0FBZUUsUUFBQSxvQkFBb0IsRUFBRTZELG9CQWZ4QjtBQWdCRSxRQUFBLGNBQWMsRUFBRXBCLFFBQVEsQ0FBQ3VDO0FBaEIzQixRQURGLEVBbUJHLENBQUMsQ0FBQ3ZDLFFBQVEsQ0FBQ2lCLFVBQVYsSUFDSWpCLFFBQVEsQ0FBQ2lCLFVBQVQsSUFBdUJqQixRQUFRLENBQUNpQixVQUFULENBQW9CdUIsS0FBcEIsQ0FBMEJuRixNQUExQixLQUFxQzJCLFVBRGpFLEtBRUMsZ0NBQUMsa0JBQUQ7QUFDRSxRQUFBLE1BQU0sRUFBRXNDLE1BRFY7QUFFRSxRQUFBLE9BQU8sRUFBRUMsT0FGWDtBQUdFLFFBQUEsUUFBUSxFQUFFdkIsUUFIWjtBQUlFLFFBQUEsVUFBVSxFQUFFbUIsVUFKZDtBQUtFLFFBQUEsVUFBVSxFQUFFTSxVQUxkO0FBTUUsUUFBQSxVQUFVLEVBQUU1RCxVQU5kO0FBT0UsUUFBQSxRQUFRLEVBQUUsS0FBS3dFO0FBUGpCLFFBckJKLENBZkYsQ0FERCxHQWtEQyxFQXJFSixDQURGO0FBMEVEOzs7O0VBM1d1QkksZ0I7O0FBOFcxQmhILFdBQVcsQ0FBQ2lILFlBQVosR0FBMkI7QUFDekJ4QixFQUFBQSxLQUFLLEVBQUUsSUFEa0I7QUFFekJDLEVBQUFBLFVBQVUsRUFBRSxLQUZhO0FBR3pCQyxFQUFBQSxvQkFBb0IsRUFBRTtBQUhHLENBQTNCO2VBTWUzRixXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUmVuZGVyRmllbGRzIGZyb20gJy4vRm9ybUVsZW1lbnRzL1JlbmRlckZpZWxkcyc7XG5pbXBvcnQgRm9ybUVycm9yIGZyb20gJy4vRm9ybUVsZW1lbnRzL0Zvcm1FcnJvcic7XG5pbXBvcnQgRm9ybUNvbmZpcm1hdGlvbiBmcm9tICcuL0Zvcm1FbGVtZW50cy9Gb3JtQ29uZmlybWF0aW9uJztcbmltcG9ydCB7IHZhbGlkYXRlRmllbGQgfSBmcm9tICcuL0hlbHBlcnMvdmFsaWRhdGlvbic7XG5pbXBvcnQgU3VibWl0IGZyb20gJy4vRm9ybUVsZW1lbnRzL1N1Ym1pdCc7XG5cbmNsYXNzIEdyYXZpdHlGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN1Ym1pdEZhaWxlZDogZmFsc2UsXG4gICAgICBlcnJvck1lc3NhZ2VzOiBmYWxzZSxcbiAgICAgIGZvcm1WYWx1ZXM6IHt9LFxuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgc3VibWl0U3VjY2VzczogZmFsc2UsXG4gICAgICBjb25maXJtYXRpb25NZXNzYWdlOiBmYWxzZSxcbiAgICAgIGlzVmFsaWQ6IGZhbHNlLFxuICAgICAgZm9ybURhdGE6IHt9LFxuICAgICAgdG91Y2hlZDoge30sXG4gICAgICBhY3RpdmVQYWdlOiBmYWxzZSxcbiAgICAgIGNvbmRpdGlvbkZpZWxkczoge30sXG4gICAgICBjb25kaXRpb2FubElkczoge30sXG4gICAgICBpc011bHRpcGFydDogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZm9ybUlELCBiYWNrZW5kVXJsIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgbGV0IGlzTXVsdGlwYXJ0ID0gZmFsc2U7XG4gICAgY29uc3QgZm9ybSA9IGF3YWl0IGF4aW9zXG4gICAgICAuZ2V0KGAke2JhY2tlbmRVcmx9LyR7Zm9ybUlEfWApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKVxuICAgICAgLmNhdGNoKCgpID0+IGZhbHNlKTtcblxuICAgIGlmIChmb3JtICYmIHRoaXMuX2lzTW91bnRlZCkge1xuICAgICAgY29uc3QgZm9ybVZhbHVlcyA9IHt9O1xuICAgICAgY29uc3QgY29uZGl0aW9uRmllbGRzID0gW107XG4gICAgICBjb25zdCBjb25kaXRpb2FubElkcyA9IFtdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIGZvcm0uZmllbGRzKSB7XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICB2YWx1ZSA9IGZpZWxkLmNob2ljZXMuZmlsdGVyKGNob2ljZSA9PiBjaG9pY2UuaXNTZWxlY3RlZCkubWFwKGNob2ljZSA9PiBjaG9pY2UudmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICBjb25zdCBwcmVzZWxlY3RlZCA9IGZpZWxkLmNob2ljZXMuZmluZChjaG9pY2UgPT4gY2hvaWNlLmlzU2VsZWN0ZWQpO1xuICAgICAgICAgIHZhbHVlID0gcHJlc2VsZWN0ZWQgPyBwcmVzZWxlY3RlZC52YWx1ZSA6ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gZmllbGQuZGVmYXVsdFZhbHVlO1xuICAgICAgICAgIGlmIChmaWVsZC50eXBlID09PSAnZmlsZXVwbG9hZCcpIHtcbiAgICAgICAgICAgIGlzTXVsdGlwYXJ0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBncmFiIGFsbCBjb25kaXRpb25hbCBsb2dpYyBmaWVsZHNcbiAgICAgICAgaWYgKGZpZWxkLmNvbmRpdGlvbmFsTG9naWMpIHtcbiAgICAgICAgICBjb25zdCB0bXBGaWVsZCA9IHtcbiAgICAgICAgICAgIGlkOiBmaWVsZC5pZCxcbiAgICAgICAgICAgIGNvbmRpdGlvbmFsTG9naWM6IGZpZWxkLmNvbmRpdGlvbmFsTG9naWMsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBjb25zdCBpZHMgPSBmaWVsZC5jb25kaXRpb25hbExvZ2ljLnJ1bGVzLm1hcChpdGVtID0+IGl0ZW0uZmllbGRJZCk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQoaWRzW2ldKTtcbiAgICAgICAgICAgIGlmIChjb25kaXRpb2FubElkcy5pbmRleE9mKGlkKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgY29uZGl0aW9hbmxJZHMucHVzaChpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbmRpdGlvbkZpZWxkcy5wdXNoKHRtcEZpZWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1WYWx1ZXNbZmllbGQuaWRdID0ge1xuICAgICAgICAgIHZhbGlkOiB2YWxpZGF0ZUZpZWxkKHZhbHVlLCBmaWVsZC50eXBlLCBmaWVsZC5pc1JlcXVpcmVkKSxcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICBsYWJlbDogZmllbGQubGFiZWwsXG4gICAgICAgICAgcGFnZU51bWJlcjogZmllbGQucGFnZU51bWJlcixcbiAgICAgICAgICBjc3NDbGFzczogZmllbGQuY3NzQ2xhc3MsXG4gICAgICAgICAgaXNSZXF1aXJlZDogZmllbGQuaXNSZXF1aXJlZCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8vIGNoZWNrIGNvbmRpdGlvbiBsb2dpY1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25kaXRpb25GaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9ybVZhbHVlc1tjb25kaXRpb25GaWVsZHNbaV0uaWRdLmhpZGVGaWVsZCA9IHRoaXMuY2hlY2tDb25kaXRpb25hbExvZ2ljKFxuICAgICAgICAgIGNvbmRpdGlvbkZpZWxkc1tpXS5jb25kaXRpb25hbExvZ2ljLFxuICAgICAgICAgIGZvcm1WYWx1ZXMsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb3JtRGF0YTogZm9ybSxcbiAgICAgICAgZm9ybVZhbHVlcyxcbiAgICAgICAgYWN0aXZlUGFnZTogZm9ybS5wYWdpbmF0aW9uID8gMSA6IGZhbHNlLFxuICAgICAgICBjb25kaXRpb25GaWVsZHMsXG4gICAgICAgIGNvbmRpdGlvYW5sSWRzLFxuICAgICAgICBpc011bHRpcGFydCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuICB9XG5cbiAgc2V0VG91Y2hlZCA9IChpZCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdG91Y2hlZDogeyAuLi50aGlzLnN0YXRlLnRvdWNoZWQsIFtpZF06IHRydWUgfSxcbiAgICB9KTtcbiAgfTtcblxuICB1cGRhdGVGb3JtSGFuZGxlciA9IChldmVudCwgZmllbGQpID0+IHtcbiAgICBjb25zdCB7IGZvcm1WYWx1ZXMsIGNvbmRpdGlvYW5sSWRzLCBjb25kaXRpb25GaWVsZHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IHsgaWQsIHR5cGUsIGlzUmVxdWlyZWQgfSA9IGZpZWxkO1xuICAgIC8vIFNldCBuZXcgdmFsdWVcbiAgICBsZXQgdmFsdWU7XG4gICAgaWYgKGZpZWxkLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IFsuLi5mb3JtVmFsdWVzW2ZpZWxkLmlkXS52YWx1ZV07XG4gICAgICBjb25zdCBpbmRleCA9IHZhbHVlcy5pbmRleE9mKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICB2YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlcy5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICB9XG4gICAgICB2YWx1ZSA9IHZhbHVlcztcbiAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT0gJ2RhdGUnKSB7XG4gICAgICBjb25zdCB7IHN1YklkLCBkYXRlTGFiZWwgfSA9IGZpZWxkO1xuICAgICAgY29uc3QgdmFsdWVzID0gWy4uLmZvcm1WYWx1ZXNbZmllbGQuaWRdLnZhbHVlXTtcbiAgICAgIHZhbHVlc1tzdWJJZF0gPSB7XG4gICAgICAgIHZhbDogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICBsYWJlbDogZGF0ZUxhYmVsLFxuICAgICAgfTtcbiAgICAgIHZhbHVlID0gdmFsdWVzO1xuICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PSAnY29uc2VudCcpIHtcbiAgICAgIHZhbHVlID0gZXZlbnQudGFyZ2V0ID8gZXZlbnQudGFyZ2V0LmNoZWNrZWQgOiAnbnVsbCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gZXZlbnQudGFyZ2V0ID8gZXZlbnQudGFyZ2V0LnZhbHVlIDogJ251bGwnO1xuICAgIH1cbiAgICAvLyBpZiBmaWVsZCBpcyBJQkFOXG4gICAgaWYgKHR5cGUgPT09ICd0ZXh0JyAmJiBmaWVsZC5jc3NDbGFzcy5pbmRleE9mKCdpYmFuJykgPiAtMSkge1xuICAgICAgdHlwZSA9ICdpYmFuJztcbiAgICB9XG4gICAgLy8gVmFsaWRhdGUgZmllbGRcbiAgICBjb25zdCB2YWxpZCA9IHZhbGlkYXRlRmllbGQodmFsdWUsIHR5cGUsIGlzUmVxdWlyZWQsIGZpZWxkKTtcblxuICAgIC8vIGlmIGZpZWxkIElEIGlzIHNvbWV3aGVyZSBpbiBjb25kaXRpb25hbCBmaWVsZHNcbiAgICAvLyByZWNhbGN1bGF0ZSBhbGwgY29uZGl0aW9uc1xuICAgIGlmIChjb25kaXRpb2FubElkcy5pbmRleE9mKGlkKSAhPT0gLTEpIHtcbiAgICAgIGZvcm1WYWx1ZXNbaWRdLnZhbHVlID0gdmFsdWU7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmRpdGlvbkZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB7IGlkIH0gPSBjb25kaXRpb25GaWVsZHNbaV07XG4gICAgICAgIGNvbnN0IGhpZGUgPSB0aGlzLmNoZWNrQ29uZGl0aW9uYWxMb2dpYyhjb25kaXRpb25GaWVsZHNbaV0uY29uZGl0aW9uYWxMb2dpYywgZm9ybVZhbHVlcyk7XG4gICAgICAgIGZvcm1WYWx1ZXNbaWRdLmhpZGVGaWVsZCA9IGhpZGU7XG4gICAgICAgIGlmIChoaWRlKSB7XG4gICAgICAgICAgaWYgKGZvcm1WYWx1ZXNbaWRdLmlzUmVxdWlyZWQgJiYgaGlkZSkge1xuICAgICAgICAgICAgZm9ybVZhbHVlc1tpZF0udmFsdWUgPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9ybVZhbHVlc1tpZF0udmFsaWQgPSAhIWZvcm1WYWx1ZXNbaWRdLmlzUmVxdWlyZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBmb3JtVmFsdWVzOiB7XG4gICAgICAgICAgLi4uZm9ybVZhbHVlcyxcbiAgICAgICAgICBbaWRdOiB7XG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgdmFsaWQsXG4gICAgICAgICAgICBsYWJlbDogZmllbGQubGFiZWwsXG4gICAgICAgICAgICBwYWdlTnVtYmVyOiBmaWVsZC5wYWdlTnVtYmVyLFxuICAgICAgICAgICAgY3NzQ2xhc3M6IGZpZWxkLmNzc0NsYXNzLFxuICAgICAgICAgICAgaXNSZXF1aXJlZDogZmllbGQuaXNSZXF1aXJlZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgLy8gcGFzcyBzdGF0ZSB0byBwYXJlbnQgY29tcG9uZW50XG4gICAgICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKHRoaXMuc3RhdGUuZm9ybVZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgKTtcbiAgfTtcblxuICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdWJtaXR0aW5nOiB0cnVlLFxuICAgICAgc3VibWl0U3VjY2VzczogZmFsc2UsXG4gICAgICBzdWJtaXRGYWlsZWQ6IGZhbHNlLFxuICAgICAgY29uZmlybWF0aW9uTWVzc2FnZTogZmFsc2UsXG4gICAgICBlcnJvck1lc3NhZ2VzOiBmYWxzZSxcbiAgICB9KTtcbiAgICBjb25zdCB7IGZvcm1JRCwgYmFja2VuZFVybCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBnZlN1Ym1pc3Npb25VcmwgPSBiYWNrZW5kVXJsLnN1YnN0cmluZygwLCBiYWNrZW5kVXJsLmluZGV4T2YoJy93cC1qc29uJykpO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcbiAgICBheGlvc1xuICAgICAgLnBvc3QoYCR7Z2ZTdWJtaXNzaW9uVXJsfS93cC1qc29uL2dmL3YyL2Zvcm1zLyR7Zm9ybUlEfS9zdWJtaXNzaW9uc2AsIGRhdGEpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5pc192YWxpZCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICAgICAgICBzdWJtaXRTdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlybWF0aW9uTWVzc2FnZTogcmVzcG9uc2UuZGF0YS5jb25maXJtYXRpb25fbWVzc2FnZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc3VibWl0RmFpbGVkOiB0cnVlLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlczogJ1NvbWV0aGluZyB3ZW50IHdyb25nJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICAgICAgc3VibWl0RmFpbGVkOiB0cnVlLFxuICAgICAgICAgIGVycm9yTWVzc2FnZXM6IGVycm9yLnJlc3BvbnNlLmRhdGEudmFsaWRhdGlvbl9tZXNzYWdlcyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBuZXh0U3RlcCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGFjdGl2ZVBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVQYWdlOiBhY3RpdmVQYWdlICsgMSxcbiAgICB9KTtcbiAgfTtcblxuICBwcmV2U3RlcCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgYWN0aXZlUGFnZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZVBhZ2U6IGFjdGl2ZVBhZ2UgLSAxLFxuICAgIH0pO1xuICB9O1xuXG4gIGNoZWNrQ29uZGl0aW9uYWxMb2dpYyA9IChjb25kaXRpb24sIGZpZWxkcyA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgeyBydWxlcywgYWN0aW9uVHlwZSB9ID0gY29uZGl0aW9uO1xuICAgIGlmICghcnVsZXMpIHJldHVybiB0cnVlO1xuXG4gICAgY29uc3QgZm9ybVZhbHVlcyA9IGZpZWxkcyB8fCB0aGlzLnN0YXRlLmZvcm1WYWx1ZXM7XG5cbiAgICAvLyBzaG93IG9ubHkgaWYgaXMgc2VsZWN0ZWQgXCJBbGwgZmllbGRzXCIgKGl0IHNob3VsZCBiZSB0d2Vha2VkIGluIGZ1dHVyZSlcbiAgICAvLyB3b3JrcyBvbmx5IFwic2hvdy9oaWRlIHdoZW4gZmllbGQgaXMgZXF1YWwgdG9cIlxuICAgIGxldCBoaWRlRmllbGQgPSBhY3Rpb25UeXBlICE9PSAnaGlkZSc7XG4gICAgY29uc3QgaGlkZUJhc2VkT25SdWxlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHsgZmllbGRJZCwgdmFsdWUgfSA9IHJ1bGVzW2ldO1xuICAgICAgY29uc3QgY29uZGl0aW9uRmllbGRWYWx1ZSA9IGZvcm1WYWx1ZXNbZmllbGRJZF0udmFsdWU7XG5cbiAgICAgIGNvbnN0IHN0cmluZ1ZhbHVlID0gQXJyYXkuaXNBcnJheShjb25kaXRpb25GaWVsZFZhbHVlKVxuICAgICAgICA/IGNvbmRpdGlvbkZpZWxkVmFsdWUuam9pbignJylcbiAgICAgICAgOiBjb25kaXRpb25GaWVsZFZhbHVlO1xuICAgICAgaWYgKHN0cmluZ1ZhbHVlICYmIHZhbHVlID09PSBzdHJpbmdWYWx1ZSkge1xuICAgICAgICBoaWRlQmFzZWRPblJ1bGVzW2ldID0gYWN0aW9uVHlwZSA9PT0gJ2hpZGUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGlkZUJhc2VkT25SdWxlc1tpXSA9IGFjdGlvblR5cGUgIT09ICdoaWRlJztcbiAgICAgIH1cbiAgICB9XG4gICAgaGlkZUZpZWxkID0gaGlkZUJhc2VkT25SdWxlcy5ldmVyeShpID0+IGkgPT09IHRydWUpO1xuICAgIC8vIGZvcm1WYWx1ZXNbaWRdLmhpZGVGaWVsZCA9IGhpZGVGaWVsZDtcbiAgICAvLyB0aGlzLnNldFN0YXRlKHsgZm9ybVZhbHVlcyB9KTtcbiAgICByZXR1cm4gaGlkZUZpZWxkO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBmb3JtRGF0YSxcbiAgICAgIGZvcm1WYWx1ZXMsXG4gICAgICBzdWJtaXRGYWlsZWQsXG4gICAgICBzdWJtaXRTdWNjZXNzLFxuICAgICAgdG91Y2hlZCxcbiAgICAgIHN1Ym1pdHRpbmcsXG4gICAgICBhY3RpdmVQYWdlLFxuICAgICAgaXNNdWx0aXBhcnQsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgdGl0bGUsIHN1Ym1pdEljb24sIHNhdmVTdGF0ZVRvSHRtbEZpZWxkLCBzdHlsZWRDb21wb25lbnRzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgQnV0dG9uLCBMb2FkaW5nLCBHRldyYXBwZXIgPSAnZGl2JyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcbiAgICBjb25zdCB7IGNzc0NsYXNzIH0gPSBmb3JtRGF0YTtcblxuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBPYmplY3Qua2V5cyhmb3JtVmFsdWVzKS5zb21lKFxuICAgICAgeCA9PiAhZm9ybVZhbHVlc1t4XS5oaWRlRmllbGQgJiYgZm9ybVZhbHVlc1t4XS52YWxpZCxcbiAgICApO1xuICAgIGNvbnN0IGlzTmV4dERpc2FibGVkID0gYWN0aXZlUGFnZVxuICAgICAgPyBPYmplY3Qua2V5cyhmb3JtVmFsdWVzKS5zb21lKFxuICAgICAgICB4ID0+IGZvcm1WYWx1ZXNbeF0ucGFnZU51bWJlciA9PT0gYWN0aXZlUGFnZVxuICAgICAgICAgICAgJiYgIWZvcm1WYWx1ZXNbeF0uaGlkZUZpZWxkXG4gICAgICAgICAgICAmJiBmb3JtVmFsdWVzW3hdLnZhbGlkLFxuICAgICAgKVxuICAgICAgOiBmYWxzZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8R0ZXcmFwcGVyXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0td3JhcHBlclwiXG4gICAgICAgIGNzcz17eyBwb3NpdGlvbjogJ3JlYWx0aXZlJyB9fVxuICAgICAgICBpZD17YGdyYXZpdHlfZm9ybV8ke3RoaXMucHJvcHMuZm9ybUlEfWB9XG4gICAgICA+XG4gICAgICAgIHtmb3JtRGF0YS50aXRsZSA/IG51bGwgOiBMb2FkaW5nICYmIDxMb2FkaW5nIGlzTG9hZGluZyAvPn1cblxuICAgICAgICB7c3VibWl0RmFpbGVkICYmICFzdWJtaXRTdWNjZXNzICYmIChcbiAgICAgICAgICA8Rm9ybUVycm9yXG4gICAgICAgICAgICBmaWVsZHM9e2Zvcm1WYWx1ZXN9XG4gICAgICAgICAgICBlcnJvcnM9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlc31cbiAgICAgICAgICAgIGVycm9yTWVzc2FnZT1cIlRoZXJlIHdhcyBhIHByb2JsZW0gd2l0aCB5b3VyIHN1Ym1pc3Npb25cIlxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAge3N1Ym1pdFN1Y2Nlc3MgJiYgdGhpcy5zdGF0ZS5jb25maXJtYXRpb25NZXNzYWdlICYmIChcbiAgICAgICAgICA8Rm9ybUNvbmZpcm1hdGlvbiBjb25maXJtYXRpb249e3RoaXMuc3RhdGUuY29uZmlybWF0aW9uTWVzc2FnZX0gLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7IXN1Ym1pdFN1Y2Nlc3MgJiYgZm9ybURhdGEuZmllbGRzID8gKFxuICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICBvblN1Ym1pdD17ZSA9PiB0aGlzLm9uU3VibWl0KGUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3NDbGFzc31cbiAgICAgICAgICAgIGVuY1R5cGU9e2lzTXVsdGlwYXJ0ID8gJ211bHRpcGFydC9mb3JtLWRhdGEnIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgbm9WYWxpZGF0ZVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsoZm9ybURhdGEudGl0bGUgfHwgZm9ybURhdGEuZGVzY3JpcHRpb24pICYmIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7Zm9ybURhdGEudGl0bGUgJiYgdGl0bGUgPyA8aDMgY2xhc3NOYW1lPVwiZm9ybS10aXRsZVwiPntmb3JtRGF0YS50aXRsZX08L2gzPiA6IG51bGx9XG4gICAgICAgICAgICAgICAge2Zvcm1EYXRhLmRlc2NyaXB0aW9uID8gKFxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9ybS1kZXNjcmlwdGlvblwiPntmb3JtRGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPFJlbmRlckZpZWxkc1xuICAgICAgICAgICAgICAgIHN0eWxlZENvbXBvbmVudHM9e3N0eWxlZENvbXBvbmVudHN9XG4gICAgICAgICAgICAgICAgZmllbGRzPXtmb3JtRGF0YS5maWVsZHN9XG4gICAgICAgICAgICAgICAgZm9ybVZhbHVlcz17Zm9ybVZhbHVlc31cbiAgICAgICAgICAgICAgICBzdWJtaXRGYWlsZWQ9e3N1Ym1pdEZhaWxlZH1cbiAgICAgICAgICAgICAgICBzdWJtaXRTdWNjZXNzPXtzdWJtaXRTdWNjZXNzfVxuICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm09e3RoaXMudXBkYXRlRm9ybUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgdG91Y2hlZD17dG91Y2hlZH1cbiAgICAgICAgICAgICAgICBzZXRUb3VjaGVkPXt0aGlzLnNldFRvdWNoZWR9XG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17Zm9ybURhdGEucGFnaW5hdGlvbn1cbiAgICAgICAgICAgICAgICBhY3RpdmVQYWdlPXthY3RpdmVQYWdlfVxuICAgICAgICAgICAgICAgIHByZXZTdGVwPXt0aGlzLnByZXZTdGVwfVxuICAgICAgICAgICAgICAgIG5leHRTdGVwPXt0aGlzLm5leHRTdGVwfVxuICAgICAgICAgICAgICAgIGlzTmV4dERpc2FibGVkPXtpc05leHREaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBjaGVja0NvbmRpdGlvbmFsTG9naWM9e3RoaXMuY2hlY2tDb25kaXRpb25hbExvZ2ljfVxuICAgICAgICAgICAgICAgIHNhdmVTdGF0ZVRvSHRtbEZpZWxkPXtzYXZlU3RhdGVUb0h0bWxGaWVsZH1cbiAgICAgICAgICAgICAgICBlbmFibGVIb25leXBvdD17Zm9ybURhdGEuZW5hYmxlSG9uZXlwb3R9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHsoIWZvcm1EYXRhLnBhZ2luYXRpb25cbiAgICAgICAgICAgICAgICB8fCAoZm9ybURhdGEucGFnaW5hdGlvbiAmJiBmb3JtRGF0YS5wYWdpbmF0aW9uLnBhZ2VzLmxlbmd0aCA9PT0gYWN0aXZlUGFnZSkpICYmIChcbiAgICAgICAgICAgICAgICA8U3VibWl0XG4gICAgICAgICAgICAgICAgICBCdXR0b249e0J1dHRvbn1cbiAgICAgICAgICAgICAgICAgIExvYWRpbmc9e0xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICBmb3JtRGF0YT17Zm9ybURhdGF9XG4gICAgICAgICAgICAgICAgICBzdWJtaXRJY29uPXtzdWJtaXRJY29ufVxuICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17aXNEaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgIHN1Ym1pdHRpbmc9e3N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgICBwcmV2U3RlcD17dGhpcy5wcmV2U3RlcH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApIDogKFxuICAgICAgICAgICcnXG4gICAgICAgICl9XG4gICAgICA8L0dGV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG5cbkdyYXZpdHlGb3JtLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6IHRydWUsXG4gIHN1Ym1pdEljb246IGZhbHNlLFxuICBzYXZlU3RhdGVUb0h0bWxGaWVsZDogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcmF2aXR5Rm9ybTtcbiJdfQ==
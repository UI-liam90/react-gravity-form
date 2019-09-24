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
        var _this$props2, formID, backendUrl, populatedFields, isMultipart, form, formValues, conditionFields, conditioanlIds, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step, i;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$props2 = this.props, formID = _this$props2.formID, backendUrl = _this$props2.backendUrl, populatedFields = _this$props2.populatedFields;
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
                  _context2.next = 32;
                  break;
                }

                formValues = {};
                conditionFields = [];
                conditioanlIds = []; // eslint-disable-next-line no-restricted-syntax

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 13;

                _loop = function _loop() {
                  var field = _step.value;
                  var value = void 0;
                  var hasPopulation = field.inputName && populatedFields && populatedFields[field.inputName];

                  if (field.type === 'checkbox') {
                    value = field.choices.filter(function (choice) {
                      return hasPopulation ? choice.value === populatedFields[field.inputName] : choice.isSelected;
                    }).map(function (choice) {
                      return choice.value;
                    });
                  } else if (field.type === 'radio') {
                    if (hasPopulation) {
                      value = populatedFields[field.inputName];
                    } else {
                      var preselected = field.choices.find(function (choice) {
                        return choice.isSelected;
                      });
                      value = preselected ? preselected.value : '';
                    }
                  } else if (field.type === 'select') {
                    var selectedOption = field.choices.filter(function (choice) {
                      return hasPopulation ? choice.value === populatedFields[field.inputName] : choice.isSelected;
                    }).map(function (item) {
                      return {
                        value: item.value,
                        label: item.text
                      };
                    });
                    value = selectedOption && selectedOption.length > 0 ? selectedOption[0] : '';
                  } else {
                    value = hasPopulation ? populatedFields[field.inputName] : field.defaultValue;

                    if (field.type === 'fileupload') {
                      isMultipart = true;
                    }
                  } // grab all conditional logic fields


                  if (field.conditionalLogic) {
                    var tmpField = {
                      id: field.id,
                      conditionalLogic: field.conditionalLogic
                    };
                    var ids = field.conditionalLogic.rules.map(function (item) {
                      return item.fieldId;
                    });

                    for (var _i = 0; _i < ids.length; _i++) {
                      var id = parseInt(ids[_i]);

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
                };

                for (_iterator = form.fields[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  _loop();
                } // check condition logic


                _context2.next = 22;
                break;

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](13);
                _didIteratorError = true;
                _iteratorError = _context2.t0;

              case 22:
                _context2.prev = 22;
                _context2.prev = 23;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 25:
                _context2.prev = 25;

                if (!_didIteratorError) {
                  _context2.next = 28;
                  break;
                }

                throw _iteratorError;

              case 28:
                return _context2.finish(25);

              case 29:
                return _context2.finish(22);

              case 30:
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

              case 32:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[13, 18, 22, 30], [23,, 25, 29]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHcmF2aXR5Rm9ybSIsInByb3BzIiwiaWQiLCJzZXRTdGF0ZSIsInRvdWNoZWQiLCJzdGF0ZSIsImV2ZW50IiwiZmllbGQiLCJmb3JtVmFsdWVzIiwiY29uZGl0aW9hbmxJZHMiLCJjb25kaXRpb25GaWVsZHMiLCJ0eXBlIiwiaXNSZXF1aXJlZCIsInZhbHVlIiwidmFsdWVzIiwiaW5kZXgiLCJpbmRleE9mIiwidGFyZ2V0Iiwic3BsaWNlIiwicHVzaCIsInN1YklkIiwiZGF0ZUxhYmVsIiwidmFsIiwibGFiZWwiLCJjaGVja2VkIiwiY3NzQ2xhc3MiLCJ2YWxpZCIsImkiLCJsZW5ndGgiLCJoaWRlIiwiY2hlY2tDb25kaXRpb25hbExvZ2ljIiwiY29uZGl0aW9uYWxMb2dpYyIsImhpZGVGaWVsZCIsInBhZ2VOdW1iZXIiLCJvbkNoYW5nZSIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0dGluZyIsInN1Ym1pdFN1Y2Nlc3MiLCJzdWJtaXRGYWlsZWQiLCJjb25maXJtYXRpb25NZXNzYWdlIiwiZXJyb3JNZXNzYWdlcyIsImZvcm1JRCIsImJhY2tlbmRVcmwiLCJnZlN1Ym1pc3Npb25VcmwiLCJzdWJzdHJpbmciLCJkYXRhIiwiRm9ybURhdGEiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJpc192YWxpZCIsImNvbmZpcm1hdGlvbl9tZXNzYWdlIiwiZXJyb3IiLCJ2YWxpZGF0aW9uX21lc3NhZ2VzIiwiYWN0aXZlUGFnZSIsImUiLCJjb25kaXRpb24iLCJmaWVsZHMiLCJydWxlcyIsImFjdGlvblR5cGUiLCJoaWRlQmFzZWRPblJ1bGVzIiwiZmllbGRJZCIsImNvbmRpdGlvbkZpZWxkVmFsdWUiLCJzdHJpbmdWYWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsImpvaW4iLCJldmVyeSIsImxvYWRpbmciLCJpc1ZhbGlkIiwiZm9ybURhdGEiLCJpc011bHRpcGFydCIsInBvcHVsYXRlZEZpZWxkcyIsIl9pc01vdW50ZWQiLCJnZXQiLCJmb3JtIiwiaGFzUG9wdWxhdGlvbiIsImlucHV0TmFtZSIsImNob2ljZXMiLCJmaWx0ZXIiLCJjaG9pY2UiLCJpc1NlbGVjdGVkIiwibWFwIiwicHJlc2VsZWN0ZWQiLCJmaW5kIiwic2VsZWN0ZWRPcHRpb24iLCJpdGVtIiwidGV4dCIsImRlZmF1bHRWYWx1ZSIsInRtcEZpZWxkIiwiaWRzIiwicGFyc2VJbnQiLCJwYWdpbmF0aW9uIiwidGl0bGUiLCJzdWJtaXRJY29uIiwic2F2ZVN0YXRlVG9IdG1sRmllbGQiLCJzdHlsZWRDb21wb25lbnRzIiwiQnV0dG9uIiwiTG9hZGluZyIsIkdGV3JhcHBlciIsImlzRGlzYWJsZWQiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsIngiLCJpc05leHREaXNhYmxlZCIsInBvc2l0aW9uIiwib25TdWJtaXQiLCJ1bmRlZmluZWQiLCJkZXNjcmlwdGlvbiIsInVwZGF0ZUZvcm1IYW5kbGVyIiwic2V0VG91Y2hlZCIsInByZXZTdGVwIiwibmV4dFN0ZXAiLCJlbmFibGVIb25leXBvdCIsInBhZ2VzIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxXOzs7OztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLHFGQUFNQSxLQUFOOztBQURpQixpRUE0R04sVUFBQ0MsRUFBRCxFQUFRO0FBQ25CLFlBQUtDLFFBQUwsQ0FBYztBQUNaQyxRQUFBQSxPQUFPLG9CQUFPLE1BQUtDLEtBQUwsQ0FBV0QsT0FBbEIsc0JBQTRCRixFQUE1QixFQUFpQyxJQUFqQztBQURLLE9BQWQ7QUFHRCxLQWhIa0I7O0FBQUEsd0VBa0hDLFVBQUNJLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUFBLHdCQUNvQixNQUFLRixLQUR6QjtBQUFBLFVB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LEVBQUUsS0FBS0MsUUFaakI7QUFhRSxRQUFBLGNBQWMsRUFBRVIsY0FibEI7QUFjRSxRQUFBLHFCQUFxQixFQUFFLEtBQUs1RSxxQkFkOUI7QUFlRSxRQUFBLG9CQUFvQixFQUFFa0Usb0JBZnhCO0FBZ0JFLFFBQUEsY0FBYyxFQUFFekIsUUFBUSxDQUFDNEM7QUFoQjNCLFFBREYsRUFtQkcsQ0FBQyxDQUFDNUMsUUFBUSxDQUFDc0IsVUFBVixJQUNJdEIsUUFBUSxDQUFDc0IsVUFBVCxJQUF1QnRCLFFBQVEsQ0FBQ3NCLFVBQVQsQ0FBb0J1QixLQUFwQixDQUEwQnhGLE1BQTFCLEtBQXFDMkIsVUFEakUsS0FFQyxnQ0FBQyxrQkFBRDtBQUNFLFFBQUEsTUFBTSxFQUFFMkMsTUFEVjtBQUVFLFFBQUEsT0FBTyxFQUFFQyxPQUZYO0FBR0UsUUFBQSxRQUFRLEVBQUU1QixRQUhaO0FBSUUsUUFBQSxVQUFVLEVBQUV3QixVQUpkO0FBS0UsUUFBQSxVQUFVLEVBQUVNLFVBTGQ7QUFNRSxRQUFBLFVBQVUsRUFBRWpFLFVBTmQ7QUFPRSxRQUFBLFFBQVEsRUFBRSxLQUFLNkU7QUFQakIsUUFyQkosQ0FmRixDQURELEdBa0RDLEVBckVKLENBREY7QUEwRUQ7Ozs7RUF2WHVCSSxnQjs7QUEwWDFCckgsV0FBVyxDQUFDc0gsWUFBWixHQUEyQjtBQUN6QnhCLEVBQUFBLEtBQUssRUFBRSxJQURrQjtBQUV6QkMsRUFBQUEsVUFBVSxFQUFFLEtBRmE7QUFHekJDLEVBQUFBLG9CQUFvQixFQUFFO0FBSEcsQ0FBM0I7ZUFNZWhHLFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSZW5kZXJGaWVsZHMgZnJvbSAnLi9Gb3JtRWxlbWVudHMvUmVuZGVyRmllbGRzJztcbmltcG9ydCBGb3JtRXJyb3IgZnJvbSAnLi9Gb3JtRWxlbWVudHMvRm9ybUVycm9yJztcbmltcG9ydCBGb3JtQ29uZmlybWF0aW9uIGZyb20gJy4vRm9ybUVsZW1lbnRzL0Zvcm1Db25maXJtYXRpb24nO1xuaW1wb3J0IHsgdmFsaWRhdGVGaWVsZCB9IGZyb20gJy4vSGVscGVycy92YWxpZGF0aW9uJztcbmltcG9ydCBTdWJtaXQgZnJvbSAnLi9Gb3JtRWxlbWVudHMvU3VibWl0JztcblxuY2xhc3MgR3Jhdml0eUZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3VibWl0RmFpbGVkOiBmYWxzZSxcbiAgICAgIGVycm9yTWVzc2FnZXM6IGZhbHNlLFxuICAgICAgZm9ybVZhbHVlczoge30sXG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICBzdWJtaXRTdWNjZXNzOiBmYWxzZSxcbiAgICAgIGNvbmZpcm1hdGlvbk1lc3NhZ2U6IGZhbHNlLFxuICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgICBmb3JtRGF0YToge30sXG4gICAgICB0b3VjaGVkOiB7fSxcbiAgICAgIGFjdGl2ZVBhZ2U6IGZhbHNlLFxuICAgICAgY29uZGl0aW9uRmllbGRzOiB7fSxcbiAgICAgIGNvbmRpdGlvYW5sSWRzOiB7fSxcbiAgICAgIGlzTXVsdGlwYXJ0OiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBmb3JtSUQsIGJhY2tlbmRVcmwsIHBvcHVsYXRlZEZpZWxkcyB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgIGxldCBpc011bHRpcGFydCA9IGZhbHNlO1xuICAgIGNvbnN0IGZvcm0gPSBhd2FpdCBheGlvc1xuICAgICAgLmdldChgJHtiYWNrZW5kVXJsfS8ke2Zvcm1JRH1gKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAgIC5jYXRjaCgoKSA9PiBmYWxzZSk7XG5cbiAgICBpZiAoZm9ybSAmJiB0aGlzLl9pc01vdW50ZWQpIHtcbiAgICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSB7fTtcbiAgICAgIGNvbnN0IGNvbmRpdGlvbkZpZWxkcyA9IFtdO1xuICAgICAgY29uc3QgY29uZGl0aW9hbmxJZHMgPSBbXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBmb3JtLmZpZWxkcykge1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGNvbnN0IGhhc1BvcHVsYXRpb24gPSBmaWVsZC5pbnB1dE5hbWUgJiYgcG9wdWxhdGVkRmllbGRzICYmIHBvcHVsYXRlZEZpZWxkc1tmaWVsZC5pbnB1dE5hbWVdO1xuICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgIHZhbHVlID0gZmllbGQuY2hvaWNlc1xuICAgICAgICAgICAgLmZpbHRlcihjaG9pY2UgPT4gKGhhc1BvcHVsYXRpb24gPyBjaG9pY2UudmFsdWUgPT09IHBvcHVsYXRlZEZpZWxkc1tmaWVsZC5pbnB1dE5hbWVdIDogY2hvaWNlLmlzU2VsZWN0ZWQpKVxuICAgICAgICAgICAgLm1hcChjaG9pY2UgPT4gY2hvaWNlLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgaWYgKGhhc1BvcHVsYXRpb24pIHtcbiAgICAgICAgICAgIHZhbHVlID0gcG9wdWxhdGVkRmllbGRzW2ZpZWxkLmlucHV0TmFtZV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHByZXNlbGVjdGVkID0gZmllbGQuY2hvaWNlcy5maW5kKGNob2ljZSA9PiBjaG9pY2UuaXNTZWxlY3RlZCk7XG4gICAgICAgICAgICB2YWx1ZSA9IHByZXNlbGVjdGVkID8gcHJlc2VsZWN0ZWQudmFsdWUgOiAnJztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IGZpZWxkLmNob2ljZXNcbiAgICAgICAgICAgIC5maWx0ZXIoY2hvaWNlID0+IChoYXNQb3B1bGF0aW9uID8gY2hvaWNlLnZhbHVlID09PSBwb3B1bGF0ZWRGaWVsZHNbZmllbGQuaW5wdXROYW1lXSA6IGNob2ljZS5pc1NlbGVjdGVkKSlcbiAgICAgICAgICAgIC5tYXAoaXRlbSA9PiAoeyB2YWx1ZTogaXRlbS52YWx1ZSwgbGFiZWw6IGl0ZW0udGV4dCB9KSk7XG4gICAgICAgICAgdmFsdWUgPSBzZWxlY3RlZE9wdGlvbiAmJiBzZWxlY3RlZE9wdGlvbi5sZW5ndGggPiAwID8gc2VsZWN0ZWRPcHRpb25bMF0gOiAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IGhhc1BvcHVsYXRpb24gPyBwb3B1bGF0ZWRGaWVsZHNbZmllbGQuaW5wdXROYW1lXSA6IGZpZWxkLmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2ZpbGV1cGxvYWQnKSB7XG4gICAgICAgICAgICBpc011bHRpcGFydCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ3JhYiBhbGwgY29uZGl0aW9uYWwgbG9naWMgZmllbGRzXG4gICAgICAgIGlmIChmaWVsZC5jb25kaXRpb25hbExvZ2ljKSB7XG4gICAgICAgICAgY29uc3QgdG1wRmllbGQgPSB7XG4gICAgICAgICAgICBpZDogZmllbGQuaWQsXG4gICAgICAgICAgICBjb25kaXRpb25hbExvZ2ljOiBmaWVsZC5jb25kaXRpb25hbExvZ2ljLFxuICAgICAgICAgIH07XG4gICAgICAgICAgY29uc3QgaWRzID0gZmllbGQuY29uZGl0aW9uYWxMb2dpYy5ydWxlcy5tYXAoaXRlbSA9PiBpdGVtLmZpZWxkSWQpO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHBhcnNlSW50KGlkc1tpXSk7XG4gICAgICAgICAgICBpZiAoY29uZGl0aW9hbmxJZHMuaW5kZXhPZihpZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIGNvbmRpdGlvYW5sSWRzLnB1c2goaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25kaXRpb25GaWVsZHMucHVzaCh0bXBGaWVsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtVmFsdWVzW2ZpZWxkLmlkXSA9IHtcbiAgICAgICAgICB2YWxpZDogdmFsaWRhdGVGaWVsZCh2YWx1ZSwgZmllbGQudHlwZSwgZmllbGQuaXNSZXF1aXJlZCksXG4gICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgbGFiZWw6IGZpZWxkLmxhYmVsLFxuICAgICAgICAgIHBhZ2VOdW1iZXI6IGZpZWxkLnBhZ2VOdW1iZXIsXG4gICAgICAgICAgY3NzQ2xhc3M6IGZpZWxkLmNzc0NsYXNzLFxuICAgICAgICAgIGlzUmVxdWlyZWQ6IGZpZWxkLmlzUmVxdWlyZWQsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICAvLyBjaGVjayBjb25kaXRpb24gbG9naWNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZGl0aW9uRmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvcm1WYWx1ZXNbY29uZGl0aW9uRmllbGRzW2ldLmlkXS5oaWRlRmllbGQgPSB0aGlzLmNoZWNrQ29uZGl0aW9uYWxMb2dpYyhcbiAgICAgICAgICBjb25kaXRpb25GaWVsZHNbaV0uY29uZGl0aW9uYWxMb2dpYyxcbiAgICAgICAgICBmb3JtVmFsdWVzLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9ybURhdGE6IGZvcm0sXG4gICAgICAgIGZvcm1WYWx1ZXMsXG4gICAgICAgIGFjdGl2ZVBhZ2U6IGZvcm0ucGFnaW5hdGlvbiA/IDEgOiBmYWxzZSxcbiAgICAgICAgY29uZGl0aW9uRmllbGRzLFxuICAgICAgICBjb25kaXRpb2FubElkcyxcbiAgICAgICAgaXNNdWx0aXBhcnQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHNldFRvdWNoZWQgPSAoaWQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRvdWNoZWQ6IHsgLi4udGhpcy5zdGF0ZS50b3VjaGVkLCBbaWRdOiB0cnVlIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgdXBkYXRlRm9ybUhhbmRsZXIgPSAoZXZlbnQsIGZpZWxkKSA9PiB7XG4gICAgY29uc3QgeyBmb3JtVmFsdWVzLCBjb25kaXRpb2FubElkcywgY29uZGl0aW9uRmllbGRzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCB7IGlkLCB0eXBlLCBpc1JlcXVpcmVkIH0gPSBmaWVsZDtcbiAgICAvLyBTZXQgbmV3IHZhbHVlXG4gICAgbGV0IHZhbHVlO1xuICAgIGlmIChmaWVsZC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBbLi4uZm9ybVZhbHVlc1tmaWVsZC5pZF0udmFsdWVdO1xuICAgICAgY29uc3QgaW5kZXggPSB2YWx1ZXMuaW5kZXhPZihldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgdmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZXMucHVzaChldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgfVxuICAgICAgdmFsdWUgPSB2YWx1ZXM7XG4gICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09ICdkYXRlJykge1xuICAgICAgY29uc3QgeyBzdWJJZCwgZGF0ZUxhYmVsIH0gPSBmaWVsZDtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IFsuLi5mb3JtVmFsdWVzW2ZpZWxkLmlkXS52YWx1ZV07XG4gICAgICB2YWx1ZXNbc3ViSWRdID0ge1xuICAgICAgICB2YWw6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgICAgbGFiZWw6IGRhdGVMYWJlbCxcbiAgICAgIH07XG4gICAgICB2YWx1ZSA9IHZhbHVlcztcbiAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT0gJ2NvbnNlbnQnKSB7XG4gICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldCA/IGV2ZW50LnRhcmdldC5jaGVja2VkIDogJ251bGwnO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldCA/IGV2ZW50LnRhcmdldC52YWx1ZSA6ICdudWxsJztcbiAgICB9XG4gICAgLy8gaWYgZmllbGQgaXMgSUJBTlxuICAgIGlmICh0eXBlID09PSAndGV4dCcgJiYgZmllbGQuY3NzQ2xhc3MuaW5kZXhPZignaWJhbicpID4gLTEpIHtcbiAgICAgIHR5cGUgPSAnaWJhbic7XG4gICAgfVxuICAgIC8vIFZhbGlkYXRlIGZpZWxkXG4gICAgY29uc3QgdmFsaWQgPSB2YWxpZGF0ZUZpZWxkKHZhbHVlLCB0eXBlLCBpc1JlcXVpcmVkLCBmaWVsZCk7XG5cbiAgICAvLyBpZiBmaWVsZCBJRCBpcyBzb21ld2hlcmUgaW4gY29uZGl0aW9uYWwgZmllbGRzXG4gICAgLy8gcmVjYWxjdWxhdGUgYWxsIGNvbmRpdGlvbnNcbiAgICBpZiAoY29uZGl0aW9hbmxJZHMuaW5kZXhPZihpZCkgIT09IC0xKSB7XG4gICAgICBmb3JtVmFsdWVzW2lkXS52YWx1ZSA9IHZhbHVlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25kaXRpb25GaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gY29uZGl0aW9uRmllbGRzW2ldO1xuICAgICAgICBjb25zdCBoaWRlID0gdGhpcy5jaGVja0NvbmRpdGlvbmFsTG9naWMoY29uZGl0aW9uRmllbGRzW2ldLmNvbmRpdGlvbmFsTG9naWMsIGZvcm1WYWx1ZXMpO1xuICAgICAgICBmb3JtVmFsdWVzW2lkXS5oaWRlRmllbGQgPSBoaWRlO1xuICAgICAgICBpZiAoaGlkZSkge1xuICAgICAgICAgIGlmIChmb3JtVmFsdWVzW2lkXS5pc1JlcXVpcmVkICYmIGhpZGUpIHtcbiAgICAgICAgICAgIGZvcm1WYWx1ZXNbaWRdLnZhbHVlID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvcm1WYWx1ZXNbaWRdLnZhbGlkID0gISFmb3JtVmFsdWVzW2lkXS5pc1JlcXVpcmVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgZm9ybVZhbHVlczoge1xuICAgICAgICAgIC4uLmZvcm1WYWx1ZXMsXG4gICAgICAgICAgW2lkXToge1xuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIHZhbGlkLFxuICAgICAgICAgICAgbGFiZWw6IGZpZWxkLmxhYmVsLFxuICAgICAgICAgICAgcGFnZU51bWJlcjogZmllbGQucGFnZU51bWJlcixcbiAgICAgICAgICAgIGNzc0NsYXNzOiBmaWVsZC5jc3NDbGFzcyxcbiAgICAgICAgICAgIGlzUmVxdWlyZWQ6IGZpZWxkLmlzUmVxdWlyZWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIC8vIHBhc3Mgc3RhdGUgdG8gcGFyZW50IGNvbXBvbmVudFxuICAgICAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZSh0aGlzLnN0YXRlLmZvcm1WYWx1ZXMpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICk7XG4gIH07XG5cbiAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3VibWl0dGluZzogdHJ1ZSxcbiAgICAgIHN1Ym1pdFN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgc3VibWl0RmFpbGVkOiBmYWxzZSxcbiAgICAgIGNvbmZpcm1hdGlvbk1lc3NhZ2U6IGZhbHNlLFxuICAgICAgZXJyb3JNZXNzYWdlczogZmFsc2UsXG4gICAgfSk7XG4gICAgY29uc3QgeyBmb3JtSUQsIGJhY2tlbmRVcmwgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZ2ZTdWJtaXNzaW9uVXJsID0gYmFja2VuZFVybC5zdWJzdHJpbmcoMCwgYmFja2VuZFVybC5pbmRleE9mKCcvd3AtanNvbicpKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KGAke2dmU3VibWlzc2lvblVybH0vd3AtanNvbi9nZi92Mi9mb3Jtcy8ke2Zvcm1JRH0vc3VibWlzc2lvbnNgLCBkYXRhKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEuaXNfdmFsaWQpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc3VibWl0U3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvbk1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEuY29uZmlybWF0aW9uX21lc3NhZ2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Ym1pdEZhaWxlZDogdHJ1ZSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZXM6ICdTb21ldGhpbmcgd2VudCB3cm9uZycsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgICAgIHN1Ym1pdEZhaWxlZDogdHJ1ZSxcbiAgICAgICAgICBlcnJvck1lc3NhZ2VzOiBlcnJvci5yZXNwb25zZS5kYXRhLnZhbGlkYXRpb25fbWVzc2FnZXMsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgbmV4dFN0ZXAgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBhY3RpdmVQYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlUGFnZTogYWN0aXZlUGFnZSArIDEsXG4gICAgfSk7XG4gIH07XG5cbiAgcHJldlN0ZXAgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IGFjdGl2ZVBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVQYWdlOiBhY3RpdmVQYWdlIC0gMSxcbiAgICB9KTtcbiAgfTtcblxuICBjaGVja0NvbmRpdGlvbmFsTG9naWMgPSAoY29uZGl0aW9uLCBmaWVsZHMgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IHsgcnVsZXMsIGFjdGlvblR5cGUgfSA9IGNvbmRpdGlvbjtcbiAgICBpZiAoIXJ1bGVzKSByZXR1cm4gdHJ1ZTtcblxuICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSBmaWVsZHMgfHwgdGhpcy5zdGF0ZS5mb3JtVmFsdWVzO1xuXG4gICAgLy8gc2hvdyBvbmx5IGlmIGlzIHNlbGVjdGVkIFwiQWxsIGZpZWxkc1wiIChpdCBzaG91bGQgYmUgdHdlYWtlZCBpbiBmdXR1cmUpXG4gICAgLy8gd29ya3Mgb25seSBcInNob3cvaGlkZSB3aGVuIGZpZWxkIGlzIGVxdWFsIHRvXCJcbiAgICBsZXQgaGlkZUZpZWxkID0gYWN0aW9uVHlwZSAhPT0gJ2hpZGUnO1xuICAgIGNvbnN0IGhpZGVCYXNlZE9uUnVsZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB7IGZpZWxkSWQsIHZhbHVlIH0gPSBydWxlc1tpXTtcbiAgICAgIGNvbnN0IGNvbmRpdGlvbkZpZWxkVmFsdWUgPSBmb3JtVmFsdWVzW2ZpZWxkSWRdLnZhbHVlO1xuXG4gICAgICBjb25zdCBzdHJpbmdWYWx1ZSA9IEFycmF5LmlzQXJyYXkoY29uZGl0aW9uRmllbGRWYWx1ZSlcbiAgICAgICAgPyBjb25kaXRpb25GaWVsZFZhbHVlLmpvaW4oJycpXG4gICAgICAgIDogY29uZGl0aW9uRmllbGRWYWx1ZTtcbiAgICAgIGlmIChzdHJpbmdWYWx1ZSAmJiB2YWx1ZSA9PT0gc3RyaW5nVmFsdWUpIHtcbiAgICAgICAgaGlkZUJhc2VkT25SdWxlc1tpXSA9IGFjdGlvblR5cGUgPT09ICdoaWRlJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhpZGVCYXNlZE9uUnVsZXNbaV0gPSBhY3Rpb25UeXBlICE9PSAnaGlkZSc7XG4gICAgICB9XG4gICAgfVxuICAgIGhpZGVGaWVsZCA9IGhpZGVCYXNlZE9uUnVsZXMuZXZlcnkoaSA9PiBpID09PSB0cnVlKTtcbiAgICAvLyBmb3JtVmFsdWVzW2lkXS5oaWRlRmllbGQgPSBoaWRlRmllbGQ7XG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGZvcm1WYWx1ZXMgfSk7XG4gICAgcmV0dXJuIGhpZGVGaWVsZDtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZm9ybURhdGEsXG4gICAgICBmb3JtVmFsdWVzLFxuICAgICAgc3VibWl0RmFpbGVkLFxuICAgICAgc3VibWl0U3VjY2VzcyxcbiAgICAgIHRvdWNoZWQsXG4gICAgICBzdWJtaXR0aW5nLFxuICAgICAgYWN0aXZlUGFnZSxcbiAgICAgIGlzTXVsdGlwYXJ0LFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlLCBzdWJtaXRJY29uLCBzYXZlU3RhdGVUb0h0bWxGaWVsZCwgc3R5bGVkQ29tcG9uZW50cyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IEJ1dHRvbiwgTG9hZGluZywgR0ZXcmFwcGVyID0gJ2RpdicgfSA9IHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG4gICAgY29uc3QgeyBjc3NDbGFzcyB9ID0gZm9ybURhdGE7XG5cbiAgICBjb25zdCBpc0Rpc2FibGVkID0gT2JqZWN0LmtleXMoZm9ybVZhbHVlcykuc29tZShcbiAgICAgIHggPT4gIWZvcm1WYWx1ZXNbeF0uaGlkZUZpZWxkICYmIGZvcm1WYWx1ZXNbeF0udmFsaWQsXG4gICAgKTtcbiAgICBjb25zdCBpc05leHREaXNhYmxlZCA9IGFjdGl2ZVBhZ2VcbiAgICAgID8gT2JqZWN0LmtleXMoZm9ybVZhbHVlcykuc29tZShcbiAgICAgICAgeCA9PiBmb3JtVmFsdWVzW3hdLnBhZ2VOdW1iZXIgPT09IGFjdGl2ZVBhZ2VcbiAgICAgICAgICAgICYmICFmb3JtVmFsdWVzW3hdLmhpZGVGaWVsZFxuICAgICAgICAgICAgJiYgZm9ybVZhbHVlc1t4XS52YWxpZCxcbiAgICAgIClcbiAgICAgIDogZmFsc2U7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEdGV3JhcHBlclxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXdyYXBwZXJcIlxuICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdyZWFsdGl2ZScgfX1cbiAgICAgICAgaWQ9e2BncmF2aXR5X2Zvcm1fJHt0aGlzLnByb3BzLmZvcm1JRH1gfVxuICAgICAgPlxuICAgICAgICB7Zm9ybURhdGEudGl0bGUgPyBudWxsIDogTG9hZGluZyAmJiA8TG9hZGluZyBpc0xvYWRpbmcgLz59XG5cbiAgICAgICAge3N1Ym1pdEZhaWxlZCAmJiAhc3VibWl0U3VjY2VzcyAmJiAoXG4gICAgICAgICAgPEZvcm1FcnJvclxuICAgICAgICAgICAgZmllbGRzPXtmb3JtVmFsdWVzfVxuICAgICAgICAgICAgZXJyb3JzPXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZXN9XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U9XCJUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggeW91ciBzdWJtaXNzaW9uXCJcbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHtzdWJtaXRTdWNjZXNzICYmIHRoaXMuc3RhdGUuY29uZmlybWF0aW9uTWVzc2FnZSAmJiAoXG4gICAgICAgICAgPEZvcm1Db25maXJtYXRpb24gY29uZmlybWF0aW9uPXt0aGlzLnN0YXRlLmNvbmZpcm1hdGlvbk1lc3NhZ2V9IC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgeyFzdWJtaXRTdWNjZXNzICYmIGZvcm1EYXRhLmZpZWxkcyA/IChcbiAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgb25TdWJtaXQ9e2UgPT4gdGhpcy5vblN1Ym1pdChlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzQ2xhc3N9XG4gICAgICAgICAgICBlbmNUeXBlPXtpc011bHRpcGFydCA/ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIG5vVmFsaWRhdGVcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7KGZvcm1EYXRhLnRpdGxlIHx8IGZvcm1EYXRhLmRlc2NyaXB0aW9uKSAmJiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2Zvcm1EYXRhLnRpdGxlICYmIHRpdGxlID8gPGgzIGNsYXNzTmFtZT1cImZvcm0tdGl0bGVcIj57Zm9ybURhdGEudGl0bGV9PC9oMz4gOiBudWxsfVxuICAgICAgICAgICAgICAgIHtmb3JtRGF0YS5kZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm0tZGVzY3JpcHRpb25cIj57Zm9ybURhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxSZW5kZXJGaWVsZHNcbiAgICAgICAgICAgICAgICBzdHlsZWRDb21wb25lbnRzPXtzdHlsZWRDb21wb25lbnRzfVxuICAgICAgICAgICAgICAgIGZpZWxkcz17Zm9ybURhdGEuZmllbGRzfVxuICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXM9e2Zvcm1WYWx1ZXN9XG4gICAgICAgICAgICAgICAgc3VibWl0RmFpbGVkPXtzdWJtaXRGYWlsZWR9XG4gICAgICAgICAgICAgICAgc3VibWl0U3VjY2Vzcz17c3VibWl0U3VjY2Vzc31cbiAgICAgICAgICAgICAgICB1cGRhdGVGb3JtPXt0aGlzLnVwZGF0ZUZvcm1IYW5kbGVyfVxuICAgICAgICAgICAgICAgIHRvdWNoZWQ9e3RvdWNoZWR9XG4gICAgICAgICAgICAgICAgc2V0VG91Y2hlZD17dGhpcy5zZXRUb3VjaGVkfVxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e2Zvcm1EYXRhLnBhZ2luYXRpb259XG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZT17YWN0aXZlUGFnZX1cbiAgICAgICAgICAgICAgICBwcmV2U3RlcD17dGhpcy5wcmV2U3RlcH1cbiAgICAgICAgICAgICAgICBuZXh0U3RlcD17dGhpcy5uZXh0U3RlcH1cbiAgICAgICAgICAgICAgICBpc05leHREaXNhYmxlZD17aXNOZXh0RGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgY2hlY2tDb25kaXRpb25hbExvZ2ljPXt0aGlzLmNoZWNrQ29uZGl0aW9uYWxMb2dpY31cbiAgICAgICAgICAgICAgICBzYXZlU3RhdGVUb0h0bWxGaWVsZD17c2F2ZVN0YXRlVG9IdG1sRmllbGR9XG4gICAgICAgICAgICAgICAgZW5hYmxlSG9uZXlwb3Q9e2Zvcm1EYXRhLmVuYWJsZUhvbmV5cG90fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7KCFmb3JtRGF0YS5wYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgfHwgKGZvcm1EYXRhLnBhZ2luYXRpb24gJiYgZm9ybURhdGEucGFnaW5hdGlvbi5wYWdlcy5sZW5ndGggPT09IGFjdGl2ZVBhZ2UpKSAmJiAoXG4gICAgICAgICAgICAgICAgPFN1Ym1pdFxuICAgICAgICAgICAgICAgICAgQnV0dG9uPXtCdXR0b259XG4gICAgICAgICAgICAgICAgICBMb2FkaW5nPXtMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgZm9ybURhdGE9e2Zvcm1EYXRhfVxuICAgICAgICAgICAgICAgICAgc3VibWl0SWNvbj17c3VibWl0SWNvbn1cbiAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e2lzRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICBzdWJtaXR0aW5nPXtzdWJtaXR0aW5nfVxuICAgICAgICAgICAgICAgICAgcHJldlN0ZXA9e3RoaXMucHJldlN0ZXB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAnJ1xuICAgICAgICApfVxuICAgICAgPC9HRldyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuXG5HcmF2aXR5Rm9ybS5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiB0cnVlLFxuICBzdWJtaXRJY29uOiBmYWxzZSxcbiAgc2F2ZVN0YXRlVG9IdG1sRmllbGQ6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgR3Jhdml0eUZvcm07XG4iXX0=
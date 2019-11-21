"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "RenderFields", {
  enumerable: true,
  get: function get() {
    return _RenderFields["default"];
  }
});
Object.defineProperty(exports, "FormError", {
  enumerable: true,
  get: function get() {
    return _FormError["default"];
  }
});
Object.defineProperty(exports, "FormConfirmation", {
  enumerable: true,
  get: function get() {
    return _FormConfirmation["default"];
  }
});
Object.defineProperty(exports, "validateField", {
  enumerable: true,
  get: function get() {
    return _validation.validateField;
  }
});
Object.defineProperty(exports, "Submit", {
  enumerable: true,
  get: function get() {
    return _Submit["default"];
  }
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
      } else if (field.type === 'password') {
        var _subId = field.subId;

        var _values2 = formValues[field.id] && formValues[field.id].value ? _toConsumableArray(formValues[field.id].value) : [];

        _values2[_subId] = {
          val: event.target.value
        };
        value = _values2;
      } else {
        value = event.target ? event.target.value : 'null';
      } // if field is IBAN


      if (type === 'text' && field.cssClass.indexOf('iban') > -1) {
        type = 'iban';
      } // Validate field


      var valid = (0, _validation.validateField)(value, field); // if field ID is somewhere in conditional fields
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

    _defineProperty(_assertThisInitialized(_this), "scrollToConfirmation", function () {
      var rect = _this.wrapperRef ? _this.wrapperRef.getBoundingClientRect() : false;

      if (rect && window) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        window.scrollTo({
          top: scrollTop + rect.top - 100
        });
      }
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

                    _this.scrollToConfirmation();
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

    _defineProperty(_assertThisInitialized(_this), "nextStep", function (e) {
      console.log('next step');
      e.preventDefault();
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
                    valid: (0, _validation.validateField)(value, field),
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
        ref: function ref(el) {
          return _this2.wrapperRef = el;
        },
        className: "form-wrapper",
        css: {
          position: 'relative'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHcmF2aXR5Rm9ybSIsInByb3BzIiwiaWQiLCJzZXRTdGF0ZSIsInRvdWNoZWQiLCJzdGF0ZSIsImV2ZW50IiwiZmllbGQiLCJmb3JtVmFsdWVzIiwiY29uZGl0aW9hbmxJZHMiLCJjb25kaXRpb25GaWVsZHMiLCJ0eXBlIiwiaXNSZXF1aXJlZCIsInZhbHVlIiwidmFsdWVzIiwiaW5kZXgiLCJpbmRleE9mIiwidGFyZ2V0Iiwic3BsaWNlIiwicHVzaCIsInN1YklkIiwiZGF0ZUxhYmVsIiwidmFsIiwibGFiZWwiLCJjaGVja2VkIiwiY3NzQ2xhc3MiLCJ2YWxpZCIsImkiLCJsZW5ndGgiLCJoaWRlIiwiY2hlY2tDb25kaXRpb25hbExvZ2ljIiwiY29uZGl0aW9uYWxMb2dpYyIsImhpZGVGaWVsZCIsInBhZ2VOdW1iZXIiLCJvbkNoYW5nZSIsInJlY3QiLCJ3cmFwcGVyUmVmIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvIiwidG9wIiwicHJldmVudERlZmF1bHQiLCJzdWJtaXR0aW5nIiwic3VibWl0U3VjY2VzcyIsInN1Ym1pdEZhaWxlZCIsImNvbmZpcm1hdGlvbk1lc3NhZ2UiLCJlcnJvck1lc3NhZ2VzIiwiZm9ybUlEIiwiYmFja2VuZFVybCIsImdmU3VibWlzc2lvblVybCIsInN1YnN0cmluZyIsImRhdGEiLCJGb3JtRGF0YSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImlzX3ZhbGlkIiwiY29uZmlybWF0aW9uX21lc3NhZ2UiLCJzY3JvbGxUb0NvbmZpcm1hdGlvbiIsImVycm9yIiwidmFsaWRhdGlvbl9tZXNzYWdlcyIsImUiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlUGFnZSIsImNvbmRpdGlvbiIsImZpZWxkcyIsInJ1bGVzIiwiYWN0aW9uVHlwZSIsImhpZGVCYXNlZE9uUnVsZXMiLCJmaWVsZElkIiwiY29uZGl0aW9uRmllbGRWYWx1ZSIsInN0cmluZ1ZhbHVlIiwiQXJyYXkiLCJpc0FycmF5Iiwiam9pbiIsImV2ZXJ5IiwibG9hZGluZyIsImlzVmFsaWQiLCJmb3JtRGF0YSIsImlzTXVsdGlwYXJ0IiwicG9wdWxhdGVkRmllbGRzIiwiX2lzTW91bnRlZCIsImdldCIsImZvcm0iLCJoYXNQb3B1bGF0aW9uIiwiaW5wdXROYW1lIiwiY2hvaWNlcyIsImZpbHRlciIsImNob2ljZSIsImlzU2VsZWN0ZWQiLCJtYXAiLCJwcmVzZWxlY3RlZCIsImZpbmQiLCJzZWxlY3RlZE9wdGlvbiIsIml0ZW0iLCJ0ZXh0IiwiZGVmYXVsdFZhbHVlIiwidG1wRmllbGQiLCJpZHMiLCJwYXJzZUludCIsInBhZ2luYXRpb24iLCJ0aXRsZSIsInN1Ym1pdEljb24iLCJzYXZlU3RhdGVUb0h0bWxGaWVsZCIsInN0eWxlZENvbXBvbmVudHMiLCJCdXR0b24iLCJMb2FkaW5nIiwiR0ZXcmFwcGVyIiwiaXNEaXNhYmxlZCIsIk9iamVjdCIsImtleXMiLCJzb21lIiwieCIsImlzTmV4dERpc2FibGVkIiwiZWwiLCJwb3NpdGlvbiIsIm9uU3VibWl0IiwidW5kZWZpbmVkIiwiZGVzY3JpcHRpb24iLCJ1cGRhdGVGb3JtSGFuZGxlciIsInNldFRvdWNoZWQiLCJwcmV2U3RlcCIsIm5leHRTdGVwIiwiZW5hYmxlSG9uZXlwb3QiLCJwYWdlcyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsVzs7Ozs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixxRkFBTUEsS0FBTjs7QUFEaUIsaUVBNEdOLFVBQUND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XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFJlbmRlckZpZWxkcyBmcm9tICcuL0Zvcm1FbGVtZW50cy9SZW5kZXJGaWVsZHMnO1xuaW1wb3J0IEZvcm1FcnJvciBmcm9tICcuL0Zvcm1FbGVtZW50cy9Gb3JtRXJyb3InO1xuaW1wb3J0IEZvcm1Db25maXJtYXRpb24gZnJvbSAnLi9Gb3JtRWxlbWVudHMvRm9ybUNvbmZpcm1hdGlvbic7XG5pbXBvcnQgeyB2YWxpZGF0ZUZpZWxkIH0gZnJvbSAnLi9IZWxwZXJzL3ZhbGlkYXRpb24nO1xuaW1wb3J0IFN1Ym1pdCBmcm9tICcuL0Zvcm1FbGVtZW50cy9TdWJtaXQnO1xuXG5jbGFzcyBHcmF2aXR5Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdWJtaXRGYWlsZWQ6IGZhbHNlLFxuICAgICAgZXJyb3JNZXNzYWdlczogZmFsc2UsXG4gICAgICBmb3JtVmFsdWVzOiB7fSxcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgIHN1Ym1pdFN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgY29uZmlybWF0aW9uTWVzc2FnZTogZmFsc2UsXG4gICAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICAgIGZvcm1EYXRhOiB7fSxcbiAgICAgIHRvdWNoZWQ6IHt9LFxuICAgICAgYWN0aXZlUGFnZTogZmFsc2UsXG4gICAgICBjb25kaXRpb25GaWVsZHM6IHt9LFxuICAgICAgY29uZGl0aW9hbmxJZHM6IHt9LFxuICAgICAgaXNNdWx0aXBhcnQ6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGZvcm1JRCwgYmFja2VuZFVybCwgcG9wdWxhdGVkRmllbGRzIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgbGV0IGlzTXVsdGlwYXJ0ID0gZmFsc2U7XG4gICAgY29uc3QgZm9ybSA9IGF3YWl0IGF4aW9zXG4gICAgICAuZ2V0KGAke2JhY2tlbmRVcmx9LyR7Zm9ybUlEfWApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKVxuICAgICAgLmNhdGNoKCgpID0+IGZhbHNlKTtcblxuICAgIGlmIChmb3JtICYmIHRoaXMuX2lzTW91bnRlZCkge1xuICAgICAgY29uc3QgZm9ybVZhbHVlcyA9IHt9O1xuICAgICAgY29uc3QgY29uZGl0aW9uRmllbGRzID0gW107XG4gICAgICBjb25zdCBjb25kaXRpb2FubElkcyA9IFtdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIGZvcm0uZmllbGRzKSB7XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgY29uc3QgaGFzUG9wdWxhdGlvbiA9IGZpZWxkLmlucHV0TmFtZSAmJiBwb3B1bGF0ZWRGaWVsZHMgJiYgcG9wdWxhdGVkRmllbGRzW2ZpZWxkLmlucHV0TmFtZV07XG4gICAgICAgIGlmIChmaWVsZC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgdmFsdWUgPSBmaWVsZC5jaG9pY2VzXG4gICAgICAgICAgICAuZmlsdGVyKGNob2ljZSA9PiAoaGFzUG9wdWxhdGlvbiA/IGNob2ljZS52YWx1ZSA9PT0gcG9wdWxhdGVkRmllbGRzW2ZpZWxkLmlucHV0TmFtZV0gOiBjaG9pY2UuaXNTZWxlY3RlZCkpXG4gICAgICAgICAgICAubWFwKGNob2ljZSA9PiBjaG9pY2UudmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICBpZiAoaGFzUG9wdWxhdGlvbikge1xuICAgICAgICAgICAgdmFsdWUgPSBwb3B1bGF0ZWRGaWVsZHNbZmllbGQuaW5wdXROYW1lXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcHJlc2VsZWN0ZWQgPSBmaWVsZC5jaG9pY2VzLmZpbmQoY2hvaWNlID0+IGNob2ljZS5pc1NlbGVjdGVkKTtcbiAgICAgICAgICAgIHZhbHVlID0gcHJlc2VsZWN0ZWQgPyBwcmVzZWxlY3RlZC52YWx1ZSA6ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gZmllbGQuY2hvaWNlc1xuICAgICAgICAgICAgLmZpbHRlcihjaG9pY2UgPT4gKGhhc1BvcHVsYXRpb24gPyBjaG9pY2UudmFsdWUgPT09IHBvcHVsYXRlZEZpZWxkc1tmaWVsZC5pbnB1dE5hbWVdIDogY2hvaWNlLmlzU2VsZWN0ZWQpKVxuICAgICAgICAgICAgLm1hcChpdGVtID0+ICh7IHZhbHVlOiBpdGVtLnZhbHVlLCBsYWJlbDogaXRlbS50ZXh0IH0pKTtcbiAgICAgICAgICB2YWx1ZSA9IHNlbGVjdGVkT3B0aW9uICYmIHNlbGVjdGVkT3B0aW9uLmxlbmd0aCA+IDAgPyBzZWxlY3RlZE9wdGlvblswXSA6ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gaGFzUG9wdWxhdGlvbiA/IHBvcHVsYXRlZEZpZWxkc1tmaWVsZC5pbnB1dE5hbWVdIDogZmllbGQuZGVmYXVsdFZhbHVlO1xuICAgICAgICAgIGlmIChmaWVsZC50eXBlID09PSAnZmlsZXVwbG9hZCcpIHtcbiAgICAgICAgICAgIGlzTXVsdGlwYXJ0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBncmFiIGFsbCBjb25kaXRpb25hbCBsb2dpYyBmaWVsZHNcbiAgICAgICAgaWYgKGZpZWxkLmNvbmRpdGlvbmFsTG9naWMpIHtcbiAgICAgICAgICBjb25zdCB0bXBGaWVsZCA9IHtcbiAgICAgICAgICAgIGlkOiBmaWVsZC5pZCxcbiAgICAgICAgICAgIGNvbmRpdGlvbmFsTG9naWM6IGZpZWxkLmNvbmRpdGlvbmFsTG9naWMsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBjb25zdCBpZHMgPSBmaWVsZC5jb25kaXRpb25hbExvZ2ljLnJ1bGVzLm1hcChpdGVtID0+IGl0ZW0uZmllbGRJZCk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQoaWRzW2ldKTtcbiAgICAgICAgICAgIGlmIChjb25kaXRpb2FubElkcy5pbmRleE9mKGlkKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgY29uZGl0aW9hbmxJZHMucHVzaChpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbmRpdGlvbkZpZWxkcy5wdXNoKHRtcEZpZWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1WYWx1ZXNbZmllbGQuaWRdID0ge1xuICAgICAgICAgIHZhbGlkOiB2YWxpZGF0ZUZpZWxkKHZhbHVlLCBmaWVsZCksXG4gICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgbGFiZWw6IGZpZWxkLmxhYmVsLFxuICAgICAgICAgIHBhZ2VOdW1iZXI6IGZpZWxkLnBhZ2VOdW1iZXIsXG4gICAgICAgICAgY3NzQ2xhc3M6IGZpZWxkLmNzc0NsYXNzLFxuICAgICAgICAgIGlzUmVxdWlyZWQ6IGZpZWxkLmlzUmVxdWlyZWQsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICAvLyBjaGVjayBjb25kaXRpb24gbG9naWNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZGl0aW9uRmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvcm1WYWx1ZXNbY29uZGl0aW9uRmllbGRzW2ldLmlkXS5oaWRlRmllbGQgPSB0aGlzLmNoZWNrQ29uZGl0aW9uYWxMb2dpYyhcbiAgICAgICAgICBjb25kaXRpb25GaWVsZHNbaV0uY29uZGl0aW9uYWxMb2dpYyxcbiAgICAgICAgICBmb3JtVmFsdWVzLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9ybURhdGE6IGZvcm0sXG4gICAgICAgIGZvcm1WYWx1ZXMsXG4gICAgICAgIGFjdGl2ZVBhZ2U6IGZvcm0ucGFnaW5hdGlvbiA/IDEgOiBmYWxzZSxcbiAgICAgICAgY29uZGl0aW9uRmllbGRzLFxuICAgICAgICBjb25kaXRpb2FubElkcyxcbiAgICAgICAgaXNNdWx0aXBhcnQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHNldFRvdWNoZWQgPSAoaWQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRvdWNoZWQ6IHsgLi4udGhpcy5zdGF0ZS50b3VjaGVkLCBbaWRdOiB0cnVlIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgdXBkYXRlRm9ybUhhbmRsZXIgPSAoZXZlbnQsIGZpZWxkKSA9PiB7XG4gICAgY29uc3QgeyBmb3JtVmFsdWVzLCBjb25kaXRpb2FubElkcywgY29uZGl0aW9uRmllbGRzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCB7IGlkLCB0eXBlLCBpc1JlcXVpcmVkIH0gPSBmaWVsZDtcbiAgICAvLyBTZXQgbmV3IHZhbHVlXG4gICAgbGV0IHZhbHVlO1xuICAgIGlmIChmaWVsZC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBbLi4uZm9ybVZhbHVlc1tmaWVsZC5pZF0udmFsdWVdO1xuICAgICAgY29uc3QgaW5kZXggPSB2YWx1ZXMuaW5kZXhPZihldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgdmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZXMucHVzaChldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgfVxuICAgICAgdmFsdWUgPSB2YWx1ZXM7XG4gICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09ICdkYXRlJykge1xuICAgICAgY29uc3QgeyBzdWJJZCwgZGF0ZUxhYmVsIH0gPSBmaWVsZDtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IFsuLi5mb3JtVmFsdWVzW2ZpZWxkLmlkXS52YWx1ZV07XG4gICAgICB2YWx1ZXNbc3ViSWRdID0ge1xuICAgICAgICB2YWw6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgICAgbGFiZWw6IGRhdGVMYWJlbCxcbiAgICAgIH07XG4gICAgICB2YWx1ZSA9IHZhbHVlcztcbiAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT0gJ2NvbnNlbnQnKSB7XG4gICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldCA/IGV2ZW50LnRhcmdldC5jaGVja2VkIDogJ251bGwnO1xuICAgIH1lbHNlIGlmIChmaWVsZC50eXBlID09PSAncGFzc3dvcmQnKSB7XG4gICAgICBjb25zdCB7IHN1YklkIH0gPSBmaWVsZDtcbiAgICBjb25zdCB2YWx1ZXMgPVxuICAgICAgICBmb3JtVmFsdWVzW2ZpZWxkLmlkXSAmJiBmb3JtVmFsdWVzW2ZpZWxkLmlkXS52YWx1ZSA/IFsuLi5mb3JtVmFsdWVzW2ZpZWxkLmlkXS52YWx1ZV0gOiBbXTtcbiAgICAgIHZhbHVlc1tzdWJJZF0gPSB7XG4gICAgICAgIHZhbDogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgfTtcbiAgICAgIHZhbHVlID0gdmFsdWVzO1xuICAgIH1lbHNlIHtcbiAgICAgIHZhbHVlID0gZXZlbnQudGFyZ2V0ID8gZXZlbnQudGFyZ2V0LnZhbHVlIDogJ251bGwnO1xuICAgIH1cbiAgICAvLyBpZiBmaWVsZCBpcyBJQkFOXG4gICAgaWYgKHR5cGUgPT09ICd0ZXh0JyAmJiBmaWVsZC5jc3NDbGFzcy5pbmRleE9mKCdpYmFuJykgPiAtMSkge1xuICAgICAgdHlwZSA9ICdpYmFuJztcbiAgICB9XG4gICBcbiAgICAvLyBWYWxpZGF0ZSBmaWVsZFxuICAgIGNvbnN0IHZhbGlkID0gdmFsaWRhdGVGaWVsZCh2YWx1ZSwgZmllbGQpO1xuXG4gICAgLy8gaWYgZmllbGQgSUQgaXMgc29tZXdoZXJlIGluIGNvbmRpdGlvbmFsIGZpZWxkc1xuICAgIC8vIHJlY2FsY3VsYXRlIGFsbCBjb25kaXRpb25zXG4gICAgaWYgKGNvbmRpdGlvYW5sSWRzLmluZGV4T2YoaWQpICE9PSAtMSkge1xuICAgICAgZm9ybVZhbHVlc1tpZF0udmFsdWUgPSB2YWx1ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZGl0aW9uRmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IGNvbmRpdGlvbkZpZWxkc1tpXTtcbiAgICAgICAgY29uc3QgaGlkZSA9IHRoaXMuY2hlY2tDb25kaXRpb25hbExvZ2ljKGNvbmRpdGlvbkZpZWxkc1tpXS5jb25kaXRpb25hbExvZ2ljLCBmb3JtVmFsdWVzKTtcbiAgICAgICAgZm9ybVZhbHVlc1tpZF0uaGlkZUZpZWxkID0gaGlkZTtcbiAgICAgICAgaWYgKGhpZGUpIHtcbiAgICAgICAgICBpZiAoZm9ybVZhbHVlc1tpZF0uaXNSZXF1aXJlZCAmJiBoaWRlKSB7XG4gICAgICAgICAgICBmb3JtVmFsdWVzW2lkXS52YWx1ZSA9ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtVmFsdWVzW2lkXS52YWxpZCA9ICEhZm9ybVZhbHVlc1tpZF0uaXNSZXF1aXJlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIGZvcm1WYWx1ZXM6IHtcbiAgICAgICAgICAuLi5mb3JtVmFsdWVzLFxuICAgICAgICAgIFtpZF06IHtcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICB2YWxpZCxcbiAgICAgICAgICAgIGxhYmVsOiBmaWVsZC5sYWJlbCxcbiAgICAgICAgICAgIHBhZ2VOdW1iZXI6IGZpZWxkLnBhZ2VOdW1iZXIsXG4gICAgICAgICAgICBjc3NDbGFzczogZmllbGQuY3NzQ2xhc3MsXG4gICAgICAgICAgICBpc1JlcXVpcmVkOiBmaWVsZC5pc1JlcXVpcmVkLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICAvLyBwYXNzIHN0YXRlIHRvIHBhcmVudCBjb21wb25lbnRcbiAgICAgICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UodGhpcy5zdGF0ZS5mb3JtVmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICApO1xuICB9O1xuXG4gIHNjcm9sbFRvQ29uZmlybWF0aW9uID0gKCkgPT4geyBcbiAgICBjb25zdCByZWN0ID0gdGhpcy53cmFwcGVyUmVmID8gdGhpcy53cmFwcGVyUmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogZmFsc2U7XG4gICAgaWYgKHJlY3QgJiYgd2luZG93KSB7XG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogc2Nyb2xsVG9wICsgcmVjdC50b3AgLSAxMDAsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdWJtaXR0aW5nOiB0cnVlLFxuICAgICAgc3VibWl0U3VjY2VzczogZmFsc2UsXG4gICAgICBzdWJtaXRGYWlsZWQ6IGZhbHNlLFxuICAgICAgY29uZmlybWF0aW9uTWVzc2FnZTogZmFsc2UsXG4gICAgICBlcnJvck1lc3NhZ2VzOiBmYWxzZSxcbiAgICB9KTtcbiAgICBjb25zdCB7IGZvcm1JRCwgYmFja2VuZFVybCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBnZlN1Ym1pc3Npb25VcmwgPSBiYWNrZW5kVXJsLnN1YnN0cmluZygwLCBiYWNrZW5kVXJsLmluZGV4T2YoJy93cC1qc29uJykpO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcbiAgICBheGlvc1xuICAgICAgLnBvc3QoYCR7Z2ZTdWJtaXNzaW9uVXJsfS93cC1qc29uL2dmL3YyL2Zvcm1zLyR7Zm9ybUlEfS9zdWJtaXNzaW9uc2AsIGRhdGEpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5pc192YWxpZCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICAgICAgICBzdWJtaXRTdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlybWF0aW9uTWVzc2FnZTogcmVzcG9uc2UuZGF0YS5jb25maXJtYXRpb25fbWVzc2FnZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvQ29uZmlybWF0aW9uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Ym1pdEZhaWxlZDogdHJ1ZSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZXM6ICdTb21ldGhpbmcgd2VudCB3cm9uZycsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgICAgIHN1Ym1pdEZhaWxlZDogdHJ1ZSxcbiAgICAgICAgICBlcnJvck1lc3NhZ2VzOiBlcnJvci5yZXNwb25zZS5kYXRhLnZhbGlkYXRpb25fbWVzc2FnZXMsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgbmV4dFN0ZXAgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCduZXh0IHN0ZXAnKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBhY3RpdmVQYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlUGFnZTogYWN0aXZlUGFnZSArIDEsXG4gICAgfSk7XG4gIH07XG5cbiAgcHJldlN0ZXAgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IGFjdGl2ZVBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVQYWdlOiBhY3RpdmVQYWdlIC0gMSxcbiAgICB9KTtcbiAgfTtcblxuICBjaGVja0NvbmRpdGlvbmFsTG9naWMgPSAoY29uZGl0aW9uLCBmaWVsZHMgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IHsgcnVsZXMsIGFjdGlvblR5cGUgfSA9IGNvbmRpdGlvbjtcbiAgICBpZiAoIXJ1bGVzKSByZXR1cm4gdHJ1ZTtcblxuICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSBmaWVsZHMgfHwgdGhpcy5zdGF0ZS5mb3JtVmFsdWVzO1xuXG4gICAgLy8gc2hvdyBvbmx5IGlmIGlzIHNlbGVjdGVkIFwiQWxsIGZpZWxkc1wiIChpdCBzaG91bGQgYmUgdHdlYWtlZCBpbiBmdXR1cmUpXG4gICAgLy8gd29ya3Mgb25seSBcInNob3cvaGlkZSB3aGVuIGZpZWxkIGlzIGVxdWFsIHRvXCJcbiAgICBsZXQgaGlkZUZpZWxkID0gYWN0aW9uVHlwZSAhPT0gJ2hpZGUnO1xuICAgIGNvbnN0IGhpZGVCYXNlZE9uUnVsZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB7IGZpZWxkSWQsIHZhbHVlIH0gPSBydWxlc1tpXTtcbiAgICAgIGNvbnN0IGNvbmRpdGlvbkZpZWxkVmFsdWUgPSBmb3JtVmFsdWVzW2ZpZWxkSWRdLnZhbHVlO1xuXG4gICAgICBjb25zdCBzdHJpbmdWYWx1ZSA9IEFycmF5LmlzQXJyYXkoY29uZGl0aW9uRmllbGRWYWx1ZSlcbiAgICAgICAgPyBjb25kaXRpb25GaWVsZFZhbHVlLmpvaW4oJycpXG4gICAgICAgIDogY29uZGl0aW9uRmllbGRWYWx1ZTtcbiAgICAgIGlmIChzdHJpbmdWYWx1ZSAmJiB2YWx1ZSA9PT0gc3RyaW5nVmFsdWUpIHtcbiAgICAgICAgaGlkZUJhc2VkT25SdWxlc1tpXSA9IGFjdGlvblR5cGUgPT09ICdoaWRlJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhpZGVCYXNlZE9uUnVsZXNbaV0gPSBhY3Rpb25UeXBlICE9PSAnaGlkZSc7XG4gICAgICB9XG4gICAgfVxuICAgIGhpZGVGaWVsZCA9IGhpZGVCYXNlZE9uUnVsZXMuZXZlcnkoaSA9PiBpID09PSB0cnVlKTtcbiAgICAvLyBmb3JtVmFsdWVzW2lkXS5oaWRlRmllbGQgPSBoaWRlRmllbGQ7XG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGZvcm1WYWx1ZXMgfSk7XG4gICAgcmV0dXJuIGhpZGVGaWVsZDtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZm9ybURhdGEsXG4gICAgICBmb3JtVmFsdWVzLFxuICAgICAgc3VibWl0RmFpbGVkLFxuICAgICAgc3VibWl0U3VjY2VzcyxcbiAgICAgIHRvdWNoZWQsXG4gICAgICBzdWJtaXR0aW5nLFxuICAgICAgYWN0aXZlUGFnZSxcbiAgICAgIGlzTXVsdGlwYXJ0LFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlLCBzdWJtaXRJY29uLCBzYXZlU3RhdGVUb0h0bWxGaWVsZCwgc3R5bGVkQ29tcG9uZW50cyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IEJ1dHRvbiwgTG9hZGluZywgR0ZXcmFwcGVyID0gJ2RpdicgfSA9IHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG5cbiAgICBjb25zdCB7IGNzc0NsYXNzIH0gPSBmb3JtRGF0YTtcblxuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBPYmplY3Qua2V5cyhmb3JtVmFsdWVzKS5zb21lKFxuICAgICAgeCA9PiAhZm9ybVZhbHVlc1t4XS5oaWRlRmllbGQgJiYgZm9ybVZhbHVlc1t4XS52YWxpZCxcbiAgICApO1xuICAgIGNvbnN0IGlzTmV4dERpc2FibGVkID0gYWN0aXZlUGFnZVxuICAgICAgPyBPYmplY3Qua2V5cyhmb3JtVmFsdWVzKS5zb21lKFxuICAgICAgICB4ID0+IGZvcm1WYWx1ZXNbeF0ucGFnZU51bWJlciA9PT0gYWN0aXZlUGFnZVxuICAgICAgICAgICYmICFmb3JtVmFsdWVzW3hdLmhpZGVGaWVsZFxuICAgICAgICAgICYmIGZvcm1WYWx1ZXNbeF0udmFsaWQsXG4gICAgICApXG4gICAgICA6IGZhbHNlO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8R0ZXcmFwcGVyXG4gICAgICAgIHJlZj17KGVsKSA9PiAodGhpcy53cmFwcGVyUmVmID0gZWwpfVxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXdyYXBwZXJcIlxuICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX1cbiAgICAgICAgaWQ9e2BncmF2aXR5X2Zvcm1fJHt0aGlzLnByb3BzLmZvcm1JRH1gfVxuICAgICAgPlxuICAgICAgICB7Zm9ybURhdGEudGl0bGUgPyBudWxsIDogTG9hZGluZyAmJiA8TG9hZGluZyBpc0xvYWRpbmcgLz59XG5cbiAgICAgICAge3N1Ym1pdEZhaWxlZCAmJiAhc3VibWl0U3VjY2VzcyAmJiAoXG4gICAgICAgICAgPEZvcm1FcnJvclxuICAgICAgICAgICAgZmllbGRzPXtmb3JtVmFsdWVzfVxuICAgICAgICAgICAgZXJyb3JzPXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZXN9XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U9XCJUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggeW91ciBzdWJtaXNzaW9uXCJcbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHtzdWJtaXRTdWNjZXNzICYmIHRoaXMuc3RhdGUuY29uZmlybWF0aW9uTWVzc2FnZSAmJiAoXG4gICAgICAgICAgPEZvcm1Db25maXJtYXRpb24gY29uZmlybWF0aW9uPXt0aGlzLnN0YXRlLmNvbmZpcm1hdGlvbk1lc3NhZ2V9IC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgeyFzdWJtaXRTdWNjZXNzICYmIGZvcm1EYXRhLmZpZWxkcyA/IChcbiAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgb25TdWJtaXQ9e2UgPT4gdGhpcy5vblN1Ym1pdChlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzQ2xhc3N9XG4gICAgICAgICAgICBlbmNUeXBlPXtpc011bHRpcGFydCA/ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIG5vVmFsaWRhdGVcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7KGZvcm1EYXRhLnRpdGxlIHx8IGZvcm1EYXRhLmRlc2NyaXB0aW9uKSAmJiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2Zvcm1EYXRhLnRpdGxlICYmIHRpdGxlID8gPGgzIGNsYXNzTmFtZT1cImZvcm0tdGl0bGVcIj57Zm9ybURhdGEudGl0bGV9PC9oMz4gOiBudWxsfVxuICAgICAgICAgICAgICAgIHtmb3JtRGF0YS5kZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm0tZGVzY3JpcHRpb25cIj57Zm9ybURhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxSZW5kZXJGaWVsZHNcbiAgICAgICAgICAgICAgICBzdHlsZWRDb21wb25lbnRzPXtzdHlsZWRDb21wb25lbnRzfVxuICAgICAgICAgICAgICAgIGZpZWxkcz17Zm9ybURhdGEuZmllbGRzfVxuICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXM9e2Zvcm1WYWx1ZXN9XG4gICAgICAgICAgICAgICAgc3VibWl0RmFpbGVkPXtzdWJtaXRGYWlsZWR9XG4gICAgICAgICAgICAgICAgc3VibWl0U3VjY2Vzcz17c3VibWl0U3VjY2Vzc31cbiAgICAgICAgICAgICAgICB1cGRhdGVGb3JtPXt0aGlzLnVwZGF0ZUZvcm1IYW5kbGVyfVxuICAgICAgICAgICAgICAgIHRvdWNoZWQ9e3RvdWNoZWR9XG4gICAgICAgICAgICAgICAgc2V0VG91Y2hlZD17dGhpcy5zZXRUb3VjaGVkfVxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e2Zvcm1EYXRhLnBhZ2luYXRpb259XG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZT17YWN0aXZlUGFnZX1cbiAgICAgICAgICAgICAgICBwcmV2U3RlcD17dGhpcy5wcmV2U3RlcH1cbiAgICAgICAgICAgICAgICBuZXh0U3RlcD17dGhpcy5uZXh0U3RlcH1cbiAgICAgICAgICAgICAgICBpc05leHREaXNhYmxlZD17aXNOZXh0RGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgY2hlY2tDb25kaXRpb25hbExvZ2ljPXt0aGlzLmNoZWNrQ29uZGl0aW9uYWxMb2dpY31cbiAgICAgICAgICAgICAgICBzYXZlU3RhdGVUb0h0bWxGaWVsZD17c2F2ZVN0YXRlVG9IdG1sRmllbGR9XG4gICAgICAgICAgICAgICAgZW5hYmxlSG9uZXlwb3Q9e2Zvcm1EYXRhLmVuYWJsZUhvbmV5cG90fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7KCFmb3JtRGF0YS5wYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgfHwgKGZvcm1EYXRhLnBhZ2luYXRpb24gJiYgZm9ybURhdGEucGFnaW5hdGlvbi5wYWdlcy5sZW5ndGggPT09IGFjdGl2ZVBhZ2UpKSAmJiAoXG4gICAgICAgICAgICAgICAgPFN1Ym1pdFxuICAgICAgICAgICAgICAgICAgQnV0dG9uPXtCdXR0b259XG4gICAgICAgICAgICAgICAgICBMb2FkaW5nPXtMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgZm9ybURhdGE9e2Zvcm1EYXRhfVxuICAgICAgICAgICAgICAgICAgc3VibWl0SWNvbj17c3VibWl0SWNvbn1cbiAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e2lzRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICBzdWJtaXR0aW5nPXtzdWJtaXR0aW5nfVxuICAgICAgICAgICAgICAgICAgcHJldlN0ZXA9e3RoaXMucHJldlN0ZXB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAnJ1xuICAgICAgICApfVxuICAgICAgPC9HRldyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuXG5HcmF2aXR5Rm9ybS5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiB0cnVlLFxuICBzdWJtaXRJY29uOiBmYWxzZSxcbiAgc2F2ZVN0YXRlVG9IdG1sRmllbGQ6IGZhbHNlLFxufTtcblxuZXhwb3J0IHsgdmFsaWRhdGVGaWVsZCwgRm9ybUNvbmZpcm1hdGlvbiwgRm9ybUVycm9yLCBSZW5kZXJGaWVsZHMsIFN1Ym1pdCB9O1xuXG5leHBvcnQgZGVmYXVsdCBHcmF2aXR5Rm9ybTtcbiJdfQ==
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

        var _values2 = _toConsumableArray(formValues[field.id].value);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHcmF2aXR5Rm9ybSIsInByb3BzIiwiaWQiLCJzZXRTdGF0ZSIsInRvdWNoZWQiLCJzdGF0ZSIsImV2ZW50IiwiZmllbGQiLCJmb3JtVmFsdWVzIiwiY29uZGl0aW9hbmxJZHMiLCJjb25kaXRpb25GaWVsZHMiLCJ0eXBlIiwiaXNSZXF1aXJlZCIsInZhbHVlIiwidmFsdWVzIiwiaW5kZXgiLCJpbmRleE9mIiwidGFyZ2V0Iiwic3BsaWNlIiwicHVzaCIsInN1YklkIiwiZGF0ZUxhYmVsIiwidmFsIiwibGFiZWwiLCJjaGVja2VkIiwiY3NzQ2xhc3MiLCJ2YWxpZCIsImkiLCJsZW5ndGgiLCJoaWRlIiwiY2hlY2tDb25kaXRpb25hbExvZ2ljIiwiY29uZGl0aW9uYWxMb2dpYyIsImhpZGVGaWVsZCIsInBhZ2VOdW1iZXIiLCJvbkNoYW5nZSIsInJlY3QiLCJ3cmFwcGVyUmVmIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvIiwidG9wIiwicHJldmVudERlZmF1bHQiLCJzdWJtaXR0aW5nIiwic3VibWl0U3VjY2VzcyIsInN1Ym1pdEZhaWxlZCIsImNvbmZpcm1hdGlvbk1lc3NhZ2UiLCJlcnJvck1lc3NhZ2VzIiwiZm9ybUlEIiwiYmFja2VuZFVybCIsImdmU3VibWlzc2lvblVybCIsInN1YnN0cmluZyIsImRhdGEiLCJGb3JtRGF0YSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImlzX3ZhbGlkIiwiY29uZmlybWF0aW9uX21lc3NhZ2UiLCJzY3JvbGxUb0NvbmZpcm1hdGlvbiIsImVycm9yIiwidmFsaWRhdGlvbl9tZXNzYWdlcyIsImUiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlUGFnZSIsImNvbmRpdGlvbiIsImZpZWxkcyIsInJ1bGVzIiwiYWN0aW9uVHlwZSIsImhpZGVCYXNlZE9uUnVsZXMiLCJmaWVsZElkIiwiY29uZGl0aW9uRmllbGRWYWx1ZSIsInN0cmluZ1ZhbHVlIiwiQXJyYXkiLCJpc0FycmF5Iiwiam9pbiIsImV2ZXJ5IiwibG9hZGluZyIsImlzVmFsaWQiLCJmb3JtRGF0YSIsImlzTXVsdGlwYXJ0IiwicG9wdWxhdGVkRmllbGRzIiwiX2lzTW91bnRlZCIsImdldCIsImZvcm0iLCJoYXNQb3B1bGF0aW9uIiwiaW5wdXROYW1lIiwiY2hvaWNlcyIsImZpbHRlciIsImNob2ljZSIsImlzU2VsZWN0ZWQiLCJtYXAiLCJwcmVzZWxlY3RlZCIsImZpbmQiLCJzZWxlY3RlZE9wdGlvbiIsIml0ZW0iLCJ0ZXh0IiwiZGVmYXVsdFZhbHVlIiwidG1wRmllbGQiLCJpZHMiLCJwYXJzZUludCIsInBhZ2luYXRpb24iLCJ0aXRsZSIsInN1Ym1pdEljb24iLCJzYXZlU3RhdGVUb0h0bWxGaWVsZCIsInN0eWxlZENvbXBvbmVudHMiLCJCdXR0b24iLCJMb2FkaW5nIiwiR0ZXcmFwcGVyIiwiaXNEaXNhYmxlZCIsIk9iamVjdCIsImtleXMiLCJzb21lIiwieCIsImlzTmV4dERpc2FibGVkIiwiZWwiLCJwb3NpdGlvbiIsIm9uU3VibWl0IiwidW5kZWZpbmVkIiwiZGVzY3JpcHRpb24iLCJ1cGRhdGVGb3JtSGFuZGxlciIsInNldFRvdWNoZWQiLCJwcmV2U3RlcCIsIm5leHRTdGVwIiwiZW5hYmxlSG9uZXlwb3QiLCJwYWdlcyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsVzs7Ozs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixxRkFBTUEsS0FBTjs7QUFEaUIsaUVBNEdOLFVBQUND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QUVyQyxVQVZkO0FBV0UsUUFBQSxRQUFRLEVBQUUsS0FBSzBELFFBWGpCO0FBWUUsUUFBQSxRQUFRLEVBQUUsS0FBS0MsUUFaakI7QUFhRSxRQUFBLGNBQWMsRUFBRVQsY0FibEI7QUFjRSxRQUFBLHFCQUFxQixFQUFFLEtBQUt6RixxQkFkOUI7QUFlRSxRQUFBLG9CQUFvQixFQUFFK0Usb0JBZnhCO0FBZ0JFLFFBQUEsY0FBYyxFQUFFekIsUUFBUSxDQUFDNkM7QUFoQjNCLFFBREYsRUFtQkcsQ0FBQyxDQUFDN0MsUUFBUSxDQUFDc0IsVUFBVixJQUNJdEIsUUFBUSxDQUFDc0IsVUFBVCxJQUF1QnRCLFFBQVEsQ0FBQ3NCLFVBQVQsQ0FBb0J3QixLQUFwQixDQUEwQnRHLE1BQTFCLEtBQXFDeUMsVUFEakUsS0FFQyxnQ0FBQyxrQkFBRDtBQUNFLFFBQUEsTUFBTSxFQUFFMEMsTUFEVjtBQUVFLFFBQUEsT0FBTyxFQUFFQyxPQUZYO0FBR0UsUUFBQSxRQUFRLEVBQUU1QixRQUhaO0FBSUUsUUFBQSxVQUFVLEVBQUV3QixVQUpkO0FBS0UsUUFBQSxVQUFVLEVBQUVNLFVBTGQ7QUFNRSxRQUFBLFVBQVUsRUFBRXBFLFVBTmQ7QUFPRSxRQUFBLFFBQVEsRUFBRSxLQUFLaUY7QUFQakIsUUFyQkosQ0FmRixDQURELEdBa0RDLEVBdEVKLENBREY7QUEyRUQ7Ozs7RUE5WXVCSSxnQjs7QUFpWjFCbkksV0FBVyxDQUFDb0ksWUFBWixHQUEyQjtBQUN6QnpCLEVBQUFBLEtBQUssRUFBRSxJQURrQjtBQUV6QkMsRUFBQUEsVUFBVSxFQUFFLEtBRmE7QUFHekJDLEVBQUFBLG9CQUFvQixFQUFFO0FBSEcsQ0FBM0I7ZUFRZTdHLFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSZW5kZXJGaWVsZHMgZnJvbSAnLi9Gb3JtRWxlbWVudHMvUmVuZGVyRmllbGRzJztcbmltcG9ydCBGb3JtRXJyb3IgZnJvbSAnLi9Gb3JtRWxlbWVudHMvRm9ybUVycm9yJztcbmltcG9ydCBGb3JtQ29uZmlybWF0aW9uIGZyb20gJy4vRm9ybUVsZW1lbnRzL0Zvcm1Db25maXJtYXRpb24nO1xuaW1wb3J0IHsgdmFsaWRhdGVGaWVsZCB9IGZyb20gJy4vSGVscGVycy92YWxpZGF0aW9uJztcbmltcG9ydCBTdWJtaXQgZnJvbSAnLi9Gb3JtRWxlbWVudHMvU3VibWl0JztcblxuY2xhc3MgR3Jhdml0eUZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3VibWl0RmFpbGVkOiBmYWxzZSxcbiAgICAgIGVycm9yTWVzc2FnZXM6IGZhbHNlLFxuICAgICAgZm9ybVZhbHVlczoge30sXG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICBzdWJtaXRTdWNjZXNzOiBmYWxzZSxcbiAgICAgIGNvbmZpcm1hdGlvbk1lc3NhZ2U6IGZhbHNlLFxuICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgICBmb3JtRGF0YToge30sXG4gICAgICB0b3VjaGVkOiB7fSxcbiAgICAgIGFjdGl2ZVBhZ2U6IGZhbHNlLFxuICAgICAgY29uZGl0aW9uRmllbGRzOiB7fSxcbiAgICAgIGNvbmRpdGlvYW5sSWRzOiB7fSxcbiAgICAgIGlzTXVsdGlwYXJ0OiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBmb3JtSUQsIGJhY2tlbmRVcmwsIHBvcHVsYXRlZEZpZWxkcyB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgIGxldCBpc011bHRpcGFydCA9IGZhbHNlO1xuICAgIGNvbnN0IGZvcm0gPSBhd2FpdCBheGlvc1xuICAgICAgLmdldChgJHtiYWNrZW5kVXJsfS8ke2Zvcm1JRH1gKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAgIC5jYXRjaCgoKSA9PiBmYWxzZSk7XG5cbiAgICBpZiAoZm9ybSAmJiB0aGlzLl9pc01vdW50ZWQpIHtcbiAgICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSB7fTtcbiAgICAgIGNvbnN0IGNvbmRpdGlvbkZpZWxkcyA9IFtdO1xuICAgICAgY29uc3QgY29uZGl0aW9hbmxJZHMgPSBbXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBmb3JtLmZpZWxkcykge1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGNvbnN0IGhhc1BvcHVsYXRpb24gPSBmaWVsZC5pbnB1dE5hbWUgJiYgcG9wdWxhdGVkRmllbGRzICYmIHBvcHVsYXRlZEZpZWxkc1tmaWVsZC5pbnB1dE5hbWVdO1xuICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgIHZhbHVlID0gZmllbGQuY2hvaWNlc1xuICAgICAgICAgICAgLmZpbHRlcihjaG9pY2UgPT4gKGhhc1BvcHVsYXRpb24gPyBjaG9pY2UudmFsdWUgPT09IHBvcHVsYXRlZEZpZWxkc1tmaWVsZC5pbnB1dE5hbWVdIDogY2hvaWNlLmlzU2VsZWN0ZWQpKVxuICAgICAgICAgICAgLm1hcChjaG9pY2UgPT4gY2hvaWNlLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgaWYgKGhhc1BvcHVsYXRpb24pIHtcbiAgICAgICAgICAgIHZhbHVlID0gcG9wdWxhdGVkRmllbGRzW2ZpZWxkLmlucHV0TmFtZV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHByZXNlbGVjdGVkID0gZmllbGQuY2hvaWNlcy5maW5kKGNob2ljZSA9PiBjaG9pY2UuaXNTZWxlY3RlZCk7XG4gICAgICAgICAgICB2YWx1ZSA9IHByZXNlbGVjdGVkID8gcHJlc2VsZWN0ZWQudmFsdWUgOiAnJztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IGZpZWxkLmNob2ljZXNcbiAgICAgICAgICAgIC5maWx0ZXIoY2hvaWNlID0+IChoYXNQb3B1bGF0aW9uID8gY2hvaWNlLnZhbHVlID09PSBwb3B1bGF0ZWRGaWVsZHNbZmllbGQuaW5wdXROYW1lXSA6IGNob2ljZS5pc1NlbGVjdGVkKSlcbiAgICAgICAgICAgIC5tYXAoaXRlbSA9PiAoeyB2YWx1ZTogaXRlbS52YWx1ZSwgbGFiZWw6IGl0ZW0udGV4dCB9KSk7XG4gICAgICAgICAgdmFsdWUgPSBzZWxlY3RlZE9wdGlvbiAmJiBzZWxlY3RlZE9wdGlvbi5sZW5ndGggPiAwID8gc2VsZWN0ZWRPcHRpb25bMF0gOiAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IGhhc1BvcHVsYXRpb24gPyBwb3B1bGF0ZWRGaWVsZHNbZmllbGQuaW5wdXROYW1lXSA6IGZpZWxkLmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2ZpbGV1cGxvYWQnKSB7XG4gICAgICAgICAgICBpc011bHRpcGFydCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ3JhYiBhbGwgY29uZGl0aW9uYWwgbG9naWMgZmllbGRzXG4gICAgICAgIGlmIChmaWVsZC5jb25kaXRpb25hbExvZ2ljKSB7XG4gICAgICAgICAgY29uc3QgdG1wRmllbGQgPSB7XG4gICAgICAgICAgICBpZDogZmllbGQuaWQsXG4gICAgICAgICAgICBjb25kaXRpb25hbExvZ2ljOiBmaWVsZC5jb25kaXRpb25hbExvZ2ljLFxuICAgICAgICAgIH07XG4gICAgICAgICAgY29uc3QgaWRzID0gZmllbGQuY29uZGl0aW9uYWxMb2dpYy5ydWxlcy5tYXAoaXRlbSA9PiBpdGVtLmZpZWxkSWQpO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHBhcnNlSW50KGlkc1tpXSk7XG4gICAgICAgICAgICBpZiAoY29uZGl0aW9hbmxJZHMuaW5kZXhPZihpZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIGNvbmRpdGlvYW5sSWRzLnB1c2goaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25kaXRpb25GaWVsZHMucHVzaCh0bXBGaWVsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtVmFsdWVzW2ZpZWxkLmlkXSA9IHtcbiAgICAgICAgICB2YWxpZDogdmFsaWRhdGVGaWVsZCh2YWx1ZSwgZmllbGQpLFxuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIGxhYmVsOiBmaWVsZC5sYWJlbCxcbiAgICAgICAgICBwYWdlTnVtYmVyOiBmaWVsZC5wYWdlTnVtYmVyLFxuICAgICAgICAgIGNzc0NsYXNzOiBmaWVsZC5jc3NDbGFzcyxcbiAgICAgICAgICBpc1JlcXVpcmVkOiBmaWVsZC5pc1JlcXVpcmVkLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy8gY2hlY2sgY29uZGl0aW9uIGxvZ2ljXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmRpdGlvbkZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3JtVmFsdWVzW2NvbmRpdGlvbkZpZWxkc1tpXS5pZF0uaGlkZUZpZWxkID0gdGhpcy5jaGVja0NvbmRpdGlvbmFsTG9naWMoXG4gICAgICAgICAgY29uZGl0aW9uRmllbGRzW2ldLmNvbmRpdGlvbmFsTG9naWMsXG4gICAgICAgICAgZm9ybVZhbHVlcyxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvcm1EYXRhOiBmb3JtLFxuICAgICAgICBmb3JtVmFsdWVzLFxuICAgICAgICBhY3RpdmVQYWdlOiBmb3JtLnBhZ2luYXRpb24gPyAxIDogZmFsc2UsXG4gICAgICAgIGNvbmRpdGlvbkZpZWxkcyxcbiAgICAgICAgY29uZGl0aW9hbmxJZHMsXG4gICAgICAgIGlzTXVsdGlwYXJ0LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gIH1cblxuICBzZXRUb3VjaGVkID0gKGlkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0b3VjaGVkOiB7IC4uLnRoaXMuc3RhdGUudG91Y2hlZCwgW2lkXTogdHJ1ZSB9LFxuICAgIH0pO1xuICB9O1xuXG4gIHVwZGF0ZUZvcm1IYW5kbGVyID0gKGV2ZW50LCBmaWVsZCkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybVZhbHVlcywgY29uZGl0aW9hbmxJZHMsIGNvbmRpdGlvbkZpZWxkcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgeyBpZCwgdHlwZSwgaXNSZXF1aXJlZCB9ID0gZmllbGQ7XG4gICAgLy8gU2V0IG5ldyB2YWx1ZVxuICAgIGxldCB2YWx1ZTtcbiAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgY29uc3QgdmFsdWVzID0gWy4uLmZvcm1WYWx1ZXNbZmllbGQuaWRdLnZhbHVlXTtcbiAgICAgIGNvbnN0IGluZGV4ID0gdmFsdWVzLmluZGV4T2YoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIHZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWVzLnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHZhbHVlID0gdmFsdWVzO1xuICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PSAnZGF0ZScpIHtcbiAgICAgIGNvbnN0IHsgc3ViSWQsIGRhdGVMYWJlbCB9ID0gZmllbGQ7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBbLi4uZm9ybVZhbHVlc1tmaWVsZC5pZF0udmFsdWVdO1xuICAgICAgdmFsdWVzW3N1YklkXSA9IHtcbiAgICAgICAgdmFsOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICAgIGxhYmVsOiBkYXRlTGFiZWwsXG4gICAgICB9O1xuICAgICAgdmFsdWUgPSB2YWx1ZXM7XG4gICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09ICdjb25zZW50Jykge1xuICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQgPyBldmVudC50YXJnZXQuY2hlY2tlZCA6ICdudWxsJztcbiAgICB9ZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gJ3Bhc3N3b3JkJykge1xuICAgICAgY29uc3QgeyBzdWJJZCB9ID0gZmllbGQ7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBbLi4uZm9ybVZhbHVlc1tmaWVsZC5pZF0udmFsdWVdO1xuICAgICAgdmFsdWVzW3N1YklkXSA9IHtcbiAgICAgICAgdmFsOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICB9O1xuICAgICAgdmFsdWUgPSB2YWx1ZXM7XG4gICAgfWVsc2Uge1xuICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQgPyBldmVudC50YXJnZXQudmFsdWUgOiAnbnVsbCc7XG4gICAgfVxuICAgIC8vIGlmIGZpZWxkIGlzIElCQU5cbiAgICBpZiAodHlwZSA9PT0gJ3RleHQnICYmIGZpZWxkLmNzc0NsYXNzLmluZGV4T2YoJ2liYW4nKSA+IC0xKSB7XG4gICAgICB0eXBlID0gJ2liYW4nO1xuICAgIH1cbiAgIFxuICAgIC8vIFZhbGlkYXRlIGZpZWxkXG4gICAgY29uc3QgdmFsaWQgPSB2YWxpZGF0ZUZpZWxkKHZhbHVlLCBmaWVsZCk7XG5cbiAgICAvLyBpZiBmaWVsZCBJRCBpcyBzb21ld2hlcmUgaW4gY29uZGl0aW9uYWwgZmllbGRzXG4gICAgLy8gcmVjYWxjdWxhdGUgYWxsIGNvbmRpdGlvbnNcbiAgICBpZiAoY29uZGl0aW9hbmxJZHMuaW5kZXhPZihpZCkgIT09IC0xKSB7XG4gICAgICBmb3JtVmFsdWVzW2lkXS52YWx1ZSA9IHZhbHVlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25kaXRpb25GaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gY29uZGl0aW9uRmllbGRzW2ldO1xuICAgICAgICBjb25zdCBoaWRlID0gdGhpcy5jaGVja0NvbmRpdGlvbmFsTG9naWMoY29uZGl0aW9uRmllbGRzW2ldLmNvbmRpdGlvbmFsTG9naWMsIGZvcm1WYWx1ZXMpO1xuICAgICAgICBmb3JtVmFsdWVzW2lkXS5oaWRlRmllbGQgPSBoaWRlO1xuICAgICAgICBpZiAoaGlkZSkge1xuICAgICAgICAgIGlmIChmb3JtVmFsdWVzW2lkXS5pc1JlcXVpcmVkICYmIGhpZGUpIHtcbiAgICAgICAgICAgIGZvcm1WYWx1ZXNbaWRdLnZhbHVlID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvcm1WYWx1ZXNbaWRdLnZhbGlkID0gISFmb3JtVmFsdWVzW2lkXS5pc1JlcXVpcmVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgZm9ybVZhbHVlczoge1xuICAgICAgICAgIC4uLmZvcm1WYWx1ZXMsXG4gICAgICAgICAgW2lkXToge1xuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIHZhbGlkLFxuICAgICAgICAgICAgbGFiZWw6IGZpZWxkLmxhYmVsLFxuICAgICAgICAgICAgcGFnZU51bWJlcjogZmllbGQucGFnZU51bWJlcixcbiAgICAgICAgICAgIGNzc0NsYXNzOiBmaWVsZC5jc3NDbGFzcyxcbiAgICAgICAgICAgIGlzUmVxdWlyZWQ6IGZpZWxkLmlzUmVxdWlyZWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIC8vIHBhc3Mgc3RhdGUgdG8gcGFyZW50IGNvbXBvbmVudFxuICAgICAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZSh0aGlzLnN0YXRlLmZvcm1WYWx1ZXMpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICk7XG4gIH07XG5cbiAgc2Nyb2xsVG9Db25maXJtYXRpb24gPSAoKSA9PiB7IFxuICAgIGNvbnN0IHJlY3QgPSB0aGlzLndyYXBwZXJSZWYgPyB0aGlzLndyYXBwZXJSZWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOiBmYWxzZTtcbiAgICBpZiAocmVjdCAmJiB3aW5kb3cpIHtcbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiBzY3JvbGxUb3AgKyByZWN0LnRvcCAtIDEwMCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN1Ym1pdHRpbmc6IHRydWUsXG4gICAgICBzdWJtaXRTdWNjZXNzOiBmYWxzZSxcbiAgICAgIHN1Ym1pdEZhaWxlZDogZmFsc2UsXG4gICAgICBjb25maXJtYXRpb25NZXNzYWdlOiBmYWxzZSxcbiAgICAgIGVycm9yTWVzc2FnZXM6IGZhbHNlLFxuICAgIH0pO1xuICAgIGNvbnN0IHsgZm9ybUlELCBiYWNrZW5kVXJsIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGdmU3VibWlzc2lvblVybCA9IGJhY2tlbmRVcmwuc3Vic3RyaW5nKDAsIGJhY2tlbmRVcmwuaW5kZXhPZignL3dwLWpzb24nKSk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpO1xuICAgIGF4aW9zXG4gICAgICAucG9zdChgJHtnZlN1Ym1pc3Npb25Vcmx9L3dwLWpzb24vZ2YvdjIvZm9ybXMvJHtmb3JtSUR9L3N1Ym1pc3Npb25zYCwgZGF0YSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmlzX3ZhbGlkKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Ym1pdFN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICBjb25maXJtYXRpb25NZXNzYWdlOiByZXNwb25zZS5kYXRhLmNvbmZpcm1hdGlvbl9tZXNzYWdlLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9Db25maXJtYXRpb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc3VibWl0RmFpbGVkOiB0cnVlLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlczogJ1NvbWV0aGluZyB3ZW50IHdyb25nJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICAgICAgc3VibWl0RmFpbGVkOiB0cnVlLFxuICAgICAgICAgIGVycm9yTWVzc2FnZXM6IGVycm9yLnJlc3BvbnNlLmRhdGEudmFsaWRhdGlvbl9tZXNzYWdlcyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBuZXh0U3RlcCA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ25leHQgc3RlcCcpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IGFjdGl2ZVBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVQYWdlOiBhY3RpdmVQYWdlICsgMSxcbiAgICB9KTtcbiAgfTtcblxuICBwcmV2U3RlcCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgYWN0aXZlUGFnZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZVBhZ2U6IGFjdGl2ZVBhZ2UgLSAxLFxuICAgIH0pO1xuICB9O1xuXG4gIGNoZWNrQ29uZGl0aW9uYWxMb2dpYyA9IChjb25kaXRpb24sIGZpZWxkcyA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgeyBydWxlcywgYWN0aW9uVHlwZSB9ID0gY29uZGl0aW9uO1xuICAgIGlmICghcnVsZXMpIHJldHVybiB0cnVlO1xuXG4gICAgY29uc3QgZm9ybVZhbHVlcyA9IGZpZWxkcyB8fCB0aGlzLnN0YXRlLmZvcm1WYWx1ZXM7XG5cbiAgICAvLyBzaG93IG9ubHkgaWYgaXMgc2VsZWN0ZWQgXCJBbGwgZmllbGRzXCIgKGl0IHNob3VsZCBiZSB0d2Vha2VkIGluIGZ1dHVyZSlcbiAgICAvLyB3b3JrcyBvbmx5IFwic2hvdy9oaWRlIHdoZW4gZmllbGQgaXMgZXF1YWwgdG9cIlxuICAgIGxldCBoaWRlRmllbGQgPSBhY3Rpb25UeXBlICE9PSAnaGlkZSc7XG4gICAgY29uc3QgaGlkZUJhc2VkT25SdWxlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHsgZmllbGRJZCwgdmFsdWUgfSA9IHJ1bGVzW2ldO1xuICAgICAgY29uc3QgY29uZGl0aW9uRmllbGRWYWx1ZSA9IGZvcm1WYWx1ZXNbZmllbGRJZF0udmFsdWU7XG5cbiAgICAgIGNvbnN0IHN0cmluZ1ZhbHVlID0gQXJyYXkuaXNBcnJheShjb25kaXRpb25GaWVsZFZhbHVlKVxuICAgICAgICA/IGNvbmRpdGlvbkZpZWxkVmFsdWUuam9pbignJylcbiAgICAgICAgOiBjb25kaXRpb25GaWVsZFZhbHVlO1xuICAgICAgaWYgKHN0cmluZ1ZhbHVlICYmIHZhbHVlID09PSBzdHJpbmdWYWx1ZSkge1xuICAgICAgICBoaWRlQmFzZWRPblJ1bGVzW2ldID0gYWN0aW9uVHlwZSA9PT0gJ2hpZGUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGlkZUJhc2VkT25SdWxlc1tpXSA9IGFjdGlvblR5cGUgIT09ICdoaWRlJztcbiAgICAgIH1cbiAgICB9XG4gICAgaGlkZUZpZWxkID0gaGlkZUJhc2VkT25SdWxlcy5ldmVyeShpID0+IGkgPT09IHRydWUpO1xuICAgIC8vIGZvcm1WYWx1ZXNbaWRdLmhpZGVGaWVsZCA9IGhpZGVGaWVsZDtcbiAgICAvLyB0aGlzLnNldFN0YXRlKHsgZm9ybVZhbHVlcyB9KTtcbiAgICByZXR1cm4gaGlkZUZpZWxkO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBmb3JtRGF0YSxcbiAgICAgIGZvcm1WYWx1ZXMsXG4gICAgICBzdWJtaXRGYWlsZWQsXG4gICAgICBzdWJtaXRTdWNjZXNzLFxuICAgICAgdG91Y2hlZCxcbiAgICAgIHN1Ym1pdHRpbmcsXG4gICAgICBhY3RpdmVQYWdlLFxuICAgICAgaXNNdWx0aXBhcnQsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgdGl0bGUsIHN1Ym1pdEljb24sIHNhdmVTdGF0ZVRvSHRtbEZpZWxkLCBzdHlsZWRDb21wb25lbnRzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgQnV0dG9uLCBMb2FkaW5nLCBHRldyYXBwZXIgPSAnZGl2JyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICAgIGNvbnN0IHsgY3NzQ2xhc3MgfSA9IGZvcm1EYXRhO1xuXG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IE9iamVjdC5rZXlzKGZvcm1WYWx1ZXMpLnNvbWUoXG4gICAgICB4ID0+ICFmb3JtVmFsdWVzW3hdLmhpZGVGaWVsZCAmJiBmb3JtVmFsdWVzW3hdLnZhbGlkLFxuICAgICk7XG4gICAgY29uc3QgaXNOZXh0RGlzYWJsZWQgPSBhY3RpdmVQYWdlXG4gICAgICA/IE9iamVjdC5rZXlzKGZvcm1WYWx1ZXMpLnNvbWUoXG4gICAgICAgIHggPT4gZm9ybVZhbHVlc1t4XS5wYWdlTnVtYmVyID09PSBhY3RpdmVQYWdlXG4gICAgICAgICAgJiYgIWZvcm1WYWx1ZXNbeF0uaGlkZUZpZWxkXG4gICAgICAgICAgJiYgZm9ybVZhbHVlc1t4XS52YWxpZCxcbiAgICAgIClcbiAgICAgIDogZmFsc2U7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxHRldyYXBwZXJcbiAgICAgICAgcmVmPXsoZWwpID0+ICh0aGlzLndyYXBwZXJSZWYgPSBlbCl9XG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0td3JhcHBlclwiXG4gICAgICAgIGNzcz17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fVxuICAgICAgICBpZD17YGdyYXZpdHlfZm9ybV8ke3RoaXMucHJvcHMuZm9ybUlEfWB9XG4gICAgICA+XG4gICAgICAgIHtmb3JtRGF0YS50aXRsZSA/IG51bGwgOiBMb2FkaW5nICYmIDxMb2FkaW5nIGlzTG9hZGluZyAvPn1cblxuICAgICAgICB7c3VibWl0RmFpbGVkICYmICFzdWJtaXRTdWNjZXNzICYmIChcbiAgICAgICAgICA8Rm9ybUVycm9yXG4gICAgICAgICAgICBmaWVsZHM9e2Zvcm1WYWx1ZXN9XG4gICAgICAgICAgICBlcnJvcnM9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlc31cbiAgICAgICAgICAgIGVycm9yTWVzc2FnZT1cIlRoZXJlIHdhcyBhIHByb2JsZW0gd2l0aCB5b3VyIHN1Ym1pc3Npb25cIlxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAge3N1Ym1pdFN1Y2Nlc3MgJiYgdGhpcy5zdGF0ZS5jb25maXJtYXRpb25NZXNzYWdlICYmIChcbiAgICAgICAgICA8Rm9ybUNvbmZpcm1hdGlvbiBjb25maXJtYXRpb249e3RoaXMuc3RhdGUuY29uZmlybWF0aW9uTWVzc2FnZX0gLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7IXN1Ym1pdFN1Y2Nlc3MgJiYgZm9ybURhdGEuZmllbGRzID8gKFxuICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICBvblN1Ym1pdD17ZSA9PiB0aGlzLm9uU3VibWl0KGUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3NDbGFzc31cbiAgICAgICAgICAgIGVuY1R5cGU9e2lzTXVsdGlwYXJ0ID8gJ211bHRpcGFydC9mb3JtLWRhdGEnIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgbm9WYWxpZGF0ZVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsoZm9ybURhdGEudGl0bGUgfHwgZm9ybURhdGEuZGVzY3JpcHRpb24pICYmIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7Zm9ybURhdGEudGl0bGUgJiYgdGl0bGUgPyA8aDMgY2xhc3NOYW1lPVwiZm9ybS10aXRsZVwiPntmb3JtRGF0YS50aXRsZX08L2gzPiA6IG51bGx9XG4gICAgICAgICAgICAgICAge2Zvcm1EYXRhLmRlc2NyaXB0aW9uID8gKFxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9ybS1kZXNjcmlwdGlvblwiPntmb3JtRGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPFJlbmRlckZpZWxkc1xuICAgICAgICAgICAgICAgIHN0eWxlZENvbXBvbmVudHM9e3N0eWxlZENvbXBvbmVudHN9XG4gICAgICAgICAgICAgICAgZmllbGRzPXtmb3JtRGF0YS5maWVsZHN9XG4gICAgICAgICAgICAgICAgZm9ybVZhbHVlcz17Zm9ybVZhbHVlc31cbiAgICAgICAgICAgICAgICBzdWJtaXRGYWlsZWQ9e3N1Ym1pdEZhaWxlZH1cbiAgICAgICAgICAgICAgICBzdWJtaXRTdWNjZXNzPXtzdWJtaXRTdWNjZXNzfVxuICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm09e3RoaXMudXBkYXRlRm9ybUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgdG91Y2hlZD17dG91Y2hlZH1cbiAgICAgICAgICAgICAgICBzZXRUb3VjaGVkPXt0aGlzLnNldFRvdWNoZWR9XG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17Zm9ybURhdGEucGFnaW5hdGlvbn1cbiAgICAgICAgICAgICAgICBhY3RpdmVQYWdlPXthY3RpdmVQYWdlfVxuICAgICAgICAgICAgICAgIHByZXZTdGVwPXt0aGlzLnByZXZTdGVwfVxuICAgICAgICAgICAgICAgIG5leHRTdGVwPXt0aGlzLm5leHRTdGVwfVxuICAgICAgICAgICAgICAgIGlzTmV4dERpc2FibGVkPXtpc05leHREaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBjaGVja0NvbmRpdGlvbmFsTG9naWM9e3RoaXMuY2hlY2tDb25kaXRpb25hbExvZ2ljfVxuICAgICAgICAgICAgICAgIHNhdmVTdGF0ZVRvSHRtbEZpZWxkPXtzYXZlU3RhdGVUb0h0bWxGaWVsZH1cbiAgICAgICAgICAgICAgICBlbmFibGVIb25leXBvdD17Zm9ybURhdGEuZW5hYmxlSG9uZXlwb3R9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHsoIWZvcm1EYXRhLnBhZ2luYXRpb25cbiAgICAgICAgICAgICAgICB8fCAoZm9ybURhdGEucGFnaW5hdGlvbiAmJiBmb3JtRGF0YS5wYWdpbmF0aW9uLnBhZ2VzLmxlbmd0aCA9PT0gYWN0aXZlUGFnZSkpICYmIChcbiAgICAgICAgICAgICAgICA8U3VibWl0XG4gICAgICAgICAgICAgICAgICBCdXR0b249e0J1dHRvbn1cbiAgICAgICAgICAgICAgICAgIExvYWRpbmc9e0xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICBmb3JtRGF0YT17Zm9ybURhdGF9XG4gICAgICAgICAgICAgICAgICBzdWJtaXRJY29uPXtzdWJtaXRJY29ufVxuICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17aXNEaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgIHN1Ym1pdHRpbmc9e3N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgICBwcmV2U3RlcD17dGhpcy5wcmV2U3RlcH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApIDogKFxuICAgICAgICAgICcnXG4gICAgICAgICl9XG4gICAgICA8L0dGV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG5cbkdyYXZpdHlGb3JtLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6IHRydWUsXG4gIHN1Ym1pdEljb246IGZhbHNlLFxuICBzYXZlU3RhdGVUb0h0bWxGaWVsZDogZmFsc2UsXG59O1xuXG5leHBvcnQgeyB2YWxpZGF0ZUZpZWxkLCBGb3JtQ29uZmlybWF0aW9uLCBGb3JtRXJyb3IsIFJlbmRlckZpZWxkcywgU3VibWl0IH07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXZpdHlGb3JtO1xuIl19
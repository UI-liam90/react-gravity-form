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
      return _react["default"].createElement("div", {
        as: GFWrapper,
        ref: function ref(el) {
          return _this2.wrapperRef = el;
        },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHcmF2aXR5Rm9ybSIsInByb3BzIiwiaWQiLCJzZXRTdGF0ZSIsInRvdWNoZWQiLCJzdGF0ZSIsImV2ZW50IiwiZmllbGQiLCJmb3JtVmFsdWVzIiwiY29uZGl0aW9hbmxJZHMiLCJjb25kaXRpb25GaWVsZHMiLCJ0eXBlIiwiaXNSZXF1aXJlZCIsInZhbHVlIiwidmFsdWVzIiwiaW5kZXgiLCJpbmRleE9mIiwidGFyZ2V0Iiwic3BsaWNlIiwicHVzaCIsInN1YklkIiwiZGF0ZUxhYmVsIiwidmFsIiwibGFiZWwiLCJjaGVja2VkIiwiY3NzQ2xhc3MiLCJ2YWxpZCIsImkiLCJsZW5ndGgiLCJoaWRlIiwiY2hlY2tDb25kaXRpb25hbExvZ2ljIiwiY29uZGl0aW9uYWxMb2dpYyIsImhpZGVGaWVsZCIsInBhZ2VOdW1iZXIiLCJvbkNoYW5nZSIsInJlY3QiLCJ3cmFwcGVyUmVmIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvIiwidG9wIiwicHJldmVudERlZmF1bHQiLCJzdWJtaXR0aW5nIiwic3VibWl0U3VjY2VzcyIsInN1Ym1pdEZhaWxlZCIsImNvbmZpcm1hdGlvbk1lc3NhZ2UiLCJlcnJvck1lc3NhZ2VzIiwiZm9ybUlEIiwiYmFja2VuZFVybCIsImdmU3VibWlzc2lvblVybCIsInN1YnN0cmluZyIsImRhdGEiLCJGb3JtRGF0YSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImlzX3ZhbGlkIiwiY29uZmlybWF0aW9uX21lc3NhZ2UiLCJzY3JvbGxUb0NvbmZpcm1hdGlvbiIsImVycm9yIiwidmFsaWRhdGlvbl9tZXNzYWdlcyIsImUiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlUGFnZSIsImNvbmRpdGlvbiIsImZpZWxkcyIsInJ1bGVzIiwiYWN0aW9uVHlwZSIsImhpZGVCYXNlZE9uUnVsZXMiLCJmaWVsZElkIiwiY29uZGl0aW9uRmllbGRWYWx1ZSIsInN0cmluZ1ZhbHVlIiwiQXJyYXkiLCJpc0FycmF5Iiwiam9pbiIsImV2ZXJ5IiwibG9hZGluZyIsImlzVmFsaWQiLCJmb3JtRGF0YSIsImlzTXVsdGlwYXJ0IiwicG9wdWxhdGVkRmllbGRzIiwiX2lzTW91bnRlZCIsImdldCIsImZvcm0iLCJoYXNQb3B1bGF0aW9uIiwiaW5wdXROYW1lIiwiY2hvaWNlcyIsImZpbHRlciIsImNob2ljZSIsImlzU2VsZWN0ZWQiLCJtYXAiLCJwcmVzZWxlY3RlZCIsImZpbmQiLCJzZWxlY3RlZE9wdGlvbiIsIml0ZW0iLCJ0ZXh0IiwiZGVmYXVsdFZhbHVlIiwidG1wRmllbGQiLCJpZHMiLCJwYXJzZUludCIsInBhZ2luYXRpb24iLCJ0aXRsZSIsInN1Ym1pdEljb24iLCJzYXZlU3RhdGVUb0h0bWxGaWVsZCIsInN0eWxlZENvbXBvbmVudHMiLCJCdXR0b24iLCJMb2FkaW5nIiwiR0ZXcmFwcGVyIiwiaXNEaXNhYmxlZCIsIk9iamVjdCIsImtleXMiLCJzb21lIiwieCIsImlzTmV4dERpc2FibGVkIiwiZWwiLCJwb3NpdGlvbiIsIm9uU3VibWl0IiwidW5kZWZpbmVkIiwiZGVzY3JpcHRpb24iLCJ1cGRhdGVGb3JtSGFuZGxlciIsInNldFRvdWNoZWQiLCJwcmV2U3RlcCIsIm5leHRTdGVwIiwiZW5hYmxlSG9uZXlwb3QiLCJwYWdlcyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsVzs7Ozs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixxRkFBTUEsS0FBTjs7QUFEaUIsaUVBNEdOLFVBQUND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QUFRLENBQUNzQixVQUFULENBQW9Cd0IsS0FBcEIsQ0FBMEJ0RyxNQUExQixLQUFxQ3lDLFVBRGpFLEtBRUMsZ0NBQUMsa0JBQUQ7QUFDRSxRQUFBLE1BQU0sRUFBRTBDLE1BRFY7QUFFRSxRQUFBLE9BQU8sRUFBRUMsT0FGWDtBQUdFLFFBQUEsUUFBUSxFQUFFNUIsUUFIWjtBQUlFLFFBQUEsVUFBVSxFQUFFd0IsVUFKZDtBQUtFLFFBQUEsVUFBVSxFQUFFTSxVQUxkO0FBTUUsUUFBQSxVQUFVLEVBQUVwRSxVQU5kO0FBT0UsUUFBQSxRQUFRLEVBQUUsS0FBS2lGO0FBUGpCLFFBckJKLENBZkYsQ0FERCxHQWtEQyxFQXRFSixDQURGO0FBMkVEOzs7O0VBdll1QkksZ0I7O0FBMFkxQm5JLFdBQVcsQ0FBQ29JLFlBQVosR0FBMkI7QUFDekJ6QixFQUFBQSxLQUFLLEVBQUUsSUFEa0I7QUFFekJDLEVBQUFBLFVBQVUsRUFBRSxLQUZhO0FBR3pCQyxFQUFBQSxvQkFBb0IsRUFBRTtBQUhHLENBQTNCO2VBUWU3RyxXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUmVuZGVyRmllbGRzIGZyb20gJy4vRm9ybUVsZW1lbnRzL1JlbmRlckZpZWxkcyc7XG5pbXBvcnQgRm9ybUVycm9yIGZyb20gJy4vRm9ybUVsZW1lbnRzL0Zvcm1FcnJvcic7XG5pbXBvcnQgRm9ybUNvbmZpcm1hdGlvbiBmcm9tICcuL0Zvcm1FbGVtZW50cy9Gb3JtQ29uZmlybWF0aW9uJztcbmltcG9ydCB7IHZhbGlkYXRlRmllbGQgfSBmcm9tICcuL0hlbHBlcnMvdmFsaWRhdGlvbic7XG5pbXBvcnQgU3VibWl0IGZyb20gJy4vRm9ybUVsZW1lbnRzL1N1Ym1pdCc7XG5cbmNsYXNzIEdyYXZpdHlGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN1Ym1pdEZhaWxlZDogZmFsc2UsXG4gICAgICBlcnJvck1lc3NhZ2VzOiBmYWxzZSxcbiAgICAgIGZvcm1WYWx1ZXM6IHt9LFxuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgc3VibWl0U3VjY2VzczogZmFsc2UsXG4gICAgICBjb25maXJtYXRpb25NZXNzYWdlOiBmYWxzZSxcbiAgICAgIGlzVmFsaWQ6IGZhbHNlLFxuICAgICAgZm9ybURhdGE6IHt9LFxuICAgICAgdG91Y2hlZDoge30sXG4gICAgICBhY3RpdmVQYWdlOiBmYWxzZSxcbiAgICAgIGNvbmRpdGlvbkZpZWxkczoge30sXG4gICAgICBjb25kaXRpb2FubElkczoge30sXG4gICAgICBpc011bHRpcGFydDogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZm9ybUlELCBiYWNrZW5kVXJsLCBwb3B1bGF0ZWRGaWVsZHMgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICBsZXQgaXNNdWx0aXBhcnQgPSBmYWxzZTtcbiAgICBjb25zdCBmb3JtID0gYXdhaXQgYXhpb3NcbiAgICAgIC5nZXQoYCR7YmFja2VuZFVybH0vJHtmb3JtSUR9YClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXG4gICAgICAuY2F0Y2goKCkgPT4gZmFsc2UpO1xuXG4gICAgaWYgKGZvcm0gJiYgdGhpcy5faXNNb3VudGVkKSB7XG4gICAgICBjb25zdCBmb3JtVmFsdWVzID0ge307XG4gICAgICBjb25zdCBjb25kaXRpb25GaWVsZHMgPSBbXTtcbiAgICAgIGNvbnN0IGNvbmRpdGlvYW5sSWRzID0gW107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgZm9ybS5maWVsZHMpIHtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBjb25zdCBoYXNQb3B1bGF0aW9uID0gZmllbGQuaW5wdXROYW1lICYmIHBvcHVsYXRlZEZpZWxkcyAmJiBwb3B1bGF0ZWRGaWVsZHNbZmllbGQuaW5wdXROYW1lXTtcbiAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICB2YWx1ZSA9IGZpZWxkLmNob2ljZXNcbiAgICAgICAgICAgIC5maWx0ZXIoY2hvaWNlID0+IChoYXNQb3B1bGF0aW9uID8gY2hvaWNlLnZhbHVlID09PSBwb3B1bGF0ZWRGaWVsZHNbZmllbGQuaW5wdXROYW1lXSA6IGNob2ljZS5pc1NlbGVjdGVkKSlcbiAgICAgICAgICAgIC5tYXAoY2hvaWNlID0+IGNob2ljZS52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgIGlmIChoYXNQb3B1bGF0aW9uKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHBvcHVsYXRlZEZpZWxkc1tmaWVsZC5pbnB1dE5hbWVdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwcmVzZWxlY3RlZCA9IGZpZWxkLmNob2ljZXMuZmluZChjaG9pY2UgPT4gY2hvaWNlLmlzU2VsZWN0ZWQpO1xuICAgICAgICAgICAgdmFsdWUgPSBwcmVzZWxlY3RlZCA/IHByZXNlbGVjdGVkLnZhbHVlIDogJyc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBmaWVsZC5jaG9pY2VzXG4gICAgICAgICAgICAuZmlsdGVyKGNob2ljZSA9PiAoaGFzUG9wdWxhdGlvbiA/IGNob2ljZS52YWx1ZSA9PT0gcG9wdWxhdGVkRmllbGRzW2ZpZWxkLmlucHV0TmFtZV0gOiBjaG9pY2UuaXNTZWxlY3RlZCkpXG4gICAgICAgICAgICAubWFwKGl0ZW0gPT4gKHsgdmFsdWU6IGl0ZW0udmFsdWUsIGxhYmVsOiBpdGVtLnRleHQgfSkpO1xuICAgICAgICAgIHZhbHVlID0gc2VsZWN0ZWRPcHRpb24gJiYgc2VsZWN0ZWRPcHRpb24ubGVuZ3RoID4gMCA/IHNlbGVjdGVkT3B0aW9uWzBdIDogJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUgPSBoYXNQb3B1bGF0aW9uID8gcG9wdWxhdGVkRmllbGRzW2ZpZWxkLmlucHV0TmFtZV0gOiBmaWVsZC5kZWZhdWx0VmFsdWU7XG4gICAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdmaWxldXBsb2FkJykge1xuICAgICAgICAgICAgaXNNdWx0aXBhcnQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdyYWIgYWxsIGNvbmRpdGlvbmFsIGxvZ2ljIGZpZWxkc1xuICAgICAgICBpZiAoZmllbGQuY29uZGl0aW9uYWxMb2dpYykge1xuICAgICAgICAgIGNvbnN0IHRtcEZpZWxkID0ge1xuICAgICAgICAgICAgaWQ6IGZpZWxkLmlkLFxuICAgICAgICAgICAgY29uZGl0aW9uYWxMb2dpYzogZmllbGQuY29uZGl0aW9uYWxMb2dpYyxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNvbnN0IGlkcyA9IGZpZWxkLmNvbmRpdGlvbmFsTG9naWMucnVsZXMubWFwKGl0ZW0gPT4gaXRlbS5maWVsZElkKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaWQgPSBwYXJzZUludChpZHNbaV0pO1xuICAgICAgICAgICAgaWYgKGNvbmRpdGlvYW5sSWRzLmluZGV4T2YoaWQpID09PSAtMSkge1xuICAgICAgICAgICAgICBjb25kaXRpb2FubElkcy5wdXNoKGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uZGl0aW9uRmllbGRzLnB1c2godG1wRmllbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybVZhbHVlc1tmaWVsZC5pZF0gPSB7XG4gICAgICAgICAgdmFsaWQ6IHZhbGlkYXRlRmllbGQodmFsdWUsIGZpZWxkKSxcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICBsYWJlbDogZmllbGQubGFiZWwsXG4gICAgICAgICAgcGFnZU51bWJlcjogZmllbGQucGFnZU51bWJlcixcbiAgICAgICAgICBjc3NDbGFzczogZmllbGQuY3NzQ2xhc3MsXG4gICAgICAgICAgaXNSZXF1aXJlZDogZmllbGQuaXNSZXF1aXJlZCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8vIGNoZWNrIGNvbmRpdGlvbiBsb2dpY1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25kaXRpb25GaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9ybVZhbHVlc1tjb25kaXRpb25GaWVsZHNbaV0uaWRdLmhpZGVGaWVsZCA9IHRoaXMuY2hlY2tDb25kaXRpb25hbExvZ2ljKFxuICAgICAgICAgIGNvbmRpdGlvbkZpZWxkc1tpXS5jb25kaXRpb25hbExvZ2ljLFxuICAgICAgICAgIGZvcm1WYWx1ZXMsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb3JtRGF0YTogZm9ybSxcbiAgICAgICAgZm9ybVZhbHVlcyxcbiAgICAgICAgYWN0aXZlUGFnZTogZm9ybS5wYWdpbmF0aW9uID8gMSA6IGZhbHNlLFxuICAgICAgICBjb25kaXRpb25GaWVsZHMsXG4gICAgICAgIGNvbmRpdGlvYW5sSWRzLFxuICAgICAgICBpc011bHRpcGFydCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuICB9XG5cbiAgc2V0VG91Y2hlZCA9IChpZCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdG91Y2hlZDogeyAuLi50aGlzLnN0YXRlLnRvdWNoZWQsIFtpZF06IHRydWUgfSxcbiAgICB9KTtcbiAgfTtcblxuICB1cGRhdGVGb3JtSGFuZGxlciA9IChldmVudCwgZmllbGQpID0+IHtcbiAgICBjb25zdCB7IGZvcm1WYWx1ZXMsIGNvbmRpdGlvYW5sSWRzLCBjb25kaXRpb25GaWVsZHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IHsgaWQsIHR5cGUsIGlzUmVxdWlyZWQgfSA9IGZpZWxkO1xuICAgIC8vIFNldCBuZXcgdmFsdWVcbiAgICBsZXQgdmFsdWU7XG4gICAgaWYgKGZpZWxkLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IFsuLi5mb3JtVmFsdWVzW2ZpZWxkLmlkXS52YWx1ZV07XG4gICAgICBjb25zdCBpbmRleCA9IHZhbHVlcy5pbmRleE9mKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICB2YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlcy5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICB9XG4gICAgICB2YWx1ZSA9IHZhbHVlcztcbiAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT0gJ2RhdGUnKSB7XG4gICAgICBjb25zdCB7IHN1YklkLCBkYXRlTGFiZWwgfSA9IGZpZWxkO1xuICAgICAgY29uc3QgdmFsdWVzID0gWy4uLmZvcm1WYWx1ZXNbZmllbGQuaWRdLnZhbHVlXTtcbiAgICAgIHZhbHVlc1tzdWJJZF0gPSB7XG4gICAgICAgIHZhbDogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICBsYWJlbDogZGF0ZUxhYmVsLFxuICAgICAgfTtcbiAgICAgIHZhbHVlID0gdmFsdWVzO1xuICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PSAnY29uc2VudCcpIHtcbiAgICAgIHZhbHVlID0gZXZlbnQudGFyZ2V0ID8gZXZlbnQudGFyZ2V0LmNoZWNrZWQgOiAnbnVsbCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gZXZlbnQudGFyZ2V0ID8gZXZlbnQudGFyZ2V0LnZhbHVlIDogJ251bGwnO1xuICAgIH1cbiAgICAvLyBpZiBmaWVsZCBpcyBJQkFOXG4gICAgaWYgKHR5cGUgPT09ICd0ZXh0JyAmJiBmaWVsZC5jc3NDbGFzcy5pbmRleE9mKCdpYmFuJykgPiAtMSkge1xuICAgICAgdHlwZSA9ICdpYmFuJztcbiAgICB9XG4gICBcbiAgICAvLyBWYWxpZGF0ZSBmaWVsZFxuICAgIGNvbnN0IHZhbGlkID0gdmFsaWRhdGVGaWVsZCh2YWx1ZSwgZmllbGQpO1xuXG4gICAgLy8gaWYgZmllbGQgSUQgaXMgc29tZXdoZXJlIGluIGNvbmRpdGlvbmFsIGZpZWxkc1xuICAgIC8vIHJlY2FsY3VsYXRlIGFsbCBjb25kaXRpb25zXG4gICAgaWYgKGNvbmRpdGlvYW5sSWRzLmluZGV4T2YoaWQpICE9PSAtMSkge1xuICAgICAgZm9ybVZhbHVlc1tpZF0udmFsdWUgPSB2YWx1ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZGl0aW9uRmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IGNvbmRpdGlvbkZpZWxkc1tpXTtcbiAgICAgICAgY29uc3QgaGlkZSA9IHRoaXMuY2hlY2tDb25kaXRpb25hbExvZ2ljKGNvbmRpdGlvbkZpZWxkc1tpXS5jb25kaXRpb25hbExvZ2ljLCBmb3JtVmFsdWVzKTtcbiAgICAgICAgZm9ybVZhbHVlc1tpZF0uaGlkZUZpZWxkID0gaGlkZTtcbiAgICAgICAgaWYgKGhpZGUpIHtcbiAgICAgICAgICBpZiAoZm9ybVZhbHVlc1tpZF0uaXNSZXF1aXJlZCAmJiBoaWRlKSB7XG4gICAgICAgICAgICBmb3JtVmFsdWVzW2lkXS52YWx1ZSA9ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtVmFsdWVzW2lkXS52YWxpZCA9ICEhZm9ybVZhbHVlc1tpZF0uaXNSZXF1aXJlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIGZvcm1WYWx1ZXM6IHtcbiAgICAgICAgICAuLi5mb3JtVmFsdWVzLFxuICAgICAgICAgIFtpZF06IHtcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICB2YWxpZCxcbiAgICAgICAgICAgIGxhYmVsOiBmaWVsZC5sYWJlbCxcbiAgICAgICAgICAgIHBhZ2VOdW1iZXI6IGZpZWxkLnBhZ2VOdW1iZXIsXG4gICAgICAgICAgICBjc3NDbGFzczogZmllbGQuY3NzQ2xhc3MsXG4gICAgICAgICAgICBpc1JlcXVpcmVkOiBmaWVsZC5pc1JlcXVpcmVkLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICAvLyBwYXNzIHN0YXRlIHRvIHBhcmVudCBjb21wb25lbnRcbiAgICAgICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UodGhpcy5zdGF0ZS5mb3JtVmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICApO1xuICB9O1xuXG4gIHNjcm9sbFRvQ29uZmlybWF0aW9uID0gKCkgPT4geyBcbiAgICBjb25zdCByZWN0ID0gdGhpcy53cmFwcGVyUmVmID8gdGhpcy53cmFwcGVyUmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogZmFsc2U7XG4gICAgaWYgKHJlY3QgJiYgd2luZG93KSB7XG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogc2Nyb2xsVG9wICsgcmVjdC50b3AgLSAxMDAsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdWJtaXR0aW5nOiB0cnVlLFxuICAgICAgc3VibWl0U3VjY2VzczogZmFsc2UsXG4gICAgICBzdWJtaXRGYWlsZWQ6IGZhbHNlLFxuICAgICAgY29uZmlybWF0aW9uTWVzc2FnZTogZmFsc2UsXG4gICAgICBlcnJvck1lc3NhZ2VzOiBmYWxzZSxcbiAgICB9KTtcbiAgICBjb25zdCB7IGZvcm1JRCwgYmFja2VuZFVybCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBnZlN1Ym1pc3Npb25VcmwgPSBiYWNrZW5kVXJsLnN1YnN0cmluZygwLCBiYWNrZW5kVXJsLmluZGV4T2YoJy93cC1qc29uJykpO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcbiAgICBheGlvc1xuICAgICAgLnBvc3QoYCR7Z2ZTdWJtaXNzaW9uVXJsfS93cC1qc29uL2dmL3YyL2Zvcm1zLyR7Zm9ybUlEfS9zdWJtaXNzaW9uc2AsIGRhdGEpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5pc192YWxpZCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICAgICAgICBzdWJtaXRTdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlybWF0aW9uTWVzc2FnZTogcmVzcG9uc2UuZGF0YS5jb25maXJtYXRpb25fbWVzc2FnZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvQ29uZmlybWF0aW9uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Ym1pdEZhaWxlZDogdHJ1ZSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZXM6ICdTb21ldGhpbmcgd2VudCB3cm9uZycsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgICAgIHN1Ym1pdEZhaWxlZDogdHJ1ZSxcbiAgICAgICAgICBlcnJvck1lc3NhZ2VzOiBlcnJvci5yZXNwb25zZS5kYXRhLnZhbGlkYXRpb25fbWVzc2FnZXMsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgbmV4dFN0ZXAgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCduZXh0IHN0ZXAnKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBhY3RpdmVQYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlUGFnZTogYWN0aXZlUGFnZSArIDEsXG4gICAgfSk7XG4gIH07XG5cbiAgcHJldlN0ZXAgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IGFjdGl2ZVBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVQYWdlOiBhY3RpdmVQYWdlIC0gMSxcbiAgICB9KTtcbiAgfTtcblxuICBjaGVja0NvbmRpdGlvbmFsTG9naWMgPSAoY29uZGl0aW9uLCBmaWVsZHMgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IHsgcnVsZXMsIGFjdGlvblR5cGUgfSA9IGNvbmRpdGlvbjtcbiAgICBpZiAoIXJ1bGVzKSByZXR1cm4gdHJ1ZTtcblxuICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSBmaWVsZHMgfHwgdGhpcy5zdGF0ZS5mb3JtVmFsdWVzO1xuXG4gICAgLy8gc2hvdyBvbmx5IGlmIGlzIHNlbGVjdGVkIFwiQWxsIGZpZWxkc1wiIChpdCBzaG91bGQgYmUgdHdlYWtlZCBpbiBmdXR1cmUpXG4gICAgLy8gd29ya3Mgb25seSBcInNob3cvaGlkZSB3aGVuIGZpZWxkIGlzIGVxdWFsIHRvXCJcbiAgICBsZXQgaGlkZUZpZWxkID0gYWN0aW9uVHlwZSAhPT0gJ2hpZGUnO1xuICAgIGNvbnN0IGhpZGVCYXNlZE9uUnVsZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB7IGZpZWxkSWQsIHZhbHVlIH0gPSBydWxlc1tpXTtcbiAgICAgIGNvbnN0IGNvbmRpdGlvbkZpZWxkVmFsdWUgPSBmb3JtVmFsdWVzW2ZpZWxkSWRdLnZhbHVlO1xuXG4gICAgICBjb25zdCBzdHJpbmdWYWx1ZSA9IEFycmF5LmlzQXJyYXkoY29uZGl0aW9uRmllbGRWYWx1ZSlcbiAgICAgICAgPyBjb25kaXRpb25GaWVsZFZhbHVlLmpvaW4oJycpXG4gICAgICAgIDogY29uZGl0aW9uRmllbGRWYWx1ZTtcbiAgICAgIGlmIChzdHJpbmdWYWx1ZSAmJiB2YWx1ZSA9PT0gc3RyaW5nVmFsdWUpIHtcbiAgICAgICAgaGlkZUJhc2VkT25SdWxlc1tpXSA9IGFjdGlvblR5cGUgPT09ICdoaWRlJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhpZGVCYXNlZE9uUnVsZXNbaV0gPSBhY3Rpb25UeXBlICE9PSAnaGlkZSc7XG4gICAgICB9XG4gICAgfVxuICAgIGhpZGVGaWVsZCA9IGhpZGVCYXNlZE9uUnVsZXMuZXZlcnkoaSA9PiBpID09PSB0cnVlKTtcbiAgICAvLyBmb3JtVmFsdWVzW2lkXS5oaWRlRmllbGQgPSBoaWRlRmllbGQ7XG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGZvcm1WYWx1ZXMgfSk7XG4gICAgcmV0dXJuIGhpZGVGaWVsZDtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZm9ybURhdGEsXG4gICAgICBmb3JtVmFsdWVzLFxuICAgICAgc3VibWl0RmFpbGVkLFxuICAgICAgc3VibWl0U3VjY2VzcyxcbiAgICAgIHRvdWNoZWQsXG4gICAgICBzdWJtaXR0aW5nLFxuICAgICAgYWN0aXZlUGFnZSxcbiAgICAgIGlzTXVsdGlwYXJ0LFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlLCBzdWJtaXRJY29uLCBzYXZlU3RhdGVUb0h0bWxGaWVsZCwgc3R5bGVkQ29tcG9uZW50cyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IEJ1dHRvbiwgTG9hZGluZywgR0ZXcmFwcGVyID0gJ2RpdicgfSA9IHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG5cbiAgICBjb25zdCB7IGNzc0NsYXNzIH0gPSBmb3JtRGF0YTtcblxuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBPYmplY3Qua2V5cyhmb3JtVmFsdWVzKS5zb21lKFxuICAgICAgeCA9PiAhZm9ybVZhbHVlc1t4XS5oaWRlRmllbGQgJiYgZm9ybVZhbHVlc1t4XS52YWxpZCxcbiAgICApO1xuICAgIGNvbnN0IGlzTmV4dERpc2FibGVkID0gYWN0aXZlUGFnZVxuICAgICAgPyBPYmplY3Qua2V5cyhmb3JtVmFsdWVzKS5zb21lKFxuICAgICAgICB4ID0+IGZvcm1WYWx1ZXNbeF0ucGFnZU51bWJlciA9PT0gYWN0aXZlUGFnZVxuICAgICAgICAgICYmICFmb3JtVmFsdWVzW3hdLmhpZGVGaWVsZFxuICAgICAgICAgICYmIGZvcm1WYWx1ZXNbeF0udmFsaWQsXG4gICAgICApXG4gICAgICA6IGZhbHNlO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGFzPXtHRldyYXBwZXJ9XG4gICAgICAgIHJlZj17KGVsKSA9PiAodGhpcy53cmFwcGVyUmVmID0gZWwpfVxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXdyYXBwZXJcIlxuICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdyZWFsdGl2ZScgfX1cbiAgICAgICAgaWQ9e2BncmF2aXR5X2Zvcm1fJHt0aGlzLnByb3BzLmZvcm1JRH1gfVxuICAgICAgPlxuICAgICAgICB7Zm9ybURhdGEudGl0bGUgPyBudWxsIDogTG9hZGluZyAmJiA8TG9hZGluZyBpc0xvYWRpbmcgLz59XG5cbiAgICAgICAge3N1Ym1pdEZhaWxlZCAmJiAhc3VibWl0U3VjY2VzcyAmJiAoXG4gICAgICAgICAgPEZvcm1FcnJvclxuICAgICAgICAgICAgZmllbGRzPXtmb3JtVmFsdWVzfVxuICAgICAgICAgICAgZXJyb3JzPXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZXN9XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U9XCJUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggeW91ciBzdWJtaXNzaW9uXCJcbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHtzdWJtaXRTdWNjZXNzICYmIHRoaXMuc3RhdGUuY29uZmlybWF0aW9uTWVzc2FnZSAmJiAoXG4gICAgICAgICAgPEZvcm1Db25maXJtYXRpb24gY29uZmlybWF0aW9uPXt0aGlzLnN0YXRlLmNvbmZpcm1hdGlvbk1lc3NhZ2V9IC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgeyFzdWJtaXRTdWNjZXNzICYmIGZvcm1EYXRhLmZpZWxkcyA/IChcbiAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgb25TdWJtaXQ9e2UgPT4gdGhpcy5vblN1Ym1pdChlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzQ2xhc3N9XG4gICAgICAgICAgICBlbmNUeXBlPXtpc011bHRpcGFydCA/ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIG5vVmFsaWRhdGVcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7KGZvcm1EYXRhLnRpdGxlIHx8IGZvcm1EYXRhLmRlc2NyaXB0aW9uKSAmJiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2Zvcm1EYXRhLnRpdGxlICYmIHRpdGxlID8gPGgzIGNsYXNzTmFtZT1cImZvcm0tdGl0bGVcIj57Zm9ybURhdGEudGl0bGV9PC9oMz4gOiBudWxsfVxuICAgICAgICAgICAgICAgIHtmb3JtRGF0YS5kZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm0tZGVzY3JpcHRpb25cIj57Zm9ybURhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxSZW5kZXJGaWVsZHNcbiAgICAgICAgICAgICAgICBzdHlsZWRDb21wb25lbnRzPXtzdHlsZWRDb21wb25lbnRzfVxuICAgICAgICAgICAgICAgIGZpZWxkcz17Zm9ybURhdGEuZmllbGRzfVxuICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXM9e2Zvcm1WYWx1ZXN9XG4gICAgICAgICAgICAgICAgc3VibWl0RmFpbGVkPXtzdWJtaXRGYWlsZWR9XG4gICAgICAgICAgICAgICAgc3VibWl0U3VjY2Vzcz17c3VibWl0U3VjY2Vzc31cbiAgICAgICAgICAgICAgICB1cGRhdGVGb3JtPXt0aGlzLnVwZGF0ZUZvcm1IYW5kbGVyfVxuICAgICAgICAgICAgICAgIHRvdWNoZWQ9e3RvdWNoZWR9XG4gICAgICAgICAgICAgICAgc2V0VG91Y2hlZD17dGhpcy5zZXRUb3VjaGVkfVxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e2Zvcm1EYXRhLnBhZ2luYXRpb259XG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZT17YWN0aXZlUGFnZX1cbiAgICAgICAgICAgICAgICBwcmV2U3RlcD17dGhpcy5wcmV2U3RlcH1cbiAgICAgICAgICAgICAgICBuZXh0U3RlcD17dGhpcy5uZXh0U3RlcH1cbiAgICAgICAgICAgICAgICBpc05leHREaXNhYmxlZD17aXNOZXh0RGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgY2hlY2tDb25kaXRpb25hbExvZ2ljPXt0aGlzLmNoZWNrQ29uZGl0aW9uYWxMb2dpY31cbiAgICAgICAgICAgICAgICBzYXZlU3RhdGVUb0h0bWxGaWVsZD17c2F2ZVN0YXRlVG9IdG1sRmllbGR9XG4gICAgICAgICAgICAgICAgZW5hYmxlSG9uZXlwb3Q9e2Zvcm1EYXRhLmVuYWJsZUhvbmV5cG90fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7KCFmb3JtRGF0YS5wYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgfHwgKGZvcm1EYXRhLnBhZ2luYXRpb24gJiYgZm9ybURhdGEucGFnaW5hdGlvbi5wYWdlcy5sZW5ndGggPT09IGFjdGl2ZVBhZ2UpKSAmJiAoXG4gICAgICAgICAgICAgICAgPFN1Ym1pdFxuICAgICAgICAgICAgICAgICAgQnV0dG9uPXtCdXR0b259XG4gICAgICAgICAgICAgICAgICBMb2FkaW5nPXtMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgZm9ybURhdGE9e2Zvcm1EYXRhfVxuICAgICAgICAgICAgICAgICAgc3VibWl0SWNvbj17c3VibWl0SWNvbn1cbiAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e2lzRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICBzdWJtaXR0aW5nPXtzdWJtaXR0aW5nfVxuICAgICAgICAgICAgICAgICAgcHJldlN0ZXA9e3RoaXMucHJldlN0ZXB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAnJ1xuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5HcmF2aXR5Rm9ybS5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiB0cnVlLFxuICBzdWJtaXRJY29uOiBmYWxzZSxcbiAgc2F2ZVN0YXRlVG9IdG1sRmllbGQ6IGZhbHNlLFxufTtcblxuZXhwb3J0IHsgdmFsaWRhdGVGaWVsZCwgRm9ybUNvbmZpcm1hdGlvbiwgRm9ybUVycm9yLCBSZW5kZXJGaWVsZHMsIFN1Ym1pdCB9O1xuXG5leHBvcnQgZGVmYXVsdCBHcmF2aXR5Rm9ybTtcbiJdfQ==
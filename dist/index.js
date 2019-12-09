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

    _defineProperty(_assertThisInitialized(_this), "unsetError", function (id) {
      var errorMessages = _this.state.errorMessages;
      if (!errorMessages) return;

      if (errorMessages[id]) {
        delete errorMessages[id];

        _this.setState({
          errorMessages: errorMessages
        });
      }
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

      if (field.type === "checkbox") {
        var values = _toConsumableArray(formValues[field.id].value);

        var index = values.indexOf(event.target.value);

        if (index > -1) {
          values.splice(index, 1);
        } else {
          values.push(event.target.value);
        }

        value = values;
      } else if (field.type == "date") {
        var subId = field.subId,
            dateLabel = field.dateLabel;

        var _values = _toConsumableArray(formValues[field.id].value);

        _values[subId] = {
          val: event.target.value,
          label: dateLabel
        };
        value = _values;
      } else if (field.type == "consent") {
        value = event.target ? event.target.checked : "null";
      } else if (field.type === "password") {
        var _subId = field.subId;

        var _values2 = formValues[field.id] && formValues[field.id].value ? _toConsumableArray(formValues[field.id].value) : [];

        _values2[_subId] = {
          val: event.target.value
        };
        value = _values2;
      } else {
        value = event.target ? event.target.value : "null";
      } // if field is IBAN


      if (type === "text" && field.cssClass.indexOf("iban") > -1) {
        type = "iban";
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
              formValues[_id].value = "";
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
                gfSubmissionUrl = backendUrl.substring(0, backendUrl.indexOf("/wp-json"));
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
                      errorMessages: "Something went wrong"
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

      var hideField = actionType !== "hide";
      var hideBasedOnRules = [];

      for (var i = 0; i < rules.length; i++) {
        var _rules$i = rules[i],
            fieldId = _rules$i.fieldId,
            value = _rules$i.value;
        var conditionFieldValue = formValues[fieldId].value;
        var stringValue = Array.isArray(conditionFieldValue) ? conditionFieldValue.join("") : conditionFieldValue;

        if (stringValue && value === stringValue) {
          hideBasedOnRules[i] = actionType === "hide";
        } else {
          hideBasedOnRules[i] = actionType !== "hide";
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

                  if (field.type === "checkbox") {
                    value = field.choices.filter(function (choice) {
                      return hasPopulation ? choice.value === populatedFields[field.inputName] : choice.isSelected;
                    }).map(function (choice) {
                      return choice.value;
                    });
                  } else if (field.type === "radio") {
                    if (hasPopulation) {
                      value = populatedFields[field.inputName];
                    } else {
                      var preselected = field.choices.find(function (choice) {
                        return choice.isSelected;
                      });
                      value = preselected ? preselected.value : "";
                    }
                  } else if (field.type === "select") {
                    var selectedOption = field.choices.filter(function (choice) {
                      return hasPopulation ? choice.value === populatedFields[field.inputName] : choice.isSelected;
                    }).map(function (item) {
                      return {
                        value: item.value,
                        label: item.text
                      };
                    });
                    value = selectedOption && selectedOption.length > 0 ? selectedOption[0] : "";
                  } else {
                    value = hasPopulation ? populatedFields[field.inputName] : field.defaultValue;

                    if (field.type === "fileupload") {
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
          styledComponents = _this$props3.styledComponents,
          customComponents = _this$props3.customComponents,
          errorMessage = _this$props3.errorMessage;

      var _ref2 = styledComponents || false,
          Button = _ref2.Button,
          Loading = _ref2.Loading,
          _ref2$GFWrapper = _ref2.GFWrapper,
          GFWrapper = _ref2$GFWrapper === void 0 ? "div" : _ref2$GFWrapper,
          SFormError = _ref2.FormError;

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
          position: "relative"
        },
        id: "gravity_form_".concat(this.props.formID)
      }, formData.title ? null : Loading && _react["default"].createElement(Loading, {
        isLoading: true
      }), submitFailed && !submitSuccess && _react["default"].createElement(_FormError["default"], {
        SFormError: SFormError || false,
        errorMessage: errorMessage || "There was a problem with your submission"
      }), submitSuccess && this.state.confirmationMessage && _react["default"].createElement(_FormConfirmation["default"], {
        confirmation: this.state.confirmationMessage
      }), !submitSuccess && formData.fields ? _react["default"].createElement("form", {
        onSubmit: function onSubmit(e) {
          return _this2.onSubmit(e);
        },
        className: cssClass,
        encType: isMultipart ? "multipart/form-data" : undefined,
        noValidate: true
      }, (formData.title || formData.description) && _react["default"].createElement("div", null, formData.title && title ? _react["default"].createElement("h3", {
        className: "form-title"
      }, formData.title) : null, formData.description ? _react["default"].createElement("p", {
        className: "form-description"
      }, formData.description) : null), _react["default"].createElement("div", {
        className: "form-wrapper"
      }, _react["default"].createElement(_RenderFields["default"], {
        styledComponents: styledComponents,
        customComponents: customComponents,
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
        enableHoneypot: formData.enableHoneypot,
        errors: this.state.errorMessages,
        unsetError: this.unsetError
      }), (!formData.pagination || formData.pagination && formData.pagination.pages.length === activePage) && _react["default"].createElement(_Submit["default"], {
        Button: Button,
        Loading: Loading,
        formData: formData,
        submitIcon: submitIcon,
        isDisabled: isDisabled,
        submitting: submitting,
        prevStep: this.prevStep
      }))) : "");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHcmF2aXR5Rm9ybSIsInByb3BzIiwiaWQiLCJzZXRTdGF0ZSIsInRvdWNoZWQiLCJzdGF0ZSIsImVycm9yTWVzc2FnZXMiLCJldmVudCIsImZpZWxkIiwiZm9ybVZhbHVlcyIsImNvbmRpdGlvYW5sSWRzIiwiY29uZGl0aW9uRmllbGRzIiwidHlwZSIsImlzUmVxdWlyZWQiLCJ2YWx1ZSIsInZhbHVlcyIsImluZGV4IiwiaW5kZXhPZiIsInRhcmdldCIsInNwbGljZSIsInB1c2giLCJzdWJJZCIsImRhdGVMYWJlbCIsInZhbCIsImxhYmVsIiwiY2hlY2tlZCIsImNzc0NsYXNzIiwidmFsaWQiLCJpIiwibGVuZ3RoIiwiaGlkZSIsImNoZWNrQ29uZGl0aW9uYWxMb2dpYyIsImNvbmRpdGlvbmFsTG9naWMiLCJoaWRlRmllbGQiLCJwYWdlTnVtYmVyIiwib25DaGFuZ2UiLCJyZWN0Iiwid3JhcHBlclJlZiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpbmRvdyIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUbyIsInRvcCIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0dGluZyIsInN1Ym1pdFN1Y2Nlc3MiLCJzdWJtaXRGYWlsZWQiLCJjb25maXJtYXRpb25NZXNzYWdlIiwiZm9ybUlEIiwiYmFja2VuZFVybCIsImdmU3VibWlzc2lvblVybCIsInN1YnN0cmluZyIsImRhdGEiLCJGb3JtRGF0YSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImlzX3ZhbGlkIiwiY29uZmlybWF0aW9uX21lc3NhZ2UiLCJzY3JvbGxUb0NvbmZpcm1hdGlvbiIsImVycm9yIiwidmFsaWRhdGlvbl9tZXNzYWdlcyIsImUiLCJhY3RpdmVQYWdlIiwiY29uZGl0aW9uIiwiZmllbGRzIiwicnVsZXMiLCJhY3Rpb25UeXBlIiwiaGlkZUJhc2VkT25SdWxlcyIsImZpZWxkSWQiLCJjb25kaXRpb25GaWVsZFZhbHVlIiwic3RyaW5nVmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJqb2luIiwiZXZlcnkiLCJsb2FkaW5nIiwiaXNWYWxpZCIsImZvcm1EYXRhIiwiaXNNdWx0aXBhcnQiLCJwb3B1bGF0ZWRGaWVsZHMiLCJfaXNNb3VudGVkIiwiZ2V0IiwiZm9ybSIsImhhc1BvcHVsYXRpb24iLCJpbnB1dE5hbWUiLCJjaG9pY2VzIiwiZmlsdGVyIiwiY2hvaWNlIiwiaXNTZWxlY3RlZCIsIm1hcCIsInByZXNlbGVjdGVkIiwiZmluZCIsInNlbGVjdGVkT3B0aW9uIiwiaXRlbSIsInRleHQiLCJkZWZhdWx0VmFsdWUiLCJ0bXBGaWVsZCIsImlkcyIsInBhcnNlSW50IiwicGFnaW5hdGlvbiIsInRpdGxlIiwic3VibWl0SWNvbiIsInNhdmVTdGF0ZVRvSHRtbEZpZWxkIiwic3R5bGVkQ29tcG9uZW50cyIsImN1c3RvbUNvbXBvbmVudHMiLCJlcnJvck1lc3NhZ2UiLCJCdXR0b24iLCJMb2FkaW5nIiwiR0ZXcmFwcGVyIiwiU0Zvcm1FcnJvciIsIkZvcm1FcnJvciIsImlzRGlzYWJsZWQiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsIngiLCJpc05leHREaXNhYmxlZCIsImVsIiwicG9zaXRpb24iLCJvblN1Ym1pdCIsInVuZGVmaW5lZCIsImRlc2NyaXB0aW9uIiwidXBkYXRlRm9ybUhhbmRsZXIiLCJzZXRUb3VjaGVkIiwicHJldlN0ZXAiLCJuZXh0U3RlcCIsImVuYWJsZUhvbmV5cG90IiwidW5zZXRFcnJvciIsInBhZ2VzIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxXOzs7OztBQUNKLHVCQUFZQyxLQUFa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QUFNLEVBQUU0QyxNQURWO0FBRUUsUUFBQSxPQUFPLEVBQUVDLE9BRlg7QUFHRSxRQUFBLFFBQVEsRUFBRTlCLFFBSFo7QUFJRSxRQUFBLFVBQVUsRUFBRXdCLFVBSmQ7QUFLRSxRQUFBLFVBQVUsRUFBRVUsVUFMZDtBQU1FLFFBQUEsVUFBVSxFQUFFckUsVUFOZDtBQU9FLFFBQUEsUUFBUSxFQUFFLEtBQUtrRjtBQVBqQixRQXpCSixDQWpCRixDQURELEdBd0RDLEVBN0VKLENBREY7QUFrRkQ7Ozs7RUF0Y3VCSyxnQjs7QUF5YzFCdEksV0FBVyxDQUFDdUksWUFBWixHQUEyQjtBQUN6QjlCLEVBQUFBLEtBQUssRUFBRSxJQURrQjtBQUV6QkMsRUFBQUEsVUFBVSxFQUFFLEtBRmE7QUFHekJDLEVBQUFBLG9CQUFvQixFQUFFO0FBSEcsQ0FBM0I7ZUFRZTNHLFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVuZGVyRmllbGRzIGZyb20gXCIuL0Zvcm1FbGVtZW50cy9SZW5kZXJGaWVsZHNcIjtcbmltcG9ydCBGb3JtRXJyb3IgZnJvbSBcIi4vRm9ybUVsZW1lbnRzL0Zvcm1FcnJvclwiO1xuaW1wb3J0IEZvcm1Db25maXJtYXRpb24gZnJvbSBcIi4vRm9ybUVsZW1lbnRzL0Zvcm1Db25maXJtYXRpb25cIjtcbmltcG9ydCB7IHZhbGlkYXRlRmllbGQgfSBmcm9tIFwiLi9IZWxwZXJzL3ZhbGlkYXRpb25cIjtcbmltcG9ydCBTdWJtaXQgZnJvbSBcIi4vRm9ybUVsZW1lbnRzL1N1Ym1pdFwiO1xuXG5jbGFzcyBHcmF2aXR5Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdWJtaXRGYWlsZWQ6IGZhbHNlLFxuICAgICAgZXJyb3JNZXNzYWdlczogZmFsc2UsXG4gICAgICBmb3JtVmFsdWVzOiB7fSxcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgIHN1Ym1pdFN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgY29uZmlybWF0aW9uTWVzc2FnZTogZmFsc2UsXG4gICAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICAgIGZvcm1EYXRhOiB7fSxcbiAgICAgIHRvdWNoZWQ6IHt9LFxuICAgICAgYWN0aXZlUGFnZTogZmFsc2UsXG4gICAgICBjb25kaXRpb25GaWVsZHM6IHt9LFxuICAgICAgY29uZGl0aW9hbmxJZHM6IHt9LFxuICAgICAgaXNNdWx0aXBhcnQ6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZm9ybUlELCBiYWNrZW5kVXJsLCBwb3B1bGF0ZWRGaWVsZHMgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICBsZXQgaXNNdWx0aXBhcnQgPSBmYWxzZTtcbiAgICBjb25zdCBmb3JtID0gYXdhaXQgYXhpb3NcbiAgICAgIC5nZXQoYCR7YmFja2VuZFVybH0vJHtmb3JtSUR9YClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXG4gICAgICAuY2F0Y2goKCkgPT4gZmFsc2UpO1xuXG4gICAgaWYgKGZvcm0gJiYgdGhpcy5faXNNb3VudGVkKSB7XG4gICAgICBjb25zdCBmb3JtVmFsdWVzID0ge307XG4gICAgICBjb25zdCBjb25kaXRpb25GaWVsZHMgPSBbXTtcbiAgICAgIGNvbnN0IGNvbmRpdGlvYW5sSWRzID0gW107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgZm9ybS5maWVsZHMpIHtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBjb25zdCBoYXNQb3B1bGF0aW9uID1cbiAgICAgICAgICBmaWVsZC5pbnB1dE5hbWUgJiZcbiAgICAgICAgICBwb3B1bGF0ZWRGaWVsZHMgJiZcbiAgICAgICAgICBwb3B1bGF0ZWRGaWVsZHNbZmllbGQuaW5wdXROYW1lXTtcbiAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuICAgICAgICAgIHZhbHVlID0gZmllbGQuY2hvaWNlc1xuICAgICAgICAgICAgLmZpbHRlcihjaG9pY2UgPT5cbiAgICAgICAgICAgICAgaGFzUG9wdWxhdGlvblxuICAgICAgICAgICAgICAgID8gY2hvaWNlLnZhbHVlID09PSBwb3B1bGF0ZWRGaWVsZHNbZmllbGQuaW5wdXROYW1lXVxuICAgICAgICAgICAgICAgIDogY2hvaWNlLmlzU2VsZWN0ZWRcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5tYXAoY2hvaWNlID0+IGNob2ljZS52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gXCJyYWRpb1wiKSB7XG4gICAgICAgICAgaWYgKGhhc1BvcHVsYXRpb24pIHtcbiAgICAgICAgICAgIHZhbHVlID0gcG9wdWxhdGVkRmllbGRzW2ZpZWxkLmlucHV0TmFtZV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHByZXNlbGVjdGVkID0gZmllbGQuY2hvaWNlcy5maW5kKGNob2ljZSA9PiBjaG9pY2UuaXNTZWxlY3RlZCk7XG4gICAgICAgICAgICB2YWx1ZSA9IHByZXNlbGVjdGVkID8gcHJlc2VsZWN0ZWQudmFsdWUgOiBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBmaWVsZC5jaG9pY2VzXG4gICAgICAgICAgICAuZmlsdGVyKGNob2ljZSA9PlxuICAgICAgICAgICAgICBoYXNQb3B1bGF0aW9uXG4gICAgICAgICAgICAgICAgPyBjaG9pY2UudmFsdWUgPT09IHBvcHVsYXRlZEZpZWxkc1tmaWVsZC5pbnB1dE5hbWVdXG4gICAgICAgICAgICAgICAgOiBjaG9pY2UuaXNTZWxlY3RlZFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLm1hcChpdGVtID0+ICh7IHZhbHVlOiBpdGVtLnZhbHVlLCBsYWJlbDogaXRlbS50ZXh0IH0pKTtcbiAgICAgICAgICB2YWx1ZSA9XG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbiAmJiBzZWxlY3RlZE9wdGlvbi5sZW5ndGggPiAwXG4gICAgICAgICAgICAgID8gc2VsZWN0ZWRPcHRpb25bMF1cbiAgICAgICAgICAgICAgOiBcIlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gaGFzUG9wdWxhdGlvblxuICAgICAgICAgICAgPyBwb3B1bGF0ZWRGaWVsZHNbZmllbGQuaW5wdXROYW1lXVxuICAgICAgICAgICAgOiBmaWVsZC5kZWZhdWx0VmFsdWU7XG4gICAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09IFwiZmlsZXVwbG9hZFwiKSB7XG4gICAgICAgICAgICBpc011bHRpcGFydCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ3JhYiBhbGwgY29uZGl0aW9uYWwgbG9naWMgZmllbGRzXG4gICAgICAgIGlmIChmaWVsZC5jb25kaXRpb25hbExvZ2ljKSB7XG4gICAgICAgICAgY29uc3QgdG1wRmllbGQgPSB7XG4gICAgICAgICAgICBpZDogZmllbGQuaWQsXG4gICAgICAgICAgICBjb25kaXRpb25hbExvZ2ljOiBmaWVsZC5jb25kaXRpb25hbExvZ2ljXG4gICAgICAgICAgfTtcbiAgICAgICAgICBjb25zdCBpZHMgPSBmaWVsZC5jb25kaXRpb25hbExvZ2ljLnJ1bGVzLm1hcChpdGVtID0+IGl0ZW0uZmllbGRJZCk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQoaWRzW2ldKTtcbiAgICAgICAgICAgIGlmIChjb25kaXRpb2FubElkcy5pbmRleE9mKGlkKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgY29uZGl0aW9hbmxJZHMucHVzaChpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbmRpdGlvbkZpZWxkcy5wdXNoKHRtcEZpZWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1WYWx1ZXNbZmllbGQuaWRdID0ge1xuICAgICAgICAgIHZhbGlkOiB2YWxpZGF0ZUZpZWxkKHZhbHVlLCBmaWVsZCksXG4gICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgbGFiZWw6IGZpZWxkLmxhYmVsLFxuICAgICAgICAgIHBhZ2VOdW1iZXI6IGZpZWxkLnBhZ2VOdW1iZXIsXG4gICAgICAgICAgY3NzQ2xhc3M6IGZpZWxkLmNzc0NsYXNzLFxuICAgICAgICAgIGlzUmVxdWlyZWQ6IGZpZWxkLmlzUmVxdWlyZWRcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8vIGNoZWNrIGNvbmRpdGlvbiBsb2dpY1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25kaXRpb25GaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9ybVZhbHVlc1tcbiAgICAgICAgICBjb25kaXRpb25GaWVsZHNbaV0uaWRcbiAgICAgICAgXS5oaWRlRmllbGQgPSB0aGlzLmNoZWNrQ29uZGl0aW9uYWxMb2dpYyhcbiAgICAgICAgICBjb25kaXRpb25GaWVsZHNbaV0uY29uZGl0aW9uYWxMb2dpYyxcbiAgICAgICAgICBmb3JtVmFsdWVzXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb3JtRGF0YTogZm9ybSxcbiAgICAgICAgZm9ybVZhbHVlcyxcbiAgICAgICAgYWN0aXZlUGFnZTogZm9ybS5wYWdpbmF0aW9uID8gMSA6IGZhbHNlLFxuICAgICAgICBjb25kaXRpb25GaWVsZHMsXG4gICAgICAgIGNvbmRpdGlvYW5sSWRzLFxuICAgICAgICBpc011bHRpcGFydFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gIH1cblxuICBzZXRUb3VjaGVkID0gaWQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdG91Y2hlZDogeyAuLi50aGlzLnN0YXRlLnRvdWNoZWQsIFtpZF06IHRydWUgfVxuICAgIH0pO1xuICB9O1xuXG4gIHVuc2V0RXJyb3IgPSBpZCA9PiB7XG4gICAgY29uc3QgeyBlcnJvck1lc3NhZ2VzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICghZXJyb3JNZXNzYWdlcykgcmV0dXJuO1xuXG4gICAgaWYgKGVycm9yTWVzc2FnZXNbaWRdKSB7XG4gICAgICBkZWxldGUgZXJyb3JNZXNzYWdlc1tpZF07XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlcyB9KTtcbiAgICB9XG4gIH07XG5cbiAgdXBkYXRlRm9ybUhhbmRsZXIgPSAoZXZlbnQsIGZpZWxkKSA9PiB7XG4gICAgY29uc3QgeyBmb3JtVmFsdWVzLCBjb25kaXRpb2FubElkcywgY29uZGl0aW9uRmllbGRzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCB7IGlkLCB0eXBlLCBpc1JlcXVpcmVkIH0gPSBmaWVsZDtcbiAgICAvLyBTZXQgbmV3IHZhbHVlXG4gICAgbGV0IHZhbHVlO1xuICAgIGlmIChmaWVsZC50eXBlID09PSBcImNoZWNrYm94XCIpIHtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IFsuLi5mb3JtVmFsdWVzW2ZpZWxkLmlkXS52YWx1ZV07XG4gICAgICBjb25zdCBpbmRleCA9IHZhbHVlcy5pbmRleE9mKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICB2YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlcy5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICB9XG4gICAgICB2YWx1ZSA9IHZhbHVlcztcbiAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT0gXCJkYXRlXCIpIHtcbiAgICAgIGNvbnN0IHsgc3ViSWQsIGRhdGVMYWJlbCB9ID0gZmllbGQ7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBbLi4uZm9ybVZhbHVlc1tmaWVsZC5pZF0udmFsdWVdO1xuICAgICAgdmFsdWVzW3N1YklkXSA9IHtcbiAgICAgICAgdmFsOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICAgIGxhYmVsOiBkYXRlTGFiZWxcbiAgICAgIH07XG4gICAgICB2YWx1ZSA9IHZhbHVlcztcbiAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT0gXCJjb25zZW50XCIpIHtcbiAgICAgIHZhbHVlID0gZXZlbnQudGFyZ2V0ID8gZXZlbnQudGFyZ2V0LmNoZWNrZWQgOiBcIm51bGxcIjtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09IFwicGFzc3dvcmRcIikge1xuICAgICAgY29uc3QgeyBzdWJJZCB9ID0gZmllbGQ7XG4gICAgICBjb25zdCB2YWx1ZXMgPVxuICAgICAgICBmb3JtVmFsdWVzW2ZpZWxkLmlkXSAmJiBmb3JtVmFsdWVzW2ZpZWxkLmlkXS52YWx1ZVxuICAgICAgICAgID8gWy4uLmZvcm1WYWx1ZXNbZmllbGQuaWRdLnZhbHVlXVxuICAgICAgICAgIDogW107XG4gICAgICB2YWx1ZXNbc3ViSWRdID0ge1xuICAgICAgICB2YWw6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfTtcbiAgICAgIHZhbHVlID0gdmFsdWVzO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldCA/IGV2ZW50LnRhcmdldC52YWx1ZSA6IFwibnVsbFwiO1xuICAgIH1cbiAgICAvLyBpZiBmaWVsZCBpcyBJQkFOXG4gICAgaWYgKHR5cGUgPT09IFwidGV4dFwiICYmIGZpZWxkLmNzc0NsYXNzLmluZGV4T2YoXCJpYmFuXCIpID4gLTEpIHtcbiAgICAgIHR5cGUgPSBcImliYW5cIjtcbiAgICB9XG5cbiAgICAvLyBWYWxpZGF0ZSBmaWVsZFxuICAgIGNvbnN0IHZhbGlkID0gdmFsaWRhdGVGaWVsZCh2YWx1ZSwgZmllbGQpO1xuXG4gICAgLy8gaWYgZmllbGQgSUQgaXMgc29tZXdoZXJlIGluIGNvbmRpdGlvbmFsIGZpZWxkc1xuICAgIC8vIHJlY2FsY3VsYXRlIGFsbCBjb25kaXRpb25zXG4gICAgaWYgKGNvbmRpdGlvYW5sSWRzLmluZGV4T2YoaWQpICE9PSAtMSkge1xuICAgICAgZm9ybVZhbHVlc1tpZF0udmFsdWUgPSB2YWx1ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZGl0aW9uRmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IGNvbmRpdGlvbkZpZWxkc1tpXTtcbiAgICAgICAgY29uc3QgaGlkZSA9IHRoaXMuY2hlY2tDb25kaXRpb25hbExvZ2ljKFxuICAgICAgICAgIGNvbmRpdGlvbkZpZWxkc1tpXS5jb25kaXRpb25hbExvZ2ljLFxuICAgICAgICAgIGZvcm1WYWx1ZXNcbiAgICAgICAgKTtcbiAgICAgICAgZm9ybVZhbHVlc1tpZF0uaGlkZUZpZWxkID0gaGlkZTtcbiAgICAgICAgaWYgKGhpZGUpIHtcbiAgICAgICAgICBpZiAoZm9ybVZhbHVlc1tpZF0uaXNSZXF1aXJlZCAmJiBoaWRlKSB7XG4gICAgICAgICAgICBmb3JtVmFsdWVzW2lkXS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvcm1WYWx1ZXNbaWRdLnZhbGlkID0gISFmb3JtVmFsdWVzW2lkXS5pc1JlcXVpcmVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgZm9ybVZhbHVlczoge1xuICAgICAgICAgIC4uLmZvcm1WYWx1ZXMsXG4gICAgICAgICAgW2lkXToge1xuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIHZhbGlkLFxuICAgICAgICAgICAgbGFiZWw6IGZpZWxkLmxhYmVsLFxuICAgICAgICAgICAgcGFnZU51bWJlcjogZmllbGQucGFnZU51bWJlcixcbiAgICAgICAgICAgIGNzc0NsYXNzOiBmaWVsZC5jc3NDbGFzcyxcbiAgICAgICAgICAgIGlzUmVxdWlyZWQ6IGZpZWxkLmlzUmVxdWlyZWRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIC8vIHBhc3Mgc3RhdGUgdG8gcGFyZW50IGNvbXBvbmVudFxuICAgICAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZSh0aGlzLnN0YXRlLmZvcm1WYWx1ZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfTtcblxuICBzY3JvbGxUb0NvbmZpcm1hdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy53cmFwcGVyUmVmXG4gICAgICA/IHRoaXMud3JhcHBlclJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgOiBmYWxzZTtcbiAgICBpZiAocmVjdCAmJiB3aW5kb3cpIHtcbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9XG4gICAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiBzY3JvbGxUb3AgKyByZWN0LnRvcCAtIDEwMFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIG9uU3VibWl0ID0gYXN5bmMgZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdWJtaXR0aW5nOiB0cnVlLFxuICAgICAgc3VibWl0U3VjY2VzczogZmFsc2UsXG4gICAgICBzdWJtaXRGYWlsZWQ6IGZhbHNlLFxuICAgICAgY29uZmlybWF0aW9uTWVzc2FnZTogZmFsc2UsXG4gICAgICBlcnJvck1lc3NhZ2VzOiBmYWxzZVxuICAgIH0pO1xuICAgIGNvbnN0IHsgZm9ybUlELCBiYWNrZW5kVXJsIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGdmU3VibWlzc2lvblVybCA9IGJhY2tlbmRVcmwuc3Vic3RyaW5nKFxuICAgICAgMCxcbiAgICAgIGJhY2tlbmRVcmwuaW5kZXhPZihcIi93cC1qc29uXCIpXG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KFxuICAgICAgICBgJHtnZlN1Ym1pc3Npb25Vcmx9L3dwLWpzb24vZ2YvdjIvZm9ybXMvJHtmb3JtSUR9L3N1Ym1pc3Npb25zYCxcbiAgICAgICAgZGF0YVxuICAgICAgKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmlzX3ZhbGlkKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Ym1pdFN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICBjb25maXJtYXRpb25NZXNzYWdlOiByZXNwb25zZS5kYXRhLmNvbmZpcm1hdGlvbl9tZXNzYWdlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5zY3JvbGxUb0NvbmZpcm1hdGlvbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICAgICAgICBzdWJtaXRGYWlsZWQ6IHRydWUsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VzOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgICAgIHN1Ym1pdEZhaWxlZDogdHJ1ZSxcbiAgICAgICAgICBlcnJvck1lc3NhZ2VzOiBlcnJvci5yZXNwb25zZS5kYXRhLnZhbGlkYXRpb25fbWVzc2FnZXNcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBuZXh0U3RlcCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IGFjdGl2ZVBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVQYWdlOiBhY3RpdmVQYWdlICsgMVxuICAgIH0pO1xuICB9O1xuXG4gIHByZXZTdGVwID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgYWN0aXZlUGFnZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZVBhZ2U6IGFjdGl2ZVBhZ2UgLSAxXG4gICAgfSk7XG4gIH07XG5cbiAgY2hlY2tDb25kaXRpb25hbExvZ2ljID0gKGNvbmRpdGlvbiwgZmllbGRzID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCB7IHJ1bGVzLCBhY3Rpb25UeXBlIH0gPSBjb25kaXRpb247XG4gICAgaWYgKCFydWxlcykgcmV0dXJuIHRydWU7XG5cbiAgICBjb25zdCBmb3JtVmFsdWVzID0gZmllbGRzIHx8IHRoaXMuc3RhdGUuZm9ybVZhbHVlcztcblxuICAgIC8vIHNob3cgb25seSBpZiBpcyBzZWxlY3RlZCBcIkFsbCBmaWVsZHNcIiAoaXQgc2hvdWxkIGJlIHR3ZWFrZWQgaW4gZnV0dXJlKVxuICAgIC8vIHdvcmtzIG9ubHkgXCJzaG93L2hpZGUgd2hlbiBmaWVsZCBpcyBlcXVhbCB0b1wiXG4gICAgbGV0IGhpZGVGaWVsZCA9IGFjdGlvblR5cGUgIT09IFwiaGlkZVwiO1xuICAgIGNvbnN0IGhpZGVCYXNlZE9uUnVsZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB7IGZpZWxkSWQsIHZhbHVlIH0gPSBydWxlc1tpXTtcbiAgICAgIGNvbnN0IGNvbmRpdGlvbkZpZWxkVmFsdWUgPSBmb3JtVmFsdWVzW2ZpZWxkSWRdLnZhbHVlO1xuXG4gICAgICBjb25zdCBzdHJpbmdWYWx1ZSA9IEFycmF5LmlzQXJyYXkoY29uZGl0aW9uRmllbGRWYWx1ZSlcbiAgICAgICAgPyBjb25kaXRpb25GaWVsZFZhbHVlLmpvaW4oXCJcIilcbiAgICAgICAgOiBjb25kaXRpb25GaWVsZFZhbHVlO1xuICAgICAgaWYgKHN0cmluZ1ZhbHVlICYmIHZhbHVlID09PSBzdHJpbmdWYWx1ZSkge1xuICAgICAgICBoaWRlQmFzZWRPblJ1bGVzW2ldID0gYWN0aW9uVHlwZSA9PT0gXCJoaWRlXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoaWRlQmFzZWRPblJ1bGVzW2ldID0gYWN0aW9uVHlwZSAhPT0gXCJoaWRlXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGhpZGVGaWVsZCA9IGhpZGVCYXNlZE9uUnVsZXMuZXZlcnkoaSA9PiBpID09PSB0cnVlKTtcbiAgICAvLyBmb3JtVmFsdWVzW2lkXS5oaWRlRmllbGQgPSBoaWRlRmllbGQ7XG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGZvcm1WYWx1ZXMgfSk7XG4gICAgcmV0dXJuIGhpZGVGaWVsZDtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZm9ybURhdGEsXG4gICAgICBmb3JtVmFsdWVzLFxuICAgICAgc3VibWl0RmFpbGVkLFxuICAgICAgc3VibWl0U3VjY2VzcyxcbiAgICAgIHRvdWNoZWQsXG4gICAgICBzdWJtaXR0aW5nLFxuICAgICAgYWN0aXZlUGFnZSxcbiAgICAgIGlzTXVsdGlwYXJ0XG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgdGl0bGUsXG4gICAgICBzdWJtaXRJY29uLFxuICAgICAgc2F2ZVN0YXRlVG9IdG1sRmllbGQsXG4gICAgICBzdHlsZWRDb21wb25lbnRzLFxuICAgICAgY3VzdG9tQ29tcG9uZW50cyxcbiAgICAgIGVycm9yTWVzc2FnZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgQnV0dG9uLCBMb2FkaW5nLCBHRldyYXBwZXIgPSBcImRpdlwiLCBGb3JtRXJyb3I6IFNGb3JtRXJyb3IgfSA9XG4gICAgICBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuXG4gICAgY29uc3QgeyBjc3NDbGFzcyB9ID0gZm9ybURhdGE7XG5cbiAgICBjb25zdCBpc0Rpc2FibGVkID0gT2JqZWN0LmtleXMoZm9ybVZhbHVlcykuc29tZShcbiAgICAgIHggPT4gIWZvcm1WYWx1ZXNbeF0uaGlkZUZpZWxkICYmIGZvcm1WYWx1ZXNbeF0udmFsaWRcbiAgICApO1xuICAgIGNvbnN0IGlzTmV4dERpc2FibGVkID0gYWN0aXZlUGFnZVxuICAgICAgPyBPYmplY3Qua2V5cyhmb3JtVmFsdWVzKS5zb21lKFxuICAgICAgICAgIHggPT5cbiAgICAgICAgICAgIGZvcm1WYWx1ZXNbeF0ucGFnZU51bWJlciA9PT0gYWN0aXZlUGFnZSAmJlxuICAgICAgICAgICAgIWZvcm1WYWx1ZXNbeF0uaGlkZUZpZWxkICYmXG4gICAgICAgICAgICBmb3JtVmFsdWVzW3hdLnZhbGlkXG4gICAgICAgIClcbiAgICAgIDogZmFsc2U7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEdGV3JhcHBlclxuICAgICAgICByZWY9e2VsID0+ICh0aGlzLndyYXBwZXJSZWYgPSBlbCl9XG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0td3JhcHBlclwiXG4gICAgICAgIGNzcz17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19XG4gICAgICAgIGlkPXtgZ3Jhdml0eV9mb3JtXyR7dGhpcy5wcm9wcy5mb3JtSUR9YH1cbiAgICAgID5cbiAgICAgICAge2Zvcm1EYXRhLnRpdGxlID8gbnVsbCA6IExvYWRpbmcgJiYgPExvYWRpbmcgaXNMb2FkaW5nIC8+fVxuXG4gICAgICAgIHtzdWJtaXRGYWlsZWQgJiYgIXN1Ym1pdFN1Y2Nlc3MgJiYgKFxuICAgICAgICAgIDxGb3JtRXJyb3JcbiAgICAgICAgICAgIFNGb3JtRXJyb3I9e1NGb3JtRXJyb3IgfHwgZmFsc2V9XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U9e1xuICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgfHwgXCJUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggeW91ciBzdWJtaXNzaW9uXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHtzdWJtaXRTdWNjZXNzICYmIHRoaXMuc3RhdGUuY29uZmlybWF0aW9uTWVzc2FnZSAmJiAoXG4gICAgICAgICAgPEZvcm1Db25maXJtYXRpb24gY29uZmlybWF0aW9uPXt0aGlzLnN0YXRlLmNvbmZpcm1hdGlvbk1lc3NhZ2V9IC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgeyFzdWJtaXRTdWNjZXNzICYmIGZvcm1EYXRhLmZpZWxkcyA/IChcbiAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgb25TdWJtaXQ9e2UgPT4gdGhpcy5vblN1Ym1pdChlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzQ2xhc3N9XG4gICAgICAgICAgICBlbmNUeXBlPXtpc011bHRpcGFydCA/IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgbm9WYWxpZGF0ZVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsoZm9ybURhdGEudGl0bGUgfHwgZm9ybURhdGEuZGVzY3JpcHRpb24pICYmIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7Zm9ybURhdGEudGl0bGUgJiYgdGl0bGUgPyAoXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9ybS10aXRsZVwiPntmb3JtRGF0YS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIHtmb3JtRGF0YS5kZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm0tZGVzY3JpcHRpb25cIj57Zm9ybURhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxSZW5kZXJGaWVsZHNcbiAgICAgICAgICAgICAgICBzdHlsZWRDb21wb25lbnRzPXtzdHlsZWRDb21wb25lbnRzfVxuICAgICAgICAgICAgICAgIGN1c3RvbUNvbXBvbmVudHM9e2N1c3RvbUNvbXBvbmVudHN9XG4gICAgICAgICAgICAgICAgZmllbGRzPXtmb3JtRGF0YS5maWVsZHN9XG4gICAgICAgICAgICAgICAgZm9ybVZhbHVlcz17Zm9ybVZhbHVlc31cbiAgICAgICAgICAgICAgICBzdWJtaXRGYWlsZWQ9e3N1Ym1pdEZhaWxlZH1cbiAgICAgICAgICAgICAgICBzdWJtaXRTdWNjZXNzPXtzdWJtaXRTdWNjZXNzfVxuICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm09e3RoaXMudXBkYXRlRm9ybUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgdG91Y2hlZD17dG91Y2hlZH1cbiAgICAgICAgICAgICAgICBzZXRUb3VjaGVkPXt0aGlzLnNldFRvdWNoZWR9XG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17Zm9ybURhdGEucGFnaW5hdGlvbn1cbiAgICAgICAgICAgICAgICBhY3RpdmVQYWdlPXthY3RpdmVQYWdlfVxuICAgICAgICAgICAgICAgIHByZXZTdGVwPXt0aGlzLnByZXZTdGVwfVxuICAgICAgICAgICAgICAgIG5leHRTdGVwPXt0aGlzLm5leHRTdGVwfVxuICAgICAgICAgICAgICAgIGlzTmV4dERpc2FibGVkPXtpc05leHREaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBjaGVja0NvbmRpdGlvbmFsTG9naWM9e3RoaXMuY2hlY2tDb25kaXRpb25hbExvZ2ljfVxuICAgICAgICAgICAgICAgIHNhdmVTdGF0ZVRvSHRtbEZpZWxkPXtzYXZlU3RhdGVUb0h0bWxGaWVsZH1cbiAgICAgICAgICAgICAgICBlbmFibGVIb25leXBvdD17Zm9ybURhdGEuZW5hYmxlSG9uZXlwb3R9XG4gICAgICAgICAgICAgICAgZXJyb3JzPXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZXN9XG4gICAgICAgICAgICAgICAgdW5zZXRFcnJvcj17dGhpcy51bnNldEVycm9yfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7KCFmb3JtRGF0YS5wYWdpbmF0aW9uIHx8XG4gICAgICAgICAgICAgICAgKGZvcm1EYXRhLnBhZ2luYXRpb24gJiZcbiAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLnBhZ2luYXRpb24ucGFnZXMubGVuZ3RoID09PSBhY3RpdmVQYWdlKSkgJiYgKFxuICAgICAgICAgICAgICAgIDxTdWJtaXRcbiAgICAgICAgICAgICAgICAgIEJ1dHRvbj17QnV0dG9ufVxuICAgICAgICAgICAgICAgICAgTG9hZGluZz17TG9hZGluZ31cbiAgICAgICAgICAgICAgICAgIGZvcm1EYXRhPXtmb3JtRGF0YX1cbiAgICAgICAgICAgICAgICAgIHN1Ym1pdEljb249e3N1Ym1pdEljb259XG4gICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXtpc0Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgc3VibWl0dGluZz17c3VibWl0dGluZ31cbiAgICAgICAgICAgICAgICAgIHByZXZTdGVwPXt0aGlzLnByZXZTdGVwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgXCJcIlxuICAgICAgICApfVxuICAgICAgPC9HRldyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuXG5HcmF2aXR5Rm9ybS5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiB0cnVlLFxuICBzdWJtaXRJY29uOiBmYWxzZSxcbiAgc2F2ZVN0YXRlVG9IdG1sRmllbGQ6IGZhbHNlXG59O1xuXG5leHBvcnQgeyB2YWxpZGF0ZUZpZWxkLCBGb3JtQ29uZmlybWF0aW9uLCBGb3JtRXJyb3IsIFJlbmRlckZpZWxkcywgU3VibWl0IH07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXZpdHlGb3JtO1xuIl19
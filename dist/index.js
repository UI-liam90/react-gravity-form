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
      } else if (field.type == "date" && field.dateType !== "datepicker") {
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
        var _this$props, formID, backendUrl, jumpToConfirmation, gfSubmissionUrl, data;

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

                _this$props = _this.props, formID = _this$props.formID, backendUrl = _this$props.backendUrl, jumpToConfirmation = _this$props.jumpToConfirmation;
                gfSubmissionUrl = backendUrl.substring(0, backendUrl.indexOf("/wp-json"));
                data = new FormData(event.target);

                _axios["default"].post("".concat(gfSubmissionUrl, "/wp-json/gf/v2/forms/").concat(formID, "/submissions"), data).then(function (response) {
                  if (response.data && response.data.is_valid) {
                    _this.setState({
                      submitting: false,
                      submitSuccess: true,
                      confirmationMessage: response.data.confirmation_message
                    });

                    if (jumpToConfirmation) {
                      _this.scrollToConfirmation();
                    }
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
          errorMessage = _this$props3.errorMessage,
          dropzoneText = _this$props3.dropzoneText;

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
        unsetError: this.unsetError,
        dropzoneText: dropzoneText
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
  saveStateToHtmlField: false,
  jumpToConfirmation: true
};
var _default = GravityForm;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHcmF2aXR5Rm9ybSIsInByb3BzIiwiaWQiLCJzZXRTdGF0ZSIsInRvdWNoZWQiLCJzdGF0ZSIsImVycm9yTWVzc2FnZXMiLCJldmVudCIsImZpZWxkIiwiZm9ybVZhbHVlcyIsImNvbmRpdGlvYW5sSWRzIiwiY29uZGl0aW9uRmllbGRzIiwidHlwZSIsImlzUmVxdWlyZWQiLCJ2YWx1ZSIsInZhbHVlcyIsImluZGV4IiwiaW5kZXhPZiIsInRhcmdldCIsInNwbGljZSIsInB1c2giLCJkYXRlVHlwZSIsInN1YklkIiwiZGF0ZUxhYmVsIiwidmFsIiwibGFiZWwiLCJjaGVja2VkIiwiY3NzQ2xhc3MiLCJ2YWxpZCIsImkiLCJsZW5ndGgiLCJoaWRlIiwiY2hlY2tDb25kaXRpb25hbExvZ2ljIiwiY29uZGl0aW9uYWxMb2dpYyIsImhpZGVGaWVsZCIsInBhZ2VOdW1iZXIiLCJvbkNoYW5nZSIsInJlY3QiLCJ3cmFwcGVyUmVmIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvIiwidG9wIiwicHJldmVudERlZmF1bHQiLCJzdWJtaXR0aW5nIiwic3VibWl0U3VjY2VzcyIsInN1Ym1pdEZhaWxlZCIsImNvbmZpcm1hdGlvbk1lc3NhZ2UiLCJmb3JtSUQiLCJiYWNrZW5kVXJsIiwianVtcFRvQ29uZmlybWF0aW9uIiwiZ2ZTdWJtaXNzaW9uVXJsIiwic3Vic3RyaW5nIiwiZGF0YSIsIkZvcm1EYXRhIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiaXNfdmFsaWQiLCJjb25maXJtYXRpb25fbWVzc2FnZSIsInNjcm9sbFRvQ29uZmlybWF0aW9uIiwiZXJyb3IiLCJ2YWxpZGF0aW9uX21lc3NhZ2VzIiwiZSIsImFjdGl2ZVBhZ2UiLCJjb25kaXRpb24iLCJmaWVsZHMiLCJydWxlcyIsImFjdGlvblR5cGUiLCJoaWRlQmFzZWRPblJ1bGVzIiwiZmllbGRJZCIsImNvbmRpdGlvbkZpZWxkVmFsdWUiLCJzdHJpbmdWYWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsImpvaW4iLCJldmVyeSIsImxvYWRpbmciLCJpc1ZhbGlkIiwiZm9ybURhdGEiLCJpc011bHRpcGFydCIsInBvcHVsYXRlZEZpZWxkcyIsIl9pc01vdW50ZWQiLCJnZXQiLCJmb3JtIiwiaGFzUG9wdWxhdGlvbiIsImlucHV0TmFtZSIsImNob2ljZXMiLCJmaWx0ZXIiLCJjaG9pY2UiLCJpc1NlbGVjdGVkIiwibWFwIiwicHJlc2VsZWN0ZWQiLCJmaW5kIiwic2VsZWN0ZWRPcHRpb24iLCJpdGVtIiwidGV4dCIsImRlZmF1bHRWYWx1ZSIsInRtcEZpZWxkIiwiaWRzIiwicGFyc2VJbnQiLCJwYWdpbmF0aW9uIiwidGl0bGUiLCJzdWJtaXRJY29uIiwic2F2ZVN0YXRlVG9IdG1sRmllbGQiLCJzdHlsZWRDb21wb25lbnRzIiwiY3VzdG9tQ29tcG9uZW50cyIsImVycm9yTWVzc2FnZSIsImRyb3B6b25lVGV4dCIsIkJ1dHRvbiIsIkxvYWRpbmciLCJHRldyYXBwZXIiLCJTRm9ybUVycm9yIiwiRm9ybUVycm9yIiwiaXNEaXNhYmxlZCIsIk9iamVjdCIsImtleXMiLCJzb21lIiwieCIsImlzTmV4dERpc2FibGVkIiwiZWwiLCJwb3NpdGlvbiIsIm9uU3VibWl0IiwidW5kZWZpbmVkIiwiZGVzY3JpcHRpb24iLCJ1cGRhdGVGb3JtSGFuZGxlciIsInNldFRvdWNoZWQiLCJwcmV2U3RlcCIsIm5leHRTdGVwIiwiZW5hYmxlSG9uZXlwb3QiLCJ1bnNldEVycm9yIiwicGFnZXMiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFFLEtBQUtpSSxVQW5CbkI7QUFvQkUsUUFBQSxZQUFZLEVBQUV0QjtBQXBCaEIsUUFERixFQXVCRyxDQUFDLENBQUM3QixRQUFRLENBQUNzQixVQUFWLElBQ0N0QixRQUFRLENBQUNzQixVQUFULElBQ0N0QixRQUFRLENBQUNzQixVQUFULENBQW9COEIsS0FBcEIsQ0FBMEIxRyxNQUExQixLQUFxQ3VDLFVBRnhDLEtBR0MsZ0NBQUMsa0JBQUQ7QUFDRSxRQUFBLE1BQU0sRUFBRTZDLE1BRFY7QUFFRSxRQUFBLE9BQU8sRUFBRUMsT0FGWDtBQUdFLFFBQUEsUUFBUSxFQUFFL0IsUUFIWjtBQUlFLFFBQUEsVUFBVSxFQUFFd0IsVUFKZDtBQUtFLFFBQUEsVUFBVSxFQUFFVyxVQUxkO0FBTUUsUUFBQSxVQUFVLEVBQUV2RSxVQU5kO0FBT0UsUUFBQSxRQUFRLEVBQUUsS0FBS29GO0FBUGpCLFFBMUJKLENBakJGLENBREQsR0F5REMsRUE5RUosQ0FERjtBQW1GRDs7OztFQTFjdUJLLGdCOztBQTZjMUJ6SSxXQUFXLENBQUMwSSxZQUFaLEdBQTJCO0FBQ3pCL0IsRUFBQUEsS0FBSyxFQUFFLElBRGtCO0FBRXpCQyxFQUFBQSxVQUFVLEVBQUUsS0FGYTtBQUd6QkMsRUFBQUEsb0JBQW9CLEVBQUUsS0FIRztBQUl6QnZELEVBQUFBLGtCQUFrQixFQUFFO0FBSkssQ0FBM0I7ZUFTZXRELFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVuZGVyRmllbGRzIGZyb20gXCIuL0Zvcm1FbGVtZW50cy9SZW5kZXJGaWVsZHNcIjtcbmltcG9ydCBGb3JtRXJyb3IgZnJvbSBcIi4vRm9ybUVsZW1lbnRzL0Zvcm1FcnJvclwiO1xuaW1wb3J0IEZvcm1Db25maXJtYXRpb24gZnJvbSBcIi4vRm9ybUVsZW1lbnRzL0Zvcm1Db25maXJtYXRpb25cIjtcbmltcG9ydCB7IHZhbGlkYXRlRmllbGQgfSBmcm9tIFwiLi9IZWxwZXJzL3ZhbGlkYXRpb25cIjtcbmltcG9ydCBTdWJtaXQgZnJvbSBcIi4vRm9ybUVsZW1lbnRzL1N1Ym1pdFwiO1xuXG5jbGFzcyBHcmF2aXR5Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdWJtaXRGYWlsZWQ6IGZhbHNlLFxuICAgICAgZXJyb3JNZXNzYWdlczogZmFsc2UsXG4gICAgICBmb3JtVmFsdWVzOiB7fSxcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgIHN1Ym1pdFN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgY29uZmlybWF0aW9uTWVzc2FnZTogZmFsc2UsXG4gICAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICAgIGZvcm1EYXRhOiB7fSxcbiAgICAgIHRvdWNoZWQ6IHt9LFxuICAgICAgYWN0aXZlUGFnZTogZmFsc2UsXG4gICAgICBjb25kaXRpb25GaWVsZHM6IHt9LFxuICAgICAgY29uZGl0aW9hbmxJZHM6IHt9LFxuICAgICAgaXNNdWx0aXBhcnQ6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZm9ybUlELCBiYWNrZW5kVXJsLCBwb3B1bGF0ZWRGaWVsZHMgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICBsZXQgaXNNdWx0aXBhcnQgPSBmYWxzZTtcbiAgICBjb25zdCBmb3JtID0gYXdhaXQgYXhpb3NcbiAgICAgIC5nZXQoYCR7YmFja2VuZFVybH0vJHtmb3JtSUR9YClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXG4gICAgICAuY2F0Y2goKCkgPT4gZmFsc2UpO1xuXG4gICAgaWYgKGZvcm0gJiYgdGhpcy5faXNNb3VudGVkKSB7XG4gICAgICBjb25zdCBmb3JtVmFsdWVzID0ge307XG4gICAgICBjb25zdCBjb25kaXRpb25GaWVsZHMgPSBbXTtcbiAgICAgIGNvbnN0IGNvbmRpdGlvYW5sSWRzID0gW107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgZm9ybS5maWVsZHMpIHtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBjb25zdCBoYXNQb3B1bGF0aW9uID1cbiAgICAgICAgICBmaWVsZC5pbnB1dE5hbWUgJiZcbiAgICAgICAgICBwb3B1bGF0ZWRGaWVsZHMgJiZcbiAgICAgICAgICBwb3B1bGF0ZWRGaWVsZHNbZmllbGQuaW5wdXROYW1lXTtcbiAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuICAgICAgICAgIHZhbHVlID0gZmllbGQuY2hvaWNlc1xuICAgICAgICAgICAgLmZpbHRlcihjaG9pY2UgPT5cbiAgICAgICAgICAgICAgaGFzUG9wdWxhdGlvblxuICAgICAgICAgICAgICAgID8gY2hvaWNlLnZhbHVlID09PSBwb3B1bGF0ZWRGaWVsZHNbZmllbGQuaW5wdXROYW1lXVxuICAgICAgICAgICAgICAgIDogY2hvaWNlLmlzU2VsZWN0ZWRcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5tYXAoY2hvaWNlID0+IGNob2ljZS52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gXCJyYWRpb1wiKSB7XG4gICAgICAgICAgaWYgKGhhc1BvcHVsYXRpb24pIHtcbiAgICAgICAgICAgIHZhbHVlID0gcG9wdWxhdGVkRmllbGRzW2ZpZWxkLmlucHV0TmFtZV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHByZXNlbGVjdGVkID0gZmllbGQuY2hvaWNlcy5maW5kKGNob2ljZSA9PiBjaG9pY2UuaXNTZWxlY3RlZCk7XG4gICAgICAgICAgICB2YWx1ZSA9IHByZXNlbGVjdGVkID8gcHJlc2VsZWN0ZWQudmFsdWUgOiBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBmaWVsZC5jaG9pY2VzXG4gICAgICAgICAgICAuZmlsdGVyKGNob2ljZSA9PlxuICAgICAgICAgICAgICBoYXNQb3B1bGF0aW9uXG4gICAgICAgICAgICAgICAgPyBjaG9pY2UudmFsdWUgPT09IHBvcHVsYXRlZEZpZWxkc1tmaWVsZC5pbnB1dE5hbWVdXG4gICAgICAgICAgICAgICAgOiBjaG9pY2UuaXNTZWxlY3RlZFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLm1hcChpdGVtID0+ICh7IHZhbHVlOiBpdGVtLnZhbHVlLCBsYWJlbDogaXRlbS50ZXh0IH0pKTtcbiAgICAgICAgICB2YWx1ZSA9XG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbiAmJiBzZWxlY3RlZE9wdGlvbi5sZW5ndGggPiAwXG4gICAgICAgICAgICAgID8gc2VsZWN0ZWRPcHRpb25bMF1cbiAgICAgICAgICAgICAgOiBcIlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gaGFzUG9wdWxhdGlvblxuICAgICAgICAgICAgPyBwb3B1bGF0ZWRGaWVsZHNbZmllbGQuaW5wdXROYW1lXVxuICAgICAgICAgICAgOiBmaWVsZC5kZWZhdWx0VmFsdWU7XG4gICAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09IFwiZmlsZXVwbG9hZFwiKSB7XG4gICAgICAgICAgICBpc011bHRpcGFydCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ3JhYiBhbGwgY29uZGl0aW9uYWwgbG9naWMgZmllbGRzXG4gICAgICAgIGlmIChmaWVsZC5jb25kaXRpb25hbExvZ2ljKSB7XG4gICAgICAgICAgY29uc3QgdG1wRmllbGQgPSB7XG4gICAgICAgICAgICBpZDogZmllbGQuaWQsXG4gICAgICAgICAgICBjb25kaXRpb25hbExvZ2ljOiBmaWVsZC5jb25kaXRpb25hbExvZ2ljXG4gICAgICAgICAgfTtcbiAgICAgICAgICBjb25zdCBpZHMgPSBmaWVsZC5jb25kaXRpb25hbExvZ2ljLnJ1bGVzLm1hcChpdGVtID0+IGl0ZW0uZmllbGRJZCk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQoaWRzW2ldKTtcbiAgICAgICAgICAgIGlmIChjb25kaXRpb2FubElkcy5pbmRleE9mKGlkKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgY29uZGl0aW9hbmxJZHMucHVzaChpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbmRpdGlvbkZpZWxkcy5wdXNoKHRtcEZpZWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1WYWx1ZXNbZmllbGQuaWRdID0ge1xuICAgICAgICAgIHZhbGlkOiB2YWxpZGF0ZUZpZWxkKHZhbHVlLCBmaWVsZCksXG4gICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgbGFiZWw6IGZpZWxkLmxhYmVsLFxuICAgICAgICAgIHBhZ2VOdW1iZXI6IGZpZWxkLnBhZ2VOdW1iZXIsXG4gICAgICAgICAgY3NzQ2xhc3M6IGZpZWxkLmNzc0NsYXNzLFxuICAgICAgICAgIGlzUmVxdWlyZWQ6IGZpZWxkLmlzUmVxdWlyZWRcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8vIGNoZWNrIGNvbmRpdGlvbiBsb2dpY1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25kaXRpb25GaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9ybVZhbHVlc1tcbiAgICAgICAgICBjb25kaXRpb25GaWVsZHNbaV0uaWRcbiAgICAgICAgXS5oaWRlRmllbGQgPSB0aGlzLmNoZWNrQ29uZGl0aW9uYWxMb2dpYyhcbiAgICAgICAgICBjb25kaXRpb25GaWVsZHNbaV0uY29uZGl0aW9uYWxMb2dpYyxcbiAgICAgICAgICBmb3JtVmFsdWVzXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb3JtRGF0YTogZm9ybSxcbiAgICAgICAgZm9ybVZhbHVlcyxcbiAgICAgICAgYWN0aXZlUGFnZTogZm9ybS5wYWdpbmF0aW9uID8gMSA6IGZhbHNlLFxuICAgICAgICBjb25kaXRpb25GaWVsZHMsXG4gICAgICAgIGNvbmRpdGlvYW5sSWRzLFxuICAgICAgICBpc011bHRpcGFydFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gIH1cblxuICBzZXRUb3VjaGVkID0gaWQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdG91Y2hlZDogeyAuLi50aGlzLnN0YXRlLnRvdWNoZWQsIFtpZF06IHRydWUgfVxuICAgIH0pO1xuICB9O1xuXG4gIHVuc2V0RXJyb3IgPSBpZCA9PiB7XG4gICAgY29uc3QgeyBlcnJvck1lc3NhZ2VzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICghZXJyb3JNZXNzYWdlcykgcmV0dXJuO1xuXG4gICAgaWYgKGVycm9yTWVzc2FnZXNbaWRdKSB7XG4gICAgICBkZWxldGUgZXJyb3JNZXNzYWdlc1tpZF07XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlcyB9KTtcbiAgICB9XG4gIH07XG5cbiAgdXBkYXRlRm9ybUhhbmRsZXIgPSAoZXZlbnQsIGZpZWxkKSA9PiB7XG4gICAgY29uc3QgeyBmb3JtVmFsdWVzLCBjb25kaXRpb2FubElkcywgY29uZGl0aW9uRmllbGRzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCB7IGlkLCB0eXBlLCBpc1JlcXVpcmVkIH0gPSBmaWVsZDtcbiAgICAvLyBTZXQgbmV3IHZhbHVlXG4gICAgbGV0IHZhbHVlO1xuICAgIGlmIChmaWVsZC50eXBlID09PSBcImNoZWNrYm94XCIpIHtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IFsuLi5mb3JtVmFsdWVzW2ZpZWxkLmlkXS52YWx1ZV07XG4gICAgICBjb25zdCBpbmRleCA9IHZhbHVlcy5pbmRleE9mKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICB2YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlcy5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICB9XG4gICAgICB2YWx1ZSA9IHZhbHVlcztcbiAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT0gXCJkYXRlXCIgJiYgZmllbGQuZGF0ZVR5cGUgIT09IFwiZGF0ZXBpY2tlclwiKSB7XG4gICAgICBjb25zdCB7IHN1YklkLCBkYXRlTGFiZWwgfSA9IGZpZWxkO1xuICAgICAgY29uc3QgdmFsdWVzID0gWy4uLmZvcm1WYWx1ZXNbZmllbGQuaWRdLnZhbHVlXTtcbiAgICAgIHZhbHVlc1tzdWJJZF0gPSB7XG4gICAgICAgIHZhbDogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICBsYWJlbDogZGF0ZUxhYmVsXG4gICAgICB9O1xuICAgICAgdmFsdWUgPSB2YWx1ZXM7XG4gICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09IFwiY29uc2VudFwiKSB7XG4gICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldCA/IGV2ZW50LnRhcmdldC5jaGVja2VkIDogXCJudWxsXCI7XG4gICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgIGNvbnN0IHsgc3ViSWQgfSA9IGZpZWxkO1xuICAgICAgY29uc3QgdmFsdWVzID1cbiAgICAgICAgZm9ybVZhbHVlc1tmaWVsZC5pZF0gJiYgZm9ybVZhbHVlc1tmaWVsZC5pZF0udmFsdWVcbiAgICAgICAgICA/IFsuLi5mb3JtVmFsdWVzW2ZpZWxkLmlkXS52YWx1ZV1cbiAgICAgICAgICA6IFtdO1xuICAgICAgdmFsdWVzW3N1YklkXSA9IHtcbiAgICAgICAgdmFsOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH07XG4gICAgICB2YWx1ZSA9IHZhbHVlcztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQgPyBldmVudC50YXJnZXQudmFsdWUgOiBcIm51bGxcIjtcbiAgICB9XG4gICAgLy8gaWYgZmllbGQgaXMgSUJBTlxuICAgIGlmICh0eXBlID09PSBcInRleHRcIiAmJiBmaWVsZC5jc3NDbGFzcy5pbmRleE9mKFwiaWJhblwiKSA+IC0xKSB7XG4gICAgICB0eXBlID0gXCJpYmFuXCI7XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgZmllbGRcbiAgICBjb25zdCB2YWxpZCA9IHZhbGlkYXRlRmllbGQodmFsdWUsIGZpZWxkKTtcblxuICAgIC8vIGlmIGZpZWxkIElEIGlzIHNvbWV3aGVyZSBpbiBjb25kaXRpb25hbCBmaWVsZHNcbiAgICAvLyByZWNhbGN1bGF0ZSBhbGwgY29uZGl0aW9uc1xuICAgIGlmIChjb25kaXRpb2FubElkcy5pbmRleE9mKGlkKSAhPT0gLTEpIHtcbiAgICAgIGZvcm1WYWx1ZXNbaWRdLnZhbHVlID0gdmFsdWU7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmRpdGlvbkZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB7IGlkIH0gPSBjb25kaXRpb25GaWVsZHNbaV07XG4gICAgICAgIGNvbnN0IGhpZGUgPSB0aGlzLmNoZWNrQ29uZGl0aW9uYWxMb2dpYyhcbiAgICAgICAgICBjb25kaXRpb25GaWVsZHNbaV0uY29uZGl0aW9uYWxMb2dpYyxcbiAgICAgICAgICBmb3JtVmFsdWVzXG4gICAgICAgICk7XG4gICAgICAgIGZvcm1WYWx1ZXNbaWRdLmhpZGVGaWVsZCA9IGhpZGU7XG4gICAgICAgIGlmIChoaWRlKSB7XG4gICAgICAgICAgaWYgKGZvcm1WYWx1ZXNbaWRdLmlzUmVxdWlyZWQgJiYgaGlkZSkge1xuICAgICAgICAgICAgZm9ybVZhbHVlc1tpZF0udmFsdWUgPSBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtVmFsdWVzW2lkXS52YWxpZCA9ICEhZm9ybVZhbHVlc1tpZF0uaXNSZXF1aXJlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIGZvcm1WYWx1ZXM6IHtcbiAgICAgICAgICAuLi5mb3JtVmFsdWVzLFxuICAgICAgICAgIFtpZF06IHtcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICB2YWxpZCxcbiAgICAgICAgICAgIGxhYmVsOiBmaWVsZC5sYWJlbCxcbiAgICAgICAgICAgIHBhZ2VOdW1iZXI6IGZpZWxkLnBhZ2VOdW1iZXIsXG4gICAgICAgICAgICBjc3NDbGFzczogZmllbGQuY3NzQ2xhc3MsXG4gICAgICAgICAgICBpc1JlcXVpcmVkOiBmaWVsZC5pc1JlcXVpcmVkXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICAvLyBwYXNzIHN0YXRlIHRvIHBhcmVudCBjb21wb25lbnRcbiAgICAgICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UodGhpcy5zdGF0ZS5mb3JtVmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH07XG5cbiAgc2Nyb2xsVG9Db25maXJtYXRpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMud3JhcHBlclJlZlxuICAgICAgPyB0aGlzLndyYXBwZXJSZWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIDogZmFsc2U7XG4gICAgaWYgKHJlY3QgJiYgd2luZG93KSB7XG4gICAgICBjb25zdCBzY3JvbGxUb3AgPVxuICAgICAgICB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogc2Nyb2xsVG9wICsgcmVjdC50b3AgLSAxMDBcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBvblN1Ym1pdCA9IGFzeW5jIGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3VibWl0dGluZzogdHJ1ZSxcbiAgICAgIHN1Ym1pdFN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgc3VibWl0RmFpbGVkOiBmYWxzZSxcbiAgICAgIGNvbmZpcm1hdGlvbk1lc3NhZ2U6IGZhbHNlLFxuICAgICAgZXJyb3JNZXNzYWdlczogZmFsc2VcbiAgICB9KTtcbiAgICBjb25zdCB7IGZvcm1JRCwgYmFja2VuZFVybCwganVtcFRvQ29uZmlybWF0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGdmU3VibWlzc2lvblVybCA9IGJhY2tlbmRVcmwuc3Vic3RyaW5nKFxuICAgICAgMCxcbiAgICAgIGJhY2tlbmRVcmwuaW5kZXhPZihcIi93cC1qc29uXCIpXG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KFxuICAgICAgICBgJHtnZlN1Ym1pc3Npb25Vcmx9L3dwLWpzb24vZ2YvdjIvZm9ybXMvJHtmb3JtSUR9L3N1Ym1pc3Npb25zYCxcbiAgICAgICAgZGF0YVxuICAgICAgKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmlzX3ZhbGlkKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Ym1pdFN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICBjb25maXJtYXRpb25NZXNzYWdlOiByZXNwb25zZS5kYXRhLmNvbmZpcm1hdGlvbl9tZXNzYWdlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGp1bXBUb0NvbmZpcm1hdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0NvbmZpcm1hdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc3VibWl0RmFpbGVkOiB0cnVlLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlczogXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgICAgICBzdWJtaXRGYWlsZWQ6IHRydWUsXG4gICAgICAgICAgZXJyb3JNZXNzYWdlczogZXJyb3IucmVzcG9uc2UuZGF0YS52YWxpZGF0aW9uX21lc3NhZ2VzXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgbmV4dFN0ZXAgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBhY3RpdmVQYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlUGFnZTogYWN0aXZlUGFnZSArIDFcbiAgICB9KTtcbiAgfTtcblxuICBwcmV2U3RlcCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IGFjdGl2ZVBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVQYWdlOiBhY3RpdmVQYWdlIC0gMVxuICAgIH0pO1xuICB9O1xuXG4gIGNoZWNrQ29uZGl0aW9uYWxMb2dpYyA9IChjb25kaXRpb24sIGZpZWxkcyA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgeyBydWxlcywgYWN0aW9uVHlwZSB9ID0gY29uZGl0aW9uO1xuICAgIGlmICghcnVsZXMpIHJldHVybiB0cnVlO1xuXG4gICAgY29uc3QgZm9ybVZhbHVlcyA9IGZpZWxkcyB8fCB0aGlzLnN0YXRlLmZvcm1WYWx1ZXM7XG5cbiAgICAvLyBzaG93IG9ubHkgaWYgaXMgc2VsZWN0ZWQgXCJBbGwgZmllbGRzXCIgKGl0IHNob3VsZCBiZSB0d2Vha2VkIGluIGZ1dHVyZSlcbiAgICAvLyB3b3JrcyBvbmx5IFwic2hvdy9oaWRlIHdoZW4gZmllbGQgaXMgZXF1YWwgdG9cIlxuICAgIGxldCBoaWRlRmllbGQgPSBhY3Rpb25UeXBlICE9PSBcImhpZGVcIjtcbiAgICBjb25zdCBoaWRlQmFzZWRPblJ1bGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgeyBmaWVsZElkLCB2YWx1ZSB9ID0gcnVsZXNbaV07XG4gICAgICBjb25zdCBjb25kaXRpb25GaWVsZFZhbHVlID0gZm9ybVZhbHVlc1tmaWVsZElkXS52YWx1ZTtcblxuICAgICAgY29uc3Qgc3RyaW5nVmFsdWUgPSBBcnJheS5pc0FycmF5KGNvbmRpdGlvbkZpZWxkVmFsdWUpXG4gICAgICAgID8gY29uZGl0aW9uRmllbGRWYWx1ZS5qb2luKFwiXCIpXG4gICAgICAgIDogY29uZGl0aW9uRmllbGRWYWx1ZTtcbiAgICAgIGlmIChzdHJpbmdWYWx1ZSAmJiB2YWx1ZSA9PT0gc3RyaW5nVmFsdWUpIHtcbiAgICAgICAgaGlkZUJhc2VkT25SdWxlc1tpXSA9IGFjdGlvblR5cGUgPT09IFwiaGlkZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGlkZUJhc2VkT25SdWxlc1tpXSA9IGFjdGlvblR5cGUgIT09IFwiaGlkZVwiO1xuICAgICAgfVxuICAgIH1cbiAgICBoaWRlRmllbGQgPSBoaWRlQmFzZWRPblJ1bGVzLmV2ZXJ5KGkgPT4gaSA9PT0gdHJ1ZSk7XG4gICAgLy8gZm9ybVZhbHVlc1tpZF0uaGlkZUZpZWxkID0gaGlkZUZpZWxkO1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBmb3JtVmFsdWVzIH0pO1xuICAgIHJldHVybiBoaWRlRmllbGQ7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZvcm1EYXRhLFxuICAgICAgZm9ybVZhbHVlcyxcbiAgICAgIHN1Ym1pdEZhaWxlZCxcbiAgICAgIHN1Ym1pdFN1Y2Nlc3MsXG4gICAgICB0b3VjaGVkLFxuICAgICAgc3VibWl0dGluZyxcbiAgICAgIGFjdGl2ZVBhZ2UsXG4gICAgICBpc011bHRpcGFydFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlLFxuICAgICAgc3VibWl0SWNvbixcbiAgICAgIHNhdmVTdGF0ZVRvSHRtbEZpZWxkLFxuICAgICAgc3R5bGVkQ29tcG9uZW50cyxcbiAgICAgIGN1c3RvbUNvbXBvbmVudHMsXG4gICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICBkcm9wem9uZVRleHRcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IEJ1dHRvbiwgTG9hZGluZywgR0ZXcmFwcGVyID0gXCJkaXZcIiwgRm9ybUVycm9yOiBTRm9ybUVycm9yIH0gPVxuICAgICAgc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICAgIGNvbnN0IHsgY3NzQ2xhc3MgfSA9IGZvcm1EYXRhO1xuXG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IE9iamVjdC5rZXlzKGZvcm1WYWx1ZXMpLnNvbWUoXG4gICAgICB4ID0+ICFmb3JtVmFsdWVzW3hdLmhpZGVGaWVsZCAmJiBmb3JtVmFsdWVzW3hdLnZhbGlkXG4gICAgKTtcbiAgICBjb25zdCBpc05leHREaXNhYmxlZCA9IGFjdGl2ZVBhZ2VcbiAgICAgID8gT2JqZWN0LmtleXMoZm9ybVZhbHVlcykuc29tZShcbiAgICAgICAgICB4ID0+XG4gICAgICAgICAgICBmb3JtVmFsdWVzW3hdLnBhZ2VOdW1iZXIgPT09IGFjdGl2ZVBhZ2UgJiZcbiAgICAgICAgICAgICFmb3JtVmFsdWVzW3hdLmhpZGVGaWVsZCAmJlxuICAgICAgICAgICAgZm9ybVZhbHVlc1t4XS52YWxpZFxuICAgICAgICApXG4gICAgICA6IGZhbHNlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxHRldyYXBwZXJcbiAgICAgICAgcmVmPXtlbCA9PiAodGhpcy53cmFwcGVyUmVmID0gZWwpfVxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXdyYXBwZXJcIlxuICAgICAgICBjc3M9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fVxuICAgICAgICBpZD17YGdyYXZpdHlfZm9ybV8ke3RoaXMucHJvcHMuZm9ybUlEfWB9XG4gICAgICA+XG4gICAgICAgIHtmb3JtRGF0YS50aXRsZSA/IG51bGwgOiBMb2FkaW5nICYmIDxMb2FkaW5nIGlzTG9hZGluZyAvPn1cblxuICAgICAgICB7c3VibWl0RmFpbGVkICYmICFzdWJtaXRTdWNjZXNzICYmIChcbiAgICAgICAgICA8Rm9ybUVycm9yXG4gICAgICAgICAgICBTRm9ybUVycm9yPXtTRm9ybUVycm9yIHx8IGZhbHNlfVxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlPXtcbiAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlIHx8IFwiVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHlvdXIgc3VibWlzc2lvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7c3VibWl0U3VjY2VzcyAmJiB0aGlzLnN0YXRlLmNvbmZpcm1hdGlvbk1lc3NhZ2UgJiYgKFxuICAgICAgICAgIDxGb3JtQ29uZmlybWF0aW9uIGNvbmZpcm1hdGlvbj17dGhpcy5zdGF0ZS5jb25maXJtYXRpb25NZXNzYWdlfSAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHshc3VibWl0U3VjY2VzcyAmJiBmb3JtRGF0YS5maWVsZHMgPyAoXG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIG9uU3VibWl0PXtlID0+IHRoaXMub25TdWJtaXQoZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nzc0NsYXNzfVxuICAgICAgICAgICAgZW5jVHlwZT17aXNNdWx0aXBhcnQgPyBcIm11bHRpcGFydC9mb3JtLWRhdGFcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIG5vVmFsaWRhdGVcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7KGZvcm1EYXRhLnRpdGxlIHx8IGZvcm1EYXRhLmRlc2NyaXB0aW9uKSAmJiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2Zvcm1EYXRhLnRpdGxlICYmIHRpdGxlID8gKFxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvcm0tdGl0bGVcIj57Zm9ybURhdGEudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICB7Zm9ybURhdGEuZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb3JtLWRlc2NyaXB0aW9uXCI+e2Zvcm1EYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0td3JhcHBlclwiPlxuICAgICAgICAgICAgICA8UmVuZGVyRmllbGRzXG4gICAgICAgICAgICAgICAgc3R5bGVkQ29tcG9uZW50cz17c3R5bGVkQ29tcG9uZW50c31cbiAgICAgICAgICAgICAgICBjdXN0b21Db21wb25lbnRzPXtjdXN0b21Db21wb25lbnRzfVxuICAgICAgICAgICAgICAgIGZpZWxkcz17Zm9ybURhdGEuZmllbGRzfVxuICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXM9e2Zvcm1WYWx1ZXN9XG4gICAgICAgICAgICAgICAgc3VibWl0RmFpbGVkPXtzdWJtaXRGYWlsZWR9XG4gICAgICAgICAgICAgICAgc3VibWl0U3VjY2Vzcz17c3VibWl0U3VjY2Vzc31cbiAgICAgICAgICAgICAgICB1cGRhdGVGb3JtPXt0aGlzLnVwZGF0ZUZvcm1IYW5kbGVyfVxuICAgICAgICAgICAgICAgIHRvdWNoZWQ9e3RvdWNoZWR9XG4gICAgICAgICAgICAgICAgc2V0VG91Y2hlZD17dGhpcy5zZXRUb3VjaGVkfVxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e2Zvcm1EYXRhLnBhZ2luYXRpb259XG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZT17YWN0aXZlUGFnZX1cbiAgICAgICAgICAgICAgICBwcmV2U3RlcD17dGhpcy5wcmV2U3RlcH1cbiAgICAgICAgICAgICAgICBuZXh0U3RlcD17dGhpcy5uZXh0U3RlcH1cbiAgICAgICAgICAgICAgICBpc05leHREaXNhYmxlZD17aXNOZXh0RGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgY2hlY2tDb25kaXRpb25hbExvZ2ljPXt0aGlzLmNoZWNrQ29uZGl0aW9uYWxMb2dpY31cbiAgICAgICAgICAgICAgICBzYXZlU3RhdGVUb0h0bWxGaWVsZD17c2F2ZVN0YXRlVG9IdG1sRmllbGR9XG4gICAgICAgICAgICAgICAgZW5hYmxlSG9uZXlwb3Q9e2Zvcm1EYXRhLmVuYWJsZUhvbmV5cG90fVxuICAgICAgICAgICAgICAgIGVycm9ycz17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2VzfVxuICAgICAgICAgICAgICAgIHVuc2V0RXJyb3I9e3RoaXMudW5zZXRFcnJvcn1cbiAgICAgICAgICAgICAgICBkcm9wem9uZVRleHQ9e2Ryb3B6b25lVGV4dH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgeyghZm9ybURhdGEucGFnaW5hdGlvbiB8fFxuICAgICAgICAgICAgICAgIChmb3JtRGF0YS5wYWdpbmF0aW9uICYmXG4gICAgICAgICAgICAgICAgICBmb3JtRGF0YS5wYWdpbmF0aW9uLnBhZ2VzLmxlbmd0aCA9PT0gYWN0aXZlUGFnZSkpICYmIChcbiAgICAgICAgICAgICAgICA8U3VibWl0XG4gICAgICAgICAgICAgICAgICBCdXR0b249e0J1dHRvbn1cbiAgICAgICAgICAgICAgICAgIExvYWRpbmc9e0xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICBmb3JtRGF0YT17Zm9ybURhdGF9XG4gICAgICAgICAgICAgICAgICBzdWJtaXRJY29uPXtzdWJtaXRJY29ufVxuICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17aXNEaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgIHN1Ym1pdHRpbmc9e3N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgICBwcmV2U3RlcD17dGhpcy5wcmV2U3RlcH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApIDogKFxuICAgICAgICAgIFwiXCJcbiAgICAgICAgKX1cbiAgICAgIDwvR0ZXcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cblxuR3Jhdml0eUZvcm0uZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogdHJ1ZSxcbiAgc3VibWl0SWNvbjogZmFsc2UsXG4gIHNhdmVTdGF0ZVRvSHRtbEZpZWxkOiBmYWxzZSxcbiAganVtcFRvQ29uZmlybWF0aW9uOiB0cnVlXG59O1xuXG5leHBvcnQgeyB2YWxpZGF0ZUZpZWxkLCBGb3JtQ29uZmlybWF0aW9uLCBGb3JtRXJyb3IsIFJlbmRlckZpZWxkcywgU3VibWl0IH07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXZpdHlGb3JtO1xuIl19
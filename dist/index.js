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
                    var confirmationMessage = response.data.confirmation_message;

                    var _ref2 = confirmationMessage || false,
                        type = _ref2.type,
                        link = _ref2.link;

                    if (type && link && type === "redirect") {
                      if (typeof window !== "undefined") {
                        window.location.replace(link);
                        return false;
                      }
                    }

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
        var conditionFieldValue = formValues[fieldId].value && formValues[fieldId].value.value ? formValues[fieldId].value.value : formValues[fieldId].value || false;
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

      var _ref3 = styledComponents || false,
          Button = _ref3.Button,
          Loading = _ref3.Loading,
          _ref3$GFWrapper = _ref3.GFWrapper,
          GFWrapper = _ref3$GFWrapper === void 0 ? "div" : _ref3$GFWrapper,
          SFormError = _ref3.FormError;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHcmF2aXR5Rm9ybSIsInByb3BzIiwiaWQiLCJzZXRTdGF0ZSIsInRvdWNoZWQiLCJzdGF0ZSIsImVycm9yTWVzc2FnZXMiLCJldmVudCIsImZpZWxkIiwiZm9ybVZhbHVlcyIsImNvbmRpdGlvYW5sSWRzIiwiY29uZGl0aW9uRmllbGRzIiwidHlwZSIsImlzUmVxdWlyZWQiLCJ2YWx1ZSIsInZhbHVlcyIsImluZGV4IiwiaW5kZXhPZiIsInRhcmdldCIsInNwbGljZSIsInB1c2giLCJkYXRlVHlwZSIsInN1YklkIiwiZGF0ZUxhYmVsIiwidmFsIiwibGFiZWwiLCJjaGVja2VkIiwiY3NzQ2xhc3MiLCJ2YWxpZCIsImkiLCJsZW5ndGgiLCJoaWRlIiwiY2hlY2tDb25kaXRpb25hbExvZ2ljIiwiY29uZGl0aW9uYWxMb2dpYyIsImhpZGVGaWVsZCIsInBhZ2VOdW1iZXIiLCJvbkNoYW5nZSIsInJlY3QiLCJ3cmFwcGVyUmVmIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvIiwidG9wIiwicHJldmVudERlZmF1bHQiLCJzdWJtaXR0aW5nIiwic3VibWl0U3VjY2VzcyIsInN1Ym1pdEZhaWxlZCIsImNvbmZpcm1hdGlvbk1lc3NhZ2UiLCJmb3JtSUQiLCJiYWNrZW5kVXJsIiwianVtcFRvQ29uZmlybWF0aW9uIiwiZ2ZTdWJtaXNzaW9uVXJsIiwic3Vic3RyaW5nIiwiZGF0YSIsIkZvcm1EYXRhIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiaXNfdmFsaWQiLCJjb25maXJtYXRpb25fbWVzc2FnZSIsImxpbmsiLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJzY3JvbGxUb0NvbmZpcm1hdGlvbiIsImVycm9yIiwidmFsaWRhdGlvbl9tZXNzYWdlcyIsImUiLCJhY3RpdmVQYWdlIiwiY29uZGl0aW9uIiwiZmllbGRzIiwicnVsZXMiLCJhY3Rpb25UeXBlIiwiaGlkZUJhc2VkT25SdWxlcyIsImZpZWxkSWQiLCJjb25kaXRpb25GaWVsZFZhbHVlIiwic3RyaW5nVmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJqb2luIiwiZXZlcnkiLCJsb2FkaW5nIiwiaXNWYWxpZCIsImZvcm1EYXRhIiwiaXNNdWx0aXBhcnQiLCJwb3B1bGF0ZWRGaWVsZHMiLCJfaXNNb3VudGVkIiwiZ2V0IiwiZm9ybSIsImhhc1BvcHVsYXRpb24iLCJpbnB1dE5hbWUiLCJjaG9pY2VzIiwiZmlsdGVyIiwiY2hvaWNlIiwiaXNTZWxlY3RlZCIsIm1hcCIsInByZXNlbGVjdGVkIiwiZmluZCIsInNlbGVjdGVkT3B0aW9uIiwiaXRlbSIsInRleHQiLCJkZWZhdWx0VmFsdWUiLCJ0bXBGaWVsZCIsImlkcyIsInBhcnNlSW50IiwicGFnaW5hdGlvbiIsInRpdGxlIiwic3VibWl0SWNvbiIsInNhdmVTdGF0ZVRvSHRtbEZpZWxkIiwic3R5bGVkQ29tcG9uZW50cyIsImN1c3RvbUNvbXBvbmVudHMiLCJlcnJvck1lc3NhZ2UiLCJkcm9wem9uZVRleHQiLCJCdXR0b24iLCJMb2FkaW5nIiwiR0ZXcmFwcGVyIiwiU0Zvcm1FcnJvciIsIkZvcm1FcnJvciIsImlzRGlzYWJsZWQiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsIngiLCJpc05leHREaXNhYmxlZCIsImVsIiwicG9zaXRpb24iLCJvblN1Ym1pdCIsInVuZGVmaW5lZCIsImRlc2NyaXB0aW9uIiwidXBkYXRlRm9ybUhhbmRsZXIiLCJzZXRUb3VjaGVkIiwicHJldlN0ZXAiLCJuZXh0U3RlcCIsImVuYWJsZUhvbmV5cG90IiwidW5zZXRFcnJvciIsInBhZ2VzIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7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LFFBQVEsRUFBRSxLQUFLdUY7QUFQakIsUUExQkosQ0FqQkYsQ0FERCxHQXlEQyxFQTlFSixDQURGO0FBbUZEOzs7O0VBcmR1QkssZ0I7O0FBd2QxQjVJLFdBQVcsQ0FBQzZJLFlBQVosR0FBMkI7QUFDekIvQixFQUFBQSxLQUFLLEVBQUUsSUFEa0I7QUFFekJDLEVBQUFBLFVBQVUsRUFBRSxLQUZhO0FBR3pCQyxFQUFBQSxvQkFBb0IsRUFBRSxLQUhHO0FBSXpCMUQsRUFBQUEsa0JBQWtCLEVBQUU7QUFKSyxDQUEzQjtlQVNldEQsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSZW5kZXJGaWVsZHMgZnJvbSBcIi4vRm9ybUVsZW1lbnRzL1JlbmRlckZpZWxkc1wiO1xuaW1wb3J0IEZvcm1FcnJvciBmcm9tIFwiLi9Gb3JtRWxlbWVudHMvRm9ybUVycm9yXCI7XG5pbXBvcnQgRm9ybUNvbmZpcm1hdGlvbiBmcm9tIFwiLi9Gb3JtRWxlbWVudHMvRm9ybUNvbmZpcm1hdGlvblwiO1xuaW1wb3J0IHsgdmFsaWRhdGVGaWVsZCB9IGZyb20gXCIuL0hlbHBlcnMvdmFsaWRhdGlvblwiO1xuaW1wb3J0IFN1Ym1pdCBmcm9tIFwiLi9Gb3JtRWxlbWVudHMvU3VibWl0XCI7XG5cbmNsYXNzIEdyYXZpdHlGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN1Ym1pdEZhaWxlZDogZmFsc2UsXG4gICAgICBlcnJvck1lc3NhZ2VzOiBmYWxzZSxcbiAgICAgIGZvcm1WYWx1ZXM6IHt9LFxuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgc3VibWl0U3VjY2VzczogZmFsc2UsXG4gICAgICBjb25maXJtYXRpb25NZXNzYWdlOiBmYWxzZSxcbiAgICAgIGlzVmFsaWQ6IGZhbHNlLFxuICAgICAgZm9ybURhdGE6IHt9LFxuICAgICAgdG91Y2hlZDoge30sXG4gICAgICBhY3RpdmVQYWdlOiBmYWxzZSxcbiAgICAgIGNvbmRpdGlvbkZpZWxkczoge30sXG4gICAgICBjb25kaXRpb2FubElkczoge30sXG4gICAgICBpc011bHRpcGFydDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBmb3JtSUQsIGJhY2tlbmRVcmwsIHBvcHVsYXRlZEZpZWxkcyB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgIGxldCBpc011bHRpcGFydCA9IGZhbHNlO1xuICAgIGNvbnN0IGZvcm0gPSBhd2FpdCBheGlvc1xuICAgICAgLmdldChgJHtiYWNrZW5kVXJsfS8ke2Zvcm1JRH1gKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAgIC5jYXRjaCgoKSA9PiBmYWxzZSk7XG5cbiAgICBpZiAoZm9ybSAmJiB0aGlzLl9pc01vdW50ZWQpIHtcbiAgICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSB7fTtcbiAgICAgIGNvbnN0IGNvbmRpdGlvbkZpZWxkcyA9IFtdO1xuICAgICAgY29uc3QgY29uZGl0aW9hbmxJZHMgPSBbXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBmb3JtLmZpZWxkcykge1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGNvbnN0IGhhc1BvcHVsYXRpb24gPVxuICAgICAgICAgIGZpZWxkLmlucHV0TmFtZSAmJlxuICAgICAgICAgIHBvcHVsYXRlZEZpZWxkcyAmJlxuICAgICAgICAgIHBvcHVsYXRlZEZpZWxkc1tmaWVsZC5pbnB1dE5hbWVdO1xuICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XG4gICAgICAgICAgdmFsdWUgPSBmaWVsZC5jaG9pY2VzXG4gICAgICAgICAgICAuZmlsdGVyKGNob2ljZSA9PlxuICAgICAgICAgICAgICBoYXNQb3B1bGF0aW9uXG4gICAgICAgICAgICAgICAgPyBjaG9pY2UudmFsdWUgPT09IHBvcHVsYXRlZEZpZWxkc1tmaWVsZC5pbnB1dE5hbWVdXG4gICAgICAgICAgICAgICAgOiBjaG9pY2UuaXNTZWxlY3RlZFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLm1hcChjaG9pY2UgPT4gY2hvaWNlLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSBcInJhZGlvXCIpIHtcbiAgICAgICAgICBpZiAoaGFzUG9wdWxhdGlvbikge1xuICAgICAgICAgICAgdmFsdWUgPSBwb3B1bGF0ZWRGaWVsZHNbZmllbGQuaW5wdXROYW1lXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcHJlc2VsZWN0ZWQgPSBmaWVsZC5jaG9pY2VzLmZpbmQoY2hvaWNlID0+IGNob2ljZS5pc1NlbGVjdGVkKTtcbiAgICAgICAgICAgIHZhbHVlID0gcHJlc2VsZWN0ZWQgPyBwcmVzZWxlY3RlZC52YWx1ZSA6IFwiXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09IFwic2VsZWN0XCIpIHtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IGZpZWxkLmNob2ljZXNcbiAgICAgICAgICAgIC5maWx0ZXIoY2hvaWNlID0+XG4gICAgICAgICAgICAgIGhhc1BvcHVsYXRpb25cbiAgICAgICAgICAgICAgICA/IGNob2ljZS52YWx1ZSA9PT0gcG9wdWxhdGVkRmllbGRzW2ZpZWxkLmlucHV0TmFtZV1cbiAgICAgICAgICAgICAgICA6IGNob2ljZS5pc1NlbGVjdGVkXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAubWFwKGl0ZW0gPT4gKHsgdmFsdWU6IGl0ZW0udmFsdWUsIGxhYmVsOiBpdGVtLnRleHQgfSkpO1xuICAgICAgICAgIHZhbHVlID1cbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uICYmIHNlbGVjdGVkT3B0aW9uLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgPyBzZWxlY3RlZE9wdGlvblswXVxuICAgICAgICAgICAgICA6IFwiXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUgPSBoYXNQb3B1bGF0aW9uXG4gICAgICAgICAgICA/IHBvcHVsYXRlZEZpZWxkc1tmaWVsZC5pbnB1dE5hbWVdXG4gICAgICAgICAgICA6IGZpZWxkLmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gXCJmaWxldXBsb2FkXCIpIHtcbiAgICAgICAgICAgIGlzTXVsdGlwYXJ0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBncmFiIGFsbCBjb25kaXRpb25hbCBsb2dpYyBmaWVsZHNcbiAgICAgICAgaWYgKGZpZWxkLmNvbmRpdGlvbmFsTG9naWMpIHtcbiAgICAgICAgICBjb25zdCB0bXBGaWVsZCA9IHtcbiAgICAgICAgICAgIGlkOiBmaWVsZC5pZCxcbiAgICAgICAgICAgIGNvbmRpdGlvbmFsTG9naWM6IGZpZWxkLmNvbmRpdGlvbmFsTG9naWNcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNvbnN0IGlkcyA9IGZpZWxkLmNvbmRpdGlvbmFsTG9naWMucnVsZXMubWFwKGl0ZW0gPT4gaXRlbS5maWVsZElkKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaWQgPSBwYXJzZUludChpZHNbaV0pO1xuICAgICAgICAgICAgaWYgKGNvbmRpdGlvYW5sSWRzLmluZGV4T2YoaWQpID09PSAtMSkge1xuICAgICAgICAgICAgICBjb25kaXRpb2FubElkcy5wdXNoKGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uZGl0aW9uRmllbGRzLnB1c2godG1wRmllbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybVZhbHVlc1tmaWVsZC5pZF0gPSB7XG4gICAgICAgICAgdmFsaWQ6IHZhbGlkYXRlRmllbGQodmFsdWUsIGZpZWxkKSxcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICBsYWJlbDogZmllbGQubGFiZWwsXG4gICAgICAgICAgcGFnZU51bWJlcjogZmllbGQucGFnZU51bWJlcixcbiAgICAgICAgICBjc3NDbGFzczogZmllbGQuY3NzQ2xhc3MsXG4gICAgICAgICAgaXNSZXF1aXJlZDogZmllbGQuaXNSZXF1aXJlZFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy8gY2hlY2sgY29uZGl0aW9uIGxvZ2ljXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmRpdGlvbkZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3JtVmFsdWVzW1xuICAgICAgICAgIGNvbmRpdGlvbkZpZWxkc1tpXS5pZFxuICAgICAgICBdLmhpZGVGaWVsZCA9IHRoaXMuY2hlY2tDb25kaXRpb25hbExvZ2ljKFxuICAgICAgICAgIGNvbmRpdGlvbkZpZWxkc1tpXS5jb25kaXRpb25hbExvZ2ljLFxuICAgICAgICAgIGZvcm1WYWx1ZXNcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvcm1EYXRhOiBmb3JtLFxuICAgICAgICBmb3JtVmFsdWVzLFxuICAgICAgICBhY3RpdmVQYWdlOiBmb3JtLnBhZ2luYXRpb24gPyAxIDogZmFsc2UsXG4gICAgICAgIGNvbmRpdGlvbkZpZWxkcyxcbiAgICAgICAgY29uZGl0aW9hbmxJZHMsXG4gICAgICAgIGlzTXVsdGlwYXJ0XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHNldFRvdWNoZWQgPSBpZCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0b3VjaGVkOiB7IC4uLnRoaXMuc3RhdGUudG91Y2hlZCwgW2lkXTogdHJ1ZSB9XG4gICAgfSk7XG4gIH07XG5cbiAgdW5zZXRFcnJvciA9IGlkID0+IHtcbiAgICBjb25zdCB7IGVycm9yTWVzc2FnZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKCFlcnJvck1lc3NhZ2VzKSByZXR1cm47XG5cbiAgICBpZiAoZXJyb3JNZXNzYWdlc1tpZF0pIHtcbiAgICAgIGRlbGV0ZSBlcnJvck1lc3NhZ2VzW2lkXTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2VzIH0pO1xuICAgIH1cbiAgfTtcblxuICB1cGRhdGVGb3JtSGFuZGxlciA9IChldmVudCwgZmllbGQpID0+IHtcbiAgICBjb25zdCB7IGZvcm1WYWx1ZXMsIGNvbmRpdGlvYW5sSWRzLCBjb25kaXRpb25GaWVsZHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IHsgaWQsIHR5cGUsIGlzUmVxdWlyZWQgfSA9IGZpZWxkO1xuICAgIC8vIFNldCBuZXcgdmFsdWVcbiAgICBsZXQgdmFsdWU7XG4gICAgaWYgKGZpZWxkLnR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuICAgICAgY29uc3QgdmFsdWVzID0gWy4uLmZvcm1WYWx1ZXNbZmllbGQuaWRdLnZhbHVlXTtcbiAgICAgIGNvbnN0IGluZGV4ID0gdmFsdWVzLmluZGV4T2YoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIHZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWVzLnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHZhbHVlID0gdmFsdWVzO1xuICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PSBcImRhdGVcIiAmJiBmaWVsZC5kYXRlVHlwZSAhPT0gXCJkYXRlcGlja2VyXCIpIHtcbiAgICAgIGNvbnN0IHsgc3ViSWQsIGRhdGVMYWJlbCB9ID0gZmllbGQ7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBbLi4uZm9ybVZhbHVlc1tmaWVsZC5pZF0udmFsdWVdO1xuICAgICAgdmFsdWVzW3N1YklkXSA9IHtcbiAgICAgICAgdmFsOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICAgIGxhYmVsOiBkYXRlTGFiZWxcbiAgICAgIH07XG4gICAgICB2YWx1ZSA9IHZhbHVlcztcbiAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT0gXCJjb25zZW50XCIpIHtcbiAgICAgIHZhbHVlID0gZXZlbnQudGFyZ2V0ID8gZXZlbnQudGFyZ2V0LmNoZWNrZWQgOiBcIm51bGxcIjtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09IFwicGFzc3dvcmRcIikge1xuICAgICAgY29uc3QgeyBzdWJJZCB9ID0gZmllbGQ7XG4gICAgICBjb25zdCB2YWx1ZXMgPVxuICAgICAgICBmb3JtVmFsdWVzW2ZpZWxkLmlkXSAmJiBmb3JtVmFsdWVzW2ZpZWxkLmlkXS52YWx1ZVxuICAgICAgICAgID8gWy4uLmZvcm1WYWx1ZXNbZmllbGQuaWRdLnZhbHVlXVxuICAgICAgICAgIDogW107XG4gICAgICB2YWx1ZXNbc3ViSWRdID0ge1xuICAgICAgICB2YWw6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfTtcbiAgICAgIHZhbHVlID0gdmFsdWVzO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldCA/IGV2ZW50LnRhcmdldC52YWx1ZSA6IFwibnVsbFwiO1xuICAgIH1cbiAgICAvLyBpZiBmaWVsZCBpcyBJQkFOXG4gICAgaWYgKHR5cGUgPT09IFwidGV4dFwiICYmIGZpZWxkLmNzc0NsYXNzLmluZGV4T2YoXCJpYmFuXCIpID4gLTEpIHtcbiAgICAgIHR5cGUgPSBcImliYW5cIjtcbiAgICB9XG5cbiAgICAvLyBWYWxpZGF0ZSBmaWVsZFxuICAgIGNvbnN0IHZhbGlkID0gdmFsaWRhdGVGaWVsZCh2YWx1ZSwgZmllbGQpO1xuXG4gICAgLy8gaWYgZmllbGQgSUQgaXMgc29tZXdoZXJlIGluIGNvbmRpdGlvbmFsIGZpZWxkc1xuICAgIC8vIHJlY2FsY3VsYXRlIGFsbCBjb25kaXRpb25zXG4gICAgaWYgKGNvbmRpdGlvYW5sSWRzLmluZGV4T2YoaWQpICE9PSAtMSkge1xuICAgICAgZm9ybVZhbHVlc1tpZF0udmFsdWUgPSB2YWx1ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZGl0aW9uRmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IGNvbmRpdGlvbkZpZWxkc1tpXTtcbiAgICAgICAgY29uc3QgaGlkZSA9IHRoaXMuY2hlY2tDb25kaXRpb25hbExvZ2ljKFxuICAgICAgICAgIGNvbmRpdGlvbkZpZWxkc1tpXS5jb25kaXRpb25hbExvZ2ljLFxuICAgICAgICAgIGZvcm1WYWx1ZXNcbiAgICAgICAgKTtcbiAgICAgICAgZm9ybVZhbHVlc1tpZF0uaGlkZUZpZWxkID0gaGlkZTtcbiAgICAgICAgaWYgKGhpZGUpIHtcbiAgICAgICAgICBpZiAoZm9ybVZhbHVlc1tpZF0uaXNSZXF1aXJlZCAmJiBoaWRlKSB7XG4gICAgICAgICAgICBmb3JtVmFsdWVzW2lkXS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvcm1WYWx1ZXNbaWRdLnZhbGlkID0gISFmb3JtVmFsdWVzW2lkXS5pc1JlcXVpcmVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgZm9ybVZhbHVlczoge1xuICAgICAgICAgIC4uLmZvcm1WYWx1ZXMsXG4gICAgICAgICAgW2lkXToge1xuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIHZhbGlkLFxuICAgICAgICAgICAgbGFiZWw6IGZpZWxkLmxhYmVsLFxuICAgICAgICAgICAgcGFnZU51bWJlcjogZmllbGQucGFnZU51bWJlcixcbiAgICAgICAgICAgIGNzc0NsYXNzOiBmaWVsZC5jc3NDbGFzcyxcbiAgICAgICAgICAgIGlzUmVxdWlyZWQ6IGZpZWxkLmlzUmVxdWlyZWRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIC8vIHBhc3Mgc3RhdGUgdG8gcGFyZW50IGNvbXBvbmVudFxuICAgICAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZSh0aGlzLnN0YXRlLmZvcm1WYWx1ZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfTtcblxuICBzY3JvbGxUb0NvbmZpcm1hdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy53cmFwcGVyUmVmXG4gICAgICA/IHRoaXMud3JhcHBlclJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgOiBmYWxzZTtcbiAgICBpZiAocmVjdCAmJiB3aW5kb3cpIHtcbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9XG4gICAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiBzY3JvbGxUb3AgKyByZWN0LnRvcCAtIDEwMFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIG9uU3VibWl0ID0gYXN5bmMgZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdWJtaXR0aW5nOiB0cnVlLFxuICAgICAgc3VibWl0U3VjY2VzczogZmFsc2UsXG4gICAgICBzdWJtaXRGYWlsZWQ6IGZhbHNlLFxuICAgICAgY29uZmlybWF0aW9uTWVzc2FnZTogZmFsc2UsXG4gICAgICBlcnJvck1lc3NhZ2VzOiBmYWxzZVxuICAgIH0pO1xuICAgIGNvbnN0IHsgZm9ybUlELCBiYWNrZW5kVXJsLCBqdW1wVG9Db25maXJtYXRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZ2ZTdWJtaXNzaW9uVXJsID0gYmFja2VuZFVybC5zdWJzdHJpbmcoXG4gICAgICAwLFxuICAgICAgYmFja2VuZFVybC5pbmRleE9mKFwiL3dwLWpzb25cIilcbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcbiAgICBheGlvc1xuICAgICAgLnBvc3QoXG4gICAgICAgIGAke2dmU3VibWlzc2lvblVybH0vd3AtanNvbi9nZi92Mi9mb3Jtcy8ke2Zvcm1JRH0vc3VibWlzc2lvbnNgLFxuICAgICAgICBkYXRhXG4gICAgICApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEuaXNfdmFsaWQpIHtcbiAgICAgICAgICBjb25zdCBjb25maXJtYXRpb25NZXNzYWdlID0gcmVzcG9uc2UuZGF0YS5jb25maXJtYXRpb25fbWVzc2FnZTtcbiAgICAgICAgICBjb25zdCB7IHR5cGUsIGxpbmsgfSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2UgfHwgZmFsc2U7XG4gICAgICAgICAgaWYgKHR5cGUgJiYgbGluayAmJiB0eXBlID09PSBcInJlZGlyZWN0XCIpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGxpbmspO1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICAgICAgICBzdWJtaXRTdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlybWF0aW9uTWVzc2FnZTogcmVzcG9uc2UuZGF0YS5jb25maXJtYXRpb25fbWVzc2FnZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChqdW1wVG9Db25maXJtYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9Db25maXJtYXRpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Ym1pdEZhaWxlZDogdHJ1ZSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZXM6IFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIlxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICAgICAgc3VibWl0RmFpbGVkOiB0cnVlLFxuICAgICAgICAgIGVycm9yTWVzc2FnZXM6IGVycm9yLnJlc3BvbnNlLmRhdGEudmFsaWRhdGlvbl9tZXNzYWdlc1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIG5leHRTdGVwID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgYWN0aXZlUGFnZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZVBhZ2U6IGFjdGl2ZVBhZ2UgKyAxXG4gICAgfSk7XG4gIH07XG5cbiAgcHJldlN0ZXAgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBhY3RpdmVQYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlUGFnZTogYWN0aXZlUGFnZSAtIDFcbiAgICB9KTtcbiAgfTtcblxuICBjaGVja0NvbmRpdGlvbmFsTG9naWMgPSAoY29uZGl0aW9uLCBmaWVsZHMgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IHsgcnVsZXMsIGFjdGlvblR5cGUgfSA9IGNvbmRpdGlvbjtcbiAgICBpZiAoIXJ1bGVzKSByZXR1cm4gdHJ1ZTtcblxuICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSBmaWVsZHMgfHwgdGhpcy5zdGF0ZS5mb3JtVmFsdWVzO1xuXG4gICAgLy8gc2hvdyBvbmx5IGlmIGlzIHNlbGVjdGVkIFwiQWxsIGZpZWxkc1wiIChpdCBzaG91bGQgYmUgdHdlYWtlZCBpbiBmdXR1cmUpXG4gICAgLy8gd29ya3Mgb25seSBcInNob3cvaGlkZSB3aGVuIGZpZWxkIGlzIGVxdWFsIHRvXCJcbiAgICBsZXQgaGlkZUZpZWxkID0gYWN0aW9uVHlwZSAhPT0gXCJoaWRlXCI7XG4gICAgY29uc3QgaGlkZUJhc2VkT25SdWxlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHsgZmllbGRJZCwgdmFsdWUgfSA9IHJ1bGVzW2ldO1xuICAgICAgY29uc3QgY29uZGl0aW9uRmllbGRWYWx1ZSA9XG4gICAgICAgIGZvcm1WYWx1ZXNbZmllbGRJZF0udmFsdWUgJiYgZm9ybVZhbHVlc1tmaWVsZElkXS52YWx1ZS52YWx1ZVxuICAgICAgICAgID8gZm9ybVZhbHVlc1tmaWVsZElkXS52YWx1ZS52YWx1ZVxuICAgICAgICAgIDogZm9ybVZhbHVlc1tmaWVsZElkXS52YWx1ZSB8fCBmYWxzZTtcblxuICAgICAgY29uc3Qgc3RyaW5nVmFsdWUgPSBBcnJheS5pc0FycmF5KGNvbmRpdGlvbkZpZWxkVmFsdWUpXG4gICAgICAgID8gY29uZGl0aW9uRmllbGRWYWx1ZS5qb2luKFwiXCIpXG4gICAgICAgIDogY29uZGl0aW9uRmllbGRWYWx1ZTtcbiAgICAgIGlmIChzdHJpbmdWYWx1ZSAmJiB2YWx1ZSA9PT0gc3RyaW5nVmFsdWUpIHtcbiAgICAgICAgaGlkZUJhc2VkT25SdWxlc1tpXSA9IGFjdGlvblR5cGUgPT09IFwiaGlkZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGlkZUJhc2VkT25SdWxlc1tpXSA9IGFjdGlvblR5cGUgIT09IFwiaGlkZVwiO1xuICAgICAgfVxuICAgIH1cbiAgICBoaWRlRmllbGQgPSBoaWRlQmFzZWRPblJ1bGVzLmV2ZXJ5KGkgPT4gaSA9PT0gdHJ1ZSk7XG4gICAgLy8gZm9ybVZhbHVlc1tpZF0uaGlkZUZpZWxkID0gaGlkZUZpZWxkO1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBmb3JtVmFsdWVzIH0pO1xuICAgIHJldHVybiBoaWRlRmllbGQ7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZvcm1EYXRhLFxuICAgICAgZm9ybVZhbHVlcyxcbiAgICAgIHN1Ym1pdEZhaWxlZCxcbiAgICAgIHN1Ym1pdFN1Y2Nlc3MsXG4gICAgICB0b3VjaGVkLFxuICAgICAgc3VibWl0dGluZyxcbiAgICAgIGFjdGl2ZVBhZ2UsXG4gICAgICBpc011bHRpcGFydFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlLFxuICAgICAgc3VibWl0SWNvbixcbiAgICAgIHNhdmVTdGF0ZVRvSHRtbEZpZWxkLFxuICAgICAgc3R5bGVkQ29tcG9uZW50cyxcbiAgICAgIGN1c3RvbUNvbXBvbmVudHMsXG4gICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICBkcm9wem9uZVRleHRcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IEJ1dHRvbiwgTG9hZGluZywgR0ZXcmFwcGVyID0gXCJkaXZcIiwgRm9ybUVycm9yOiBTRm9ybUVycm9yIH0gPVxuICAgICAgc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICAgIGNvbnN0IHsgY3NzQ2xhc3MgfSA9IGZvcm1EYXRhO1xuXG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IE9iamVjdC5rZXlzKGZvcm1WYWx1ZXMpLnNvbWUoXG4gICAgICB4ID0+ICFmb3JtVmFsdWVzW3hdLmhpZGVGaWVsZCAmJiBmb3JtVmFsdWVzW3hdLnZhbGlkXG4gICAgKTtcbiAgICBjb25zdCBpc05leHREaXNhYmxlZCA9IGFjdGl2ZVBhZ2VcbiAgICAgID8gT2JqZWN0LmtleXMoZm9ybVZhbHVlcykuc29tZShcbiAgICAgICAgICB4ID0+XG4gICAgICAgICAgICBmb3JtVmFsdWVzW3hdLnBhZ2VOdW1iZXIgPT09IGFjdGl2ZVBhZ2UgJiZcbiAgICAgICAgICAgICFmb3JtVmFsdWVzW3hdLmhpZGVGaWVsZCAmJlxuICAgICAgICAgICAgZm9ybVZhbHVlc1t4XS52YWxpZFxuICAgICAgICApXG4gICAgICA6IGZhbHNlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxHRldyYXBwZXJcbiAgICAgICAgcmVmPXtlbCA9PiAodGhpcy53cmFwcGVyUmVmID0gZWwpfVxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXdyYXBwZXJcIlxuICAgICAgICBjc3M9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fVxuICAgICAgICBpZD17YGdyYXZpdHlfZm9ybV8ke3RoaXMucHJvcHMuZm9ybUlEfWB9XG4gICAgICA+XG4gICAgICAgIHtmb3JtRGF0YS50aXRsZSA/IG51bGwgOiBMb2FkaW5nICYmIDxMb2FkaW5nIGlzTG9hZGluZyAvPn1cblxuICAgICAgICB7c3VibWl0RmFpbGVkICYmICFzdWJtaXRTdWNjZXNzICYmIChcbiAgICAgICAgICA8Rm9ybUVycm9yXG4gICAgICAgICAgICBTRm9ybUVycm9yPXtTRm9ybUVycm9yIHx8IGZhbHNlfVxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlPXtcbiAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlIHx8IFwiVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHlvdXIgc3VibWlzc2lvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7c3VibWl0U3VjY2VzcyAmJiB0aGlzLnN0YXRlLmNvbmZpcm1hdGlvbk1lc3NhZ2UgJiYgKFxuICAgICAgICAgIDxGb3JtQ29uZmlybWF0aW9uIGNvbmZpcm1hdGlvbj17dGhpcy5zdGF0ZS5jb25maXJtYXRpb25NZXNzYWdlfSAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHshc3VibWl0U3VjY2VzcyAmJiBmb3JtRGF0YS5maWVsZHMgPyAoXG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIG9uU3VibWl0PXtlID0+IHRoaXMub25TdWJtaXQoZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nzc0NsYXNzfVxuICAgICAgICAgICAgZW5jVHlwZT17aXNNdWx0aXBhcnQgPyBcIm11bHRpcGFydC9mb3JtLWRhdGFcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIG5vVmFsaWRhdGVcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7KGZvcm1EYXRhLnRpdGxlIHx8IGZvcm1EYXRhLmRlc2NyaXB0aW9uKSAmJiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2Zvcm1EYXRhLnRpdGxlICYmIHRpdGxlID8gKFxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvcm0tdGl0bGVcIj57Zm9ybURhdGEudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICB7Zm9ybURhdGEuZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb3JtLWRlc2NyaXB0aW9uXCI+e2Zvcm1EYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0td3JhcHBlclwiPlxuICAgICAgICAgICAgICA8UmVuZGVyRmllbGRzXG4gICAgICAgICAgICAgICAgc3R5bGVkQ29tcG9uZW50cz17c3R5bGVkQ29tcG9uZW50c31cbiAgICAgICAgICAgICAgICBjdXN0b21Db21wb25lbnRzPXtjdXN0b21Db21wb25lbnRzfVxuICAgICAgICAgICAgICAgIGZpZWxkcz17Zm9ybURhdGEuZmllbGRzfVxuICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXM9e2Zvcm1WYWx1ZXN9XG4gICAgICAgICAgICAgICAgc3VibWl0RmFpbGVkPXtzdWJtaXRGYWlsZWR9XG4gICAgICAgICAgICAgICAgc3VibWl0U3VjY2Vzcz17c3VibWl0U3VjY2Vzc31cbiAgICAgICAgICAgICAgICB1cGRhdGVGb3JtPXt0aGlzLnVwZGF0ZUZvcm1IYW5kbGVyfVxuICAgICAgICAgICAgICAgIHRvdWNoZWQ9e3RvdWNoZWR9XG4gICAgICAgICAgICAgICAgc2V0VG91Y2hlZD17dGhpcy5zZXRUb3VjaGVkfVxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e2Zvcm1EYXRhLnBhZ2luYXRpb259XG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZT17YWN0aXZlUGFnZX1cbiAgICAgICAgICAgICAgICBwcmV2U3RlcD17dGhpcy5wcmV2U3RlcH1cbiAgICAgICAgICAgICAgICBuZXh0U3RlcD17dGhpcy5uZXh0U3RlcH1cbiAgICAgICAgICAgICAgICBpc05leHREaXNhYmxlZD17aXNOZXh0RGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgY2hlY2tDb25kaXRpb25hbExvZ2ljPXt0aGlzLmNoZWNrQ29uZGl0aW9uYWxMb2dpY31cbiAgICAgICAgICAgICAgICBzYXZlU3RhdGVUb0h0bWxGaWVsZD17c2F2ZVN0YXRlVG9IdG1sRmllbGR9XG4gICAgICAgICAgICAgICAgZW5hYmxlSG9uZXlwb3Q9e2Zvcm1EYXRhLmVuYWJsZUhvbmV5cG90fVxuICAgICAgICAgICAgICAgIGVycm9ycz17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2VzfVxuICAgICAgICAgICAgICAgIHVuc2V0RXJyb3I9e3RoaXMudW5zZXRFcnJvcn1cbiAgICAgICAgICAgICAgICBkcm9wem9uZVRleHQ9e2Ryb3B6b25lVGV4dH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgeyghZm9ybURhdGEucGFnaW5hdGlvbiB8fFxuICAgICAgICAgICAgICAgIChmb3JtRGF0YS5wYWdpbmF0aW9uICYmXG4gICAgICAgICAgICAgICAgICBmb3JtRGF0YS5wYWdpbmF0aW9uLnBhZ2VzLmxlbmd0aCA9PT0gYWN0aXZlUGFnZSkpICYmIChcbiAgICAgICAgICAgICAgICA8U3VibWl0XG4gICAgICAgICAgICAgICAgICBCdXR0b249e0J1dHRvbn1cbiAgICAgICAgICAgICAgICAgIExvYWRpbmc9e0xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICBmb3JtRGF0YT17Zm9ybURhdGF9XG4gICAgICAgICAgICAgICAgICBzdWJtaXRJY29uPXtzdWJtaXRJY29ufVxuICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17aXNEaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgIHN1Ym1pdHRpbmc9e3N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgICBwcmV2U3RlcD17dGhpcy5wcmV2U3RlcH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApIDogKFxuICAgICAgICAgIFwiXCJcbiAgICAgICAgKX1cbiAgICAgIDwvR0ZXcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cblxuR3Jhdml0eUZvcm0uZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogdHJ1ZSxcbiAgc3VibWl0SWNvbjogZmFsc2UsXG4gIHNhdmVTdGF0ZVRvSHRtbEZpZWxkOiBmYWxzZSxcbiAganVtcFRvQ29uZmlybWF0aW9uOiB0cnVlXG59O1xuXG5leHBvcnQgeyB2YWxpZGF0ZUZpZWxkLCBGb3JtQ29uZmlybWF0aW9uLCBGb3JtRXJyb3IsIFJlbmRlckZpZWxkcywgU3VibWl0IH07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXZpdHlGb3JtO1xuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHcmF2aXR5Rm9ybSIsInByb3BzIiwiaWQiLCJzZXRTdGF0ZSIsInRvdWNoZWQiLCJzdGF0ZSIsImVycm9yTWVzc2FnZXMiLCJldmVudCIsImZpZWxkIiwiZm9ybVZhbHVlcyIsImNvbmRpdGlvYW5sSWRzIiwiY29uZGl0aW9uRmllbGRzIiwidHlwZSIsImlzUmVxdWlyZWQiLCJ2YWx1ZSIsInZhbHVlcyIsImluZGV4IiwiaW5kZXhPZiIsInRhcmdldCIsInNwbGljZSIsInB1c2giLCJkYXRlVHlwZSIsInN1YklkIiwiZGF0ZUxhYmVsIiwidmFsIiwibGFiZWwiLCJjaGVja2VkIiwiY3NzQ2xhc3MiLCJ2YWxpZCIsImkiLCJsZW5ndGgiLCJoaWRlIiwiY2hlY2tDb25kaXRpb25hbExvZ2ljIiwiY29uZGl0aW9uYWxMb2dpYyIsImhpZGVGaWVsZCIsInBhZ2VOdW1iZXIiLCJvbkNoYW5nZSIsInJlY3QiLCJ3cmFwcGVyUmVmIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvIiwidG9wIiwicHJldmVudERlZmF1bHQiLCJzdWJtaXR0aW5nIiwic3VibWl0U3VjY2VzcyIsInN1Ym1pdEZhaWxlZCIsImNvbmZpcm1hdGlvbk1lc3NhZ2UiLCJmb3JtSUQiLCJiYWNrZW5kVXJsIiwianVtcFRvQ29uZmlybWF0aW9uIiwiZ2ZTdWJtaXNzaW9uVXJsIiwic3Vic3RyaW5nIiwiZGF0YSIsIkZvcm1EYXRhIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiaXNfdmFsaWQiLCJjb25maXJtYXRpb25fbWVzc2FnZSIsImxpbmsiLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJzY3JvbGxUb0NvbmZpcm1hdGlvbiIsImVycm9yIiwidmFsaWRhdGlvbl9tZXNzYWdlcyIsImUiLCJhY3RpdmVQYWdlIiwiY29uZGl0aW9uIiwiZmllbGRzIiwicnVsZXMiLCJhY3Rpb25UeXBlIiwiaGlkZUJhc2VkT25SdWxlcyIsImZpZWxkSWQiLCJjb25kaXRpb25GaWVsZFZhbHVlIiwic3RyaW5nVmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJqb2luIiwiZXZlcnkiLCJsb2FkaW5nIiwiaXNWYWxpZCIsImZvcm1EYXRhIiwiaXNNdWx0aXBhcnQiLCJwb3B1bGF0ZWRGaWVsZHMiLCJfaXNNb3VudGVkIiwiZ2V0IiwiZm9ybSIsImhhc1BvcHVsYXRpb24iLCJpbnB1dE5hbWUiLCJjaG9pY2VzIiwiZmlsdGVyIiwiY2hvaWNlIiwiaXNTZWxlY3RlZCIsIm1hcCIsInByZXNlbGVjdGVkIiwiZmluZCIsInNlbGVjdGVkT3B0aW9uIiwiaXRlbSIsInRleHQiLCJkZWZhdWx0VmFsdWUiLCJ0bXBGaWVsZCIsImlkcyIsInBhcnNlSW50IiwicGFnaW5hdGlvbiIsInRpdGxlIiwic3VibWl0SWNvbiIsInNhdmVTdGF0ZVRvSHRtbEZpZWxkIiwic3R5bGVkQ29tcG9uZW50cyIsImN1c3RvbUNvbXBvbmVudHMiLCJlcnJvck1lc3NhZ2UiLCJkcm9wem9uZVRleHQiLCJCdXR0b24iLCJMb2FkaW5nIiwiR0ZXcmFwcGVyIiwiU0Zvcm1FcnJvciIsIkZvcm1FcnJvciIsImlzRGlzYWJsZWQiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsIngiLCJpc05leHREaXNhYmxlZCIsImVsIiwicG9zaXRpb24iLCJvblN1Ym1pdCIsInVuZGVmaW5lZCIsImRlc2NyaXB0aW9uIiwidXBkYXRlRm9ybUhhbmRsZXIiLCJzZXRUb3VjaGVkIiwicHJldlN0ZXAiLCJuZXh0U3RlcCIsImVuYWJsZUhvbmV5cG90IiwidW5zZXRFcnJvciIsInBhZ2VzIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7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RmE7QUFHekJDLEVBQUFBLG9CQUFvQixFQUFFLEtBSEc7QUFJekIxRCxFQUFBQSxrQkFBa0IsRUFBRTtBQUpLLENBQTNCO2VBU2V0RCxXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlbmRlckZpZWxkcyBmcm9tIFwiLi9Gb3JtRWxlbWVudHMvUmVuZGVyRmllbGRzXCI7XG5pbXBvcnQgRm9ybUVycm9yIGZyb20gXCIuL0Zvcm1FbGVtZW50cy9Gb3JtRXJyb3JcIjtcbmltcG9ydCBGb3JtQ29uZmlybWF0aW9uIGZyb20gXCIuL0Zvcm1FbGVtZW50cy9Gb3JtQ29uZmlybWF0aW9uXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZUZpZWxkIH0gZnJvbSBcIi4vSGVscGVycy92YWxpZGF0aW9uXCI7XG5pbXBvcnQgU3VibWl0IGZyb20gXCIuL0Zvcm1FbGVtZW50cy9TdWJtaXRcIjtcblxuY2xhc3MgR3Jhdml0eUZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3VibWl0RmFpbGVkOiBmYWxzZSxcbiAgICAgIGVycm9yTWVzc2FnZXM6IGZhbHNlLFxuICAgICAgZm9ybVZhbHVlczoge30sXG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICBzdWJtaXRTdWNjZXNzOiBmYWxzZSxcbiAgICAgIGNvbmZpcm1hdGlvbk1lc3NhZ2U6IGZhbHNlLFxuICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgICBmb3JtRGF0YToge30sXG4gICAgICB0b3VjaGVkOiB7fSxcbiAgICAgIGFjdGl2ZVBhZ2U6IGZhbHNlLFxuICAgICAgY29uZGl0aW9uRmllbGRzOiB7fSxcbiAgICAgIGNvbmRpdGlvYW5sSWRzOiB7fSxcbiAgICAgIGlzTXVsdGlwYXJ0OiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGZvcm1JRCwgYmFja2VuZFVybCwgcG9wdWxhdGVkRmllbGRzIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgbGV0IGlzTXVsdGlwYXJ0ID0gZmFsc2U7XG4gICAgY29uc3QgZm9ybSA9IGF3YWl0IGF4aW9zXG4gICAgICAuZ2V0KGAke2JhY2tlbmRVcmx9LyR7Zm9ybUlEfWApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKVxuICAgICAgLmNhdGNoKCgpID0+IGZhbHNlKTtcblxuICAgIGlmIChmb3JtICYmIHRoaXMuX2lzTW91bnRlZCkge1xuICAgICAgY29uc3QgZm9ybVZhbHVlcyA9IHt9O1xuICAgICAgY29uc3QgY29uZGl0aW9uRmllbGRzID0gW107XG4gICAgICBjb25zdCBjb25kaXRpb2FubElkcyA9IFtdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIGZvcm0uZmllbGRzKSB7XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgY29uc3QgaGFzUG9wdWxhdGlvbiA9XG4gICAgICAgICAgZmllbGQuaW5wdXROYW1lICYmXG4gICAgICAgICAgcG9wdWxhdGVkRmllbGRzICYmXG4gICAgICAgICAgcG9wdWxhdGVkRmllbGRzW2ZpZWxkLmlucHV0TmFtZV07XG4gICAgICAgIGlmIChmaWVsZC50eXBlID09PSBcImNoZWNrYm94XCIpIHtcbiAgICAgICAgICB2YWx1ZSA9IGZpZWxkLmNob2ljZXNcbiAgICAgICAgICAgIC5maWx0ZXIoY2hvaWNlID0+XG4gICAgICAgICAgICAgIGhhc1BvcHVsYXRpb25cbiAgICAgICAgICAgICAgICA/IGNob2ljZS52YWx1ZSA9PT0gcG9wdWxhdGVkRmllbGRzW2ZpZWxkLmlucHV0TmFtZV1cbiAgICAgICAgICAgICAgICA6IGNob2ljZS5pc1NlbGVjdGVkXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAubWFwKGNob2ljZSA9PiBjaG9pY2UudmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09IFwicmFkaW9cIikge1xuICAgICAgICAgIGlmIChoYXNQb3B1bGF0aW9uKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHBvcHVsYXRlZEZpZWxkc1tmaWVsZC5pbnB1dE5hbWVdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwcmVzZWxlY3RlZCA9IGZpZWxkLmNob2ljZXMuZmluZChjaG9pY2UgPT4gY2hvaWNlLmlzU2VsZWN0ZWQpO1xuICAgICAgICAgICAgdmFsdWUgPSBwcmVzZWxlY3RlZCA/IHByZXNlbGVjdGVkLnZhbHVlIDogXCJcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gXCJzZWxlY3RcIikge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gZmllbGQuY2hvaWNlc1xuICAgICAgICAgICAgLmZpbHRlcihjaG9pY2UgPT5cbiAgICAgICAgICAgICAgaGFzUG9wdWxhdGlvblxuICAgICAgICAgICAgICAgID8gY2hvaWNlLnZhbHVlID09PSBwb3B1bGF0ZWRGaWVsZHNbZmllbGQuaW5wdXROYW1lXVxuICAgICAgICAgICAgICAgIDogY2hvaWNlLmlzU2VsZWN0ZWRcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5tYXAoaXRlbSA9PiAoeyB2YWx1ZTogaXRlbS52YWx1ZSwgbGFiZWw6IGl0ZW0udGV4dCB9KSk7XG4gICAgICAgICAgdmFsdWUgPVxuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb24gJiYgc2VsZWN0ZWRPcHRpb24ubGVuZ3RoID4gMFxuICAgICAgICAgICAgICA/IHNlbGVjdGVkT3B0aW9uWzBdXG4gICAgICAgICAgICAgIDogXCJcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IGhhc1BvcHVsYXRpb25cbiAgICAgICAgICAgID8gcG9wdWxhdGVkRmllbGRzW2ZpZWxkLmlucHV0TmFtZV1cbiAgICAgICAgICAgIDogZmllbGQuZGVmYXVsdFZhbHVlO1xuICAgICAgICAgIGlmIChmaWVsZC50eXBlID09PSBcImZpbGV1cGxvYWRcIikge1xuICAgICAgICAgICAgaXNNdWx0aXBhcnQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdyYWIgYWxsIGNvbmRpdGlvbmFsIGxvZ2ljIGZpZWxkc1xuICAgICAgICBpZiAoZmllbGQuY29uZGl0aW9uYWxMb2dpYykge1xuICAgICAgICAgIGNvbnN0IHRtcEZpZWxkID0ge1xuICAgICAgICAgICAgaWQ6IGZpZWxkLmlkLFxuICAgICAgICAgICAgY29uZGl0aW9uYWxMb2dpYzogZmllbGQuY29uZGl0aW9uYWxMb2dpY1xuICAgICAgICAgIH07XG4gICAgICAgICAgY29uc3QgaWRzID0gZmllbGQuY29uZGl0aW9uYWxMb2dpYy5ydWxlcy5tYXAoaXRlbSA9PiBpdGVtLmZpZWxkSWQpO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHBhcnNlSW50KGlkc1tpXSk7XG4gICAgICAgICAgICBpZiAoY29uZGl0aW9hbmxJZHMuaW5kZXhPZihpZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIGNvbmRpdGlvYW5sSWRzLnB1c2goaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25kaXRpb25GaWVsZHMucHVzaCh0bXBGaWVsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtVmFsdWVzW2ZpZWxkLmlkXSA9IHtcbiAgICAgICAgICB2YWxpZDogdmFsaWRhdGVGaWVsZCh2YWx1ZSwgZmllbGQpLFxuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIGxhYmVsOiBmaWVsZC5sYWJlbCxcbiAgICAgICAgICBwYWdlTnVtYmVyOiBmaWVsZC5wYWdlTnVtYmVyLFxuICAgICAgICAgIGNzc0NsYXNzOiBmaWVsZC5jc3NDbGFzcyxcbiAgICAgICAgICBpc1JlcXVpcmVkOiBmaWVsZC5pc1JlcXVpcmVkXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICAvLyBjaGVjayBjb25kaXRpb24gbG9naWNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZGl0aW9uRmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvcm1WYWx1ZXNbXG4gICAgICAgICAgY29uZGl0aW9uRmllbGRzW2ldLmlkXG4gICAgICAgIF0uaGlkZUZpZWxkID0gdGhpcy5jaGVja0NvbmRpdGlvbmFsTG9naWMoXG4gICAgICAgICAgY29uZGl0aW9uRmllbGRzW2ldLmNvbmRpdGlvbmFsTG9naWMsXG4gICAgICAgICAgZm9ybVZhbHVlc1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9ybURhdGE6IGZvcm0sXG4gICAgICAgIGZvcm1WYWx1ZXMsXG4gICAgICAgIGFjdGl2ZVBhZ2U6IGZvcm0ucGFnaW5hdGlvbiA/IDEgOiBmYWxzZSxcbiAgICAgICAgY29uZGl0aW9uRmllbGRzLFxuICAgICAgICBjb25kaXRpb2FubElkcyxcbiAgICAgICAgaXNNdWx0aXBhcnRcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuICB9XG5cbiAgc2V0VG91Y2hlZCA9IGlkID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRvdWNoZWQ6IHsgLi4udGhpcy5zdGF0ZS50b3VjaGVkLCBbaWRdOiB0cnVlIH1cbiAgICB9KTtcbiAgfTtcblxuICB1bnNldEVycm9yID0gaWQgPT4ge1xuICAgIGNvbnN0IHsgZXJyb3JNZXNzYWdlcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoIWVycm9yTWVzc2FnZXMpIHJldHVybjtcblxuICAgIGlmIChlcnJvck1lc3NhZ2VzW2lkXSkge1xuICAgICAgZGVsZXRlIGVycm9yTWVzc2FnZXNbaWRdO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZXMgfSk7XG4gICAgfVxuICB9O1xuXG4gIHVwZGF0ZUZvcm1IYW5kbGVyID0gKGV2ZW50LCBmaWVsZCkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybVZhbHVlcywgY29uZGl0aW9hbmxJZHMsIGNvbmRpdGlvbkZpZWxkcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgeyBpZCwgdHlwZSwgaXNSZXF1aXJlZCB9ID0gZmllbGQ7XG4gICAgLy8gU2V0IG5ldyB2YWx1ZVxuICAgIGxldCB2YWx1ZTtcbiAgICBpZiAoZmllbGQudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBbLi4uZm9ybVZhbHVlc1tmaWVsZC5pZF0udmFsdWVdO1xuICAgICAgY29uc3QgaW5kZXggPSB2YWx1ZXMuaW5kZXhPZihldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgdmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZXMucHVzaChldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgfVxuICAgICAgdmFsdWUgPSB2YWx1ZXM7XG4gICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09IFwiZGF0ZVwiICYmIGZpZWxkLmRhdGVUeXBlICE9PSBcImRhdGVwaWNrZXJcIikge1xuICAgICAgY29uc3QgeyBzdWJJZCwgZGF0ZUxhYmVsIH0gPSBmaWVsZDtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IFsuLi5mb3JtVmFsdWVzW2ZpZWxkLmlkXS52YWx1ZV07XG4gICAgICB2YWx1ZXNbc3ViSWRdID0ge1xuICAgICAgICB2YWw6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgICAgbGFiZWw6IGRhdGVMYWJlbFxuICAgICAgfTtcbiAgICAgIHZhbHVlID0gdmFsdWVzO1xuICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PSBcImNvbnNlbnRcIikge1xuICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQgPyBldmVudC50YXJnZXQuY2hlY2tlZCA6IFwibnVsbFwiO1xuICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gXCJwYXNzd29yZFwiKSB7XG4gICAgICBjb25zdCB7IHN1YklkIH0gPSBmaWVsZDtcbiAgICAgIGNvbnN0IHZhbHVlcyA9XG4gICAgICAgIGZvcm1WYWx1ZXNbZmllbGQuaWRdICYmIGZvcm1WYWx1ZXNbZmllbGQuaWRdLnZhbHVlXG4gICAgICAgICAgPyBbLi4uZm9ybVZhbHVlc1tmaWVsZC5pZF0udmFsdWVdXG4gICAgICAgICAgOiBbXTtcbiAgICAgIHZhbHVlc1tzdWJJZF0gPSB7XG4gICAgICAgIHZhbDogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9O1xuICAgICAgdmFsdWUgPSB2YWx1ZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gZXZlbnQudGFyZ2V0ID8gZXZlbnQudGFyZ2V0LnZhbHVlIDogXCJudWxsXCI7XG4gICAgfVxuICAgIC8vIGlmIGZpZWxkIGlzIElCQU5cbiAgICBpZiAodHlwZSA9PT0gXCJ0ZXh0XCIgJiYgZmllbGQuY3NzQ2xhc3MuaW5kZXhPZihcImliYW5cIikgPiAtMSkge1xuICAgICAgdHlwZSA9IFwiaWJhblwiO1xuICAgIH1cblxuICAgIC8vIFZhbGlkYXRlIGZpZWxkXG4gICAgY29uc3QgdmFsaWQgPSB2YWxpZGF0ZUZpZWxkKHZhbHVlLCBmaWVsZCk7XG5cbiAgICAvLyBpZiBmaWVsZCBJRCBpcyBzb21ld2hlcmUgaW4gY29uZGl0aW9uYWwgZmllbGRzXG4gICAgLy8gcmVjYWxjdWxhdGUgYWxsIGNvbmRpdGlvbnNcbiAgICBpZiAoY29uZGl0aW9hbmxJZHMuaW5kZXhPZihpZCkgIT09IC0xKSB7XG4gICAgICBmb3JtVmFsdWVzW2lkXS52YWx1ZSA9IHZhbHVlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25kaXRpb25GaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gY29uZGl0aW9uRmllbGRzW2ldO1xuICAgICAgICBjb25zdCBoaWRlID0gdGhpcy5jaGVja0NvbmRpdGlvbmFsTG9naWMoXG4gICAgICAgICAgY29uZGl0aW9uRmllbGRzW2ldLmNvbmRpdGlvbmFsTG9naWMsXG4gICAgICAgICAgZm9ybVZhbHVlc1xuICAgICAgICApO1xuICAgICAgICBmb3JtVmFsdWVzW2lkXS5oaWRlRmllbGQgPSBoaWRlO1xuICAgICAgICBpZiAoaGlkZSkge1xuICAgICAgICAgIGlmIChmb3JtVmFsdWVzW2lkXS5pc1JlcXVpcmVkICYmIGhpZGUpIHtcbiAgICAgICAgICAgIGZvcm1WYWx1ZXNbaWRdLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9ybVZhbHVlc1tpZF0udmFsaWQgPSAhIWZvcm1WYWx1ZXNbaWRdLmlzUmVxdWlyZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBmb3JtVmFsdWVzOiB7XG4gICAgICAgICAgLi4uZm9ybVZhbHVlcyxcbiAgICAgICAgICBbaWRdOiB7XG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgdmFsaWQsXG4gICAgICAgICAgICBsYWJlbDogZmllbGQubGFiZWwsXG4gICAgICAgICAgICBwYWdlTnVtYmVyOiBmaWVsZC5wYWdlTnVtYmVyLFxuICAgICAgICAgICAgY3NzQ2xhc3M6IGZpZWxkLmNzc0NsYXNzLFxuICAgICAgICAgICAgaXNSZXF1aXJlZDogZmllbGQuaXNSZXF1aXJlZFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgLy8gcGFzcyBzdGF0ZSB0byBwYXJlbnQgY29tcG9uZW50XG4gICAgICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKHRoaXMuc3RhdGUuZm9ybVZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9O1xuXG4gIHNjcm9sbFRvQ29uZmlybWF0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSB0aGlzLndyYXBwZXJSZWZcbiAgICAgID8gdGhpcy53cmFwcGVyUmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICA6IGZhbHNlO1xuICAgIGlmIChyZWN0ICYmIHdpbmRvdykge1xuICAgICAgY29uc3Qgc2Nyb2xsVG9wID1cbiAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IHNjcm9sbFRvcCArIHJlY3QudG9wIC0gMTAwXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgb25TdWJtaXQgPSBhc3luYyBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN1Ym1pdHRpbmc6IHRydWUsXG4gICAgICBzdWJtaXRTdWNjZXNzOiBmYWxzZSxcbiAgICAgIHN1Ym1pdEZhaWxlZDogZmFsc2UsXG4gICAgICBjb25maXJtYXRpb25NZXNzYWdlOiBmYWxzZSxcbiAgICAgIGVycm9yTWVzc2FnZXM6IGZhbHNlXG4gICAgfSk7XG4gICAgY29uc3QgeyBmb3JtSUQsIGJhY2tlbmRVcmwsIGp1bXBUb0NvbmZpcm1hdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBnZlN1Ym1pc3Npb25VcmwgPSBiYWNrZW5kVXJsLnN1YnN0cmluZyhcbiAgICAgIDAsXG4gICAgICBiYWNrZW5kVXJsLmluZGV4T2YoXCIvd3AtanNvblwiKVxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpO1xuICAgIGF4aW9zXG4gICAgICAucG9zdChcbiAgICAgICAgYCR7Z2ZTdWJtaXNzaW9uVXJsfS93cC1qc29uL2dmL3YyL2Zvcm1zLyR7Zm9ybUlEfS9zdWJtaXNzaW9uc2AsXG4gICAgICAgIGRhdGFcbiAgICAgIClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5pc192YWxpZCkge1xuICAgICAgICAgIGNvbnN0IGNvbmZpcm1hdGlvbk1lc3NhZ2UgPSByZXNwb25zZS5kYXRhLmNvbmZpcm1hdGlvbl9tZXNzYWdlO1xuICAgICAgICAgIGNvbnN0IHsgdHlwZSwgbGluayB9ID0gY29uZmlybWF0aW9uTWVzc2FnZSB8fCBmYWxzZTtcbiAgICAgICAgICBpZiAodHlwZSAmJiBsaW5rICYmIHR5cGUgPT09IFwicmVkaXJlY3RcIikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UobGluayk7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Ym1pdFN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICBjb25maXJtYXRpb25NZXNzYWdlOiByZXNwb25zZS5kYXRhLmNvbmZpcm1hdGlvbl9tZXNzYWdlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGp1bXBUb0NvbmZpcm1hdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0NvbmZpcm1hdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc3VibWl0RmFpbGVkOiB0cnVlLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlczogXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgICAgICBzdWJtaXRGYWlsZWQ6IHRydWUsXG4gICAgICAgICAgZXJyb3JNZXNzYWdlczogZXJyb3IucmVzcG9uc2UuZGF0YS52YWxpZGF0aW9uX21lc3NhZ2VzXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgbmV4dFN0ZXAgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBhY3RpdmVQYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlUGFnZTogYWN0aXZlUGFnZSArIDFcbiAgICB9KTtcbiAgfTtcblxuICBwcmV2U3RlcCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IGFjdGl2ZVBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVQYWdlOiBhY3RpdmVQYWdlIC0gMVxuICAgIH0pO1xuICB9O1xuXG4gIGNoZWNrQ29uZGl0aW9uYWxMb2dpYyA9IChjb25kaXRpb24sIGZpZWxkcyA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgeyBydWxlcywgYWN0aW9uVHlwZSB9ID0gY29uZGl0aW9uO1xuICAgIGlmICghcnVsZXMpIHJldHVybiB0cnVlO1xuXG4gICAgY29uc3QgZm9ybVZhbHVlcyA9IGZpZWxkcyB8fCB0aGlzLnN0YXRlLmZvcm1WYWx1ZXM7XG5cbiAgICAvLyBzaG93IG9ubHkgaWYgaXMgc2VsZWN0ZWQgXCJBbGwgZmllbGRzXCIgKGl0IHNob3VsZCBiZSB0d2Vha2VkIGluIGZ1dHVyZSlcbiAgICAvLyB3b3JrcyBvbmx5IFwic2hvdy9oaWRlIHdoZW4gZmllbGQgaXMgZXF1YWwgdG9cIlxuICAgIGxldCBoaWRlRmllbGQgPSBhY3Rpb25UeXBlICE9PSBcImhpZGVcIjtcbiAgICBjb25zdCBoaWRlQmFzZWRPblJ1bGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgeyBmaWVsZElkLCB2YWx1ZSB9ID0gcnVsZXNbaV07XG4gICAgICBjb25zdCBjb25kaXRpb25GaWVsZFZhbHVlID0gZm9ybVZhbHVlc1tmaWVsZElkXS52YWx1ZTtcblxuICAgICAgY29uc3Qgc3RyaW5nVmFsdWUgPSBBcnJheS5pc0FycmF5KGNvbmRpdGlvbkZpZWxkVmFsdWUpXG4gICAgICAgID8gY29uZGl0aW9uRmllbGRWYWx1ZS5qb2luKFwiXCIpXG4gICAgICAgIDogY29uZGl0aW9uRmllbGRWYWx1ZTtcbiAgICAgIGlmIChzdHJpbmdWYWx1ZSAmJiB2YWx1ZSA9PT0gc3RyaW5nVmFsdWUpIHtcbiAgICAgICAgaGlkZUJhc2VkT25SdWxlc1tpXSA9IGFjdGlvblR5cGUgPT09IFwiaGlkZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGlkZUJhc2VkT25SdWxlc1tpXSA9IGFjdGlvblR5cGUgIT09IFwiaGlkZVwiO1xuICAgICAgfVxuICAgIH1cbiAgICBoaWRlRmllbGQgPSBoaWRlQmFzZWRPblJ1bGVzLmV2ZXJ5KGkgPT4gaSA9PT0gdHJ1ZSk7XG4gICAgLy8gZm9ybVZhbHVlc1tpZF0uaGlkZUZpZWxkID0gaGlkZUZpZWxkO1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBmb3JtVmFsdWVzIH0pO1xuICAgIHJldHVybiBoaWRlRmllbGQ7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZvcm1EYXRhLFxuICAgICAgZm9ybVZhbHVlcyxcbiAgICAgIHN1Ym1pdEZhaWxlZCxcbiAgICAgIHN1Ym1pdFN1Y2Nlc3MsXG4gICAgICB0b3VjaGVkLFxuICAgICAgc3VibWl0dGluZyxcbiAgICAgIGFjdGl2ZVBhZ2UsXG4gICAgICBpc011bHRpcGFydFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlLFxuICAgICAgc3VibWl0SWNvbixcbiAgICAgIHNhdmVTdGF0ZVRvSHRtbEZpZWxkLFxuICAgICAgc3R5bGVkQ29tcG9uZW50cyxcbiAgICAgIGN1c3RvbUNvbXBvbmVudHMsXG4gICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICBkcm9wem9uZVRleHRcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IEJ1dHRvbiwgTG9hZGluZywgR0ZXcmFwcGVyID0gXCJkaXZcIiwgRm9ybUVycm9yOiBTRm9ybUVycm9yIH0gPVxuICAgICAgc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICAgIGNvbnN0IHsgY3NzQ2xhc3MgfSA9IGZvcm1EYXRhO1xuXG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IE9iamVjdC5rZXlzKGZvcm1WYWx1ZXMpLnNvbWUoXG4gICAgICB4ID0+ICFmb3JtVmFsdWVzW3hdLmhpZGVGaWVsZCAmJiBmb3JtVmFsdWVzW3hdLnZhbGlkXG4gICAgKTtcbiAgICBjb25zdCBpc05leHREaXNhYmxlZCA9IGFjdGl2ZVBhZ2VcbiAgICAgID8gT2JqZWN0LmtleXMoZm9ybVZhbHVlcykuc29tZShcbiAgICAgICAgICB4ID0+XG4gICAgICAgICAgICBmb3JtVmFsdWVzW3hdLnBhZ2VOdW1iZXIgPT09IGFjdGl2ZVBhZ2UgJiZcbiAgICAgICAgICAgICFmb3JtVmFsdWVzW3hdLmhpZGVGaWVsZCAmJlxuICAgICAgICAgICAgZm9ybVZhbHVlc1t4XS52YWxpZFxuICAgICAgICApXG4gICAgICA6IGZhbHNlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxHRldyYXBwZXJcbiAgICAgICAgcmVmPXtlbCA9PiAodGhpcy53cmFwcGVyUmVmID0gZWwpfVxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXdyYXBwZXJcIlxuICAgICAgICBjc3M9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fVxuICAgICAgICBpZD17YGdyYXZpdHlfZm9ybV8ke3RoaXMucHJvcHMuZm9ybUlEfWB9XG4gICAgICA+XG4gICAgICAgIHtmb3JtRGF0YS50aXRsZSA/IG51bGwgOiBMb2FkaW5nICYmIDxMb2FkaW5nIGlzTG9hZGluZyAvPn1cblxuICAgICAgICB7c3VibWl0RmFpbGVkICYmICFzdWJtaXRTdWNjZXNzICYmIChcbiAgICAgICAgICA8Rm9ybUVycm9yXG4gICAgICAgICAgICBTRm9ybUVycm9yPXtTRm9ybUVycm9yIHx8IGZhbHNlfVxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlPXtcbiAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlIHx8IFwiVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHlvdXIgc3VibWlzc2lvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7c3VibWl0U3VjY2VzcyAmJiB0aGlzLnN0YXRlLmNvbmZpcm1hdGlvbk1lc3NhZ2UgJiYgKFxuICAgICAgICAgIDxGb3JtQ29uZmlybWF0aW9uIGNvbmZpcm1hdGlvbj17dGhpcy5zdGF0ZS5jb25maXJtYXRpb25NZXNzYWdlfSAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHshc3VibWl0U3VjY2VzcyAmJiBmb3JtRGF0YS5maWVsZHMgPyAoXG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIG9uU3VibWl0PXtlID0+IHRoaXMub25TdWJtaXQoZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nzc0NsYXNzfVxuICAgICAgICAgICAgZW5jVHlwZT17aXNNdWx0aXBhcnQgPyBcIm11bHRpcGFydC9mb3JtLWRhdGFcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIG5vVmFsaWRhdGVcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7KGZvcm1EYXRhLnRpdGxlIHx8IGZvcm1EYXRhLmRlc2NyaXB0aW9uKSAmJiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2Zvcm1EYXRhLnRpdGxlICYmIHRpdGxlID8gKFxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvcm0tdGl0bGVcIj57Zm9ybURhdGEudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICB7Zm9ybURhdGEuZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb3JtLWRlc2NyaXB0aW9uXCI+e2Zvcm1EYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0td3JhcHBlclwiPlxuICAgICAgICAgICAgICA8UmVuZGVyRmllbGRzXG4gICAgICAgICAgICAgICAgc3R5bGVkQ29tcG9uZW50cz17c3R5bGVkQ29tcG9uZW50c31cbiAgICAgICAgICAgICAgICBjdXN0b21Db21wb25lbnRzPXtjdXN0b21Db21wb25lbnRzfVxuICAgICAgICAgICAgICAgIGZpZWxkcz17Zm9ybURhdGEuZmllbGRzfVxuICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXM9e2Zvcm1WYWx1ZXN9XG4gICAgICAgICAgICAgICAgc3VibWl0RmFpbGVkPXtzdWJtaXRGYWlsZWR9XG4gICAgICAgICAgICAgICAgc3VibWl0U3VjY2Vzcz17c3VibWl0U3VjY2Vzc31cbiAgICAgICAgICAgICAgICB1cGRhdGVGb3JtPXt0aGlzLnVwZGF0ZUZvcm1IYW5kbGVyfVxuICAgICAgICAgICAgICAgIHRvdWNoZWQ9e3RvdWNoZWR9XG4gICAgICAgICAgICAgICAgc2V0VG91Y2hlZD17dGhpcy5zZXRUb3VjaGVkfVxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e2Zvcm1EYXRhLnBhZ2luYXRpb259XG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZT17YWN0aXZlUGFnZX1cbiAgICAgICAgICAgICAgICBwcmV2U3RlcD17dGhpcy5wcmV2U3RlcH1cbiAgICAgICAgICAgICAgICBuZXh0U3RlcD17dGhpcy5uZXh0U3RlcH1cbiAgICAgICAgICAgICAgICBpc05leHREaXNhYmxlZD17aXNOZXh0RGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgY2hlY2tDb25kaXRpb25hbExvZ2ljPXt0aGlzLmNoZWNrQ29uZGl0aW9uYWxMb2dpY31cbiAgICAgICAgICAgICAgICBzYXZlU3RhdGVUb0h0bWxGaWVsZD17c2F2ZVN0YXRlVG9IdG1sRmllbGR9XG4gICAgICAgICAgICAgICAgZW5hYmxlSG9uZXlwb3Q9e2Zvcm1EYXRhLmVuYWJsZUhvbmV5cG90fVxuICAgICAgICAgICAgICAgIGVycm9ycz17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2VzfVxuICAgICAgICAgICAgICAgIHVuc2V0RXJyb3I9e3RoaXMudW5zZXRFcnJvcn1cbiAgICAgICAgICAgICAgICBkcm9wem9uZVRleHQ9e2Ryb3B6b25lVGV4dH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgeyghZm9ybURhdGEucGFnaW5hdGlvbiB8fFxuICAgICAgICAgICAgICAgIChmb3JtRGF0YS5wYWdpbmF0aW9uICYmXG4gICAgICAgICAgICAgICAgICBmb3JtRGF0YS5wYWdpbmF0aW9uLnBhZ2VzLmxlbmd0aCA9PT0gYWN0aXZlUGFnZSkpICYmIChcbiAgICAgICAgICAgICAgICA8U3VibWl0XG4gICAgICAgICAgICAgICAgICBCdXR0b249e0J1dHRvbn1cbiAgICAgICAgICAgICAgICAgIExvYWRpbmc9e0xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICBmb3JtRGF0YT17Zm9ybURhdGF9XG4gICAgICAgICAgICAgICAgICBzdWJtaXRJY29uPXtzdWJtaXRJY29ufVxuICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17aXNEaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgIHN1Ym1pdHRpbmc9e3N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgICBwcmV2U3RlcD17dGhpcy5wcmV2U3RlcH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApIDogKFxuICAgICAgICAgIFwiXCJcbiAgICAgICAgKX1cbiAgICAgIDwvR0ZXcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cblxuR3Jhdml0eUZvcm0uZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogdHJ1ZSxcbiAgc3VibWl0SWNvbjogZmFsc2UsXG4gIHNhdmVTdGF0ZVRvSHRtbEZpZWxkOiBmYWxzZSxcbiAganVtcFRvQ29uZmlybWF0aW9uOiB0cnVlXG59O1xuXG5leHBvcnQgeyB2YWxpZGF0ZUZpZWxkLCBGb3JtQ29uZmlybWF0aW9uLCBGb3JtRXJyb3IsIFJlbmRlckZpZWxkcywgU3VibWl0IH07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXZpdHlGb3JtO1xuIl19
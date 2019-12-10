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

      if (field.type === 'checkbox') {
        var values = _toConsumableArray(formValues[field.id].value);

        var index = values.indexOf(event.target.value);

        if (index > -1) {
          values.splice(index, 1);
        } else {
          values.push(event.target.value);
        }

        value = values;
      } else if (field.type == 'date' && field.dateType !== 'datepicker') {
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
          styledComponents = _this$props3.styledComponents,
          customComponents = _this$props3.customComponents,
          errorMessage = _this$props3.errorMessage,
          dropzoneText = _this$props3.dropzoneText;

      var _ref2 = styledComponents || false,
          Button = _ref2.Button,
          Loading = _ref2.Loading,
          _ref2$GFWrapper = _ref2.GFWrapper,
          GFWrapper = _ref2$GFWrapper === void 0 ? 'div' : _ref2$GFWrapper,
          SFormError = _ref2.FormError;

      var cssClass = formData.cssClass;
      var isDisabled = Object.keys(formValues).some(function (x) {
        return !formValues[x].hideField && formValues[x].valid;
      });
      var isNextDisabled = activePage ? Object.keys(formValues).some(function (x) {
        return formValues[x].pageNumber === activePage && !formValues[x].hideField && formValues[x].valid;
      }) : false;
      return _react["default"].createElement("div", {
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
        SFormError: SFormError || false,
        errorMessage: errorMessage || 'There was a problem with your submission'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHcmF2aXR5Rm9ybSIsInByb3BzIiwiaWQiLCJzZXRTdGF0ZSIsInRvdWNoZWQiLCJzdGF0ZSIsImVycm9yTWVzc2FnZXMiLCJldmVudCIsImZpZWxkIiwiZm9ybVZhbHVlcyIsImNvbmRpdGlvYW5sSWRzIiwiY29uZGl0aW9uRmllbGRzIiwidHlwZSIsImlzUmVxdWlyZWQiLCJ2YWx1ZSIsInZhbHVlcyIsImluZGV4IiwiaW5kZXhPZiIsInRhcmdldCIsInNwbGljZSIsInB1c2giLCJkYXRlVHlwZSIsInN1YklkIiwiZGF0ZUxhYmVsIiwidmFsIiwibGFiZWwiLCJjaGVja2VkIiwiY3NzQ2xhc3MiLCJ2YWxpZCIsImkiLCJsZW5ndGgiLCJoaWRlIiwiY2hlY2tDb25kaXRpb25hbExvZ2ljIiwiY29uZGl0aW9uYWxMb2dpYyIsImhpZGVGaWVsZCIsInBhZ2VOdW1iZXIiLCJvbkNoYW5nZSIsInJlY3QiLCJ3cmFwcGVyUmVmIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvIiwidG9wIiwicHJldmVudERlZmF1bHQiLCJzdWJtaXR0aW5nIiwic3VibWl0U3VjY2VzcyIsInN1Ym1pdEZhaWxlZCIsImNvbmZpcm1hdGlvbk1lc3NhZ2UiLCJmb3JtSUQiLCJiYWNrZW5kVXJsIiwiZ2ZTdWJtaXNzaW9uVXJsIiwic3Vic3RyaW5nIiwiZGF0YSIsIkZvcm1EYXRhIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiaXNfdmFsaWQiLCJjb25maXJtYXRpb25fbWVzc2FnZSIsInNjcm9sbFRvQ29uZmlybWF0aW9uIiwiZXJyb3IiLCJ2YWxpZGF0aW9uX21lc3NhZ2VzIiwiZSIsImFjdGl2ZVBhZ2UiLCJjb25kaXRpb24iLCJmaWVsZHMiLCJydWxlcyIsImFjdGlvblR5cGUiLCJoaWRlQmFzZWRPblJ1bGVzIiwiZmllbGRJZCIsImNvbmRpdGlvbkZpZWxkVmFsdWUiLCJzdHJpbmdWYWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsImpvaW4iLCJldmVyeSIsImxvYWRpbmciLCJpc1ZhbGlkIiwiZm9ybURhdGEiLCJpc011bHRpcGFydCIsInBvcHVsYXRlZEZpZWxkcyIsIl9pc01vdW50ZWQiLCJnZXQiLCJmb3JtIiwiaGFzUG9wdWxhdGlvbiIsImlucHV0TmFtZSIsImNob2ljZXMiLCJmaWx0ZXIiLCJjaG9pY2UiLCJpc1NlbGVjdGVkIiwibWFwIiwicHJlc2VsZWN0ZWQiLCJmaW5kIiwic2VsZWN0ZWRPcHRpb24iLCJpdGVtIiwidGV4dCIsImRlZmF1bHRWYWx1ZSIsInRtcEZpZWxkIiwiaWRzIiwicGFyc2VJbnQiLCJwYWdpbmF0aW9uIiwidGl0bGUiLCJzdWJtaXRJY29uIiwic2F2ZVN0YXRlVG9IdG1sRmllbGQiLCJzdHlsZWRDb21wb25lbnRzIiwiY3VzdG9tQ29tcG9uZW50cyIsImVycm9yTWVzc2FnZSIsImRyb3B6b25lVGV4dCIsIkJ1dHRvbiIsIkxvYWRpbmciLCJHRldyYXBwZXIiLCJTRm9ybUVycm9yIiwiRm9ybUVycm9yIiwiaXNEaXNhYmxlZCIsIk9iamVjdCIsImtleXMiLCJzb21lIiwieCIsImlzTmV4dERpc2FibGVkIiwiZWwiLCJwb3NpdGlvbiIsIm9uU3VibWl0IiwidW5kZWZpbmVkIiwiZGVzY3JpcHRpb24iLCJ1cGRhdGVGb3JtSGFuZGxlciIsInNldFRvdWNoZWQiLCJwcmV2U3RlcCIsIm5leHRTdGVwIiwiZW5hYmxlSG9uZXlwb3QiLCJ1bnNldEVycm9yIiwicGFnZXMiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lB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REYsRUF1QkcsQ0FBQyxDQUFDN0IsUUFBUSxDQUFDc0IsVUFBVixJQUNJdEIsUUFBUSxDQUFDc0IsVUFBVCxJQUF1QnRCLFFBQVEsQ0FBQ3NCLFVBQVQsQ0FBb0I4QixLQUFwQixDQUEwQnpHLE1BQTFCLEtBQXFDc0MsVUFEakUsS0FFQyxnQ0FBQyxrQkFBRDtBQUNFLFFBQUEsTUFBTSxFQUFFNkMsTUFEVjtBQUVFLFFBQUEsT0FBTyxFQUFFQyxPQUZYO0FBR0UsUUFBQSxRQUFRLEVBQUUvQixRQUhaO0FBSUUsUUFBQSxVQUFVLEVBQUV3QixVQUpkO0FBS0UsUUFBQSxVQUFVLEVBQUVXLFVBTGQ7QUFNRSxRQUFBLFVBQVUsRUFBRXRFLFVBTmQ7QUFPRSxRQUFBLFFBQVEsRUFBRSxLQUFLbUY7QUFQakIsUUF6QkosQ0FmRixDQURELEdBc0RDLEVBekVKLENBREY7QUE4RUQ7Ozs7RUFsYXVCSyxnQjs7QUFxYTFCeEksV0FBVyxDQUFDeUksWUFBWixHQUEyQjtBQUN6Qi9CLEVBQUFBLEtBQUssRUFBRSxJQURrQjtBQUV6QkMsRUFBQUEsVUFBVSxFQUFFLEtBRmE7QUFHekJDLEVBQUFBLG9CQUFvQixFQUFFO0FBSEcsQ0FBM0I7ZUFVZTVHLFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSZW5kZXJGaWVsZHMgZnJvbSAnLi9Gb3JtRWxlbWVudHMvUmVuZGVyRmllbGRzJztcbmltcG9ydCBGb3JtRXJyb3IgZnJvbSAnLi9Gb3JtRWxlbWVudHMvRm9ybUVycm9yJztcbmltcG9ydCBGb3JtQ29uZmlybWF0aW9uIGZyb20gJy4vRm9ybUVsZW1lbnRzL0Zvcm1Db25maXJtYXRpb24nO1xuaW1wb3J0IHsgdmFsaWRhdGVGaWVsZCB9IGZyb20gJy4vSGVscGVycy92YWxpZGF0aW9uJztcbmltcG9ydCBTdWJtaXQgZnJvbSAnLi9Gb3JtRWxlbWVudHMvU3VibWl0JztcblxuY2xhc3MgR3Jhdml0eUZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3VibWl0RmFpbGVkOiBmYWxzZSxcbiAgICAgIGVycm9yTWVzc2FnZXM6IGZhbHNlLFxuICAgICAgZm9ybVZhbHVlczoge30sXG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICBzdWJtaXRTdWNjZXNzOiBmYWxzZSxcbiAgICAgIGNvbmZpcm1hdGlvbk1lc3NhZ2U6IGZhbHNlLFxuICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgICBmb3JtRGF0YToge30sXG4gICAgICB0b3VjaGVkOiB7fSxcbiAgICAgIGFjdGl2ZVBhZ2U6IGZhbHNlLFxuICAgICAgY29uZGl0aW9uRmllbGRzOiB7fSxcbiAgICAgIGNvbmRpdGlvYW5sSWRzOiB7fSxcbiAgICAgIGlzTXVsdGlwYXJ0OiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBmb3JtSUQsIGJhY2tlbmRVcmwsIHBvcHVsYXRlZEZpZWxkcyB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgIGxldCBpc011bHRpcGFydCA9IGZhbHNlO1xuICAgIGNvbnN0IGZvcm0gPSBhd2FpdCBheGlvc1xuICAgICAgLmdldChgJHtiYWNrZW5kVXJsfS8ke2Zvcm1JRH1gKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAgIC5jYXRjaCgoKSA9PiBmYWxzZSk7XG5cbiAgICBpZiAoZm9ybSAmJiB0aGlzLl9pc01vdW50ZWQpIHtcbiAgICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSB7fTtcbiAgICAgIGNvbnN0IGNvbmRpdGlvbkZpZWxkcyA9IFtdO1xuICAgICAgY29uc3QgY29uZGl0aW9hbmxJZHMgPSBbXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBmb3JtLmZpZWxkcykge1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGNvbnN0IGhhc1BvcHVsYXRpb24gPSBmaWVsZC5pbnB1dE5hbWUgJiYgcG9wdWxhdGVkRmllbGRzICYmIHBvcHVsYXRlZEZpZWxkc1tmaWVsZC5pbnB1dE5hbWVdO1xuICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgIHZhbHVlID0gZmllbGQuY2hvaWNlc1xuICAgICAgICAgICAgLmZpbHRlcihjaG9pY2UgPT4gKGhhc1BvcHVsYXRpb24gPyBjaG9pY2UudmFsdWUgPT09IHBvcHVsYXRlZEZpZWxkc1tmaWVsZC5pbnB1dE5hbWVdIDogY2hvaWNlLmlzU2VsZWN0ZWQpKVxuICAgICAgICAgICAgLm1hcChjaG9pY2UgPT4gY2hvaWNlLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgaWYgKGhhc1BvcHVsYXRpb24pIHtcbiAgICAgICAgICAgIHZhbHVlID0gcG9wdWxhdGVkRmllbGRzW2ZpZWxkLmlucHV0TmFtZV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHByZXNlbGVjdGVkID0gZmllbGQuY2hvaWNlcy5maW5kKGNob2ljZSA9PiBjaG9pY2UuaXNTZWxlY3RlZCk7XG4gICAgICAgICAgICB2YWx1ZSA9IHByZXNlbGVjdGVkID8gcHJlc2VsZWN0ZWQudmFsdWUgOiAnJztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IGZpZWxkLmNob2ljZXNcbiAgICAgICAgICAgIC5maWx0ZXIoY2hvaWNlID0+IChoYXNQb3B1bGF0aW9uID8gY2hvaWNlLnZhbHVlID09PSBwb3B1bGF0ZWRGaWVsZHNbZmllbGQuaW5wdXROYW1lXSA6IGNob2ljZS5pc1NlbGVjdGVkKSlcbiAgICAgICAgICAgIC5tYXAoaXRlbSA9PiAoeyB2YWx1ZTogaXRlbS52YWx1ZSwgbGFiZWw6IGl0ZW0udGV4dCB9KSk7XG4gICAgICAgICAgdmFsdWUgPSBzZWxlY3RlZE9wdGlvbiAmJiBzZWxlY3RlZE9wdGlvbi5sZW5ndGggPiAwID8gc2VsZWN0ZWRPcHRpb25bMF0gOiAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IGhhc1BvcHVsYXRpb24gPyBwb3B1bGF0ZWRGaWVsZHNbZmllbGQuaW5wdXROYW1lXSA6IGZpZWxkLmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2ZpbGV1cGxvYWQnKSB7XG4gICAgICAgICAgICBpc011bHRpcGFydCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ3JhYiBhbGwgY29uZGl0aW9uYWwgbG9naWMgZmllbGRzXG4gICAgICAgIGlmIChmaWVsZC5jb25kaXRpb25hbExvZ2ljKSB7XG4gICAgICAgICAgY29uc3QgdG1wRmllbGQgPSB7XG4gICAgICAgICAgICBpZDogZmllbGQuaWQsXG4gICAgICAgICAgICBjb25kaXRpb25hbExvZ2ljOiBmaWVsZC5jb25kaXRpb25hbExvZ2ljLFxuICAgICAgICAgIH07XG4gICAgICAgICAgY29uc3QgaWRzID0gZmllbGQuY29uZGl0aW9uYWxMb2dpYy5ydWxlcy5tYXAoaXRlbSA9PiBpdGVtLmZpZWxkSWQpO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHBhcnNlSW50KGlkc1tpXSk7XG4gICAgICAgICAgICBpZiAoY29uZGl0aW9hbmxJZHMuaW5kZXhPZihpZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIGNvbmRpdGlvYW5sSWRzLnB1c2goaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25kaXRpb25GaWVsZHMucHVzaCh0bXBGaWVsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtVmFsdWVzW2ZpZWxkLmlkXSA9IHtcbiAgICAgICAgICB2YWxpZDogdmFsaWRhdGVGaWVsZCh2YWx1ZSwgZmllbGQpLFxuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIGxhYmVsOiBmaWVsZC5sYWJlbCxcbiAgICAgICAgICBwYWdlTnVtYmVyOiBmaWVsZC5wYWdlTnVtYmVyLFxuICAgICAgICAgIGNzc0NsYXNzOiBmaWVsZC5jc3NDbGFzcyxcbiAgICAgICAgICBpc1JlcXVpcmVkOiBmaWVsZC5pc1JlcXVpcmVkLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy8gY2hlY2sgY29uZGl0aW9uIGxvZ2ljXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmRpdGlvbkZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3JtVmFsdWVzW2NvbmRpdGlvbkZpZWxkc1tpXS5pZF0uaGlkZUZpZWxkID0gdGhpcy5jaGVja0NvbmRpdGlvbmFsTG9naWMoXG4gICAgICAgICAgY29uZGl0aW9uRmllbGRzW2ldLmNvbmRpdGlvbmFsTG9naWMsXG4gICAgICAgICAgZm9ybVZhbHVlcyxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvcm1EYXRhOiBmb3JtLFxuICAgICAgICBmb3JtVmFsdWVzLFxuICAgICAgICBhY3RpdmVQYWdlOiBmb3JtLnBhZ2luYXRpb24gPyAxIDogZmFsc2UsXG4gICAgICAgIGNvbmRpdGlvbkZpZWxkcyxcbiAgICAgICAgY29uZGl0aW9hbmxJZHMsXG4gICAgICAgIGlzTXVsdGlwYXJ0LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gIH1cblxuICBzZXRUb3VjaGVkID0gKGlkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0b3VjaGVkOiB7IC4uLnRoaXMuc3RhdGUudG91Y2hlZCwgW2lkXTogdHJ1ZSB9LFxuICAgIH0pO1xuICB9O1xuXG4gIHVuc2V0RXJyb3IgPSAoaWQpID0+IHtcbiAgICBjb25zdCB7IGVycm9yTWVzc2FnZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKCFlcnJvck1lc3NhZ2VzKSByZXR1cm47XG5cbiAgICBpZiAoZXJyb3JNZXNzYWdlc1tpZF0pIHtcbiAgICAgIGRlbGV0ZSBlcnJvck1lc3NhZ2VzW2lkXTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2VzIH0pO1xuICAgIH1cbiAgfTtcblxuICB1cGRhdGVGb3JtSGFuZGxlciA9IChldmVudCwgZmllbGQpID0+IHtcbiAgICBjb25zdCB7IGZvcm1WYWx1ZXMsIGNvbmRpdGlvYW5sSWRzLCBjb25kaXRpb25GaWVsZHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IHsgaWQsIHR5cGUsIGlzUmVxdWlyZWQgfSA9IGZpZWxkO1xuICAgIC8vIFNldCBuZXcgdmFsdWVcbiAgICBsZXQgdmFsdWU7XG4gICAgaWYgKGZpZWxkLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IFsuLi5mb3JtVmFsdWVzW2ZpZWxkLmlkXS52YWx1ZV07XG4gICAgICBjb25zdCBpbmRleCA9IHZhbHVlcy5pbmRleE9mKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICB2YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlcy5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICB9XG4gICAgICB2YWx1ZSA9IHZhbHVlcztcbiAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT0gJ2RhdGUnICYmIGZpZWxkLmRhdGVUeXBlICE9PSAnZGF0ZXBpY2tlcicpIHtcbiAgICAgIGNvbnN0IHsgc3ViSWQsIGRhdGVMYWJlbCB9ID0gZmllbGQ7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBbLi4uZm9ybVZhbHVlc1tmaWVsZC5pZF0udmFsdWVdO1xuICAgICAgdmFsdWVzW3N1YklkXSA9IHtcbiAgICAgICAgdmFsOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICAgIGxhYmVsOiBkYXRlTGFiZWwsXG4gICAgICB9O1xuICAgICAgdmFsdWUgPSB2YWx1ZXM7XG4gICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09ICdjb25zZW50Jykge1xuICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQgPyBldmVudC50YXJnZXQuY2hlY2tlZCA6ICdudWxsJztcbiAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09ICdwYXNzd29yZCcpIHtcbiAgICAgIGNvbnN0IHsgc3ViSWQgfSA9IGZpZWxkO1xuICAgICAgY29uc3QgdmFsdWVzID0gZm9ybVZhbHVlc1tmaWVsZC5pZF0gJiYgZm9ybVZhbHVlc1tmaWVsZC5pZF0udmFsdWUgPyBbLi4uZm9ybVZhbHVlc1tmaWVsZC5pZF0udmFsdWVdIDogW107XG4gICAgICB2YWx1ZXNbc3ViSWRdID0ge1xuICAgICAgICB2YWw6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgIH07XG4gICAgICB2YWx1ZSA9IHZhbHVlcztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQgPyBldmVudC50YXJnZXQudmFsdWUgOiAnbnVsbCc7XG4gICAgfVxuICAgIC8vIGlmIGZpZWxkIGlzIElCQU5cbiAgICBpZiAodHlwZSA9PT0gJ3RleHQnICYmIGZpZWxkLmNzc0NsYXNzLmluZGV4T2YoJ2liYW4nKSA+IC0xKSB7XG4gICAgICB0eXBlID0gJ2liYW4nO1xuICAgIH1cblxuICAgIC8vIFZhbGlkYXRlIGZpZWxkXG4gICAgY29uc3QgdmFsaWQgPSB2YWxpZGF0ZUZpZWxkKHZhbHVlLCBmaWVsZCk7XG5cbiAgICAvLyBpZiBmaWVsZCBJRCBpcyBzb21ld2hlcmUgaW4gY29uZGl0aW9uYWwgZmllbGRzXG4gICAgLy8gcmVjYWxjdWxhdGUgYWxsIGNvbmRpdGlvbnNcbiAgICBpZiAoY29uZGl0aW9hbmxJZHMuaW5kZXhPZihpZCkgIT09IC0xKSB7XG4gICAgICBmb3JtVmFsdWVzW2lkXS52YWx1ZSA9IHZhbHVlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25kaXRpb25GaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gY29uZGl0aW9uRmllbGRzW2ldO1xuICAgICAgICBjb25zdCBoaWRlID0gdGhpcy5jaGVja0NvbmRpdGlvbmFsTG9naWMoY29uZGl0aW9uRmllbGRzW2ldLmNvbmRpdGlvbmFsTG9naWMsIGZvcm1WYWx1ZXMpO1xuICAgICAgICBmb3JtVmFsdWVzW2lkXS5oaWRlRmllbGQgPSBoaWRlO1xuICAgICAgICBpZiAoaGlkZSkge1xuICAgICAgICAgIGlmIChmb3JtVmFsdWVzW2lkXS5pc1JlcXVpcmVkICYmIGhpZGUpIHtcbiAgICAgICAgICAgIGZvcm1WYWx1ZXNbaWRdLnZhbHVlID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvcm1WYWx1ZXNbaWRdLnZhbGlkID0gISFmb3JtVmFsdWVzW2lkXS5pc1JlcXVpcmVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgZm9ybVZhbHVlczoge1xuICAgICAgICAgIC4uLmZvcm1WYWx1ZXMsXG4gICAgICAgICAgW2lkXToge1xuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIHZhbGlkLFxuICAgICAgICAgICAgbGFiZWw6IGZpZWxkLmxhYmVsLFxuICAgICAgICAgICAgcGFnZU51bWJlcjogZmllbGQucGFnZU51bWJlcixcbiAgICAgICAgICAgIGNzc0NsYXNzOiBmaWVsZC5jc3NDbGFzcyxcbiAgICAgICAgICAgIGlzUmVxdWlyZWQ6IGZpZWxkLmlzUmVxdWlyZWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIC8vIHBhc3Mgc3RhdGUgdG8gcGFyZW50IGNvbXBvbmVudFxuICAgICAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZSh0aGlzLnN0YXRlLmZvcm1WYWx1ZXMpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICk7XG4gIH07XG5cbiAgc2Nyb2xsVG9Db25maXJtYXRpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMud3JhcHBlclJlZiA/IHRoaXMud3JhcHBlclJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IGZhbHNlO1xuICAgIGlmIChyZWN0ICYmIHdpbmRvdykge1xuICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IHNjcm9sbFRvcCArIHJlY3QudG9wIC0gMTAwLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN1Ym1pdHRpbmc6IHRydWUsXG4gICAgICBzdWJtaXRTdWNjZXNzOiBmYWxzZSxcbiAgICAgIHN1Ym1pdEZhaWxlZDogZmFsc2UsXG4gICAgICBjb25maXJtYXRpb25NZXNzYWdlOiBmYWxzZSxcbiAgICAgIGVycm9yTWVzc2FnZXM6IGZhbHNlLFxuICAgIH0pO1xuICAgIGNvbnN0IHsgZm9ybUlELCBiYWNrZW5kVXJsIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGdmU3VibWlzc2lvblVybCA9IGJhY2tlbmRVcmwuc3Vic3RyaW5nKDAsIGJhY2tlbmRVcmwuaW5kZXhPZignL3dwLWpzb24nKSk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpO1xuICAgIGF4aW9zXG4gICAgICAucG9zdChgJHtnZlN1Ym1pc3Npb25Vcmx9L3dwLWpzb24vZ2YvdjIvZm9ybXMvJHtmb3JtSUR9L3N1Ym1pc3Npb25zYCwgZGF0YSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmlzX3ZhbGlkKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Ym1pdFN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICBjb25maXJtYXRpb25NZXNzYWdlOiByZXNwb25zZS5kYXRhLmNvbmZpcm1hdGlvbl9tZXNzYWdlLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9Db25maXJtYXRpb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc3VibWl0RmFpbGVkOiB0cnVlLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlczogJ1NvbWV0aGluZyB3ZW50IHdyb25nJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICAgICAgc3VibWl0RmFpbGVkOiB0cnVlLFxuICAgICAgICAgIGVycm9yTWVzc2FnZXM6IGVycm9yLnJlc3BvbnNlLmRhdGEudmFsaWRhdGlvbl9tZXNzYWdlcyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBuZXh0U3RlcCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgYWN0aXZlUGFnZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZVBhZ2U6IGFjdGl2ZVBhZ2UgKyAxLFxuICAgIH0pO1xuICB9O1xuXG4gIHByZXZTdGVwID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBhY3RpdmVQYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlUGFnZTogYWN0aXZlUGFnZSAtIDEsXG4gICAgfSk7XG4gIH07XG5cbiAgY2hlY2tDb25kaXRpb25hbExvZ2ljID0gKGNvbmRpdGlvbiwgZmllbGRzID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCB7IHJ1bGVzLCBhY3Rpb25UeXBlIH0gPSBjb25kaXRpb247XG4gICAgaWYgKCFydWxlcykgcmV0dXJuIHRydWU7XG5cbiAgICBjb25zdCBmb3JtVmFsdWVzID0gZmllbGRzIHx8IHRoaXMuc3RhdGUuZm9ybVZhbHVlcztcblxuICAgIC8vIHNob3cgb25seSBpZiBpcyBzZWxlY3RlZCBcIkFsbCBmaWVsZHNcIiAoaXQgc2hvdWxkIGJlIHR3ZWFrZWQgaW4gZnV0dXJlKVxuICAgIC8vIHdvcmtzIG9ubHkgXCJzaG93L2hpZGUgd2hlbiBmaWVsZCBpcyBlcXVhbCB0b1wiXG4gICAgbGV0IGhpZGVGaWVsZCA9IGFjdGlvblR5cGUgIT09ICdoaWRlJztcbiAgICBjb25zdCBoaWRlQmFzZWRPblJ1bGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgeyBmaWVsZElkLCB2YWx1ZSB9ID0gcnVsZXNbaV07XG4gICAgICBjb25zdCBjb25kaXRpb25GaWVsZFZhbHVlID0gZm9ybVZhbHVlc1tmaWVsZElkXS52YWx1ZTtcblxuICAgICAgY29uc3Qgc3RyaW5nVmFsdWUgPSBBcnJheS5pc0FycmF5KGNvbmRpdGlvbkZpZWxkVmFsdWUpXG4gICAgICAgID8gY29uZGl0aW9uRmllbGRWYWx1ZS5qb2luKCcnKVxuICAgICAgICA6IGNvbmRpdGlvbkZpZWxkVmFsdWU7XG4gICAgICBpZiAoc3RyaW5nVmFsdWUgJiYgdmFsdWUgPT09IHN0cmluZ1ZhbHVlKSB7XG4gICAgICAgIGhpZGVCYXNlZE9uUnVsZXNbaV0gPSBhY3Rpb25UeXBlID09PSAnaGlkZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoaWRlQmFzZWRPblJ1bGVzW2ldID0gYWN0aW9uVHlwZSAhPT0gJ2hpZGUnO1xuICAgICAgfVxuICAgIH1cbiAgICBoaWRlRmllbGQgPSBoaWRlQmFzZWRPblJ1bGVzLmV2ZXJ5KGkgPT4gaSA9PT0gdHJ1ZSk7XG4gICAgLy8gZm9ybVZhbHVlc1tpZF0uaGlkZUZpZWxkID0gaGlkZUZpZWxkO1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBmb3JtVmFsdWVzIH0pO1xuICAgIHJldHVybiBoaWRlRmllbGQ7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZvcm1EYXRhLFxuICAgICAgZm9ybVZhbHVlcyxcbiAgICAgIHN1Ym1pdEZhaWxlZCxcbiAgICAgIHN1Ym1pdFN1Y2Nlc3MsXG4gICAgICB0b3VjaGVkLFxuICAgICAgc3VibWl0dGluZyxcbiAgICAgIGFjdGl2ZVBhZ2UsXG4gICAgICBpc011bHRpcGFydCxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7XG4gICAgICB0aXRsZSxcbiAgICAgIHN1Ym1pdEljb24sXG4gICAgICBzYXZlU3RhdGVUb0h0bWxGaWVsZCxcbiAgICAgIHN0eWxlZENvbXBvbmVudHMsXG4gICAgICBjdXN0b21Db21wb25lbnRzLFxuICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgZHJvcHpvbmVUZXh0LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIEJ1dHRvbiwgTG9hZGluZywgR0ZXcmFwcGVyID0gJ2RpdicsIEZvcm1FcnJvcjogU0Zvcm1FcnJvcixcbiAgICB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICAgIGNvbnN0IHsgY3NzQ2xhc3MgfSA9IGZvcm1EYXRhO1xuXG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IE9iamVjdC5rZXlzKGZvcm1WYWx1ZXMpLnNvbWUoXG4gICAgICB4ID0+ICFmb3JtVmFsdWVzW3hdLmhpZGVGaWVsZCAmJiBmb3JtVmFsdWVzW3hdLnZhbGlkLFxuICAgICk7XG4gICAgY29uc3QgaXNOZXh0RGlzYWJsZWQgPSBhY3RpdmVQYWdlXG4gICAgICA/IE9iamVjdC5rZXlzKGZvcm1WYWx1ZXMpLnNvbWUoXG4gICAgICAgIHggPT4gZm9ybVZhbHVlc1t4XS5wYWdlTnVtYmVyID09PSBhY3RpdmVQYWdlXG4gICAgICAgICAgICAmJiAhZm9ybVZhbHVlc1t4XS5oaWRlRmllbGRcbiAgICAgICAgICAgICYmIGZvcm1WYWx1ZXNbeF0udmFsaWQsXG4gICAgICApXG4gICAgICA6IGZhbHNlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtlbCA9PiAodGhpcy53cmFwcGVyUmVmID0gZWwpfVxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXdyYXBwZXJcIlxuICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX1cbiAgICAgICAgaWQ9e2BncmF2aXR5X2Zvcm1fJHt0aGlzLnByb3BzLmZvcm1JRH1gfVxuICAgICAgPlxuICAgICAgICB7Zm9ybURhdGEudGl0bGUgPyBudWxsIDogTG9hZGluZyAmJiA8TG9hZGluZyBpc0xvYWRpbmcgLz59XG5cbiAgICAgICAge3N1Ym1pdEZhaWxlZCAmJiAhc3VibWl0U3VjY2VzcyAmJiAoXG4gICAgICAgICAgPEZvcm1FcnJvclxuICAgICAgICAgICAgU0Zvcm1FcnJvcj17U0Zvcm1FcnJvciB8fCBmYWxzZX1cbiAgICAgICAgICAgIGVycm9yTWVzc2FnZT17ZXJyb3JNZXNzYWdlIHx8ICdUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggeW91ciBzdWJtaXNzaW9uJ31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHtzdWJtaXRTdWNjZXNzICYmIHRoaXMuc3RhdGUuY29uZmlybWF0aW9uTWVzc2FnZSAmJiAoXG4gICAgICAgICAgPEZvcm1Db25maXJtYXRpb24gY29uZmlybWF0aW9uPXt0aGlzLnN0YXRlLmNvbmZpcm1hdGlvbk1lc3NhZ2V9IC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgeyFzdWJtaXRTdWNjZXNzICYmIGZvcm1EYXRhLmZpZWxkcyA/IChcbiAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgb25TdWJtaXQ9e2UgPT4gdGhpcy5vblN1Ym1pdChlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzQ2xhc3N9XG4gICAgICAgICAgICBlbmNUeXBlPXtpc011bHRpcGFydCA/ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIG5vVmFsaWRhdGVcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7KGZvcm1EYXRhLnRpdGxlIHx8IGZvcm1EYXRhLmRlc2NyaXB0aW9uKSAmJiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2Zvcm1EYXRhLnRpdGxlICYmIHRpdGxlID8gPGgzIGNsYXNzTmFtZT1cImZvcm0tdGl0bGVcIj57Zm9ybURhdGEudGl0bGV9PC9oMz4gOiBudWxsfVxuICAgICAgICAgICAgICAgIHtmb3JtRGF0YS5kZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm0tZGVzY3JpcHRpb25cIj57Zm9ybURhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxSZW5kZXJGaWVsZHNcbiAgICAgICAgICAgICAgICBzdHlsZWRDb21wb25lbnRzPXtzdHlsZWRDb21wb25lbnRzfVxuICAgICAgICAgICAgICAgIGN1c3RvbUNvbXBvbmVudHM9e2N1c3RvbUNvbXBvbmVudHN9XG4gICAgICAgICAgICAgICAgZmllbGRzPXtmb3JtRGF0YS5maWVsZHN9XG4gICAgICAgICAgICAgICAgZm9ybVZhbHVlcz17Zm9ybVZhbHVlc31cbiAgICAgICAgICAgICAgICBzdWJtaXRGYWlsZWQ9e3N1Ym1pdEZhaWxlZH1cbiAgICAgICAgICAgICAgICBzdWJtaXRTdWNjZXNzPXtzdWJtaXRTdWNjZXNzfVxuICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm09e3RoaXMudXBkYXRlRm9ybUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgdG91Y2hlZD17dG91Y2hlZH1cbiAgICAgICAgICAgICAgICBzZXRUb3VjaGVkPXt0aGlzLnNldFRvdWNoZWR9XG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17Zm9ybURhdGEucGFnaW5hdGlvbn1cbiAgICAgICAgICAgICAgICBhY3RpdmVQYWdlPXthY3RpdmVQYWdlfVxuICAgICAgICAgICAgICAgIHByZXZTdGVwPXt0aGlzLnByZXZTdGVwfVxuICAgICAgICAgICAgICAgIG5leHRTdGVwPXt0aGlzLm5leHRTdGVwfVxuICAgICAgICAgICAgICAgIGlzTmV4dERpc2FibGVkPXtpc05leHREaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBjaGVja0NvbmRpdGlvbmFsTG9naWM9e3RoaXMuY2hlY2tDb25kaXRpb25hbExvZ2ljfVxuICAgICAgICAgICAgICAgIHNhdmVTdGF0ZVRvSHRtbEZpZWxkPXtzYXZlU3RhdGVUb0h0bWxGaWVsZH1cbiAgICAgICAgICAgICAgICBlbmFibGVIb25leXBvdD17Zm9ybURhdGEuZW5hYmxlSG9uZXlwb3R9XG4gICAgICAgICAgICAgICAgZXJyb3JzPXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZXN9XG4gICAgICAgICAgICAgICAgdW5zZXRFcnJvcj17dGhpcy51bnNldEVycm9yfVxuICAgICAgICAgICAgICAgIGRyb3B6b25lVGV4dD17ZHJvcHpvbmVUZXh0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7KCFmb3JtRGF0YS5wYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgfHwgKGZvcm1EYXRhLnBhZ2luYXRpb24gJiYgZm9ybURhdGEucGFnaW5hdGlvbi5wYWdlcy5sZW5ndGggPT09IGFjdGl2ZVBhZ2UpKSAmJiAoXG4gICAgICAgICAgICAgICAgPFN1Ym1pdFxuICAgICAgICAgICAgICAgICAgQnV0dG9uPXtCdXR0b259XG4gICAgICAgICAgICAgICAgICBMb2FkaW5nPXtMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgZm9ybURhdGE9e2Zvcm1EYXRhfVxuICAgICAgICAgICAgICAgICAgc3VibWl0SWNvbj17c3VibWl0SWNvbn1cbiAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e2lzRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICBzdWJtaXR0aW5nPXtzdWJtaXR0aW5nfVxuICAgICAgICAgICAgICAgICAgcHJldlN0ZXA9e3RoaXMucHJldlN0ZXB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAnJ1xuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5HcmF2aXR5Rm9ybS5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiB0cnVlLFxuICBzdWJtaXRJY29uOiBmYWxzZSxcbiAgc2F2ZVN0YXRlVG9IdG1sRmllbGQ6IGZhbHNlLFxufTtcblxuZXhwb3J0IHtcbiAgdmFsaWRhdGVGaWVsZCwgRm9ybUNvbmZpcm1hdGlvbiwgRm9ybUVycm9yLCBSZW5kZXJGaWVsZHMsIFN1Ym1pdCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXZpdHlGb3JtO1xuIl19
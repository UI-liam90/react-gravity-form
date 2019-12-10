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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHcmF2aXR5Rm9ybSIsInByb3BzIiwiaWQiLCJzZXRTdGF0ZSIsInRvdWNoZWQiLCJzdGF0ZSIsImVycm9yTWVzc2FnZXMiLCJldmVudCIsImZpZWxkIiwiZm9ybVZhbHVlcyIsImNvbmRpdGlvYW5sSWRzIiwiY29uZGl0aW9uRmllbGRzIiwidHlwZSIsImlzUmVxdWlyZWQiLCJ2YWx1ZSIsInZhbHVlcyIsImluZGV4IiwiaW5kZXhPZiIsInRhcmdldCIsInNwbGljZSIsInB1c2giLCJzdWJJZCIsImRhdGVMYWJlbCIsInZhbCIsImxhYmVsIiwiY2hlY2tlZCIsImNzc0NsYXNzIiwidmFsaWQiLCJpIiwibGVuZ3RoIiwiaGlkZSIsImNoZWNrQ29uZGl0aW9uYWxMb2dpYyIsImNvbmRpdGlvbmFsTG9naWMiLCJoaWRlRmllbGQiLCJwYWdlTnVtYmVyIiwib25DaGFuZ2UiLCJyZWN0Iiwid3JhcHBlclJlZiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpbmRvdyIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUbyIsInRvcCIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0dGluZyIsInN1Ym1pdFN1Y2Nlc3MiLCJzdWJtaXRGYWlsZWQiLCJjb25maXJtYXRpb25NZXNzYWdlIiwiZm9ybUlEIiwiYmFja2VuZFVybCIsImdmU3VibWlzc2lvblVybCIsInN1YnN0cmluZyIsImRhdGEiLCJGb3JtRGF0YSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImlzX3ZhbGlkIiwiY29uZmlybWF0aW9uX21lc3NhZ2UiLCJzY3JvbGxUb0NvbmZpcm1hdGlvbiIsImVycm9yIiwidmFsaWRhdGlvbl9tZXNzYWdlcyIsImUiLCJhY3RpdmVQYWdlIiwiY29uZGl0aW9uIiwiZmllbGRzIiwicnVsZXMiLCJhY3Rpb25UeXBlIiwiaGlkZUJhc2VkT25SdWxlcyIsImZpZWxkSWQiLCJjb25kaXRpb25GaWVsZFZhbHVlIiwic3RyaW5nVmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJqb2luIiwiZXZlcnkiLCJsb2FkaW5nIiwiaXNWYWxpZCIsImZvcm1EYXRhIiwiaXNNdWx0aXBhcnQiLCJwb3B1bGF0ZWRGaWVsZHMiLCJfaXNNb3VudGVkIiwiZ2V0IiwiZm9ybSIsImhhc1BvcHVsYXRpb24iLCJpbnB1dE5hbWUiLCJjaG9pY2VzIiwiZmlsdGVyIiwiY2hvaWNlIiwiaXNTZWxlY3RlZCIsIm1hcCIsInByZXNlbGVjdGVkIiwiZmluZCIsInNlbGVjdGVkT3B0aW9uIiwiaXRlbSIsInRleHQiLCJkZWZhdWx0VmFsdWUiLCJ0bXBGaWVsZCIsImlkcyIsInBhcnNlSW50IiwicGFnaW5hdGlvbiIsInRpdGxlIiwic3VibWl0SWNvbiIsInNhdmVTdGF0ZVRvSHRtbEZpZWxkIiwic3R5bGVkQ29tcG9uZW50cyIsImN1c3RvbUNvbXBvbmVudHMiLCJlcnJvck1lc3NhZ2UiLCJkcm9wem9uZVRleHQiLCJCdXR0b24iLCJMb2FkaW5nIiwiR0ZXcmFwcGVyIiwiU0Zvcm1FcnJvciIsIkZvcm1FcnJvciIsImlzRGlzYWJsZWQiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsIngiLCJpc05leHREaXNhYmxlZCIsImVsIiwicG9zaXRpb24iLCJvblN1Ym1pdCIsInVuZGVmaW5lZCIsImRlc2NyaXB0aW9uIiwidXBkYXRlRm9ybUhhbmRsZXIiLCJzZXRUb3VjaGVkIiwicHJldlN0ZXAiLCJuZXh0U3RlcCIsImVuYWJsZUhvbmV5cG90IiwidW5zZXRFcnJvciIsInBhZ2VzIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxXOzs7OztB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QUFDc0IsVUFBVCxJQUF1QnRCLFFBQVEsQ0FBQ3NCLFVBQVQsQ0FBb0I4QixLQUFwQixDQUEwQnpHLE1BQTFCLEtBQXFDc0MsVUFEakUsS0FFQyxnQ0FBQyxrQkFBRDtBQUNFLFFBQUEsTUFBTSxFQUFFNkMsTUFEVjtBQUVFLFFBQUEsT0FBTyxFQUFFQyxPQUZYO0FBR0UsUUFBQSxRQUFRLEVBQUUvQixRQUhaO0FBSUUsUUFBQSxVQUFVLEVBQUV3QixVQUpkO0FBS0UsUUFBQSxVQUFVLEVBQUVXLFVBTGQ7QUFNRSxRQUFBLFVBQVUsRUFBRXRFLFVBTmQ7QUFPRSxRQUFBLFFBQVEsRUFBRSxLQUFLbUY7QUFQakIsUUF6QkosQ0FmRixDQURELEdBc0RDLEVBekVKLENBREY7QUE4RUQ7Ozs7RUFsYXVCSyxnQjs7QUFxYTFCdkksV0FBVyxDQUFDd0ksWUFBWixHQUEyQjtBQUN6Qi9CLEVBQUFBLEtBQUssRUFBRSxJQURrQjtBQUV6QkMsRUFBQUEsVUFBVSxFQUFFLEtBRmE7QUFHekJDLEVBQUFBLG9CQUFvQixFQUFFO0FBSEcsQ0FBM0I7ZUFVZTNHLFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSZW5kZXJGaWVsZHMgZnJvbSAnLi9Gb3JtRWxlbWVudHMvUmVuZGVyRmllbGRzJztcbmltcG9ydCBGb3JtRXJyb3IgZnJvbSAnLi9Gb3JtRWxlbWVudHMvRm9ybUVycm9yJztcbmltcG9ydCBGb3JtQ29uZmlybWF0aW9uIGZyb20gJy4vRm9ybUVsZW1lbnRzL0Zvcm1Db25maXJtYXRpb24nO1xuaW1wb3J0IHsgdmFsaWRhdGVGaWVsZCB9IGZyb20gJy4vSGVscGVycy92YWxpZGF0aW9uJztcbmltcG9ydCBTdWJtaXQgZnJvbSAnLi9Gb3JtRWxlbWVudHMvU3VibWl0JztcblxuY2xhc3MgR3Jhdml0eUZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3VibWl0RmFpbGVkOiBmYWxzZSxcbiAgICAgIGVycm9yTWVzc2FnZXM6IGZhbHNlLFxuICAgICAgZm9ybVZhbHVlczoge30sXG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICBzdWJtaXRTdWNjZXNzOiBmYWxzZSxcbiAgICAgIGNvbmZpcm1hdGlvbk1lc3NhZ2U6IGZhbHNlLFxuICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgICBmb3JtRGF0YToge30sXG4gICAgICB0b3VjaGVkOiB7fSxcbiAgICAgIGFjdGl2ZVBhZ2U6IGZhbHNlLFxuICAgICAgY29uZGl0aW9uRmllbGRzOiB7fSxcbiAgICAgIGNvbmRpdGlvYW5sSWRzOiB7fSxcbiAgICAgIGlzTXVsdGlwYXJ0OiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBmb3JtSUQsIGJhY2tlbmRVcmwsIHBvcHVsYXRlZEZpZWxkcyB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgIGxldCBpc011bHRpcGFydCA9IGZhbHNlO1xuICAgIGNvbnN0IGZvcm0gPSBhd2FpdCBheGlvc1xuICAgICAgLmdldChgJHtiYWNrZW5kVXJsfS8ke2Zvcm1JRH1gKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAgIC5jYXRjaCgoKSA9PiBmYWxzZSk7XG5cbiAgICBpZiAoZm9ybSAmJiB0aGlzLl9pc01vdW50ZWQpIHtcbiAgICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSB7fTtcbiAgICAgIGNvbnN0IGNvbmRpdGlvbkZpZWxkcyA9IFtdO1xuICAgICAgY29uc3QgY29uZGl0aW9hbmxJZHMgPSBbXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBmb3JtLmZpZWxkcykge1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGNvbnN0IGhhc1BvcHVsYXRpb24gPSAgICAgICAgICBmaWVsZC5pbnB1dE5hbWUgJiYgcG9wdWxhdGVkRmllbGRzICYmIHBvcHVsYXRlZEZpZWxkc1tmaWVsZC5pbnB1dE5hbWVdO1xuICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgIHZhbHVlID0gZmllbGQuY2hvaWNlc1xuICAgICAgICAgICAgLmZpbHRlcihjaG9pY2UgPT4gKGhhc1BvcHVsYXRpb24gPyBjaG9pY2UudmFsdWUgPT09IHBvcHVsYXRlZEZpZWxkc1tmaWVsZC5pbnB1dE5hbWVdIDogY2hvaWNlLmlzU2VsZWN0ZWQpLClcbiAgICAgICAgICAgIC5tYXAoY2hvaWNlID0+IGNob2ljZS52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgIGlmIChoYXNQb3B1bGF0aW9uKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHBvcHVsYXRlZEZpZWxkc1tmaWVsZC5pbnB1dE5hbWVdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwcmVzZWxlY3RlZCA9IGZpZWxkLmNob2ljZXMuZmluZChjaG9pY2UgPT4gY2hvaWNlLmlzU2VsZWN0ZWQpO1xuICAgICAgICAgICAgdmFsdWUgPSBwcmVzZWxlY3RlZCA/IHByZXNlbGVjdGVkLnZhbHVlIDogJyc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBmaWVsZC5jaG9pY2VzXG4gICAgICAgICAgICAuZmlsdGVyKGNob2ljZSA9PiAoaGFzUG9wdWxhdGlvbiA/IGNob2ljZS52YWx1ZSA9PT0gcG9wdWxhdGVkRmllbGRzW2ZpZWxkLmlucHV0TmFtZV0gOiBjaG9pY2UuaXNTZWxlY3RlZCksKVxuICAgICAgICAgICAgLm1hcChpdGVtID0+ICh7IHZhbHVlOiBpdGVtLnZhbHVlLCBsYWJlbDogaXRlbS50ZXh0IH0pKTtcbiAgICAgICAgICB2YWx1ZSA9IHNlbGVjdGVkT3B0aW9uICYmIHNlbGVjdGVkT3B0aW9uLmxlbmd0aCA+IDAgPyBzZWxlY3RlZE9wdGlvblswXSA6ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gaGFzUG9wdWxhdGlvbiA/IHBvcHVsYXRlZEZpZWxkc1tmaWVsZC5pbnB1dE5hbWVdIDogZmllbGQuZGVmYXVsdFZhbHVlO1xuICAgICAgICAgIGlmIChmaWVsZC50eXBlID09PSAnZmlsZXVwbG9hZCcpIHtcbiAgICAgICAgICAgIGlzTXVsdGlwYXJ0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBncmFiIGFsbCBjb25kaXRpb25hbCBsb2dpYyBmaWVsZHNcbiAgICAgICAgaWYgKGZpZWxkLmNvbmRpdGlvbmFsTG9naWMpIHtcbiAgICAgICAgICBjb25zdCB0bXBGaWVsZCA9IHtcbiAgICAgICAgICAgIGlkOiBmaWVsZC5pZCxcbiAgICAgICAgICAgIGNvbmRpdGlvbmFsTG9naWM6IGZpZWxkLmNvbmRpdGlvbmFsTG9naWMsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBjb25zdCBpZHMgPSBmaWVsZC5jb25kaXRpb25hbExvZ2ljLnJ1bGVzLm1hcChpdGVtID0+IGl0ZW0uZmllbGRJZCk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQoaWRzW2ldKTtcbiAgICAgICAgICAgIGlmIChjb25kaXRpb2FubElkcy5pbmRleE9mKGlkKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgY29uZGl0aW9hbmxJZHMucHVzaChpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbmRpdGlvbkZpZWxkcy5wdXNoKHRtcEZpZWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1WYWx1ZXNbZmllbGQuaWRdID0ge1xuICAgICAgICAgIHZhbGlkOiB2YWxpZGF0ZUZpZWxkKHZhbHVlLCBmaWVsZCksXG4gICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgbGFiZWw6IGZpZWxkLmxhYmVsLFxuICAgICAgICAgIHBhZ2VOdW1iZXI6IGZpZWxkLnBhZ2VOdW1iZXIsXG4gICAgICAgICAgY3NzQ2xhc3M6IGZpZWxkLmNzc0NsYXNzLFxuICAgICAgICAgIGlzUmVxdWlyZWQ6IGZpZWxkLmlzUmVxdWlyZWQsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICAvLyBjaGVjayBjb25kaXRpb24gbG9naWNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZGl0aW9uRmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvcm1WYWx1ZXNbY29uZGl0aW9uRmllbGRzW2ldLmlkXS5oaWRlRmllbGQgPSB0aGlzLmNoZWNrQ29uZGl0aW9uYWxMb2dpYyhcbiAgICAgICAgICBjb25kaXRpb25GaWVsZHNbaV0uY29uZGl0aW9uYWxMb2dpYyxcbiAgICAgICAgICBmb3JtVmFsdWVzLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9ybURhdGE6IGZvcm0sXG4gICAgICAgIGZvcm1WYWx1ZXMsXG4gICAgICAgIGFjdGl2ZVBhZ2U6IGZvcm0ucGFnaW5hdGlvbiA/IDEgOiBmYWxzZSxcbiAgICAgICAgY29uZGl0aW9uRmllbGRzLFxuICAgICAgICBjb25kaXRpb2FubElkcyxcbiAgICAgICAgaXNNdWx0aXBhcnQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHNldFRvdWNoZWQgPSAoaWQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRvdWNoZWQ6IHsgLi4udGhpcy5zdGF0ZS50b3VjaGVkLCBbaWRdOiB0cnVlIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgdW5zZXRFcnJvciA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHsgZXJyb3JNZXNzYWdlcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoIWVycm9yTWVzc2FnZXMpIHJldHVybjtcblxuICAgIGlmIChlcnJvck1lc3NhZ2VzW2lkXSkge1xuICAgICAgZGVsZXRlIGVycm9yTWVzc2FnZXNbaWRdO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZXMgfSk7XG4gICAgfVxuICB9O1xuXG4gIHVwZGF0ZUZvcm1IYW5kbGVyID0gKGV2ZW50LCBmaWVsZCkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybVZhbHVlcywgY29uZGl0aW9hbmxJZHMsIGNvbmRpdGlvbkZpZWxkcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgeyBpZCwgdHlwZSwgaXNSZXF1aXJlZCB9ID0gZmllbGQ7XG4gICAgLy8gU2V0IG5ldyB2YWx1ZVxuICAgIGxldCB2YWx1ZTtcbiAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgY29uc3QgdmFsdWVzID0gWy4uLmZvcm1WYWx1ZXNbZmllbGQuaWRdLnZhbHVlXTtcbiAgICAgIGNvbnN0IGluZGV4ID0gdmFsdWVzLmluZGV4T2YoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIHZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWVzLnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHZhbHVlID0gdmFsdWVzO1xuICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PSAnZGF0ZScpIHtcbiAgICAgIGNvbnN0IHsgc3ViSWQsIGRhdGVMYWJlbCB9ID0gZmllbGQ7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBbLi4uZm9ybVZhbHVlc1tmaWVsZC5pZF0udmFsdWVdO1xuICAgICAgdmFsdWVzW3N1YklkXSA9IHtcbiAgICAgICAgdmFsOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICAgIGxhYmVsOiBkYXRlTGFiZWwsXG4gICAgICB9O1xuICAgICAgdmFsdWUgPSB2YWx1ZXM7XG4gICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09ICdjb25zZW50Jykge1xuICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQgPyBldmVudC50YXJnZXQuY2hlY2tlZCA6ICdudWxsJztcbiAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09ICdwYXNzd29yZCcpIHtcbiAgICAgIGNvbnN0IHsgc3ViSWQgfSA9IGZpZWxkO1xuICAgICAgY29uc3QgdmFsdWVzID0gICAgICAgIGZvcm1WYWx1ZXNbZmllbGQuaWRdICYmIGZvcm1WYWx1ZXNbZmllbGQuaWRdLnZhbHVlID8gWy4uLmZvcm1WYWx1ZXNbZmllbGQuaWRdLnZhbHVlXSA6IFtdO1xuICAgICAgdmFsdWVzW3N1YklkXSA9IHtcbiAgICAgICAgdmFsOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICB9O1xuICAgICAgdmFsdWUgPSB2YWx1ZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gZXZlbnQudGFyZ2V0ID8gZXZlbnQudGFyZ2V0LnZhbHVlIDogJ251bGwnO1xuICAgIH1cbiAgICAvLyBpZiBmaWVsZCBpcyBJQkFOXG4gICAgaWYgKHR5cGUgPT09ICd0ZXh0JyAmJiBmaWVsZC5jc3NDbGFzcy5pbmRleE9mKCdpYmFuJykgPiAtMSkge1xuICAgICAgdHlwZSA9ICdpYmFuJztcbiAgICB9XG5cbiAgICAvLyBWYWxpZGF0ZSBmaWVsZFxuICAgIGNvbnN0IHZhbGlkID0gdmFsaWRhdGVGaWVsZCh2YWx1ZSwgZmllbGQpO1xuXG4gICAgLy8gaWYgZmllbGQgSUQgaXMgc29tZXdoZXJlIGluIGNvbmRpdGlvbmFsIGZpZWxkc1xuICAgIC8vIHJlY2FsY3VsYXRlIGFsbCBjb25kaXRpb25zXG4gICAgaWYgKGNvbmRpdGlvYW5sSWRzLmluZGV4T2YoaWQpICE9PSAtMSkge1xuICAgICAgZm9ybVZhbHVlc1tpZF0udmFsdWUgPSB2YWx1ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZGl0aW9uRmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IGNvbmRpdGlvbkZpZWxkc1tpXTtcbiAgICAgICAgY29uc3QgaGlkZSA9IHRoaXMuY2hlY2tDb25kaXRpb25hbExvZ2ljKGNvbmRpdGlvbkZpZWxkc1tpXS5jb25kaXRpb25hbExvZ2ljLCBmb3JtVmFsdWVzKTtcbiAgICAgICAgZm9ybVZhbHVlc1tpZF0uaGlkZUZpZWxkID0gaGlkZTtcbiAgICAgICAgaWYgKGhpZGUpIHtcbiAgICAgICAgICBpZiAoZm9ybVZhbHVlc1tpZF0uaXNSZXF1aXJlZCAmJiBoaWRlKSB7XG4gICAgICAgICAgICBmb3JtVmFsdWVzW2lkXS52YWx1ZSA9ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtVmFsdWVzW2lkXS52YWxpZCA9ICEhZm9ybVZhbHVlc1tpZF0uaXNSZXF1aXJlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIGZvcm1WYWx1ZXM6IHtcbiAgICAgICAgICAuLi5mb3JtVmFsdWVzLFxuICAgICAgICAgIFtpZF06IHtcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICB2YWxpZCxcbiAgICAgICAgICAgIGxhYmVsOiBmaWVsZC5sYWJlbCxcbiAgICAgICAgICAgIHBhZ2VOdW1iZXI6IGZpZWxkLnBhZ2VOdW1iZXIsXG4gICAgICAgICAgICBjc3NDbGFzczogZmllbGQuY3NzQ2xhc3MsXG4gICAgICAgICAgICBpc1JlcXVpcmVkOiBmaWVsZC5pc1JlcXVpcmVkLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICAvLyBwYXNzIHN0YXRlIHRvIHBhcmVudCBjb21wb25lbnRcbiAgICAgICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UodGhpcy5zdGF0ZS5mb3JtVmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICApO1xuICB9O1xuXG4gIHNjcm9sbFRvQ29uZmlybWF0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSB0aGlzLndyYXBwZXJSZWYgPyB0aGlzLndyYXBwZXJSZWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOiBmYWxzZTtcbiAgICBpZiAocmVjdCAmJiB3aW5kb3cpIHtcbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiBzY3JvbGxUb3AgKyByZWN0LnRvcCAtIDEwMCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdWJtaXR0aW5nOiB0cnVlLFxuICAgICAgc3VibWl0U3VjY2VzczogZmFsc2UsXG4gICAgICBzdWJtaXRGYWlsZWQ6IGZhbHNlLFxuICAgICAgY29uZmlybWF0aW9uTWVzc2FnZTogZmFsc2UsXG4gICAgICBlcnJvck1lc3NhZ2VzOiBmYWxzZSxcbiAgICB9KTtcbiAgICBjb25zdCB7IGZvcm1JRCwgYmFja2VuZFVybCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBnZlN1Ym1pc3Npb25VcmwgPSBiYWNrZW5kVXJsLnN1YnN0cmluZygwLCBiYWNrZW5kVXJsLmluZGV4T2YoJy93cC1qc29uJykpO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcbiAgICBheGlvc1xuICAgICAgLnBvc3QoYCR7Z2ZTdWJtaXNzaW9uVXJsfS93cC1qc29uL2dmL3YyL2Zvcm1zLyR7Zm9ybUlEfS9zdWJtaXNzaW9uc2AsIGRhdGEpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5pc192YWxpZCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICAgICAgICBzdWJtaXRTdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlybWF0aW9uTWVzc2FnZTogcmVzcG9uc2UuZGF0YS5jb25maXJtYXRpb25fbWVzc2FnZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvQ29uZmlybWF0aW9uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Ym1pdEZhaWxlZDogdHJ1ZSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZXM6ICdTb21ldGhpbmcgd2VudCB3cm9uZycsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgICAgIHN1Ym1pdEZhaWxlZDogdHJ1ZSxcbiAgICAgICAgICBlcnJvck1lc3NhZ2VzOiBlcnJvci5yZXNwb25zZS5kYXRhLnZhbGlkYXRpb25fbWVzc2FnZXMsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgbmV4dFN0ZXAgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IGFjdGl2ZVBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVQYWdlOiBhY3RpdmVQYWdlICsgMSxcbiAgICB9KTtcbiAgfTtcblxuICBwcmV2U3RlcCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgYWN0aXZlUGFnZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZVBhZ2U6IGFjdGl2ZVBhZ2UgLSAxLFxuICAgIH0pO1xuICB9O1xuXG4gIGNoZWNrQ29uZGl0aW9uYWxMb2dpYyA9IChjb25kaXRpb24sIGZpZWxkcyA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgeyBydWxlcywgYWN0aW9uVHlwZSB9ID0gY29uZGl0aW9uO1xuICAgIGlmICghcnVsZXMpIHJldHVybiB0cnVlO1xuXG4gICAgY29uc3QgZm9ybVZhbHVlcyA9IGZpZWxkcyB8fCB0aGlzLnN0YXRlLmZvcm1WYWx1ZXM7XG5cbiAgICAvLyBzaG93IG9ubHkgaWYgaXMgc2VsZWN0ZWQgXCJBbGwgZmllbGRzXCIgKGl0IHNob3VsZCBiZSB0d2Vha2VkIGluIGZ1dHVyZSlcbiAgICAvLyB3b3JrcyBvbmx5IFwic2hvdy9oaWRlIHdoZW4gZmllbGQgaXMgZXF1YWwgdG9cIlxuICAgIGxldCBoaWRlRmllbGQgPSBhY3Rpb25UeXBlICE9PSAnaGlkZSc7XG4gICAgY29uc3QgaGlkZUJhc2VkT25SdWxlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHsgZmllbGRJZCwgdmFsdWUgfSA9IHJ1bGVzW2ldO1xuICAgICAgY29uc3QgY29uZGl0aW9uRmllbGRWYWx1ZSA9IGZvcm1WYWx1ZXNbZmllbGRJZF0udmFsdWU7XG5cbiAgICAgIGNvbnN0IHN0cmluZ1ZhbHVlID0gQXJyYXkuaXNBcnJheShjb25kaXRpb25GaWVsZFZhbHVlKVxuICAgICAgICA/IGNvbmRpdGlvbkZpZWxkVmFsdWUuam9pbignJylcbiAgICAgICAgOiBjb25kaXRpb25GaWVsZFZhbHVlO1xuICAgICAgaWYgKHN0cmluZ1ZhbHVlICYmIHZhbHVlID09PSBzdHJpbmdWYWx1ZSkge1xuICAgICAgICBoaWRlQmFzZWRPblJ1bGVzW2ldID0gYWN0aW9uVHlwZSA9PT0gJ2hpZGUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGlkZUJhc2VkT25SdWxlc1tpXSA9IGFjdGlvblR5cGUgIT09ICdoaWRlJztcbiAgICAgIH1cbiAgICB9XG4gICAgaGlkZUZpZWxkID0gaGlkZUJhc2VkT25SdWxlcy5ldmVyeShpID0+IGkgPT09IHRydWUpO1xuICAgIC8vIGZvcm1WYWx1ZXNbaWRdLmhpZGVGaWVsZCA9IGhpZGVGaWVsZDtcbiAgICAvLyB0aGlzLnNldFN0YXRlKHsgZm9ybVZhbHVlcyB9KTtcbiAgICByZXR1cm4gaGlkZUZpZWxkO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBmb3JtRGF0YSxcbiAgICAgIGZvcm1WYWx1ZXMsXG4gICAgICBzdWJtaXRGYWlsZWQsXG4gICAgICBzdWJtaXRTdWNjZXNzLFxuICAgICAgdG91Y2hlZCxcbiAgICAgIHN1Ym1pdHRpbmcsXG4gICAgICBhY3RpdmVQYWdlLFxuICAgICAgaXNNdWx0aXBhcnQsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgdGl0bGUsXG4gICAgICBzdWJtaXRJY29uLFxuICAgICAgc2F2ZVN0YXRlVG9IdG1sRmllbGQsXG4gICAgICBzdHlsZWRDb21wb25lbnRzLFxuICAgICAgY3VzdG9tQ29tcG9uZW50cyxcbiAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgIGRyb3B6b25lVGV4dCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gQnV0dG9uLCBMb2FkaW5nLCBHRldyYXBwZXIgPSAnZGl2JywgRm9ybUVycm9yOiBTRm9ybUVycm9yIFxufSA9IHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG5cbiAgICBjb25zdCB7IGNzc0NsYXNzIH0gPSBmb3JtRGF0YTtcblxuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBPYmplY3Qua2V5cyhmb3JtVmFsdWVzKS5zb21lKFxuICAgICAgeCA9PiAhZm9ybVZhbHVlc1t4XS5oaWRlRmllbGQgJiYgZm9ybVZhbHVlc1t4XS52YWxpZCxcbiAgICApO1xuICAgIGNvbnN0IGlzTmV4dERpc2FibGVkID0gYWN0aXZlUGFnZVxuICAgICAgPyBPYmplY3Qua2V5cyhmb3JtVmFsdWVzKS5zb21lKFxuICAgICAgICB4ID0+IGZvcm1WYWx1ZXNbeF0ucGFnZU51bWJlciA9PT0gYWN0aXZlUGFnZVxuICAgICAgICAgICAgJiYgIWZvcm1WYWx1ZXNbeF0uaGlkZUZpZWxkXG4gICAgICAgICAgICAmJiBmb3JtVmFsdWVzW3hdLnZhbGlkLFxuICAgICAgKVxuICAgICAgOiBmYWxzZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17ZWwgPT4gKHRoaXMud3JhcHBlclJlZiA9IGVsKX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS13cmFwcGVyXCJcbiAgICAgICAgY3NzPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19XG4gICAgICAgIGlkPXtgZ3Jhdml0eV9mb3JtXyR7dGhpcy5wcm9wcy5mb3JtSUR9YH1cbiAgICAgID5cbiAgICAgICAge2Zvcm1EYXRhLnRpdGxlID8gbnVsbCA6IExvYWRpbmcgJiYgPExvYWRpbmcgaXNMb2FkaW5nIC8+fVxuXG4gICAgICAgIHtzdWJtaXRGYWlsZWQgJiYgIXN1Ym1pdFN1Y2Nlc3MgJiYgKFxuICAgICAgICAgIDxGb3JtRXJyb3JcbiAgICAgICAgICAgIFNGb3JtRXJyb3I9e1NGb3JtRXJyb3IgfHwgZmFsc2V9XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U9e2Vycm9yTWVzc2FnZSB8fCAnVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHlvdXIgc3VibWlzc2lvbid9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7c3VibWl0U3VjY2VzcyAmJiB0aGlzLnN0YXRlLmNvbmZpcm1hdGlvbk1lc3NhZ2UgJiYgKFxuICAgICAgICAgIDxGb3JtQ29uZmlybWF0aW9uIGNvbmZpcm1hdGlvbj17dGhpcy5zdGF0ZS5jb25maXJtYXRpb25NZXNzYWdlfSAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHshc3VibWl0U3VjY2VzcyAmJiBmb3JtRGF0YS5maWVsZHMgPyAoXG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIG9uU3VibWl0PXtlID0+IHRoaXMub25TdWJtaXQoZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nzc0NsYXNzfVxuICAgICAgICAgICAgZW5jVHlwZT17aXNNdWx0aXBhcnQgPyAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICBub1ZhbGlkYXRlXG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyhmb3JtRGF0YS50aXRsZSB8fCBmb3JtRGF0YS5kZXNjcmlwdGlvbikgJiYgKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtmb3JtRGF0YS50aXRsZSAmJiB0aXRsZSA/IDxoMyBjbGFzc05hbWU9XCJmb3JtLXRpdGxlXCI+e2Zvcm1EYXRhLnRpdGxlfTwvaDM+IDogbnVsbH1cbiAgICAgICAgICAgICAgICB7Zm9ybURhdGEuZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb3JtLWRlc2NyaXB0aW9uXCI+e2Zvcm1EYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0td3JhcHBlclwiPlxuICAgICAgICAgICAgICA8UmVuZGVyRmllbGRzXG4gICAgICAgICAgICAgICAgc3R5bGVkQ29tcG9uZW50cz17c3R5bGVkQ29tcG9uZW50c31cbiAgICAgICAgICAgICAgICBjdXN0b21Db21wb25lbnRzPXtjdXN0b21Db21wb25lbnRzfVxuICAgICAgICAgICAgICAgIGZpZWxkcz17Zm9ybURhdGEuZmllbGRzfVxuICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXM9e2Zvcm1WYWx1ZXN9XG4gICAgICAgICAgICAgICAgc3VibWl0RmFpbGVkPXtzdWJtaXRGYWlsZWR9XG4gICAgICAgICAgICAgICAgc3VibWl0U3VjY2Vzcz17c3VibWl0U3VjY2Vzc31cbiAgICAgICAgICAgICAgICB1cGRhdGVGb3JtPXt0aGlzLnVwZGF0ZUZvcm1IYW5kbGVyfVxuICAgICAgICAgICAgICAgIHRvdWNoZWQ9e3RvdWNoZWR9XG4gICAgICAgICAgICAgICAgc2V0VG91Y2hlZD17dGhpcy5zZXRUb3VjaGVkfVxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e2Zvcm1EYXRhLnBhZ2luYXRpb259XG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZT17YWN0aXZlUGFnZX1cbiAgICAgICAgICAgICAgICBwcmV2U3RlcD17dGhpcy5wcmV2U3RlcH1cbiAgICAgICAgICAgICAgICBuZXh0U3RlcD17dGhpcy5uZXh0U3RlcH1cbiAgICAgICAgICAgICAgICBpc05leHREaXNhYmxlZD17aXNOZXh0RGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgY2hlY2tDb25kaXRpb25hbExvZ2ljPXt0aGlzLmNoZWNrQ29uZGl0aW9uYWxMb2dpY31cbiAgICAgICAgICAgICAgICBzYXZlU3RhdGVUb0h0bWxGaWVsZD17c2F2ZVN0YXRlVG9IdG1sRmllbGR9XG4gICAgICAgICAgICAgICAgZW5hYmxlSG9uZXlwb3Q9e2Zvcm1EYXRhLmVuYWJsZUhvbmV5cG90fVxuICAgICAgICAgICAgICAgIGVycm9ycz17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2VzfVxuICAgICAgICAgICAgICAgIHVuc2V0RXJyb3I9e3RoaXMudW5zZXRFcnJvcn1cbiAgICAgICAgICAgICAgICBkcm9wem9uZVRleHQ9e2Ryb3B6b25lVGV4dH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgeyghZm9ybURhdGEucGFnaW5hdGlvblxuICAgICAgICAgICAgICAgIHx8IChmb3JtRGF0YS5wYWdpbmF0aW9uICYmIGZvcm1EYXRhLnBhZ2luYXRpb24ucGFnZXMubGVuZ3RoID09PSBhY3RpdmVQYWdlKSkgJiYgKFxuICAgICAgICAgICAgICAgIDxTdWJtaXRcbiAgICAgICAgICAgICAgICAgIEJ1dHRvbj17QnV0dG9ufVxuICAgICAgICAgICAgICAgICAgTG9hZGluZz17TG9hZGluZ31cbiAgICAgICAgICAgICAgICAgIGZvcm1EYXRhPXtmb3JtRGF0YX1cbiAgICAgICAgICAgICAgICAgIHN1Ym1pdEljb249e3N1Ym1pdEljb259XG4gICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXtpc0Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgc3VibWl0dGluZz17c3VibWl0dGluZ31cbiAgICAgICAgICAgICAgICAgIHByZXZTdGVwPXt0aGlzLnByZXZTdGVwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgJydcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuR3Jhdml0eUZvcm0uZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogdHJ1ZSxcbiAgc3VibWl0SWNvbjogZmFsc2UsXG4gIHNhdmVTdGF0ZVRvSHRtbEZpZWxkOiBmYWxzZSxcbn07XG5cbmV4cG9ydCB7XG4gdmFsaWRhdGVGaWVsZCwgRm9ybUNvbmZpcm1hdGlvbiwgRm9ybUVycm9yLCBSZW5kZXJGaWVsZHMsIFN1Ym1pdCBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXZpdHlGb3JtO1xuIl19
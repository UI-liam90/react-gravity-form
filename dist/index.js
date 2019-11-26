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
          errorMessage = _this$props3.errorMessage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHcmF2aXR5Rm9ybSIsInByb3BzIiwiaWQiLCJzZXRTdGF0ZSIsInRvdWNoZWQiLCJzdGF0ZSIsImVycm9yTWVzc2FnZXMiLCJldmVudCIsImZpZWxkIiwiZm9ybVZhbHVlcyIsImNvbmRpdGlvYW5sSWRzIiwiY29uZGl0aW9uRmllbGRzIiwidHlwZSIsImlzUmVxdWlyZWQiLCJ2YWx1ZSIsInZhbHVlcyIsImluZGV4IiwiaW5kZXhPZiIsInRhcmdldCIsInNwbGljZSIsInB1c2giLCJzdWJJZCIsImRhdGVMYWJlbCIsInZhbCIsImxhYmVsIiwiY2hlY2tlZCIsImNzc0NsYXNzIiwidmFsaWQiLCJpIiwibGVuZ3RoIiwiaGlkZSIsImNoZWNrQ29uZGl0aW9uYWxMb2dpYyIsImNvbmRpdGlvbmFsTG9naWMiLCJoaWRlRmllbGQiLCJwYWdlTnVtYmVyIiwib25DaGFuZ2UiLCJyZWN0Iiwid3JhcHBlclJlZiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpbmRvdyIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUbyIsInRvcCIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0dGluZyIsInN1Ym1pdFN1Y2Nlc3MiLCJzdWJtaXRGYWlsZWQiLCJjb25maXJtYXRpb25NZXNzYWdlIiwiZm9ybUlEIiwiYmFja2VuZFVybCIsImdmU3VibWlzc2lvblVybCIsInN1YnN0cmluZyIsImRhdGEiLCJGb3JtRGF0YSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImlzX3ZhbGlkIiwiY29uZmlybWF0aW9uX21lc3NhZ2UiLCJzY3JvbGxUb0NvbmZpcm1hdGlvbiIsImVycm9yIiwidmFsaWRhdGlvbl9tZXNzYWdlcyIsImUiLCJhY3RpdmVQYWdlIiwiY29uZGl0aW9uIiwiZmllbGRzIiwicnVsZXMiLCJhY3Rpb25UeXBlIiwiaGlkZUJhc2VkT25SdWxlcyIsImZpZWxkSWQiLCJjb25kaXRpb25GaWVsZFZhbHVlIiwic3RyaW5nVmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJqb2luIiwiZXZlcnkiLCJsb2FkaW5nIiwiaXNWYWxpZCIsImZvcm1EYXRhIiwiaXNNdWx0aXBhcnQiLCJwb3B1bGF0ZWRGaWVsZHMiLCJfaXNNb3VudGVkIiwiZ2V0IiwiZm9ybSIsImhhc1BvcHVsYXRpb24iLCJpbnB1dE5hbWUiLCJjaG9pY2VzIiwiZmlsdGVyIiwiY2hvaWNlIiwiaXNTZWxlY3RlZCIsIm1hcCIsInByZXNlbGVjdGVkIiwiZmluZCIsInNlbGVjdGVkT3B0aW9uIiwiaXRlbSIsInRleHQiLCJkZWZhdWx0VmFsdWUiLCJ0bXBGaWVsZCIsImlkcyIsInBhcnNlSW50IiwicGFnaW5hdGlvbiIsInRpdGxlIiwic3VibWl0SWNvbiIsInNhdmVTdGF0ZVRvSHRtbEZpZWxkIiwic3R5bGVkQ29tcG9uZW50cyIsImVycm9yTWVzc2FnZSIsIkJ1dHRvbiIsIkxvYWRpbmciLCJHRldyYXBwZXIiLCJTRm9ybUVycm9yIiwiRm9ybUVycm9yIiwiaXNEaXNhYmxlZCIsIk9iamVjdCIsImtleXMiLCJzb21lIiwieCIsImlzTmV4dERpc2FibGVkIiwiZWwiLCJwb3NpdGlvbiIsIm9uU3VibWl0IiwidW5kZWZpbmVkIiwiZGVzY3JpcHRpb24iLCJ1cGRhdGVGb3JtSGFuZGxlciIsInNldFRvdWNoZWQiLCJwcmV2U3RlcCIsIm5leHRTdGVwIiwiZW5hYmxlSG9uZXlwb3QiLCJ1bnNldEVycm9yIiwicGFnZXMiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFc7Ozs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7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N0IsUUFIWjtBQUlFLFFBQUEsVUFBVSxFQUFFd0IsVUFKZDtBQUtFLFFBQUEsVUFBVSxFQUFFUyxVQUxkO0FBTUUsUUFBQSxVQUFVLEVBQUVwRSxVQU5kO0FBT0UsUUFBQSxRQUFRLEVBQUUsS0FBS2lGO0FBUGpCLFFBdkJKLENBZkYsQ0FERCxHQW9EQyxFQXZFSixDQURGO0FBNEVEOzs7O0VBMVp1QkssZ0I7O0FBNloxQnJJLFdBQVcsQ0FBQ3NJLFlBQVosR0FBMkI7QUFDekI3QixFQUFBQSxLQUFLLEVBQUUsSUFEa0I7QUFFekJDLEVBQUFBLFVBQVUsRUFBRSxLQUZhO0FBR3pCQyxFQUFBQSxvQkFBb0IsRUFBRTtBQUhHLENBQTNCO2VBVWUzRyxXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUmVuZGVyRmllbGRzIGZyb20gJy4vRm9ybUVsZW1lbnRzL1JlbmRlckZpZWxkcyc7XG5pbXBvcnQgRm9ybUVycm9yIGZyb20gJy4vRm9ybUVsZW1lbnRzL0Zvcm1FcnJvcic7XG5pbXBvcnQgRm9ybUNvbmZpcm1hdGlvbiBmcm9tICcuL0Zvcm1FbGVtZW50cy9Gb3JtQ29uZmlybWF0aW9uJztcbmltcG9ydCB7IHZhbGlkYXRlRmllbGQgfSBmcm9tICcuL0hlbHBlcnMvdmFsaWRhdGlvbic7XG5pbXBvcnQgU3VibWl0IGZyb20gJy4vRm9ybUVsZW1lbnRzL1N1Ym1pdCc7XG5cbmNsYXNzIEdyYXZpdHlGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN1Ym1pdEZhaWxlZDogZmFsc2UsXG4gICAgICBlcnJvck1lc3NhZ2VzOiBmYWxzZSxcbiAgICAgIGZvcm1WYWx1ZXM6IHt9LFxuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgc3VibWl0U3VjY2VzczogZmFsc2UsXG4gICAgICBjb25maXJtYXRpb25NZXNzYWdlOiBmYWxzZSxcbiAgICAgIGlzVmFsaWQ6IGZhbHNlLFxuICAgICAgZm9ybURhdGE6IHt9LFxuICAgICAgdG91Y2hlZDoge30sXG4gICAgICBhY3RpdmVQYWdlOiBmYWxzZSxcbiAgICAgIGNvbmRpdGlvbkZpZWxkczoge30sXG4gICAgICBjb25kaXRpb2FubElkczoge30sXG4gICAgICBpc011bHRpcGFydDogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZm9ybUlELCBiYWNrZW5kVXJsLCBwb3B1bGF0ZWRGaWVsZHMgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICBsZXQgaXNNdWx0aXBhcnQgPSBmYWxzZTtcbiAgICBjb25zdCBmb3JtID0gYXdhaXQgYXhpb3NcbiAgICAgIC5nZXQoYCR7YmFja2VuZFVybH0vJHtmb3JtSUR9YClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXG4gICAgICAuY2F0Y2goKCkgPT4gZmFsc2UpO1xuXG4gICAgaWYgKGZvcm0gJiYgdGhpcy5faXNNb3VudGVkKSB7XG4gICAgICBjb25zdCBmb3JtVmFsdWVzID0ge307XG4gICAgICBjb25zdCBjb25kaXRpb25GaWVsZHMgPSBbXTtcbiAgICAgIGNvbnN0IGNvbmRpdGlvYW5sSWRzID0gW107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgZm9ybS5maWVsZHMpIHtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBjb25zdCBoYXNQb3B1bGF0aW9uID0gICAgICAgICAgZmllbGQuaW5wdXROYW1lICYmIHBvcHVsYXRlZEZpZWxkcyAmJiBwb3B1bGF0ZWRGaWVsZHNbZmllbGQuaW5wdXROYW1lXTtcbiAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICB2YWx1ZSA9IGZpZWxkLmNob2ljZXNcbiAgICAgICAgICAgIC5maWx0ZXIoY2hvaWNlID0+IChoYXNQb3B1bGF0aW9uID8gY2hvaWNlLnZhbHVlID09PSBwb3B1bGF0ZWRGaWVsZHNbZmllbGQuaW5wdXROYW1lXSA6IGNob2ljZS5pc1NlbGVjdGVkKSwpXG4gICAgICAgICAgICAubWFwKGNob2ljZSA9PiBjaG9pY2UudmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICBpZiAoaGFzUG9wdWxhdGlvbikge1xuICAgICAgICAgICAgdmFsdWUgPSBwb3B1bGF0ZWRGaWVsZHNbZmllbGQuaW5wdXROYW1lXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcHJlc2VsZWN0ZWQgPSBmaWVsZC5jaG9pY2VzLmZpbmQoY2hvaWNlID0+IGNob2ljZS5pc1NlbGVjdGVkKTtcbiAgICAgICAgICAgIHZhbHVlID0gcHJlc2VsZWN0ZWQgPyBwcmVzZWxlY3RlZC52YWx1ZSA6ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gZmllbGQuY2hvaWNlc1xuICAgICAgICAgICAgLmZpbHRlcihjaG9pY2UgPT4gKGhhc1BvcHVsYXRpb24gPyBjaG9pY2UudmFsdWUgPT09IHBvcHVsYXRlZEZpZWxkc1tmaWVsZC5pbnB1dE5hbWVdIDogY2hvaWNlLmlzU2VsZWN0ZWQpLClcbiAgICAgICAgICAgIC5tYXAoaXRlbSA9PiAoeyB2YWx1ZTogaXRlbS52YWx1ZSwgbGFiZWw6IGl0ZW0udGV4dCB9KSk7XG4gICAgICAgICAgdmFsdWUgPSBzZWxlY3RlZE9wdGlvbiAmJiBzZWxlY3RlZE9wdGlvbi5sZW5ndGggPiAwID8gc2VsZWN0ZWRPcHRpb25bMF0gOiAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IGhhc1BvcHVsYXRpb24gPyBwb3B1bGF0ZWRGaWVsZHNbZmllbGQuaW5wdXROYW1lXSA6IGZpZWxkLmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2ZpbGV1cGxvYWQnKSB7XG4gICAgICAgICAgICBpc011bHRpcGFydCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ3JhYiBhbGwgY29uZGl0aW9uYWwgbG9naWMgZmllbGRzXG4gICAgICAgIGlmIChmaWVsZC5jb25kaXRpb25hbExvZ2ljKSB7XG4gICAgICAgICAgY29uc3QgdG1wRmllbGQgPSB7XG4gICAgICAgICAgICBpZDogZmllbGQuaWQsXG4gICAgICAgICAgICBjb25kaXRpb25hbExvZ2ljOiBmaWVsZC5jb25kaXRpb25hbExvZ2ljLFxuICAgICAgICAgIH07XG4gICAgICAgICAgY29uc3QgaWRzID0gZmllbGQuY29uZGl0aW9uYWxMb2dpYy5ydWxlcy5tYXAoaXRlbSA9PiBpdGVtLmZpZWxkSWQpO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHBhcnNlSW50KGlkc1tpXSk7XG4gICAgICAgICAgICBpZiAoY29uZGl0aW9hbmxJZHMuaW5kZXhPZihpZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIGNvbmRpdGlvYW5sSWRzLnB1c2goaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25kaXRpb25GaWVsZHMucHVzaCh0bXBGaWVsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtVmFsdWVzW2ZpZWxkLmlkXSA9IHtcbiAgICAgICAgICB2YWxpZDogdmFsaWRhdGVGaWVsZCh2YWx1ZSwgZmllbGQpLFxuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIGxhYmVsOiBmaWVsZC5sYWJlbCxcbiAgICAgICAgICBwYWdlTnVtYmVyOiBmaWVsZC5wYWdlTnVtYmVyLFxuICAgICAgICAgIGNzc0NsYXNzOiBmaWVsZC5jc3NDbGFzcyxcbiAgICAgICAgICBpc1JlcXVpcmVkOiBmaWVsZC5pc1JlcXVpcmVkLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy8gY2hlY2sgY29uZGl0aW9uIGxvZ2ljXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmRpdGlvbkZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3JtVmFsdWVzW2NvbmRpdGlvbkZpZWxkc1tpXS5pZF0uaGlkZUZpZWxkID0gdGhpcy5jaGVja0NvbmRpdGlvbmFsTG9naWMoXG4gICAgICAgICAgY29uZGl0aW9uRmllbGRzW2ldLmNvbmRpdGlvbmFsTG9naWMsXG4gICAgICAgICAgZm9ybVZhbHVlcyxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvcm1EYXRhOiBmb3JtLFxuICAgICAgICBmb3JtVmFsdWVzLFxuICAgICAgICBhY3RpdmVQYWdlOiBmb3JtLnBhZ2luYXRpb24gPyAxIDogZmFsc2UsXG4gICAgICAgIGNvbmRpdGlvbkZpZWxkcyxcbiAgICAgICAgY29uZGl0aW9hbmxJZHMsXG4gICAgICAgIGlzTXVsdGlwYXJ0LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gIH1cblxuICBzZXRUb3VjaGVkID0gKGlkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0b3VjaGVkOiB7IC4uLnRoaXMuc3RhdGUudG91Y2hlZCwgW2lkXTogdHJ1ZSB9LFxuICAgIH0pO1xuICB9O1xuXG4gIHVuc2V0RXJyb3IgPSAoaWQpID0+IHtcbiAgICBjb25zdCB7IGVycm9yTWVzc2FnZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKCFlcnJvck1lc3NhZ2VzKSByZXR1cm47XG5cbiAgICBpZiAoZXJyb3JNZXNzYWdlc1tpZF0pIHtcbiAgICAgIGRlbGV0ZSBlcnJvck1lc3NhZ2VzW2lkXTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2VzIH0pO1xuICAgIH1cbiAgfTtcblxuICB1cGRhdGVGb3JtSGFuZGxlciA9IChldmVudCwgZmllbGQpID0+IHtcbiAgICBjb25zdCB7IGZvcm1WYWx1ZXMsIGNvbmRpdGlvYW5sSWRzLCBjb25kaXRpb25GaWVsZHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IHsgaWQsIHR5cGUsIGlzUmVxdWlyZWQgfSA9IGZpZWxkO1xuICAgIC8vIFNldCBuZXcgdmFsdWVcbiAgICBsZXQgdmFsdWU7XG4gICAgaWYgKGZpZWxkLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IFsuLi5mb3JtVmFsdWVzW2ZpZWxkLmlkXS52YWx1ZV07XG4gICAgICBjb25zdCBpbmRleCA9IHZhbHVlcy5pbmRleE9mKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICB2YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlcy5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICB9XG4gICAgICB2YWx1ZSA9IHZhbHVlcztcbiAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT0gJ2RhdGUnKSB7XG4gICAgICBjb25zdCB7IHN1YklkLCBkYXRlTGFiZWwgfSA9IGZpZWxkO1xuICAgICAgY29uc3QgdmFsdWVzID0gWy4uLmZvcm1WYWx1ZXNbZmllbGQuaWRdLnZhbHVlXTtcbiAgICAgIHZhbHVlc1tzdWJJZF0gPSB7XG4gICAgICAgIHZhbDogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICBsYWJlbDogZGF0ZUxhYmVsLFxuICAgICAgfTtcbiAgICAgIHZhbHVlID0gdmFsdWVzO1xuICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PSAnY29uc2VudCcpIHtcbiAgICAgIHZhbHVlID0gZXZlbnQudGFyZ2V0ID8gZXZlbnQudGFyZ2V0LmNoZWNrZWQgOiAnbnVsbCc7XG4gICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSAncGFzc3dvcmQnKSB7XG4gICAgICBjb25zdCB7IHN1YklkIH0gPSBmaWVsZDtcbiAgICAgIGNvbnN0IHZhbHVlcyA9ICAgICAgICBmb3JtVmFsdWVzW2ZpZWxkLmlkXSAmJiBmb3JtVmFsdWVzW2ZpZWxkLmlkXS52YWx1ZSA/IFsuLi5mb3JtVmFsdWVzW2ZpZWxkLmlkXS52YWx1ZV0gOiBbXTtcbiAgICAgIHZhbHVlc1tzdWJJZF0gPSB7XG4gICAgICAgIHZhbDogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgfTtcbiAgICAgIHZhbHVlID0gdmFsdWVzO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldCA/IGV2ZW50LnRhcmdldC52YWx1ZSA6ICdudWxsJztcbiAgICB9XG4gICAgLy8gaWYgZmllbGQgaXMgSUJBTlxuICAgIGlmICh0eXBlID09PSAndGV4dCcgJiYgZmllbGQuY3NzQ2xhc3MuaW5kZXhPZignaWJhbicpID4gLTEpIHtcbiAgICAgIHR5cGUgPSAnaWJhbic7XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgZmllbGRcbiAgICBjb25zdCB2YWxpZCA9IHZhbGlkYXRlRmllbGQodmFsdWUsIGZpZWxkKTtcblxuICAgIC8vIGlmIGZpZWxkIElEIGlzIHNvbWV3aGVyZSBpbiBjb25kaXRpb25hbCBmaWVsZHNcbiAgICAvLyByZWNhbGN1bGF0ZSBhbGwgY29uZGl0aW9uc1xuICAgIGlmIChjb25kaXRpb2FubElkcy5pbmRleE9mKGlkKSAhPT0gLTEpIHtcbiAgICAgIGZvcm1WYWx1ZXNbaWRdLnZhbHVlID0gdmFsdWU7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmRpdGlvbkZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB7IGlkIH0gPSBjb25kaXRpb25GaWVsZHNbaV07XG4gICAgICAgIGNvbnN0IGhpZGUgPSB0aGlzLmNoZWNrQ29uZGl0aW9uYWxMb2dpYyhjb25kaXRpb25GaWVsZHNbaV0uY29uZGl0aW9uYWxMb2dpYywgZm9ybVZhbHVlcyk7XG4gICAgICAgIGZvcm1WYWx1ZXNbaWRdLmhpZGVGaWVsZCA9IGhpZGU7XG4gICAgICAgIGlmIChoaWRlKSB7XG4gICAgICAgICAgaWYgKGZvcm1WYWx1ZXNbaWRdLmlzUmVxdWlyZWQgJiYgaGlkZSkge1xuICAgICAgICAgICAgZm9ybVZhbHVlc1tpZF0udmFsdWUgPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9ybVZhbHVlc1tpZF0udmFsaWQgPSAhIWZvcm1WYWx1ZXNbaWRdLmlzUmVxdWlyZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBmb3JtVmFsdWVzOiB7XG4gICAgICAgICAgLi4uZm9ybVZhbHVlcyxcbiAgICAgICAgICBbaWRdOiB7XG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgdmFsaWQsXG4gICAgICAgICAgICBsYWJlbDogZmllbGQubGFiZWwsXG4gICAgICAgICAgICBwYWdlTnVtYmVyOiBmaWVsZC5wYWdlTnVtYmVyLFxuICAgICAgICAgICAgY3NzQ2xhc3M6IGZpZWxkLmNzc0NsYXNzLFxuICAgICAgICAgICAgaXNSZXF1aXJlZDogZmllbGQuaXNSZXF1aXJlZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgLy8gcGFzcyBzdGF0ZSB0byBwYXJlbnQgY29tcG9uZW50XG4gICAgICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKHRoaXMuc3RhdGUuZm9ybVZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgKTtcbiAgfTtcblxuICBzY3JvbGxUb0NvbmZpcm1hdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy53cmFwcGVyUmVmID8gdGhpcy53cmFwcGVyUmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogZmFsc2U7XG4gICAgaWYgKHJlY3QgJiYgd2luZG93KSB7XG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogc2Nyb2xsVG9wICsgcmVjdC50b3AgLSAxMDAsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3VibWl0dGluZzogdHJ1ZSxcbiAgICAgIHN1Ym1pdFN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgc3VibWl0RmFpbGVkOiBmYWxzZSxcbiAgICAgIGNvbmZpcm1hdGlvbk1lc3NhZ2U6IGZhbHNlLFxuICAgICAgZXJyb3JNZXNzYWdlczogZmFsc2UsXG4gICAgfSk7XG4gICAgY29uc3QgeyBmb3JtSUQsIGJhY2tlbmRVcmwgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZ2ZTdWJtaXNzaW9uVXJsID0gYmFja2VuZFVybC5zdWJzdHJpbmcoMCwgYmFja2VuZFVybC5pbmRleE9mKCcvd3AtanNvbicpKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KGAke2dmU3VibWlzc2lvblVybH0vd3AtanNvbi9nZi92Mi9mb3Jtcy8ke2Zvcm1JRH0vc3VibWlzc2lvbnNgLCBkYXRhKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEuaXNfdmFsaWQpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc3VibWl0U3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvbk1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEuY29uZmlybWF0aW9uX21lc3NhZ2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5zY3JvbGxUb0NvbmZpcm1hdGlvbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICAgICAgICBzdWJtaXRGYWlsZWQ6IHRydWUsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VzOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgICAgICBzdWJtaXRGYWlsZWQ6IHRydWUsXG4gICAgICAgICAgZXJyb3JNZXNzYWdlczogZXJyb3IucmVzcG9uc2UuZGF0YS52YWxpZGF0aW9uX21lc3NhZ2VzLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIG5leHRTdGVwID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBhY3RpdmVQYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlUGFnZTogYWN0aXZlUGFnZSArIDEsXG4gICAgfSk7XG4gIH07XG5cbiAgcHJldlN0ZXAgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IGFjdGl2ZVBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVQYWdlOiBhY3RpdmVQYWdlIC0gMSxcbiAgICB9KTtcbiAgfTtcblxuICBjaGVja0NvbmRpdGlvbmFsTG9naWMgPSAoY29uZGl0aW9uLCBmaWVsZHMgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IHsgcnVsZXMsIGFjdGlvblR5cGUgfSA9IGNvbmRpdGlvbjtcbiAgICBpZiAoIXJ1bGVzKSByZXR1cm4gdHJ1ZTtcblxuICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSBmaWVsZHMgfHwgdGhpcy5zdGF0ZS5mb3JtVmFsdWVzO1xuXG4gICAgLy8gc2hvdyBvbmx5IGlmIGlzIHNlbGVjdGVkIFwiQWxsIGZpZWxkc1wiIChpdCBzaG91bGQgYmUgdHdlYWtlZCBpbiBmdXR1cmUpXG4gICAgLy8gd29ya3Mgb25seSBcInNob3cvaGlkZSB3aGVuIGZpZWxkIGlzIGVxdWFsIHRvXCJcbiAgICBsZXQgaGlkZUZpZWxkID0gYWN0aW9uVHlwZSAhPT0gJ2hpZGUnO1xuICAgIGNvbnN0IGhpZGVCYXNlZE9uUnVsZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB7IGZpZWxkSWQsIHZhbHVlIH0gPSBydWxlc1tpXTtcbiAgICAgIGNvbnN0IGNvbmRpdGlvbkZpZWxkVmFsdWUgPSBmb3JtVmFsdWVzW2ZpZWxkSWRdLnZhbHVlO1xuXG4gICAgICBjb25zdCBzdHJpbmdWYWx1ZSA9IEFycmF5LmlzQXJyYXkoY29uZGl0aW9uRmllbGRWYWx1ZSlcbiAgICAgICAgPyBjb25kaXRpb25GaWVsZFZhbHVlLmpvaW4oJycpXG4gICAgICAgIDogY29uZGl0aW9uRmllbGRWYWx1ZTtcbiAgICAgIGlmIChzdHJpbmdWYWx1ZSAmJiB2YWx1ZSA9PT0gc3RyaW5nVmFsdWUpIHtcbiAgICAgICAgaGlkZUJhc2VkT25SdWxlc1tpXSA9IGFjdGlvblR5cGUgPT09ICdoaWRlJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhpZGVCYXNlZE9uUnVsZXNbaV0gPSBhY3Rpb25UeXBlICE9PSAnaGlkZSc7XG4gICAgICB9XG4gICAgfVxuICAgIGhpZGVGaWVsZCA9IGhpZGVCYXNlZE9uUnVsZXMuZXZlcnkoaSA9PiBpID09PSB0cnVlKTtcbiAgICAvLyBmb3JtVmFsdWVzW2lkXS5oaWRlRmllbGQgPSBoaWRlRmllbGQ7XG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGZvcm1WYWx1ZXMgfSk7XG4gICAgcmV0dXJuIGhpZGVGaWVsZDtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZm9ybURhdGEsXG4gICAgICBmb3JtVmFsdWVzLFxuICAgICAgc3VibWl0RmFpbGVkLFxuICAgICAgc3VibWl0U3VjY2VzcyxcbiAgICAgIHRvdWNoZWQsXG4gICAgICBzdWJtaXR0aW5nLFxuICAgICAgYWN0aXZlUGFnZSxcbiAgICAgIGlzTXVsdGlwYXJ0LFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtcbiB0aXRsZSwgc3VibWl0SWNvbiwgc2F2ZVN0YXRlVG9IdG1sRmllbGQsIHN0eWxlZENvbXBvbmVudHMsIGVycm9yTWVzc2FnZSBcbn0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiBCdXR0b24sIExvYWRpbmcsIEdGV3JhcHBlciA9ICdkaXYnLCBGb3JtRXJyb3I6IFNGb3JtRXJyb3IgXG59ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICAgIGNvbnN0IHsgY3NzQ2xhc3MgfSA9IGZvcm1EYXRhO1xuXG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IE9iamVjdC5rZXlzKGZvcm1WYWx1ZXMpLnNvbWUoXG4gICAgICB4ID0+ICFmb3JtVmFsdWVzW3hdLmhpZGVGaWVsZCAmJiBmb3JtVmFsdWVzW3hdLnZhbGlkLFxuICAgICk7XG4gICAgY29uc3QgaXNOZXh0RGlzYWJsZWQgPSBhY3RpdmVQYWdlXG4gICAgICA/IE9iamVjdC5rZXlzKGZvcm1WYWx1ZXMpLnNvbWUoXG4gICAgICAgIHggPT4gZm9ybVZhbHVlc1t4XS5wYWdlTnVtYmVyID09PSBhY3RpdmVQYWdlXG4gICAgICAgICAgICAmJiAhZm9ybVZhbHVlc1t4XS5oaWRlRmllbGRcbiAgICAgICAgICAgICYmIGZvcm1WYWx1ZXNbeF0udmFsaWQsXG4gICAgICApXG4gICAgICA6IGZhbHNlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxHRldyYXBwZXJcbiAgICAgICAgcmVmPXtlbCA9PiAodGhpcy53cmFwcGVyUmVmID0gZWwpfVxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXdyYXBwZXJcIlxuICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX1cbiAgICAgICAgaWQ9e2BncmF2aXR5X2Zvcm1fJHt0aGlzLnByb3BzLmZvcm1JRH1gfVxuICAgICAgPlxuICAgICAgICB7Zm9ybURhdGEudGl0bGUgPyBudWxsIDogTG9hZGluZyAmJiA8TG9hZGluZyBpc0xvYWRpbmcgLz59XG5cbiAgICAgICAge3N1Ym1pdEZhaWxlZCAmJiAhc3VibWl0U3VjY2VzcyAmJiAoXG4gICAgICAgICAgPEZvcm1FcnJvclxuICAgICAgICAgICAgU0Zvcm1FcnJvcj17U0Zvcm1FcnJvciB8fCBmYWxzZX1cbiAgICAgICAgICAgIGVycm9yTWVzc2FnZT17ZXJyb3JNZXNzYWdlIHx8ICdUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggeW91ciBzdWJtaXNzaW9uJ31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHtzdWJtaXRTdWNjZXNzICYmIHRoaXMuc3RhdGUuY29uZmlybWF0aW9uTWVzc2FnZSAmJiAoXG4gICAgICAgICAgPEZvcm1Db25maXJtYXRpb24gY29uZmlybWF0aW9uPXt0aGlzLnN0YXRlLmNvbmZpcm1hdGlvbk1lc3NhZ2V9IC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgeyFzdWJtaXRTdWNjZXNzICYmIGZvcm1EYXRhLmZpZWxkcyA/IChcbiAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgb25TdWJtaXQ9e2UgPT4gdGhpcy5vblN1Ym1pdChlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzQ2xhc3N9XG4gICAgICAgICAgICBlbmNUeXBlPXtpc011bHRpcGFydCA/ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIG5vVmFsaWRhdGVcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7KGZvcm1EYXRhLnRpdGxlIHx8IGZvcm1EYXRhLmRlc2NyaXB0aW9uKSAmJiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2Zvcm1EYXRhLnRpdGxlICYmIHRpdGxlID8gPGgzIGNsYXNzTmFtZT1cImZvcm0tdGl0bGVcIj57Zm9ybURhdGEudGl0bGV9PC9oMz4gOiBudWxsfVxuICAgICAgICAgICAgICAgIHtmb3JtRGF0YS5kZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm0tZGVzY3JpcHRpb25cIj57Zm9ybURhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxSZW5kZXJGaWVsZHNcbiAgICAgICAgICAgICAgICBzdHlsZWRDb21wb25lbnRzPXtzdHlsZWRDb21wb25lbnRzfVxuICAgICAgICAgICAgICAgIGZpZWxkcz17Zm9ybURhdGEuZmllbGRzfVxuICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXM9e2Zvcm1WYWx1ZXN9XG4gICAgICAgICAgICAgICAgc3VibWl0RmFpbGVkPXtzdWJtaXRGYWlsZWR9XG4gICAgICAgICAgICAgICAgc3VibWl0U3VjY2Vzcz17c3VibWl0U3VjY2Vzc31cbiAgICAgICAgICAgICAgICB1cGRhdGVGb3JtPXt0aGlzLnVwZGF0ZUZvcm1IYW5kbGVyfVxuICAgICAgICAgICAgICAgIHRvdWNoZWQ9e3RvdWNoZWR9XG4gICAgICAgICAgICAgICAgc2V0VG91Y2hlZD17dGhpcy5zZXRUb3VjaGVkfVxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e2Zvcm1EYXRhLnBhZ2luYXRpb259XG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZT17YWN0aXZlUGFnZX1cbiAgICAgICAgICAgICAgICBwcmV2U3RlcD17dGhpcy5wcmV2U3RlcH1cbiAgICAgICAgICAgICAgICBuZXh0U3RlcD17dGhpcy5uZXh0U3RlcH1cbiAgICAgICAgICAgICAgICBpc05leHREaXNhYmxlZD17aXNOZXh0RGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgY2hlY2tDb25kaXRpb25hbExvZ2ljPXt0aGlzLmNoZWNrQ29uZGl0aW9uYWxMb2dpY31cbiAgICAgICAgICAgICAgICBzYXZlU3RhdGVUb0h0bWxGaWVsZD17c2F2ZVN0YXRlVG9IdG1sRmllbGR9XG4gICAgICAgICAgICAgICAgZW5hYmxlSG9uZXlwb3Q9e2Zvcm1EYXRhLmVuYWJsZUhvbmV5cG90fVxuICAgICAgICAgICAgICAgIGVycm9ycz17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2VzfVxuICAgICAgICAgICAgICAgIHVuc2V0RXJyb3I9e3RoaXMudW5zZXRFcnJvcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgeyghZm9ybURhdGEucGFnaW5hdGlvblxuICAgICAgICAgICAgICAgIHx8IChmb3JtRGF0YS5wYWdpbmF0aW9uICYmIGZvcm1EYXRhLnBhZ2luYXRpb24ucGFnZXMubGVuZ3RoID09PSBhY3RpdmVQYWdlKSkgJiYgKFxuICAgICAgICAgICAgICAgIDxTdWJtaXRcbiAgICAgICAgICAgICAgICAgIEJ1dHRvbj17QnV0dG9ufVxuICAgICAgICAgICAgICAgICAgTG9hZGluZz17TG9hZGluZ31cbiAgICAgICAgICAgICAgICAgIGZvcm1EYXRhPXtmb3JtRGF0YX1cbiAgICAgICAgICAgICAgICAgIHN1Ym1pdEljb249e3N1Ym1pdEljb259XG4gICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXtpc0Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgc3VibWl0dGluZz17c3VibWl0dGluZ31cbiAgICAgICAgICAgICAgICAgIHByZXZTdGVwPXt0aGlzLnByZXZTdGVwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgJydcbiAgICAgICAgKX1cbiAgICAgIDwvR0ZXcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cblxuR3Jhdml0eUZvcm0uZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogdHJ1ZSxcbiAgc3VibWl0SWNvbjogZmFsc2UsXG4gIHNhdmVTdGF0ZVRvSHRtbEZpZWxkOiBmYWxzZSxcbn07XG5cbmV4cG9ydCB7XG4gdmFsaWRhdGVGaWVsZCwgRm9ybUNvbmZpcm1hdGlvbiwgRm9ybUVycm9yLCBSZW5kZXJGaWVsZHMsIFN1Ym1pdCBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXZpdHlGb3JtO1xuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHcmF2aXR5Rm9ybSIsInByb3BzIiwiaWQiLCJzZXRTdGF0ZSIsInRvdWNoZWQiLCJzdGF0ZSIsImVycm9yTWVzc2FnZXMiLCJldmVudCIsImZpZWxkIiwiZm9ybVZhbHVlcyIsImNvbmRpdGlvYW5sSWRzIiwiY29uZGl0aW9uRmllbGRzIiwidHlwZSIsImlzUmVxdWlyZWQiLCJ2YWx1ZSIsInZhbHVlcyIsImluZGV4IiwiaW5kZXhPZiIsInRhcmdldCIsInNwbGljZSIsInB1c2giLCJzdWJJZCIsImRhdGVMYWJlbCIsInZhbCIsImxhYmVsIiwiY2hlY2tlZCIsImNzc0NsYXNzIiwidmFsaWQiLCJpIiwibGVuZ3RoIiwiaGlkZSIsImNoZWNrQ29uZGl0aW9uYWxMb2dpYyIsImNvbmRpdGlvbmFsTG9naWMiLCJoaWRlRmllbGQiLCJwYWdlTnVtYmVyIiwib25DaGFuZ2UiLCJyZWN0Iiwid3JhcHBlclJlZiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpbmRvdyIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUbyIsInRvcCIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0dGluZyIsInN1Ym1pdFN1Y2Nlc3MiLCJzdWJtaXRGYWlsZWQiLCJjb25maXJtYXRpb25NZXNzYWdlIiwiZm9ybUlEIiwiYmFja2VuZFVybCIsImdmU3VibWlzc2lvblVybCIsInN1YnN0cmluZyIsImRhdGEiLCJGb3JtRGF0YSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImlzX3ZhbGlkIiwiY29uZmlybWF0aW9uX21lc3NhZ2UiLCJzY3JvbGxUb0NvbmZpcm1hdGlvbiIsImVycm9yIiwidmFsaWRhdGlvbl9tZXNzYWdlcyIsImUiLCJhY3RpdmVQYWdlIiwiY29uZGl0aW9uIiwiZmllbGRzIiwicnVsZXMiLCJhY3Rpb25UeXBlIiwiaGlkZUJhc2VkT25SdWxlcyIsImZpZWxkSWQiLCJjb25kaXRpb25GaWVsZFZhbHVlIiwic3RyaW5nVmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJqb2luIiwiZXZlcnkiLCJsb2FkaW5nIiwiaXNWYWxpZCIsImZvcm1EYXRhIiwiaXNNdWx0aXBhcnQiLCJwb3B1bGF0ZWRGaWVsZHMiLCJfaXNNb3VudGVkIiwiZ2V0IiwiZm9ybSIsImhhc1BvcHVsYXRpb24iLCJpbnB1dE5hbWUiLCJjaG9pY2VzIiwiZmlsdGVyIiwiY2hvaWNlIiwiaXNTZWxlY3RlZCIsIm1hcCIsInByZXNlbGVjdGVkIiwiZmluZCIsInNlbGVjdGVkT3B0aW9uIiwiaXRlbSIsInRleHQiLCJkZWZhdWx0VmFsdWUiLCJ0bXBGaWVsZCIsImlkcyIsInBhcnNlSW50IiwicGFnaW5hdGlvbiIsInRpdGxlIiwic3VibWl0SWNvbiIsInNhdmVTdGF0ZVRvSHRtbEZpZWxkIiwic3R5bGVkQ29tcG9uZW50cyIsIkJ1dHRvbiIsIkxvYWRpbmciLCJHRldyYXBwZXIiLCJpc0Rpc2FibGVkIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJ4IiwiaXNOZXh0RGlzYWJsZWQiLCJlbCIsInBvc2l0aW9uIiwib25TdWJtaXQiLCJ1bmRlZmluZWQiLCJkZXNjcmlwdGlvbiIsInVwZGF0ZUZvcm1IYW5kbGVyIiwic2V0VG91Y2hlZCIsInByZXZTdGVwIiwibmV4dFN0ZXAiLCJlbmFibGVIb25leXBvdCIsInVuc2V0RXJyb3IiLCJwYWdlcyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsVzs7Ozs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixxRkFBTUEsS0FBTjs7QUFEaUIsaUVBaUhOLFVBQUNDLEVBQUQsRUFBUTtBQUNuQixZQUFLQyxRQUFMLENBQWM7QUFDWkMsUUFBQUEsT0FBTyxvQkFBTyxNQUFLQyxLQUFMLENBQVdELE9BQWxCLHNCQUE0QkYsRUFBNUIsRUFBaUMsSUFBakM7QUFESyxPQUFkO0FBR0QsS0FySGtCOztBQUFBLGlFQXVITixVQUFDQSxFQUFELEVBQVE7QUFBQSxVQUNYSSxhQURXLEdBQ08sTUFBS0QsS0FEWixDQUNYQyxhQURXO0FBRW5CLFVBQUksQ0FBQ0EsYUFBTCxFQUFvQjs7QUFFcEIsVUFBSUEsYUFBYSxDQUFDSixFQUFELENBQWpCLEVBQXVCO0FBQ3JCLGVBQU9JLGFBQWEsQ0FBQ0osRUFBRCxDQUFwQjs7QUFDQSxjQUFLQyxRQUFMLENBQWM7QUFBRUcsVUFBQUEsYUFBYSxFQUFiQTtBQUFGLFNBQWQ7QUFDRDtBQUNGLEtBL0hrQjs7QUFBQSx3RUFpSUMsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQUEsd0JBQ29CLE1BQUtILEtBRHpCO0FBQUEsVUFDNUJJLFVBRDRCLGVBQzVCQSxVQUQ0QjtBQUFBLFVBQ2hCQyxjQURnQixlQUNoQkEsY0FEZ0I7QUFBQSxVQUNBQyxlQURBLGVBQ0FBLGVBREE7QUFBQSxVQUU5QlQsRUFGOEIsR0FFTE0sS0FGSyxDQUU5Qk4sRUFGOEI7QUFBQSxVQUUxQlUsSUFGMEIsR0FFTEosS0FGSyxDQUUxQkksSUFGMEI7QUFBQSxVQUVwQkMsVUFGb0IsR0FFTEwsS0FGSyxDQUVwQkssVUFGb0IsRUFHcEM7O0FBQ0EsVUFBSUMsS0FBSjs7QUFDQSxVQUFJTixLQUFLLENBQUNJLElBQU4sS0FBZSxVQUFuQixFQUErQjtBQUM3QixZQUFNRyxNQUFNLHNCQUFPTixVQUFVLENBQUNELEtBQUssQ0FBQ04sRUFBUCxDQUFWLENBQXFCWSxLQUE1QixDQUFaOztBQUNBLFlBQU1FLEtBQUssR0FBR0QsTUFBTSxDQUFDRSxPQUFQLENBQWVWLEtBQUssQ0FBQ1csTUFBTixDQUFhSixLQUE1QixDQUFkOztBQUNBLFlBQUlFLEtBQUssR0FBRyxDQUFDLENBQWIsRUFBZ0I7QUFDZEQsVUFBQUEsTUFBTSxDQUFDSSxNQUFQLENBQWNILEtBQWQsRUFBcUIsQ0FBckI7QUFDRCxTQUZELE1BRU87QUFDTEQsVUFBQUEsTUFBTSxDQUFDSyxJQUFQLENBQVliLEtBQUssQ0FBQ1csTUFBTixDQUFhSixLQUF6QjtBQUNEOztBQUNEQSxRQUFBQSxLQUFLLEdBQUdDLE1BQVI7QUFDRCxPQVRELE1BU08sSUFBSVAsS0FBSyxDQUFDSSxJQUFOLElBQWMsTUFBbEIsRUFBMEI7QUFBQSxZQUN2QlMsS0FEdUIsR0FDRmIsS0FERSxDQUN2QmEsS0FEdUI7QUFBQSxZQUNoQkMsU0FEZ0IsR0FDRmQsS0FERSxDQUNoQmMsU0FEZ0I7O0FBRS9CLFlBQU1QLE9BQU0sc0JBQU9OLFVBQVUsQ0FBQ0QsS0FBSyxDQUFDTixFQUFQLENBQVYsQ0FBcUJZLEtBQTVCLENBQVo7O0FBQ0FDLFFBQUFBLE9BQU0sQ0FBQ00sS0FBRCxDQUFOLEdBQWdCO0FBQ2RFLFVBQUFBLEdBQUcsRUFBRWhCLEtBQUssQ0FBQ1csTUFBTixDQUFhSixLQURKO0FBRWRVLFVBQUFBLEtBQUssRUFBRUY7QUFGTyxTQUFoQjtBQUlBUixRQUFBQSxLQUFLLEdBQUdDLE9BQVI7QUFDRCxPQVJNLE1BUUEsSUFBSVAsS0FBSyxDQUFDSSxJQUFOLElBQWMsU0FBbEIsRUFBNkI7QUFDbENFLFFBQUFBLEtBQUssR0FBR1AsS0FBSyxDQUFDVyxNQUFOLEdBQWVYLEtBQUssQ0FBQ1csTUFBTixDQUFhTyxPQUE1QixHQUFzQyxNQUE5QztBQUNELE9BRk0sTUFFQSxJQUFJakIsS0FBSyxDQUFDSSxJQUFOLEtBQWUsVUFBbkIsRUFBK0I7QUFBQSxZQUM1QlMsTUFENEIsR0FDbEJiLEtBRGtCLENBQzVCYSxLQUQ0Qjs7QUFFcEMsWUFBTU4sUUFBTSxHQUNWTixVQUFVLENBQUNELEtBQUssQ0FBQ04sRUFBUCxDQUFWLElBQXdCTyxVQUFVLENBQUNELEtBQUssQ0FBQ04sRUFBUCxDQUFWLENBQXFCWSxLQUE3QyxzQkFBeURMLFVBQVUsQ0FBQ0QsS0FBSyxDQUFDTixFQUFQLENBQVYsQ0FBcUJZLEtBQTlFLElBQXVGLEVBRHpGOztBQUVBQyxRQUFBQSxRQUFNLENBQUNNLE1BQUQsQ0FBTixHQUFnQjtBQUNkRSxVQUFBQSxHQUFHLEVBQUVoQixLQUFLLENBQUNXLE1BQU4sQ0FBYUo7QUFESixTQUFoQjtBQUdBQSxRQUFBQSxLQUFLLEdBQUdDLFFBQVI7QUFDRCxPQVJNLE1BUUE7QUFDTEQsUUFBQUEsS0FBSyxHQUFHUCxLQUFLLENBQUNXLE1BQU4sR0FBZVgsS0FBSyxDQUFDVyxNQUFOLENBQWFKLEtBQTVCLEdBQW9DLE1BQTVDO0FBQ0QsT0FsQ21DLENBbUNwQzs7O0FBQ0EsVUFBSUYsSUFBSSxLQUFLLE1BQVQsSUFBbUJKLEtBQUssQ0FBQ2tCLFFBQU4sQ0FBZVQsT0FBZixDQUF1QixNQUF2QixJQUFpQyxDQUFDLENBQXpELEVBQTREO0FBQzFETCxRQUFBQSxJQUFJLEdBQUcsTUFBUDtBQUNELE9BdENtQyxDQXdDcEM7OztBQUNBLFVBQU1lLEtBQUssR0FBRywrQkFBY2IsS0FBZCxFQUFxQk4sS0FBckIsQ0FBZCxDQXpDb0MsQ0EyQ3BDO0FBQ0E7O0FBQ0EsVUFBSUUsY0FBYyxDQUFDTyxPQUFmLENBQXVCZixFQUF2QixNQUErQixDQUFDLENBQXBDLEVBQXVDO0FBQ3JDTyxRQUFBQSxVQUFVLENBQUNQLEVBQUQsQ0FBVixDQUFlWSxLQUFmLEdBQXVCQSxLQUF2Qjs7QUFDQSxhQUFLLElBQUljLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdqQixlQUFlLENBQUNrQixNQUFwQyxFQUE0Q0QsQ0FBQyxFQUE3QyxFQUFpRDtBQUFBLGNBQ3ZDMUIsR0FEdUMsR0FDaENTLGVBQWUsQ0FBQ2lCLENBQUQsQ0FEaUIsQ0FDdkMxQixFQUR1Qzs7QUFFL0MsY0FBTTRCLElBQUksR0FBRyxNQUFLQyxxQkFBTCxDQUEyQnBCLGVBQWUsQ0FBQ2lCLENBQUQsQ0FBZixDQUFtQkksZ0JBQTlDLEVBQWdFdkIsVUFBaEUsQ0FBYjs7QUFDQUEsVUFBQUEsVUFBVSxDQUFDUCxHQUFELENBQVYsQ0FBZStCLFNBQWYsR0FBMkJILElBQTNCOztBQUNBLGNBQUlBLElBQUosRUFBVTtBQUNSLGdCQUFJckIsVUFBVSxDQUFDUCxHQUFELENBQVYsQ0FBZVcsVUFBZixJQUE2QmlCLElBQWpDLEVBQXVDO0FBQ3JDckIsY0FBQUEsVUFBVSxDQUFDUCxHQUFELENBQVYsQ0FBZVksS0FBZixHQUF1QixFQUF2QjtBQUNEOztBQUNETCxZQUFBQSxVQUFVLENBQUNQLEdBQUQsQ0FBVixDQUFleUIsS0FBZixHQUF1QixDQUFDLENBQUNsQixVQUFVLENBQUNQLEdBQUQsQ0FBVixDQUFlVyxVQUF4QztBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxZQUFLVixRQUFMLENBQ0U7QUFDRU0sUUFBQUEsVUFBVSxvQkFDTEEsVUFESyxzQkFFUFAsRUFGTyxFQUVGO0FBQ0pZLFVBQUFBLEtBQUssRUFBTEEsS0FESTtBQUVKWixVQUFBQSxFQUFFLEVBQUZBLEVBRkk7QUFHSnlCLFVBQUFBLEtBQUssRUFBTEEsS0FISTtBQUlKSCxVQUFBQSxLQUFLLEVBQUVoQixLQUFLLENBQUNnQixLQUpUO0FBS0pVLFVBQUFBLFVBQVUsRUFBRTFCLEtBQUssQ0FBQzBCLFVBTGQ7QUFNSlIsVUFBQUEsUUFBUSxFQUFFbEIsS0FBSyxDQUFDa0IsUUFOWjtBQU9KYixVQUFBQSxVQUFVLEVBQUVMLEtBQUssQ0FBQ0s7QUFQZCxTQUZFO0FBRFosT0FERixFQWVFLFlBQU07QUFDSjtBQURJLFlBRUlzQixRQUZKLEdBRWlCLE1BQUtsQyxLQUZ0QixDQUVJa0MsUUFGSjs7QUFHSixZQUFJQSxRQUFKLEVBQWM7QUFDWkEsVUFBQUEsUUFBUSxDQUFDLE1BQUs5QixLQUFMLENBQVdJLFVBQVosQ0FBUjtBQUNEO0FBQ0YsT0FyQkg7QUF1QkQsS0FwTmtCOztBQUFBLDJFQXNOSSxZQUFNO0FBQzNCLFVBQU0yQixJQUFJLEdBQUcsTUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxxQkFBaEIsRUFBbEIsR0FBNEQsS0FBekU7O0FBQ0EsVUFBSUYsSUFBSSxJQUFJRyxNQUFaLEVBQW9CO0FBQ2xCLFlBQU1DLFNBQVMsR0FBR0QsTUFBTSxDQUFDRSxXQUFQLElBQXNCQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJILFNBQWpFO0FBQ0FELFFBQUFBLE1BQU0sQ0FBQ0ssUUFBUCxDQUFnQjtBQUNkQyxVQUFBQSxHQUFHLEVBQUVMLFNBQVMsR0FBR0osSUFBSSxDQUFDUyxHQUFqQixHQUF1QjtBQURkLFNBQWhCO0FBR0Q7QUFDRixLQTlOa0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQWdPUixpQkFBT3RDLEtBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNUQSxnQkFBQUEsS0FBSyxDQUFDdUMsY0FBTjs7QUFDQSxzQkFBSzNDLFFBQUwsQ0FBYztBQUNaNEMsa0JBQUFBLFVBQVUsRUFBRSxJQURBO0FBRVpDLGtCQUFBQSxhQUFhLEVBQUUsS0FGSDtBQUdaQyxrQkFBQUEsWUFBWSxFQUFFLEtBSEY7QUFJWkMsa0JBQUFBLG1CQUFtQixFQUFFLEtBSlQ7QUFLWjVDLGtCQUFBQSxhQUFhLEVBQUU7QUFMSCxpQkFBZDs7QUFGUyw4QkFTc0IsTUFBS0wsS0FUM0IsRUFTRGtELE1BVEMsZUFTREEsTUFUQyxFQVNPQyxVQVRQLGVBU09BLFVBVFA7QUFVSEMsZ0JBQUFBLGVBVkcsR0FVZUQsVUFBVSxDQUFDRSxTQUFYLENBQXFCLENBQXJCLEVBQXdCRixVQUFVLENBQUNuQyxPQUFYLENBQW1CLFVBQW5CLENBQXhCLENBVmY7QUFXSHNDLGdCQUFBQSxJQVhHLEdBV0ksSUFBSUMsUUFBSixDQUFhakQsS0FBSyxDQUFDVyxNQUFuQixDQVhKOztBQVlUdUMsa0NBQ0dDLElBREgsV0FDV0wsZUFEWCxrQ0FDa0RGLE1BRGxELG1CQUN3RUksSUFEeEUsRUFFR0ksSUFGSCxDQUVRLFVBQUNDLFFBQUQsRUFBYztBQUNsQixzQkFBSUEsUUFBUSxDQUFDTCxJQUFULElBQWlCSyxRQUFRLENBQUNMLElBQVQsQ0FBY00sUUFBbkMsRUFBNkM7QUFDM0MsMEJBQUsxRCxRQUFMLENBQWM7QUFDWjRDLHNCQUFBQSxVQUFVLEVBQUUsS0FEQTtBQUVaQyxzQkFBQUEsYUFBYSxFQUFFLElBRkg7QUFHWkUsc0JBQUFBLG1CQUFtQixFQUFFVSxRQUFRLENBQUNMLElBQVQsQ0FBY087QUFIdkIscUJBQWQ7O0FBS0EsMEJBQUtDLG9CQUFMO0FBQ0QsbUJBUEQsTUFPTztBQUNMLDBCQUFLNUQsUUFBTCxDQUFjO0FBQ1o0QyxzQkFBQUEsVUFBVSxFQUFFLEtBREE7QUFFWkUsc0JBQUFBLFlBQVksRUFBRSxJQUZGO0FBR1ozQyxzQkFBQUEsYUFBYSxFQUFFO0FBSEgscUJBQWQ7QUFLRDtBQUNGLGlCQWpCSCxXQWtCUyxVQUFDMEQsS0FBRCxFQUFXO0FBQ2hCLHdCQUFLN0QsUUFBTCxDQUFjO0FBQ1o0QyxvQkFBQUEsVUFBVSxFQUFFLEtBREE7QUFFWkUsb0JBQUFBLFlBQVksRUFBRSxJQUZGO0FBR1ozQyxvQkFBQUEsYUFBYSxFQUFFMEQsS0FBSyxDQUFDSixRQUFOLENBQWVMLElBQWYsQ0FBb0JVO0FBSHZCLG1CQUFkO0FBS0QsaUJBeEJIOztBQVpTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BaE9ROztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtEQXVRUixVQUFDQyxDQUFELEVBQU87QUFDaEJBLE1BQUFBLENBQUMsQ0FBQ3BCLGNBQUY7QUFEZ0IsVUFFUnFCLFVBRlEsR0FFTyxNQUFLOUQsS0FGWixDQUVSOEQsVUFGUTs7QUFHaEIsWUFBS2hFLFFBQUwsQ0FBYztBQUNaZ0UsUUFBQUEsVUFBVSxFQUFFQSxVQUFVLEdBQUc7QUFEYixPQUFkO0FBR0QsS0E3UWtCOztBQUFBLCtEQStRUixVQUFDRCxDQUFELEVBQU87QUFDaEJBLE1BQUFBLENBQUMsQ0FBQ3BCLGNBQUY7QUFEZ0IsVUFFUnFCLFVBRlEsR0FFTyxNQUFLOUQsS0FGWixDQUVSOEQsVUFGUTs7QUFHaEIsWUFBS2hFLFFBQUwsQ0FBYztBQUNaZ0UsUUFBQUEsVUFBVSxFQUFFQSxVQUFVLEdBQUc7QUFEYixPQUFkO0FBR0QsS0FyUmtCOztBQUFBLDRFQXVSSyxVQUFDQyxTQUFELEVBQStCO0FBQUEsVUFBbkJDLE1BQW1CLHVFQUFWLEtBQVU7QUFBQSxVQUM3Q0MsS0FENkMsR0FDdkJGLFNBRHVCLENBQzdDRSxLQUQ2QztBQUFBLFVBQ3RDQyxVQURzQyxHQUN2QkgsU0FEdUIsQ0FDdENHLFVBRHNDO0FBRXJELFVBQUksQ0FBQ0QsS0FBTCxFQUFZLE9BQU8sSUFBUDtBQUVaLFVBQU03RCxVQUFVLEdBQUc0RCxNQUFNLElBQUksTUFBS2hFLEtBQUwsQ0FBV0ksVUFBeEMsQ0FKcUQsQ0FNckQ7QUFDQTs7QUFDQSxVQUFJd0IsU0FBUyxHQUFHc0MsVUFBVSxLQUFLLE1BQS9CO0FBQ0EsVUFBTUMsZ0JBQWdCLEdBQUcsRUFBekI7O0FBQ0EsV0FBSyxJQUFJNUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzBDLEtBQUssQ0FBQ3pDLE1BQTFCLEVBQWtDRCxDQUFDLEVBQW5DLEVBQXVDO0FBQUEsdUJBQ1YwQyxLQUFLLENBQUMxQyxDQUFELENBREs7QUFBQSxZQUM3QjZDLE9BRDZCLFlBQzdCQSxPQUQ2QjtBQUFBLFlBQ3BCM0QsS0FEb0IsWUFDcEJBLEtBRG9CO0FBRXJDLFlBQU00RCxtQkFBbUIsR0FBR2pFLFVBQVUsQ0FBQ2dFLE9BQUQsQ0FBVixDQUFvQjNELEtBQWhEO0FBRUEsWUFBTTZELFdBQVcsR0FBR0MsS0FBSyxDQUFDQyxPQUFOLENBQWNILG1CQUFkLElBQ2hCQSxtQkFBbUIsQ0FBQ0ksSUFBcEIsQ0FBeUIsRUFBekIsQ0FEZ0IsR0FFaEJKLG1CQUZKOztBQUdBLFlBQUlDLFdBQVcsSUFBSTdELEtBQUssS0FBSzZELFdBQTdCLEVBQTBDO0FBQ3hDSCxVQUFBQSxnQkFBZ0IsQ0FBQzVDLENBQUQsQ0FBaEIsR0FBc0IyQyxVQUFVLEtBQUssTUFBckM7QUFDRCxTQUZELE1BRU87QUFDTEMsVUFBQUEsZ0JBQWdCLENBQUM1QyxDQUFELENBQWhCLEdBQXNCMkMsVUFBVSxLQUFLLE1BQXJDO0FBQ0Q7QUFDRjs7QUFDRHRDLE1BQUFBLFNBQVMsR0FBR3VDLGdCQUFnQixDQUFDTyxLQUFqQixDQUF1QixVQUFDbkQsQ0FBRDtBQUFBLGVBQU9BLENBQUMsS0FBSyxJQUFiO0FBQUEsT0FBdkIsQ0FBWixDQXZCcUQsQ0F3QnJEO0FBQ0E7O0FBQ0EsYUFBT0ssU0FBUDtBQUNELEtBbFRrQjs7QUFFakIsVUFBSzVCLEtBQUwsR0FBYTtBQUNYNEMsTUFBQUEsWUFBWSxFQUFFLEtBREg7QUFFWDNDLE1BQUFBLGFBQWEsRUFBRSxLQUZKO0FBR1hHLE1BQUFBLFVBQVUsRUFBRSxFQUhEO0FBSVh1RSxNQUFBQSxPQUFPLEVBQUUsSUFKRTtBQUtYakMsTUFBQUEsVUFBVSxFQUFFLEtBTEQ7QUFNWEMsTUFBQUEsYUFBYSxFQUFFLEtBTko7QUFPWEUsTUFBQUEsbUJBQW1CLEVBQUUsS0FQVjtBQVFYK0IsTUFBQUEsT0FBTyxFQUFFLEtBUkU7QUFTWEMsTUFBQUEsUUFBUSxFQUFFLEVBVEM7QUFVWDlFLE1BQUFBLE9BQU8sRUFBRSxFQVZFO0FBV1grRCxNQUFBQSxVQUFVLEVBQUUsS0FYRDtBQVlYeEQsTUFBQUEsZUFBZSxFQUFFLEVBWk47QUFhWEQsTUFBQUEsY0FBYyxFQUFFLEVBYkw7QUFjWHlFLE1BQUFBLFdBQVcsRUFBRTtBQWRGLEtBQWI7QUFGaUI7QUFrQmxCOzs7Ozs7Ozs7Ozs7OzsrQkFHaUQsS0FBS2xGLEssRUFBN0NrRCxNLGdCQUFBQSxNLEVBQVFDLFUsZ0JBQUFBLFUsRUFBWWdDLGUsZ0JBQUFBLGU7QUFDNUIscUJBQUtDLFVBQUwsR0FBa0IsSUFBbEI7QUFDSUYsZ0JBQUFBLFcsR0FBYyxLOzt1QkFDQzFCLGtCQUNoQjZCLEdBRGdCLFdBQ1RsQyxVQURTLGNBQ0tELE1BREwsR0FFaEJRLElBRmdCLENBRVgsVUFBQ0MsUUFBRDtBQUFBLHlCQUFjQSxRQUFRLENBQUNMLElBQXZCO0FBQUEsaUJBRlcsV0FHVjtBQUFBLHlCQUFNLEtBQU47QUFBQSxpQkFIVSxDOzs7QUFBYmdDLGdCQUFBQSxJOztzQkFLRkEsSUFBSSxJQUFJLEtBQUtGLFU7Ozs7O0FBQ1Q1RSxnQkFBQUEsVSxHQUFhLEU7QUFDYkUsZ0JBQUFBLGUsR0FBa0IsRTtBQUNsQkQsZ0JBQUFBLGMsR0FBaUIsRSxFQUN2Qjs7Ozs7Ozs7c0JBQ1dGLEs7QUFDVCxzQkFBSU0sS0FBSyxTQUFUO0FBQ0Esc0JBQU0wRSxhQUFhLEdBQ2pCaEYsS0FBSyxDQUFDaUYsU0FBTixJQUFtQkwsZUFBbkIsSUFBc0NBLGVBQWUsQ0FBQzVFLEtBQUssQ0FBQ2lGLFNBQVAsQ0FEdkQ7O0FBRUEsc0JBQUlqRixLQUFLLENBQUNJLElBQU4sS0FBZSxVQUFuQixFQUErQjtBQUM3QkUsb0JBQUFBLEtBQUssR0FBR04sS0FBSyxDQUFDa0YsT0FBTixDQUNMQyxNQURLLENBQ0UsVUFBQ0MsTUFBRDtBQUFBLDZCQUNOSixhQUFhLEdBQUdJLE1BQU0sQ0FBQzlFLEtBQVAsS0FBaUJzRSxlQUFlLENBQUM1RSxLQUFLLENBQUNpRixTQUFQLENBQW5DLEdBQXVERyxNQUFNLENBQUNDLFVBRHJFO0FBQUEscUJBREYsRUFJTEMsR0FKSyxDQUlELFVBQUNGLE1BQUQ7QUFBQSw2QkFBWUEsTUFBTSxDQUFDOUUsS0FBbkI7QUFBQSxxQkFKQyxDQUFSO0FBS0QsbUJBTkQsTUFNTyxJQUFJTixLQUFLLENBQUNJLElBQU4sS0FBZSxPQUFuQixFQUE0QjtBQUNqQyx3QkFBSTRFLGFBQUosRUFBbUI7QUFDakIxRSxzQkFBQUEsS0FBSyxHQUFHc0UsZUFBZSxDQUFDNUUsS0FBSyxDQUFDaUYsU0FBUCxDQUF2QjtBQUNELHFCQUZELE1BRU87QUFDTCwwQkFBTU0sV0FBVyxHQUFHdkYsS0FBSyxDQUFDa0YsT0FBTixDQUFjTSxJQUFkLENBQW1CLFVBQUNKLE1BQUQ7QUFBQSwrQkFBWUEsTUFBTSxDQUFDQyxVQUFuQjtBQUFBLHVCQUFuQixDQUFwQjtBQUNBL0Usc0JBQUFBLEtBQUssR0FBR2lGLFdBQVcsR0FBR0EsV0FBVyxDQUFDakYsS0FBZixHQUF1QixFQUExQztBQUNEO0FBQ0YsbUJBUE0sTUFPQSxJQUFJTixLQUFLLENBQUNJLElBQU4sS0FBZSxRQUFuQixFQUE2QjtBQUNsQyx3QkFBTXFGLGNBQWMsR0FBR3pGLEtBQUssQ0FBQ2tGLE9BQU4sQ0FDcEJDLE1BRG9CLENBQ2IsVUFBQ0MsTUFBRDtBQUFBLDZCQUNOSixhQUFhLEdBQUdJLE1BQU0sQ0FBQzlFLEtBQVAsS0FBaUJzRSxlQUFlLENBQUM1RSxLQUFLLENBQUNpRixTQUFQLENBQW5DLEdBQXVERyxNQUFNLENBQUNDLFVBRHJFO0FBQUEscUJBRGEsRUFJcEJDLEdBSm9CLENBSWhCLFVBQUNJLElBQUQ7QUFBQSw2QkFBVztBQUFFcEYsd0JBQUFBLEtBQUssRUFBRW9GLElBQUksQ0FBQ3BGLEtBQWQ7QUFBcUJVLHdCQUFBQSxLQUFLLEVBQUUwRSxJQUFJLENBQUNDO0FBQWpDLHVCQUFYO0FBQUEscUJBSmdCLENBQXZCO0FBS0FyRixvQkFBQUEsS0FBSyxHQUFHbUYsY0FBYyxJQUFJQSxjQUFjLENBQUNwRSxNQUFmLEdBQXdCLENBQTFDLEdBQThDb0UsY0FBYyxDQUFDLENBQUQsQ0FBNUQsR0FBa0UsRUFBMUU7QUFDRCxtQkFQTSxNQU9BO0FBQ0xuRixvQkFBQUEsS0FBSyxHQUFHMEUsYUFBYSxHQUFHSixlQUFlLENBQUM1RSxLQUFLLENBQUNpRixTQUFQLENBQWxCLEdBQXNDakYsS0FBSyxDQUFDNEYsWUFBakU7O0FBQ0Esd0JBQUk1RixLQUFLLENBQUNJLElBQU4sS0FBZSxZQUFuQixFQUFpQztBQUMvQnVFLHNCQUFBQSxXQUFXLEdBQUcsSUFBZDtBQUNEO0FBQ0YsbUIsQ0FFRDs7O0FBQ0Esc0JBQUkzRSxLQUFLLENBQUN3QixnQkFBVixFQUE0QjtBQUMxQix3QkFBTXFFLFFBQVEsR0FBRztBQUNmbkcsc0JBQUFBLEVBQUUsRUFBRU0sS0FBSyxDQUFDTixFQURLO0FBRWY4QixzQkFBQUEsZ0JBQWdCLEVBQUV4QixLQUFLLENBQUN3QjtBQUZULHFCQUFqQjtBQUlBLHdCQUFNc0UsR0FBRyxHQUFHOUYsS0FBSyxDQUFDd0IsZ0JBQU4sQ0FBdUJzQyxLQUF2QixDQUE2QndCLEdBQTdCLENBQWlDLFVBQUNJLElBQUQ7QUFBQSw2QkFBVUEsSUFBSSxDQUFDekIsT0FBZjtBQUFBLHFCQUFqQyxDQUFaOztBQUNBLHlCQUFLLElBQUk3QyxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHMEUsR0FBRyxDQUFDekUsTUFBeEIsRUFBZ0NELEVBQUMsRUFBakMsRUFBcUM7QUFDbkMsMEJBQU0xQixFQUFFLEdBQUdxRyxRQUFRLENBQUNELEdBQUcsQ0FBQzFFLEVBQUQsQ0FBSixDQUFuQjs7QUFDQSwwQkFBSWxCLGNBQWMsQ0FBQ08sT0FBZixDQUF1QmYsRUFBdkIsTUFBK0IsQ0FBQyxDQUFwQyxFQUF1QztBQUNyQ1Esd0JBQUFBLGNBQWMsQ0FBQ1UsSUFBZixDQUFvQmxCLEVBQXBCO0FBQ0Q7QUFDRjs7QUFDRFMsb0JBQUFBLGVBQWUsQ0FBQ1MsSUFBaEIsQ0FBcUJpRixRQUFyQjtBQUNEOztBQUVENUYsa0JBQUFBLFVBQVUsQ0FBQ0QsS0FBSyxDQUFDTixFQUFQLENBQVYsR0FBdUI7QUFDckJ5QixvQkFBQUEsS0FBSyxFQUFFLCtCQUFjYixLQUFkLEVBQXFCTixLQUFyQixDQURjO0FBRXJCTSxvQkFBQUEsS0FBSyxFQUFMQSxLQUZxQjtBQUdyQlUsb0JBQUFBLEtBQUssRUFBRWhCLEtBQUssQ0FBQ2dCLEtBSFE7QUFJckJVLG9CQUFBQSxVQUFVLEVBQUUxQixLQUFLLENBQUMwQixVQUpHO0FBS3JCUixvQkFBQUEsUUFBUSxFQUFFbEIsS0FBSyxDQUFDa0IsUUFMSztBQU1yQmIsb0JBQUFBLFVBQVUsRUFBRUwsS0FBSyxDQUFDSztBQU5HLG1CQUF2Qjs7O0FBL0NGLGlDQUFvQjBFLElBQUksQ0FBQ2xCLE1BQXpCLHVIQUFpQztBQUFBO0FBdURoQyxpQixDQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EscUJBQVN6QyxDQUFULEdBQWEsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHakIsZUFBZSxDQUFDa0IsTUFBcEMsRUFBNENELENBQUMsRUFBN0MsRUFBaUQ7QUFDL0NuQixrQkFBQUEsVUFBVSxDQUFDRSxlQUFlLENBQUNpQixDQUFELENBQWYsQ0FBbUIxQixFQUFwQixDQUFWLENBQWtDK0IsU0FBbEMsR0FBOEMsS0FBS0YscUJBQUwsQ0FDNUNwQixlQUFlLENBQUNpQixDQUFELENBQWYsQ0FBbUJJLGdCQUR5QixFQUU1Q3ZCLFVBRjRDLENBQTlDO0FBSUQ7O0FBRUQscUJBQUtOLFFBQUwsQ0FBYztBQUNaK0Usa0JBQUFBLFFBQVEsRUFBRUssSUFERTtBQUVaOUUsa0JBQUFBLFVBQVUsRUFBVkEsVUFGWTtBQUdaMEQsa0JBQUFBLFVBQVUsRUFBRW9CLElBQUksQ0FBQ2lCLFVBQUwsR0FBa0IsQ0FBbEIsR0FBc0IsS0FIdEI7QUFJWjdGLGtCQUFBQSxlQUFlLEVBQWZBLGVBSlk7QUFLWkQsa0JBQUFBLGNBQWMsRUFBZEEsY0FMWTtBQU1aeUUsa0JBQUFBLFdBQVcsRUFBWEE7QUFOWSxpQkFBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJDQVdtQjtBQUNyQixXQUFLRSxVQUFMLEdBQWtCLEtBQWxCO0FBQ0Q7Ozs2QkFxTVE7QUFBQTs7QUFBQSx5QkFVSCxLQUFLaEYsS0FWRjtBQUFBLFVBRUw2RSxRQUZLLGdCQUVMQSxRQUZLO0FBQUEsVUFHTHpFLFVBSEssZ0JBR0xBLFVBSEs7QUFBQSxVQUlMd0MsWUFKSyxnQkFJTEEsWUFKSztBQUFBLFVBS0xELGFBTEssZ0JBS0xBLGFBTEs7QUFBQSxVQU1MNUMsT0FOSyxnQkFNTEEsT0FOSztBQUFBLFVBT0wyQyxVQVBLLGdCQU9MQSxVQVBLO0FBQUEsVUFRTG9CLFVBUkssZ0JBUUxBLFVBUks7QUFBQSxVQVNMZ0IsV0FUSyxnQkFTTEEsV0FUSztBQUFBLHlCQVcrRCxLQUFLbEYsS0FYcEU7QUFBQSxVQVdDd0csS0FYRCxnQkFXQ0EsS0FYRDtBQUFBLFVBV1FDLFVBWFIsZ0JBV1FBLFVBWFI7QUFBQSxVQVdvQkMsb0JBWHBCLGdCQVdvQkEsb0JBWHBCO0FBQUEsVUFXMENDLGdCQVgxQyxnQkFXMENBLGdCQVgxQzs7QUFBQSxrQkFZd0NBLGdCQUFnQixJQUFJLEtBWjVEO0FBQUEsVUFZQ0MsTUFaRCxTQVlDQSxNQVpEO0FBQUEsVUFZU0MsT0FaVCxTQVlTQSxPQVpUO0FBQUEsa0NBWWtCQyxTQVpsQjtBQUFBLFVBWWtCQSxTQVpsQixnQ0FZOEIsS0FaOUI7O0FBQUEsVUFjQ3JGLFFBZEQsR0FjY3dELFFBZGQsQ0FjQ3hELFFBZEQ7QUFnQlAsVUFBTXNGLFVBQVUsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVl6RyxVQUFaLEVBQXdCMEcsSUFBeEIsQ0FDakIsVUFBQ0MsQ0FBRDtBQUFBLGVBQU8sQ0FBQzNHLFVBQVUsQ0FBQzJHLENBQUQsQ0FBVixDQUFjbkYsU0FBZixJQUE0QnhCLFVBQVUsQ0FBQzJHLENBQUQsQ0FBVixDQUFjekYsS0FBakQ7QUFBQSxPQURpQixDQUFuQjtBQUdBLFVBQU0wRixjQUFjLEdBQUdsRCxVQUFVLEdBQzdCOEMsTUFBTSxDQUFDQyxJQUFQLENBQVl6RyxVQUFaLEVBQXdCMEcsSUFBeEIsQ0FDRSxVQUFDQyxDQUFEO0FBQUEsZUFDRTNHLFVBQVUsQ0FBQzJHLENBQUQsQ0FBVixDQUFjbEYsVUFBZCxLQUE2QmlDLFVBQTdCLElBQ0EsQ0FBQzFELFVBQVUsQ0FBQzJHLENBQUQsQ0FBVixDQUFjbkYsU0FEZixJQUVBeEIsVUFBVSxDQUFDMkcsQ0FBRCxDQUFWLENBQWN6RixLQUhoQjtBQUFBLE9BREYsQ0FENkIsR0FPN0IsS0FQSjtBQVNBLGFBQ0U7QUFDRSxRQUFBLEdBQUcsRUFBRSxhQUFDMkYsRUFBRDtBQUFBLGlCQUFTLE1BQUksQ0FBQ2pGLFVBQUwsR0FBa0JpRixFQUEzQjtBQUFBLFNBRFA7QUFFRSxRQUFBLFNBQVMsRUFBQyxjQUZaO0FBR0UsUUFBQSxHQUFHLEVBQUU7QUFBRUMsVUFBQUEsUUFBUSxFQUFFO0FBQVosU0FIUDtBQUlFLFFBQUEsRUFBRSx5QkFBa0IsS0FBS3RILEtBQUwsQ0FBV2tELE1BQTdCO0FBSkosU0FNRytCLFFBQVEsQ0FBQ3VCLEtBQVQsR0FBaUIsSUFBakIsR0FBd0JLLE9BQU8sSUFBSSxnQ0FBQyxPQUFEO0FBQVMsUUFBQSxTQUFTO0FBQWxCLFFBTnRDLEVBUUc3RCxZQUFZLElBQUksQ0FBQ0QsYUFBakIsSUFDQyxnQ0FBQyxxQkFBRDtBQUFXLFFBQUEsWUFBWSxFQUFDO0FBQXhCLFFBVEosRUFZR0EsYUFBYSxJQUFJLEtBQUszQyxLQUFMLENBQVc2QyxtQkFBNUIsSUFDQyxnQ0FBQyw0QkFBRDtBQUFrQixRQUFBLFlBQVksRUFBRSxLQUFLN0MsS0FBTCxDQUFXNkM7QUFBM0MsUUFiSixFQWdCRyxDQUFDRixhQUFELElBQWtCa0MsUUFBUSxDQUFDYixNQUEzQixHQUNDO0FBQ0UsUUFBQSxRQUFRLEVBQUUsa0JBQUNILENBQUQ7QUFBQSxpQkFBTyxNQUFJLENBQUNzRCxRQUFMLENBQWN0RCxDQUFkLENBQVA7QUFBQSxTQURaO0FBRUUsUUFBQSxTQUFTLEVBQUV4QyxRQUZiO0FBR0UsUUFBQSxPQUFPLEVBQUV5RCxXQUFXLEdBQUcscUJBQUgsR0FBMkJzQyxTQUhqRDtBQUlFLFFBQUEsVUFBVTtBQUpaLFNBTUcsQ0FBQ3ZDLFFBQVEsQ0FBQ3VCLEtBQVQsSUFBa0J2QixRQUFRLENBQUN3QyxXQUE1QixLQUNDLDZDQUNHeEMsUUFBUSxDQUFDdUIsS0FBVCxJQUFrQkEsS0FBbEIsR0FBMEI7QUFBSSxRQUFBLFNBQVMsRUFBQztBQUFkLFNBQTRCdkIsUUFBUSxDQUFDdUIsS0FBckMsQ0FBMUIsR0FBNkUsSUFEaEYsRUFFR3ZCLFFBQVEsQ0FBQ3dDLFdBQVQsR0FDQztBQUFHLFFBQUEsU0FBUyxFQUFDO0FBQWIsU0FBaUN4QyxRQUFRLENBQUN3QyxXQUExQyxDQURELEdBRUcsSUFKTixDQVBKLEVBZUU7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0UsZ0NBQUMsd0JBQUQ7QUFDRSxRQUFBLGdCQUFnQixFQUFFZCxnQkFEcEI7QUFFRSxRQUFBLE1BQU0sRUFBRTFCLFFBQVEsQ0FBQ2IsTUFGbkI7QUFHRSxRQUFBLFVBQVUsRUFBRTVELFVBSGQ7QUFJRSxRQUFBLFlBQVksRUFBRXdDLFlBSmhCO0FBS0UsUUFBQSxhQUFhLEVBQUVELGFBTGpCO0FBTUUsUUFBQSxVQUFVLEVBQUUsS0FBSzJFLGlCQU5uQjtBQU9FLFFBQUEsT0FBTyxFQUFFdkgsT0FQWDtBQVFFLFFBQUEsVUFBVSxFQUFFLEtBQUt3SCxVQVJuQjtBQVNFLFFBQUEsVUFBVSxFQUFFMUMsUUFBUSxDQUFDc0IsVUFUdkI7QUFVRSxRQUFBLFVBQVUsRUFBRXJDLFVBVmQ7QUFXRSxRQUFBLFFBQVEsRUFBRSxLQUFLMEQsUUFYakI7QUFZRSxRQUFBLFFBQVEsRUFBRSxLQUFLQyxRQVpqQjtBQWFFLFFBQUEsY0FBYyxFQUFFVCxjQWJsQjtBQWNFLFFBQUEscUJBQXFCLEVBQUUsS0FBS3RGLHFCQWQ5QjtBQWVFLFFBQUEsb0JBQW9CLEVBQUU0RSxvQkFmeEI7QUFnQkUsUUFBQSxjQUFjLEVBQUV6QixRQUFRLENBQUM2QyxjQWhCM0I7QUFpQkUsUUFBQSxNQUFNLEVBQUUsS0FBSzFILEtBQUwsQ0FBV0MsYUFqQnJCO0FBa0JFLFFBQUEsVUFBVSxFQUFFLEtBQUswSDtBQWxCbkIsUUFERixFQXFCRyxDQUFDLENBQUM5QyxRQUFRLENBQUNzQixVQUFWLElBQ0N0QixRQUFRLENBQUNzQixVQUFULElBQXVCdEIsUUFBUSxDQUFDc0IsVUFBVCxDQUFvQnlCLEtBQXBCLENBQTBCcEcsTUFBMUIsS0FBcUNzQyxVQUQ5RCxLQUVDLGdDQUFDLGtCQUFEO0FBQ0UsUUFBQSxNQUFNLEVBQUUwQyxNQURWO0FBRUUsUUFBQSxPQUFPLEVBQUVDLE9BRlg7QUFHRSxRQUFBLFFBQVEsRUFBRTVCLFFBSFo7QUFJRSxRQUFBLFVBQVUsRUFBRXdCLFVBSmQ7QUFLRSxRQUFBLFVBQVUsRUFBRU0sVUFMZDtBQU1FLFFBQUEsVUFBVSxFQUFFakUsVUFOZDtBQU9FLFFBQUEsUUFBUSxFQUFFLEtBQUs4RTtBQVBqQixRQXZCSixDQWZGLENBREQsR0FvREMsRUFwRUosQ0FERjtBQXlFRDs7OztFQTFadUJLLGdCOztBQTZaMUJsSSxXQUFXLENBQUNtSSxZQUFaLEdBQTJCO0FBQ3pCMUIsRUFBQUEsS0FBSyxFQUFFLElBRGtCO0FBRXpCQyxFQUFBQSxVQUFVLEVBQUUsS0FGYTtBQUd6QkMsRUFBQUEsb0JBQW9CLEVBQUU7QUFIRyxDQUEzQjtlQVFlM0csVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFJlbmRlckZpZWxkcyBmcm9tICcuL0Zvcm1FbGVtZW50cy9SZW5kZXJGaWVsZHMnO1xuaW1wb3J0IEZvcm1FcnJvciBmcm9tICcuL0Zvcm1FbGVtZW50cy9Gb3JtRXJyb3InO1xuaW1wb3J0IEZvcm1Db25maXJtYXRpb24gZnJvbSAnLi9Gb3JtRWxlbWVudHMvRm9ybUNvbmZpcm1hdGlvbic7XG5pbXBvcnQgeyB2YWxpZGF0ZUZpZWxkIH0gZnJvbSAnLi9IZWxwZXJzL3ZhbGlkYXRpb24nO1xuaW1wb3J0IFN1Ym1pdCBmcm9tICcuL0Zvcm1FbGVtZW50cy9TdWJtaXQnO1xuXG5jbGFzcyBHcmF2aXR5Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdWJtaXRGYWlsZWQ6IGZhbHNlLFxuICAgICAgZXJyb3JNZXNzYWdlczogZmFsc2UsXG4gICAgICBmb3JtVmFsdWVzOiB7fSxcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgIHN1Ym1pdFN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgY29uZmlybWF0aW9uTWVzc2FnZTogZmFsc2UsXG4gICAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICAgIGZvcm1EYXRhOiB7fSxcbiAgICAgIHRvdWNoZWQ6IHt9LFxuICAgICAgYWN0aXZlUGFnZTogZmFsc2UsXG4gICAgICBjb25kaXRpb25GaWVsZHM6IHt9LFxuICAgICAgY29uZGl0aW9hbmxJZHM6IHt9LFxuICAgICAgaXNNdWx0aXBhcnQ6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGZvcm1JRCwgYmFja2VuZFVybCwgcG9wdWxhdGVkRmllbGRzIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgbGV0IGlzTXVsdGlwYXJ0ID0gZmFsc2U7XG4gICAgY29uc3QgZm9ybSA9IGF3YWl0IGF4aW9zXG4gICAgICAuZ2V0KGAke2JhY2tlbmRVcmx9LyR7Zm9ybUlEfWApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmRhdGEpXG4gICAgICAuY2F0Y2goKCkgPT4gZmFsc2UpO1xuXG4gICAgaWYgKGZvcm0gJiYgdGhpcy5faXNNb3VudGVkKSB7XG4gICAgICBjb25zdCBmb3JtVmFsdWVzID0ge307XG4gICAgICBjb25zdCBjb25kaXRpb25GaWVsZHMgPSBbXTtcbiAgICAgIGNvbnN0IGNvbmRpdGlvYW5sSWRzID0gW107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgZm9ybS5maWVsZHMpIHtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBjb25zdCBoYXNQb3B1bGF0aW9uID1cbiAgICAgICAgICBmaWVsZC5pbnB1dE5hbWUgJiYgcG9wdWxhdGVkRmllbGRzICYmIHBvcHVsYXRlZEZpZWxkc1tmaWVsZC5pbnB1dE5hbWVdO1xuICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgIHZhbHVlID0gZmllbGQuY2hvaWNlc1xuICAgICAgICAgICAgLmZpbHRlcigoY2hvaWNlKSA9PlxuICAgICAgICAgICAgICBoYXNQb3B1bGF0aW9uID8gY2hvaWNlLnZhbHVlID09PSBwb3B1bGF0ZWRGaWVsZHNbZmllbGQuaW5wdXROYW1lXSA6IGNob2ljZS5pc1NlbGVjdGVkXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAubWFwKChjaG9pY2UpID0+IGNob2ljZS52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgIGlmIChoYXNQb3B1bGF0aW9uKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHBvcHVsYXRlZEZpZWxkc1tmaWVsZC5pbnB1dE5hbWVdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwcmVzZWxlY3RlZCA9IGZpZWxkLmNob2ljZXMuZmluZCgoY2hvaWNlKSA9PiBjaG9pY2UuaXNTZWxlY3RlZCk7XG4gICAgICAgICAgICB2YWx1ZSA9IHByZXNlbGVjdGVkID8gcHJlc2VsZWN0ZWQudmFsdWUgOiAnJztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IGZpZWxkLmNob2ljZXNcbiAgICAgICAgICAgIC5maWx0ZXIoKGNob2ljZSkgPT5cbiAgICAgICAgICAgICAgaGFzUG9wdWxhdGlvbiA/IGNob2ljZS52YWx1ZSA9PT0gcG9wdWxhdGVkRmllbGRzW2ZpZWxkLmlucHV0TmFtZV0gOiBjaG9pY2UuaXNTZWxlY3RlZFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLm1hcCgoaXRlbSkgPT4gKHsgdmFsdWU6IGl0ZW0udmFsdWUsIGxhYmVsOiBpdGVtLnRleHQgfSkpO1xuICAgICAgICAgIHZhbHVlID0gc2VsZWN0ZWRPcHRpb24gJiYgc2VsZWN0ZWRPcHRpb24ubGVuZ3RoID4gMCA/IHNlbGVjdGVkT3B0aW9uWzBdIDogJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUgPSBoYXNQb3B1bGF0aW9uID8gcG9wdWxhdGVkRmllbGRzW2ZpZWxkLmlucHV0TmFtZV0gOiBmaWVsZC5kZWZhdWx0VmFsdWU7XG4gICAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdmaWxldXBsb2FkJykge1xuICAgICAgICAgICAgaXNNdWx0aXBhcnQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdyYWIgYWxsIGNvbmRpdGlvbmFsIGxvZ2ljIGZpZWxkc1xuICAgICAgICBpZiAoZmllbGQuY29uZGl0aW9uYWxMb2dpYykge1xuICAgICAgICAgIGNvbnN0IHRtcEZpZWxkID0ge1xuICAgICAgICAgICAgaWQ6IGZpZWxkLmlkLFxuICAgICAgICAgICAgY29uZGl0aW9uYWxMb2dpYzogZmllbGQuY29uZGl0aW9uYWxMb2dpYyxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNvbnN0IGlkcyA9IGZpZWxkLmNvbmRpdGlvbmFsTG9naWMucnVsZXMubWFwKChpdGVtKSA9PiBpdGVtLmZpZWxkSWQpO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHBhcnNlSW50KGlkc1tpXSk7XG4gICAgICAgICAgICBpZiAoY29uZGl0aW9hbmxJZHMuaW5kZXhPZihpZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIGNvbmRpdGlvYW5sSWRzLnB1c2goaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25kaXRpb25GaWVsZHMucHVzaCh0bXBGaWVsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtVmFsdWVzW2ZpZWxkLmlkXSA9IHtcbiAgICAgICAgICB2YWxpZDogdmFsaWRhdGVGaWVsZCh2YWx1ZSwgZmllbGQpLFxuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIGxhYmVsOiBmaWVsZC5sYWJlbCxcbiAgICAgICAgICBwYWdlTnVtYmVyOiBmaWVsZC5wYWdlTnVtYmVyLFxuICAgICAgICAgIGNzc0NsYXNzOiBmaWVsZC5jc3NDbGFzcyxcbiAgICAgICAgICBpc1JlcXVpcmVkOiBmaWVsZC5pc1JlcXVpcmVkLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy8gY2hlY2sgY29uZGl0aW9uIGxvZ2ljXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmRpdGlvbkZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3JtVmFsdWVzW2NvbmRpdGlvbkZpZWxkc1tpXS5pZF0uaGlkZUZpZWxkID0gdGhpcy5jaGVja0NvbmRpdGlvbmFsTG9naWMoXG4gICAgICAgICAgY29uZGl0aW9uRmllbGRzW2ldLmNvbmRpdGlvbmFsTG9naWMsXG4gICAgICAgICAgZm9ybVZhbHVlc1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9ybURhdGE6IGZvcm0sXG4gICAgICAgIGZvcm1WYWx1ZXMsXG4gICAgICAgIGFjdGl2ZVBhZ2U6IGZvcm0ucGFnaW5hdGlvbiA/IDEgOiBmYWxzZSxcbiAgICAgICAgY29uZGl0aW9uRmllbGRzLFxuICAgICAgICBjb25kaXRpb2FubElkcyxcbiAgICAgICAgaXNNdWx0aXBhcnQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHNldFRvdWNoZWQgPSAoaWQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRvdWNoZWQ6IHsgLi4udGhpcy5zdGF0ZS50b3VjaGVkLCBbaWRdOiB0cnVlIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgdW5zZXRFcnJvciA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHsgZXJyb3JNZXNzYWdlcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoIWVycm9yTWVzc2FnZXMpIHJldHVybjtcblxuICAgIGlmIChlcnJvck1lc3NhZ2VzW2lkXSkge1xuICAgICAgZGVsZXRlIGVycm9yTWVzc2FnZXNbaWRdO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZXMgfSk7XG4gICAgfVxuICB9O1xuXG4gIHVwZGF0ZUZvcm1IYW5kbGVyID0gKGV2ZW50LCBmaWVsZCkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybVZhbHVlcywgY29uZGl0aW9hbmxJZHMsIGNvbmRpdGlvbkZpZWxkcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgeyBpZCwgdHlwZSwgaXNSZXF1aXJlZCB9ID0gZmllbGQ7XG4gICAgLy8gU2V0IG5ldyB2YWx1ZVxuICAgIGxldCB2YWx1ZTtcbiAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgY29uc3QgdmFsdWVzID0gWy4uLmZvcm1WYWx1ZXNbZmllbGQuaWRdLnZhbHVlXTtcbiAgICAgIGNvbnN0IGluZGV4ID0gdmFsdWVzLmluZGV4T2YoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIHZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWVzLnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHZhbHVlID0gdmFsdWVzO1xuICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PSAnZGF0ZScpIHtcbiAgICAgIGNvbnN0IHsgc3ViSWQsIGRhdGVMYWJlbCB9ID0gZmllbGQ7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBbLi4uZm9ybVZhbHVlc1tmaWVsZC5pZF0udmFsdWVdO1xuICAgICAgdmFsdWVzW3N1YklkXSA9IHtcbiAgICAgICAgdmFsOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICAgIGxhYmVsOiBkYXRlTGFiZWwsXG4gICAgICB9O1xuICAgICAgdmFsdWUgPSB2YWx1ZXM7XG4gICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09ICdjb25zZW50Jykge1xuICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQgPyBldmVudC50YXJnZXQuY2hlY2tlZCA6ICdudWxsJztcbiAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09ICdwYXNzd29yZCcpIHtcbiAgICAgIGNvbnN0IHsgc3ViSWQgfSA9IGZpZWxkO1xuICAgICAgY29uc3QgdmFsdWVzID1cbiAgICAgICAgZm9ybVZhbHVlc1tmaWVsZC5pZF0gJiYgZm9ybVZhbHVlc1tmaWVsZC5pZF0udmFsdWUgPyBbLi4uZm9ybVZhbHVlc1tmaWVsZC5pZF0udmFsdWVdIDogW107XG4gICAgICB2YWx1ZXNbc3ViSWRdID0ge1xuICAgICAgICB2YWw6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgIH07XG4gICAgICB2YWx1ZSA9IHZhbHVlcztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQgPyBldmVudC50YXJnZXQudmFsdWUgOiAnbnVsbCc7XG4gICAgfVxuICAgIC8vIGlmIGZpZWxkIGlzIElCQU5cbiAgICBpZiAodHlwZSA9PT0gJ3RleHQnICYmIGZpZWxkLmNzc0NsYXNzLmluZGV4T2YoJ2liYW4nKSA+IC0xKSB7XG4gICAgICB0eXBlID0gJ2liYW4nO1xuICAgIH1cblxuICAgIC8vIFZhbGlkYXRlIGZpZWxkXG4gICAgY29uc3QgdmFsaWQgPSB2YWxpZGF0ZUZpZWxkKHZhbHVlLCBmaWVsZCk7XG5cbiAgICAvLyBpZiBmaWVsZCBJRCBpcyBzb21ld2hlcmUgaW4gY29uZGl0aW9uYWwgZmllbGRzXG4gICAgLy8gcmVjYWxjdWxhdGUgYWxsIGNvbmRpdGlvbnNcbiAgICBpZiAoY29uZGl0aW9hbmxJZHMuaW5kZXhPZihpZCkgIT09IC0xKSB7XG4gICAgICBmb3JtVmFsdWVzW2lkXS52YWx1ZSA9IHZhbHVlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25kaXRpb25GaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gY29uZGl0aW9uRmllbGRzW2ldO1xuICAgICAgICBjb25zdCBoaWRlID0gdGhpcy5jaGVja0NvbmRpdGlvbmFsTG9naWMoY29uZGl0aW9uRmllbGRzW2ldLmNvbmRpdGlvbmFsTG9naWMsIGZvcm1WYWx1ZXMpO1xuICAgICAgICBmb3JtVmFsdWVzW2lkXS5oaWRlRmllbGQgPSBoaWRlO1xuICAgICAgICBpZiAoaGlkZSkge1xuICAgICAgICAgIGlmIChmb3JtVmFsdWVzW2lkXS5pc1JlcXVpcmVkICYmIGhpZGUpIHtcbiAgICAgICAgICAgIGZvcm1WYWx1ZXNbaWRdLnZhbHVlID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvcm1WYWx1ZXNbaWRdLnZhbGlkID0gISFmb3JtVmFsdWVzW2lkXS5pc1JlcXVpcmVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgZm9ybVZhbHVlczoge1xuICAgICAgICAgIC4uLmZvcm1WYWx1ZXMsXG4gICAgICAgICAgW2lkXToge1xuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIHZhbGlkLFxuICAgICAgICAgICAgbGFiZWw6IGZpZWxkLmxhYmVsLFxuICAgICAgICAgICAgcGFnZU51bWJlcjogZmllbGQucGFnZU51bWJlcixcbiAgICAgICAgICAgIGNzc0NsYXNzOiBmaWVsZC5jc3NDbGFzcyxcbiAgICAgICAgICAgIGlzUmVxdWlyZWQ6IGZpZWxkLmlzUmVxdWlyZWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIC8vIHBhc3Mgc3RhdGUgdG8gcGFyZW50IGNvbXBvbmVudFxuICAgICAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZSh0aGlzLnN0YXRlLmZvcm1WYWx1ZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfTtcblxuICBzY3JvbGxUb0NvbmZpcm1hdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy53cmFwcGVyUmVmID8gdGhpcy53cmFwcGVyUmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogZmFsc2U7XG4gICAgaWYgKHJlY3QgJiYgd2luZG93KSB7XG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogc2Nyb2xsVG9wICsgcmVjdC50b3AgLSAxMDAsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3VibWl0dGluZzogdHJ1ZSxcbiAgICAgIHN1Ym1pdFN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgc3VibWl0RmFpbGVkOiBmYWxzZSxcbiAgICAgIGNvbmZpcm1hdGlvbk1lc3NhZ2U6IGZhbHNlLFxuICAgICAgZXJyb3JNZXNzYWdlczogZmFsc2UsXG4gICAgfSk7XG4gICAgY29uc3QgeyBmb3JtSUQsIGJhY2tlbmRVcmwgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZ2ZTdWJtaXNzaW9uVXJsID0gYmFja2VuZFVybC5zdWJzdHJpbmcoMCwgYmFja2VuZFVybC5pbmRleE9mKCcvd3AtanNvbicpKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KGAke2dmU3VibWlzc2lvblVybH0vd3AtanNvbi9nZi92Mi9mb3Jtcy8ke2Zvcm1JRH0vc3VibWlzc2lvbnNgLCBkYXRhKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEuaXNfdmFsaWQpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc3VibWl0U3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvbk1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEuY29uZmlybWF0aW9uX21lc3NhZ2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5zY3JvbGxUb0NvbmZpcm1hdGlvbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICAgICAgICBzdWJtaXRGYWlsZWQ6IHRydWUsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VzOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgICAgICBzdWJtaXRGYWlsZWQ6IHRydWUsXG4gICAgICAgICAgZXJyb3JNZXNzYWdlczogZXJyb3IucmVzcG9uc2UuZGF0YS52YWxpZGF0aW9uX21lc3NhZ2VzLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIG5leHRTdGVwID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBhY3RpdmVQYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlUGFnZTogYWN0aXZlUGFnZSArIDEsXG4gICAgfSk7XG4gIH07XG5cbiAgcHJldlN0ZXAgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IGFjdGl2ZVBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVQYWdlOiBhY3RpdmVQYWdlIC0gMSxcbiAgICB9KTtcbiAgfTtcblxuICBjaGVja0NvbmRpdGlvbmFsTG9naWMgPSAoY29uZGl0aW9uLCBmaWVsZHMgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IHsgcnVsZXMsIGFjdGlvblR5cGUgfSA9IGNvbmRpdGlvbjtcbiAgICBpZiAoIXJ1bGVzKSByZXR1cm4gdHJ1ZTtcblxuICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSBmaWVsZHMgfHwgdGhpcy5zdGF0ZS5mb3JtVmFsdWVzO1xuXG4gICAgLy8gc2hvdyBvbmx5IGlmIGlzIHNlbGVjdGVkIFwiQWxsIGZpZWxkc1wiIChpdCBzaG91bGQgYmUgdHdlYWtlZCBpbiBmdXR1cmUpXG4gICAgLy8gd29ya3Mgb25seSBcInNob3cvaGlkZSB3aGVuIGZpZWxkIGlzIGVxdWFsIHRvXCJcbiAgICBsZXQgaGlkZUZpZWxkID0gYWN0aW9uVHlwZSAhPT0gJ2hpZGUnO1xuICAgIGNvbnN0IGhpZGVCYXNlZE9uUnVsZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB7IGZpZWxkSWQsIHZhbHVlIH0gPSBydWxlc1tpXTtcbiAgICAgIGNvbnN0IGNvbmRpdGlvbkZpZWxkVmFsdWUgPSBmb3JtVmFsdWVzW2ZpZWxkSWRdLnZhbHVlO1xuXG4gICAgICBjb25zdCBzdHJpbmdWYWx1ZSA9IEFycmF5LmlzQXJyYXkoY29uZGl0aW9uRmllbGRWYWx1ZSlcbiAgICAgICAgPyBjb25kaXRpb25GaWVsZFZhbHVlLmpvaW4oJycpXG4gICAgICAgIDogY29uZGl0aW9uRmllbGRWYWx1ZTtcbiAgICAgIGlmIChzdHJpbmdWYWx1ZSAmJiB2YWx1ZSA9PT0gc3RyaW5nVmFsdWUpIHtcbiAgICAgICAgaGlkZUJhc2VkT25SdWxlc1tpXSA9IGFjdGlvblR5cGUgPT09ICdoaWRlJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhpZGVCYXNlZE9uUnVsZXNbaV0gPSBhY3Rpb25UeXBlICE9PSAnaGlkZSc7XG4gICAgICB9XG4gICAgfVxuICAgIGhpZGVGaWVsZCA9IGhpZGVCYXNlZE9uUnVsZXMuZXZlcnkoKGkpID0+IGkgPT09IHRydWUpO1xuICAgIC8vIGZvcm1WYWx1ZXNbaWRdLmhpZGVGaWVsZCA9IGhpZGVGaWVsZDtcbiAgICAvLyB0aGlzLnNldFN0YXRlKHsgZm9ybVZhbHVlcyB9KTtcbiAgICByZXR1cm4gaGlkZUZpZWxkO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBmb3JtRGF0YSxcbiAgICAgIGZvcm1WYWx1ZXMsXG4gICAgICBzdWJtaXRGYWlsZWQsXG4gICAgICBzdWJtaXRTdWNjZXNzLFxuICAgICAgdG91Y2hlZCxcbiAgICAgIHN1Ym1pdHRpbmcsXG4gICAgICBhY3RpdmVQYWdlLFxuICAgICAgaXNNdWx0aXBhcnQsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyB0aXRsZSwgc3VibWl0SWNvbiwgc2F2ZVN0YXRlVG9IdG1sRmllbGQsIHN0eWxlZENvbXBvbmVudHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBCdXR0b24sIExvYWRpbmcsIEdGV3JhcHBlciA9ICdkaXYnIH0gPSBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuXG4gICAgY29uc3QgeyBjc3NDbGFzcyB9ID0gZm9ybURhdGE7XG5cbiAgICBjb25zdCBpc0Rpc2FibGVkID0gT2JqZWN0LmtleXMoZm9ybVZhbHVlcykuc29tZShcbiAgICAgICh4KSA9PiAhZm9ybVZhbHVlc1t4XS5oaWRlRmllbGQgJiYgZm9ybVZhbHVlc1t4XS52YWxpZFxuICAgICk7XG4gICAgY29uc3QgaXNOZXh0RGlzYWJsZWQgPSBhY3RpdmVQYWdlXG4gICAgICA/IE9iamVjdC5rZXlzKGZvcm1WYWx1ZXMpLnNvbWUoXG4gICAgICAgICAgKHgpID0+XG4gICAgICAgICAgICBmb3JtVmFsdWVzW3hdLnBhZ2VOdW1iZXIgPT09IGFjdGl2ZVBhZ2UgJiZcbiAgICAgICAgICAgICFmb3JtVmFsdWVzW3hdLmhpZGVGaWVsZCAmJlxuICAgICAgICAgICAgZm9ybVZhbHVlc1t4XS52YWxpZFxuICAgICAgICApXG4gICAgICA6IGZhbHNlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXsoZWwpID0+ICh0aGlzLndyYXBwZXJSZWYgPSBlbCl9XG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0td3JhcHBlclwiXG4gICAgICAgIGNzcz17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fVxuICAgICAgICBpZD17YGdyYXZpdHlfZm9ybV8ke3RoaXMucHJvcHMuZm9ybUlEfWB9XG4gICAgICA+XG4gICAgICAgIHtmb3JtRGF0YS50aXRsZSA/IG51bGwgOiBMb2FkaW5nICYmIDxMb2FkaW5nIGlzTG9hZGluZyAvPn1cblxuICAgICAgICB7c3VibWl0RmFpbGVkICYmICFzdWJtaXRTdWNjZXNzICYmIChcbiAgICAgICAgICA8Rm9ybUVycm9yIGVycm9yTWVzc2FnZT1cIlRoZXJlIHdhcyBhIHByb2JsZW0gd2l0aCB5b3VyIHN1Ym1pc3Npb25cIiAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHtzdWJtaXRTdWNjZXNzICYmIHRoaXMuc3RhdGUuY29uZmlybWF0aW9uTWVzc2FnZSAmJiAoXG4gICAgICAgICAgPEZvcm1Db25maXJtYXRpb24gY29uZmlybWF0aW9uPXt0aGlzLnN0YXRlLmNvbmZpcm1hdGlvbk1lc3NhZ2V9IC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgeyFzdWJtaXRTdWNjZXNzICYmIGZvcm1EYXRhLmZpZWxkcyA/IChcbiAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgb25TdWJtaXQ9eyhlKSA9PiB0aGlzLm9uU3VibWl0KGUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3NDbGFzc31cbiAgICAgICAgICAgIGVuY1R5cGU9e2lzTXVsdGlwYXJ0ID8gJ211bHRpcGFydC9mb3JtLWRhdGEnIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgbm9WYWxpZGF0ZVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsoZm9ybURhdGEudGl0bGUgfHwgZm9ybURhdGEuZGVzY3JpcHRpb24pICYmIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7Zm9ybURhdGEudGl0bGUgJiYgdGl0bGUgPyA8aDMgY2xhc3NOYW1lPVwiZm9ybS10aXRsZVwiPntmb3JtRGF0YS50aXRsZX08L2gzPiA6IG51bGx9XG4gICAgICAgICAgICAgICAge2Zvcm1EYXRhLmRlc2NyaXB0aW9uID8gKFxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9ybS1kZXNjcmlwdGlvblwiPntmb3JtRGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPFJlbmRlckZpZWxkc1xuICAgICAgICAgICAgICAgIHN0eWxlZENvbXBvbmVudHM9e3N0eWxlZENvbXBvbmVudHN9XG4gICAgICAgICAgICAgICAgZmllbGRzPXtmb3JtRGF0YS5maWVsZHN9XG4gICAgICAgICAgICAgICAgZm9ybVZhbHVlcz17Zm9ybVZhbHVlc31cbiAgICAgICAgICAgICAgICBzdWJtaXRGYWlsZWQ9e3N1Ym1pdEZhaWxlZH1cbiAgICAgICAgICAgICAgICBzdWJtaXRTdWNjZXNzPXtzdWJtaXRTdWNjZXNzfVxuICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm09e3RoaXMudXBkYXRlRm9ybUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgdG91Y2hlZD17dG91Y2hlZH1cbiAgICAgICAgICAgICAgICBzZXRUb3VjaGVkPXt0aGlzLnNldFRvdWNoZWR9XG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17Zm9ybURhdGEucGFnaW5hdGlvbn1cbiAgICAgICAgICAgICAgICBhY3RpdmVQYWdlPXthY3RpdmVQYWdlfVxuICAgICAgICAgICAgICAgIHByZXZTdGVwPXt0aGlzLnByZXZTdGVwfVxuICAgICAgICAgICAgICAgIG5leHRTdGVwPXt0aGlzLm5leHRTdGVwfVxuICAgICAgICAgICAgICAgIGlzTmV4dERpc2FibGVkPXtpc05leHREaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBjaGVja0NvbmRpdGlvbmFsTG9naWM9e3RoaXMuY2hlY2tDb25kaXRpb25hbExvZ2ljfVxuICAgICAgICAgICAgICAgIHNhdmVTdGF0ZVRvSHRtbEZpZWxkPXtzYXZlU3RhdGVUb0h0bWxGaWVsZH1cbiAgICAgICAgICAgICAgICBlbmFibGVIb25leXBvdD17Zm9ybURhdGEuZW5hYmxlSG9uZXlwb3R9XG4gICAgICAgICAgICAgICAgZXJyb3JzPXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZXN9XG4gICAgICAgICAgICAgICAgdW5zZXRFcnJvcj17dGhpcy51bnNldEVycm9yfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7KCFmb3JtRGF0YS5wYWdpbmF0aW9uIHx8XG4gICAgICAgICAgICAgICAgKGZvcm1EYXRhLnBhZ2luYXRpb24gJiYgZm9ybURhdGEucGFnaW5hdGlvbi5wYWdlcy5sZW5ndGggPT09IGFjdGl2ZVBhZ2UpKSAmJiAoXG4gICAgICAgICAgICAgICAgPFN1Ym1pdFxuICAgICAgICAgICAgICAgICAgQnV0dG9uPXtCdXR0b259XG4gICAgICAgICAgICAgICAgICBMb2FkaW5nPXtMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgZm9ybURhdGE9e2Zvcm1EYXRhfVxuICAgICAgICAgICAgICAgICAgc3VibWl0SWNvbj17c3VibWl0SWNvbn1cbiAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e2lzRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICBzdWJtaXR0aW5nPXtzdWJtaXR0aW5nfVxuICAgICAgICAgICAgICAgICAgcHJldlN0ZXA9e3RoaXMucHJldlN0ZXB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAnJ1xuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5HcmF2aXR5Rm9ybS5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiB0cnVlLFxuICBzdWJtaXRJY29uOiBmYWxzZSxcbiAgc2F2ZVN0YXRlVG9IdG1sRmllbGQ6IGZhbHNlLFxufTtcblxuZXhwb3J0IHsgdmFsaWRhdGVGaWVsZCwgRm9ybUNvbmZpcm1hdGlvbiwgRm9ybUVycm9yLCBSZW5kZXJGaWVsZHMsIFN1Ym1pdCB9O1xuXG5leHBvcnQgZGVmYXVsdCBHcmF2aXR5Rm9ybTtcbiJdfQ==
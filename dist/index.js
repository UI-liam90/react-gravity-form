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
                gfSubmissionUrl = backendUrl.substring(0, backendUrl.indexOf('/wp-json'));
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
  saveStateToHtmlField: false,
  jumpToConfirmation: true
};
var _default = GravityForm;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHcmF2aXR5Rm9ybSIsInByb3BzIiwiaWQiLCJzZXRTdGF0ZSIsInRvdWNoZWQiLCJzdGF0ZSIsImVycm9yTWVzc2FnZXMiLCJldmVudCIsImZpZWxkIiwiZm9ybVZhbHVlcyIsImNvbmRpdGlvYW5sSWRzIiwiY29uZGl0aW9uRmllbGRzIiwidHlwZSIsImlzUmVxdWlyZWQiLCJ2YWx1ZSIsInZhbHVlcyIsImluZGV4IiwiaW5kZXhPZiIsInRhcmdldCIsInNwbGljZSIsInB1c2giLCJkYXRlVHlwZSIsInN1YklkIiwiZGF0ZUxhYmVsIiwidmFsIiwibGFiZWwiLCJjaGVja2VkIiwiY3NzQ2xhc3MiLCJ2YWxpZCIsImkiLCJsZW5ndGgiLCJoaWRlIiwiY2hlY2tDb25kaXRpb25hbExvZ2ljIiwiY29uZGl0aW9uYWxMb2dpYyIsImhpZGVGaWVsZCIsInBhZ2VOdW1iZXIiLCJvbkNoYW5nZSIsInJlY3QiLCJ3cmFwcGVyUmVmIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvIiwidG9wIiwicHJldmVudERlZmF1bHQiLCJzdWJtaXR0aW5nIiwic3VibWl0U3VjY2VzcyIsInN1Ym1pdEZhaWxlZCIsImNvbmZpcm1hdGlvbk1lc3NhZ2UiLCJmb3JtSUQiLCJiYWNrZW5kVXJsIiwianVtcFRvQ29uZmlybWF0aW9uIiwiZ2ZTdWJtaXNzaW9uVXJsIiwic3Vic3RyaW5nIiwiZGF0YSIsIkZvcm1EYXRhIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiaXNfdmFsaWQiLCJjb25maXJtYXRpb25fbWVzc2FnZSIsInNjcm9sbFRvQ29uZmlybWF0aW9uIiwiZXJyb3IiLCJ2YWxpZGF0aW9uX21lc3NhZ2VzIiwiZSIsImFjdGl2ZVBhZ2UiLCJjb25kaXRpb24iLCJmaWVsZHMiLCJydWxlcyIsImFjdGlvblR5cGUiLCJoaWRlQmFzZWRPblJ1bGVzIiwiZmllbGRJZCIsImNvbmRpdGlvbkZpZWxkVmFsdWUiLCJzdHJpbmdWYWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsImpvaW4iLCJldmVyeSIsImxvYWRpbmciLCJpc1ZhbGlkIiwiZm9ybURhdGEiLCJpc011bHRpcGFydCIsInBvcHVsYXRlZEZpZWxkcyIsIl9pc01vdW50ZWQiLCJnZXQiLCJmb3JtIiwiaGFzUG9wdWxhdGlvbiIsImlucHV0TmFtZSIsImNob2ljZXMiLCJmaWx0ZXIiLCJjaG9pY2UiLCJpc1NlbGVjdGVkIiwibWFwIiwicHJlc2VsZWN0ZWQiLCJmaW5kIiwic2VsZWN0ZWRPcHRpb24iLCJpdGVtIiwidGV4dCIsImRlZmF1bHRWYWx1ZSIsInRtcEZpZWxkIiwiaWRzIiwicGFyc2VJbnQiLCJwYWdpbmF0aW9uIiwidGl0bGUiLCJzdWJtaXRJY29uIiwic2F2ZVN0YXRlVG9IdG1sRmllbGQiLCJzdHlsZWRDb21wb25lbnRzIiwiY3VzdG9tQ29tcG9uZW50cyIsImVycm9yTWVzc2FnZSIsImRyb3B6b25lVGV4dCIsIkJ1dHRvbiIsIkxvYWRpbmciLCJHRldyYXBwZXIiLCJTRm9ybUVycm9yIiwiRm9ybUVycm9yIiwiaXNEaXNhYmxlZCIsIk9iamVjdCIsImtleXMiLCJzb21lIiwieCIsImlzTmV4dERpc2FibGVkIiwiZWwiLCJwb3NpdGlvbiIsIm9uU3VibWl0IiwidW5kZWZpbmVkIiwiZGVzY3JpcHRpb24iLCJ1cGRhdGVGb3JtSGFuZGxlciIsInNldFRvdWNoZWQiLCJwcmV2U3RlcCIsIm5leHRTdGVwIiwiZW5hYmxlSG9uZXlwb3QiLCJ1bnNldEVycm9yIiwicGFnZXMiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFXQyxhQWxCckI7QUFtQkUsUUFBQSxVQUFVLEVBQUUsS0FBS2lJLFVBbkJuQjtBQW9CRSxRQUFBLFlBQVksRUFBRXRCO0FBcEJoQixRQURGLEVBdUJHLENBQUMsQ0FBQzdCLFFBQVEsQ0FBQ3NCLFVBQVYsSUFDSXRCLFFBQVEsQ0FBQ3NCLFVBQVQsSUFBdUJ0QixRQUFRLENBQUNzQixVQUFULENBQW9COEIsS0FBcEIsQ0FBMEIxRyxNQUExQixLQUFxQ3VDLFVBRGpFLEtBRUMsZ0NBQUMsa0JBQUQ7QUFDRSxRQUFBLE1BQU0sRUFBRTZDLE1BRFY7QUFFRSxRQUFBLE9BQU8sRUFBRUMsT0FGWDtBQUdFLFFBQUEsUUFBUSxFQUFFL0IsUUFIWjtBQUlFLFFBQUEsVUFBVSxFQUFFd0IsVUFKZDtBQUtFLFFBQUEsVUFBVSxFQUFFVyxVQUxkO0FBTUUsUUFBQSxVQUFVLEVBQUV2RSxVQU5kO0FBT0UsUUFBQSxRQUFRLEVBQUUsS0FBS29GO0FBUGpCLFFBekJKLENBZkYsQ0FERCxHQXNEQyxFQXpFSixDQURGO0FBOEVEOzs7O0VBcGF1QkssZ0I7O0FBdWExQnpJLFdBQVcsQ0FBQzBJLFlBQVosR0FBMkI7QUFDekIvQixFQUFBQSxLQUFLLEVBQUUsSUFEa0I7QUFFekJDLEVBQUFBLFVBQVUsRUFBRSxLQUZhO0FBR3pCQyxFQUFBQSxvQkFBb0IsRUFBRSxLQUhHO0FBSXpCdkQsRUFBQUEsa0JBQWtCLEVBQUU7QUFKSyxDQUEzQjtlQVdldEQsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFJlbmRlckZpZWxkcyBmcm9tICcuL0Zvcm1FbGVtZW50cy9SZW5kZXJGaWVsZHMnO1xuaW1wb3J0IEZvcm1FcnJvciBmcm9tICcuL0Zvcm1FbGVtZW50cy9Gb3JtRXJyb3InO1xuaW1wb3J0IEZvcm1Db25maXJtYXRpb24gZnJvbSAnLi9Gb3JtRWxlbWVudHMvRm9ybUNvbmZpcm1hdGlvbic7XG5pbXBvcnQgeyB2YWxpZGF0ZUZpZWxkIH0gZnJvbSAnLi9IZWxwZXJzL3ZhbGlkYXRpb24nO1xuaW1wb3J0IFN1Ym1pdCBmcm9tICcuL0Zvcm1FbGVtZW50cy9TdWJtaXQnO1xuXG5jbGFzcyBHcmF2aXR5Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdWJtaXRGYWlsZWQ6IGZhbHNlLFxuICAgICAgZXJyb3JNZXNzYWdlczogZmFsc2UsXG4gICAgICBmb3JtVmFsdWVzOiB7fSxcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgIHN1Ym1pdFN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgY29uZmlybWF0aW9uTWVzc2FnZTogZmFsc2UsXG4gICAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICAgIGZvcm1EYXRhOiB7fSxcbiAgICAgIHRvdWNoZWQ6IHt9LFxuICAgICAgYWN0aXZlUGFnZTogZmFsc2UsXG4gICAgICBjb25kaXRpb25GaWVsZHM6IHt9LFxuICAgICAgY29uZGl0aW9hbmxJZHM6IHt9LFxuICAgICAgaXNNdWx0aXBhcnQ6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGZvcm1JRCwgYmFja2VuZFVybCwgcG9wdWxhdGVkRmllbGRzIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgbGV0IGlzTXVsdGlwYXJ0ID0gZmFsc2U7XG4gICAgY29uc3QgZm9ybSA9IGF3YWl0IGF4aW9zXG4gICAgICAuZ2V0KGAke2JhY2tlbmRVcmx9LyR7Zm9ybUlEfWApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKVxuICAgICAgLmNhdGNoKCgpID0+IGZhbHNlKTtcblxuICAgIGlmIChmb3JtICYmIHRoaXMuX2lzTW91bnRlZCkge1xuICAgICAgY29uc3QgZm9ybVZhbHVlcyA9IHt9O1xuICAgICAgY29uc3QgY29uZGl0aW9uRmllbGRzID0gW107XG4gICAgICBjb25zdCBjb25kaXRpb2FubElkcyA9IFtdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIGZvcm0uZmllbGRzKSB7XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgY29uc3QgaGFzUG9wdWxhdGlvbiA9IGZpZWxkLmlucHV0TmFtZSAmJiBwb3B1bGF0ZWRGaWVsZHMgJiYgcG9wdWxhdGVkRmllbGRzW2ZpZWxkLmlucHV0TmFtZV07XG4gICAgICAgIGlmIChmaWVsZC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgdmFsdWUgPSBmaWVsZC5jaG9pY2VzXG4gICAgICAgICAgICAuZmlsdGVyKGNob2ljZSA9PiAoaGFzUG9wdWxhdGlvbiA/IGNob2ljZS52YWx1ZSA9PT0gcG9wdWxhdGVkRmllbGRzW2ZpZWxkLmlucHV0TmFtZV0gOiBjaG9pY2UuaXNTZWxlY3RlZCkpXG4gICAgICAgICAgICAubWFwKGNob2ljZSA9PiBjaG9pY2UudmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICBpZiAoaGFzUG9wdWxhdGlvbikge1xuICAgICAgICAgICAgdmFsdWUgPSBwb3B1bGF0ZWRGaWVsZHNbZmllbGQuaW5wdXROYW1lXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcHJlc2VsZWN0ZWQgPSBmaWVsZC5jaG9pY2VzLmZpbmQoY2hvaWNlID0+IGNob2ljZS5pc1NlbGVjdGVkKTtcbiAgICAgICAgICAgIHZhbHVlID0gcHJlc2VsZWN0ZWQgPyBwcmVzZWxlY3RlZC52YWx1ZSA6ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gZmllbGQuY2hvaWNlc1xuICAgICAgICAgICAgLmZpbHRlcihjaG9pY2UgPT4gKGhhc1BvcHVsYXRpb24gPyBjaG9pY2UudmFsdWUgPT09IHBvcHVsYXRlZEZpZWxkc1tmaWVsZC5pbnB1dE5hbWVdIDogY2hvaWNlLmlzU2VsZWN0ZWQpKVxuICAgICAgICAgICAgLm1hcChpdGVtID0+ICh7IHZhbHVlOiBpdGVtLnZhbHVlLCBsYWJlbDogaXRlbS50ZXh0IH0pKTtcbiAgICAgICAgICB2YWx1ZSA9IHNlbGVjdGVkT3B0aW9uICYmIHNlbGVjdGVkT3B0aW9uLmxlbmd0aCA+IDAgPyBzZWxlY3RlZE9wdGlvblswXSA6ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gaGFzUG9wdWxhdGlvbiA/IHBvcHVsYXRlZEZpZWxkc1tmaWVsZC5pbnB1dE5hbWVdIDogZmllbGQuZGVmYXVsdFZhbHVlO1xuICAgICAgICAgIGlmIChmaWVsZC50eXBlID09PSAnZmlsZXVwbG9hZCcpIHtcbiAgICAgICAgICAgIGlzTXVsdGlwYXJ0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBncmFiIGFsbCBjb25kaXRpb25hbCBsb2dpYyBmaWVsZHNcbiAgICAgICAgaWYgKGZpZWxkLmNvbmRpdGlvbmFsTG9naWMpIHtcbiAgICAgICAgICBjb25zdCB0bXBGaWVsZCA9IHtcbiAgICAgICAgICAgIGlkOiBmaWVsZC5pZCxcbiAgICAgICAgICAgIGNvbmRpdGlvbmFsTG9naWM6IGZpZWxkLmNvbmRpdGlvbmFsTG9naWMsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBjb25zdCBpZHMgPSBmaWVsZC5jb25kaXRpb25hbExvZ2ljLnJ1bGVzLm1hcChpdGVtID0+IGl0ZW0uZmllbGRJZCk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQoaWRzW2ldKTtcbiAgICAgICAgICAgIGlmIChjb25kaXRpb2FubElkcy5pbmRleE9mKGlkKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgY29uZGl0aW9hbmxJZHMucHVzaChpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbmRpdGlvbkZpZWxkcy5wdXNoKHRtcEZpZWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1WYWx1ZXNbZmllbGQuaWRdID0ge1xuICAgICAgICAgIHZhbGlkOiB2YWxpZGF0ZUZpZWxkKHZhbHVlLCBmaWVsZCksXG4gICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgbGFiZWw6IGZpZWxkLmxhYmVsLFxuICAgICAgICAgIHBhZ2VOdW1iZXI6IGZpZWxkLnBhZ2VOdW1iZXIsXG4gICAgICAgICAgY3NzQ2xhc3M6IGZpZWxkLmNzc0NsYXNzLFxuICAgICAgICAgIGlzUmVxdWlyZWQ6IGZpZWxkLmlzUmVxdWlyZWQsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICAvLyBjaGVjayBjb25kaXRpb24gbG9naWNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZGl0aW9uRmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvcm1WYWx1ZXNbY29uZGl0aW9uRmllbGRzW2ldLmlkXS5oaWRlRmllbGQgPSB0aGlzLmNoZWNrQ29uZGl0aW9uYWxMb2dpYyhcbiAgICAgICAgICBjb25kaXRpb25GaWVsZHNbaV0uY29uZGl0aW9uYWxMb2dpYyxcbiAgICAgICAgICBmb3JtVmFsdWVzLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9ybURhdGE6IGZvcm0sXG4gICAgICAgIGZvcm1WYWx1ZXMsXG4gICAgICAgIGFjdGl2ZVBhZ2U6IGZvcm0ucGFnaW5hdGlvbiA/IDEgOiBmYWxzZSxcbiAgICAgICAgY29uZGl0aW9uRmllbGRzLFxuICAgICAgICBjb25kaXRpb2FubElkcyxcbiAgICAgICAgaXNNdWx0aXBhcnQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHNldFRvdWNoZWQgPSAoaWQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRvdWNoZWQ6IHsgLi4udGhpcy5zdGF0ZS50b3VjaGVkLCBbaWRdOiB0cnVlIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgdW5zZXRFcnJvciA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHsgZXJyb3JNZXNzYWdlcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoIWVycm9yTWVzc2FnZXMpIHJldHVybjtcblxuICAgIGlmIChlcnJvck1lc3NhZ2VzW2lkXSkge1xuICAgICAgZGVsZXRlIGVycm9yTWVzc2FnZXNbaWRdO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZXMgfSk7XG4gICAgfVxuICB9O1xuXG4gIHVwZGF0ZUZvcm1IYW5kbGVyID0gKGV2ZW50LCBmaWVsZCkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybVZhbHVlcywgY29uZGl0aW9hbmxJZHMsIGNvbmRpdGlvbkZpZWxkcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgeyBpZCwgdHlwZSwgaXNSZXF1aXJlZCB9ID0gZmllbGQ7XG4gICAgLy8gU2V0IG5ldyB2YWx1ZVxuICAgIGxldCB2YWx1ZTtcbiAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgY29uc3QgdmFsdWVzID0gWy4uLmZvcm1WYWx1ZXNbZmllbGQuaWRdLnZhbHVlXTtcbiAgICAgIGNvbnN0IGluZGV4ID0gdmFsdWVzLmluZGV4T2YoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIHZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWVzLnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHZhbHVlID0gdmFsdWVzO1xuICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PSAnZGF0ZScgJiYgZmllbGQuZGF0ZVR5cGUgIT09ICdkYXRlcGlja2VyJykge1xuICAgICAgY29uc3QgeyBzdWJJZCwgZGF0ZUxhYmVsIH0gPSBmaWVsZDtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IFsuLi5mb3JtVmFsdWVzW2ZpZWxkLmlkXS52YWx1ZV07XG4gICAgICB2YWx1ZXNbc3ViSWRdID0ge1xuICAgICAgICB2YWw6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgICAgbGFiZWw6IGRhdGVMYWJlbCxcbiAgICAgIH07XG4gICAgICB2YWx1ZSA9IHZhbHVlcztcbiAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT0gJ2NvbnNlbnQnKSB7XG4gICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldCA/IGV2ZW50LnRhcmdldC5jaGVja2VkIDogJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gJ3Bhc3N3b3JkJykge1xuICAgICAgY29uc3QgeyBzdWJJZCB9ID0gZmllbGQ7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBmb3JtVmFsdWVzW2ZpZWxkLmlkXSAmJiBmb3JtVmFsdWVzW2ZpZWxkLmlkXS52YWx1ZSA/IFsuLi5mb3JtVmFsdWVzW2ZpZWxkLmlkXS52YWx1ZV0gOiBbXTtcbiAgICAgIHZhbHVlc1tzdWJJZF0gPSB7XG4gICAgICAgIHZhbDogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgfTtcbiAgICAgIHZhbHVlID0gdmFsdWVzO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldCA/IGV2ZW50LnRhcmdldC52YWx1ZSA6ICdudWxsJztcbiAgICB9XG4gICAgLy8gaWYgZmllbGQgaXMgSUJBTlxuICAgIGlmICh0eXBlID09PSAndGV4dCcgJiYgZmllbGQuY3NzQ2xhc3MuaW5kZXhPZignaWJhbicpID4gLTEpIHtcbiAgICAgIHR5cGUgPSAnaWJhbic7XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgZmllbGRcbiAgICBjb25zdCB2YWxpZCA9IHZhbGlkYXRlRmllbGQodmFsdWUsIGZpZWxkKTtcblxuICAgIC8vIGlmIGZpZWxkIElEIGlzIHNvbWV3aGVyZSBpbiBjb25kaXRpb25hbCBmaWVsZHNcbiAgICAvLyByZWNhbGN1bGF0ZSBhbGwgY29uZGl0aW9uc1xuICAgIGlmIChjb25kaXRpb2FubElkcy5pbmRleE9mKGlkKSAhPT0gLTEpIHtcbiAgICAgIGZvcm1WYWx1ZXNbaWRdLnZhbHVlID0gdmFsdWU7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmRpdGlvbkZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB7IGlkIH0gPSBjb25kaXRpb25GaWVsZHNbaV07XG4gICAgICAgIGNvbnN0IGhpZGUgPSB0aGlzLmNoZWNrQ29uZGl0aW9uYWxMb2dpYyhjb25kaXRpb25GaWVsZHNbaV0uY29uZGl0aW9uYWxMb2dpYywgZm9ybVZhbHVlcyk7XG4gICAgICAgIGZvcm1WYWx1ZXNbaWRdLmhpZGVGaWVsZCA9IGhpZGU7XG4gICAgICAgIGlmIChoaWRlKSB7XG4gICAgICAgICAgaWYgKGZvcm1WYWx1ZXNbaWRdLmlzUmVxdWlyZWQgJiYgaGlkZSkge1xuICAgICAgICAgICAgZm9ybVZhbHVlc1tpZF0udmFsdWUgPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9ybVZhbHVlc1tpZF0udmFsaWQgPSAhIWZvcm1WYWx1ZXNbaWRdLmlzUmVxdWlyZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBmb3JtVmFsdWVzOiB7XG4gICAgICAgICAgLi4uZm9ybVZhbHVlcyxcbiAgICAgICAgICBbaWRdOiB7XG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgdmFsaWQsXG4gICAgICAgICAgICBsYWJlbDogZmllbGQubGFiZWwsXG4gICAgICAgICAgICBwYWdlTnVtYmVyOiBmaWVsZC5wYWdlTnVtYmVyLFxuICAgICAgICAgICAgY3NzQ2xhc3M6IGZpZWxkLmNzc0NsYXNzLFxuICAgICAgICAgICAgaXNSZXF1aXJlZDogZmllbGQuaXNSZXF1aXJlZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgLy8gcGFzcyBzdGF0ZSB0byBwYXJlbnQgY29tcG9uZW50XG4gICAgICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKHRoaXMuc3RhdGUuZm9ybVZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgKTtcbiAgfTtcblxuICBzY3JvbGxUb0NvbmZpcm1hdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy53cmFwcGVyUmVmID8gdGhpcy53cmFwcGVyUmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogZmFsc2U7XG4gICAgaWYgKHJlY3QgJiYgd2luZG93KSB7XG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogc2Nyb2xsVG9wICsgcmVjdC50b3AgLSAxMDAsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3VibWl0dGluZzogdHJ1ZSxcbiAgICAgIHN1Ym1pdFN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgc3VibWl0RmFpbGVkOiBmYWxzZSxcbiAgICAgIGNvbmZpcm1hdGlvbk1lc3NhZ2U6IGZhbHNlLFxuICAgICAgZXJyb3JNZXNzYWdlczogZmFsc2UsXG4gICAgfSk7XG4gICAgY29uc3QgeyBmb3JtSUQsIGJhY2tlbmRVcmwsIGp1bXBUb0NvbmZpcm1hdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBnZlN1Ym1pc3Npb25VcmwgPSBiYWNrZW5kVXJsLnN1YnN0cmluZygwLCBiYWNrZW5kVXJsLmluZGV4T2YoJy93cC1qc29uJykpO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcbiAgICBheGlvc1xuICAgICAgLnBvc3QoYCR7Z2ZTdWJtaXNzaW9uVXJsfS93cC1qc29uL2dmL3YyL2Zvcm1zLyR7Zm9ybUlEfS9zdWJtaXNzaW9uc2AsIGRhdGEpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5pc192YWxpZCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICAgICAgICBzdWJtaXRTdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlybWF0aW9uTWVzc2FnZTogcmVzcG9uc2UuZGF0YS5jb25maXJtYXRpb25fbWVzc2FnZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZihqdW1wVG9Db25maXJtYXRpb24pe1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0NvbmZpcm1hdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc3VibWl0RmFpbGVkOiB0cnVlLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlczogJ1NvbWV0aGluZyB3ZW50IHdyb25nJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICAgICAgc3VibWl0RmFpbGVkOiB0cnVlLFxuICAgICAgICAgIGVycm9yTWVzc2FnZXM6IGVycm9yLnJlc3BvbnNlLmRhdGEudmFsaWRhdGlvbl9tZXNzYWdlcyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBuZXh0U3RlcCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgYWN0aXZlUGFnZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZVBhZ2U6IGFjdGl2ZVBhZ2UgKyAxLFxuICAgIH0pO1xuICB9O1xuXG4gIHByZXZTdGVwID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBhY3RpdmVQYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlUGFnZTogYWN0aXZlUGFnZSAtIDEsXG4gICAgfSk7XG4gIH07XG5cbiAgY2hlY2tDb25kaXRpb25hbExvZ2ljID0gKGNvbmRpdGlvbiwgZmllbGRzID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCB7IHJ1bGVzLCBhY3Rpb25UeXBlIH0gPSBjb25kaXRpb247XG4gICAgaWYgKCFydWxlcykgcmV0dXJuIHRydWU7XG5cbiAgICBjb25zdCBmb3JtVmFsdWVzID0gZmllbGRzIHx8IHRoaXMuc3RhdGUuZm9ybVZhbHVlcztcblxuICAgIC8vIHNob3cgb25seSBpZiBpcyBzZWxlY3RlZCBcIkFsbCBmaWVsZHNcIiAoaXQgc2hvdWxkIGJlIHR3ZWFrZWQgaW4gZnV0dXJlKVxuICAgIC8vIHdvcmtzIG9ubHkgXCJzaG93L2hpZGUgd2hlbiBmaWVsZCBpcyBlcXVhbCB0b1wiXG4gICAgbGV0IGhpZGVGaWVsZCA9IGFjdGlvblR5cGUgIT09ICdoaWRlJztcbiAgICBjb25zdCBoaWRlQmFzZWRPblJ1bGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgeyBmaWVsZElkLCB2YWx1ZSB9ID0gcnVsZXNbaV07XG4gICAgICBjb25zdCBjb25kaXRpb25GaWVsZFZhbHVlID0gZm9ybVZhbHVlc1tmaWVsZElkXS52YWx1ZTtcblxuICAgICAgY29uc3Qgc3RyaW5nVmFsdWUgPSBBcnJheS5pc0FycmF5KGNvbmRpdGlvbkZpZWxkVmFsdWUpXG4gICAgICAgID8gY29uZGl0aW9uRmllbGRWYWx1ZS5qb2luKCcnKVxuICAgICAgICA6IGNvbmRpdGlvbkZpZWxkVmFsdWU7XG4gICAgICBpZiAoc3RyaW5nVmFsdWUgJiYgdmFsdWUgPT09IHN0cmluZ1ZhbHVlKSB7XG4gICAgICAgIGhpZGVCYXNlZE9uUnVsZXNbaV0gPSBhY3Rpb25UeXBlID09PSAnaGlkZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoaWRlQmFzZWRPblJ1bGVzW2ldID0gYWN0aW9uVHlwZSAhPT0gJ2hpZGUnO1xuICAgICAgfVxuICAgIH1cbiAgICBoaWRlRmllbGQgPSBoaWRlQmFzZWRPblJ1bGVzLmV2ZXJ5KGkgPT4gaSA9PT0gdHJ1ZSk7XG4gICAgLy8gZm9ybVZhbHVlc1tpZF0uaGlkZUZpZWxkID0gaGlkZUZpZWxkO1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBmb3JtVmFsdWVzIH0pO1xuICAgIHJldHVybiBoaWRlRmllbGQ7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZvcm1EYXRhLFxuICAgICAgZm9ybVZhbHVlcyxcbiAgICAgIHN1Ym1pdEZhaWxlZCxcbiAgICAgIHN1Ym1pdFN1Y2Nlc3MsXG4gICAgICB0b3VjaGVkLFxuICAgICAgc3VibWl0dGluZyxcbiAgICAgIGFjdGl2ZVBhZ2UsXG4gICAgICBpc011bHRpcGFydCxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7XG4gICAgICB0aXRsZSxcbiAgICAgIHN1Ym1pdEljb24sXG4gICAgICBzYXZlU3RhdGVUb0h0bWxGaWVsZCxcbiAgICAgIHN0eWxlZENvbXBvbmVudHMsXG4gICAgICBjdXN0b21Db21wb25lbnRzLFxuICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgZHJvcHpvbmVUZXh0LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIEJ1dHRvbiwgTG9hZGluZywgR0ZXcmFwcGVyID0gJ2RpdicsIEZvcm1FcnJvcjogU0Zvcm1FcnJvcixcbiAgICB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICAgIGNvbnN0IHsgY3NzQ2xhc3MgfSA9IGZvcm1EYXRhO1xuXG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IE9iamVjdC5rZXlzKGZvcm1WYWx1ZXMpLnNvbWUoXG4gICAgICB4ID0+ICFmb3JtVmFsdWVzW3hdLmhpZGVGaWVsZCAmJiBmb3JtVmFsdWVzW3hdLnZhbGlkLFxuICAgICk7XG4gICAgY29uc3QgaXNOZXh0RGlzYWJsZWQgPSBhY3RpdmVQYWdlXG4gICAgICA/IE9iamVjdC5rZXlzKGZvcm1WYWx1ZXMpLnNvbWUoXG4gICAgICAgIHggPT4gZm9ybVZhbHVlc1t4XS5wYWdlTnVtYmVyID09PSBhY3RpdmVQYWdlXG4gICAgICAgICAgICAmJiAhZm9ybVZhbHVlc1t4XS5oaWRlRmllbGRcbiAgICAgICAgICAgICYmIGZvcm1WYWx1ZXNbeF0udmFsaWQsXG4gICAgICApXG4gICAgICA6IGZhbHNlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtlbCA9PiAodGhpcy53cmFwcGVyUmVmID0gZWwpfVxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXdyYXBwZXJcIlxuICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX1cbiAgICAgICAgaWQ9e2BncmF2aXR5X2Zvcm1fJHt0aGlzLnByb3BzLmZvcm1JRH1gfVxuICAgICAgPlxuICAgICAgICB7Zm9ybURhdGEudGl0bGUgPyBudWxsIDogTG9hZGluZyAmJiA8TG9hZGluZyBpc0xvYWRpbmcgLz59XG5cbiAgICAgICAge3N1Ym1pdEZhaWxlZCAmJiAhc3VibWl0U3VjY2VzcyAmJiAoXG4gICAgICAgICAgPEZvcm1FcnJvclxuICAgICAgICAgICAgU0Zvcm1FcnJvcj17U0Zvcm1FcnJvciB8fCBmYWxzZX1cbiAgICAgICAgICAgIGVycm9yTWVzc2FnZT17ZXJyb3JNZXNzYWdlIHx8ICdUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggeW91ciBzdWJtaXNzaW9uJ31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHtzdWJtaXRTdWNjZXNzICYmIHRoaXMuc3RhdGUuY29uZmlybWF0aW9uTWVzc2FnZSAmJiAoXG4gICAgICAgICAgPEZvcm1Db25maXJtYXRpb24gY29uZmlybWF0aW9uPXt0aGlzLnN0YXRlLmNvbmZpcm1hdGlvbk1lc3NhZ2V9IC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgeyFzdWJtaXRTdWNjZXNzICYmIGZvcm1EYXRhLmZpZWxkcyA/IChcbiAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgb25TdWJtaXQ9e2UgPT4gdGhpcy5vblN1Ym1pdChlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzQ2xhc3N9XG4gICAgICAgICAgICBlbmNUeXBlPXtpc011bHRpcGFydCA/ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIG5vVmFsaWRhdGVcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7KGZvcm1EYXRhLnRpdGxlIHx8IGZvcm1EYXRhLmRlc2NyaXB0aW9uKSAmJiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2Zvcm1EYXRhLnRpdGxlICYmIHRpdGxlID8gPGgzIGNsYXNzTmFtZT1cImZvcm0tdGl0bGVcIj57Zm9ybURhdGEudGl0bGV9PC9oMz4gOiBudWxsfVxuICAgICAgICAgICAgICAgIHtmb3JtRGF0YS5kZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm0tZGVzY3JpcHRpb25cIj57Zm9ybURhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxSZW5kZXJGaWVsZHNcbiAgICAgICAgICAgICAgICBzdHlsZWRDb21wb25lbnRzPXtzdHlsZWRDb21wb25lbnRzfVxuICAgICAgICAgICAgICAgIGN1c3RvbUNvbXBvbmVudHM9e2N1c3RvbUNvbXBvbmVudHN9XG4gICAgICAgICAgICAgICAgZmllbGRzPXtmb3JtRGF0YS5maWVsZHN9XG4gICAgICAgICAgICAgICAgZm9ybVZhbHVlcz17Zm9ybVZhbHVlc31cbiAgICAgICAgICAgICAgICBzdWJtaXRGYWlsZWQ9e3N1Ym1pdEZhaWxlZH1cbiAgICAgICAgICAgICAgICBzdWJtaXRTdWNjZXNzPXtzdWJtaXRTdWNjZXNzfVxuICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm09e3RoaXMudXBkYXRlRm9ybUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgdG91Y2hlZD17dG91Y2hlZH1cbiAgICAgICAgICAgICAgICBzZXRUb3VjaGVkPXt0aGlzLnNldFRvdWNoZWR9XG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17Zm9ybURhdGEucGFnaW5hdGlvbn1cbiAgICAgICAgICAgICAgICBhY3RpdmVQYWdlPXthY3RpdmVQYWdlfVxuICAgICAgICAgICAgICAgIHByZXZTdGVwPXt0aGlzLnByZXZTdGVwfVxuICAgICAgICAgICAgICAgIG5leHRTdGVwPXt0aGlzLm5leHRTdGVwfVxuICAgICAgICAgICAgICAgIGlzTmV4dERpc2FibGVkPXtpc05leHREaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBjaGVja0NvbmRpdGlvbmFsTG9naWM9e3RoaXMuY2hlY2tDb25kaXRpb25hbExvZ2ljfVxuICAgICAgICAgICAgICAgIHNhdmVTdGF0ZVRvSHRtbEZpZWxkPXtzYXZlU3RhdGVUb0h0bWxGaWVsZH1cbiAgICAgICAgICAgICAgICBlbmFibGVIb25leXBvdD17Zm9ybURhdGEuZW5hYmxlSG9uZXlwb3R9XG4gICAgICAgICAgICAgICAgZXJyb3JzPXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZXN9XG4gICAgICAgICAgICAgICAgdW5zZXRFcnJvcj17dGhpcy51bnNldEVycm9yfVxuICAgICAgICAgICAgICAgIGRyb3B6b25lVGV4dD17ZHJvcHpvbmVUZXh0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7KCFmb3JtRGF0YS5wYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgfHwgKGZvcm1EYXRhLnBhZ2luYXRpb24gJiYgZm9ybURhdGEucGFnaW5hdGlvbi5wYWdlcy5sZW5ndGggPT09IGFjdGl2ZVBhZ2UpKSAmJiAoXG4gICAgICAgICAgICAgICAgPFN1Ym1pdFxuICAgICAgICAgICAgICAgICAgQnV0dG9uPXtCdXR0b259XG4gICAgICAgICAgICAgICAgICBMb2FkaW5nPXtMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgZm9ybURhdGE9e2Zvcm1EYXRhfVxuICAgICAgICAgICAgICAgICAgc3VibWl0SWNvbj17c3VibWl0SWNvbn1cbiAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e2lzRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICBzdWJtaXR0aW5nPXtzdWJtaXR0aW5nfVxuICAgICAgICAgICAgICAgICAgcHJldlN0ZXA9e3RoaXMucHJldlN0ZXB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAnJ1xuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5HcmF2aXR5Rm9ybS5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiB0cnVlLFxuICBzdWJtaXRJY29uOiBmYWxzZSxcbiAgc2F2ZVN0YXRlVG9IdG1sRmllbGQ6IGZhbHNlLFxuICBqdW1wVG9Db25maXJtYXRpb246IHRydWUsXG59O1xuXG5leHBvcnQge1xuICB2YWxpZGF0ZUZpZWxkLCBGb3JtQ29uZmlybWF0aW9uLCBGb3JtRXJyb3IsIFJlbmRlckZpZWxkcywgU3VibWl0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgR3Jhdml0eUZvcm07XG4iXX0=
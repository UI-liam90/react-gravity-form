"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
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


      var valid = (0, _validation.validateField)(value, type, isRequired, field); // if field ID is somewhere in conditional fields
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

    _defineProperty(_assertThisInitialized(_this), "nextStep", function () {
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
                    valid: (0, _validation.validateField)(value, field.type, field.isRequired),
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
      return _react["default"].createElement(GFWrapper, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHcmF2aXR5Rm9ybSIsInByb3BzIiwiaWQiLCJzZXRTdGF0ZSIsInRvdWNoZWQiLCJzdGF0ZSIsImV2ZW50IiwiZmllbGQiLCJmb3JtVmFsdWVzIiwiY29uZGl0aW9hbmxJZHMiLCJjb25kaXRpb25GaWVsZHMiLCJ0eXBlIiwiaXNSZXF1aXJlZCIsInZhbHVlIiwidmFsdWVzIiwiaW5kZXgiLCJpbmRleE9mIiwidGFyZ2V0Iiwic3BsaWNlIiwicHVzaCIsInN1YklkIiwiZGF0ZUxhYmVsIiwidmFsIiwibGFiZWwiLCJjaGVja2VkIiwiY3NzQ2xhc3MiLCJ2YWxpZCIsImkiLCJsZW5ndGgiLCJoaWRlIiwiY2hlY2tDb25kaXRpb25hbExvZ2ljIiwiY29uZGl0aW9uYWxMb2dpYyIsImhpZGVGaWVsZCIsInBhZ2VOdW1iZXIiLCJvbkNoYW5nZSIsInJlY3QiLCJ3cmFwcGVyUmVmIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvIiwidG9wIiwicHJldmVudERlZmF1bHQiLCJzdWJtaXR0aW5nIiwic3VibWl0U3VjY2VzcyIsInN1Ym1pdEZhaWxlZCIsImNvbmZpcm1hdGlvbk1lc3NhZ2UiLCJlcnJvck1lc3NhZ2VzIiwiZm9ybUlEIiwiYmFja2VuZFVybCIsImdmU3VibWlzc2lvblVybCIsInN1YnN0cmluZyIsImRhdGEiLCJGb3JtRGF0YSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImlzX3ZhbGlkIiwiY29uZmlybWF0aW9uX21lc3NhZ2UiLCJzY3JvbGxUb0NvbmZpcm1hdGlvbiIsImVycm9yIiwidmFsaWRhdGlvbl9tZXNzYWdlcyIsImFjdGl2ZVBhZ2UiLCJlIiwiY29uZGl0aW9uIiwiZmllbGRzIiwicnVsZXMiLCJhY3Rpb25UeXBlIiwiaGlkZUJhc2VkT25SdWxlcyIsImZpZWxkSWQiLCJjb25kaXRpb25GaWVsZFZhbHVlIiwic3RyaW5nVmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJqb2luIiwiZXZlcnkiLCJsb2FkaW5nIiwiaXNWYWxpZCIsImZvcm1EYXRhIiwiaXNNdWx0aXBhcnQiLCJwb3B1bGF0ZWRGaWVsZHMiLCJfaXNNb3VudGVkIiwiZ2V0IiwiZm9ybSIsImhhc1BvcHVsYXRpb24iLCJpbnB1dE5hbWUiLCJjaG9pY2VzIiwiZmlsdGVyIiwiY2hvaWNlIiwiaXNTZWxlY3RlZCIsIm1hcCIsInByZXNlbGVjdGVkIiwiZmluZCIsInNlbGVjdGVkT3B0aW9uIiwiaXRlbSIsInRleHQiLCJkZWZhdWx0VmFsdWUiLCJ0bXBGaWVsZCIsImlkcyIsInBhcnNlSW50IiwicGFnaW5hdGlvbiIsInRpdGxlIiwic3VibWl0SWNvbiIsInNhdmVTdGF0ZVRvSHRtbEZpZWxkIiwic3R5bGVkQ29tcG9uZW50cyIsIkJ1dHRvbiIsIkxvYWRpbmciLCJHRldyYXBwZXIiLCJpc0Rpc2FibGVkIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJ4IiwiaXNOZXh0RGlzYWJsZWQiLCJlbCIsInBvc2l0aW9uIiwib25TdWJtaXQiLCJ1bmRlZmluZWQiLCJkZXNjcmlwdGlvbiIsInVwZGF0ZUZvcm1IYW5kbGVyIiwic2V0VG91Y2hlZCIsInByZXZTdGVwIiwibmV4dFN0ZXAiLCJlbmFibGVIb25leXBvdCIsInBhZ2VzIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxXOzs7OztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLHFGQUFNQSxLQUFOOztBQURpQixpRUE0R04sVUFBQ0MsRUFBRCxFQUFRO0FBQ25CLFlBQUtDLFFBQUwsQ0FBYztBQUNaQyxRQUFBQSxP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QU0sRUFBRTJDLE1BRFY7QUFFRSxRQUFBLE9BQU8sRUFBRUMsT0FGWDtBQUdFLFFBQUEsUUFBUSxFQUFFNUIsUUFIWjtBQUlFLFFBQUEsVUFBVSxFQUFFd0IsVUFKZDtBQUtFLFFBQUEsVUFBVSxFQUFFTSxVQUxkO0FBTUUsUUFBQSxVQUFVLEVBQUVsRSxVQU5kO0FBT0UsUUFBQSxRQUFRLEVBQUUsS0FBSytFO0FBUGpCLFFBckJKLENBZkYsQ0FERCxHQWtEQyxFQXRFSixDQURGO0FBMkVEOzs7O0VBbll1QkksZ0I7O0FBc1kxQmpJLFdBQVcsQ0FBQ2tJLFlBQVosR0FBMkI7QUFDekJ6QixFQUFBQSxLQUFLLEVBQUUsSUFEa0I7QUFFekJDLEVBQUFBLFVBQVUsRUFBRSxLQUZhO0FBR3pCQyxFQUFBQSxvQkFBb0IsRUFBRTtBQUhHLENBQTNCO2VBTWUzRyxXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUmVuZGVyRmllbGRzIGZyb20gJy4vRm9ybUVsZW1lbnRzL1JlbmRlckZpZWxkcyc7XG5pbXBvcnQgRm9ybUVycm9yIGZyb20gJy4vRm9ybUVsZW1lbnRzL0Zvcm1FcnJvcic7XG5pbXBvcnQgRm9ybUNvbmZpcm1hdGlvbiBmcm9tICcuL0Zvcm1FbGVtZW50cy9Gb3JtQ29uZmlybWF0aW9uJztcbmltcG9ydCB7IHZhbGlkYXRlRmllbGQgfSBmcm9tICcuL0hlbHBlcnMvdmFsaWRhdGlvbic7XG5pbXBvcnQgU3VibWl0IGZyb20gJy4vRm9ybUVsZW1lbnRzL1N1Ym1pdCc7XG5cbmNsYXNzIEdyYXZpdHlGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN1Ym1pdEZhaWxlZDogZmFsc2UsXG4gICAgICBlcnJvck1lc3NhZ2VzOiBmYWxzZSxcbiAgICAgIGZvcm1WYWx1ZXM6IHt9LFxuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgc3VibWl0U3VjY2VzczogZmFsc2UsXG4gICAgICBjb25maXJtYXRpb25NZXNzYWdlOiBmYWxzZSxcbiAgICAgIGlzVmFsaWQ6IGZhbHNlLFxuICAgICAgZm9ybURhdGE6IHt9LFxuICAgICAgdG91Y2hlZDoge30sXG4gICAgICBhY3RpdmVQYWdlOiBmYWxzZSxcbiAgICAgIGNvbmRpdGlvbkZpZWxkczoge30sXG4gICAgICBjb25kaXRpb2FubElkczoge30sXG4gICAgICBpc011bHRpcGFydDogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZm9ybUlELCBiYWNrZW5kVXJsLCBwb3B1bGF0ZWRGaWVsZHMgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICBsZXQgaXNNdWx0aXBhcnQgPSBmYWxzZTtcbiAgICBjb25zdCBmb3JtID0gYXdhaXQgYXhpb3NcbiAgICAgIC5nZXQoYCR7YmFja2VuZFVybH0vJHtmb3JtSUR9YClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXG4gICAgICAuY2F0Y2goKCkgPT4gZmFsc2UpO1xuXG4gICAgaWYgKGZvcm0gJiYgdGhpcy5faXNNb3VudGVkKSB7XG4gICAgICBjb25zdCBmb3JtVmFsdWVzID0ge307XG4gICAgICBjb25zdCBjb25kaXRpb25GaWVsZHMgPSBbXTtcbiAgICAgIGNvbnN0IGNvbmRpdGlvYW5sSWRzID0gW107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgZm9ybS5maWVsZHMpIHtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBjb25zdCBoYXNQb3B1bGF0aW9uID0gZmllbGQuaW5wdXROYW1lICYmIHBvcHVsYXRlZEZpZWxkcyAmJiBwb3B1bGF0ZWRGaWVsZHNbZmllbGQuaW5wdXROYW1lXTtcbiAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICB2YWx1ZSA9IGZpZWxkLmNob2ljZXNcbiAgICAgICAgICAgIC5maWx0ZXIoY2hvaWNlID0+IChoYXNQb3B1bGF0aW9uID8gY2hvaWNlLnZhbHVlID09PSBwb3B1bGF0ZWRGaWVsZHNbZmllbGQuaW5wdXROYW1lXSA6IGNob2ljZS5pc1NlbGVjdGVkKSlcbiAgICAgICAgICAgIC5tYXAoY2hvaWNlID0+IGNob2ljZS52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgIGlmIChoYXNQb3B1bGF0aW9uKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHBvcHVsYXRlZEZpZWxkc1tmaWVsZC5pbnB1dE5hbWVdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwcmVzZWxlY3RlZCA9IGZpZWxkLmNob2ljZXMuZmluZChjaG9pY2UgPT4gY2hvaWNlLmlzU2VsZWN0ZWQpO1xuICAgICAgICAgICAgdmFsdWUgPSBwcmVzZWxlY3RlZCA/IHByZXNlbGVjdGVkLnZhbHVlIDogJyc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBmaWVsZC5jaG9pY2VzXG4gICAgICAgICAgICAuZmlsdGVyKGNob2ljZSA9PiAoaGFzUG9wdWxhdGlvbiA/IGNob2ljZS52YWx1ZSA9PT0gcG9wdWxhdGVkRmllbGRzW2ZpZWxkLmlucHV0TmFtZV0gOiBjaG9pY2UuaXNTZWxlY3RlZCkpXG4gICAgICAgICAgICAubWFwKGl0ZW0gPT4gKHsgdmFsdWU6IGl0ZW0udmFsdWUsIGxhYmVsOiBpdGVtLnRleHQgfSkpO1xuICAgICAgICAgIHZhbHVlID0gc2VsZWN0ZWRPcHRpb24gJiYgc2VsZWN0ZWRPcHRpb24ubGVuZ3RoID4gMCA/IHNlbGVjdGVkT3B0aW9uWzBdIDogJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUgPSBoYXNQb3B1bGF0aW9uID8gcG9wdWxhdGVkRmllbGRzW2ZpZWxkLmlucHV0TmFtZV0gOiBmaWVsZC5kZWZhdWx0VmFsdWU7XG4gICAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdmaWxldXBsb2FkJykge1xuICAgICAgICAgICAgaXNNdWx0aXBhcnQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdyYWIgYWxsIGNvbmRpdGlvbmFsIGxvZ2ljIGZpZWxkc1xuICAgICAgICBpZiAoZmllbGQuY29uZGl0aW9uYWxMb2dpYykge1xuICAgICAgICAgIGNvbnN0IHRtcEZpZWxkID0ge1xuICAgICAgICAgICAgaWQ6IGZpZWxkLmlkLFxuICAgICAgICAgICAgY29uZGl0aW9uYWxMb2dpYzogZmllbGQuY29uZGl0aW9uYWxMb2dpYyxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNvbnN0IGlkcyA9IGZpZWxkLmNvbmRpdGlvbmFsTG9naWMucnVsZXMubWFwKGl0ZW0gPT4gaXRlbS5maWVsZElkKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaWQgPSBwYXJzZUludChpZHNbaV0pO1xuICAgICAgICAgICAgaWYgKGNvbmRpdGlvYW5sSWRzLmluZGV4T2YoaWQpID09PSAtMSkge1xuICAgICAgICAgICAgICBjb25kaXRpb2FubElkcy5wdXNoKGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uZGl0aW9uRmllbGRzLnB1c2godG1wRmllbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybVZhbHVlc1tmaWVsZC5pZF0gPSB7XG4gICAgICAgICAgdmFsaWQ6IHZhbGlkYXRlRmllbGQodmFsdWUsIGZpZWxkLnR5cGUsIGZpZWxkLmlzUmVxdWlyZWQpLFxuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIGxhYmVsOiBmaWVsZC5sYWJlbCxcbiAgICAgICAgICBwYWdlTnVtYmVyOiBmaWVsZC5wYWdlTnVtYmVyLFxuICAgICAgICAgIGNzc0NsYXNzOiBmaWVsZC5jc3NDbGFzcyxcbiAgICAgICAgICBpc1JlcXVpcmVkOiBmaWVsZC5pc1JlcXVpcmVkLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy8gY2hlY2sgY29uZGl0aW9uIGxvZ2ljXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmRpdGlvbkZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3JtVmFsdWVzW2NvbmRpdGlvbkZpZWxkc1tpXS5pZF0uaGlkZUZpZWxkID0gdGhpcy5jaGVja0NvbmRpdGlvbmFsTG9naWMoXG4gICAgICAgICAgY29uZGl0aW9uRmllbGRzW2ldLmNvbmRpdGlvbmFsTG9naWMsXG4gICAgICAgICAgZm9ybVZhbHVlcyxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvcm1EYXRhOiBmb3JtLFxuICAgICAgICBmb3JtVmFsdWVzLFxuICAgICAgICBhY3RpdmVQYWdlOiBmb3JtLnBhZ2luYXRpb24gPyAxIDogZmFsc2UsXG4gICAgICAgIGNvbmRpdGlvbkZpZWxkcyxcbiAgICAgICAgY29uZGl0aW9hbmxJZHMsXG4gICAgICAgIGlzTXVsdGlwYXJ0LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gIH1cblxuICBzZXRUb3VjaGVkID0gKGlkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0b3VjaGVkOiB7IC4uLnRoaXMuc3RhdGUudG91Y2hlZCwgW2lkXTogdHJ1ZSB9LFxuICAgIH0pO1xuICB9O1xuXG4gIHVwZGF0ZUZvcm1IYW5kbGVyID0gKGV2ZW50LCBmaWVsZCkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybVZhbHVlcywgY29uZGl0aW9hbmxJZHMsIGNvbmRpdGlvbkZpZWxkcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgeyBpZCwgdHlwZSwgaXNSZXF1aXJlZCB9ID0gZmllbGQ7XG4gICAgLy8gU2V0IG5ldyB2YWx1ZVxuICAgIGxldCB2YWx1ZTtcbiAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgY29uc3QgdmFsdWVzID0gWy4uLmZvcm1WYWx1ZXNbZmllbGQuaWRdLnZhbHVlXTtcbiAgICAgIGNvbnN0IGluZGV4ID0gdmFsdWVzLmluZGV4T2YoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIHZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWVzLnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHZhbHVlID0gdmFsdWVzO1xuICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PSAnZGF0ZScpIHtcbiAgICAgIGNvbnN0IHsgc3ViSWQsIGRhdGVMYWJlbCB9ID0gZmllbGQ7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBbLi4uZm9ybVZhbHVlc1tmaWVsZC5pZF0udmFsdWVdO1xuICAgICAgdmFsdWVzW3N1YklkXSA9IHtcbiAgICAgICAgdmFsOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICAgIGxhYmVsOiBkYXRlTGFiZWwsXG4gICAgICB9O1xuICAgICAgdmFsdWUgPSB2YWx1ZXM7XG4gICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09ICdjb25zZW50Jykge1xuICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQgPyBldmVudC50YXJnZXQuY2hlY2tlZCA6ICdudWxsJztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQgPyBldmVudC50YXJnZXQudmFsdWUgOiAnbnVsbCc7XG4gICAgfVxuICAgIC8vIGlmIGZpZWxkIGlzIElCQU5cbiAgICBpZiAodHlwZSA9PT0gJ3RleHQnICYmIGZpZWxkLmNzc0NsYXNzLmluZGV4T2YoJ2liYW4nKSA+IC0xKSB7XG4gICAgICB0eXBlID0gJ2liYW4nO1xuICAgIH1cbiAgICAvLyBWYWxpZGF0ZSBmaWVsZFxuICAgIGNvbnN0IHZhbGlkID0gdmFsaWRhdGVGaWVsZCh2YWx1ZSwgdHlwZSwgaXNSZXF1aXJlZCwgZmllbGQpO1xuXG4gICAgLy8gaWYgZmllbGQgSUQgaXMgc29tZXdoZXJlIGluIGNvbmRpdGlvbmFsIGZpZWxkc1xuICAgIC8vIHJlY2FsY3VsYXRlIGFsbCBjb25kaXRpb25zXG4gICAgaWYgKGNvbmRpdGlvYW5sSWRzLmluZGV4T2YoaWQpICE9PSAtMSkge1xuICAgICAgZm9ybVZhbHVlc1tpZF0udmFsdWUgPSB2YWx1ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZGl0aW9uRmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IGNvbmRpdGlvbkZpZWxkc1tpXTtcbiAgICAgICAgY29uc3QgaGlkZSA9IHRoaXMuY2hlY2tDb25kaXRpb25hbExvZ2ljKGNvbmRpdGlvbkZpZWxkc1tpXS5jb25kaXRpb25hbExvZ2ljLCBmb3JtVmFsdWVzKTtcbiAgICAgICAgZm9ybVZhbHVlc1tpZF0uaGlkZUZpZWxkID0gaGlkZTtcbiAgICAgICAgaWYgKGhpZGUpIHtcbiAgICAgICAgICBpZiAoZm9ybVZhbHVlc1tpZF0uaXNSZXF1aXJlZCAmJiBoaWRlKSB7XG4gICAgICAgICAgICBmb3JtVmFsdWVzW2lkXS52YWx1ZSA9ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtVmFsdWVzW2lkXS52YWxpZCA9ICEhZm9ybVZhbHVlc1tpZF0uaXNSZXF1aXJlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIGZvcm1WYWx1ZXM6IHtcbiAgICAgICAgICAuLi5mb3JtVmFsdWVzLFxuICAgICAgICAgIFtpZF06IHtcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICB2YWxpZCxcbiAgICAgICAgICAgIGxhYmVsOiBmaWVsZC5sYWJlbCxcbiAgICAgICAgICAgIHBhZ2VOdW1iZXI6IGZpZWxkLnBhZ2VOdW1iZXIsXG4gICAgICAgICAgICBjc3NDbGFzczogZmllbGQuY3NzQ2xhc3MsXG4gICAgICAgICAgICBpc1JlcXVpcmVkOiBmaWVsZC5pc1JlcXVpcmVkLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICAvLyBwYXNzIHN0YXRlIHRvIHBhcmVudCBjb21wb25lbnRcbiAgICAgICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UodGhpcy5zdGF0ZS5mb3JtVmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICApO1xuICB9O1xuXG4gIHNjcm9sbFRvQ29uZmlybWF0aW9uID0gKCkgPT4geyBcbiAgICBjb25zdCByZWN0ID0gdGhpcy53cmFwcGVyUmVmID8gdGhpcy53cmFwcGVyUmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogZmFsc2U7XG4gICAgaWYgKHJlY3QgJiYgd2luZG93KSB7XG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogc2Nyb2xsVG9wICsgcmVjdC50b3AgLSAxMDAsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdWJtaXR0aW5nOiB0cnVlLFxuICAgICAgc3VibWl0U3VjY2VzczogZmFsc2UsXG4gICAgICBzdWJtaXRGYWlsZWQ6IGZhbHNlLFxuICAgICAgY29uZmlybWF0aW9uTWVzc2FnZTogZmFsc2UsXG4gICAgICBlcnJvck1lc3NhZ2VzOiBmYWxzZSxcbiAgICB9KTtcbiAgICBjb25zdCB7IGZvcm1JRCwgYmFja2VuZFVybCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBnZlN1Ym1pc3Npb25VcmwgPSBiYWNrZW5kVXJsLnN1YnN0cmluZygwLCBiYWNrZW5kVXJsLmluZGV4T2YoJy93cC1qc29uJykpO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcbiAgICBheGlvc1xuICAgICAgLnBvc3QoYCR7Z2ZTdWJtaXNzaW9uVXJsfS93cC1qc29uL2dmL3YyL2Zvcm1zLyR7Zm9ybUlEfS9zdWJtaXNzaW9uc2AsIGRhdGEpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5pc192YWxpZCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICAgICAgICBzdWJtaXRTdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlybWF0aW9uTWVzc2FnZTogcmVzcG9uc2UuZGF0YS5jb25maXJtYXRpb25fbWVzc2FnZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvQ29uZmlybWF0aW9uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Ym1pdEZhaWxlZDogdHJ1ZSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZXM6ICdTb21ldGhpbmcgd2VudCB3cm9uZycsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgICAgIHN1Ym1pdEZhaWxlZDogdHJ1ZSxcbiAgICAgICAgICBlcnJvck1lc3NhZ2VzOiBlcnJvci5yZXNwb25zZS5kYXRhLnZhbGlkYXRpb25fbWVzc2FnZXMsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgbmV4dFN0ZXAgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBhY3RpdmVQYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlUGFnZTogYWN0aXZlUGFnZSArIDEsXG4gICAgfSk7XG4gIH07XG5cbiAgcHJldlN0ZXAgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IGFjdGl2ZVBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVQYWdlOiBhY3RpdmVQYWdlIC0gMSxcbiAgICB9KTtcbiAgfTtcblxuICBjaGVja0NvbmRpdGlvbmFsTG9naWMgPSAoY29uZGl0aW9uLCBmaWVsZHMgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IHsgcnVsZXMsIGFjdGlvblR5cGUgfSA9IGNvbmRpdGlvbjtcbiAgICBpZiAoIXJ1bGVzKSByZXR1cm4gdHJ1ZTtcblxuICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSBmaWVsZHMgfHwgdGhpcy5zdGF0ZS5mb3JtVmFsdWVzO1xuXG4gICAgLy8gc2hvdyBvbmx5IGlmIGlzIHNlbGVjdGVkIFwiQWxsIGZpZWxkc1wiIChpdCBzaG91bGQgYmUgdHdlYWtlZCBpbiBmdXR1cmUpXG4gICAgLy8gd29ya3Mgb25seSBcInNob3cvaGlkZSB3aGVuIGZpZWxkIGlzIGVxdWFsIHRvXCJcbiAgICBsZXQgaGlkZUZpZWxkID0gYWN0aW9uVHlwZSAhPT0gJ2hpZGUnO1xuICAgIGNvbnN0IGhpZGVCYXNlZE9uUnVsZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB7IGZpZWxkSWQsIHZhbHVlIH0gPSBydWxlc1tpXTtcbiAgICAgIGNvbnN0IGNvbmRpdGlvbkZpZWxkVmFsdWUgPSBmb3JtVmFsdWVzW2ZpZWxkSWRdLnZhbHVlO1xuXG4gICAgICBjb25zdCBzdHJpbmdWYWx1ZSA9IEFycmF5LmlzQXJyYXkoY29uZGl0aW9uRmllbGRWYWx1ZSlcbiAgICAgICAgPyBjb25kaXRpb25GaWVsZFZhbHVlLmpvaW4oJycpXG4gICAgICAgIDogY29uZGl0aW9uRmllbGRWYWx1ZTtcbiAgICAgIGlmIChzdHJpbmdWYWx1ZSAmJiB2YWx1ZSA9PT0gc3RyaW5nVmFsdWUpIHtcbiAgICAgICAgaGlkZUJhc2VkT25SdWxlc1tpXSA9IGFjdGlvblR5cGUgPT09ICdoaWRlJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhpZGVCYXNlZE9uUnVsZXNbaV0gPSBhY3Rpb25UeXBlICE9PSAnaGlkZSc7XG4gICAgICB9XG4gICAgfVxuICAgIGhpZGVGaWVsZCA9IGhpZGVCYXNlZE9uUnVsZXMuZXZlcnkoaSA9PiBpID09PSB0cnVlKTtcbiAgICAvLyBmb3JtVmFsdWVzW2lkXS5oaWRlRmllbGQgPSBoaWRlRmllbGQ7XG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGZvcm1WYWx1ZXMgfSk7XG4gICAgcmV0dXJuIGhpZGVGaWVsZDtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZm9ybURhdGEsXG4gICAgICBmb3JtVmFsdWVzLFxuICAgICAgc3VibWl0RmFpbGVkLFxuICAgICAgc3VibWl0U3VjY2VzcyxcbiAgICAgIHRvdWNoZWQsXG4gICAgICBzdWJtaXR0aW5nLFxuICAgICAgYWN0aXZlUGFnZSxcbiAgICAgIGlzTXVsdGlwYXJ0LFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlLCBzdWJtaXRJY29uLCBzYXZlU3RhdGVUb0h0bWxGaWVsZCwgc3R5bGVkQ29tcG9uZW50cyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IEJ1dHRvbiwgTG9hZGluZywgR0ZXcmFwcGVyID0gJ2RpdicgfSA9IHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG4gICAgY29uc3QgeyBjc3NDbGFzcyB9ID0gZm9ybURhdGE7XG5cbiAgICBjb25zdCBpc0Rpc2FibGVkID0gT2JqZWN0LmtleXMoZm9ybVZhbHVlcykuc29tZShcbiAgICAgIHggPT4gIWZvcm1WYWx1ZXNbeF0uaGlkZUZpZWxkICYmIGZvcm1WYWx1ZXNbeF0udmFsaWQsXG4gICAgKTtcbiAgICBjb25zdCBpc05leHREaXNhYmxlZCA9IGFjdGl2ZVBhZ2VcbiAgICAgID8gT2JqZWN0LmtleXMoZm9ybVZhbHVlcykuc29tZShcbiAgICAgICAgeCA9PiBmb3JtVmFsdWVzW3hdLnBhZ2VOdW1iZXIgPT09IGFjdGl2ZVBhZ2VcbiAgICAgICAgICAgICYmICFmb3JtVmFsdWVzW3hdLmhpZGVGaWVsZFxuICAgICAgICAgICAgJiYgZm9ybVZhbHVlc1t4XS52YWxpZCxcbiAgICAgIClcbiAgICAgIDogZmFsc2U7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEdGV3JhcHBlclxuICAgICAgICByZWY9eyhlbCkgPT4gKHRoaXMud3JhcHBlclJlZiA9IGVsKX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS13cmFwcGVyXCJcbiAgICAgICAgY3NzPXt7IHBvc2l0aW9uOiAncmVhbHRpdmUnIH19XG4gICAgICAgIGlkPXtgZ3Jhdml0eV9mb3JtXyR7dGhpcy5wcm9wcy5mb3JtSUR9YH1cbiAgICAgID5cbiAgICAgICAge2Zvcm1EYXRhLnRpdGxlID8gbnVsbCA6IExvYWRpbmcgJiYgPExvYWRpbmcgaXNMb2FkaW5nIC8+fVxuXG4gICAgICAgIHtzdWJtaXRGYWlsZWQgJiYgIXN1Ym1pdFN1Y2Nlc3MgJiYgKFxuICAgICAgICAgIDxGb3JtRXJyb3JcbiAgICAgICAgICAgIGZpZWxkcz17Zm9ybVZhbHVlc31cbiAgICAgICAgICAgIGVycm9ycz17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2VzfVxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlPVwiVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHlvdXIgc3VibWlzc2lvblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7c3VibWl0U3VjY2VzcyAmJiB0aGlzLnN0YXRlLmNvbmZpcm1hdGlvbk1lc3NhZ2UgJiYgKFxuICAgICAgICAgIDxGb3JtQ29uZmlybWF0aW9uIGNvbmZpcm1hdGlvbj17dGhpcy5zdGF0ZS5jb25maXJtYXRpb25NZXNzYWdlfSAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHshc3VibWl0U3VjY2VzcyAmJiBmb3JtRGF0YS5maWVsZHMgPyAoXG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIG9uU3VibWl0PXtlID0+IHRoaXMub25TdWJtaXQoZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nzc0NsYXNzfVxuICAgICAgICAgICAgZW5jVHlwZT17aXNNdWx0aXBhcnQgPyAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICBub1ZhbGlkYXRlXG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyhmb3JtRGF0YS50aXRsZSB8fCBmb3JtRGF0YS5kZXNjcmlwdGlvbikgJiYgKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtmb3JtRGF0YS50aXRsZSAmJiB0aXRsZSA/IDxoMyBjbGFzc05hbWU9XCJmb3JtLXRpdGxlXCI+e2Zvcm1EYXRhLnRpdGxlfTwvaDM+IDogbnVsbH1cbiAgICAgICAgICAgICAgICB7Zm9ybURhdGEuZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb3JtLWRlc2NyaXB0aW9uXCI+e2Zvcm1EYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0td3JhcHBlclwiPlxuICAgICAgICAgICAgICA8UmVuZGVyRmllbGRzXG4gICAgICAgICAgICAgICAgc3R5bGVkQ29tcG9uZW50cz17c3R5bGVkQ29tcG9uZW50c31cbiAgICAgICAgICAgICAgICBmaWVsZHM9e2Zvcm1EYXRhLmZpZWxkc31cbiAgICAgICAgICAgICAgICBmb3JtVmFsdWVzPXtmb3JtVmFsdWVzfVxuICAgICAgICAgICAgICAgIHN1Ym1pdEZhaWxlZD17c3VibWl0RmFpbGVkfVxuICAgICAgICAgICAgICAgIHN1Ym1pdFN1Y2Nlc3M9e3N1Ym1pdFN1Y2Nlc3N9XG4gICAgICAgICAgICAgICAgdXBkYXRlRm9ybT17dGhpcy51cGRhdGVGb3JtSGFuZGxlcn1cbiAgICAgICAgICAgICAgICB0b3VjaGVkPXt0b3VjaGVkfVxuICAgICAgICAgICAgICAgIHNldFRvdWNoZWQ9e3RoaXMuc2V0VG91Y2hlZH1cbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXtmb3JtRGF0YS5wYWdpbmF0aW9ufVxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2U9e2FjdGl2ZVBhZ2V9XG4gICAgICAgICAgICAgICAgcHJldlN0ZXA9e3RoaXMucHJldlN0ZXB9XG4gICAgICAgICAgICAgICAgbmV4dFN0ZXA9e3RoaXMubmV4dFN0ZXB9XG4gICAgICAgICAgICAgICAgaXNOZXh0RGlzYWJsZWQ9e2lzTmV4dERpc2FibGVkfVxuICAgICAgICAgICAgICAgIGNoZWNrQ29uZGl0aW9uYWxMb2dpYz17dGhpcy5jaGVja0NvbmRpdGlvbmFsTG9naWN9XG4gICAgICAgICAgICAgICAgc2F2ZVN0YXRlVG9IdG1sRmllbGQ9e3NhdmVTdGF0ZVRvSHRtbEZpZWxkfVxuICAgICAgICAgICAgICAgIGVuYWJsZUhvbmV5cG90PXtmb3JtRGF0YS5lbmFibGVIb25leXBvdH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgeyghZm9ybURhdGEucGFnaW5hdGlvblxuICAgICAgICAgICAgICAgIHx8IChmb3JtRGF0YS5wYWdpbmF0aW9uICYmIGZvcm1EYXRhLnBhZ2luYXRpb24ucGFnZXMubGVuZ3RoID09PSBhY3RpdmVQYWdlKSkgJiYgKFxuICAgICAgICAgICAgICAgIDxTdWJtaXRcbiAgICAgICAgICAgICAgICAgIEJ1dHRvbj17QnV0dG9ufVxuICAgICAgICAgICAgICAgICAgTG9hZGluZz17TG9hZGluZ31cbiAgICAgICAgICAgICAgICAgIGZvcm1EYXRhPXtmb3JtRGF0YX1cbiAgICAgICAgICAgICAgICAgIHN1Ym1pdEljb249e3N1Ym1pdEljb259XG4gICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXtpc0Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgc3VibWl0dGluZz17c3VibWl0dGluZ31cbiAgICAgICAgICAgICAgICAgIHByZXZTdGVwPXt0aGlzLnByZXZTdGVwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgJydcbiAgICAgICAgKX1cbiAgICAgIDwvR0ZXcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cblxuR3Jhdml0eUZvcm0uZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogdHJ1ZSxcbiAgc3VibWl0SWNvbjogZmFsc2UsXG4gIHNhdmVTdGF0ZVRvSHRtbEZpZWxkOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXZpdHlGb3JtO1xuIl19
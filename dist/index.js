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
        as: GFWrapper,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHcmF2aXR5Rm9ybSIsInByb3BzIiwiaWQiLCJzZXRTdGF0ZSIsInRvdWNoZWQiLCJzdGF0ZSIsImV2ZW50IiwiZmllbGQiLCJmb3JtVmFsdWVzIiwiY29uZGl0aW9hbmxJZHMiLCJjb25kaXRpb25GaWVsZHMiLCJ0eXBlIiwiaXNSZXF1aXJlZCIsInZhbHVlIiwidmFsdWVzIiwiaW5kZXgiLCJpbmRleE9mIiwidGFyZ2V0Iiwic3BsaWNlIiwicHVzaCIsInN1YklkIiwiZGF0ZUxhYmVsIiwidmFsIiwibGFiZWwiLCJjaGVja2VkIiwiY3NzQ2xhc3MiLCJ2YWxpZCIsImkiLCJsZW5ndGgiLCJoaWRlIiwiY2hlY2tDb25kaXRpb25hbExvZ2ljIiwiY29uZGl0aW9uYWxMb2dpYyIsImhpZGVGaWVsZCIsInBhZ2VOdW1iZXIiLCJvbkNoYW5nZSIsInJlY3QiLCJ3cmFwcGVyUmVmIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvIiwidG9wIiwicHJldmVudERlZmF1bHQiLCJzdWJtaXR0aW5nIiwic3VibWl0U3VjY2VzcyIsInN1Ym1pdEZhaWxlZCIsImNvbmZpcm1hdGlvbk1lc3NhZ2UiLCJlcnJvck1lc3NhZ2VzIiwiZm9ybUlEIiwiYmFja2VuZFVybCIsImdmU3VibWlzc2lvblVybCIsInN1YnN0cmluZyIsImRhdGEiLCJGb3JtRGF0YSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImlzX3ZhbGlkIiwiY29uZmlybWF0aW9uX21lc3NhZ2UiLCJzY3JvbGxUb0NvbmZpcm1hdGlvbiIsImVycm9yIiwidmFsaWRhdGlvbl9tZXNzYWdlcyIsImFjdGl2ZVBhZ2UiLCJlIiwiY29uZGl0aW9uIiwiZmllbGRzIiwicnVsZXMiLCJhY3Rpb25UeXBlIiwiaGlkZUJhc2VkT25SdWxlcyIsImZpZWxkSWQiLCJjb25kaXRpb25GaWVsZFZhbHVlIiwic3RyaW5nVmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJqb2luIiwiZXZlcnkiLCJsb2FkaW5nIiwiaXNWYWxpZCIsImZvcm1EYXRhIiwiaXNNdWx0aXBhcnQiLCJwb3B1bGF0ZWRGaWVsZHMiLCJfaXNNb3VudGVkIiwiZ2V0IiwiZm9ybSIsImhhc1BvcHVsYXRpb24iLCJpbnB1dE5hbWUiLCJjaG9pY2VzIiwiZmlsdGVyIiwiY2hvaWNlIiwiaXNTZWxlY3RlZCIsIm1hcCIsInByZXNlbGVjdGVkIiwiZmluZCIsInNlbGVjdGVkT3B0aW9uIiwiaXRlbSIsInRleHQiLCJkZWZhdWx0VmFsdWUiLCJ0bXBGaWVsZCIsImlkcyIsInBhcnNlSW50IiwicGFnaW5hdGlvbiIsInRpdGxlIiwic3VibWl0SWNvbiIsInNhdmVTdGF0ZVRvSHRtbEZpZWxkIiwic3R5bGVkQ29tcG9uZW50cyIsIkJ1dHRvbiIsIkxvYWRpbmciLCJHRldyYXBwZXIiLCJpc0Rpc2FibGVkIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJ4IiwiaXNOZXh0RGlzYWJsZWQiLCJlbCIsInBvc2l0aW9uIiwib25TdWJtaXQiLCJ1bmRlZmluZWQiLCJkZXNjcmlwdGlvbiIsInVwZGF0ZUZvcm1IYW5kbGVyIiwic2V0VG91Y2hlZCIsInByZXZTdGVwIiwibmV4dFN0ZXAiLCJlbmFibGVIb25leXBvdCIsInBhZ2VzIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxXOzs7OztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLHFGQUFNQSxLQUFOOztBQURpQixpRUE0R04sVUFBQ0MsRUFBRCxFQUFRO0FBQ25CLFlBQUtDLFFBQUwsQ0FBYztBQUNaQyxRQUFBQSxP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QUFHRSxRQUFBLFFBQVEsRUFBRTVCLFFBSFo7QUFJRSxRQUFBLFVBQVUsRUFBRXdCLFVBSmQ7QUFLRSxRQUFBLFVBQVUsRUFBRU0sVUFMZDtBQU1FLFFBQUEsVUFBVSxFQUFFbEUsVUFOZDtBQU9FLFFBQUEsUUFBUSxFQUFFLEtBQUsrRTtBQVBqQixRQXJCSixDQWZGLENBREQsR0FrREMsRUF0RUosQ0FERjtBQTJFRDs7OztFQXJZdUJJLGdCOztBQXdZMUJqSSxXQUFXLENBQUNrSSxZQUFaLEdBQTJCO0FBQ3pCekIsRUFBQUEsS0FBSyxFQUFFLElBRGtCO0FBRXpCQyxFQUFBQSxVQUFVLEVBQUUsS0FGYTtBQUd6QkMsRUFBQUEsb0JBQW9CLEVBQUU7QUFIRyxDQUEzQjtlQU1lM0csVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFJlbmRlckZpZWxkcyBmcm9tICcuL0Zvcm1FbGVtZW50cy9SZW5kZXJGaWVsZHMnO1xuaW1wb3J0IEZvcm1FcnJvciBmcm9tICcuL0Zvcm1FbGVtZW50cy9Gb3JtRXJyb3InO1xuaW1wb3J0IEZvcm1Db25maXJtYXRpb24gZnJvbSAnLi9Gb3JtRWxlbWVudHMvRm9ybUNvbmZpcm1hdGlvbic7XG5pbXBvcnQgeyB2YWxpZGF0ZUZpZWxkIH0gZnJvbSAnLi9IZWxwZXJzL3ZhbGlkYXRpb24nO1xuaW1wb3J0IFN1Ym1pdCBmcm9tICcuL0Zvcm1FbGVtZW50cy9TdWJtaXQnO1xuXG5jbGFzcyBHcmF2aXR5Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdWJtaXRGYWlsZWQ6IGZhbHNlLFxuICAgICAgZXJyb3JNZXNzYWdlczogZmFsc2UsXG4gICAgICBmb3JtVmFsdWVzOiB7fSxcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgIHN1Ym1pdFN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgY29uZmlybWF0aW9uTWVzc2FnZTogZmFsc2UsXG4gICAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICAgIGZvcm1EYXRhOiB7fSxcbiAgICAgIHRvdWNoZWQ6IHt9LFxuICAgICAgYWN0aXZlUGFnZTogZmFsc2UsXG4gICAgICBjb25kaXRpb25GaWVsZHM6IHt9LFxuICAgICAgY29uZGl0aW9hbmxJZHM6IHt9LFxuICAgICAgaXNNdWx0aXBhcnQ6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGZvcm1JRCwgYmFja2VuZFVybCwgcG9wdWxhdGVkRmllbGRzIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgbGV0IGlzTXVsdGlwYXJ0ID0gZmFsc2U7XG4gICAgY29uc3QgZm9ybSA9IGF3YWl0IGF4aW9zXG4gICAgICAuZ2V0KGAke2JhY2tlbmRVcmx9LyR7Zm9ybUlEfWApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKVxuICAgICAgLmNhdGNoKCgpID0+IGZhbHNlKTtcblxuICAgIGlmIChmb3JtICYmIHRoaXMuX2lzTW91bnRlZCkge1xuICAgICAgY29uc3QgZm9ybVZhbHVlcyA9IHt9O1xuICAgICAgY29uc3QgY29uZGl0aW9uRmllbGRzID0gW107XG4gICAgICBjb25zdCBjb25kaXRpb2FubElkcyA9IFtdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIGZvcm0uZmllbGRzKSB7XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgY29uc3QgaGFzUG9wdWxhdGlvbiA9IGZpZWxkLmlucHV0TmFtZSAmJiBwb3B1bGF0ZWRGaWVsZHMgJiYgcG9wdWxhdGVkRmllbGRzW2ZpZWxkLmlucHV0TmFtZV07XG4gICAgICAgIGlmIChmaWVsZC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgdmFsdWUgPSBmaWVsZC5jaG9pY2VzXG4gICAgICAgICAgICAuZmlsdGVyKGNob2ljZSA9PiAoaGFzUG9wdWxhdGlvbiA/IGNob2ljZS52YWx1ZSA9PT0gcG9wdWxhdGVkRmllbGRzW2ZpZWxkLmlucHV0TmFtZV0gOiBjaG9pY2UuaXNTZWxlY3RlZCkpXG4gICAgICAgICAgICAubWFwKGNob2ljZSA9PiBjaG9pY2UudmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICBpZiAoaGFzUG9wdWxhdGlvbikge1xuICAgICAgICAgICAgdmFsdWUgPSBwb3B1bGF0ZWRGaWVsZHNbZmllbGQuaW5wdXROYW1lXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcHJlc2VsZWN0ZWQgPSBmaWVsZC5jaG9pY2VzLmZpbmQoY2hvaWNlID0+IGNob2ljZS5pc1NlbGVjdGVkKTtcbiAgICAgICAgICAgIHZhbHVlID0gcHJlc2VsZWN0ZWQgPyBwcmVzZWxlY3RlZC52YWx1ZSA6ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gZmllbGQuY2hvaWNlc1xuICAgICAgICAgICAgLmZpbHRlcihjaG9pY2UgPT4gKGhhc1BvcHVsYXRpb24gPyBjaG9pY2UudmFsdWUgPT09IHBvcHVsYXRlZEZpZWxkc1tmaWVsZC5pbnB1dE5hbWVdIDogY2hvaWNlLmlzU2VsZWN0ZWQpKVxuICAgICAgICAgICAgLm1hcChpdGVtID0+ICh7IHZhbHVlOiBpdGVtLnZhbHVlLCBsYWJlbDogaXRlbS50ZXh0IH0pKTtcbiAgICAgICAgICB2YWx1ZSA9IHNlbGVjdGVkT3B0aW9uICYmIHNlbGVjdGVkT3B0aW9uLmxlbmd0aCA+IDAgPyBzZWxlY3RlZE9wdGlvblswXSA6ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gaGFzUG9wdWxhdGlvbiA/IHBvcHVsYXRlZEZpZWxkc1tmaWVsZC5pbnB1dE5hbWVdIDogZmllbGQuZGVmYXVsdFZhbHVlO1xuICAgICAgICAgIGlmIChmaWVsZC50eXBlID09PSAnZmlsZXVwbG9hZCcpIHtcbiAgICAgICAgICAgIGlzTXVsdGlwYXJ0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBncmFiIGFsbCBjb25kaXRpb25hbCBsb2dpYyBmaWVsZHNcbiAgICAgICAgaWYgKGZpZWxkLmNvbmRpdGlvbmFsTG9naWMpIHtcbiAgICAgICAgICBjb25zdCB0bXBGaWVsZCA9IHtcbiAgICAgICAgICAgIGlkOiBmaWVsZC5pZCxcbiAgICAgICAgICAgIGNvbmRpdGlvbmFsTG9naWM6IGZpZWxkLmNvbmRpdGlvbmFsTG9naWMsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBjb25zdCBpZHMgPSBmaWVsZC5jb25kaXRpb25hbExvZ2ljLnJ1bGVzLm1hcChpdGVtID0+IGl0ZW0uZmllbGRJZCk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQoaWRzW2ldKTtcbiAgICAgICAgICAgIGlmIChjb25kaXRpb2FubElkcy5pbmRleE9mKGlkKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgY29uZGl0aW9hbmxJZHMucHVzaChpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbmRpdGlvbkZpZWxkcy5wdXNoKHRtcEZpZWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1WYWx1ZXNbZmllbGQuaWRdID0ge1xuICAgICAgICAgIHZhbGlkOiB2YWxpZGF0ZUZpZWxkKHZhbHVlLCBmaWVsZCksXG4gICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgbGFiZWw6IGZpZWxkLmxhYmVsLFxuICAgICAgICAgIHBhZ2VOdW1iZXI6IGZpZWxkLnBhZ2VOdW1iZXIsXG4gICAgICAgICAgY3NzQ2xhc3M6IGZpZWxkLmNzc0NsYXNzLFxuICAgICAgICAgIGlzUmVxdWlyZWQ6IGZpZWxkLmlzUmVxdWlyZWQsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICAvLyBjaGVjayBjb25kaXRpb24gbG9naWNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZGl0aW9uRmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvcm1WYWx1ZXNbY29uZGl0aW9uRmllbGRzW2ldLmlkXS5oaWRlRmllbGQgPSB0aGlzLmNoZWNrQ29uZGl0aW9uYWxMb2dpYyhcbiAgICAgICAgICBjb25kaXRpb25GaWVsZHNbaV0uY29uZGl0aW9uYWxMb2dpYyxcbiAgICAgICAgICBmb3JtVmFsdWVzLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9ybURhdGE6IGZvcm0sXG4gICAgICAgIGZvcm1WYWx1ZXMsXG4gICAgICAgIGFjdGl2ZVBhZ2U6IGZvcm0ucGFnaW5hdGlvbiA/IDEgOiBmYWxzZSxcbiAgICAgICAgY29uZGl0aW9uRmllbGRzLFxuICAgICAgICBjb25kaXRpb2FubElkcyxcbiAgICAgICAgaXNNdWx0aXBhcnQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHNldFRvdWNoZWQgPSAoaWQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRvdWNoZWQ6IHsgLi4udGhpcy5zdGF0ZS50b3VjaGVkLCBbaWRdOiB0cnVlIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgdXBkYXRlRm9ybUhhbmRsZXIgPSAoZXZlbnQsIGZpZWxkKSA9PiB7XG4gICAgY29uc3QgeyBmb3JtVmFsdWVzLCBjb25kaXRpb2FubElkcywgY29uZGl0aW9uRmllbGRzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCB7IGlkLCB0eXBlLCBpc1JlcXVpcmVkIH0gPSBmaWVsZDtcbiAgICAvLyBTZXQgbmV3IHZhbHVlXG4gICAgbGV0IHZhbHVlO1xuICAgIGlmIChmaWVsZC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBbLi4uZm9ybVZhbHVlc1tmaWVsZC5pZF0udmFsdWVdO1xuICAgICAgY29uc3QgaW5kZXggPSB2YWx1ZXMuaW5kZXhPZihldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgdmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZXMucHVzaChldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgfVxuICAgICAgdmFsdWUgPSB2YWx1ZXM7XG4gICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09ICdkYXRlJykge1xuICAgICAgY29uc3QgeyBzdWJJZCwgZGF0ZUxhYmVsIH0gPSBmaWVsZDtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IFsuLi5mb3JtVmFsdWVzW2ZpZWxkLmlkXS52YWx1ZV07XG4gICAgICB2YWx1ZXNbc3ViSWRdID0ge1xuICAgICAgICB2YWw6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgICAgbGFiZWw6IGRhdGVMYWJlbCxcbiAgICAgIH07XG4gICAgICB2YWx1ZSA9IHZhbHVlcztcbiAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT0gJ2NvbnNlbnQnKSB7XG4gICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldCA/IGV2ZW50LnRhcmdldC5jaGVja2VkIDogJ251bGwnO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldCA/IGV2ZW50LnRhcmdldC52YWx1ZSA6ICdudWxsJztcbiAgICB9XG4gICAgLy8gaWYgZmllbGQgaXMgSUJBTlxuICAgIGlmICh0eXBlID09PSAndGV4dCcgJiYgZmllbGQuY3NzQ2xhc3MuaW5kZXhPZignaWJhbicpID4gLTEpIHtcbiAgICAgIHR5cGUgPSAnaWJhbic7XG4gICAgfVxuICAgXG4gICAgLy8gVmFsaWRhdGUgZmllbGRcbiAgICBjb25zdCB2YWxpZCA9IHZhbGlkYXRlRmllbGQodmFsdWUsIGZpZWxkKTtcblxuICAgIC8vIGlmIGZpZWxkIElEIGlzIHNvbWV3aGVyZSBpbiBjb25kaXRpb25hbCBmaWVsZHNcbiAgICAvLyByZWNhbGN1bGF0ZSBhbGwgY29uZGl0aW9uc1xuICAgIGlmIChjb25kaXRpb2FubElkcy5pbmRleE9mKGlkKSAhPT0gLTEpIHtcbiAgICAgIGZvcm1WYWx1ZXNbaWRdLnZhbHVlID0gdmFsdWU7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmRpdGlvbkZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB7IGlkIH0gPSBjb25kaXRpb25GaWVsZHNbaV07XG4gICAgICAgIGNvbnN0IGhpZGUgPSB0aGlzLmNoZWNrQ29uZGl0aW9uYWxMb2dpYyhjb25kaXRpb25GaWVsZHNbaV0uY29uZGl0aW9uYWxMb2dpYywgZm9ybVZhbHVlcyk7XG4gICAgICAgIGZvcm1WYWx1ZXNbaWRdLmhpZGVGaWVsZCA9IGhpZGU7XG4gICAgICAgIGlmIChoaWRlKSB7XG4gICAgICAgICAgaWYgKGZvcm1WYWx1ZXNbaWRdLmlzUmVxdWlyZWQgJiYgaGlkZSkge1xuICAgICAgICAgICAgZm9ybVZhbHVlc1tpZF0udmFsdWUgPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9ybVZhbHVlc1tpZF0udmFsaWQgPSAhIWZvcm1WYWx1ZXNbaWRdLmlzUmVxdWlyZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBmb3JtVmFsdWVzOiB7XG4gICAgICAgICAgLi4uZm9ybVZhbHVlcyxcbiAgICAgICAgICBbaWRdOiB7XG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgdmFsaWQsXG4gICAgICAgICAgICBsYWJlbDogZmllbGQubGFiZWwsXG4gICAgICAgICAgICBwYWdlTnVtYmVyOiBmaWVsZC5wYWdlTnVtYmVyLFxuICAgICAgICAgICAgY3NzQ2xhc3M6IGZpZWxkLmNzc0NsYXNzLFxuICAgICAgICAgICAgaXNSZXF1aXJlZDogZmllbGQuaXNSZXF1aXJlZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgLy8gcGFzcyBzdGF0ZSB0byBwYXJlbnQgY29tcG9uZW50XG4gICAgICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKHRoaXMuc3RhdGUuZm9ybVZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgKTtcbiAgfTtcblxuICBzY3JvbGxUb0NvbmZpcm1hdGlvbiA9ICgpID0+IHsgXG4gICAgY29uc3QgcmVjdCA9IHRoaXMud3JhcHBlclJlZiA/IHRoaXMud3JhcHBlclJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IGZhbHNlO1xuICAgIGlmIChyZWN0ICYmIHdpbmRvdykge1xuICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IHNjcm9sbFRvcCArIHJlY3QudG9wIC0gMTAwLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3VibWl0dGluZzogdHJ1ZSxcbiAgICAgIHN1Ym1pdFN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgc3VibWl0RmFpbGVkOiBmYWxzZSxcbiAgICAgIGNvbmZpcm1hdGlvbk1lc3NhZ2U6IGZhbHNlLFxuICAgICAgZXJyb3JNZXNzYWdlczogZmFsc2UsXG4gICAgfSk7XG4gICAgY29uc3QgeyBmb3JtSUQsIGJhY2tlbmRVcmwgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZ2ZTdWJtaXNzaW9uVXJsID0gYmFja2VuZFVybC5zdWJzdHJpbmcoMCwgYmFja2VuZFVybC5pbmRleE9mKCcvd3AtanNvbicpKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KGAke2dmU3VibWlzc2lvblVybH0vd3AtanNvbi9nZi92Mi9mb3Jtcy8ke2Zvcm1JRH0vc3VibWlzc2lvbnNgLCBkYXRhKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEuaXNfdmFsaWQpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc3VibWl0U3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvbk1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEuY29uZmlybWF0aW9uX21lc3NhZ2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5zY3JvbGxUb0NvbmZpcm1hdGlvbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICAgICAgICBzdWJtaXRGYWlsZWQ6IHRydWUsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VzOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgICAgICBzdWJtaXRGYWlsZWQ6IHRydWUsXG4gICAgICAgICAgZXJyb3JNZXNzYWdlczogZXJyb3IucmVzcG9uc2UuZGF0YS52YWxpZGF0aW9uX21lc3NhZ2VzLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIG5leHRTdGVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgYWN0aXZlUGFnZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZVBhZ2U6IGFjdGl2ZVBhZ2UgKyAxLFxuICAgIH0pO1xuICB9O1xuXG4gIHByZXZTdGVwID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBhY3RpdmVQYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlUGFnZTogYWN0aXZlUGFnZSAtIDEsXG4gICAgfSk7XG4gIH07XG5cbiAgY2hlY2tDb25kaXRpb25hbExvZ2ljID0gKGNvbmRpdGlvbiwgZmllbGRzID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCB7IHJ1bGVzLCBhY3Rpb25UeXBlIH0gPSBjb25kaXRpb247XG4gICAgaWYgKCFydWxlcykgcmV0dXJuIHRydWU7XG5cbiAgICBjb25zdCBmb3JtVmFsdWVzID0gZmllbGRzIHx8IHRoaXMuc3RhdGUuZm9ybVZhbHVlcztcblxuICAgIC8vIHNob3cgb25seSBpZiBpcyBzZWxlY3RlZCBcIkFsbCBmaWVsZHNcIiAoaXQgc2hvdWxkIGJlIHR3ZWFrZWQgaW4gZnV0dXJlKVxuICAgIC8vIHdvcmtzIG9ubHkgXCJzaG93L2hpZGUgd2hlbiBmaWVsZCBpcyBlcXVhbCB0b1wiXG4gICAgbGV0IGhpZGVGaWVsZCA9IGFjdGlvblR5cGUgIT09ICdoaWRlJztcbiAgICBjb25zdCBoaWRlQmFzZWRPblJ1bGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgeyBmaWVsZElkLCB2YWx1ZSB9ID0gcnVsZXNbaV07XG4gICAgICBjb25zdCBjb25kaXRpb25GaWVsZFZhbHVlID0gZm9ybVZhbHVlc1tmaWVsZElkXS52YWx1ZTtcblxuICAgICAgY29uc3Qgc3RyaW5nVmFsdWUgPSBBcnJheS5pc0FycmF5KGNvbmRpdGlvbkZpZWxkVmFsdWUpXG4gICAgICAgID8gY29uZGl0aW9uRmllbGRWYWx1ZS5qb2luKCcnKVxuICAgICAgICA6IGNvbmRpdGlvbkZpZWxkVmFsdWU7XG4gICAgICBpZiAoc3RyaW5nVmFsdWUgJiYgdmFsdWUgPT09IHN0cmluZ1ZhbHVlKSB7XG4gICAgICAgIGhpZGVCYXNlZE9uUnVsZXNbaV0gPSBhY3Rpb25UeXBlID09PSAnaGlkZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoaWRlQmFzZWRPblJ1bGVzW2ldID0gYWN0aW9uVHlwZSAhPT0gJ2hpZGUnO1xuICAgICAgfVxuICAgIH1cbiAgICBoaWRlRmllbGQgPSBoaWRlQmFzZWRPblJ1bGVzLmV2ZXJ5KGkgPT4gaSA9PT0gdHJ1ZSk7XG4gICAgLy8gZm9ybVZhbHVlc1tpZF0uaGlkZUZpZWxkID0gaGlkZUZpZWxkO1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBmb3JtVmFsdWVzIH0pO1xuICAgIHJldHVybiBoaWRlRmllbGQ7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZvcm1EYXRhLFxuICAgICAgZm9ybVZhbHVlcyxcbiAgICAgIHN1Ym1pdEZhaWxlZCxcbiAgICAgIHN1Ym1pdFN1Y2Nlc3MsXG4gICAgICB0b3VjaGVkLFxuICAgICAgc3VibWl0dGluZyxcbiAgICAgIGFjdGl2ZVBhZ2UsXG4gICAgICBpc011bHRpcGFydCxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7XG4gICAgICB0aXRsZSwgc3VibWl0SWNvbiwgc2F2ZVN0YXRlVG9IdG1sRmllbGQsIHN0eWxlZENvbXBvbmVudHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBCdXR0b24sIExvYWRpbmcsIEdGV3JhcHBlciA9ICdkaXYnIH0gPSBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuXG4gICAgY29uc3QgeyBjc3NDbGFzcyB9ID0gZm9ybURhdGE7XG5cbiAgICBjb25zdCBpc0Rpc2FibGVkID0gT2JqZWN0LmtleXMoZm9ybVZhbHVlcykuc29tZShcbiAgICAgIHggPT4gIWZvcm1WYWx1ZXNbeF0uaGlkZUZpZWxkICYmIGZvcm1WYWx1ZXNbeF0udmFsaWQsXG4gICAgKTtcbiAgICBjb25zdCBpc05leHREaXNhYmxlZCA9IGFjdGl2ZVBhZ2VcbiAgICAgID8gT2JqZWN0LmtleXMoZm9ybVZhbHVlcykuc29tZShcbiAgICAgICAgeCA9PiBmb3JtVmFsdWVzW3hdLnBhZ2VOdW1iZXIgPT09IGFjdGl2ZVBhZ2VcbiAgICAgICAgICAmJiAhZm9ybVZhbHVlc1t4XS5oaWRlRmllbGRcbiAgICAgICAgICAmJiBmb3JtVmFsdWVzW3hdLnZhbGlkLFxuICAgICAgKVxuICAgICAgOiBmYWxzZTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBhcz17R0ZXcmFwcGVyfVxuICAgICAgICByZWY9eyhlbCkgPT4gKHRoaXMud3JhcHBlclJlZiA9IGVsKX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS13cmFwcGVyXCJcbiAgICAgICAgY3NzPXt7IHBvc2l0aW9uOiAncmVhbHRpdmUnIH19XG4gICAgICAgIGlkPXtgZ3Jhdml0eV9mb3JtXyR7dGhpcy5wcm9wcy5mb3JtSUR9YH1cbiAgICAgID5cbiAgICAgICAge2Zvcm1EYXRhLnRpdGxlID8gbnVsbCA6IExvYWRpbmcgJiYgPExvYWRpbmcgaXNMb2FkaW5nIC8+fVxuXG4gICAgICAgIHtzdWJtaXRGYWlsZWQgJiYgIXN1Ym1pdFN1Y2Nlc3MgJiYgKFxuICAgICAgICAgIDxGb3JtRXJyb3JcbiAgICAgICAgICAgIGZpZWxkcz17Zm9ybVZhbHVlc31cbiAgICAgICAgICAgIGVycm9ycz17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2VzfVxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlPVwiVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHlvdXIgc3VibWlzc2lvblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7c3VibWl0U3VjY2VzcyAmJiB0aGlzLnN0YXRlLmNvbmZpcm1hdGlvbk1lc3NhZ2UgJiYgKFxuICAgICAgICAgIDxGb3JtQ29uZmlybWF0aW9uIGNvbmZpcm1hdGlvbj17dGhpcy5zdGF0ZS5jb25maXJtYXRpb25NZXNzYWdlfSAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHshc3VibWl0U3VjY2VzcyAmJiBmb3JtRGF0YS5maWVsZHMgPyAoXG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIG9uU3VibWl0PXtlID0+IHRoaXMub25TdWJtaXQoZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nzc0NsYXNzfVxuICAgICAgICAgICAgZW5jVHlwZT17aXNNdWx0aXBhcnQgPyAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICBub1ZhbGlkYXRlXG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyhmb3JtRGF0YS50aXRsZSB8fCBmb3JtRGF0YS5kZXNjcmlwdGlvbikgJiYgKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtmb3JtRGF0YS50aXRsZSAmJiB0aXRsZSA/IDxoMyBjbGFzc05hbWU9XCJmb3JtLXRpdGxlXCI+e2Zvcm1EYXRhLnRpdGxlfTwvaDM+IDogbnVsbH1cbiAgICAgICAgICAgICAgICB7Zm9ybURhdGEuZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb3JtLWRlc2NyaXB0aW9uXCI+e2Zvcm1EYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0td3JhcHBlclwiPlxuICAgICAgICAgICAgICA8UmVuZGVyRmllbGRzXG4gICAgICAgICAgICAgICAgc3R5bGVkQ29tcG9uZW50cz17c3R5bGVkQ29tcG9uZW50c31cbiAgICAgICAgICAgICAgICBmaWVsZHM9e2Zvcm1EYXRhLmZpZWxkc31cbiAgICAgICAgICAgICAgICBmb3JtVmFsdWVzPXtmb3JtVmFsdWVzfVxuICAgICAgICAgICAgICAgIHN1Ym1pdEZhaWxlZD17c3VibWl0RmFpbGVkfVxuICAgICAgICAgICAgICAgIHN1Ym1pdFN1Y2Nlc3M9e3N1Ym1pdFN1Y2Nlc3N9XG4gICAgICAgICAgICAgICAgdXBkYXRlRm9ybT17dGhpcy51cGRhdGVGb3JtSGFuZGxlcn1cbiAgICAgICAgICAgICAgICB0b3VjaGVkPXt0b3VjaGVkfVxuICAgICAgICAgICAgICAgIHNldFRvdWNoZWQ9e3RoaXMuc2V0VG91Y2hlZH1cbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXtmb3JtRGF0YS5wYWdpbmF0aW9ufVxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2U9e2FjdGl2ZVBhZ2V9XG4gICAgICAgICAgICAgICAgcHJldlN0ZXA9e3RoaXMucHJldlN0ZXB9XG4gICAgICAgICAgICAgICAgbmV4dFN0ZXA9e3RoaXMubmV4dFN0ZXB9XG4gICAgICAgICAgICAgICAgaXNOZXh0RGlzYWJsZWQ9e2lzTmV4dERpc2FibGVkfVxuICAgICAgICAgICAgICAgIGNoZWNrQ29uZGl0aW9uYWxMb2dpYz17dGhpcy5jaGVja0NvbmRpdGlvbmFsTG9naWN9XG4gICAgICAgICAgICAgICAgc2F2ZVN0YXRlVG9IdG1sRmllbGQ9e3NhdmVTdGF0ZVRvSHRtbEZpZWxkfVxuICAgICAgICAgICAgICAgIGVuYWJsZUhvbmV5cG90PXtmb3JtRGF0YS5lbmFibGVIb25leXBvdH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgeyghZm9ybURhdGEucGFnaW5hdGlvblxuICAgICAgICAgICAgICAgIHx8IChmb3JtRGF0YS5wYWdpbmF0aW9uICYmIGZvcm1EYXRhLnBhZ2luYXRpb24ucGFnZXMubGVuZ3RoID09PSBhY3RpdmVQYWdlKSkgJiYgKFxuICAgICAgICAgICAgICAgIDxTdWJtaXRcbiAgICAgICAgICAgICAgICAgIEJ1dHRvbj17QnV0dG9ufVxuICAgICAgICAgICAgICAgICAgTG9hZGluZz17TG9hZGluZ31cbiAgICAgICAgICAgICAgICAgIGZvcm1EYXRhPXtmb3JtRGF0YX1cbiAgICAgICAgICAgICAgICAgIHN1Ym1pdEljb249e3N1Ym1pdEljb259XG4gICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXtpc0Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgc3VibWl0dGluZz17c3VibWl0dGluZ31cbiAgICAgICAgICAgICAgICAgIHByZXZTdGVwPXt0aGlzLnByZXZTdGVwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgJydcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuR3Jhdml0eUZvcm0uZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogdHJ1ZSxcbiAgc3VibWl0SWNvbjogZmFsc2UsXG4gIHNhdmVTdGF0ZVRvSHRtbEZpZWxkOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXZpdHlGb3JtO1xuIl19
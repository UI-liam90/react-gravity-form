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
      }); // pass state to parent component


      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(formValues);
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
        var _this$props2, formID, backendUrl, isMultipart, form, formValues, conditionFields, conditioanlIds, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, field, value, preselected, tmpField, ids, _i, id, i;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$props2 = this.props, formID = _this$props2.formID, backendUrl = _this$props2.backendUrl;
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
                  _context2.next = 31;
                  break;
                }

                formValues = {};
                conditionFields = [];
                conditioanlIds = []; // eslint-disable-next-line no-restricted-syntax

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 13;

                for (_iterator = form.fields[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  field = _step.value;
                  value = void 0;

                  if (field.type === 'checkbox') {
                    value = field.choices.filter(function (choice) {
                      return choice.isSelected;
                    }).map(function (choice) {
                      return choice.value;
                    });
                  } else if (field.type === 'radio') {
                    preselected = field.choices.find(function (choice) {
                      return choice.isSelected;
                    });
                    value = preselected ? preselected.value : '';
                  } else {
                    value = field.defaultValue;

                    if (field.type === 'fileupload') {
                      isMultipart = true;
                    }
                  } // grab all conditional logic fields


                  if (field.conditionalLogic) {
                    tmpField = {
                      id: field.id,
                      conditionalLogic: field.conditionalLogic
                    };
                    ids = field.conditionalLogic.rules.map(function (item) {
                      return item.fieldId;
                    });

                    for (_i = 0; _i < ids.length; _i++) {
                      id = parseInt(ids[_i]);

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
                } // check condition logic


                _context2.next = 21;
                break;

              case 17:
                _context2.prev = 17;
                _context2.t0 = _context2["catch"](13);
                _didIteratorError = true;
                _iteratorError = _context2.t0;

              case 21:
                _context2.prev = 21;
                _context2.prev = 22;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 24:
                _context2.prev = 24;

                if (!_didIteratorError) {
                  _context2.next = 27;
                  break;
                }

                throw _iteratorError;

              case 27:
                return _context2.finish(24);

              case 28:
                return _context2.finish(21);

              case 29:
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

              case 31:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[13, 17, 21, 29], [22,, 24, 28]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHcmF2aXR5Rm9ybSIsInByb3BzIiwiaWQiLCJzZXRTdGF0ZSIsInRvdWNoZWQiLCJzdGF0ZSIsImV2ZW50IiwiZmllbGQiLCJmb3JtVmFsdWVzIiwiY29uZGl0aW9hbmxJZHMiLCJjb25kaXRpb25GaWVsZHMiLCJ0eXBlIiwiaXNSZXF1aXJlZCIsInZhbHVlIiwidmFsdWVzIiwiaW5kZXgiLCJpbmRleE9mIiwidGFyZ2V0Iiwic3BsaWNlIiwicHVzaCIsInN1YklkIiwiZGF0ZUxhYmVsIiwidmFsIiwibGFiZWwiLCJjc3NDbGFzcyIsInZhbGlkIiwiaSIsImxlbmd0aCIsImhpZGUiLCJjaGVja0NvbmRpdGlvbmFsTG9naWMiLCJjb25kaXRpb25hbExvZ2ljIiwiaGlkZUZpZWxkIiwicGFnZU51bWJlciIsIm9uQ2hhbmdlIiwicHJldmVudERlZmF1bHQiLCJzdWJtaXR0aW5nIiwic3VibWl0U3VjY2VzcyIsInN1Ym1pdEZhaWxlZCIsImNvbmZpcm1hdGlvbk1lc3NhZ2UiLCJlcnJvck1lc3NhZ2VzIiwiZm9ybUlEIiwiYmFja2VuZFVybCIsImdmU3VibWlzc2lvblVybCIsInN1YnN0cmluZyIsImRhdGEiLCJGb3JtRGF0YSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImlzX3ZhbGlkIiwiY29uZmlybWF0aW9uX21lc3NhZ2UiLCJlcnJvciIsInZhbGlkYXRpb25fbWVzc2FnZXMiLCJhY3RpdmVQYWdlIiwiZSIsImNvbmRpdGlvbiIsImZpZWxkcyIsInJ1bGVzIiwiYWN0aW9uVHlwZSIsImhpZGVCYXNlZE9uUnVsZXMiLCJmaWVsZElkIiwiY29uZGl0aW9uRmllbGRWYWx1ZSIsInN0cmluZ1ZhbHVlIiwiQXJyYXkiLCJpc0FycmF5Iiwiam9pbiIsImV2ZXJ5IiwibG9hZGluZyIsImlzVmFsaWQiLCJmb3JtRGF0YSIsImlzTXVsdGlwYXJ0IiwiX2lzTW91bnRlZCIsImdldCIsImZvcm0iLCJjaG9pY2VzIiwiZmlsdGVyIiwiY2hvaWNlIiwiaXNTZWxlY3RlZCIsIm1hcCIsInByZXNlbGVjdGVkIiwiZmluZCIsImRlZmF1bHRWYWx1ZSIsInRtcEZpZWxkIiwiaWRzIiwiaXRlbSIsInBhcnNlSW50IiwicGFnaW5hdGlvbiIsInRpdGxlIiwic3VibWl0SWNvbiIsInNhdmVTdGF0ZVRvSHRtbEZpZWxkIiwic3R5bGVkQ29tcG9uZW50cyIsIkJ1dHRvbiIsIkxvYWRpbmciLCJHRldyYXBwZXIiLCJpc0Rpc2FibGVkIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJ4IiwiaXNOZXh0RGlzYWJsZWQiLCJwb3NpdGlvbiIsIm9uU3VibWl0IiwidW5kZWZpbmVkIiwiZGVzY3JpcHRpb24iLCJ1cGRhdGVGb3JtSGFuZGxlciIsInNldFRvdWNoZWQiLCJwcmV2U3RlcCIsIm5leHRTdGVwIiwiZW5hYmxlSG9uZXlwb3QiLCJwYWdlcyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsVzs7Ozs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixxRkFBTUEsS0FBTjs7QUFEaUIsaUVBZ0dOLFVBQUNDLEVBQUQsRUFBUTtBQUNuQixZQUFLQyxRQUFMLENBQWM7QUFDWkMsUUFBQUEsT0FBTyxvQkFBTyxNQUFLQyxLQUFMLENBQVdELE9BQWxCLHNCQUE0QkYsRUFBNUIsRUFBaUMsSUFBakM7QUFESyxPQUFkO0FBR0QsS0FwR2tCOztBQUFBLHdFQXNHQyxVQUFDSSxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFBQSx3QkFDb0IsTUFBS0YsS0FEekI7QUFBQSxVQUM1QkcsVUFENEIsZUFDNUJBLFVBRDRCO0FBQUEsVUFDaEJDLGNBRGdCLGVBQ2hCQSxjQURnQjtBQUFBLFVBQ0FDLGVBREEsZUFDQUEsZUFEQTtBQUFBLFVBRTlCUixFQUY4QixHQUVMSyxLQUZLLENBRTlCTCxFQUY4QjtBQUFBLFVBRTFCUyxJQUYwQixHQUVMSixLQUZLLENBRTFCSSxJQUYwQjtBQUFBLFVBRXBCQyxVQUZvQixHQUVMTCxLQUZLLENBRXBCSyxVQUZvQixFQUdwQzs7QUFDQSxVQUFJQyxLQUFKOztBQUNBLFVBQUlOLEtBQUssQ0FBQ0ksSUFBTixLQUFlLFVBQW5CLEVBQStCO0FBQzdCLFlBQU1HLE1BQU0sc0JBQU9OLFVBQVUsQ0FBQ0QsS0FBSyxDQUFDTCxFQUFQLENBQVYsQ0FBcUJXLEtBQTVCLENBQVo7O0FBQ0EsWUFBTUUsS0FBSyxHQUFHRCxNQUFNLENBQUNFLE9BQVAsQ0FBZVYsS0FBSyxDQUFDVyxNQUFOLENBQWFKLEtBQTVCLENBQWQ7O0FBQ0EsWUFBSUUsS0FBSyxHQUFHLENBQUMsQ0FBYixFQUFnQjtBQUNkRCxVQUFBQSxNQUFNLENBQUNJLE1BQVAsQ0FBY0gsS0FBZCxFQUFxQixDQUFyQjtBQUNELFNBRkQsTUFFTztBQUNMRCxVQUFBQSxNQUFNLENBQUNLLElBQVAsQ0FBWWIsS0FBSyxDQUFDVyxNQUFOLENBQWFKLEtBQXpCO0FBQ0Q7O0FBQ0RBLFFBQUFBLEtBQUssR0FBR0MsTUFBUjtBQUNELE9BVEQsTUFTTyxJQUFJUCxLQUFLLENBQUNJLElBQU4sSUFBYyxNQUFsQixFQUEwQjtBQUFBLFlBQ3ZCUyxLQUR1QixHQUNGYixLQURFLENBQ3ZCYSxLQUR1QjtBQUFBLFlBQ2hCQyxTQURnQixHQUNGZCxLQURFLENBQ2hCYyxTQURnQjs7QUFFL0IsWUFBTVAsT0FBTSxzQkFBT04sVUFBVSxDQUFDRCxLQUFLLENBQUNMLEVBQVAsQ0FBVixDQUFxQlcsS0FBNUIsQ0FBWjs7QUFDQUMsUUFBQUEsT0FBTSxDQUFDTSxLQUFELENBQU4sR0FBZ0I7QUFDZEUsVUFBQUEsR0FBRyxFQUFFaEIsS0FBSyxDQUFDVyxNQUFOLENBQWFKLEtBREo7QUFFZFUsVUFBQUEsS0FBSyxFQUFFRjtBQUZPLFNBQWhCO0FBSUFSLFFBQUFBLEtBQUssR0FBR0MsT0FBUjtBQUNELE9BUk0sTUFRQTtBQUNMRCxRQUFBQSxLQUFLLEdBQUdQLEtBQUssQ0FBQ1csTUFBTixHQUFlWCxLQUFLLENBQUNXLE1BQU4sQ0FBYUosS0FBNUIsR0FBb0MsTUFBNUM7QUFDRCxPQXhCbUMsQ0F5QnBDOzs7QUFDQSxVQUFJRixJQUFJLEtBQUssTUFBVCxJQUFtQkosS0FBSyxDQUFDaUIsUUFBTixDQUFlUixPQUFmLENBQXVCLE1BQXZCLElBQWlDLENBQUMsQ0FBekQsRUFBNEQ7QUFDMURMLFFBQUFBLElBQUksR0FBRyxNQUFQO0FBQ0QsT0E1Qm1DLENBNkJwQzs7O0FBQ0EsVUFBTWMsS0FBSyxHQUFHLCtCQUFjWixLQUFkLEVBQXFCRixJQUFyQixFQUEyQkMsVUFBM0IsRUFBdUNMLEtBQXZDLENBQWQsQ0E5Qm9DLENBZ0NwQztBQUNBOztBQUNBLFVBQUlFLGNBQWMsQ0FBQ08sT0FBZixDQUF1QmQsRUFBdkIsTUFBK0IsQ0FBQyxDQUFwQyxFQUF1QztBQUNyQ00sUUFBQUEsVUFBVSxDQUFDTixFQUFELENBQVYsQ0FBZVcsS0FBZixHQUF1QkEsS0FBdkI7O0FBQ0EsYUFBSyxJQUFJYSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHaEIsZUFBZSxDQUFDaUIsTUFBcEMsRUFBNENELENBQUMsRUFBN0MsRUFBaUQ7QUFBQSxjQUN2Q3hCLEdBRHVDLEdBQ2hDUSxlQUFlLENBQUNnQixDQUFELENBRGlCLENBQ3ZDeEIsRUFEdUM7O0FBRS9DLGNBQU0wQixJQUFJLEdBQUcsTUFBS0MscUJBQUwsQ0FBMkJuQixlQUFlLENBQUNnQixDQUFELENBQWYsQ0FBbUJJLGdCQUE5QyxFQUFnRXRCLFVBQWhFLENBQWI7O0FBQ0FBLFVBQUFBLFVBQVUsQ0FBQ04sR0FBRCxDQUFWLENBQWU2QixTQUFmLEdBQTJCSCxJQUEzQjs7QUFDQSxjQUFJQSxJQUFKLEVBQVU7QUFDUixnQkFBSXBCLFVBQVUsQ0FBQ04sR0FBRCxDQUFWLENBQWVVLFVBQWYsSUFBNkJnQixJQUFqQyxFQUF1QztBQUNyQ3BCLGNBQUFBLFVBQVUsQ0FBQ04sR0FBRCxDQUFWLENBQWVXLEtBQWYsR0FBdUIsRUFBdkI7QUFDRDs7QUFDREwsWUFBQUEsVUFBVSxDQUFDTixHQUFELENBQVYsQ0FBZXVCLEtBQWYsR0FBdUIsQ0FBQyxDQUFDakIsVUFBVSxDQUFDTixHQUFELENBQVYsQ0FBZVUsVUFBeEM7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsWUFBS1QsUUFBTCxDQUFjO0FBQ1pLLFFBQUFBLFVBQVUsb0JBQ0xBLFVBREssc0JBRVBOLEVBRk8sRUFFRjtBQUNKVyxVQUFBQSxLQUFLLEVBQUxBLEtBREk7QUFFSlgsVUFBQUEsRUFBRSxFQUFGQSxFQUZJO0FBR0p1QixVQUFBQSxLQUFLLEVBQUxBLEtBSEk7QUFJSkYsVUFBQUEsS0FBSyxFQUFFaEIsS0FBSyxDQUFDZ0IsS0FKVDtBQUtKUyxVQUFBQSxVQUFVLEVBQUV6QixLQUFLLENBQUN5QixVQUxkO0FBTUpSLFVBQUFBLFFBQVEsRUFBRWpCLEtBQUssQ0FBQ2lCLFFBTlo7QUFPSlosVUFBQUEsVUFBVSxFQUFFTCxLQUFLLENBQUNLO0FBUGQsU0FGRTtBQURFLE9BQWQsRUFqRG9DLENBZ0V0Qzs7O0FBaEVzQyxVQWlFOUJxQixRQWpFOEIsR0FpRWpCLE1BQUtoQyxLQWpFWSxDQWlFOUJnQyxRQWpFOEI7O0FBa0VwQyxVQUFJQSxRQUFKLEVBQWM7QUFDWkEsUUFBQUEsUUFBUSxDQUFDekIsVUFBRCxDQUFSO0FBQ0Q7QUFDRixLQTNLa0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQTZLUixpQkFBT0YsS0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1RBLGdCQUFBQSxLQUFLLENBQUM0QixjQUFOOztBQUNBLHNCQUFLL0IsUUFBTCxDQUFjO0FBQ1pnQyxrQkFBQUEsVUFBVSxFQUFFLElBREE7QUFFWkMsa0JBQUFBLGFBQWEsRUFBRSxLQUZIO0FBR1pDLGtCQUFBQSxZQUFZLEVBQUUsS0FIRjtBQUlaQyxrQkFBQUEsbUJBQW1CLEVBQUUsS0FKVDtBQUtaQyxrQkFBQUEsYUFBYSxFQUFFO0FBTEgsaUJBQWQ7O0FBRlMsOEJBU3NCLE1BQUt0QyxLQVQzQixFQVNEdUMsTUFUQyxlQVNEQSxNQVRDLEVBU09DLFVBVFAsZUFTT0EsVUFUUDtBQVVIQyxnQkFBQUEsZUFWRyxHQVVlRCxVQUFVLENBQUNFLFNBQVgsQ0FBcUIsQ0FBckIsRUFBd0JGLFVBQVUsQ0FBQ3pCLE9BQVgsQ0FBbUIsVUFBbkIsQ0FBeEIsQ0FWZjtBQVdINEIsZ0JBQUFBLElBWEcsR0FXSSxJQUFJQyxRQUFKLENBQWF2QyxLQUFLLENBQUNXLE1BQW5CLENBWEo7O0FBWVQ2QixrQ0FDR0MsSUFESCxXQUNXTCxlQURYLGtDQUNrREYsTUFEbEQsbUJBQ3dFSSxJQUR4RSxFQUVHSSxJQUZILENBRVEsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCLHNCQUFJQSxRQUFRLENBQUNMLElBQVQsSUFBaUJLLFFBQVEsQ0FBQ0wsSUFBVCxDQUFjTSxRQUFuQyxFQUE2QztBQUMzQywwQkFBSy9DLFFBQUwsQ0FBYztBQUNaZ0Msc0JBQUFBLFVBQVUsRUFBRSxLQURBO0FBRVpDLHNCQUFBQSxhQUFhLEVBQUUsSUFGSDtBQUdaRSxzQkFBQUEsbUJBQW1CLEVBQUVXLFFBQVEsQ0FBQ0wsSUFBVCxDQUFjTztBQUh2QixxQkFBZDtBQUtELG1CQU5ELE1BTU87QUFDTCwwQkFBS2hELFFBQUwsQ0FBYztBQUNaZ0Msc0JBQUFBLFVBQVUsRUFBRSxLQURBO0FBRVpFLHNCQUFBQSxZQUFZLEVBQUUsSUFGRjtBQUdaRSxzQkFBQUEsYUFBYSxFQUFFO0FBSEgscUJBQWQ7QUFLRDtBQUNGLGlCQWhCSCxXQWlCUyxVQUFDYSxLQUFELEVBQVc7QUFDaEIsd0JBQUtqRCxRQUFMLENBQWM7QUFDWmdDLG9CQUFBQSxVQUFVLEVBQUUsS0FEQTtBQUVaRSxvQkFBQUEsWUFBWSxFQUFFLElBRkY7QUFHWkUsb0JBQUFBLGFBQWEsRUFBRWEsS0FBSyxDQUFDSCxRQUFOLENBQWVMLElBQWYsQ0FBb0JTO0FBSHZCLG1CQUFkO0FBS0QsaUJBdkJIOztBQVpTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BN0tROztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtEQW1OUixZQUFNO0FBQUEsVUFDUEMsVUFETyxHQUNRLE1BQUtqRCxLQURiLENBQ1BpRCxVQURPOztBQUVmLFlBQUtuRCxRQUFMLENBQWM7QUFDWm1ELFFBQUFBLFVBQVUsRUFBRUEsVUFBVSxHQUFHO0FBRGIsT0FBZDtBQUdELEtBeE5rQjs7QUFBQSwrREEwTlIsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2hCQSxNQUFBQSxDQUFDLENBQUNyQixjQUFGO0FBRGdCLFVBRVJvQixVQUZRLEdBRU8sTUFBS2pELEtBRlosQ0FFUmlELFVBRlE7O0FBR2hCLFlBQUtuRCxRQUFMLENBQWM7QUFDWm1ELFFBQUFBLFVBQVUsRUFBRUEsVUFBVSxHQUFHO0FBRGIsT0FBZDtBQUdELEtBaE9rQjs7QUFBQSw0RUFrT0ssVUFBQ0UsU0FBRCxFQUErQjtBQUFBLFVBQW5CQyxNQUFtQix1RUFBVixLQUFVO0FBQUEsVUFDN0NDLEtBRDZDLEdBQ3ZCRixTQUR1QixDQUM3Q0UsS0FENkM7QUFBQSxVQUN0Q0MsVUFEc0MsR0FDdkJILFNBRHVCLENBQ3RDRyxVQURzQztBQUVyRCxVQUFJLENBQUNELEtBQUwsRUFBWSxPQUFPLElBQVA7QUFFWixVQUFNbEQsVUFBVSxHQUFHaUQsTUFBTSxJQUFJLE1BQUtwRCxLQUFMLENBQVdHLFVBQXhDLENBSnFELENBTXJEO0FBQ0E7O0FBQ0EsVUFBSXVCLFNBQVMsR0FBRzRCLFVBQVUsS0FBSyxNQUEvQjtBQUNBLFVBQU1DLGdCQUFnQixHQUFHLEVBQXpCOztBQUNBLFdBQUssSUFBSWxDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdnQyxLQUFLLENBQUMvQixNQUExQixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztBQUFBLHVCQUNWZ0MsS0FBSyxDQUFDaEMsQ0FBRCxDQURLO0FBQUEsWUFDN0JtQyxPQUQ2QixZQUM3QkEsT0FENkI7QUFBQSxZQUNwQmhELEtBRG9CLFlBQ3BCQSxLQURvQjtBQUVyQyxZQUFNaUQsbUJBQW1CLEdBQUd0RCxVQUFVLENBQUNxRCxPQUFELENBQVYsQ0FBb0JoRCxLQUFoRDtBQUVBLFlBQU1rRCxXQUFXLEdBQUdDLEtBQUssQ0FBQ0MsT0FBTixDQUFjSCxtQkFBZCxJQUNoQkEsbUJBQW1CLENBQUNJLElBQXBCLENBQXlCLEVBQXpCLENBRGdCLEdBRWhCSixtQkFGSjs7QUFHQSxZQUFJQyxXQUFXLElBQUlsRCxLQUFLLEtBQUtrRCxXQUE3QixFQUEwQztBQUN4Q0gsVUFBQUEsZ0JBQWdCLENBQUNsQyxDQUFELENBQWhCLEdBQXNCaUMsVUFBVSxLQUFLLE1BQXJDO0FBQ0QsU0FGRCxNQUVPO0FBQ0xDLFVBQUFBLGdCQUFnQixDQUFDbEMsQ0FBRCxDQUFoQixHQUFzQmlDLFVBQVUsS0FBSyxNQUFyQztBQUNEO0FBQ0Y7O0FBQ0Q1QixNQUFBQSxTQUFTLEdBQUc2QixnQkFBZ0IsQ0FBQ08sS0FBakIsQ0FBdUIsVUFBQXpDLENBQUM7QUFBQSxlQUFJQSxDQUFDLEtBQUssSUFBVjtBQUFBLE9BQXhCLENBQVosQ0F2QnFELENBd0JyRDtBQUNBOztBQUNBLGFBQU9LLFNBQVA7QUFDRCxLQTdQa0I7O0FBRWpCLFVBQUsxQixLQUFMLEdBQWE7QUFDWGdDLE1BQUFBLFlBQVksRUFBRSxLQURIO0FBRVhFLE1BQUFBLGFBQWEsRUFBRSxLQUZKO0FBR1gvQixNQUFBQSxVQUFVLEVBQUUsRUFIRDtBQUlYNEQsTUFBQUEsT0FBTyxFQUFFLElBSkU7QUFLWGpDLE1BQUFBLFVBQVUsRUFBRSxLQUxEO0FBTVhDLE1BQUFBLGFBQWEsRUFBRSxLQU5KO0FBT1hFLE1BQUFBLG1CQUFtQixFQUFFLEtBUFY7QUFRWCtCLE1BQUFBLE9BQU8sRUFBRSxLQVJFO0FBU1hDLE1BQUFBLFFBQVEsRUFBRSxFQVRDO0FBVVhsRSxNQUFBQSxPQUFPLEVBQUUsRUFWRTtBQVdYa0QsTUFBQUEsVUFBVSxFQUFFLEtBWEQ7QUFZWDVDLE1BQUFBLGVBQWUsRUFBRSxFQVpOO0FBYVhELE1BQUFBLGNBQWMsRUFBRSxFQWJMO0FBY1g4RCxNQUFBQSxXQUFXLEVBQUU7QUFkRixLQUFiO0FBRmlCO0FBa0JsQjs7Ozs7Ozs7Ozs7Ozs7K0JBR2dDLEtBQUt0RSxLLEVBQTVCdUMsTSxnQkFBQUEsTSxFQUFRQyxVLGdCQUFBQSxVO0FBQ2hCLHFCQUFLK0IsVUFBTCxHQUFrQixJQUFsQjtBQUNJRCxnQkFBQUEsVyxHQUFjLEs7O3VCQUNDekIsa0JBQ2hCMkIsR0FEZ0IsV0FDVGhDLFVBRFMsY0FDS0QsTUFETCxHQUVoQlEsSUFGZ0IsQ0FFWCxVQUFBQyxRQUFRO0FBQUEseUJBQUlBLFFBQVEsQ0FBQ0wsSUFBYjtBQUFBLGlCQUZHLFdBR1Y7QUFBQSx5QkFBTSxLQUFOO0FBQUEsaUJBSFUsQzs7O0FBQWI4QixnQkFBQUEsSTs7c0JBS0ZBLElBQUksSUFBSSxLQUFLRixVOzs7OztBQUNUaEUsZ0JBQUFBLFUsR0FBYSxFO0FBQ2JFLGdCQUFBQSxlLEdBQWtCLEU7QUFDbEJELGdCQUFBQSxjLEdBQWlCLEUsRUFDdkI7Ozs7Ozs7QUFDQSxpQ0FBb0JpRSxJQUFJLENBQUNqQixNQUF6Qix1SEFBaUM7QUFBdEJsRCxrQkFBQUEsS0FBc0I7QUFDM0JNLGtCQUFBQSxLQUQyQjs7QUFFL0Isc0JBQUlOLEtBQUssQ0FBQ0ksSUFBTixLQUFlLFVBQW5CLEVBQStCO0FBQzdCRSxvQkFBQUEsS0FBSyxHQUFHTixLQUFLLENBQUNvRSxPQUFOLENBQWNDLE1BQWQsQ0FBcUIsVUFBQUMsTUFBTTtBQUFBLDZCQUFJQSxNQUFNLENBQUNDLFVBQVg7QUFBQSxxQkFBM0IsRUFBa0RDLEdBQWxELENBQXNELFVBQUFGLE1BQU07QUFBQSw2QkFBSUEsTUFBTSxDQUFDaEUsS0FBWDtBQUFBLHFCQUE1RCxDQUFSO0FBQ0QsbUJBRkQsTUFFTyxJQUFJTixLQUFLLENBQUNJLElBQU4sS0FBZSxPQUFuQixFQUE0QjtBQUMzQnFFLG9CQUFBQSxXQUQyQixHQUNiekUsS0FBSyxDQUFDb0UsT0FBTixDQUFjTSxJQUFkLENBQW1CLFVBQUFKLE1BQU07QUFBQSw2QkFBSUEsTUFBTSxDQUFDQyxVQUFYO0FBQUEscUJBQXpCLENBRGE7QUFFakNqRSxvQkFBQUEsS0FBSyxHQUFHbUUsV0FBVyxHQUFHQSxXQUFXLENBQUNuRSxLQUFmLEdBQXVCLEVBQTFDO0FBQ0QsbUJBSE0sTUFHQTtBQUNMQSxvQkFBQUEsS0FBSyxHQUFHTixLQUFLLENBQUMyRSxZQUFkOztBQUNBLHdCQUFJM0UsS0FBSyxDQUFDSSxJQUFOLEtBQWUsWUFBbkIsRUFBaUM7QUFDL0I0RCxzQkFBQUEsV0FBVyxHQUFHLElBQWQ7QUFDRDtBQUNGLG1CQVo4QixDQWMvQjs7O0FBQ0Esc0JBQUloRSxLQUFLLENBQUN1QixnQkFBVixFQUE0QjtBQUNwQnFELG9CQUFBQSxRQURvQixHQUNUO0FBQ2ZqRixzQkFBQUEsRUFBRSxFQUFFSyxLQUFLLENBQUNMLEVBREs7QUFFZjRCLHNCQUFBQSxnQkFBZ0IsRUFBRXZCLEtBQUssQ0FBQ3VCO0FBRlQscUJBRFM7QUFLcEJzRCxvQkFBQUEsR0FMb0IsR0FLZDdFLEtBQUssQ0FBQ3VCLGdCQUFOLENBQXVCNEIsS0FBdkIsQ0FBNkJxQixHQUE3QixDQUFpQyxVQUFBTSxJQUFJO0FBQUEsNkJBQUlBLElBQUksQ0FBQ3hCLE9BQVQ7QUFBQSxxQkFBckMsQ0FMYzs7QUFNMUIseUJBQVNuQyxFQUFULEdBQWEsQ0FBYixFQUFnQkEsRUFBQyxHQUFHMEQsR0FBRyxDQUFDekQsTUFBeEIsRUFBZ0NELEVBQUMsRUFBakMsRUFBcUM7QUFDN0J4QixzQkFBQUEsRUFENkIsR0FDeEJvRixRQUFRLENBQUNGLEdBQUcsQ0FBQzFELEVBQUQsQ0FBSixDQURnQjs7QUFFbkMsMEJBQUlqQixjQUFjLENBQUNPLE9BQWYsQ0FBdUJkLEVBQXZCLE1BQStCLENBQUMsQ0FBcEMsRUFBdUM7QUFDckNPLHdCQUFBQSxjQUFjLENBQUNVLElBQWYsQ0FBb0JqQixFQUFwQjtBQUNEO0FBQ0Y7O0FBQ0RRLG9CQUFBQSxlQUFlLENBQUNTLElBQWhCLENBQXFCZ0UsUUFBckI7QUFDRDs7QUFFRDNFLGtCQUFBQSxVQUFVLENBQUNELEtBQUssQ0FBQ0wsRUFBUCxDQUFWLEdBQXVCO0FBQ3JCdUIsb0JBQUFBLEtBQUssRUFBRSwrQkFBY1osS0FBZCxFQUFxQk4sS0FBSyxDQUFDSSxJQUEzQixFQUFpQ0osS0FBSyxDQUFDSyxVQUF2QyxDQURjO0FBRXJCQyxvQkFBQUEsS0FBSyxFQUFMQSxLQUZxQjtBQUdyQlUsb0JBQUFBLEtBQUssRUFBRWhCLEtBQUssQ0FBQ2dCLEtBSFE7QUFJckJTLG9CQUFBQSxVQUFVLEVBQUV6QixLQUFLLENBQUN5QixVQUpHO0FBS3JCUixvQkFBQUEsUUFBUSxFQUFFakIsS0FBSyxDQUFDaUIsUUFMSztBQU1yQlosb0JBQUFBLFVBQVUsRUFBRUwsS0FBSyxDQUFDSztBQU5HLG1CQUF2QjtBQVFELGlCLENBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxQkFBU2MsQ0FBVCxHQUFhLENBQWIsRUFBZ0JBLENBQUMsR0FBR2hCLGVBQWUsQ0FBQ2lCLE1BQXBDLEVBQTRDRCxDQUFDLEVBQTdDLEVBQWlEO0FBQy9DbEIsa0JBQUFBLFVBQVUsQ0FBQ0UsZUFBZSxDQUFDZ0IsQ0FBRCxDQUFmLENBQW1CeEIsRUFBcEIsQ0FBVixDQUFrQzZCLFNBQWxDLEdBQThDLEtBQUtGLHFCQUFMLENBQzVDbkIsZUFBZSxDQUFDZ0IsQ0FBRCxDQUFmLENBQW1CSSxnQkFEeUIsRUFFNUN0QixVQUY0QyxDQUE5QztBQUlEOztBQUVELHFCQUFLTCxRQUFMLENBQWM7QUFDWm1FLGtCQUFBQSxRQUFRLEVBQUVJLElBREU7QUFFWmxFLGtCQUFBQSxVQUFVLEVBQVZBLFVBRlk7QUFHWjhDLGtCQUFBQSxVQUFVLEVBQUVvQixJQUFJLENBQUNhLFVBQUwsR0FBa0IsQ0FBbEIsR0FBc0IsS0FIdEI7QUFJWjdFLGtCQUFBQSxlQUFlLEVBQWZBLGVBSlk7QUFLWkQsa0JBQUFBLGNBQWMsRUFBZEEsY0FMWTtBQU1aOEQsa0JBQUFBLFdBQVcsRUFBWEE7QUFOWSxpQkFBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJDQVdtQjtBQUNyQixXQUFLQyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0Q7Ozs2QkFpS1E7QUFBQTs7QUFBQSx5QkFVSCxLQUFLbkUsS0FWRjtBQUFBLFVBRUxpRSxRQUZLLGdCQUVMQSxRQUZLO0FBQUEsVUFHTDlELFVBSEssZ0JBR0xBLFVBSEs7QUFBQSxVQUlMNkIsWUFKSyxnQkFJTEEsWUFKSztBQUFBLFVBS0xELGFBTEssZ0JBS0xBLGFBTEs7QUFBQSxVQU1MaEMsT0FOSyxnQkFNTEEsT0FOSztBQUFBLFVBT0wrQixVQVBLLGdCQU9MQSxVQVBLO0FBQUEsVUFRTG1CLFVBUkssZ0JBUUxBLFVBUks7QUFBQSxVQVNMaUIsV0FUSyxnQkFTTEEsV0FUSztBQUFBLHlCQWFILEtBQUt0RSxLQWJGO0FBQUEsVUFZTHVGLEtBWkssZ0JBWUxBLEtBWks7QUFBQSxVQVlFQyxVQVpGLGdCQVlFQSxVQVpGO0FBQUEsVUFZY0Msb0JBWmQsZ0JBWWNBLG9CQVpkO0FBQUEsVUFZb0NDLGdCQVpwQyxnQkFZb0NBLGdCQVpwQzs7QUFBQSxrQkFjd0NBLGdCQUFnQixJQUFJLEtBZDVEO0FBQUEsVUFjQ0MsTUFkRCxTQWNDQSxNQWREO0FBQUEsVUFjU0MsT0FkVCxTQWNTQSxPQWRUO0FBQUEsa0NBY2tCQyxTQWRsQjtBQUFBLFVBY2tCQSxTQWRsQixnQ0FjOEIsS0FkOUI7O0FBQUEsVUFlQ3RFLFFBZkQsR0FlYzhDLFFBZmQsQ0FlQzlDLFFBZkQ7QUFpQlAsVUFBTXVFLFVBQVUsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVl6RixVQUFaLEVBQXdCMEYsSUFBeEIsQ0FDakIsVUFBQUMsQ0FBQztBQUFBLGVBQUksQ0FBQzNGLFVBQVUsQ0FBQzJGLENBQUQsQ0FBVixDQUFjcEUsU0FBZixJQUE0QnZCLFVBQVUsQ0FBQzJGLENBQUQsQ0FBVixDQUFjMUUsS0FBOUM7QUFBQSxPQURnQixDQUFuQjtBQUdBLFVBQU0yRSxjQUFjLEdBQUc5QyxVQUFVLEdBQzdCMEMsTUFBTSxDQUFDQyxJQUFQLENBQVl6RixVQUFaLEVBQXdCMEYsSUFBeEIsQ0FDQSxVQUFBQyxDQUFDO0FBQUEsZUFBSTNGLFVBQVUsQ0FBQzJGLENBQUQsQ0FBVixDQUFjbkUsVUFBZCxLQUE2QnNCLFVBQTdCLElBQ0UsQ0FBQzlDLFVBQVUsQ0FBQzJGLENBQUQsQ0FBVixDQUFjcEUsU0FEakIsSUFFRXZCLFVBQVUsQ0FBQzJGLENBQUQsQ0FBVixDQUFjMUUsS0FGcEI7QUFBQSxPQURELENBRDZCLEdBTTdCLEtBTko7QUFRQSxhQUNFO0FBQ0UsUUFBQSxTQUFTLEVBQUMsY0FEWjtBQUVFLFFBQUEsR0FBRyxFQUFFO0FBQUU0RSxVQUFBQSxRQUFRLEVBQUU7QUFBWixTQUZQO0FBR0UsUUFBQSxFQUFFLHlCQUFrQixLQUFLcEcsS0FBTCxDQUFXdUMsTUFBN0I7QUFISixTQUtHOEIsUUFBUSxDQUFDa0IsS0FBVCxHQUFpQixJQUFqQixHQUF3QkssT0FBTyxJQUFJLGdDQUFDLE9BQUQ7QUFBUyxRQUFBLFNBQVM7QUFBbEIsUUFMdEMsRUFPR3hELFlBQVksSUFBSSxDQUFDRCxhQUFqQixJQUNDLGdDQUFDLHFCQUFEO0FBQ0UsUUFBQSxNQUFNLEVBQUU1QixVQURWO0FBRUUsUUFBQSxNQUFNLEVBQUUsS0FBS0gsS0FBTCxDQUFXa0MsYUFGckI7QUFHRSxRQUFBLFlBQVksRUFBQztBQUhmLFFBUkosRUFlR0gsYUFBYSxJQUFJLEtBQUsvQixLQUFMLENBQVdpQyxtQkFBNUIsSUFDQyxnQ0FBQyw0QkFBRDtBQUFrQixRQUFBLFlBQVksRUFBRSxLQUFLakMsS0FBTCxDQUFXaUM7QUFBM0MsUUFoQkosRUFtQkcsQ0FBQ0YsYUFBRCxJQUFrQmtDLFFBQVEsQ0FBQ2IsTUFBM0IsR0FDQztBQUNFLFFBQUEsUUFBUSxFQUFFLGtCQUFBRixDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDK0MsUUFBTCxDQUFjL0MsQ0FBZCxDQUFKO0FBQUEsU0FEYjtBQUVFLFFBQUEsU0FBUyxFQUFFL0IsUUFGYjtBQUdFLFFBQUEsT0FBTyxFQUFFK0MsV0FBVyxHQUFHLHFCQUFILEdBQTJCZ0MsU0FIakQ7QUFJRSxRQUFBLFVBQVU7QUFKWixTQU1HLENBQUNqQyxRQUFRLENBQUNrQixLQUFULElBQWtCbEIsUUFBUSxDQUFDa0MsV0FBNUIsS0FDQyw2Q0FDR2xDLFFBQVEsQ0FBQ2tCLEtBQVQsSUFBa0JBLEtBQWxCLEdBQTBCO0FBQUksUUFBQSxTQUFTLEVBQUM7QUFBZCxTQUE0QmxCLFFBQVEsQ0FBQ2tCLEtBQXJDLENBQTFCLEdBQTZFLElBRGhGLEVBRUdsQixRQUFRLENBQUNrQyxXQUFULEdBQ0M7QUFBRyxRQUFBLFNBQVMsRUFBQztBQUFiLFNBQWlDbEMsUUFBUSxDQUFDa0MsV0FBMUMsQ0FERCxHQUVHLElBSk4sQ0FQSixFQWVFO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNFLGdDQUFDLHdCQUFEO0FBQ0UsUUFBQSxnQkFBZ0IsRUFBRWIsZ0JBRHBCO0FBRUUsUUFBQSxNQUFNLEVBQUVyQixRQUFRLENBQUNiLE1BRm5CO0FBR0UsUUFBQSxVQUFVLEVBQUVqRCxVQUhkO0FBSUUsUUFBQSxZQUFZLEVBQUU2QixZQUpoQjtBQUtFLFFBQUEsYUFBYSxFQUFFRCxhQUxqQjtBQU1FLFFBQUEsVUFBVSxFQUFFLEtBQUtxRSxpQkFObkI7QUFPRSxRQUFBLE9BQU8sRUFBRXJHLE9BUFg7QUFRRSxRQUFBLFVBQVUsRUFBRSxLQUFLc0csVUFSbkI7QUFTRSxRQUFBLFVBQVUsRUFBRXBDLFFBQVEsQ0FBQ2lCLFVBVHZCO0FBVUUsUUFBQSxVQUFVLEVBQUVqQyxVQVZkO0FBV0UsUUFBQSxRQUFRLEVBQUUsS0FBS3FELFFBWGpCO0FBWUUsUUFBQSxRQUFRLEVBQUUsS0FBS0MsUUFaakI7QUFhRSxRQUFBLGNBQWMsRUFBRVIsY0FibEI7QUFjRSxRQUFBLHFCQUFxQixFQUFFLEtBQUt2RSxxQkFkOUI7QUFlRSxRQUFBLG9CQUFvQixFQUFFNkQsb0JBZnhCO0FBZ0JFLFFBQUEsY0FBYyxFQUFFcEIsUUFBUSxDQUFDdUM7QUFoQjNCLFFBREYsRUFtQkcsQ0FBQyxDQUFDdkMsUUFBUSxDQUFDaUIsVUFBVixJQUNJakIsUUFBUSxDQUFDaUIsVUFBVCxJQUF1QmpCLFFBQVEsQ0FBQ2lCLFVBQVQsQ0FBb0J1QixLQUFwQixDQUEwQm5GLE1BQTFCLEtBQXFDMkIsVUFEakUsS0FFQyxnQ0FBQyxrQkFBRDtBQUNFLFFBQUEsTUFBTSxFQUFFc0MsTUFEVjtBQUVFLFFBQUEsT0FBTyxFQUFFQyxPQUZYO0FBR0UsUUFBQSxRQUFRLEVBQUV2QixRQUhaO0FBSUUsUUFBQSxVQUFVLEVBQUVtQixVQUpkO0FBS0UsUUFBQSxVQUFVLEVBQUVNLFVBTGQ7QUFNRSxRQUFBLFVBQVUsRUFBRTVELFVBTmQ7QUFPRSxRQUFBLFFBQVEsRUFBRSxLQUFLd0U7QUFQakIsUUFyQkosQ0FmRixDQURELEdBa0RDLEVBckVKLENBREY7QUEwRUQ7Ozs7RUF0V3VCSSxnQjs7QUF5VzFCL0csV0FBVyxDQUFDZ0gsWUFBWixHQUEyQjtBQUN6QnhCLEVBQUFBLEtBQUssRUFBRSxJQURrQjtBQUV6QkMsRUFBQUEsVUFBVSxFQUFFLEtBRmE7QUFHekJDLEVBQUFBLG9CQUFvQixFQUFFO0FBSEcsQ0FBM0I7ZUFNZTFGLFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSZW5kZXJGaWVsZHMgZnJvbSAnLi9Gb3JtRWxlbWVudHMvUmVuZGVyRmllbGRzJztcbmltcG9ydCBGb3JtRXJyb3IgZnJvbSAnLi9Gb3JtRWxlbWVudHMvRm9ybUVycm9yJztcbmltcG9ydCBGb3JtQ29uZmlybWF0aW9uIGZyb20gJy4vRm9ybUVsZW1lbnRzL0Zvcm1Db25maXJtYXRpb24nO1xuaW1wb3J0IHsgdmFsaWRhdGVGaWVsZCB9IGZyb20gJy4vSGVscGVycy92YWxpZGF0aW9uJztcbmltcG9ydCBTdWJtaXQgZnJvbSAnLi9Gb3JtRWxlbWVudHMvU3VibWl0JztcblxuY2xhc3MgR3Jhdml0eUZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3VibWl0RmFpbGVkOiBmYWxzZSxcbiAgICAgIGVycm9yTWVzc2FnZXM6IGZhbHNlLFxuICAgICAgZm9ybVZhbHVlczoge30sXG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICBzdWJtaXRTdWNjZXNzOiBmYWxzZSxcbiAgICAgIGNvbmZpcm1hdGlvbk1lc3NhZ2U6IGZhbHNlLFxuICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgICBmb3JtRGF0YToge30sXG4gICAgICB0b3VjaGVkOiB7fSxcbiAgICAgIGFjdGl2ZVBhZ2U6IGZhbHNlLFxuICAgICAgY29uZGl0aW9uRmllbGRzOiB7fSxcbiAgICAgIGNvbmRpdGlvYW5sSWRzOiB7fSxcbiAgICAgIGlzTXVsdGlwYXJ0OiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBmb3JtSUQsIGJhY2tlbmRVcmwgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICBsZXQgaXNNdWx0aXBhcnQgPSBmYWxzZTtcbiAgICBjb25zdCBmb3JtID0gYXdhaXQgYXhpb3NcbiAgICAgIC5nZXQoYCR7YmFja2VuZFVybH0vJHtmb3JtSUR9YClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXG4gICAgICAuY2F0Y2goKCkgPT4gZmFsc2UpO1xuICAgIFxuICAgIGlmIChmb3JtICYmIHRoaXMuX2lzTW91bnRlZCkge1xuICAgICAgY29uc3QgZm9ybVZhbHVlcyA9IHt9O1xuICAgICAgY29uc3QgY29uZGl0aW9uRmllbGRzID0gW107XG4gICAgICBjb25zdCBjb25kaXRpb2FubElkcyA9IFtdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIGZvcm0uZmllbGRzKSB7XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICB2YWx1ZSA9IGZpZWxkLmNob2ljZXMuZmlsdGVyKGNob2ljZSA9PiBjaG9pY2UuaXNTZWxlY3RlZCkubWFwKGNob2ljZSA9PiBjaG9pY2UudmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICBjb25zdCBwcmVzZWxlY3RlZCA9IGZpZWxkLmNob2ljZXMuZmluZChjaG9pY2UgPT4gY2hvaWNlLmlzU2VsZWN0ZWQpO1xuICAgICAgICAgIHZhbHVlID0gcHJlc2VsZWN0ZWQgPyBwcmVzZWxlY3RlZC52YWx1ZSA6ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gZmllbGQuZGVmYXVsdFZhbHVlO1xuICAgICAgICAgIGlmIChmaWVsZC50eXBlID09PSAnZmlsZXVwbG9hZCcpIHtcbiAgICAgICAgICAgIGlzTXVsdGlwYXJ0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBncmFiIGFsbCBjb25kaXRpb25hbCBsb2dpYyBmaWVsZHNcbiAgICAgICAgaWYgKGZpZWxkLmNvbmRpdGlvbmFsTG9naWMpIHtcbiAgICAgICAgICBjb25zdCB0bXBGaWVsZCA9IHtcbiAgICAgICAgICAgIGlkOiBmaWVsZC5pZCxcbiAgICAgICAgICAgIGNvbmRpdGlvbmFsTG9naWM6IGZpZWxkLmNvbmRpdGlvbmFsTG9naWMsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBjb25zdCBpZHMgPSBmaWVsZC5jb25kaXRpb25hbExvZ2ljLnJ1bGVzLm1hcChpdGVtID0+IGl0ZW0uZmllbGRJZCk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQoaWRzW2ldKTtcbiAgICAgICAgICAgIGlmIChjb25kaXRpb2FubElkcy5pbmRleE9mKGlkKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgY29uZGl0aW9hbmxJZHMucHVzaChpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbmRpdGlvbkZpZWxkcy5wdXNoKHRtcEZpZWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1WYWx1ZXNbZmllbGQuaWRdID0ge1xuICAgICAgICAgIHZhbGlkOiB2YWxpZGF0ZUZpZWxkKHZhbHVlLCBmaWVsZC50eXBlLCBmaWVsZC5pc1JlcXVpcmVkKSxcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICBsYWJlbDogZmllbGQubGFiZWwsXG4gICAgICAgICAgcGFnZU51bWJlcjogZmllbGQucGFnZU51bWJlcixcbiAgICAgICAgICBjc3NDbGFzczogZmllbGQuY3NzQ2xhc3MsXG4gICAgICAgICAgaXNSZXF1aXJlZDogZmllbGQuaXNSZXF1aXJlZCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8vIGNoZWNrIGNvbmRpdGlvbiBsb2dpY1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25kaXRpb25GaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9ybVZhbHVlc1tjb25kaXRpb25GaWVsZHNbaV0uaWRdLmhpZGVGaWVsZCA9IHRoaXMuY2hlY2tDb25kaXRpb25hbExvZ2ljKFxuICAgICAgICAgIGNvbmRpdGlvbkZpZWxkc1tpXS5jb25kaXRpb25hbExvZ2ljLFxuICAgICAgICAgIGZvcm1WYWx1ZXMsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb3JtRGF0YTogZm9ybSxcbiAgICAgICAgZm9ybVZhbHVlcyxcbiAgICAgICAgYWN0aXZlUGFnZTogZm9ybS5wYWdpbmF0aW9uID8gMSA6IGZhbHNlLFxuICAgICAgICBjb25kaXRpb25GaWVsZHMsXG4gICAgICAgIGNvbmRpdGlvYW5sSWRzLFxuICAgICAgICBpc011bHRpcGFydCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuICB9XG5cbiAgc2V0VG91Y2hlZCA9IChpZCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdG91Y2hlZDogeyAuLi50aGlzLnN0YXRlLnRvdWNoZWQsIFtpZF06IHRydWUgfSxcbiAgICB9KTtcbiAgfTtcblxuICB1cGRhdGVGb3JtSGFuZGxlciA9IChldmVudCwgZmllbGQpID0+IHtcbiAgICBjb25zdCB7IGZvcm1WYWx1ZXMsIGNvbmRpdGlvYW5sSWRzLCBjb25kaXRpb25GaWVsZHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IHsgaWQsIHR5cGUsIGlzUmVxdWlyZWQgfSA9IGZpZWxkO1xuICAgIC8vIFNldCBuZXcgdmFsdWVcbiAgICBsZXQgdmFsdWU7XG4gICAgaWYgKGZpZWxkLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IFsuLi5mb3JtVmFsdWVzW2ZpZWxkLmlkXS52YWx1ZV07XG4gICAgICBjb25zdCBpbmRleCA9IHZhbHVlcy5pbmRleE9mKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICB2YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlcy5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICB9XG4gICAgICB2YWx1ZSA9IHZhbHVlcztcbiAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT0gJ2RhdGUnKSB7XG4gICAgICBjb25zdCB7IHN1YklkLCBkYXRlTGFiZWwgfSA9IGZpZWxkO1xuICAgICAgY29uc3QgdmFsdWVzID0gWy4uLmZvcm1WYWx1ZXNbZmllbGQuaWRdLnZhbHVlXTtcbiAgICAgIHZhbHVlc1tzdWJJZF0gPSB7XG4gICAgICAgIHZhbDogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICBsYWJlbDogZGF0ZUxhYmVsLFxuICAgICAgfTtcbiAgICAgIHZhbHVlID0gdmFsdWVzO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldCA/IGV2ZW50LnRhcmdldC52YWx1ZSA6ICdudWxsJztcbiAgICB9XG4gICAgLy8gaWYgZmllbGQgaXMgSUJBTlxuICAgIGlmICh0eXBlID09PSAndGV4dCcgJiYgZmllbGQuY3NzQ2xhc3MuaW5kZXhPZignaWJhbicpID4gLTEpIHtcbiAgICAgIHR5cGUgPSAnaWJhbic7XG4gICAgfVxuICAgIC8vIFZhbGlkYXRlIGZpZWxkXG4gICAgY29uc3QgdmFsaWQgPSB2YWxpZGF0ZUZpZWxkKHZhbHVlLCB0eXBlLCBpc1JlcXVpcmVkLCBmaWVsZCk7XG5cbiAgICAvLyBpZiBmaWVsZCBJRCBpcyBzb21ld2hlcmUgaW4gY29uZGl0aW9uYWwgZmllbGRzXG4gICAgLy8gcmVjYWxjdWxhdGUgYWxsIGNvbmRpdGlvbnNcbiAgICBpZiAoY29uZGl0aW9hbmxJZHMuaW5kZXhPZihpZCkgIT09IC0xKSB7XG4gICAgICBmb3JtVmFsdWVzW2lkXS52YWx1ZSA9IHZhbHVlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25kaXRpb25GaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gY29uZGl0aW9uRmllbGRzW2ldO1xuICAgICAgICBjb25zdCBoaWRlID0gdGhpcy5jaGVja0NvbmRpdGlvbmFsTG9naWMoY29uZGl0aW9uRmllbGRzW2ldLmNvbmRpdGlvbmFsTG9naWMsIGZvcm1WYWx1ZXMpO1xuICAgICAgICBmb3JtVmFsdWVzW2lkXS5oaWRlRmllbGQgPSBoaWRlO1xuICAgICAgICBpZiAoaGlkZSkge1xuICAgICAgICAgIGlmIChmb3JtVmFsdWVzW2lkXS5pc1JlcXVpcmVkICYmIGhpZGUpIHtcbiAgICAgICAgICAgIGZvcm1WYWx1ZXNbaWRdLnZhbHVlID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvcm1WYWx1ZXNbaWRdLnZhbGlkID0gISFmb3JtVmFsdWVzW2lkXS5pc1JlcXVpcmVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmb3JtVmFsdWVzOiB7XG4gICAgICAgIC4uLmZvcm1WYWx1ZXMsXG4gICAgICAgIFtpZF06IHtcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICBpZCxcbiAgICAgICAgICB2YWxpZCxcbiAgICAgICAgICBsYWJlbDogZmllbGQubGFiZWwsXG4gICAgICAgICAgcGFnZU51bWJlcjogZmllbGQucGFnZU51bWJlcixcbiAgICAgICAgICBjc3NDbGFzczogZmllbGQuY3NzQ2xhc3MsXG4gICAgICAgICAgaXNSZXF1aXJlZDogZmllbGQuaXNSZXF1aXJlZCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgLy8gcGFzcyBzdGF0ZSB0byBwYXJlbnQgY29tcG9uZW50XG4gIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKG9uQ2hhbmdlKSB7IFxuICAgICAgb25DaGFuZ2UoZm9ybVZhbHVlcyk7XG4gICAgfVxuICB9O1xuXG4gIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN1Ym1pdHRpbmc6IHRydWUsXG4gICAgICBzdWJtaXRTdWNjZXNzOiBmYWxzZSxcbiAgICAgIHN1Ym1pdEZhaWxlZDogZmFsc2UsXG4gICAgICBjb25maXJtYXRpb25NZXNzYWdlOiBmYWxzZSxcbiAgICAgIGVycm9yTWVzc2FnZXM6IGZhbHNlLFxuICAgIH0pO1xuICAgIGNvbnN0IHsgZm9ybUlELCBiYWNrZW5kVXJsIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGdmU3VibWlzc2lvblVybCA9IGJhY2tlbmRVcmwuc3Vic3RyaW5nKDAsIGJhY2tlbmRVcmwuaW5kZXhPZignL3dwLWpzb24nKSk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpO1xuICAgIGF4aW9zXG4gICAgICAucG9zdChgJHtnZlN1Ym1pc3Npb25Vcmx9L3dwLWpzb24vZ2YvdjIvZm9ybXMvJHtmb3JtSUR9L3N1Ym1pc3Npb25zYCwgZGF0YSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmlzX3ZhbGlkKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Ym1pdFN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICBjb25maXJtYXRpb25NZXNzYWdlOiByZXNwb25zZS5kYXRhLmNvbmZpcm1hdGlvbl9tZXNzYWdlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICAgICAgICBzdWJtaXRGYWlsZWQ6IHRydWUsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VzOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgICAgICBzdWJtaXRGYWlsZWQ6IHRydWUsXG4gICAgICAgICAgZXJyb3JNZXNzYWdlczogZXJyb3IucmVzcG9uc2UuZGF0YS52YWxpZGF0aW9uX21lc3NhZ2VzLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIG5leHRTdGVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgYWN0aXZlUGFnZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZVBhZ2U6IGFjdGl2ZVBhZ2UgKyAxLFxuICAgIH0pO1xuICB9O1xuXG4gIHByZXZTdGVwID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBhY3RpdmVQYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlUGFnZTogYWN0aXZlUGFnZSAtIDEsXG4gICAgfSk7XG4gIH07XG5cbiAgY2hlY2tDb25kaXRpb25hbExvZ2ljID0gKGNvbmRpdGlvbiwgZmllbGRzID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCB7IHJ1bGVzLCBhY3Rpb25UeXBlIH0gPSBjb25kaXRpb247XG4gICAgaWYgKCFydWxlcykgcmV0dXJuIHRydWU7XG5cbiAgICBjb25zdCBmb3JtVmFsdWVzID0gZmllbGRzIHx8IHRoaXMuc3RhdGUuZm9ybVZhbHVlcztcblxuICAgIC8vIHNob3cgb25seSBpZiBpcyBzZWxlY3RlZCBcIkFsbCBmaWVsZHNcIiAoaXQgc2hvdWxkIGJlIHR3ZWFrZWQgaW4gZnV0dXJlKVxuICAgIC8vIHdvcmtzIG9ubHkgXCJzaG93L2hpZGUgd2hlbiBmaWVsZCBpcyBlcXVhbCB0b1wiXG4gICAgbGV0IGhpZGVGaWVsZCA9IGFjdGlvblR5cGUgIT09ICdoaWRlJztcbiAgICBjb25zdCBoaWRlQmFzZWRPblJ1bGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgeyBmaWVsZElkLCB2YWx1ZSB9ID0gcnVsZXNbaV07XG4gICAgICBjb25zdCBjb25kaXRpb25GaWVsZFZhbHVlID0gZm9ybVZhbHVlc1tmaWVsZElkXS52YWx1ZTtcblxuICAgICAgY29uc3Qgc3RyaW5nVmFsdWUgPSBBcnJheS5pc0FycmF5KGNvbmRpdGlvbkZpZWxkVmFsdWUpXG4gICAgICAgID8gY29uZGl0aW9uRmllbGRWYWx1ZS5qb2luKCcnKVxuICAgICAgICA6IGNvbmRpdGlvbkZpZWxkVmFsdWU7XG4gICAgICBpZiAoc3RyaW5nVmFsdWUgJiYgdmFsdWUgPT09IHN0cmluZ1ZhbHVlKSB7XG4gICAgICAgIGhpZGVCYXNlZE9uUnVsZXNbaV0gPSBhY3Rpb25UeXBlID09PSAnaGlkZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoaWRlQmFzZWRPblJ1bGVzW2ldID0gYWN0aW9uVHlwZSAhPT0gJ2hpZGUnO1xuICAgICAgfVxuICAgIH1cbiAgICBoaWRlRmllbGQgPSBoaWRlQmFzZWRPblJ1bGVzLmV2ZXJ5KGkgPT4gaSA9PT0gdHJ1ZSk7XG4gICAgLy8gZm9ybVZhbHVlc1tpZF0uaGlkZUZpZWxkID0gaGlkZUZpZWxkO1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBmb3JtVmFsdWVzIH0pO1xuICAgIHJldHVybiBoaWRlRmllbGQ7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZvcm1EYXRhLFxuICAgICAgZm9ybVZhbHVlcyxcbiAgICAgIHN1Ym1pdEZhaWxlZCxcbiAgICAgIHN1Ym1pdFN1Y2Nlc3MsXG4gICAgICB0b3VjaGVkLFxuICAgICAgc3VibWl0dGluZyxcbiAgICAgIGFjdGl2ZVBhZ2UsXG4gICAgICBpc011bHRpcGFydCxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7XG4gICAgICB0aXRsZSwgc3VibWl0SWNvbiwgc2F2ZVN0YXRlVG9IdG1sRmllbGQsIHN0eWxlZENvbXBvbmVudHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBCdXR0b24sIExvYWRpbmcsIEdGV3JhcHBlciA9ICdkaXYnIH0gPSBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuICAgIGNvbnN0IHsgY3NzQ2xhc3MgfSA9IGZvcm1EYXRhO1xuXG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IE9iamVjdC5rZXlzKGZvcm1WYWx1ZXMpLnNvbWUoXG4gICAgICB4ID0+ICFmb3JtVmFsdWVzW3hdLmhpZGVGaWVsZCAmJiBmb3JtVmFsdWVzW3hdLnZhbGlkLFxuICAgICk7XG4gICAgY29uc3QgaXNOZXh0RGlzYWJsZWQgPSBhY3RpdmVQYWdlXG4gICAgICA/IE9iamVjdC5rZXlzKGZvcm1WYWx1ZXMpLnNvbWUoXG4gICAgICAgIHggPT4gZm9ybVZhbHVlc1t4XS5wYWdlTnVtYmVyID09PSBhY3RpdmVQYWdlXG4gICAgICAgICAgICAmJiAhZm9ybVZhbHVlc1t4XS5oaWRlRmllbGRcbiAgICAgICAgICAgICYmIGZvcm1WYWx1ZXNbeF0udmFsaWQsXG4gICAgICApXG4gICAgICA6IGZhbHNlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS13cmFwcGVyXCJcbiAgICAgICAgY3NzPXt7IHBvc2l0aW9uOiAncmVhbHRpdmUnIH19XG4gICAgICAgIGlkPXtgZ3Jhdml0eV9mb3JtXyR7dGhpcy5wcm9wcy5mb3JtSUR9YH1cbiAgICAgID5cbiAgICAgICAge2Zvcm1EYXRhLnRpdGxlID8gbnVsbCA6IExvYWRpbmcgJiYgPExvYWRpbmcgaXNMb2FkaW5nIC8+fVxuXG4gICAgICAgIHtzdWJtaXRGYWlsZWQgJiYgIXN1Ym1pdFN1Y2Nlc3MgJiYgKFxuICAgICAgICAgIDxGb3JtRXJyb3JcbiAgICAgICAgICAgIGZpZWxkcz17Zm9ybVZhbHVlc31cbiAgICAgICAgICAgIGVycm9ycz17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2VzfVxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlPVwiVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHlvdXIgc3VibWlzc2lvblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7c3VibWl0U3VjY2VzcyAmJiB0aGlzLnN0YXRlLmNvbmZpcm1hdGlvbk1lc3NhZ2UgJiYgKFxuICAgICAgICAgIDxGb3JtQ29uZmlybWF0aW9uIGNvbmZpcm1hdGlvbj17dGhpcy5zdGF0ZS5jb25maXJtYXRpb25NZXNzYWdlfSAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHshc3VibWl0U3VjY2VzcyAmJiBmb3JtRGF0YS5maWVsZHMgPyAoXG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIG9uU3VibWl0PXtlID0+IHRoaXMub25TdWJtaXQoZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nzc0NsYXNzfVxuICAgICAgICAgICAgZW5jVHlwZT17aXNNdWx0aXBhcnQgPyAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICBub1ZhbGlkYXRlXG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyhmb3JtRGF0YS50aXRsZSB8fCBmb3JtRGF0YS5kZXNjcmlwdGlvbikgJiYgKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtmb3JtRGF0YS50aXRsZSAmJiB0aXRsZSA/IDxoMyBjbGFzc05hbWU9XCJmb3JtLXRpdGxlXCI+e2Zvcm1EYXRhLnRpdGxlfTwvaDM+IDogbnVsbH1cbiAgICAgICAgICAgICAgICB7Zm9ybURhdGEuZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb3JtLWRlc2NyaXB0aW9uXCI+e2Zvcm1EYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0td3JhcHBlclwiPlxuICAgICAgICAgICAgICA8UmVuZGVyRmllbGRzXG4gICAgICAgICAgICAgICAgc3R5bGVkQ29tcG9uZW50cz17c3R5bGVkQ29tcG9uZW50c31cbiAgICAgICAgICAgICAgICBmaWVsZHM9e2Zvcm1EYXRhLmZpZWxkc31cbiAgICAgICAgICAgICAgICBmb3JtVmFsdWVzPXtmb3JtVmFsdWVzfVxuICAgICAgICAgICAgICAgIHN1Ym1pdEZhaWxlZD17c3VibWl0RmFpbGVkfVxuICAgICAgICAgICAgICAgIHN1Ym1pdFN1Y2Nlc3M9e3N1Ym1pdFN1Y2Nlc3N9XG4gICAgICAgICAgICAgICAgdXBkYXRlRm9ybT17dGhpcy51cGRhdGVGb3JtSGFuZGxlcn1cbiAgICAgICAgICAgICAgICB0b3VjaGVkPXt0b3VjaGVkfVxuICAgICAgICAgICAgICAgIHNldFRvdWNoZWQ9e3RoaXMuc2V0VG91Y2hlZH1cbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXtmb3JtRGF0YS5wYWdpbmF0aW9ufVxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2U9e2FjdGl2ZVBhZ2V9XG4gICAgICAgICAgICAgICAgcHJldlN0ZXA9e3RoaXMucHJldlN0ZXB9XG4gICAgICAgICAgICAgICAgbmV4dFN0ZXA9e3RoaXMubmV4dFN0ZXB9XG4gICAgICAgICAgICAgICAgaXNOZXh0RGlzYWJsZWQ9e2lzTmV4dERpc2FibGVkfVxuICAgICAgICAgICAgICAgIGNoZWNrQ29uZGl0aW9uYWxMb2dpYz17dGhpcy5jaGVja0NvbmRpdGlvbmFsTG9naWN9XG4gICAgICAgICAgICAgICAgc2F2ZVN0YXRlVG9IdG1sRmllbGQ9e3NhdmVTdGF0ZVRvSHRtbEZpZWxkfVxuICAgICAgICAgICAgICAgIGVuYWJsZUhvbmV5cG90PXtmb3JtRGF0YS5lbmFibGVIb25leXBvdH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgeyghZm9ybURhdGEucGFnaW5hdGlvblxuICAgICAgICAgICAgICAgIHx8IChmb3JtRGF0YS5wYWdpbmF0aW9uICYmIGZvcm1EYXRhLnBhZ2luYXRpb24ucGFnZXMubGVuZ3RoID09PSBhY3RpdmVQYWdlKSkgJiYgKFxuICAgICAgICAgICAgICAgIDxTdWJtaXRcbiAgICAgICAgICAgICAgICAgIEJ1dHRvbj17QnV0dG9ufVxuICAgICAgICAgICAgICAgICAgTG9hZGluZz17TG9hZGluZ31cbiAgICAgICAgICAgICAgICAgIGZvcm1EYXRhPXtmb3JtRGF0YX1cbiAgICAgICAgICAgICAgICAgIHN1Ym1pdEljb249e3N1Ym1pdEljb259XG4gICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXtpc0Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgc3VibWl0dGluZz17c3VibWl0dGluZ31cbiAgICAgICAgICAgICAgICAgIHByZXZTdGVwPXt0aGlzLnByZXZTdGVwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgJydcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuR3Jhdml0eUZvcm0uZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogdHJ1ZSxcbiAgc3VibWl0SWNvbjogZmFsc2UsXG4gIHNhdmVTdGF0ZVRvSHRtbEZpZWxkOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXZpdHlGb3JtO1xuIl19
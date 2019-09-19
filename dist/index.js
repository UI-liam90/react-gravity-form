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
      }, function () {
        // pass state to parent component
        var onChange = _this.props.onChange;

        if (onChange) {
          onChange(_this.state.formValues);
        }
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHcmF2aXR5Rm9ybSIsInByb3BzIiwiaWQiLCJzZXRTdGF0ZSIsInRvdWNoZWQiLCJzdGF0ZSIsImV2ZW50IiwiZmllbGQiLCJmb3JtVmFsdWVzIiwiY29uZGl0aW9hbmxJZHMiLCJjb25kaXRpb25GaWVsZHMiLCJ0eXBlIiwiaXNSZXF1aXJlZCIsInZhbHVlIiwidmFsdWVzIiwiaW5kZXgiLCJpbmRleE9mIiwidGFyZ2V0Iiwic3BsaWNlIiwicHVzaCIsInN1YklkIiwiZGF0ZUxhYmVsIiwidmFsIiwibGFiZWwiLCJjc3NDbGFzcyIsInZhbGlkIiwiaSIsImxlbmd0aCIsImhpZGUiLCJjaGVja0NvbmRpdGlvbmFsTG9naWMiLCJjb25kaXRpb25hbExvZ2ljIiwiaGlkZUZpZWxkIiwicGFnZU51bWJlciIsIm9uQ2hhbmdlIiwicHJldmVudERlZmF1bHQiLCJzdWJtaXR0aW5nIiwic3VibWl0U3VjY2VzcyIsInN1Ym1pdEZhaWxlZCIsImNvbmZpcm1hdGlvbk1lc3NhZ2UiLCJlcnJvck1lc3NhZ2VzIiwiZm9ybUlEIiwiYmFja2VuZFVybCIsImdmU3VibWlzc2lvblVybCIsInN1YnN0cmluZyIsImRhdGEiLCJGb3JtRGF0YSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImlzX3ZhbGlkIiwiY29uZmlybWF0aW9uX21lc3NhZ2UiLCJlcnJvciIsInZhbGlkYXRpb25fbWVzc2FnZXMiLCJhY3RpdmVQYWdlIiwiZSIsImNvbmRpdGlvbiIsImZpZWxkcyIsInJ1bGVzIiwiYWN0aW9uVHlwZSIsImhpZGVCYXNlZE9uUnVsZXMiLCJmaWVsZElkIiwiY29uZGl0aW9uRmllbGRWYWx1ZSIsInN0cmluZ1ZhbHVlIiwiQXJyYXkiLCJpc0FycmF5Iiwiam9pbiIsImV2ZXJ5IiwibG9hZGluZyIsImlzVmFsaWQiLCJmb3JtRGF0YSIsImlzTXVsdGlwYXJ0IiwiX2lzTW91bnRlZCIsImdldCIsImZvcm0iLCJjaG9pY2VzIiwiZmlsdGVyIiwiY2hvaWNlIiwiaXNTZWxlY3RlZCIsIm1hcCIsInByZXNlbGVjdGVkIiwiZmluZCIsImRlZmF1bHRWYWx1ZSIsInRtcEZpZWxkIiwiaWRzIiwiaXRlbSIsInBhcnNlSW50IiwicGFnaW5hdGlvbiIsInRpdGxlIiwic3VibWl0SWNvbiIsInNhdmVTdGF0ZVRvSHRtbEZpZWxkIiwic3R5bGVkQ29tcG9uZW50cyIsIkJ1dHRvbiIsIkxvYWRpbmciLCJHRldyYXBwZXIiLCJpc0Rpc2FibGVkIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJ4IiwiaXNOZXh0RGlzYWJsZWQiLCJwb3NpdGlvbiIsIm9uU3VibWl0IiwidW5kZWZpbmVkIiwiZGVzY3JpcHRpb24iLCJ1cGRhdGVGb3JtSGFuZGxlciIsInNldFRvdWNoZWQiLCJwcmV2U3RlcCIsIm5leHRTdGVwIiwiZW5hYmxlSG9uZXlwb3QiLCJwYWdlcyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsVzs7Ozs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixxRkFBTUEsS0FBTjs7QUFEaUIsaUVBZ0dOLFVBQUNDLEVBQUQsRUFBUTtBQUNuQixZQUFLQyxRQUFMLENBQWM7QUFDWkMsUUFBQUEsT0FBTyxvQkFBTyxNQUFLQyxLQUFMLENBQVdELE9BQWxCLHNCQUE0QkYsRUFBNUIsRUFBaUMsSUFBakM7QUFESyxPQUFkO0FBR0QsS0FwR2tCOztBQUFBLHdFQXNHQyxVQUFDSSxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFBQSx3QkFDb0IsTUFBS0YsS0FEekI7QUFBQSxVQUM1QkcsVUFENEIsZUFDNUJBLFVBRDRCO0FBQUEsVUFDaEJDLGNBRGdCLGVBQ2hCQSxjQURnQjtBQUFBLFVBQ0FDLGVBREEsZUFDQUEsZUFEQTtBQUFBLFVBRTlCUixFQUY4QixHQUVMSyxLQUZLLENBRTlCTCxFQUY4QjtBQUFBLFVBRTFCUyxJQUYwQixHQUVMSixLQUZLLENBRTFCSSxJQUYwQjtBQUFBLFVBRXBCQyxVQUZvQixHQUVMTCxLQUZLLENBRXBCSyxVQUZvQixFQUdwQzs7QUFDQSxVQUFJQyxLQUFKOztBQUNBLFVBQUlOLEtBQUssQ0FBQ0ksSUFBTixLQUFlLFVBQW5CLEVBQStCO0FBQzdCLFlBQU1HLE1BQU0sc0JBQU9OLFVBQVUsQ0FBQ0QsS0FBSyxDQUFDTCxFQUFQLENBQVYsQ0FBcUJXLEtBQTVCLENBQVo7O0FBQ0EsWUFBTUUsS0FBSyxHQUFHRCxNQUFNLENBQUNFLE9BQVAsQ0FBZVYsS0FBSyxDQUFDVyxNQUFOLENBQWFKLEtBQTVCLENBQWQ7O0FBQ0EsWUFBSUUsS0FBSyxHQUFHLENBQUMsQ0FBYixFQUFnQjtBQUNkRCxVQUFBQSxNQUFNLENBQUNJLE1BQVAsQ0FBY0gsS0FBZCxFQUFxQixDQUFyQjtBQUNELFNBRkQsTUFFTztBQUNMRCxVQUFBQSxNQUFNLENBQUNLLElBQVAsQ0FBWWIsS0FBSyxDQUFDVyxNQUFOLENBQWFKLEtBQXpCO0FBQ0Q7O0FBQ0RBLFFBQUFBLEtBQUssR0FBR0MsTUFBUjtBQUNELE9BVEQsTUFTTyxJQUFJUCxLQUFLLENBQUNJLElBQU4sSUFBYyxNQUFsQixFQUEwQjtBQUFBLFlBQ3ZCUyxLQUR1QixHQUNGYixLQURFLENBQ3ZCYSxLQUR1QjtBQUFBLFlBQ2hCQyxTQURnQixHQUNGZCxLQURFLENBQ2hCYyxTQURnQjs7QUFFL0IsWUFBTVAsT0FBTSxzQkFBT04sVUFBVSxDQUFDRCxLQUFLLENBQUNMLEVBQVAsQ0FBVixDQUFxQlcsS0FBNUIsQ0FBWjs7QUFDQUMsUUFBQUEsT0FBTSxDQUFDTSxLQUFELENBQU4sR0FBZ0I7QUFDZEUsVUFBQUEsR0FBRyxFQUFFaEIsS0FBSyxDQUFDVyxNQUFOLENBQWFKLEtBREo7QUFFZFUsVUFBQUEsS0FBSyxFQUFFRjtBQUZPLFNBQWhCO0FBSUFSLFFBQUFBLEtBQUssR0FBR0MsT0FBUjtBQUNELE9BUk0sTUFRQTtBQUNMRCxRQUFBQSxLQUFLLEdBQUdQLEtBQUssQ0FBQ1csTUFBTixHQUFlWCxLQUFLLENBQUNXLE1BQU4sQ0FBYUosS0FBNUIsR0FBb0MsTUFBNUM7QUFDRCxPQXhCbUMsQ0F5QnBDOzs7QUFDQSxVQUFJRixJQUFJLEtBQUssTUFBVCxJQUFtQkosS0FBSyxDQUFDaUIsUUFBTixDQUFlUixPQUFmLENBQXVCLE1BQXZCLElBQWlDLENBQUMsQ0FBekQsRUFBNEQ7QUFDMURMLFFBQUFBLElBQUksR0FBRyxNQUFQO0FBQ0QsT0E1Qm1DLENBNkJwQzs7O0FBQ0EsVUFBTWMsS0FBSyxHQUFHLCtCQUFjWixLQUFkLEVBQXFCRixJQUFyQixFQUEyQkMsVUFBM0IsRUFBdUNMLEtBQXZDLENBQWQsQ0E5Qm9DLENBZ0NwQztBQUNBOztBQUNBLFVBQUlFLGNBQWMsQ0FBQ08sT0FBZixDQUF1QmQsRUFBdkIsTUFBK0IsQ0FBQyxDQUFwQyxFQUF1QztBQUNyQ00sUUFBQUEsVUFBVSxDQUFDTixFQUFELENBQVYsQ0FBZVcsS0FBZixHQUF1QkEsS0FBdkI7O0FBQ0EsYUFBSyxJQUFJYSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHaEIsZUFBZSxDQUFDaUIsTUFBcEMsRUFBNENELENBQUMsRUFBN0MsRUFBaUQ7QUFBQSxjQUN2Q3hCLEdBRHVDLEdBQ2hDUSxlQUFlLENBQUNnQixDQUFELENBRGlCLENBQ3ZDeEIsRUFEdUM7O0FBRS9DLGNBQU0wQixJQUFJLEdBQUcsTUFBS0MscUJBQUwsQ0FBMkJuQixlQUFlLENBQUNnQixDQUFELENBQWYsQ0FBbUJJLGdCQUE5QyxFQUFnRXRCLFVBQWhFLENBQWI7O0FBQ0FBLFVBQUFBLFVBQVUsQ0FBQ04sR0FBRCxDQUFWLENBQWU2QixTQUFmLEdBQTJCSCxJQUEzQjs7QUFDQSxjQUFJQSxJQUFKLEVBQVU7QUFDUixnQkFBSXBCLFVBQVUsQ0FBQ04sR0FBRCxDQUFWLENBQWVVLFVBQWYsSUFBNkJnQixJQUFqQyxFQUF1QztBQUNyQ3BCLGNBQUFBLFVBQVUsQ0FBQ04sR0FBRCxDQUFWLENBQWVXLEtBQWYsR0FBdUIsRUFBdkI7QUFDRDs7QUFDREwsWUFBQUEsVUFBVSxDQUFDTixHQUFELENBQVYsQ0FBZXVCLEtBQWYsR0FBdUIsQ0FBQyxDQUFDakIsVUFBVSxDQUFDTixHQUFELENBQVYsQ0FBZVUsVUFBeEM7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsWUFBS1QsUUFBTCxDQUNFO0FBQ0VLLFFBQUFBLFVBQVUsb0JBQ0xBLFVBREssc0JBRVBOLEVBRk8sRUFFRjtBQUNKVyxVQUFBQSxLQUFLLEVBQUxBLEtBREk7QUFFSlgsVUFBQUEsRUFBRSxFQUFGQSxFQUZJO0FBR0p1QixVQUFBQSxLQUFLLEVBQUxBLEtBSEk7QUFJSkYsVUFBQUEsS0FBSyxFQUFFaEIsS0FBSyxDQUFDZ0IsS0FKVDtBQUtKUyxVQUFBQSxVQUFVLEVBQUV6QixLQUFLLENBQUN5QixVQUxkO0FBTUpSLFVBQUFBLFFBQVEsRUFBRWpCLEtBQUssQ0FBQ2lCLFFBTlo7QUFPSlosVUFBQUEsVUFBVSxFQUFFTCxLQUFLLENBQUNLO0FBUGQsU0FGRTtBQURaLE9BREYsRUFlRSxZQUFNO0FBQ0o7QUFESSxZQUVJcUIsUUFGSixHQUVpQixNQUFLaEMsS0FGdEIsQ0FFSWdDLFFBRko7O0FBR0osWUFBSUEsUUFBSixFQUFjO0FBQ1pBLFVBQUFBLFFBQVEsQ0FBQyxNQUFLNUIsS0FBTCxDQUFXRyxVQUFaLENBQVI7QUFDRDtBQUNGLE9BckJIO0FBdUJELEtBOUtrQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBZ0xSLGlCQUFPRixLQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVEEsZ0JBQUFBLEtBQUssQ0FBQzRCLGNBQU47O0FBQ0Esc0JBQUsvQixRQUFMLENBQWM7QUFDWmdDLGtCQUFBQSxVQUFVLEVBQUUsSUFEQTtBQUVaQyxrQkFBQUEsYUFBYSxFQUFFLEtBRkg7QUFHWkMsa0JBQUFBLFlBQVksRUFBRSxLQUhGO0FBSVpDLGtCQUFBQSxtQkFBbUIsRUFBRSxLQUpUO0FBS1pDLGtCQUFBQSxhQUFhLEVBQUU7QUFMSCxpQkFBZDs7QUFGUyw4QkFTc0IsTUFBS3RDLEtBVDNCLEVBU0R1QyxNQVRDLGVBU0RBLE1BVEMsRUFTT0MsVUFUUCxlQVNPQSxVQVRQO0FBVUhDLGdCQUFBQSxlQVZHLEdBVWVELFVBQVUsQ0FBQ0UsU0FBWCxDQUFxQixDQUFyQixFQUF3QkYsVUFBVSxDQUFDekIsT0FBWCxDQUFtQixVQUFuQixDQUF4QixDQVZmO0FBV0g0QixnQkFBQUEsSUFYRyxHQVdJLElBQUlDLFFBQUosQ0FBYXZDLEtBQUssQ0FBQ1csTUFBbkIsQ0FYSjs7QUFZVDZCLGtDQUNHQyxJQURILFdBQ1dMLGVBRFgsa0NBQ2tERixNQURsRCxtQkFDd0VJLElBRHhFLEVBRUdJLElBRkgsQ0FFUSxVQUFDQyxRQUFELEVBQWM7QUFDbEIsc0JBQUlBLFFBQVEsQ0FBQ0wsSUFBVCxJQUFpQkssUUFBUSxDQUFDTCxJQUFULENBQWNNLFFBQW5DLEVBQTZDO0FBQzNDLDBCQUFLL0MsUUFBTCxDQUFjO0FBQ1pnQyxzQkFBQUEsVUFBVSxFQUFFLEtBREE7QUFFWkMsc0JBQUFBLGFBQWEsRUFBRSxJQUZIO0FBR1pFLHNCQUFBQSxtQkFBbUIsRUFBRVcsUUFBUSxDQUFDTCxJQUFULENBQWNPO0FBSHZCLHFCQUFkO0FBS0QsbUJBTkQsTUFNTztBQUNMLDBCQUFLaEQsUUFBTCxDQUFjO0FBQ1pnQyxzQkFBQUEsVUFBVSxFQUFFLEtBREE7QUFFWkUsc0JBQUFBLFlBQVksRUFBRSxJQUZGO0FBR1pFLHNCQUFBQSxhQUFhLEVBQUU7QUFISCxxQkFBZDtBQUtEO0FBQ0YsaUJBaEJILFdBaUJTLFVBQUNhLEtBQUQsRUFBVztBQUNoQix3QkFBS2pELFFBQUwsQ0FBYztBQUNaZ0Msb0JBQUFBLFVBQVUsRUFBRSxLQURBO0FBRVpFLG9CQUFBQSxZQUFZLEVBQUUsSUFGRjtBQUdaRSxvQkFBQUEsYUFBYSxFQUFFYSxLQUFLLENBQUNILFFBQU4sQ0FBZUwsSUFBZixDQUFvQlM7QUFIdkIsbUJBQWQ7QUFLRCxpQkF2Qkg7O0FBWlM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FoTFE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsK0RBc05SLFlBQU07QUFBQSxVQUNQQyxVQURPLEdBQ1EsTUFBS2pELEtBRGIsQ0FDUGlELFVBRE87O0FBRWYsWUFBS25ELFFBQUwsQ0FBYztBQUNabUQsUUFBQUEsVUFBVSxFQUFFQSxVQUFVLEdBQUc7QUFEYixPQUFkO0FBR0QsS0EzTmtCOztBQUFBLCtEQTZOUixVQUFDQyxDQUFELEVBQU87QUFDaEJBLE1BQUFBLENBQUMsQ0FBQ3JCLGNBQUY7QUFEZ0IsVUFFUm9CLFVBRlEsR0FFTyxNQUFLakQsS0FGWixDQUVSaUQsVUFGUTs7QUFHaEIsWUFBS25ELFFBQUwsQ0FBYztBQUNabUQsUUFBQUEsVUFBVSxFQUFFQSxVQUFVLEdBQUc7QUFEYixPQUFkO0FBR0QsS0FuT2tCOztBQUFBLDRFQXFPSyxVQUFDRSxTQUFELEVBQStCO0FBQUEsVUFBbkJDLE1BQW1CLHVFQUFWLEtBQVU7QUFBQSxVQUM3Q0MsS0FENkMsR0FDdkJGLFNBRHVCLENBQzdDRSxLQUQ2QztBQUFBLFVBQ3RDQyxVQURzQyxHQUN2QkgsU0FEdUIsQ0FDdENHLFVBRHNDO0FBRXJELFVBQUksQ0FBQ0QsS0FBTCxFQUFZLE9BQU8sSUFBUDtBQUVaLFVBQU1sRCxVQUFVLEdBQUdpRCxNQUFNLElBQUksTUFBS3BELEtBQUwsQ0FBV0csVUFBeEMsQ0FKcUQsQ0FNckQ7QUFDQTs7QUFDQSxVQUFJdUIsU0FBUyxHQUFHNEIsVUFBVSxLQUFLLE1BQS9CO0FBQ0EsVUFBTUMsZ0JBQWdCLEdBQUcsRUFBekI7O0FBQ0EsV0FBSyxJQUFJbEMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2dDLEtBQUssQ0FBQy9CLE1BQTFCLEVBQWtDRCxDQUFDLEVBQW5DLEVBQXVDO0FBQUEsdUJBQ1ZnQyxLQUFLLENBQUNoQyxDQUFELENBREs7QUFBQSxZQUM3Qm1DLE9BRDZCLFlBQzdCQSxPQUQ2QjtBQUFBLFlBQ3BCaEQsS0FEb0IsWUFDcEJBLEtBRG9CO0FBRXJDLFlBQU1pRCxtQkFBbUIsR0FBR3RELFVBQVUsQ0FBQ3FELE9BQUQsQ0FBVixDQUFvQmhELEtBQWhEO0FBRUEsWUFBTWtELFdBQVcsR0FBR0MsS0FBSyxDQUFDQyxPQUFOLENBQWNILG1CQUFkLElBQ2hCQSxtQkFBbUIsQ0FBQ0ksSUFBcEIsQ0FBeUIsRUFBekIsQ0FEZ0IsR0FFaEJKLG1CQUZKOztBQUdBLFlBQUlDLFdBQVcsSUFBSWxELEtBQUssS0FBS2tELFdBQTdCLEVBQTBDO0FBQ3hDSCxVQUFBQSxnQkFBZ0IsQ0FBQ2xDLENBQUQsQ0FBaEIsR0FBc0JpQyxVQUFVLEtBQUssTUFBckM7QUFDRCxTQUZELE1BRU87QUFDTEMsVUFBQUEsZ0JBQWdCLENBQUNsQyxDQUFELENBQWhCLEdBQXNCaUMsVUFBVSxLQUFLLE1BQXJDO0FBQ0Q7QUFDRjs7QUFDRDVCLE1BQUFBLFNBQVMsR0FBRzZCLGdCQUFnQixDQUFDTyxLQUFqQixDQUF1QixVQUFBekMsQ0FBQztBQUFBLGVBQUlBLENBQUMsS0FBSyxJQUFWO0FBQUEsT0FBeEIsQ0FBWixDQXZCcUQsQ0F3QnJEO0FBQ0E7O0FBQ0EsYUFBT0ssU0FBUDtBQUNELEtBaFFrQjs7QUFFakIsVUFBSzFCLEtBQUwsR0FBYTtBQUNYZ0MsTUFBQUEsWUFBWSxFQUFFLEtBREg7QUFFWEUsTUFBQUEsYUFBYSxFQUFFLEtBRko7QUFHWC9CLE1BQUFBLFVBQVUsRUFBRSxFQUhEO0FBSVg0RCxNQUFBQSxPQUFPLEVBQUUsSUFKRTtBQUtYakMsTUFBQUEsVUFBVSxFQUFFLEtBTEQ7QUFNWEMsTUFBQUEsYUFBYSxFQUFFLEtBTko7QUFPWEUsTUFBQUEsbUJBQW1CLEVBQUUsS0FQVjtBQVFYK0IsTUFBQUEsT0FBTyxFQUFFLEtBUkU7QUFTWEMsTUFBQUEsUUFBUSxFQUFFLEVBVEM7QUFVWGxFLE1BQUFBLE9BQU8sRUFBRSxFQVZFO0FBV1hrRCxNQUFBQSxVQUFVLEVBQUUsS0FYRDtBQVlYNUMsTUFBQUEsZUFBZSxFQUFFLEVBWk47QUFhWEQsTUFBQUEsY0FBYyxFQUFFLEVBYkw7QUFjWDhELE1BQUFBLFdBQVcsRUFBRTtBQWRGLEtBQWI7QUFGaUI7QUFrQmxCOzs7Ozs7Ozs7Ozs7OzsrQkFHZ0MsS0FBS3RFLEssRUFBNUJ1QyxNLGdCQUFBQSxNLEVBQVFDLFUsZ0JBQUFBLFU7QUFDaEIscUJBQUsrQixVQUFMLEdBQWtCLElBQWxCO0FBQ0lELGdCQUFBQSxXLEdBQWMsSzs7dUJBQ0N6QixrQkFDaEIyQixHQURnQixXQUNUaEMsVUFEUyxjQUNLRCxNQURMLEdBRWhCUSxJQUZnQixDQUVYLFVBQUFDLFFBQVE7QUFBQSx5QkFBSUEsUUFBUSxDQUFDTCxJQUFiO0FBQUEsaUJBRkcsV0FHVjtBQUFBLHlCQUFNLEtBQU47QUFBQSxpQkFIVSxDOzs7QUFBYjhCLGdCQUFBQSxJOztzQkFLRkEsSUFBSSxJQUFJLEtBQUtGLFU7Ozs7O0FBQ1RoRSxnQkFBQUEsVSxHQUFhLEU7QUFDYkUsZ0JBQUFBLGUsR0FBa0IsRTtBQUNsQkQsZ0JBQUFBLGMsR0FBaUIsRSxFQUN2Qjs7Ozs7OztBQUNBLGlDQUFvQmlFLElBQUksQ0FBQ2pCLE1BQXpCLHVIQUFpQztBQUF0QmxELGtCQUFBQSxLQUFzQjtBQUMzQk0sa0JBQUFBLEtBRDJCOztBQUUvQixzQkFBSU4sS0FBSyxDQUFDSSxJQUFOLEtBQWUsVUFBbkIsRUFBK0I7QUFDN0JFLG9CQUFBQSxLQUFLLEdBQUdOLEtBQUssQ0FBQ29FLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQixVQUFBQyxNQUFNO0FBQUEsNkJBQUlBLE1BQU0sQ0FBQ0MsVUFBWDtBQUFBLHFCQUEzQixFQUFrREMsR0FBbEQsQ0FBc0QsVUFBQUYsTUFBTTtBQUFBLDZCQUFJQSxNQUFNLENBQUNoRSxLQUFYO0FBQUEscUJBQTVELENBQVI7QUFDRCxtQkFGRCxNQUVPLElBQUlOLEtBQUssQ0FBQ0ksSUFBTixLQUFlLE9BQW5CLEVBQTRCO0FBQzNCcUUsb0JBQUFBLFdBRDJCLEdBQ2J6RSxLQUFLLENBQUNvRSxPQUFOLENBQWNNLElBQWQsQ0FBbUIsVUFBQUosTUFBTTtBQUFBLDZCQUFJQSxNQUFNLENBQUNDLFVBQVg7QUFBQSxxQkFBekIsQ0FEYTtBQUVqQ2pFLG9CQUFBQSxLQUFLLEdBQUdtRSxXQUFXLEdBQUdBLFdBQVcsQ0FBQ25FLEtBQWYsR0FBdUIsRUFBMUM7QUFDRCxtQkFITSxNQUdBO0FBQ0xBLG9CQUFBQSxLQUFLLEdBQUdOLEtBQUssQ0FBQzJFLFlBQWQ7O0FBQ0Esd0JBQUkzRSxLQUFLLENBQUNJLElBQU4sS0FBZSxZQUFuQixFQUFpQztBQUMvQjRELHNCQUFBQSxXQUFXLEdBQUcsSUFBZDtBQUNEO0FBQ0YsbUJBWjhCLENBYy9COzs7QUFDQSxzQkFBSWhFLEtBQUssQ0FBQ3VCLGdCQUFWLEVBQTRCO0FBQ3BCcUQsb0JBQUFBLFFBRG9CLEdBQ1Q7QUFDZmpGLHNCQUFBQSxFQUFFLEVBQUVLLEtBQUssQ0FBQ0wsRUFESztBQUVmNEIsc0JBQUFBLGdCQUFnQixFQUFFdkIsS0FBSyxDQUFDdUI7QUFGVCxxQkFEUztBQUtwQnNELG9CQUFBQSxHQUxvQixHQUtkN0UsS0FBSyxDQUFDdUIsZ0JBQU4sQ0FBdUI0QixLQUF2QixDQUE2QnFCLEdBQTdCLENBQWlDLFVBQUFNLElBQUk7QUFBQSw2QkFBSUEsSUFBSSxDQUFDeEIsT0FBVDtBQUFBLHFCQUFyQyxDQUxjOztBQU0xQix5QkFBU25DLEVBQVQsR0FBYSxDQUFiLEVBQWdCQSxFQUFDLEdBQUcwRCxHQUFHLENBQUN6RCxNQUF4QixFQUFnQ0QsRUFBQyxFQUFqQyxFQUFxQztBQUM3QnhCLHNCQUFBQSxFQUQ2QixHQUN4Qm9GLFFBQVEsQ0FBQ0YsR0FBRyxDQUFDMUQsRUFBRCxDQUFKLENBRGdCOztBQUVuQywwQkFBSWpCLGNBQWMsQ0FBQ08sT0FBZixDQUF1QmQsRUFBdkIsTUFBK0IsQ0FBQyxDQUFwQyxFQUF1QztBQUNyQ08sd0JBQUFBLGNBQWMsQ0FBQ1UsSUFBZixDQUFvQmpCLEVBQXBCO0FBQ0Q7QUFDRjs7QUFDRFEsb0JBQUFBLGVBQWUsQ0FBQ1MsSUFBaEIsQ0FBcUJnRSxRQUFyQjtBQUNEOztBQUVEM0Usa0JBQUFBLFVBQVUsQ0FBQ0QsS0FBSyxDQUFDTCxFQUFQLENBQVYsR0FBdUI7QUFDckJ1QixvQkFBQUEsS0FBSyxFQUFFLCtCQUFjWixLQUFkLEVBQXFCTixLQUFLLENBQUNJLElBQTNCLEVBQWlDSixLQUFLLENBQUNLLFVBQXZDLENBRGM7QUFFckJDLG9CQUFBQSxLQUFLLEVBQUxBLEtBRnFCO0FBR3JCVSxvQkFBQUEsS0FBSyxFQUFFaEIsS0FBSyxDQUFDZ0IsS0FIUTtBQUlyQlMsb0JBQUFBLFVBQVUsRUFBRXpCLEtBQUssQ0FBQ3lCLFVBSkc7QUFLckJSLG9CQUFBQSxRQUFRLEVBQUVqQixLQUFLLENBQUNpQixRQUxLO0FBTXJCWixvQkFBQUEsVUFBVSxFQUFFTCxLQUFLLENBQUNLO0FBTkcsbUJBQXZCO0FBUUQsaUIsQ0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFCQUFTYyxDQUFULEdBQWEsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHaEIsZUFBZSxDQUFDaUIsTUFBcEMsRUFBNENELENBQUMsRUFBN0MsRUFBaUQ7QUFDL0NsQixrQkFBQUEsVUFBVSxDQUFDRSxlQUFlLENBQUNnQixDQUFELENBQWYsQ0FBbUJ4QixFQUFwQixDQUFWLENBQWtDNkIsU0FBbEMsR0FBOEMsS0FBS0YscUJBQUwsQ0FDNUNuQixlQUFlLENBQUNnQixDQUFELENBQWYsQ0FBbUJJLGdCQUR5QixFQUU1Q3RCLFVBRjRDLENBQTlDO0FBSUQ7O0FBRUQscUJBQUtMLFFBQUwsQ0FBYztBQUNabUUsa0JBQUFBLFFBQVEsRUFBRUksSUFERTtBQUVabEUsa0JBQUFBLFVBQVUsRUFBVkEsVUFGWTtBQUdaOEMsa0JBQUFBLFVBQVUsRUFBRW9CLElBQUksQ0FBQ2EsVUFBTCxHQUFrQixDQUFsQixHQUFzQixLQUh0QjtBQUlaN0Usa0JBQUFBLGVBQWUsRUFBZkEsZUFKWTtBQUtaRCxrQkFBQUEsY0FBYyxFQUFkQSxjQUxZO0FBTVo4RCxrQkFBQUEsV0FBVyxFQUFYQTtBQU5ZLGlCQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkNBV21CO0FBQ3JCLFdBQUtDLFVBQUwsR0FBa0IsS0FBbEI7QUFDRDs7OzZCQW9LUTtBQUFBOztBQUFBLHlCQVVILEtBQUtuRSxLQVZGO0FBQUEsVUFFTGlFLFFBRkssZ0JBRUxBLFFBRks7QUFBQSxVQUdMOUQsVUFISyxnQkFHTEEsVUFISztBQUFBLFVBSUw2QixZQUpLLGdCQUlMQSxZQUpLO0FBQUEsVUFLTEQsYUFMSyxnQkFLTEEsYUFMSztBQUFBLFVBTUxoQyxPQU5LLGdCQU1MQSxPQU5LO0FBQUEsVUFPTCtCLFVBUEssZ0JBT0xBLFVBUEs7QUFBQSxVQVFMbUIsVUFSSyxnQkFRTEEsVUFSSztBQUFBLFVBU0xpQixXQVRLLGdCQVNMQSxXQVRLO0FBQUEseUJBYUgsS0FBS3RFLEtBYkY7QUFBQSxVQVlMdUYsS0FaSyxnQkFZTEEsS0FaSztBQUFBLFVBWUVDLFVBWkYsZ0JBWUVBLFVBWkY7QUFBQSxVQVljQyxvQkFaZCxnQkFZY0Esb0JBWmQ7QUFBQSxVQVlvQ0MsZ0JBWnBDLGdCQVlvQ0EsZ0JBWnBDOztBQUFBLGtCQWN3Q0EsZ0JBQWdCLElBQUksS0FkNUQ7QUFBQSxVQWNDQyxNQWRELFNBY0NBLE1BZEQ7QUFBQSxVQWNTQyxPQWRULFNBY1NBLE9BZFQ7QUFBQSxrQ0Fja0JDLFNBZGxCO0FBQUEsVUFja0JBLFNBZGxCLGdDQWM4QixLQWQ5Qjs7QUFBQSxVQWVDdEUsUUFmRCxHQWVjOEMsUUFmZCxDQWVDOUMsUUFmRDtBQWlCUCxVQUFNdUUsVUFBVSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWXpGLFVBQVosRUFBd0IwRixJQUF4QixDQUNqQixVQUFBQyxDQUFDO0FBQUEsZUFBSSxDQUFDM0YsVUFBVSxDQUFDMkYsQ0FBRCxDQUFWLENBQWNwRSxTQUFmLElBQTRCdkIsVUFBVSxDQUFDMkYsQ0FBRCxDQUFWLENBQWMxRSxLQUE5QztBQUFBLE9BRGdCLENBQW5CO0FBR0EsVUFBTTJFLGNBQWMsR0FBRzlDLFVBQVUsR0FDN0IwQyxNQUFNLENBQUNDLElBQVAsQ0FBWXpGLFVBQVosRUFBd0IwRixJQUF4QixDQUNBLFVBQUFDLENBQUM7QUFBQSxlQUFJM0YsVUFBVSxDQUFDMkYsQ0FBRCxDQUFWLENBQWNuRSxVQUFkLEtBQTZCc0IsVUFBN0IsSUFDRSxDQUFDOUMsVUFBVSxDQUFDMkYsQ0FBRCxDQUFWLENBQWNwRSxTQURqQixJQUVFdkIsVUFBVSxDQUFDMkYsQ0FBRCxDQUFWLENBQWMxRSxLQUZwQjtBQUFBLE9BREQsQ0FENkIsR0FNN0IsS0FOSjtBQVFBLGFBQ0U7QUFDRSxRQUFBLFNBQVMsRUFBQyxjQURaO0FBRUUsUUFBQSxHQUFHLEVBQUU7QUFBRTRFLFVBQUFBLFFBQVEsRUFBRTtBQUFaLFNBRlA7QUFHRSxRQUFBLEVBQUUseUJBQWtCLEtBQUtwRyxLQUFMLENBQVd1QyxNQUE3QjtBQUhKLFNBS0c4QixRQUFRLENBQUNrQixLQUFULEdBQWlCLElBQWpCLEdBQXdCSyxPQUFPLElBQUksZ0NBQUMsT0FBRDtBQUFTLFFBQUEsU0FBUztBQUFsQixRQUx0QyxFQU9HeEQsWUFBWSxJQUFJLENBQUNELGFBQWpCLElBQ0MsZ0NBQUMscUJBQUQ7QUFDRSxRQUFBLE1BQU0sRUFBRTVCLFVBRFY7QUFFRSxRQUFBLE1BQU0sRUFBRSxLQUFLSCxLQUFMLENBQVdrQyxhQUZyQjtBQUdFLFFBQUEsWUFBWSxFQUFDO0FBSGYsUUFSSixFQWVHSCxhQUFhLElBQUksS0FBSy9CLEtBQUwsQ0FBV2lDLG1CQUE1QixJQUNDLGdDQUFDLDRCQUFEO0FBQWtCLFFBQUEsWUFBWSxFQUFFLEtBQUtqQyxLQUFMLENBQVdpQztBQUEzQyxRQWhCSixFQW1CRyxDQUFDRixhQUFELElBQWtCa0MsUUFBUSxDQUFDYixNQUEzQixHQUNDO0FBQ0UsUUFBQSxRQUFRLEVBQUUsa0JBQUFGLENBQUM7QUFBQSxpQkFBSSxNQUFJLENBQUMrQyxRQUFMLENBQWMvQyxDQUFkLENBQUo7QUFBQSxTQURiO0FBRUUsUUFBQSxTQUFTLEVBQUUvQixRQUZiO0FBR0UsUUFBQSxPQUFPLEVBQUUrQyxXQUFXLEdBQUcscUJBQUgsR0FBMkJnQyxTQUhqRDtBQUlFLFFBQUEsVUFBVTtBQUpaLFNBTUcsQ0FBQ2pDLFFBQVEsQ0FBQ2tCLEtBQVQsSUFBa0JsQixRQUFRLENBQUNrQyxXQUE1QixLQUNDLDZDQUNHbEMsUUFBUSxDQUFDa0IsS0FBVCxJQUFrQkEsS0FBbEIsR0FBMEI7QUFBSSxRQUFBLFNBQVMsRUFBQztBQUFkLFNBQTRCbEIsUUFBUSxDQUFDa0IsS0FBckMsQ0FBMUIsR0FBNkUsSUFEaEYsRUFFR2xCLFFBQVEsQ0FBQ2tDLFdBQVQsR0FDQztBQUFHLFFBQUEsU0FBUyxFQUFDO0FBQWIsU0FBaUNsQyxRQUFRLENBQUNrQyxXQUExQyxDQURELEdBRUcsSUFKTixDQVBKLEVBZUU7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0UsZ0NBQUMsd0JBQUQ7QUFDRSxRQUFBLGdCQUFnQixFQUFFYixnQkFEcEI7QUFFRSxRQUFBLE1BQU0sRUFBRXJCLFFBQVEsQ0FBQ2IsTUFGbkI7QUFHRSxRQUFBLFVBQVUsRUFBRWpELFVBSGQ7QUFJRSxRQUFBLFlBQVksRUFBRTZCLFlBSmhCO0FBS0UsUUFBQSxhQUFhLEVBQUVELGFBTGpCO0FBTUUsUUFBQSxVQUFVLEVBQUUsS0FBS3FFLGlCQU5uQjtBQU9FLFFBQUEsT0FBTyxFQUFFckcsT0FQWDtBQVFFLFFBQUEsVUFBVSxFQUFFLEtBQUtzRyxVQVJuQjtBQVNFLFFBQUEsVUFBVSxFQUFFcEMsUUFBUSxDQUFDaUIsVUFUdkI7QUFVRSxRQUFBLFVBQVUsRUFBRWpDLFVBVmQ7QUFXRSxRQUFBLFFBQVEsRUFBRSxLQUFLcUQsUUFYakI7QUFZRSxRQUFBLFFBQVEsRUFBRSxLQUFLQyxRQVpqQjtBQWFFLFFBQUEsY0FBYyxFQUFFUixjQWJsQjtBQWNFLFFBQUEscUJBQXFCLEVBQUUsS0FBS3ZFLHFCQWQ5QjtBQWVFLFFBQUEsb0JBQW9CLEVBQUU2RCxvQkFmeEI7QUFnQkUsUUFBQSxjQUFjLEVBQUVwQixRQUFRLENBQUN1QztBQWhCM0IsUUFERixFQW1CRyxDQUFDLENBQUN2QyxRQUFRLENBQUNpQixVQUFWLElBQ0lqQixRQUFRLENBQUNpQixVQUFULElBQXVCakIsUUFBUSxDQUFDaUIsVUFBVCxDQUFvQnVCLEtBQXBCLENBQTBCbkYsTUFBMUIsS0FBcUMyQixVQURqRSxLQUVDLGdDQUFDLGtCQUFEO0FBQ0UsUUFBQSxNQUFNLEVBQUVzQyxNQURWO0FBRUUsUUFBQSxPQUFPLEVBQUVDLE9BRlg7QUFHRSxRQUFBLFFBQVEsRUFBRXZCLFFBSFo7QUFJRSxRQUFBLFVBQVUsRUFBRW1CLFVBSmQ7QUFLRSxRQUFBLFVBQVUsRUFBRU0sVUFMZDtBQU1FLFFBQUEsVUFBVSxFQUFFNUQsVUFOZDtBQU9FLFFBQUEsUUFBUSxFQUFFLEtBQUt3RTtBQVBqQixRQXJCSixDQWZGLENBREQsR0FrREMsRUFyRUosQ0FERjtBQTBFRDs7OztFQXpXdUJJLGdCOztBQTRXMUIvRyxXQUFXLENBQUNnSCxZQUFaLEdBQTJCO0FBQ3pCeEIsRUFBQUEsS0FBSyxFQUFFLElBRGtCO0FBRXpCQyxFQUFBQSxVQUFVLEVBQUUsS0FGYTtBQUd6QkMsRUFBQUEsb0JBQW9CLEVBQUU7QUFIRyxDQUEzQjtlQU1lMUYsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFJlbmRlckZpZWxkcyBmcm9tICcuL0Zvcm1FbGVtZW50cy9SZW5kZXJGaWVsZHMnO1xuaW1wb3J0IEZvcm1FcnJvciBmcm9tICcuL0Zvcm1FbGVtZW50cy9Gb3JtRXJyb3InO1xuaW1wb3J0IEZvcm1Db25maXJtYXRpb24gZnJvbSAnLi9Gb3JtRWxlbWVudHMvRm9ybUNvbmZpcm1hdGlvbic7XG5pbXBvcnQgeyB2YWxpZGF0ZUZpZWxkIH0gZnJvbSAnLi9IZWxwZXJzL3ZhbGlkYXRpb24nO1xuaW1wb3J0IFN1Ym1pdCBmcm9tICcuL0Zvcm1FbGVtZW50cy9TdWJtaXQnO1xuXG5jbGFzcyBHcmF2aXR5Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdWJtaXRGYWlsZWQ6IGZhbHNlLFxuICAgICAgZXJyb3JNZXNzYWdlczogZmFsc2UsXG4gICAgICBmb3JtVmFsdWVzOiB7fSxcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgIHN1Ym1pdFN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgY29uZmlybWF0aW9uTWVzc2FnZTogZmFsc2UsXG4gICAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICAgIGZvcm1EYXRhOiB7fSxcbiAgICAgIHRvdWNoZWQ6IHt9LFxuICAgICAgYWN0aXZlUGFnZTogZmFsc2UsXG4gICAgICBjb25kaXRpb25GaWVsZHM6IHt9LFxuICAgICAgY29uZGl0aW9hbmxJZHM6IHt9LFxuICAgICAgaXNNdWx0aXBhcnQ6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGZvcm1JRCwgYmFja2VuZFVybCB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgIGxldCBpc011bHRpcGFydCA9IGZhbHNlO1xuICAgIGNvbnN0IGZvcm0gPSBhd2FpdCBheGlvc1xuICAgICAgLmdldChgJHtiYWNrZW5kVXJsfS8ke2Zvcm1JRH1gKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAgIC5jYXRjaCgoKSA9PiBmYWxzZSk7XG5cbiAgICBpZiAoZm9ybSAmJiB0aGlzLl9pc01vdW50ZWQpIHtcbiAgICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSB7fTtcbiAgICAgIGNvbnN0IGNvbmRpdGlvbkZpZWxkcyA9IFtdO1xuICAgICAgY29uc3QgY29uZGl0aW9hbmxJZHMgPSBbXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBmb3JtLmZpZWxkcykge1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGlmIChmaWVsZC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgdmFsdWUgPSBmaWVsZC5jaG9pY2VzLmZpbHRlcihjaG9pY2UgPT4gY2hvaWNlLmlzU2VsZWN0ZWQpLm1hcChjaG9pY2UgPT4gY2hvaWNlLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgY29uc3QgcHJlc2VsZWN0ZWQgPSBmaWVsZC5jaG9pY2VzLmZpbmQoY2hvaWNlID0+IGNob2ljZS5pc1NlbGVjdGVkKTtcbiAgICAgICAgICB2YWx1ZSA9IHByZXNlbGVjdGVkID8gcHJlc2VsZWN0ZWQudmFsdWUgOiAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IGZpZWxkLmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2ZpbGV1cGxvYWQnKSB7XG4gICAgICAgICAgICBpc011bHRpcGFydCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ3JhYiBhbGwgY29uZGl0aW9uYWwgbG9naWMgZmllbGRzXG4gICAgICAgIGlmIChmaWVsZC5jb25kaXRpb25hbExvZ2ljKSB7XG4gICAgICAgICAgY29uc3QgdG1wRmllbGQgPSB7XG4gICAgICAgICAgICBpZDogZmllbGQuaWQsXG4gICAgICAgICAgICBjb25kaXRpb25hbExvZ2ljOiBmaWVsZC5jb25kaXRpb25hbExvZ2ljLFxuICAgICAgICAgIH07XG4gICAgICAgICAgY29uc3QgaWRzID0gZmllbGQuY29uZGl0aW9uYWxMb2dpYy5ydWxlcy5tYXAoaXRlbSA9PiBpdGVtLmZpZWxkSWQpO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHBhcnNlSW50KGlkc1tpXSk7XG4gICAgICAgICAgICBpZiAoY29uZGl0aW9hbmxJZHMuaW5kZXhPZihpZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIGNvbmRpdGlvYW5sSWRzLnB1c2goaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25kaXRpb25GaWVsZHMucHVzaCh0bXBGaWVsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtVmFsdWVzW2ZpZWxkLmlkXSA9IHtcbiAgICAgICAgICB2YWxpZDogdmFsaWRhdGVGaWVsZCh2YWx1ZSwgZmllbGQudHlwZSwgZmllbGQuaXNSZXF1aXJlZCksXG4gICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgbGFiZWw6IGZpZWxkLmxhYmVsLFxuICAgICAgICAgIHBhZ2VOdW1iZXI6IGZpZWxkLnBhZ2VOdW1iZXIsXG4gICAgICAgICAgY3NzQ2xhc3M6IGZpZWxkLmNzc0NsYXNzLFxuICAgICAgICAgIGlzUmVxdWlyZWQ6IGZpZWxkLmlzUmVxdWlyZWQsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICAvLyBjaGVjayBjb25kaXRpb24gbG9naWNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZGl0aW9uRmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvcm1WYWx1ZXNbY29uZGl0aW9uRmllbGRzW2ldLmlkXS5oaWRlRmllbGQgPSB0aGlzLmNoZWNrQ29uZGl0aW9uYWxMb2dpYyhcbiAgICAgICAgICBjb25kaXRpb25GaWVsZHNbaV0uY29uZGl0aW9uYWxMb2dpYyxcbiAgICAgICAgICBmb3JtVmFsdWVzLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9ybURhdGE6IGZvcm0sXG4gICAgICAgIGZvcm1WYWx1ZXMsXG4gICAgICAgIGFjdGl2ZVBhZ2U6IGZvcm0ucGFnaW5hdGlvbiA/IDEgOiBmYWxzZSxcbiAgICAgICAgY29uZGl0aW9uRmllbGRzLFxuICAgICAgICBjb25kaXRpb2FubElkcyxcbiAgICAgICAgaXNNdWx0aXBhcnQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHNldFRvdWNoZWQgPSAoaWQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRvdWNoZWQ6IHsgLi4udGhpcy5zdGF0ZS50b3VjaGVkLCBbaWRdOiB0cnVlIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgdXBkYXRlRm9ybUhhbmRsZXIgPSAoZXZlbnQsIGZpZWxkKSA9PiB7XG4gICAgY29uc3QgeyBmb3JtVmFsdWVzLCBjb25kaXRpb2FubElkcywgY29uZGl0aW9uRmllbGRzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCB7IGlkLCB0eXBlLCBpc1JlcXVpcmVkIH0gPSBmaWVsZDtcbiAgICAvLyBTZXQgbmV3IHZhbHVlXG4gICAgbGV0IHZhbHVlO1xuICAgIGlmIChmaWVsZC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBbLi4uZm9ybVZhbHVlc1tmaWVsZC5pZF0udmFsdWVdO1xuICAgICAgY29uc3QgaW5kZXggPSB2YWx1ZXMuaW5kZXhPZihldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgdmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZXMucHVzaChldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgfVxuICAgICAgdmFsdWUgPSB2YWx1ZXM7XG4gICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09ICdkYXRlJykge1xuICAgICAgY29uc3QgeyBzdWJJZCwgZGF0ZUxhYmVsIH0gPSBmaWVsZDtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IFsuLi5mb3JtVmFsdWVzW2ZpZWxkLmlkXS52YWx1ZV07XG4gICAgICB2YWx1ZXNbc3ViSWRdID0ge1xuICAgICAgICB2YWw6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgICAgbGFiZWw6IGRhdGVMYWJlbCxcbiAgICAgIH07XG4gICAgICB2YWx1ZSA9IHZhbHVlcztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQgPyBldmVudC50YXJnZXQudmFsdWUgOiAnbnVsbCc7XG4gICAgfVxuICAgIC8vIGlmIGZpZWxkIGlzIElCQU5cbiAgICBpZiAodHlwZSA9PT0gJ3RleHQnICYmIGZpZWxkLmNzc0NsYXNzLmluZGV4T2YoJ2liYW4nKSA+IC0xKSB7XG4gICAgICB0eXBlID0gJ2liYW4nO1xuICAgIH1cbiAgICAvLyBWYWxpZGF0ZSBmaWVsZFxuICAgIGNvbnN0IHZhbGlkID0gdmFsaWRhdGVGaWVsZCh2YWx1ZSwgdHlwZSwgaXNSZXF1aXJlZCwgZmllbGQpO1xuXG4gICAgLy8gaWYgZmllbGQgSUQgaXMgc29tZXdoZXJlIGluIGNvbmRpdGlvbmFsIGZpZWxkc1xuICAgIC8vIHJlY2FsY3VsYXRlIGFsbCBjb25kaXRpb25zXG4gICAgaWYgKGNvbmRpdGlvYW5sSWRzLmluZGV4T2YoaWQpICE9PSAtMSkge1xuICAgICAgZm9ybVZhbHVlc1tpZF0udmFsdWUgPSB2YWx1ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZGl0aW9uRmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IGNvbmRpdGlvbkZpZWxkc1tpXTtcbiAgICAgICAgY29uc3QgaGlkZSA9IHRoaXMuY2hlY2tDb25kaXRpb25hbExvZ2ljKGNvbmRpdGlvbkZpZWxkc1tpXS5jb25kaXRpb25hbExvZ2ljLCBmb3JtVmFsdWVzKTtcbiAgICAgICAgZm9ybVZhbHVlc1tpZF0uaGlkZUZpZWxkID0gaGlkZTtcbiAgICAgICAgaWYgKGhpZGUpIHtcbiAgICAgICAgICBpZiAoZm9ybVZhbHVlc1tpZF0uaXNSZXF1aXJlZCAmJiBoaWRlKSB7XG4gICAgICAgICAgICBmb3JtVmFsdWVzW2lkXS52YWx1ZSA9ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtVmFsdWVzW2lkXS52YWxpZCA9ICEhZm9ybVZhbHVlc1tpZF0uaXNSZXF1aXJlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIGZvcm1WYWx1ZXM6IHtcbiAgICAgICAgICAuLi5mb3JtVmFsdWVzLFxuICAgICAgICAgIFtpZF06IHtcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICB2YWxpZCxcbiAgICAgICAgICAgIGxhYmVsOiBmaWVsZC5sYWJlbCxcbiAgICAgICAgICAgIHBhZ2VOdW1iZXI6IGZpZWxkLnBhZ2VOdW1iZXIsXG4gICAgICAgICAgICBjc3NDbGFzczogZmllbGQuY3NzQ2xhc3MsXG4gICAgICAgICAgICBpc1JlcXVpcmVkOiBmaWVsZC5pc1JlcXVpcmVkLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICAvLyBwYXNzIHN0YXRlIHRvIHBhcmVudCBjb21wb25lbnRcbiAgICAgICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UodGhpcy5zdGF0ZS5mb3JtVmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICApO1xuICB9O1xuXG4gIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN1Ym1pdHRpbmc6IHRydWUsXG4gICAgICBzdWJtaXRTdWNjZXNzOiBmYWxzZSxcbiAgICAgIHN1Ym1pdEZhaWxlZDogZmFsc2UsXG4gICAgICBjb25maXJtYXRpb25NZXNzYWdlOiBmYWxzZSxcbiAgICAgIGVycm9yTWVzc2FnZXM6IGZhbHNlLFxuICAgIH0pO1xuICAgIGNvbnN0IHsgZm9ybUlELCBiYWNrZW5kVXJsIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGdmU3VibWlzc2lvblVybCA9IGJhY2tlbmRVcmwuc3Vic3RyaW5nKDAsIGJhY2tlbmRVcmwuaW5kZXhPZignL3dwLWpzb24nKSk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpO1xuICAgIGF4aW9zXG4gICAgICAucG9zdChgJHtnZlN1Ym1pc3Npb25Vcmx9L3dwLWpzb24vZ2YvdjIvZm9ybXMvJHtmb3JtSUR9L3N1Ym1pc3Npb25zYCwgZGF0YSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmlzX3ZhbGlkKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Ym1pdFN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICBjb25maXJtYXRpb25NZXNzYWdlOiByZXNwb25zZS5kYXRhLmNvbmZpcm1hdGlvbl9tZXNzYWdlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICAgICAgICBzdWJtaXRGYWlsZWQ6IHRydWUsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VzOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgICAgICBzdWJtaXRGYWlsZWQ6IHRydWUsXG4gICAgICAgICAgZXJyb3JNZXNzYWdlczogZXJyb3IucmVzcG9uc2UuZGF0YS52YWxpZGF0aW9uX21lc3NhZ2VzLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIG5leHRTdGVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgYWN0aXZlUGFnZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZVBhZ2U6IGFjdGl2ZVBhZ2UgKyAxLFxuICAgIH0pO1xuICB9O1xuXG4gIHByZXZTdGVwID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBhY3RpdmVQYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlUGFnZTogYWN0aXZlUGFnZSAtIDEsXG4gICAgfSk7XG4gIH07XG5cbiAgY2hlY2tDb25kaXRpb25hbExvZ2ljID0gKGNvbmRpdGlvbiwgZmllbGRzID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCB7IHJ1bGVzLCBhY3Rpb25UeXBlIH0gPSBjb25kaXRpb247XG4gICAgaWYgKCFydWxlcykgcmV0dXJuIHRydWU7XG5cbiAgICBjb25zdCBmb3JtVmFsdWVzID0gZmllbGRzIHx8IHRoaXMuc3RhdGUuZm9ybVZhbHVlcztcblxuICAgIC8vIHNob3cgb25seSBpZiBpcyBzZWxlY3RlZCBcIkFsbCBmaWVsZHNcIiAoaXQgc2hvdWxkIGJlIHR3ZWFrZWQgaW4gZnV0dXJlKVxuICAgIC8vIHdvcmtzIG9ubHkgXCJzaG93L2hpZGUgd2hlbiBmaWVsZCBpcyBlcXVhbCB0b1wiXG4gICAgbGV0IGhpZGVGaWVsZCA9IGFjdGlvblR5cGUgIT09ICdoaWRlJztcbiAgICBjb25zdCBoaWRlQmFzZWRPblJ1bGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgeyBmaWVsZElkLCB2YWx1ZSB9ID0gcnVsZXNbaV07XG4gICAgICBjb25zdCBjb25kaXRpb25GaWVsZFZhbHVlID0gZm9ybVZhbHVlc1tmaWVsZElkXS52YWx1ZTtcblxuICAgICAgY29uc3Qgc3RyaW5nVmFsdWUgPSBBcnJheS5pc0FycmF5KGNvbmRpdGlvbkZpZWxkVmFsdWUpXG4gICAgICAgID8gY29uZGl0aW9uRmllbGRWYWx1ZS5qb2luKCcnKVxuICAgICAgICA6IGNvbmRpdGlvbkZpZWxkVmFsdWU7XG4gICAgICBpZiAoc3RyaW5nVmFsdWUgJiYgdmFsdWUgPT09IHN0cmluZ1ZhbHVlKSB7XG4gICAgICAgIGhpZGVCYXNlZE9uUnVsZXNbaV0gPSBhY3Rpb25UeXBlID09PSAnaGlkZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoaWRlQmFzZWRPblJ1bGVzW2ldID0gYWN0aW9uVHlwZSAhPT0gJ2hpZGUnO1xuICAgICAgfVxuICAgIH1cbiAgICBoaWRlRmllbGQgPSBoaWRlQmFzZWRPblJ1bGVzLmV2ZXJ5KGkgPT4gaSA9PT0gdHJ1ZSk7XG4gICAgLy8gZm9ybVZhbHVlc1tpZF0uaGlkZUZpZWxkID0gaGlkZUZpZWxkO1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBmb3JtVmFsdWVzIH0pO1xuICAgIHJldHVybiBoaWRlRmllbGQ7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZvcm1EYXRhLFxuICAgICAgZm9ybVZhbHVlcyxcbiAgICAgIHN1Ym1pdEZhaWxlZCxcbiAgICAgIHN1Ym1pdFN1Y2Nlc3MsXG4gICAgICB0b3VjaGVkLFxuICAgICAgc3VibWl0dGluZyxcbiAgICAgIGFjdGl2ZVBhZ2UsXG4gICAgICBpc011bHRpcGFydCxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7XG4gICAgICB0aXRsZSwgc3VibWl0SWNvbiwgc2F2ZVN0YXRlVG9IdG1sRmllbGQsIHN0eWxlZENvbXBvbmVudHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBCdXR0b24sIExvYWRpbmcsIEdGV3JhcHBlciA9ICdkaXYnIH0gPSBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuICAgIGNvbnN0IHsgY3NzQ2xhc3MgfSA9IGZvcm1EYXRhO1xuXG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IE9iamVjdC5rZXlzKGZvcm1WYWx1ZXMpLnNvbWUoXG4gICAgICB4ID0+ICFmb3JtVmFsdWVzW3hdLmhpZGVGaWVsZCAmJiBmb3JtVmFsdWVzW3hdLnZhbGlkLFxuICAgICk7XG4gICAgY29uc3QgaXNOZXh0RGlzYWJsZWQgPSBhY3RpdmVQYWdlXG4gICAgICA/IE9iamVjdC5rZXlzKGZvcm1WYWx1ZXMpLnNvbWUoXG4gICAgICAgIHggPT4gZm9ybVZhbHVlc1t4XS5wYWdlTnVtYmVyID09PSBhY3RpdmVQYWdlXG4gICAgICAgICAgICAmJiAhZm9ybVZhbHVlc1t4XS5oaWRlRmllbGRcbiAgICAgICAgICAgICYmIGZvcm1WYWx1ZXNbeF0udmFsaWQsXG4gICAgICApXG4gICAgICA6IGZhbHNlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS13cmFwcGVyXCJcbiAgICAgICAgY3NzPXt7IHBvc2l0aW9uOiAncmVhbHRpdmUnIH19XG4gICAgICAgIGlkPXtgZ3Jhdml0eV9mb3JtXyR7dGhpcy5wcm9wcy5mb3JtSUR9YH1cbiAgICAgID5cbiAgICAgICAge2Zvcm1EYXRhLnRpdGxlID8gbnVsbCA6IExvYWRpbmcgJiYgPExvYWRpbmcgaXNMb2FkaW5nIC8+fVxuXG4gICAgICAgIHtzdWJtaXRGYWlsZWQgJiYgIXN1Ym1pdFN1Y2Nlc3MgJiYgKFxuICAgICAgICAgIDxGb3JtRXJyb3JcbiAgICAgICAgICAgIGZpZWxkcz17Zm9ybVZhbHVlc31cbiAgICAgICAgICAgIGVycm9ycz17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2VzfVxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlPVwiVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHlvdXIgc3VibWlzc2lvblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7c3VibWl0U3VjY2VzcyAmJiB0aGlzLnN0YXRlLmNvbmZpcm1hdGlvbk1lc3NhZ2UgJiYgKFxuICAgICAgICAgIDxGb3JtQ29uZmlybWF0aW9uIGNvbmZpcm1hdGlvbj17dGhpcy5zdGF0ZS5jb25maXJtYXRpb25NZXNzYWdlfSAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHshc3VibWl0U3VjY2VzcyAmJiBmb3JtRGF0YS5maWVsZHMgPyAoXG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIG9uU3VibWl0PXtlID0+IHRoaXMub25TdWJtaXQoZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nzc0NsYXNzfVxuICAgICAgICAgICAgZW5jVHlwZT17aXNNdWx0aXBhcnQgPyAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICBub1ZhbGlkYXRlXG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyhmb3JtRGF0YS50aXRsZSB8fCBmb3JtRGF0YS5kZXNjcmlwdGlvbikgJiYgKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtmb3JtRGF0YS50aXRsZSAmJiB0aXRsZSA/IDxoMyBjbGFzc05hbWU9XCJmb3JtLXRpdGxlXCI+e2Zvcm1EYXRhLnRpdGxlfTwvaDM+IDogbnVsbH1cbiAgICAgICAgICAgICAgICB7Zm9ybURhdGEuZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb3JtLWRlc2NyaXB0aW9uXCI+e2Zvcm1EYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0td3JhcHBlclwiPlxuICAgICAgICAgICAgICA8UmVuZGVyRmllbGRzXG4gICAgICAgICAgICAgICAgc3R5bGVkQ29tcG9uZW50cz17c3R5bGVkQ29tcG9uZW50c31cbiAgICAgICAgICAgICAgICBmaWVsZHM9e2Zvcm1EYXRhLmZpZWxkc31cbiAgICAgICAgICAgICAgICBmb3JtVmFsdWVzPXtmb3JtVmFsdWVzfVxuICAgICAgICAgICAgICAgIHN1Ym1pdEZhaWxlZD17c3VibWl0RmFpbGVkfVxuICAgICAgICAgICAgICAgIHN1Ym1pdFN1Y2Nlc3M9e3N1Ym1pdFN1Y2Nlc3N9XG4gICAgICAgICAgICAgICAgdXBkYXRlRm9ybT17dGhpcy51cGRhdGVGb3JtSGFuZGxlcn1cbiAgICAgICAgICAgICAgICB0b3VjaGVkPXt0b3VjaGVkfVxuICAgICAgICAgICAgICAgIHNldFRvdWNoZWQ9e3RoaXMuc2V0VG91Y2hlZH1cbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXtmb3JtRGF0YS5wYWdpbmF0aW9ufVxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2U9e2FjdGl2ZVBhZ2V9XG4gICAgICAgICAgICAgICAgcHJldlN0ZXA9e3RoaXMucHJldlN0ZXB9XG4gICAgICAgICAgICAgICAgbmV4dFN0ZXA9e3RoaXMubmV4dFN0ZXB9XG4gICAgICAgICAgICAgICAgaXNOZXh0RGlzYWJsZWQ9e2lzTmV4dERpc2FibGVkfVxuICAgICAgICAgICAgICAgIGNoZWNrQ29uZGl0aW9uYWxMb2dpYz17dGhpcy5jaGVja0NvbmRpdGlvbmFsTG9naWN9XG4gICAgICAgICAgICAgICAgc2F2ZVN0YXRlVG9IdG1sRmllbGQ9e3NhdmVTdGF0ZVRvSHRtbEZpZWxkfVxuICAgICAgICAgICAgICAgIGVuYWJsZUhvbmV5cG90PXtmb3JtRGF0YS5lbmFibGVIb25leXBvdH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgeyghZm9ybURhdGEucGFnaW5hdGlvblxuICAgICAgICAgICAgICAgIHx8IChmb3JtRGF0YS5wYWdpbmF0aW9uICYmIGZvcm1EYXRhLnBhZ2luYXRpb24ucGFnZXMubGVuZ3RoID09PSBhY3RpdmVQYWdlKSkgJiYgKFxuICAgICAgICAgICAgICAgIDxTdWJtaXRcbiAgICAgICAgICAgICAgICAgIEJ1dHRvbj17QnV0dG9ufVxuICAgICAgICAgICAgICAgICAgTG9hZGluZz17TG9hZGluZ31cbiAgICAgICAgICAgICAgICAgIGZvcm1EYXRhPXtmb3JtRGF0YX1cbiAgICAgICAgICAgICAgICAgIHN1Ym1pdEljb249e3N1Ym1pdEljb259XG4gICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXtpc0Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgc3VibWl0dGluZz17c3VibWl0dGluZ31cbiAgICAgICAgICAgICAgICAgIHByZXZTdGVwPXt0aGlzLnByZXZTdGVwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgJydcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuR3Jhdml0eUZvcm0uZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogdHJ1ZSxcbiAgc3VibWl0SWNvbjogZmFsc2UsXG4gIHNhdmVTdGF0ZVRvSHRtbEZpZWxkOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXZpdHlGb3JtO1xuXG4iXX0=
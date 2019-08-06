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
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmit",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(event) {
        var _this$props, formID, backendUrl, data, response;

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
                data = new FormData(event.target);
                _context.next = 6;
                return _axios["default"].post("".concat(backendUrl, "/").concat(formID, "/submissions"), data);

              case 6:
                response = _context.sent;

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
                    errorMessages: response.data.validation_messages
                  });
                }

              case 8:
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
      conditioanlIds: {}
    };
    return _this;
  }

  _createClass(GravityForm, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var _this$props2, formID, backendUrl, form, formValues, conditionFields, conditioanlIds, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, field, value, preselected, tmpField, ids, _i, id, i;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$props2 = this.props, formID = _this$props2.formID, backendUrl = _this$props2.backendUrl;
                this._isMounted = true;
                _context2.next = 4;
                return _axios["default"].get("".concat(backendUrl, "/").concat(formID)).then(function (response) {
                  return response.data;
                })["catch"](function () {
                  return false;
                });

              case 4:
                form = _context2.sent;

                if (!(form && this._isMounted)) {
                  _context2.next = 30;
                  break;
                }

                formValues = {};
                conditionFields = [];
                conditioanlIds = []; // eslint-disable-next-line no-restricted-syntax

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 12;

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


                _context2.next = 20;
                break;

              case 16:
                _context2.prev = 16;
                _context2.t0 = _context2["catch"](12);
                _didIteratorError = true;
                _iteratorError = _context2.t0;

              case 20:
                _context2.prev = 20;
                _context2.prev = 21;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 23:
                _context2.prev = 23;

                if (!_didIteratorError) {
                  _context2.next = 26;
                  break;
                }

                throw _iteratorError;

              case 26:
                return _context2.finish(23);

              case 27:
                return _context2.finish(20);

              case 28:
                for (i = 0; i < conditionFields.length; i++) {
                  formValues[conditionFields[i].id].hideField = this.checkConditionalLogic(conditionFields[i].conditionalLogic, formValues);
                }

                this.setState({
                  formData: form,
                  formValues: formValues,
                  activePage: form.pagination ? 1 : false,
                  conditionFields: conditionFields,
                  conditioanlIds: conditioanlIds
                });

              case 30:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[12, 16, 20, 28], [21,, 23, 27]]);
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
          activePage = _this$state2.activePage;
      var _this$props3 = this.props,
          title = _this$props3.title,
          submitIcon = _this$props3.submitIcon,
          saveStateToHtmlField = _this$props3.saveStateToHtmlField,
          styledComponents = _this$props3.styledComponents;

      var _ref2 = styledComponents || false,
          Button = _ref2.Button,
          Loading = _ref2.Loading;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHcmF2aXR5Rm9ybSIsInByb3BzIiwiaWQiLCJzZXRTdGF0ZSIsInRvdWNoZWQiLCJzdGF0ZSIsImV2ZW50IiwiZmllbGQiLCJmb3JtVmFsdWVzIiwiY29uZGl0aW9hbmxJZHMiLCJjb25kaXRpb25GaWVsZHMiLCJ0eXBlIiwiaXNSZXF1aXJlZCIsInZhbHVlIiwidmFsdWVzIiwiaW5kZXgiLCJpbmRleE9mIiwidGFyZ2V0Iiwic3BsaWNlIiwicHVzaCIsInN1YklkIiwiZGF0ZUxhYmVsIiwidmFsIiwibGFiZWwiLCJjc3NDbGFzcyIsInZhbGlkIiwiaSIsImxlbmd0aCIsImhpZGUiLCJjaGVja0NvbmRpdGlvbmFsTG9naWMiLCJjb25kaXRpb25hbExvZ2ljIiwiaGlkZUZpZWxkIiwicGFnZU51bWJlciIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0dGluZyIsInN1Ym1pdFN1Y2Nlc3MiLCJzdWJtaXRGYWlsZWQiLCJjb25maXJtYXRpb25NZXNzYWdlIiwiZXJyb3JNZXNzYWdlcyIsImZvcm1JRCIsImJhY2tlbmRVcmwiLCJkYXRhIiwiRm9ybURhdGEiLCJheGlvcyIsInBvc3QiLCJyZXNwb25zZSIsImlzX3ZhbGlkIiwiY29uZmlybWF0aW9uX21lc3NhZ2UiLCJ2YWxpZGF0aW9uX21lc3NhZ2VzIiwiYWN0aXZlUGFnZSIsImUiLCJjb25kaXRpb24iLCJmaWVsZHMiLCJydWxlcyIsImFjdGlvblR5cGUiLCJoaWRlQmFzZWRPblJ1bGVzIiwiZmllbGRJZCIsImNvbmRpdGlvbkZpZWxkVmFsdWUiLCJzdHJpbmdWYWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsImpvaW4iLCJldmVyeSIsImxvYWRpbmciLCJpc1ZhbGlkIiwiZm9ybURhdGEiLCJfaXNNb3VudGVkIiwiZ2V0IiwidGhlbiIsImZvcm0iLCJjaG9pY2VzIiwiZmlsdGVyIiwiY2hvaWNlIiwiaXNTZWxlY3RlZCIsIm1hcCIsInByZXNlbGVjdGVkIiwiZmluZCIsImRlZmF1bHRWYWx1ZSIsInRtcEZpZWxkIiwiaWRzIiwiaXRlbSIsInBhcnNlSW50IiwicGFnaW5hdGlvbiIsInRpdGxlIiwic3VibWl0SWNvbiIsInNhdmVTdGF0ZVRvSHRtbEZpZWxkIiwic3R5bGVkQ29tcG9uZW50cyIsIkJ1dHRvbiIsIkxvYWRpbmciLCJpc0Rpc2FibGVkIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJ4IiwiaXNOZXh0RGlzYWJsZWQiLCJwb3NpdGlvbiIsIm9uU3VibWl0IiwiZGVzY3JpcHRpb24iLCJ1cGRhdGVGb3JtSGFuZGxlciIsInNldFRvdWNoZWQiLCJwcmV2U3RlcCIsIm5leHRTdGVwIiwiZW5hYmxlSG9uZXlwb3QiLCJwYWdlcyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsVzs7Ozs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixxRkFBTUEsS0FBTjs7QUFEaUIsaUVBMEZOLFVBQUNDLEVBQUQsRUFBUTtBQUNuQixZQUFLQyxRQUFMLENBQWM7QUFDWkMsUUFBQUEsT0FBTyxvQkFBTyxNQUFLQyxLQUFMLENBQVdELE9BQWxCLHNCQUE0QkYsRUFBNUIsRUFBaUMsSUFBakM7QUFESyxPQUFkO0FBR0QsS0E5RmtCOztBQUFBLHdFQWdHQyxVQUFDSSxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFBQSx3QkFDb0IsTUFBS0YsS0FEekI7QUFBQSxVQUM1QkcsVUFENEIsZUFDNUJBLFVBRDRCO0FBQUEsVUFDaEJDLGNBRGdCLGVBQ2hCQSxjQURnQjtBQUFBLFVBQ0FDLGVBREEsZUFDQUEsZUFEQTtBQUFBLFVBRTlCUixFQUY4QixHQUVMSyxLQUZLLENBRTlCTCxFQUY4QjtBQUFBLFVBRTFCUyxJQUYwQixHQUVMSixLQUZLLENBRTFCSSxJQUYwQjtB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QWR0QjtBQWVOLFFBQUEsb0JBQW9CLEVBQUV3RCxvQkFmaEI7QUFnQk4sUUFBQSxjQUFjLEVBQUVwQixRQUFRLENBQUNxQztBQWhCbkIsUUFERixFQW1CRyxDQUFDLENBQUNyQyxRQUFRLENBQUNpQixVQUFWLElBQ0lqQixRQUFRLENBQUNpQixVQUFULElBQXVCakIsUUFBUSxDQUFDaUIsVUFBVCxDQUFvQnFCLEtBQXBCLENBQTBCNUUsTUFBMUIsS0FBcUNzQixVQURqRSxLQUVDLGdDQUFDLGtCQUFEO0FBQ0UsUUFBQSxNQUFNLEVBQUVzQyxNQURWO0FBRUUsUUFBQSxPQUFPLEVBQUVDLE9BRlg7QUFHRSxRQUFBLFFBQVEsRUFBRXZCLFFBSFo7QUFJRSxRQUFBLFVBQVUsRUFBRW1CLFVBSmQ7QUFLRSxRQUFBLFVBQVUsRUFBRUssVUFMZDtBQU1FLFFBQUEsVUFBVSxFQUFFdkQsVUFOZDtBQU9FLFFBQUEsUUFBUSxFQUFFLEtBQUtrRTtBQVBqQixRQXJCSixDQVZGLENBREQsR0E2Q0MsRUFoRUosQ0FERjtBQXFFRDs7OztFQTFVdUJJLGdCOztBQTZVMUJ4RyxXQUFXLENBQUN5RyxZQUFaLEdBQTJCO0FBQ3pCdEIsRUFBQUEsS0FBSyxFQUFFLElBRGtCO0FBRXpCQyxFQUFBQSxVQUFVLEVBQUUsS0FGYTtBQUd6QkMsRUFBQUEsb0JBQW9CLEVBQUU7QUFIRyxDQUEzQjtlQU1lckYsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFJlbmRlckZpZWxkcyBmcm9tICcuL0Zvcm1FbGVtZW50cy9SZW5kZXJGaWVsZHMnO1xuaW1wb3J0IEZvcm1FcnJvciBmcm9tICcuL0Zvcm1FbGVtZW50cy9Gb3JtRXJyb3InO1xuaW1wb3J0IEZvcm1Db25maXJtYXRpb24gZnJvbSAnLi9Gb3JtRWxlbWVudHMvRm9ybUNvbmZpcm1hdGlvbic7XG5pbXBvcnQgeyB2YWxpZGF0ZUZpZWxkIH0gZnJvbSAnLi9IZWxwZXJzL3ZhbGlkYXRpb24nO1xuaW1wb3J0IFN1Ym1pdCBmcm9tICcuL0Zvcm1FbGVtZW50cy9TdWJtaXQnO1xuXG5jbGFzcyBHcmF2aXR5Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdWJtaXRGYWlsZWQ6IGZhbHNlLFxuICAgICAgZXJyb3JNZXNzYWdlczogZmFsc2UsXG4gICAgICBmb3JtVmFsdWVzOiB7fSxcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgIHN1Ym1pdFN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgY29uZmlybWF0aW9uTWVzc2FnZTogZmFsc2UsXG4gICAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICAgIGZvcm1EYXRhOiB7fSxcbiAgICAgIHRvdWNoZWQ6IHt9LFxuICAgICAgYWN0aXZlUGFnZTogZmFsc2UsXG4gICAgICBjb25kaXRpb25GaWVsZHM6IHt9LFxuICAgICAgY29uZGl0aW9hbmxJZHM6IHt9LFxuICAgIH07XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGZvcm1JRCwgYmFja2VuZFVybCB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgIGNvbnN0IGZvcm0gPSBhd2FpdCBheGlvc1xuICAgICAgLmdldChgJHtiYWNrZW5kVXJsfS8ke2Zvcm1JRH1gKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAgIC5jYXRjaCgoKSA9PiBmYWxzZSk7XG5cbiAgICBpZiAoZm9ybSAmJiB0aGlzLl9pc01vdW50ZWQpIHtcbiAgICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSB7fTtcbiAgICAgIGNvbnN0IGNvbmRpdGlvbkZpZWxkcyA9IFtdO1xuICAgICAgY29uc3QgY29uZGl0aW9hbmxJZHMgPSBbXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBmb3JtLmZpZWxkcykge1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGlmIChmaWVsZC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgdmFsdWUgPSBmaWVsZC5jaG9pY2VzLmZpbHRlcihjaG9pY2UgPT4gY2hvaWNlLmlzU2VsZWN0ZWQpLm1hcChjaG9pY2UgPT4gY2hvaWNlLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgY29uc3QgcHJlc2VsZWN0ZWQgPSBmaWVsZC5jaG9pY2VzLmZpbmQoY2hvaWNlID0+IGNob2ljZS5pc1NlbGVjdGVkKTtcbiAgICAgICAgICB2YWx1ZSA9IHByZXNlbGVjdGVkID8gcHJlc2VsZWN0ZWQudmFsdWUgOiAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IGZpZWxkLmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdyYWIgYWxsIGNvbmRpdGlvbmFsIGxvZ2ljIGZpZWxkc1xuICAgICAgICBpZiAoZmllbGQuY29uZGl0aW9uYWxMb2dpYykge1xuICAgICAgICAgIGNvbnN0IHRtcEZpZWxkID0ge1xuICAgICAgICAgICAgaWQ6IGZpZWxkLmlkLFxuICAgICAgICAgICAgY29uZGl0aW9uYWxMb2dpYzogZmllbGQuY29uZGl0aW9uYWxMb2dpYyxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNvbnN0IGlkcyA9IGZpZWxkLmNvbmRpdGlvbmFsTG9naWMucnVsZXMubWFwKGl0ZW0gPT4gaXRlbS5maWVsZElkKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaWQgPSBwYXJzZUludChpZHNbaV0pO1xuICAgICAgICAgICAgaWYgKGNvbmRpdGlvYW5sSWRzLmluZGV4T2YoaWQpID09PSAtMSkge1xuICAgICAgICAgICAgICBjb25kaXRpb2FubElkcy5wdXNoKGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uZGl0aW9uRmllbGRzLnB1c2godG1wRmllbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybVZhbHVlc1tmaWVsZC5pZF0gPSB7XG4gICAgICAgICAgdmFsaWQ6IHZhbGlkYXRlRmllbGQodmFsdWUsIGZpZWxkLnR5cGUsIGZpZWxkLmlzUmVxdWlyZWQpLFxuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIGxhYmVsOiBmaWVsZC5sYWJlbCxcbiAgICAgICAgICBwYWdlTnVtYmVyOiBmaWVsZC5wYWdlTnVtYmVyLFxuICAgICAgICAgIGNzc0NsYXNzOiBmaWVsZC5jc3NDbGFzcyxcbiAgICAgICAgICBpc1JlcXVpcmVkOiBmaWVsZC5pc1JlcXVpcmVkLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy8gY2hlY2sgY29uZGl0aW9uIGxvZ2ljXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmRpdGlvbkZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3JtVmFsdWVzW2NvbmRpdGlvbkZpZWxkc1tpXS5pZF0uaGlkZUZpZWxkID0gdGhpcy5jaGVja0NvbmRpdGlvbmFsTG9naWMoXG4gICAgICAgICAgY29uZGl0aW9uRmllbGRzW2ldLmNvbmRpdGlvbmFsTG9naWMsXG4gICAgICAgICAgZm9ybVZhbHVlcyxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvcm1EYXRhOiBmb3JtLFxuICAgICAgICBmb3JtVmFsdWVzLFxuICAgICAgICBhY3RpdmVQYWdlOiBmb3JtLnBhZ2luYXRpb24gPyAxIDogZmFsc2UsXG4gICAgICAgIGNvbmRpdGlvbkZpZWxkcyxcbiAgICAgICAgY29uZGl0aW9hbmxJZHMsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHNldFRvdWNoZWQgPSAoaWQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRvdWNoZWQ6IHsgLi4udGhpcy5zdGF0ZS50b3VjaGVkLCBbaWRdOiB0cnVlIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgdXBkYXRlRm9ybUhhbmRsZXIgPSAoZXZlbnQsIGZpZWxkKSA9PiB7XG4gICAgY29uc3QgeyBmb3JtVmFsdWVzLCBjb25kaXRpb2FubElkcywgY29uZGl0aW9uRmllbGRzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCB7IGlkLCB0eXBlLCBpc1JlcXVpcmVkIH0gPSBmaWVsZDtcbiAgICAvLyBTZXQgbmV3IHZhbHVlXG4gICAgbGV0IHZhbHVlO1xuICAgIGlmIChmaWVsZC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBbLi4uZm9ybVZhbHVlc1tmaWVsZC5pZF0udmFsdWVdO1xuICAgICAgY29uc3QgaW5kZXggPSB2YWx1ZXMuaW5kZXhPZihldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgdmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZXMucHVzaChldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgfVxuICAgICAgdmFsdWUgPSB2YWx1ZXM7XG4gICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09ICdkYXRlJykge1xuICAgICAgY29uc3QgeyBzdWJJZCwgZGF0ZUxhYmVsIH0gPSBmaWVsZDtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IFsuLi5mb3JtVmFsdWVzW2ZpZWxkLmlkXS52YWx1ZV07XG4gICAgICB2YWx1ZXNbc3ViSWRdID0ge1xuICAgICAgICB2YWw6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgICAgbGFiZWw6IGRhdGVMYWJlbCxcbiAgICAgIH07XG4gICAgICB2YWx1ZSA9IHZhbHVlcztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQgPyBldmVudC50YXJnZXQudmFsdWUgOiAnbnVsbCc7XG4gICAgfVxuICAgIC8vIGlmIGZpZWxkIGlzIElCQU5cbiAgICBpZiAodHlwZSA9PT0gJ3RleHQnICYmIGZpZWxkLmNzc0NsYXNzLmluZGV4T2YoJ2liYW4nKSA+IC0xKSB7XG4gICAgICB0eXBlID0gJ2liYW4nO1xuICAgIH1cbiAgICAvLyBWYWxpZGF0ZSBmaWVsZFxuICAgIGNvbnN0IHZhbGlkID0gdmFsaWRhdGVGaWVsZCh2YWx1ZSwgdHlwZSwgaXNSZXF1aXJlZCwgZmllbGQpO1xuXG4gICAgLy8gaWYgZmllbGQgSUQgaXMgc29tZXdoZXJlIGluIGNvbmRpdGlvbmFsIGZpZWxkc1xuICAgIC8vIHJlY2FsY3VsYXRlIGFsbCBjb25kaXRpb25zXG4gICAgaWYgKGNvbmRpdGlvYW5sSWRzLmluZGV4T2YoaWQpICE9PSAtMSkge1xuICAgICAgZm9ybVZhbHVlc1tpZF0udmFsdWUgPSB2YWx1ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZGl0aW9uRmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IGNvbmRpdGlvbkZpZWxkc1tpXTtcbiAgICAgICAgY29uc3QgaGlkZSA9IHRoaXMuY2hlY2tDb25kaXRpb25hbExvZ2ljKGNvbmRpdGlvbkZpZWxkc1tpXS5jb25kaXRpb25hbExvZ2ljLCBmb3JtVmFsdWVzKTtcbiAgICAgICAgZm9ybVZhbHVlc1tpZF0uaGlkZUZpZWxkID0gaGlkZTtcbiAgICAgICAgaWYgKGhpZGUpIHtcbiAgICAgICAgICBpZiAoZm9ybVZhbHVlc1tpZF0uaXNSZXF1aXJlZCAmJiBoaWRlKSB7XG4gICAgICAgICAgICBmb3JtVmFsdWVzW2lkXS52YWx1ZSA9ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtVmFsdWVzW2lkXS52YWxpZCA9ICEhZm9ybVZhbHVlc1tpZF0uaXNSZXF1aXJlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZm9ybVZhbHVlczoge1xuICAgICAgICAuLi5mb3JtVmFsdWVzLFxuICAgICAgICBbaWRdOiB7XG4gICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgaWQsXG4gICAgICAgICAgdmFsaWQsXG4gICAgICAgICAgbGFiZWw6IGZpZWxkLmxhYmVsLFxuICAgICAgICAgIHBhZ2VOdW1iZXI6IGZpZWxkLnBhZ2VOdW1iZXIsXG4gICAgICAgICAgY3NzQ2xhc3M6IGZpZWxkLmNzc0NsYXNzLFxuICAgICAgICAgIGlzUmVxdWlyZWQ6IGZpZWxkLmlzUmVxdWlyZWQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN1Ym1pdHRpbmc6IHRydWUsXG4gICAgICBzdWJtaXRTdWNjZXNzOiBmYWxzZSxcbiAgICAgIHN1Ym1pdEZhaWxlZDogZmFsc2UsXG4gICAgICBjb25maXJtYXRpb25NZXNzYWdlOiBmYWxzZSxcbiAgICAgIGVycm9yTWVzc2FnZXM6IGZhbHNlLFxuICAgIH0pO1xuICAgIGNvbnN0IHsgZm9ybUlELCBiYWNrZW5kVXJsIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7YmFja2VuZFVybH0vJHtmb3JtSUR9L3N1Ym1pc3Npb25zYCwgZGF0YSk7XG5cbiAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmlzX3ZhbGlkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICAgIHN1Ym1pdFN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIGNvbmZpcm1hdGlvbk1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEuY29uZmlybWF0aW9uX21lc3NhZ2UsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgICBzdWJtaXRGYWlsZWQ6IHRydWUsXG4gICAgICAgIGVycm9yTWVzc2FnZXM6IHJlc3BvbnNlLmRhdGEudmFsaWRhdGlvbl9tZXNzYWdlcyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBuZXh0U3RlcCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGFjdGl2ZVBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVQYWdlOiBhY3RpdmVQYWdlICsgMSxcbiAgICB9KTtcbiAgfTtcblxuICBwcmV2U3RlcCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgYWN0aXZlUGFnZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZVBhZ2U6IGFjdGl2ZVBhZ2UgLSAxLFxuICAgIH0pO1xuICB9O1xuXG4gIGNoZWNrQ29uZGl0aW9uYWxMb2dpYyA9IChjb25kaXRpb24sIGZpZWxkcyA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgeyBydWxlcywgYWN0aW9uVHlwZSB9ID0gY29uZGl0aW9uO1xuICAgIGlmICghcnVsZXMpIHJldHVybiB0cnVlO1xuXG4gICAgY29uc3QgZm9ybVZhbHVlcyA9IGZpZWxkcyB8fCB0aGlzLnN0YXRlLmZvcm1WYWx1ZXM7XG5cbiAgICAvLyBzaG93IG9ubHkgaWYgaXMgc2VsZWN0ZWQgXCJBbGwgZmllbGRzXCIgKGl0IHNob3VsZCBiZSB0d2Vha2VkIGluIGZ1dHVyZSlcbiAgICAvLyB3b3JrcyBvbmx5IFwic2hvdy9oaWRlIHdoZW4gZmllbGQgaXMgZXF1YWwgdG9cIlxuICAgIGxldCBoaWRlRmllbGQgPSBhY3Rpb25UeXBlICE9PSAnaGlkZSc7XG4gICAgY29uc3QgaGlkZUJhc2VkT25SdWxlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHsgZmllbGRJZCwgdmFsdWUgfSA9IHJ1bGVzW2ldO1xuICAgICAgY29uc3QgY29uZGl0aW9uRmllbGRWYWx1ZSA9IGZvcm1WYWx1ZXNbZmllbGRJZF0udmFsdWU7XG5cbiAgICAgIGNvbnN0IHN0cmluZ1ZhbHVlID0gQXJyYXkuaXNBcnJheShjb25kaXRpb25GaWVsZFZhbHVlKVxuICAgICAgICA/IGNvbmRpdGlvbkZpZWxkVmFsdWUuam9pbignJylcbiAgICAgICAgOiBjb25kaXRpb25GaWVsZFZhbHVlO1xuICAgICAgaWYgKHN0cmluZ1ZhbHVlICYmIHZhbHVlID09PSBzdHJpbmdWYWx1ZSkge1xuICAgICAgICBoaWRlQmFzZWRPblJ1bGVzW2ldID0gYWN0aW9uVHlwZSA9PT0gJ2hpZGUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGlkZUJhc2VkT25SdWxlc1tpXSA9IGFjdGlvblR5cGUgIT09ICdoaWRlJztcbiAgICAgIH1cbiAgICB9XG4gICAgaGlkZUZpZWxkID0gaGlkZUJhc2VkT25SdWxlcy5ldmVyeShpID0+IGkgPT09IHRydWUpO1xuICAgIC8vIGZvcm1WYWx1ZXNbaWRdLmhpZGVGaWVsZCA9IGhpZGVGaWVsZDtcbiAgICAvLyB0aGlzLnNldFN0YXRlKHsgZm9ybVZhbHVlcyB9KTtcbiAgICByZXR1cm4gaGlkZUZpZWxkO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBmb3JtRGF0YSxcbiAgICAgIGZvcm1WYWx1ZXMsXG4gICAgICBzdWJtaXRGYWlsZWQsXG4gICAgICBzdWJtaXRTdWNjZXNzLFxuICAgICAgdG91Y2hlZCxcbiAgICAgIHN1Ym1pdHRpbmcsXG4gICAgICBhY3RpdmVQYWdlLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlLCBzdWJtaXRJY29uLCBzYXZlU3RhdGVUb0h0bWxGaWVsZCwgc3R5bGVkQ29tcG9uZW50cyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IEJ1dHRvbiwgTG9hZGluZyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcbiAgICBjb25zdCB7IGNzc0NsYXNzIH0gPSBmb3JtRGF0YTtcblxuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBPYmplY3Qua2V5cyhmb3JtVmFsdWVzKS5zb21lKFxuICAgICAgeCA9PiAhZm9ybVZhbHVlc1t4XS5oaWRlRmllbGQgJiYgZm9ybVZhbHVlc1t4XS52YWxpZCxcbiAgICApO1xuICAgIGNvbnN0IGlzTmV4dERpc2FibGVkID0gYWN0aXZlUGFnZVxuICAgICAgPyBPYmplY3Qua2V5cyhmb3JtVmFsdWVzKS5zb21lKFxuICAgICAgICB4ID0+IGZvcm1WYWx1ZXNbeF0ucGFnZU51bWJlciA9PT0gYWN0aXZlUGFnZVxuICAgICAgICAgICAgJiYgIWZvcm1WYWx1ZXNbeF0uaGlkZUZpZWxkXG4gICAgICAgICAgICAmJiBmb3JtVmFsdWVzW3hdLnZhbGlkLFxuICAgICAgKVxuICAgICAgOiBmYWxzZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0td3JhcHBlclwiXG4gICAgICAgIGNzcz17eyBwb3NpdGlvbjogJ3JlYWx0aXZlJyB9fVxuICAgICAgICBpZD17YGdyYXZpdHlfZm9ybV8ke3RoaXMucHJvcHMuZm9ybUlEfWB9XG4gICAgICA+XG4gICAgICAgIHtmb3JtRGF0YS50aXRsZSA/IG51bGwgOiBMb2FkaW5nICYmIDxMb2FkaW5nIGlzTG9hZGluZyAvPn1cblxuICAgICAgICB7c3VibWl0RmFpbGVkICYmICFzdWJtaXRTdWNjZXNzICYmIChcbiAgICAgICAgICA8Rm9ybUVycm9yXG4gICAgICAgICAgICBmaWVsZHM9e2Zvcm1WYWx1ZXN9XG4gICAgICAgICAgICBlcnJvcnM9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlc31cbiAgICAgICAgICAgIGVycm9yTWVzc2FnZT1cIlRoZXJlIHdhcyBhIHByb2JsZW0gd2l0aCB5b3VyIHN1Ym1pc3Npb25cIlxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAge3N1Ym1pdFN1Y2Nlc3MgJiYgdGhpcy5zdGF0ZS5jb25maXJtYXRpb25NZXNzYWdlICYmIChcbiAgICAgICAgICA8Rm9ybUNvbmZpcm1hdGlvbiBjb25maXJtYXRpb249e3RoaXMuc3RhdGUuY29uZmlybWF0aW9uTWVzc2FnZX0gLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7IXN1Ym1pdFN1Y2Nlc3MgJiYgZm9ybURhdGEuZmllbGRzID8gKFxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtlID0+IHRoaXMub25TdWJtaXQoZSl9IGNsYXNzTmFtZT17Y3NzQ2xhc3N9IG5vVmFsaWRhdGU+XG4gICAgICAgICAgICB7KGZvcm1EYXRhLnRpdGxlIHx8IGZvcm1EYXRhLmRlc2NyaXB0aW9uKSAmJiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2Zvcm1EYXRhLnRpdGxlICYmIHRpdGxlID8gPGgzIGNsYXNzTmFtZT1cImZvcm0tdGl0bGVcIj57Zm9ybURhdGEudGl0bGV9PC9oMz4gOiBudWxsfVxuICAgICAgICAgICAgICAgIHtmb3JtRGF0YS5kZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm0tZGVzY3JpcHRpb25cIj57Zm9ybURhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxSZW5kZXJGaWVsZHNcblx0XHRcdFx0XHRcdFx0XHRzdHlsZWRDb21wb25lbnRzPXtzdHlsZWRDb21wb25lbnRzfVxuXHRcdFx0XHRcdFx0XHRcdGZpZWxkcz17Zm9ybURhdGEuZmllbGRzfVxuXHRcdFx0XHRcdFx0XHRcdGZvcm1WYWx1ZXM9e2Zvcm1WYWx1ZXN9XG5cdFx0XHRcdFx0XHRcdFx0c3VibWl0RmFpbGVkPXtzdWJtaXRGYWlsZWR9XG5cdFx0XHRcdFx0XHRcdFx0c3VibWl0U3VjY2Vzcz17c3VibWl0U3VjY2Vzc31cblx0XHRcdFx0XHRcdFx0XHR1cGRhdGVGb3JtPXt0aGlzLnVwZGF0ZUZvcm1IYW5kbGVyfVxuXHRcdFx0XHRcdFx0XHRcdHRvdWNoZWQ9e3RvdWNoZWR9XG5cdFx0XHRcdFx0XHRcdFx0c2V0VG91Y2hlZD17dGhpcy5zZXRUb3VjaGVkfVxuXHRcdFx0XHRcdFx0XHRcdHBhZ2luYXRpb249e2Zvcm1EYXRhLnBhZ2luYXRpb259XG5cdFx0XHRcdFx0XHRcdFx0YWN0aXZlUGFnZT17YWN0aXZlUGFnZX1cblx0XHRcdFx0XHRcdFx0XHRwcmV2U3RlcD17dGhpcy5wcmV2U3RlcH1cblx0XHRcdFx0XHRcdFx0XHRuZXh0U3RlcD17dGhpcy5uZXh0U3RlcH1cblx0XHRcdFx0XHRcdFx0XHRpc05leHREaXNhYmxlZD17aXNOZXh0RGlzYWJsZWR9XG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tDb25kaXRpb25hbExvZ2ljPXt0aGlzLmNoZWNrQ29uZGl0aW9uYWxMb2dpY31cblx0XHRcdFx0XHRcdFx0XHRzYXZlU3RhdGVUb0h0bWxGaWVsZD17c2F2ZVN0YXRlVG9IdG1sRmllbGR9XG5cdFx0XHRcdFx0XHRcdFx0ZW5hYmxlSG9uZXlwb3Q9e2Zvcm1EYXRhLmVuYWJsZUhvbmV5cG90fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7KCFmb3JtRGF0YS5wYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgfHwgKGZvcm1EYXRhLnBhZ2luYXRpb24gJiYgZm9ybURhdGEucGFnaW5hdGlvbi5wYWdlcy5sZW5ndGggPT09IGFjdGl2ZVBhZ2UpKSAmJiAoXG4gICAgICAgICAgICAgICAgPFN1Ym1pdFxuICAgICAgICAgICAgICAgICAgQnV0dG9uPXtCdXR0b259XG4gICAgICAgICAgICAgICAgICBMb2FkaW5nPXtMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgZm9ybURhdGE9e2Zvcm1EYXRhfVxuICAgICAgICAgICAgICAgICAgc3VibWl0SWNvbj17c3VibWl0SWNvbn1cbiAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e2lzRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICBzdWJtaXR0aW5nPXtzdWJtaXR0aW5nfVxuICAgICAgICAgICAgICAgICAgcHJldlN0ZXA9e3RoaXMucHJldlN0ZXB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAnJ1xuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5HcmF2aXR5Rm9ybS5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiB0cnVlLFxuICBzdWJtaXRJY29uOiBmYWxzZSxcbiAgc2F2ZVN0YXRlVG9IdG1sRmllbGQ6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgR3Jhdml0eUZvcm07XG4iXX0=
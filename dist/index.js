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
          Loading = _ref2.Loading,
          GFWrapper = _ref2.GFWrapper;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHcmF2aXR5Rm9ybSIsInByb3BzIiwiaWQiLCJzZXRTdGF0ZSIsInRvdWNoZWQiLCJzdGF0ZSIsImV2ZW50IiwiZmllbGQiLCJmb3JtVmFsdWVzIiwiY29uZGl0aW9hbmxJZHMiLCJjb25kaXRpb25GaWVsZHMiLCJ0eXBlIiwiaXNSZXF1aXJlZCIsInZhbHVlIiwidmFsdWVzIiwiaW5kZXgiLCJpbmRleE9mIiwidGFyZ2V0Iiwic3BsaWNlIiwicHVzaCIsInN1YklkIiwiZGF0ZUxhYmVsIiwidmFsIiwibGFiZWwiLCJjc3NDbGFzcyIsInZhbGlkIiwiaSIsImxlbmd0aCIsImhpZGUiLCJjaGVja0NvbmRpdGlvbmFsTG9naWMiLCJjb25kaXRpb25hbExvZ2ljIiwiaGlkZUZpZWxkIiwicGFnZU51bWJlciIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0dGluZyIsInN1Ym1pdFN1Y2Nlc3MiLCJzdWJtaXRGYWlsZWQiLCJjb25maXJtYXRpb25NZXNzYWdlIiwiZXJyb3JNZXNzYWdlcyIsImZvcm1JRCIsImJhY2tlbmRVcmwiLCJkYXRhIiwiRm9ybURhdGEiLCJheGlvcyIsInBvc3QiLCJyZXNwb25zZSIsImlzX3ZhbGlkIiwiY29uZmlybWF0aW9uX21lc3NhZ2UiLCJ2YWxpZGF0aW9uX21lc3NhZ2VzIiwiYWN0aXZlUGFnZSIsImUiLCJjb25kaXRpb24iLCJmaWVsZHMiLCJydWxlcyIsImFjdGlvblR5cGUiLCJoaWRlQmFzZWRPblJ1bGVzIiwiZmllbGRJZCIsImNvbmRpdGlvbkZpZWxkVmFsdWUiLCJzdHJpbmdWYWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsImpvaW4iLCJldmVyeSIsImxvYWRpbmciLCJpc1ZhbGlkIiwiZm9ybURhdGEiLCJfaXNNb3VudGVkIiwiZ2V0IiwidGhlbiIsImZvcm0iLCJjaG9pY2VzIiwiZmlsdGVyIiwiY2hvaWNlIiwiaXNTZWxlY3RlZCIsIm1hcCIsInByZXNlbGVjdGVkIiwiZmluZCIsImRlZmF1bHRWYWx1ZSIsInRtcEZpZWxkIiwiaWRzIiwiaXRlbSIsInBhcnNlSW50IiwicGFnaW5hdGlvbiIsInRpdGxlIiwic3VibWl0SWNvbiIsInNhdmVTdGF0ZVRvSHRtbEZpZWxkIiwic3R5bGVkQ29tcG9uZW50cyIsIkJ1dHRvbiIsIkxvYWRpbmciLCJHRldyYXBwZXIiLCJpc0Rpc2FibGVkIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJ4IiwiaXNOZXh0RGlzYWJsZWQiLCJwb3NpdGlvbiIsIm9uU3VibWl0IiwiZGVzY3JpcHRpb24iLCJ1cGRhdGVGb3JtSGFuZGxlciIsInNldFRvdWNoZWQiLCJwcmV2U3RlcCIsIm5leHRTdGVwIiwiZW5hYmxlSG9uZXlwb3QiLCJwYWdlcyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsVzs7Ozs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixxRkFBTUEsS0FBTjs7QUFEaUIsaUVBMEZOLFVBQUNDLEVBQUQsRUFBUTtBQUNuQixZQUFLQyxRQUFMLENBQWM7QUFDWkMsUUFBQUEsT0FBTyxvQkFBTyxNQUFLQyxLQUFMLENBQVdELE9BQWxCLHNCQUE0QkYsRUFBNUIsRUFBaUMsSUFBakM7QUFESyxPQUFkO0FBR0QsS0E5RmtCOztBQUFBLHdFQWdHQyxVQUFDSSxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFBQSx3QkFDb0IsTUFBS0YsS0FEekI7QUFBQSxVQUM1QkcsVUFENEIsZUFDNUJBLFVBRDRCO0FBQUEsVUFDaEJDLGNBRGdCLGVBQ2hCQSxjQURnQjtBQUFBLFVBQ0FDLGVBREEsZUFDQUEsZUFEQTtBQUFBLFVBRTlCUixFQUY4QixHQUVMSyxLQUZLLENBRTlCTCxFQUY4QjtBQUFBLFVBRTFCUyxJQUYwQixHQUVMSixLQUZLLENB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LEVBQUVQLGNBYlY7QUFjTixRQUFBLHFCQUFxQixFQUFFLEtBQUtsRSxxQkFkdEI7QUFlTixRQUFBLG9CQUFvQixFQUFFd0Qsb0JBZmhCO0FBZ0JOLFFBQUEsY0FBYyxFQUFFcEIsUUFBUSxDQUFDc0M7QUFoQm5CLFFBREYsRUFtQkcsQ0FBQyxDQUFDdEMsUUFBUSxDQUFDaUIsVUFBVixJQUNJakIsUUFBUSxDQUFDaUIsVUFBVCxJQUF1QmpCLFFBQVEsQ0FBQ2lCLFVBQVQsQ0FBb0JzQixLQUFwQixDQUEwQjdFLE1BQTFCLEtBQXFDc0IsVUFEakUsS0FFQyxnQ0FBQyxrQkFBRDtBQUNFLFFBQUEsTUFBTSxFQUFFc0MsTUFEVjtBQUVFLFFBQUEsT0FBTyxFQUFFQyxPQUZYO0FBR0UsUUFBQSxRQUFRLEVBQUV2QixRQUhaO0FBSUUsUUFBQSxVQUFVLEVBQUVtQixVQUpkO0FBS0UsUUFBQSxVQUFVLEVBQUVNLFVBTGQ7QUFNRSxRQUFBLFVBQVUsRUFBRXhELFVBTmQ7QUFPRSxRQUFBLFFBQVEsRUFBRSxLQUFLbUU7QUFQakIsUUFyQkosQ0FWRixDQURELEdBNkNDLEVBaEVKLENBREY7QUFxRUQ7Ozs7RUExVXVCSSxnQjs7QUE2VTFCekcsV0FBVyxDQUFDMEcsWUFBWixHQUEyQjtBQUN6QnZCLEVBQUFBLEtBQUssRUFBRSxJQURrQjtBQUV6QkMsRUFBQUEsVUFBVSxFQUFFLEtBRmE7QUFHekJDLEVBQUFBLG9CQUFvQixFQUFFO0FBSEcsQ0FBM0I7ZUFNZXJGLFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSZW5kZXJGaWVsZHMgZnJvbSAnLi9Gb3JtRWxlbWVudHMvUmVuZGVyRmllbGRzJztcbmltcG9ydCBGb3JtRXJyb3IgZnJvbSAnLi9Gb3JtRWxlbWVudHMvRm9ybUVycm9yJztcbmltcG9ydCBGb3JtQ29uZmlybWF0aW9uIGZyb20gJy4vRm9ybUVsZW1lbnRzL0Zvcm1Db25maXJtYXRpb24nO1xuaW1wb3J0IHsgdmFsaWRhdGVGaWVsZCB9IGZyb20gJy4vSGVscGVycy92YWxpZGF0aW9uJztcbmltcG9ydCBTdWJtaXQgZnJvbSAnLi9Gb3JtRWxlbWVudHMvU3VibWl0JztcblxuY2xhc3MgR3Jhdml0eUZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3VibWl0RmFpbGVkOiBmYWxzZSxcbiAgICAgIGVycm9yTWVzc2FnZXM6IGZhbHNlLFxuICAgICAgZm9ybVZhbHVlczoge30sXG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICBzdWJtaXRTdWNjZXNzOiBmYWxzZSxcbiAgICAgIGNvbmZpcm1hdGlvbk1lc3NhZ2U6IGZhbHNlLFxuICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgICBmb3JtRGF0YToge30sXG4gICAgICB0b3VjaGVkOiB7fSxcbiAgICAgIGFjdGl2ZVBhZ2U6IGZhbHNlLFxuICAgICAgY29uZGl0aW9uRmllbGRzOiB7fSxcbiAgICAgIGNvbmRpdGlvYW5sSWRzOiB7fSxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBmb3JtSUQsIGJhY2tlbmRVcmwgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICBjb25zdCBmb3JtID0gYXdhaXQgYXhpb3NcbiAgICAgIC5nZXQoYCR7YmFja2VuZFVybH0vJHtmb3JtSUR9YClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXG4gICAgICAuY2F0Y2goKCkgPT4gZmFsc2UpO1xuXG4gICAgaWYgKGZvcm0gJiYgdGhpcy5faXNNb3VudGVkKSB7XG4gICAgICBjb25zdCBmb3JtVmFsdWVzID0ge307XG4gICAgICBjb25zdCBjb25kaXRpb25GaWVsZHMgPSBbXTtcbiAgICAgIGNvbnN0IGNvbmRpdGlvYW5sSWRzID0gW107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgZm9ybS5maWVsZHMpIHtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgIHZhbHVlID0gZmllbGQuY2hvaWNlcy5maWx0ZXIoY2hvaWNlID0+IGNob2ljZS5pc1NlbGVjdGVkKS5tYXAoY2hvaWNlID0+IGNob2ljZS52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgIGNvbnN0IHByZXNlbGVjdGVkID0gZmllbGQuY2hvaWNlcy5maW5kKGNob2ljZSA9PiBjaG9pY2UuaXNTZWxlY3RlZCk7XG4gICAgICAgICAgdmFsdWUgPSBwcmVzZWxlY3RlZCA/IHByZXNlbGVjdGVkLnZhbHVlIDogJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUgPSBmaWVsZC5kZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBncmFiIGFsbCBjb25kaXRpb25hbCBsb2dpYyBmaWVsZHNcbiAgICAgICAgaWYgKGZpZWxkLmNvbmRpdGlvbmFsTG9naWMpIHtcbiAgICAgICAgICBjb25zdCB0bXBGaWVsZCA9IHtcbiAgICAgICAgICAgIGlkOiBmaWVsZC5pZCxcbiAgICAgICAgICAgIGNvbmRpdGlvbmFsTG9naWM6IGZpZWxkLmNvbmRpdGlvbmFsTG9naWMsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBjb25zdCBpZHMgPSBmaWVsZC5jb25kaXRpb25hbExvZ2ljLnJ1bGVzLm1hcChpdGVtID0+IGl0ZW0uZmllbGRJZCk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQoaWRzW2ldKTtcbiAgICAgICAgICAgIGlmIChjb25kaXRpb2FubElkcy5pbmRleE9mKGlkKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgY29uZGl0aW9hbmxJZHMucHVzaChpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbmRpdGlvbkZpZWxkcy5wdXNoKHRtcEZpZWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1WYWx1ZXNbZmllbGQuaWRdID0ge1xuICAgICAgICAgIHZhbGlkOiB2YWxpZGF0ZUZpZWxkKHZhbHVlLCBmaWVsZC50eXBlLCBmaWVsZC5pc1JlcXVpcmVkKSxcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICBsYWJlbDogZmllbGQubGFiZWwsXG4gICAgICAgICAgcGFnZU51bWJlcjogZmllbGQucGFnZU51bWJlcixcbiAgICAgICAgICBjc3NDbGFzczogZmllbGQuY3NzQ2xhc3MsXG4gICAgICAgICAgaXNSZXF1aXJlZDogZmllbGQuaXNSZXF1aXJlZCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8vIGNoZWNrIGNvbmRpdGlvbiBsb2dpY1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25kaXRpb25GaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9ybVZhbHVlc1tjb25kaXRpb25GaWVsZHNbaV0uaWRdLmhpZGVGaWVsZCA9IHRoaXMuY2hlY2tDb25kaXRpb25hbExvZ2ljKFxuICAgICAgICAgIGNvbmRpdGlvbkZpZWxkc1tpXS5jb25kaXRpb25hbExvZ2ljLFxuICAgICAgICAgIGZvcm1WYWx1ZXMsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb3JtRGF0YTogZm9ybSxcbiAgICAgICAgZm9ybVZhbHVlcyxcbiAgICAgICAgYWN0aXZlUGFnZTogZm9ybS5wYWdpbmF0aW9uID8gMSA6IGZhbHNlLFxuICAgICAgICBjb25kaXRpb25GaWVsZHMsXG4gICAgICAgIGNvbmRpdGlvYW5sSWRzLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gIH1cblxuICBzZXRUb3VjaGVkID0gKGlkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0b3VjaGVkOiB7IC4uLnRoaXMuc3RhdGUudG91Y2hlZCwgW2lkXTogdHJ1ZSB9LFxuICAgIH0pO1xuICB9O1xuXG4gIHVwZGF0ZUZvcm1IYW5kbGVyID0gKGV2ZW50LCBmaWVsZCkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybVZhbHVlcywgY29uZGl0aW9hbmxJZHMsIGNvbmRpdGlvbkZpZWxkcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgeyBpZCwgdHlwZSwgaXNSZXF1aXJlZCB9ID0gZmllbGQ7XG4gICAgLy8gU2V0IG5ldyB2YWx1ZVxuICAgIGxldCB2YWx1ZTtcbiAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgY29uc3QgdmFsdWVzID0gWy4uLmZvcm1WYWx1ZXNbZmllbGQuaWRdLnZhbHVlXTtcbiAgICAgIGNvbnN0IGluZGV4ID0gdmFsdWVzLmluZGV4T2YoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIHZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWVzLnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHZhbHVlID0gdmFsdWVzO1xuICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PSAnZGF0ZScpIHtcbiAgICAgIGNvbnN0IHsgc3ViSWQsIGRhdGVMYWJlbCB9ID0gZmllbGQ7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBbLi4uZm9ybVZhbHVlc1tmaWVsZC5pZF0udmFsdWVdO1xuICAgICAgdmFsdWVzW3N1YklkXSA9IHtcbiAgICAgICAgdmFsOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICAgIGxhYmVsOiBkYXRlTGFiZWwsXG4gICAgICB9O1xuICAgICAgdmFsdWUgPSB2YWx1ZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gZXZlbnQudGFyZ2V0ID8gZXZlbnQudGFyZ2V0LnZhbHVlIDogJ251bGwnO1xuICAgIH1cbiAgICAvLyBpZiBmaWVsZCBpcyBJQkFOXG4gICAgaWYgKHR5cGUgPT09ICd0ZXh0JyAmJiBmaWVsZC5jc3NDbGFzcy5pbmRleE9mKCdpYmFuJykgPiAtMSkge1xuICAgICAgdHlwZSA9ICdpYmFuJztcbiAgICB9XG4gICAgLy8gVmFsaWRhdGUgZmllbGRcbiAgICBjb25zdCB2YWxpZCA9IHZhbGlkYXRlRmllbGQodmFsdWUsIHR5cGUsIGlzUmVxdWlyZWQsIGZpZWxkKTtcblxuICAgIC8vIGlmIGZpZWxkIElEIGlzIHNvbWV3aGVyZSBpbiBjb25kaXRpb25hbCBmaWVsZHNcbiAgICAvLyByZWNhbGN1bGF0ZSBhbGwgY29uZGl0aW9uc1xuICAgIGlmIChjb25kaXRpb2FubElkcy5pbmRleE9mKGlkKSAhPT0gLTEpIHtcbiAgICAgIGZvcm1WYWx1ZXNbaWRdLnZhbHVlID0gdmFsdWU7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmRpdGlvbkZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB7IGlkIH0gPSBjb25kaXRpb25GaWVsZHNbaV07XG4gICAgICAgIGNvbnN0IGhpZGUgPSB0aGlzLmNoZWNrQ29uZGl0aW9uYWxMb2dpYyhjb25kaXRpb25GaWVsZHNbaV0uY29uZGl0aW9uYWxMb2dpYywgZm9ybVZhbHVlcyk7XG4gICAgICAgIGZvcm1WYWx1ZXNbaWRdLmhpZGVGaWVsZCA9IGhpZGU7XG4gICAgICAgIGlmIChoaWRlKSB7XG4gICAgICAgICAgaWYgKGZvcm1WYWx1ZXNbaWRdLmlzUmVxdWlyZWQgJiYgaGlkZSkge1xuICAgICAgICAgICAgZm9ybVZhbHVlc1tpZF0udmFsdWUgPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9ybVZhbHVlc1tpZF0udmFsaWQgPSAhIWZvcm1WYWx1ZXNbaWRdLmlzUmVxdWlyZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvcm1WYWx1ZXM6IHtcbiAgICAgICAgLi4uZm9ybVZhbHVlcyxcbiAgICAgICAgW2lkXToge1xuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIGlkLFxuICAgICAgICAgIHZhbGlkLFxuICAgICAgICAgIGxhYmVsOiBmaWVsZC5sYWJlbCxcbiAgICAgICAgICBwYWdlTnVtYmVyOiBmaWVsZC5wYWdlTnVtYmVyLFxuICAgICAgICAgIGNzc0NsYXNzOiBmaWVsZC5jc3NDbGFzcyxcbiAgICAgICAgICBpc1JlcXVpcmVkOiBmaWVsZC5pc1JlcXVpcmVkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdWJtaXR0aW5nOiB0cnVlLFxuICAgICAgc3VibWl0U3VjY2VzczogZmFsc2UsXG4gICAgICBzdWJtaXRGYWlsZWQ6IGZhbHNlLFxuICAgICAgY29uZmlybWF0aW9uTWVzc2FnZTogZmFsc2UsXG4gICAgICBlcnJvck1lc3NhZ2VzOiBmYWxzZSxcbiAgICB9KTtcbiAgICBjb25zdCB7IGZvcm1JRCwgYmFja2VuZFVybCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke2JhY2tlbmRVcmx9LyR7Zm9ybUlEfS9zdWJtaXNzaW9uc2AsIGRhdGEpO1xuXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5pc192YWxpZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgICBzdWJtaXRTdWNjZXNzOiB0cnVlLFxuICAgICAgICBjb25maXJtYXRpb25NZXNzYWdlOiByZXNwb25zZS5kYXRhLmNvbmZpcm1hdGlvbl9tZXNzYWdlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgICAgc3VibWl0RmFpbGVkOiB0cnVlLFxuICAgICAgICBlcnJvck1lc3NhZ2VzOiByZXNwb25zZS5kYXRhLnZhbGlkYXRpb25fbWVzc2FnZXMsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgbmV4dFN0ZXAgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBhY3RpdmVQYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlUGFnZTogYWN0aXZlUGFnZSArIDEsXG4gICAgfSk7XG4gIH07XG5cbiAgcHJldlN0ZXAgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IGFjdGl2ZVBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVQYWdlOiBhY3RpdmVQYWdlIC0gMSxcbiAgICB9KTtcbiAgfTtcblxuICBjaGVja0NvbmRpdGlvbmFsTG9naWMgPSAoY29uZGl0aW9uLCBmaWVsZHMgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IHsgcnVsZXMsIGFjdGlvblR5cGUgfSA9IGNvbmRpdGlvbjtcbiAgICBpZiAoIXJ1bGVzKSByZXR1cm4gdHJ1ZTtcblxuICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSBmaWVsZHMgfHwgdGhpcy5zdGF0ZS5mb3JtVmFsdWVzO1xuXG4gICAgLy8gc2hvdyBvbmx5IGlmIGlzIHNlbGVjdGVkIFwiQWxsIGZpZWxkc1wiIChpdCBzaG91bGQgYmUgdHdlYWtlZCBpbiBmdXR1cmUpXG4gICAgLy8gd29ya3Mgb25seSBcInNob3cvaGlkZSB3aGVuIGZpZWxkIGlzIGVxdWFsIHRvXCJcbiAgICBsZXQgaGlkZUZpZWxkID0gYWN0aW9uVHlwZSAhPT0gJ2hpZGUnO1xuICAgIGNvbnN0IGhpZGVCYXNlZE9uUnVsZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB7IGZpZWxkSWQsIHZhbHVlIH0gPSBydWxlc1tpXTtcbiAgICAgIGNvbnN0IGNvbmRpdGlvbkZpZWxkVmFsdWUgPSBmb3JtVmFsdWVzW2ZpZWxkSWRdLnZhbHVlO1xuXG4gICAgICBjb25zdCBzdHJpbmdWYWx1ZSA9IEFycmF5LmlzQXJyYXkoY29uZGl0aW9uRmllbGRWYWx1ZSlcbiAgICAgICAgPyBjb25kaXRpb25GaWVsZFZhbHVlLmpvaW4oJycpXG4gICAgICAgIDogY29uZGl0aW9uRmllbGRWYWx1ZTtcbiAgICAgIGlmIChzdHJpbmdWYWx1ZSAmJiB2YWx1ZSA9PT0gc3RyaW5nVmFsdWUpIHtcbiAgICAgICAgaGlkZUJhc2VkT25SdWxlc1tpXSA9IGFjdGlvblR5cGUgPT09ICdoaWRlJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhpZGVCYXNlZE9uUnVsZXNbaV0gPSBhY3Rpb25UeXBlICE9PSAnaGlkZSc7XG4gICAgICB9XG4gICAgfVxuICAgIGhpZGVGaWVsZCA9IGhpZGVCYXNlZE9uUnVsZXMuZXZlcnkoaSA9PiBpID09PSB0cnVlKTtcbiAgICAvLyBmb3JtVmFsdWVzW2lkXS5oaWRlRmllbGQgPSBoaWRlRmllbGQ7XG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGZvcm1WYWx1ZXMgfSk7XG4gICAgcmV0dXJuIGhpZGVGaWVsZDtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZm9ybURhdGEsXG4gICAgICBmb3JtVmFsdWVzLFxuICAgICAgc3VibWl0RmFpbGVkLFxuICAgICAgc3VibWl0U3VjY2VzcyxcbiAgICAgIHRvdWNoZWQsXG4gICAgICBzdWJtaXR0aW5nLFxuICAgICAgYWN0aXZlUGFnZSxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7XG4gICAgICB0aXRsZSwgc3VibWl0SWNvbiwgc2F2ZVN0YXRlVG9IdG1sRmllbGQsIHN0eWxlZENvbXBvbmVudHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBCdXR0b24sIExvYWRpbmcsIEdGV3JhcHBlciB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcbiAgICBjb25zdCB7IGNzc0NsYXNzIH0gPSBmb3JtRGF0YTtcblxuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBPYmplY3Qua2V5cyhmb3JtVmFsdWVzKS5zb21lKFxuICAgICAgeCA9PiAhZm9ybVZhbHVlc1t4XS5oaWRlRmllbGQgJiYgZm9ybVZhbHVlc1t4XS52YWxpZCxcbiAgICApO1xuICAgIGNvbnN0IGlzTmV4dERpc2FibGVkID0gYWN0aXZlUGFnZVxuICAgICAgPyBPYmplY3Qua2V5cyhmb3JtVmFsdWVzKS5zb21lKFxuICAgICAgICB4ID0+IGZvcm1WYWx1ZXNbeF0ucGFnZU51bWJlciA9PT0gYWN0aXZlUGFnZVxuICAgICAgICAgICAgJiYgIWZvcm1WYWx1ZXNbeF0uaGlkZUZpZWxkXG4gICAgICAgICAgICAmJiBmb3JtVmFsdWVzW3hdLnZhbGlkLFxuICAgICAgKVxuICAgICAgOiBmYWxzZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0td3JhcHBlclwiXG4gICAgICAgIGNzcz17eyBwb3NpdGlvbjogJ3JlYWx0aXZlJyB9fVxuICAgICAgICBpZD17YGdyYXZpdHlfZm9ybV8ke3RoaXMucHJvcHMuZm9ybUlEfWB9XG4gICAgICA+XG4gICAgICAgIHtmb3JtRGF0YS50aXRsZSA/IG51bGwgOiBMb2FkaW5nICYmIDxMb2FkaW5nIGlzTG9hZGluZyAvPn1cblxuICAgICAgICB7c3VibWl0RmFpbGVkICYmICFzdWJtaXRTdWNjZXNzICYmIChcbiAgICAgICAgICA8Rm9ybUVycm9yXG4gICAgICAgICAgICBmaWVsZHM9e2Zvcm1WYWx1ZXN9XG4gICAgICAgICAgICBlcnJvcnM9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlc31cbiAgICAgICAgICAgIGVycm9yTWVzc2FnZT1cIlRoZXJlIHdhcyBhIHByb2JsZW0gd2l0aCB5b3VyIHN1Ym1pc3Npb25cIlxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAge3N1Ym1pdFN1Y2Nlc3MgJiYgdGhpcy5zdGF0ZS5jb25maXJtYXRpb25NZXNzYWdlICYmIChcbiAgICAgICAgICA8Rm9ybUNvbmZpcm1hdGlvbiBjb25maXJtYXRpb249e3RoaXMuc3RhdGUuY29uZmlybWF0aW9uTWVzc2FnZX0gLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7IXN1Ym1pdFN1Y2Nlc3MgJiYgZm9ybURhdGEuZmllbGRzID8gKFxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtlID0+IHRoaXMub25TdWJtaXQoZSl9IGNsYXNzTmFtZT17Y3NzQ2xhc3N9IG5vVmFsaWRhdGU+XG4gICAgICAgICAgICB7KGZvcm1EYXRhLnRpdGxlIHx8IGZvcm1EYXRhLmRlc2NyaXB0aW9uKSAmJiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2Zvcm1EYXRhLnRpdGxlICYmIHRpdGxlID8gPGgzIGNsYXNzTmFtZT1cImZvcm0tdGl0bGVcIj57Zm9ybURhdGEudGl0bGV9PC9oMz4gOiBudWxsfVxuICAgICAgICAgICAgICAgIHtmb3JtRGF0YS5kZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm0tZGVzY3JpcHRpb25cIj57Zm9ybURhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxSZW5kZXJGaWVsZHNcblx0XHRcdFx0XHRcdFx0XHRzdHlsZWRDb21wb25lbnRzPXtzdHlsZWRDb21wb25lbnRzfVxuXHRcdFx0XHRcdFx0XHRcdGZpZWxkcz17Zm9ybURhdGEuZmllbGRzfVxuXHRcdFx0XHRcdFx0XHRcdGZvcm1WYWx1ZXM9e2Zvcm1WYWx1ZXN9XG5cdFx0XHRcdFx0XHRcdFx0c3VibWl0RmFpbGVkPXtzdWJtaXRGYWlsZWR9XG5cdFx0XHRcdFx0XHRcdFx0c3VibWl0U3VjY2Vzcz17c3VibWl0U3VjY2Vzc31cblx0XHRcdFx0XHRcdFx0XHR1cGRhdGVGb3JtPXt0aGlzLnVwZGF0ZUZvcm1IYW5kbGVyfVxuXHRcdFx0XHRcdFx0XHRcdHRvdWNoZWQ9e3RvdWNoZWR9XG5cdFx0XHRcdFx0XHRcdFx0c2V0VG91Y2hlZD17dGhpcy5zZXRUb3VjaGVkfVxuXHRcdFx0XHRcdFx0XHRcdHBhZ2luYXRpb249e2Zvcm1EYXRhLnBhZ2luYXRpb259XG5cdFx0XHRcdFx0XHRcdFx0YWN0aXZlUGFnZT17YWN0aXZlUGFnZX1cblx0XHRcdFx0XHRcdFx0XHRwcmV2U3RlcD17dGhpcy5wcmV2U3RlcH1cblx0XHRcdFx0XHRcdFx0XHRuZXh0U3RlcD17dGhpcy5uZXh0U3RlcH1cblx0XHRcdFx0XHRcdFx0XHRpc05leHREaXNhYmxlZD17aXNOZXh0RGlzYWJsZWR9XG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tDb25kaXRpb25hbExvZ2ljPXt0aGlzLmNoZWNrQ29uZGl0aW9uYWxMb2dpY31cblx0XHRcdFx0XHRcdFx0XHRzYXZlU3RhdGVUb0h0bWxGaWVsZD17c2F2ZVN0YXRlVG9IdG1sRmllbGR9XG5cdFx0XHRcdFx0XHRcdFx0ZW5hYmxlSG9uZXlwb3Q9e2Zvcm1EYXRhLmVuYWJsZUhvbmV5cG90fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7KCFmb3JtRGF0YS5wYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgfHwgKGZvcm1EYXRhLnBhZ2luYXRpb24gJiYgZm9ybURhdGEucGFnaW5hdGlvbi5wYWdlcy5sZW5ndGggPT09IGFjdGl2ZVBhZ2UpKSAmJiAoXG4gICAgICAgICAgICAgICAgPFN1Ym1pdFxuICAgICAgICAgICAgICAgICAgQnV0dG9uPXtCdXR0b259XG4gICAgICAgICAgICAgICAgICBMb2FkaW5nPXtMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgZm9ybURhdGE9e2Zvcm1EYXRhfVxuICAgICAgICAgICAgICAgICAgc3VibWl0SWNvbj17c3VibWl0SWNvbn1cbiAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e2lzRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICBzdWJtaXR0aW5nPXtzdWJtaXR0aW5nfVxuICAgICAgICAgICAgICAgICAgcHJldlN0ZXA9e3RoaXMucHJldlN0ZXB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAnJ1xuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5HcmF2aXR5Rm9ybS5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiB0cnVlLFxuICBzdWJtaXRJY29uOiBmYWxzZSxcbiAgc2F2ZVN0YXRlVG9IdG1sRmllbGQ6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgR3Jhdml0eUZvcm07XG4iXX0=
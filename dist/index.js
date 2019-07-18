"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _RenderFields = _interopRequireDefault(require("./FormElements/RenderFields"));

var _FormError = _interopRequireDefault(require("./FormElements/FormError"));

var _FormConfirmation = _interopRequireDefault(require("./FormElements/FormConfirmation"));

var _validation = require("./Helpers/validation");

var _Submit = _interopRequireDefault(require("./FormElements/Submit"));

var _axios = _interopRequireDefault(require("axios"));

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

      if (field.type === "checkbox") {
        var values = _toConsumableArray(formValues[field.id].value);

        var index = values.indexOf(event.target.value);

        if (index > -1) {
          values.splice(index, 1);
        } else {
          values.push(event.target.value);
        }

        value = values;
      } else if (field.type == "date") {
        var subId = field.subId,
            dateLabel = field.dateLabel;

        var _values = _toConsumableArray(formValues[field.id].value);

        _values[subId] = {
          val: event.target.value,
          label: dateLabel
        };
        value = _values;
      } else {
        value = event.target ? event.target.value : "null";
      } // if field is IBAN


      if (type === "text" && field.cssClass.indexOf("iban") > -1) {
        type = "iban";
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
              formValues[_id].value = "";
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
                return _axios["default"].post("".concat(backendUrl, "/v1/gravityforms/").concat(formID, "/submissions"), {
                  data: data
                });

              case 6:
                response = _context.sent;

                if (response.data && response.is_valid) {
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

      var hideField = actionType !== "hide";
      var hideBasedOnRules = [];

      for (var i = 0; i < rules.length; i++) {
        var _rules$i = rules[i],
            fieldId = _rules$i.fieldId,
            value = _rules$i.value;
        var conditionFieldValue = formValues[fieldId].value;
        var stringValue = Array.isArray(conditionFieldValue) ? conditionFieldValue.join("") : conditionFieldValue;

        if (stringValue && value === stringValue) {
          hideBasedOnRules[i] = actionType === "hide";
        } else {
          hideBasedOnRules[i] = actionType !== "hide";
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
                return _axios["default"].get("".concat(backendUrl, "/v1/gravityforms/").concat(formID)).then(function (response) {
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

                  if (field.type === "checkbox") {
                    value = field.choices.filter(function (choice) {
                      return choice.isSelected;
                    }).map(function (choice) {
                      return choice.value;
                    });
                  } else if (field.type === "radio") {
                    preselected = field.choices.find(function (choice) {
                      return choice.isSelected;
                    });
                    value = preselected ? preselected.value : "";
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
          position: "realtive"
        },
        id: "gravity_form_".concat(this.props.formID)
      }, formData.title ? null : _react["default"].createElement(Loading, {
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
      }))) : "");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHcmF2aXR5Rm9ybSIsInByb3BzIiwiaWQiLCJzZXRTdGF0ZSIsInRvdWNoZWQiLCJzdGF0ZSIsImV2ZW50IiwiZmllbGQiLCJmb3JtVmFsdWVzIiwiY29uZGl0aW9hbmxJZHMiLCJjb25kaXRpb25GaWVsZHMiLCJ0eXBlIiwiaXNSZXF1aXJlZCIsInZhbHVlIiwidmFsdWVzIiwiaW5kZXgiLCJpbmRleE9mIiwidGFyZ2V0Iiwic3BsaWNlIiwicHVzaCIsInN1YklkIiwiZGF0ZUxhYmVsIiwidmFsIiwibGFiZWwiLCJjc3NDbGFzcyIsInZhbGlkIiwiaSIsImxlbmd0aCIsImhpZGUiLCJjaGVja0NvbmRpdGlvbmFsTG9naWMiLCJjb25kaXRpb25hbExvZ2ljIiwiaGlkZUZpZWxkIiwicGFnZU51bWJlciIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0dGluZyIsInN1Ym1pdFN1Y2Nlc3MiLCJzdWJtaXRGYWlsZWQiLCJjb25maXJtYXRpb25NZXNzYWdlIiwiZXJyb3JNZXNzYWdlcyIsImZvcm1JRCIsImJhY2tlbmRVcmwiLCJkYXRhIiwiRm9ybURhdGEiLCJheGlvcyIsInBvc3QiLCJyZXNwb25zZSIsImlzX3ZhbGlkIiwiY29uZmlybWF0aW9uX21lc3NhZ2UiLCJ2YWxpZGF0aW9uX21lc3NhZ2VzIiwiYWN0aXZlUGFnZSIsImUiLCJjb25kaXRpb24iLCJmaWVsZHMiLCJydWxlcyIsImFjdGlvblR5cGUiLCJoaWRlQmFzZWRPblJ1bGVzIiwiZmllbGRJZCIsImNvbmRpdGlvbkZpZWxkVmFsdWUiLCJzdHJpbmdWYWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsImpvaW4iLCJldmVyeSIsImxvYWRpbmciLCJpc1ZhbGlkIiwiZm9ybURhdGEiLCJfaXNNb3VudGVkIiwiZ2V0IiwidGhlbiIsImZvcm0iLCJjaG9pY2VzIiwiZmlsdGVyIiwiY2hvaWNlIiwiaXNTZWxlY3RlZCIsIm1hcCIsInByZXNlbGVjdGVkIiwiZmluZCIsImRlZmF1bHRWYWx1ZSIsInRtcEZpZWxkIiwiaWRzIiwiaXRlbSIsInBhcnNlSW50IiwicGFnaW5hdGlvbiIsInRpdGxlIiwic3VibWl0SWNvbiIsInNhdmVTdGF0ZVRvSHRtbEZpZWxkIiwic3R5bGVkQ29tcG9uZW50cyIsIkJ1dHRvbiIsIkxvYWRpbmciLCJpc0Rpc2FibGVkIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJ4IiwiaXNOZXh0RGlzYWJsZWQiLCJwb3NpdGlvbiIsIm9uU3VibWl0IiwiZGVzY3JpcHRpb24iLCJ1cGRhdGVGb3JtSGFuZGxlciIsInNldFRvdWNoZWQiLCJwcmV2U3RlcCIsIm5leHRTdGVwIiwiZW5hYmxlSG9uZXlwb3QiLCJwYWdlcyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsVzs7Ozs7QUFDTCx1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNsQixxRkFBTUEsS0FBTjs7QUFEa0IsaUVBOEZOLFVBQUFDLEVBQUUsRUFBSTtBQUNsQixZQUFLQyxRQUFMLENBQWM7QUFDYkMsUUFBQUEsT0FBTyxvQkFBTyxNQUFLQyxLQUFMLENBQVdELE9BQWxCLHNCQUE0QkYsRUFBNUIsRUFBaUMsSUFBakM7QUFETSxPQUFkO0FBR0EsS0FsR2tCOztBQUFBLHdFQW9HQyxVQUFDSSxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFBQSx3QkFDbUIsTUFBS0YsS0FEeEI7QUFBQSxVQUM3QkcsVUFENkIsZUFDN0JBLFVBRDZCO0FBQUEsVUFDakJDLGNBRGlCLGVBQ2pCQSxjQURpQjtBQUFBLFVBQ0RDLGVBREMsZUFDREEsZUFEQztBQUFBLFVBRS9CUixFQUYrQixHQUVOSyxLQUZNLENBRS9CTCxFQUYrQjtBQUFBLFVBRTNCUyxJQUYyQixHQUVOSixLQUZNLENBRTNCSSxJQUYyQjtB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RSxxQkFkN0I7QUFlQyxRQUFBLG9CQUFvQixFQUFFd0Qsb0JBZnZCO0FBZ0JDLFFBQUEsY0FBYyxFQUFFcEIsUUFBUSxDQUFDcUM7QUFoQjFCLFFBREQsRUFtQkUsQ0FBQyxDQUFDckMsUUFBUSxDQUFDaUIsVUFBVixJQUNBakIsUUFBUSxDQUFDaUIsVUFBVCxJQUNBakIsUUFBUSxDQUFDaUIsVUFBVCxDQUFvQnFCLEtBQXBCLENBQTBCNUUsTUFBMUIsS0FBcUNzQixVQUZ0QyxLQUdBLGdDQUFDLGtCQUFEO0FBQ0MsUUFBQSxNQUFNLEVBQUVzQyxNQURUO0FBRUMsUUFBQSxPQUFPLEVBQUVDLE9BRlY7QUFHQyxRQUFBLFFBQVEsRUFBRXZCLFFBSFg7QUFJQyxRQUFBLFVBQVUsRUFBRW1CLFVBSmI7QUFLQyxRQUFBLFVBQVUsRUFBRUssVUFMYjtBQU1DLFFBQUEsVUFBVSxFQUFFdkQsVUFOYjtBQU9DLFFBQUEsUUFBUSxFQUFFLEtBQUtrRTtBQVBoQixRQXRCRixDQWhCRCxDQURBLEdBb0RBLEVBdkVGLENBREQ7QUE0RUE7Ozs7RUFqV3dCSSxnQjs7QUFvVzFCeEcsV0FBVyxDQUFDeUcsWUFBWixHQUEyQjtBQUMxQnRCLEVBQUFBLEtBQUssRUFBRSxJQURtQjtBQUUxQkMsRUFBQUEsVUFBVSxFQUFFLEtBRmM7QUFHMUJDLEVBQUFBLG9CQUFvQixFQUFFO0FBSEksQ0FBM0I7ZUFNZXJGLFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVuZGVyRmllbGRzIGZyb20gXCIuL0Zvcm1FbGVtZW50cy9SZW5kZXJGaWVsZHNcIjtcbmltcG9ydCBGb3JtRXJyb3IgZnJvbSBcIi4vRm9ybUVsZW1lbnRzL0Zvcm1FcnJvclwiO1xuaW1wb3J0IEZvcm1Db25maXJtYXRpb24gZnJvbSBcIi4vRm9ybUVsZW1lbnRzL0Zvcm1Db25maXJtYXRpb25cIjtcbmltcG9ydCB7IHZhbGlkYXRlRmllbGQgfSBmcm9tIFwiLi9IZWxwZXJzL3ZhbGlkYXRpb25cIjtcbmltcG9ydCBTdWJtaXQgZnJvbSBcIi4vRm9ybUVsZW1lbnRzL1N1Ym1pdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jbGFzcyBHcmF2aXR5Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzdWJtaXRGYWlsZWQ6IGZhbHNlLFxuXHRcdFx0ZXJyb3JNZXNzYWdlczogZmFsc2UsXG5cdFx0XHRmb3JtVmFsdWVzOiB7fSxcblx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHRzdWJtaXR0aW5nOiBmYWxzZSxcblx0XHRcdHN1Ym1pdFN1Y2Nlc3M6IGZhbHNlLFxuXHRcdFx0Y29uZmlybWF0aW9uTWVzc2FnZTogZmFsc2UsXG5cdFx0XHRpc1ZhbGlkOiBmYWxzZSxcblx0XHRcdGZvcm1EYXRhOiB7fSxcblx0XHRcdHRvdWNoZWQ6IHt9LFxuXHRcdFx0YWN0aXZlUGFnZTogZmFsc2UsXG5cdFx0XHRjb25kaXRpb25GaWVsZHM6IHt9LFxuXHRcdFx0Y29uZGl0aW9hbmxJZHM6IHt9XG5cdFx0fTtcblx0fVxuXG5cdGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnN0IHsgZm9ybUlELCBiYWNrZW5kVXJsIH0gPSB0aGlzLnByb3BzO1xuXHRcdHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG5cdFx0Y29uc3QgZm9ybSA9IGF3YWl0IGF4aW9zXG5cdFx0XHQuZ2V0KGAke2JhY2tlbmRVcmx9L3YxL2dyYXZpdHlmb3Jtcy8ke2Zvcm1JRH1gKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcblx0XHRcdC5jYXRjaCgoKSA9PiBmYWxzZSk7XG5cblx0XHRpZiAoZm9ybSAmJiB0aGlzLl9pc01vdW50ZWQpIHtcblx0XHRcdGNvbnN0IGZvcm1WYWx1ZXMgPSB7fTtcblx0XHRcdGNvbnN0IGNvbmRpdGlvbkZpZWxkcyA9IFtdO1xuXHRcdFx0Y29uc3QgY29uZGl0aW9hbmxJZHMgPSBbXTtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuXHRcdFx0Zm9yIChjb25zdCBmaWVsZCBvZiBmb3JtLmZpZWxkcykge1xuXHRcdFx0XHRsZXQgdmFsdWU7XG5cdFx0XHRcdGlmIChmaWVsZC50eXBlID09PSBcImNoZWNrYm94XCIpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IGZpZWxkLmNob2ljZXNcblx0XHRcdFx0XHRcdC5maWx0ZXIoY2hvaWNlID0+IGNob2ljZS5pc1NlbGVjdGVkKVxuXHRcdFx0XHRcdFx0Lm1hcChjaG9pY2UgPT4gY2hvaWNlLnZhbHVlKTtcblx0XHRcdFx0fSBlbHNlIGlmIChmaWVsZC50eXBlID09PSBcInJhZGlvXCIpIHtcblx0XHRcdFx0XHRjb25zdCBwcmVzZWxlY3RlZCA9IGZpZWxkLmNob2ljZXMuZmluZChjaG9pY2UgPT4gY2hvaWNlLmlzU2VsZWN0ZWQpO1xuXHRcdFx0XHRcdHZhbHVlID0gcHJlc2VsZWN0ZWQgPyBwcmVzZWxlY3RlZC52YWx1ZSA6IFwiXCI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBmaWVsZC5kZWZhdWx0VmFsdWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBncmFiIGFsbCBjb25kaXRpb25hbCBsb2dpYyBmaWVsZHNcblx0XHRcdFx0aWYgKGZpZWxkLmNvbmRpdGlvbmFsTG9naWMpIHtcblx0XHRcdFx0XHRjb25zdCB0bXBGaWVsZCA9IHtcblx0XHRcdFx0XHRcdGlkOiBmaWVsZC5pZCxcblx0XHRcdFx0XHRcdGNvbmRpdGlvbmFsTG9naWM6IGZpZWxkLmNvbmRpdGlvbmFsTG9naWNcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdGNvbnN0IGlkcyA9IGZpZWxkLmNvbmRpdGlvbmFsTG9naWMucnVsZXMubWFwKGl0ZW0gPT4gaXRlbS5maWVsZElkKTtcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0Y29uc3QgaWQgPSBwYXJzZUludChpZHNbaV0pO1xuXHRcdFx0XHRcdFx0aWYgKGNvbmRpdGlvYW5sSWRzLmluZGV4T2YoaWQpID09PSAtMSkge1xuXHRcdFx0XHRcdFx0XHRjb25kaXRpb2FubElkcy5wdXNoKGlkKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uZGl0aW9uRmllbGRzLnB1c2godG1wRmllbGQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9ybVZhbHVlc1tmaWVsZC5pZF0gPSB7XG5cdFx0XHRcdFx0dmFsaWQ6IHZhbGlkYXRlRmllbGQodmFsdWUsIGZpZWxkLnR5cGUsIGZpZWxkLmlzUmVxdWlyZWQpLFxuXHRcdFx0XHRcdHZhbHVlLFxuXHRcdFx0XHRcdGxhYmVsOiBmaWVsZC5sYWJlbCxcblx0XHRcdFx0XHRwYWdlTnVtYmVyOiBmaWVsZC5wYWdlTnVtYmVyLFxuXHRcdFx0XHRcdGNzc0NsYXNzOiBmaWVsZC5jc3NDbGFzcyxcblx0XHRcdFx0XHRpc1JlcXVpcmVkOiBmaWVsZC5pc1JlcXVpcmVkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHQvLyBjaGVjayBjb25kaXRpb24gbG9naWNcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY29uZGl0aW9uRmllbGRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGZvcm1WYWx1ZXNbXG5cdFx0XHRcdFx0Y29uZGl0aW9uRmllbGRzW2ldLmlkXG5cdFx0XHRcdF0uaGlkZUZpZWxkID0gdGhpcy5jaGVja0NvbmRpdGlvbmFsTG9naWMoXG5cdFx0XHRcdFx0Y29uZGl0aW9uRmllbGRzW2ldLmNvbmRpdGlvbmFsTG9naWMsXG5cdFx0XHRcdFx0Zm9ybVZhbHVlc1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0Zm9ybURhdGE6IGZvcm0sXG5cdFx0XHRcdGZvcm1WYWx1ZXMsXG5cdFx0XHRcdGFjdGl2ZVBhZ2U6IGZvcm0ucGFnaW5hdGlvbiA/IDEgOiBmYWxzZSxcblx0XHRcdFx0Y29uZGl0aW9uRmllbGRzLFxuXHRcdFx0XHRjb25kaXRpb2FubElkc1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0dGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG5cdH1cblxuXHRzZXRUb3VjaGVkID0gaWQgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dG91Y2hlZDogeyAuLi50aGlzLnN0YXRlLnRvdWNoZWQsIFtpZF06IHRydWUgfVxuXHRcdH0pO1xuXHR9O1xuXG5cdHVwZGF0ZUZvcm1IYW5kbGVyID0gKGV2ZW50LCBmaWVsZCkgPT4ge1xuXHRcdGNvbnN0IHsgZm9ybVZhbHVlcywgY29uZGl0aW9hbmxJZHMsIGNvbmRpdGlvbkZpZWxkcyB9ID0gdGhpcy5zdGF0ZTtcblx0XHRsZXQgeyBpZCwgdHlwZSwgaXNSZXF1aXJlZCB9ID0gZmllbGQ7XG5cdFx0Ly8gU2V0IG5ldyB2YWx1ZVxuXHRcdGxldCB2YWx1ZTtcblx0XHRpZiAoZmllbGQudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XG5cdFx0XHRjb25zdCB2YWx1ZXMgPSBbLi4uZm9ybVZhbHVlc1tmaWVsZC5pZF0udmFsdWVdO1xuXHRcdFx0Y29uc3QgaW5kZXggPSB2YWx1ZXMuaW5kZXhPZihldmVudC50YXJnZXQudmFsdWUpO1xuXHRcdFx0aWYgKGluZGV4ID4gLTEpIHtcblx0XHRcdFx0dmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YWx1ZXMucHVzaChldmVudC50YXJnZXQudmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dmFsdWUgPSB2YWx1ZXM7XG5cdFx0fSBlbHNlIGlmIChmaWVsZC50eXBlID09IFwiZGF0ZVwiKSB7XG5cdFx0XHRjb25zdCB7IHN1YklkLCBkYXRlTGFiZWwgfSA9IGZpZWxkO1xuXHRcdFx0Y29uc3QgdmFsdWVzID0gWy4uLmZvcm1WYWx1ZXNbZmllbGQuaWRdLnZhbHVlXTtcblx0XHRcdHZhbHVlc1tzdWJJZF0gPSB7XG5cdFx0XHRcdHZhbDogZXZlbnQudGFyZ2V0LnZhbHVlLFxuXHRcdFx0XHRsYWJlbDogZGF0ZUxhYmVsXG5cdFx0XHR9O1xuXHRcdFx0dmFsdWUgPSB2YWx1ZXM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbHVlID0gZXZlbnQudGFyZ2V0ID8gZXZlbnQudGFyZ2V0LnZhbHVlIDogXCJudWxsXCI7XG5cdFx0fVxuXHRcdC8vIGlmIGZpZWxkIGlzIElCQU5cblx0XHRpZiAodHlwZSA9PT0gXCJ0ZXh0XCIgJiYgZmllbGQuY3NzQ2xhc3MuaW5kZXhPZihcImliYW5cIikgPiAtMSkge1xuXHRcdFx0dHlwZSA9IFwiaWJhblwiO1xuXHRcdH1cblx0XHQvLyBWYWxpZGF0ZSBmaWVsZFxuXHRcdGNvbnN0IHZhbGlkID0gdmFsaWRhdGVGaWVsZCh2YWx1ZSwgdHlwZSwgaXNSZXF1aXJlZCwgZmllbGQpO1xuXG5cdFx0Ly8gaWYgZmllbGQgSUQgaXMgc29tZXdoZXJlIGluIGNvbmRpdGlvbmFsIGZpZWxkc1xuXHRcdC8vIHJlY2FsY3VsYXRlIGFsbCBjb25kaXRpb25zXG5cdFx0aWYgKGNvbmRpdGlvYW5sSWRzLmluZGV4T2YoaWQpICE9PSAtMSkge1xuXHRcdFx0Zm9ybVZhbHVlc1tpZF0udmFsdWUgPSB2YWx1ZTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY29uZGl0aW9uRmllbGRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IHsgaWQgfSA9IGNvbmRpdGlvbkZpZWxkc1tpXTtcblx0XHRcdFx0Y29uc3QgaGlkZSA9IHRoaXMuY2hlY2tDb25kaXRpb25hbExvZ2ljKFxuXHRcdFx0XHRcdGNvbmRpdGlvbkZpZWxkc1tpXS5jb25kaXRpb25hbExvZ2ljLFxuXHRcdFx0XHRcdGZvcm1WYWx1ZXNcblx0XHRcdFx0KTtcblx0XHRcdFx0Zm9ybVZhbHVlc1tpZF0uaGlkZUZpZWxkID0gaGlkZTtcblx0XHRcdFx0aWYgKGhpZGUpIHtcblx0XHRcdFx0XHRpZiAoZm9ybVZhbHVlc1tpZF0uaXNSZXF1aXJlZCAmJiBoaWRlKSB7XG5cdFx0XHRcdFx0XHRmb3JtVmFsdWVzW2lkXS52YWx1ZSA9IFwiXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZvcm1WYWx1ZXNbaWRdLnZhbGlkID0gISFmb3JtVmFsdWVzW2lkXS5pc1JlcXVpcmVkO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRmb3JtVmFsdWVzOiB7XG5cdFx0XHRcdC4uLmZvcm1WYWx1ZXMsXG5cdFx0XHRcdFtpZF06IHtcblx0XHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0XHRpZCxcblx0XHRcdFx0XHR2YWxpZCxcblx0XHRcdFx0XHRsYWJlbDogZmllbGQubGFiZWwsXG5cdFx0XHRcdFx0cGFnZU51bWJlcjogZmllbGQucGFnZU51bWJlcixcblx0XHRcdFx0XHRjc3NDbGFzczogZmllbGQuY3NzQ2xhc3MsXG5cdFx0XHRcdFx0aXNSZXF1aXJlZDogZmllbGQuaXNSZXF1aXJlZFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0b25TdWJtaXQgPSBhc3luYyBldmVudCA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHN1Ym1pdHRpbmc6IHRydWUsXG5cdFx0XHRzdWJtaXRTdWNjZXNzOiBmYWxzZSxcblx0XHRcdHN1Ym1pdEZhaWxlZDogZmFsc2UsXG5cdFx0XHRjb25maXJtYXRpb25NZXNzYWdlOiBmYWxzZSxcblx0XHRcdGVycm9yTWVzc2FnZXM6IGZhbHNlXG5cdFx0fSk7XG5cdFx0Y29uc3QgeyBmb3JtSUQsIGJhY2tlbmRVcmwgfSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpO1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcblx0XHRcdGAke2JhY2tlbmRVcmx9L3YxL2dyYXZpdHlmb3Jtcy8ke2Zvcm1JRH0vc3VibWlzc2lvbnNgLFxuXHRcdFx0e1xuXHRcdFx0XHRkYXRhXG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmlzX3ZhbGlkKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0c3VibWl0dGluZzogZmFsc2UsXG5cdFx0XHRcdHN1Ym1pdFN1Y2Nlc3M6IHRydWUsXG5cdFx0XHRcdGNvbmZpcm1hdGlvbk1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEuY29uZmlybWF0aW9uX21lc3NhZ2Vcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0c3VibWl0dGluZzogZmFsc2UsXG5cdFx0XHRcdHN1Ym1pdEZhaWxlZDogdHJ1ZSxcblx0XHRcdFx0ZXJyb3JNZXNzYWdlczogcmVzcG9uc2UuZGF0YS52YWxpZGF0aW9uX21lc3NhZ2VzXG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0bmV4dFN0ZXAgPSAoKSA9PiB7XG5cdFx0Y29uc3QgeyBhY3RpdmVQYWdlIH0gPSB0aGlzLnN0YXRlO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0YWN0aXZlUGFnZTogYWN0aXZlUGFnZSArIDFcblx0XHR9KTtcblx0fTtcblxuXHRwcmV2U3RlcCA9IGUgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRjb25zdCB7IGFjdGl2ZVBhZ2UgfSA9IHRoaXMuc3RhdGU7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRhY3RpdmVQYWdlOiBhY3RpdmVQYWdlIC0gMVxuXHRcdH0pO1xuXHR9O1xuXG5cdGNoZWNrQ29uZGl0aW9uYWxMb2dpYyA9IChjb25kaXRpb24sIGZpZWxkcyA9IGZhbHNlKSA9PiB7XG5cdFx0Y29uc3QgeyBydWxlcywgYWN0aW9uVHlwZSB9ID0gY29uZGl0aW9uO1xuXHRcdGlmICghcnVsZXMpIHJldHVybiB0cnVlO1xuXG5cdFx0Y29uc3QgZm9ybVZhbHVlcyA9IGZpZWxkcyB8fCB0aGlzLnN0YXRlLmZvcm1WYWx1ZXM7XG5cblx0XHQvLyBzaG93IG9ubHkgaWYgaXMgc2VsZWN0ZWQgXCJBbGwgZmllbGRzXCIgKGl0IHNob3VsZCBiZSB0d2Vha2VkIGluIGZ1dHVyZSlcblx0XHQvLyB3b3JrcyBvbmx5IFwic2hvdy9oaWRlIHdoZW4gZmllbGQgaXMgZXF1YWwgdG9cIlxuXHRcdGxldCBoaWRlRmllbGQgPSBhY3Rpb25UeXBlICE9PSBcImhpZGVcIjtcblx0XHRjb25zdCBoaWRlQmFzZWRPblJ1bGVzID0gW107XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgeyBmaWVsZElkLCB2YWx1ZSB9ID0gcnVsZXNbaV07XG5cdFx0XHRjb25zdCBjb25kaXRpb25GaWVsZFZhbHVlID0gZm9ybVZhbHVlc1tmaWVsZElkXS52YWx1ZTtcblxuXHRcdFx0Y29uc3Qgc3RyaW5nVmFsdWUgPSBBcnJheS5pc0FycmF5KGNvbmRpdGlvbkZpZWxkVmFsdWUpXG5cdFx0XHRcdD8gY29uZGl0aW9uRmllbGRWYWx1ZS5qb2luKFwiXCIpXG5cdFx0XHRcdDogY29uZGl0aW9uRmllbGRWYWx1ZTtcblx0XHRcdGlmIChzdHJpbmdWYWx1ZSAmJiB2YWx1ZSA9PT0gc3RyaW5nVmFsdWUpIHtcblx0XHRcdFx0aGlkZUJhc2VkT25SdWxlc1tpXSA9IGFjdGlvblR5cGUgPT09IFwiaGlkZVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aGlkZUJhc2VkT25SdWxlc1tpXSA9IGFjdGlvblR5cGUgIT09IFwiaGlkZVwiO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRoaWRlRmllbGQgPSBoaWRlQmFzZWRPblJ1bGVzLmV2ZXJ5KGkgPT4gaSA9PT0gdHJ1ZSk7XG5cdFx0Ly8gZm9ybVZhbHVlc1tpZF0uaGlkZUZpZWxkID0gaGlkZUZpZWxkO1xuXHRcdC8vIHRoaXMuc2V0U3RhdGUoeyBmb3JtVmFsdWVzIH0pO1xuXHRcdHJldHVybiBoaWRlRmllbGQ7XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGZvcm1EYXRhLFxuXHRcdFx0Zm9ybVZhbHVlcyxcblx0XHRcdHN1Ym1pdEZhaWxlZCxcblx0XHRcdHN1Ym1pdFN1Y2Nlc3MsXG5cdFx0XHR0b3VjaGVkLFxuXHRcdFx0c3VibWl0dGluZyxcblx0XHRcdGFjdGl2ZVBhZ2Vcblx0XHR9ID0gdGhpcy5zdGF0ZTtcblx0XHRjb25zdCB7XG5cdFx0XHR0aXRsZSxcblx0XHRcdHN1Ym1pdEljb24sXG5cdFx0XHRzYXZlU3RhdGVUb0h0bWxGaWVsZCxcblx0XHRcdHN0eWxlZENvbXBvbmVudHNcblx0XHR9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCB7IEJ1dHRvbiwgTG9hZGluZyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblx0XHRjb25zdCB7IGNzc0NsYXNzIH0gPSBmb3JtRGF0YTtcblxuXHRcdGNvbnN0IGlzRGlzYWJsZWQgPSBPYmplY3Qua2V5cyhmb3JtVmFsdWVzKS5zb21lKFxuXHRcdFx0eCA9PiAhZm9ybVZhbHVlc1t4XS5oaWRlRmllbGQgJiYgZm9ybVZhbHVlc1t4XS52YWxpZFxuXHRcdCk7XG5cdFx0Y29uc3QgaXNOZXh0RGlzYWJsZWQgPSBhY3RpdmVQYWdlXG5cdFx0XHQ/IE9iamVjdC5rZXlzKGZvcm1WYWx1ZXMpLnNvbWUoXG5cdFx0XHRcdFx0eCA9PlxuXHRcdFx0XHRcdFx0Zm9ybVZhbHVlc1t4XS5wYWdlTnVtYmVyID09PSBhY3RpdmVQYWdlICYmXG5cdFx0XHRcdFx0XHQhZm9ybVZhbHVlc1t4XS5oaWRlRmllbGQgJiZcblx0XHRcdFx0XHRcdGZvcm1WYWx1ZXNbeF0udmFsaWRcblx0XHRcdCAgKVxuXHRcdFx0OiBmYWxzZTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0td3JhcHBlclwiXG5cdFx0XHRcdGNzcz17eyBwb3NpdGlvbjogXCJyZWFsdGl2ZVwiIH19XG5cdFx0XHRcdGlkPXtgZ3Jhdml0eV9mb3JtXyR7dGhpcy5wcm9wcy5mb3JtSUR9YH1cblx0XHRcdD5cblx0XHRcdFx0e2Zvcm1EYXRhLnRpdGxlID8gbnVsbCA6IDxMb2FkaW5nIGlzTG9hZGluZyAvPn1cblxuXHRcdFx0XHR7c3VibWl0RmFpbGVkICYmICFzdWJtaXRTdWNjZXNzICYmIChcblx0XHRcdFx0XHQ8Rm9ybUVycm9yXG5cdFx0XHRcdFx0XHRmaWVsZHM9e2Zvcm1WYWx1ZXN9XG5cdFx0XHRcdFx0XHRlcnJvcnM9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlc31cblx0XHRcdFx0XHRcdGVycm9yTWVzc2FnZT1cIlRoZXJlIHdhcyBhIHByb2JsZW0gd2l0aCB5b3VyIHN1Ym1pc3Npb25cIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCl9XG5cblx0XHRcdFx0e3N1Ym1pdFN1Y2Nlc3MgJiYgdGhpcy5zdGF0ZS5jb25maXJtYXRpb25NZXNzYWdlICYmIChcblx0XHRcdFx0XHQ8Rm9ybUNvbmZpcm1hdGlvbiBjb25maXJtYXRpb249e3RoaXMuc3RhdGUuY29uZmlybWF0aW9uTWVzc2FnZX0gLz5cblx0XHRcdFx0KX1cblxuXHRcdFx0XHR7IXN1Ym1pdFN1Y2Nlc3MgJiYgZm9ybURhdGEuZmllbGRzID8gKFxuXHRcdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0XHRvblN1Ym1pdD17ZSA9PiB0aGlzLm9uU3VibWl0KGUpfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjc3NDbGFzc31cblx0XHRcdFx0XHRcdG5vVmFsaWRhdGVcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7KGZvcm1EYXRhLnRpdGxlIHx8IGZvcm1EYXRhLmRlc2NyaXB0aW9uKSAmJiAoXG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0e2Zvcm1EYXRhLnRpdGxlICYmIHRpdGxlID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cImZvcm0tdGl0bGVcIj57Zm9ybURhdGEudGl0bGV9PC9oMz5cblx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHR7Zm9ybURhdGEuZGVzY3JpcHRpb24gPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb3JtLWRlc2NyaXB0aW9uXCI+e2Zvcm1EYXRhLmRlc2NyaXB0aW9ufTwvcD5cblx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpfVxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0td3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHQ8UmVuZGVyRmllbGRzXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGVkQ29tcG9uZW50cz17c3R5bGVkQ29tcG9uZW50c31cblx0XHRcdFx0XHRcdFx0XHRmaWVsZHM9e2Zvcm1EYXRhLmZpZWxkc31cblx0XHRcdFx0XHRcdFx0XHRmb3JtVmFsdWVzPXtmb3JtVmFsdWVzfVxuXHRcdFx0XHRcdFx0XHRcdHN1Ym1pdEZhaWxlZD17c3VibWl0RmFpbGVkfVxuXHRcdFx0XHRcdFx0XHRcdHN1Ym1pdFN1Y2Nlc3M9e3N1Ym1pdFN1Y2Nlc3N9XG5cdFx0XHRcdFx0XHRcdFx0dXBkYXRlRm9ybT17dGhpcy51cGRhdGVGb3JtSGFuZGxlcn1cblx0XHRcdFx0XHRcdFx0XHR0b3VjaGVkPXt0b3VjaGVkfVxuXHRcdFx0XHRcdFx0XHRcdHNldFRvdWNoZWQ9e3RoaXMuc2V0VG91Y2hlZH1cblx0XHRcdFx0XHRcdFx0XHRwYWdpbmF0aW9uPXtmb3JtRGF0YS5wYWdpbmF0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdGFjdGl2ZVBhZ2U9e2FjdGl2ZVBhZ2V9XG5cdFx0XHRcdFx0XHRcdFx0cHJldlN0ZXA9e3RoaXMucHJldlN0ZXB9XG5cdFx0XHRcdFx0XHRcdFx0bmV4dFN0ZXA9e3RoaXMubmV4dFN0ZXB9XG5cdFx0XHRcdFx0XHRcdFx0aXNOZXh0RGlzYWJsZWQ9e2lzTmV4dERpc2FibGVkfVxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrQ29uZGl0aW9uYWxMb2dpYz17dGhpcy5jaGVja0NvbmRpdGlvbmFsTG9naWN9XG5cdFx0XHRcdFx0XHRcdFx0c2F2ZVN0YXRlVG9IdG1sRmllbGQ9e3NhdmVTdGF0ZVRvSHRtbEZpZWxkfVxuXHRcdFx0XHRcdFx0XHRcdGVuYWJsZUhvbmV5cG90PXtmb3JtRGF0YS5lbmFibGVIb25leXBvdH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0eyghZm9ybURhdGEucGFnaW5hdGlvbiB8fFxuXHRcdFx0XHRcdFx0XHRcdChmb3JtRGF0YS5wYWdpbmF0aW9uICYmXG5cdFx0XHRcdFx0XHRcdFx0XHRmb3JtRGF0YS5wYWdpbmF0aW9uLnBhZ2VzLmxlbmd0aCA9PT0gYWN0aXZlUGFnZSkpICYmIChcblx0XHRcdFx0XHRcdFx0XHQ8U3VibWl0XG5cdFx0XHRcdFx0XHRcdFx0XHRCdXR0b249e0J1dHRvbn1cblx0XHRcdFx0XHRcdFx0XHRcdExvYWRpbmc9e0xvYWRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0XHRmb3JtRGF0YT17Zm9ybURhdGF9XG5cdFx0XHRcdFx0XHRcdFx0XHRzdWJtaXRJY29uPXtzdWJtaXRJY29ufVxuXHRcdFx0XHRcdFx0XHRcdFx0aXNEaXNhYmxlZD17aXNEaXNhYmxlZH1cblx0XHRcdFx0XHRcdFx0XHRcdHN1Ym1pdHRpbmc9e3N1Ym1pdHRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0XHRwcmV2U3RlcD17dGhpcy5wcmV2U3RlcH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFwiXCJcblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuR3Jhdml0eUZvcm0uZGVmYXVsdFByb3BzID0ge1xuXHR0aXRsZTogdHJ1ZSxcblx0c3VibWl0SWNvbjogZmFsc2UsXG5cdHNhdmVTdGF0ZVRvSHRtbEZpZWxkOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgR3Jhdml0eUZvcm07XG4iXX0=
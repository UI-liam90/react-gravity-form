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
                return _axios["default"].post("".concat(backendUrl, "/").concat(formID, "/submissions"), {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHcmF2aXR5Rm9ybSIsInByb3BzIiwiaWQiLCJzZXRTdGF0ZSIsInRvdWNoZWQiLCJzdGF0ZSIsImV2ZW50IiwiZmllbGQiLCJmb3JtVmFsdWVzIiwiY29uZGl0aW9hbmxJZHMiLCJjb25kaXRpb25GaWVsZHMiLCJ0eXBlIiwiaXNSZXF1aXJlZCIsInZhbHVlIiwidmFsdWVzIiwiaW5kZXgiLCJpbmRleE9mIiwidGFyZ2V0Iiwic3BsaWNlIiwicHVzaCIsInN1YklkIiwiZGF0ZUxhYmVsIiwidmFsIiwibGFiZWwiLCJjc3NDbGFzcyIsInZhbGlkIiwiaSIsImxlbmd0aCIsImhpZGUiLCJjaGVja0NvbmRpdGlvbmFsTG9naWMiLCJjb25kaXRpb25hbExvZ2ljIiwiaGlkZUZpZWxkIiwicGFnZU51bWJlciIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0dGluZyIsInN1Ym1pdFN1Y2Nlc3MiLCJzdWJtaXRGYWlsZWQiLCJjb25maXJtYXRpb25NZXNzYWdlIiwiZXJyb3JNZXNzYWdlcyIsImZvcm1JRCIsImJhY2tlbmRVcmwiLCJkYXRhIiwiRm9ybURhdGEiLCJheGlvcyIsInBvc3QiLCJyZXNwb25zZSIsImlzX3ZhbGlkIiwiY29uZmlybWF0aW9uX21lc3NhZ2UiLCJ2YWxpZGF0aW9uX21lc3NhZ2VzIiwiYWN0aXZlUGFnZSIsImUiLCJjb25kaXRpb24iLCJmaWVsZHMiLCJydWxlcyIsImFjdGlvblR5cGUiLCJoaWRlQmFzZWRPblJ1bGVzIiwiZmllbGRJZCIsImNvbmRpdGlvbkZpZWxkVmFsdWUiLCJzdHJpbmdWYWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsImpvaW4iLCJldmVyeSIsImxvYWRpbmciLCJpc1ZhbGlkIiwiZm9ybURhdGEiLCJfaXNNb3VudGVkIiwiZ2V0IiwidGhlbiIsImZvcm0iLCJjaG9pY2VzIiwiZmlsdGVyIiwiY2hvaWNlIiwiaXNTZWxlY3RlZCIsIm1hcCIsInByZXNlbGVjdGVkIiwiZmluZCIsImRlZmF1bHRWYWx1ZSIsInRtcEZpZWxkIiwiaWRzIiwiaXRlbSIsInBhcnNlSW50IiwicGFnaW5hdGlvbiIsInRpdGxlIiwic3VibWl0SWNvbiIsInNhdmVTdGF0ZVRvSHRtbEZpZWxkIiwic3R5bGVkQ29tcG9uZW50cyIsIkJ1dHRvbiIsIkxvYWRpbmciLCJpc0Rpc2FibGVkIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJ4IiwiaXNOZXh0RGlzYWJsZWQiLCJwb3NpdGlvbiIsIm9uU3VibWl0IiwiZGVzY3JpcHRpb24iLCJ1cGRhdGVGb3JtSGFuZGxlciIsInNldFRvdWNoZWQiLCJwcmV2U3RlcCIsIm5leHRTdGVwIiwiZW5hYmxlSG9uZXlwb3QiLCJwYWdlcyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsVzs7Ozs7QUFDTCx1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNsQixxRkFBTUEsS0FBTjs7QUFEa0IsaUVBOEZOLFVBQUFDLEVBQUUsRUFBSTtBQUNsQixZQUFLQyxRQUFMLENBQWM7QUFDYkMsUUFBQUEsT0FBTyxvQkFBTyxNQUFLQyxLQUFMLENBQVdELE9BQWxCLHNCQUE0QkYsRUFBNUIsRUFBaUMsSUFBakM7QUFETSxPQUFkO0FBR0EsS0FsR2tCOztBQUFBLHdFQW9HQyxVQUFDSSxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFBQSx3QkFDbUIsTUFBS0YsS0FEeEI7QUFBQSxVQUM3QkcsVUFENkIsZUFDN0JBLFVBRDZCO0FBQUEsVUFDakJDLGNBRGlCLGVBQ2pCQSxjQURpQjtBQUFBLFVBQ0RDLGVBREMsZUFDREEsZUFEQztBQUFBLFVBRS9CUixFQUYrQixHQUVOSyxLQUZNLENBRS9CTCxFQUYrQjtBQUFBLFVBRTNCUyxJQUYyQixHQUVOSixLQUZNLENBRTNCSSxJQUYyQjtB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QUUsS0FBS2pFLHFCQWQ3QjtBQWVDLFFBQUEsb0JBQW9CLEVBQUV3RCxvQkFmdkI7QUFnQkMsUUFBQSxjQUFjLEVBQUVwQixRQUFRLENBQUNxQztBQWhCMUIsUUFERCxFQW1CRSxDQUFDLENBQUNyQyxRQUFRLENBQUNpQixVQUFWLElBQ0FqQixRQUFRLENBQUNpQixVQUFULElBQ0FqQixRQUFRLENBQUNpQixVQUFULENBQW9CcUIsS0FBcEIsQ0FBMEI1RSxNQUExQixLQUFxQ3NCLFVBRnRDLEtBR0EsZ0NBQUMsa0JBQUQ7QUFDQyxRQUFBLE1BQU0sRUFBRXNDLE1BRFQ7QUFFQyxRQUFBLE9BQU8sRUFBRUMsT0FGVjtBQUdDLFFBQUEsUUFBUSxFQUFFdkIsUUFIWDtBQUlDLFFBQUEsVUFBVSxFQUFFbUIsVUFKYjtBQUtDLFFBQUEsVUFBVSxFQUFFSyxVQUxiO0FBTUMsUUFBQSxVQUFVLEVBQUV2RCxVQU5iO0FBT0MsUUFBQSxRQUFRLEVBQUUsS0FBS2tFO0FBUGhCLFFBdEJGLENBaEJELENBREEsR0FvREEsRUF2RUYsQ0FERDtBQTRFQTs7OztFQTlWd0JJLGdCOztBQWlXMUJ4RyxXQUFXLENBQUN5RyxZQUFaLEdBQTJCO0FBQzFCdEIsRUFBQUEsS0FBSyxFQUFFLElBRG1CO0FBRTFCQyxFQUFBQSxVQUFVLEVBQUUsS0FGYztBQUcxQkMsRUFBQUEsb0JBQW9CLEVBQUU7QUFISSxDQUEzQjtlQU1lckYsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZW5kZXJGaWVsZHMgZnJvbSBcIi4vRm9ybUVsZW1lbnRzL1JlbmRlckZpZWxkc1wiO1xuaW1wb3J0IEZvcm1FcnJvciBmcm9tIFwiLi9Gb3JtRWxlbWVudHMvRm9ybUVycm9yXCI7XG5pbXBvcnQgRm9ybUNvbmZpcm1hdGlvbiBmcm9tIFwiLi9Gb3JtRWxlbWVudHMvRm9ybUNvbmZpcm1hdGlvblwiO1xuaW1wb3J0IHsgdmFsaWRhdGVGaWVsZCB9IGZyb20gXCIuL0hlbHBlcnMvdmFsaWRhdGlvblwiO1xuaW1wb3J0IFN1Ym1pdCBmcm9tIFwiLi9Gb3JtRWxlbWVudHMvU3VibWl0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNsYXNzIEdyYXZpdHlGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHN1Ym1pdEZhaWxlZDogZmFsc2UsXG5cdFx0XHRlcnJvck1lc3NhZ2VzOiBmYWxzZSxcblx0XHRcdGZvcm1WYWx1ZXM6IHt9LFxuXHRcdFx0bG9hZGluZzogdHJ1ZSxcblx0XHRcdHN1Ym1pdHRpbmc6IGZhbHNlLFxuXHRcdFx0c3VibWl0U3VjY2VzczogZmFsc2UsXG5cdFx0XHRjb25maXJtYXRpb25NZXNzYWdlOiBmYWxzZSxcblx0XHRcdGlzVmFsaWQ6IGZhbHNlLFxuXHRcdFx0Zm9ybURhdGE6IHt9LFxuXHRcdFx0dG91Y2hlZDoge30sXG5cdFx0XHRhY3RpdmVQYWdlOiBmYWxzZSxcblx0XHRcdGNvbmRpdGlvbkZpZWxkczoge30sXG5cdFx0XHRjb25kaXRpb2FubElkczoge31cblx0XHR9O1xuXHR9XG5cblx0YXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Y29uc3QgeyBmb3JtSUQsIGJhY2tlbmRVcmwgfSA9IHRoaXMucHJvcHM7XG5cdFx0dGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcblx0XHRjb25zdCBmb3JtID0gYXdhaXQgYXhpb3Ncblx0XHRcdC5nZXQoYCR7YmFja2VuZFVybH0vJHtmb3JtSUR9YClcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXG5cdFx0XHQuY2F0Y2goKCkgPT4gZmFsc2UpO1xuXG5cdFx0aWYgKGZvcm0gJiYgdGhpcy5faXNNb3VudGVkKSB7XG5cdFx0XHRjb25zdCBmb3JtVmFsdWVzID0ge307XG5cdFx0XHRjb25zdCBjb25kaXRpb25GaWVsZHMgPSBbXTtcblx0XHRcdGNvbnN0IGNvbmRpdGlvYW5sSWRzID0gW107XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcblx0XHRcdGZvciAoY29uc3QgZmllbGQgb2YgZm9ybS5maWVsZHMpIHtcblx0XHRcdFx0bGV0IHZhbHVlO1xuXHRcdFx0XHRpZiAoZmllbGQudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBmaWVsZC5jaG9pY2VzXG5cdFx0XHRcdFx0XHQuZmlsdGVyKGNob2ljZSA9PiBjaG9pY2UuaXNTZWxlY3RlZClcblx0XHRcdFx0XHRcdC5tYXAoY2hvaWNlID0+IGNob2ljZS52YWx1ZSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gXCJyYWRpb1wiKSB7XG5cdFx0XHRcdFx0Y29uc3QgcHJlc2VsZWN0ZWQgPSBmaWVsZC5jaG9pY2VzLmZpbmQoY2hvaWNlID0+IGNob2ljZS5pc1NlbGVjdGVkKTtcblx0XHRcdFx0XHR2YWx1ZSA9IHByZXNlbGVjdGVkID8gcHJlc2VsZWN0ZWQudmFsdWUgOiBcIlwiO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhbHVlID0gZmllbGQuZGVmYXVsdFZhbHVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gZ3JhYiBhbGwgY29uZGl0aW9uYWwgbG9naWMgZmllbGRzXG5cdFx0XHRcdGlmIChmaWVsZC5jb25kaXRpb25hbExvZ2ljKSB7XG5cdFx0XHRcdFx0Y29uc3QgdG1wRmllbGQgPSB7XG5cdFx0XHRcdFx0XHRpZDogZmllbGQuaWQsXG5cdFx0XHRcdFx0XHRjb25kaXRpb25hbExvZ2ljOiBmaWVsZC5jb25kaXRpb25hbExvZ2ljXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRjb25zdCBpZHMgPSBmaWVsZC5jb25kaXRpb25hbExvZ2ljLnJ1bGVzLm1hcChpdGVtID0+IGl0ZW0uZmllbGRJZCk7XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGNvbnN0IGlkID0gcGFyc2VJbnQoaWRzW2ldKTtcblx0XHRcdFx0XHRcdGlmIChjb25kaXRpb2FubElkcy5pbmRleE9mKGlkKSA9PT0gLTEpIHtcblx0XHRcdFx0XHRcdFx0Y29uZGl0aW9hbmxJZHMucHVzaChpZCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbmRpdGlvbkZpZWxkcy5wdXNoKHRtcEZpZWxkKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvcm1WYWx1ZXNbZmllbGQuaWRdID0ge1xuXHRcdFx0XHRcdHZhbGlkOiB2YWxpZGF0ZUZpZWxkKHZhbHVlLCBmaWVsZC50eXBlLCBmaWVsZC5pc1JlcXVpcmVkKSxcblx0XHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0XHRsYWJlbDogZmllbGQubGFiZWwsXG5cdFx0XHRcdFx0cGFnZU51bWJlcjogZmllbGQucGFnZU51bWJlcixcblx0XHRcdFx0XHRjc3NDbGFzczogZmllbGQuY3NzQ2xhc3MsXG5cdFx0XHRcdFx0aXNSZXF1aXJlZDogZmllbGQuaXNSZXF1aXJlZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0Ly8gY2hlY2sgY29uZGl0aW9uIGxvZ2ljXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNvbmRpdGlvbkZpZWxkcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRmb3JtVmFsdWVzW1xuXHRcdFx0XHRcdGNvbmRpdGlvbkZpZWxkc1tpXS5pZFxuXHRcdFx0XHRdLmhpZGVGaWVsZCA9IHRoaXMuY2hlY2tDb25kaXRpb25hbExvZ2ljKFxuXHRcdFx0XHRcdGNvbmRpdGlvbkZpZWxkc1tpXS5jb25kaXRpb25hbExvZ2ljLFxuXHRcdFx0XHRcdGZvcm1WYWx1ZXNcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGZvcm1EYXRhOiBmb3JtLFxuXHRcdFx0XHRmb3JtVmFsdWVzLFxuXHRcdFx0XHRhY3RpdmVQYWdlOiBmb3JtLnBhZ2luYXRpb24gPyAxIDogZmFsc2UsXG5cdFx0XHRcdGNvbmRpdGlvbkZpZWxkcyxcblx0XHRcdFx0Y29uZGl0aW9hbmxJZHNcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuXHR9XG5cblx0c2V0VG91Y2hlZCA9IGlkID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHRvdWNoZWQ6IHsgLi4udGhpcy5zdGF0ZS50b3VjaGVkLCBbaWRdOiB0cnVlIH1cblx0XHR9KTtcblx0fTtcblxuXHR1cGRhdGVGb3JtSGFuZGxlciA9IChldmVudCwgZmllbGQpID0+IHtcblx0XHRjb25zdCB7IGZvcm1WYWx1ZXMsIGNvbmRpdGlvYW5sSWRzLCBjb25kaXRpb25GaWVsZHMgfSA9IHRoaXMuc3RhdGU7XG5cdFx0bGV0IHsgaWQsIHR5cGUsIGlzUmVxdWlyZWQgfSA9IGZpZWxkO1xuXHRcdC8vIFNldCBuZXcgdmFsdWVcblx0XHRsZXQgdmFsdWU7XG5cdFx0aWYgKGZpZWxkLnR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuXHRcdFx0Y29uc3QgdmFsdWVzID0gWy4uLmZvcm1WYWx1ZXNbZmllbGQuaWRdLnZhbHVlXTtcblx0XHRcdGNvbnN0IGluZGV4ID0gdmFsdWVzLmluZGV4T2YoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblx0XHRcdGlmIChpbmRleCA+IC0xKSB7XG5cdFx0XHRcdHZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsdWVzLnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHZhbHVlID0gdmFsdWVzO1xuXHRcdH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PSBcImRhdGVcIikge1xuXHRcdFx0Y29uc3QgeyBzdWJJZCwgZGF0ZUxhYmVsIH0gPSBmaWVsZDtcblx0XHRcdGNvbnN0IHZhbHVlcyA9IFsuLi5mb3JtVmFsdWVzW2ZpZWxkLmlkXS52YWx1ZV07XG5cdFx0XHR2YWx1ZXNbc3ViSWRdID0ge1xuXHRcdFx0XHR2YWw6IGV2ZW50LnRhcmdldC52YWx1ZSxcblx0XHRcdFx0bGFiZWw6IGRhdGVMYWJlbFxuXHRcdFx0fTtcblx0XHRcdHZhbHVlID0gdmFsdWVzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWx1ZSA9IGV2ZW50LnRhcmdldCA/IGV2ZW50LnRhcmdldC52YWx1ZSA6IFwibnVsbFwiO1xuXHRcdH1cblx0XHQvLyBpZiBmaWVsZCBpcyBJQkFOXG5cdFx0aWYgKHR5cGUgPT09IFwidGV4dFwiICYmIGZpZWxkLmNzc0NsYXNzLmluZGV4T2YoXCJpYmFuXCIpID4gLTEpIHtcblx0XHRcdHR5cGUgPSBcImliYW5cIjtcblx0XHR9XG5cdFx0Ly8gVmFsaWRhdGUgZmllbGRcblx0XHRjb25zdCB2YWxpZCA9IHZhbGlkYXRlRmllbGQodmFsdWUsIHR5cGUsIGlzUmVxdWlyZWQsIGZpZWxkKTtcblxuXHRcdC8vIGlmIGZpZWxkIElEIGlzIHNvbWV3aGVyZSBpbiBjb25kaXRpb25hbCBmaWVsZHNcblx0XHQvLyByZWNhbGN1bGF0ZSBhbGwgY29uZGl0aW9uc1xuXHRcdGlmIChjb25kaXRpb2FubElkcy5pbmRleE9mKGlkKSAhPT0gLTEpIHtcblx0XHRcdGZvcm1WYWx1ZXNbaWRdLnZhbHVlID0gdmFsdWU7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNvbmRpdGlvbkZpZWxkcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCB7IGlkIH0gPSBjb25kaXRpb25GaWVsZHNbaV07XG5cdFx0XHRcdGNvbnN0IGhpZGUgPSB0aGlzLmNoZWNrQ29uZGl0aW9uYWxMb2dpYyhcblx0XHRcdFx0XHRjb25kaXRpb25GaWVsZHNbaV0uY29uZGl0aW9uYWxMb2dpYyxcblx0XHRcdFx0XHRmb3JtVmFsdWVzXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGZvcm1WYWx1ZXNbaWRdLmhpZGVGaWVsZCA9IGhpZGU7XG5cdFx0XHRcdGlmIChoaWRlKSB7XG5cdFx0XHRcdFx0aWYgKGZvcm1WYWx1ZXNbaWRdLmlzUmVxdWlyZWQgJiYgaGlkZSkge1xuXHRcdFx0XHRcdFx0Zm9ybVZhbHVlc1tpZF0udmFsdWUgPSBcIlwiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmb3JtVmFsdWVzW2lkXS52YWxpZCA9ICEhZm9ybVZhbHVlc1tpZF0uaXNSZXF1aXJlZDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Zm9ybVZhbHVlczoge1xuXHRcdFx0XHQuLi5mb3JtVmFsdWVzLFxuXHRcdFx0XHRbaWRdOiB7XG5cdFx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdFx0aWQsXG5cdFx0XHRcdFx0dmFsaWQsXG5cdFx0XHRcdFx0bGFiZWw6IGZpZWxkLmxhYmVsLFxuXHRcdFx0XHRcdHBhZ2VOdW1iZXI6IGZpZWxkLnBhZ2VOdW1iZXIsXG5cdFx0XHRcdFx0Y3NzQ2xhc3M6IGZpZWxkLmNzc0NsYXNzLFxuXHRcdFx0XHRcdGlzUmVxdWlyZWQ6IGZpZWxkLmlzUmVxdWlyZWRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXG5cdG9uU3VibWl0ID0gYXN5bmMgZXZlbnQgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzdWJtaXR0aW5nOiB0cnVlLFxuXHRcdFx0c3VibWl0U3VjY2VzczogZmFsc2UsXG5cdFx0XHRzdWJtaXRGYWlsZWQ6IGZhbHNlLFxuXHRcdFx0Y29uZmlybWF0aW9uTWVzc2FnZTogZmFsc2UsXG5cdFx0XHRlcnJvck1lc3NhZ2VzOiBmYWxzZVxuXHRcdH0pO1xuXHRcdGNvbnN0IHsgZm9ybUlELCBiYWNrZW5kVXJsIH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7YmFja2VuZFVybH0vJHtmb3JtSUR9L3N1Ym1pc3Npb25zYCwge1xuXHRcdFx0ZGF0YVxuXHRcdH0pO1xuXG5cdFx0aWYgKHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuaXNfdmFsaWQpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRzdWJtaXR0aW5nOiBmYWxzZSxcblx0XHRcdFx0c3VibWl0U3VjY2VzczogdHJ1ZSxcblx0XHRcdFx0Y29uZmlybWF0aW9uTWVzc2FnZTogcmVzcG9uc2UuZGF0YS5jb25maXJtYXRpb25fbWVzc2FnZVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRzdWJtaXR0aW5nOiBmYWxzZSxcblx0XHRcdFx0c3VibWl0RmFpbGVkOiB0cnVlLFxuXHRcdFx0XHRlcnJvck1lc3NhZ2VzOiByZXNwb25zZS5kYXRhLnZhbGlkYXRpb25fbWVzc2FnZXNcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRuZXh0U3RlcCA9ICgpID0+IHtcblx0XHRjb25zdCB7IGFjdGl2ZVBhZ2UgfSA9IHRoaXMuc3RhdGU7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRhY3RpdmVQYWdlOiBhY3RpdmVQYWdlICsgMVxuXHRcdH0pO1xuXHR9O1xuXG5cdHByZXZTdGVwID0gZSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0IHsgYWN0aXZlUGFnZSB9ID0gdGhpcy5zdGF0ZTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGFjdGl2ZVBhZ2U6IGFjdGl2ZVBhZ2UgLSAxXG5cdFx0fSk7XG5cdH07XG5cblx0Y2hlY2tDb25kaXRpb25hbExvZ2ljID0gKGNvbmRpdGlvbiwgZmllbGRzID0gZmFsc2UpID0+IHtcblx0XHRjb25zdCB7IHJ1bGVzLCBhY3Rpb25UeXBlIH0gPSBjb25kaXRpb247XG5cdFx0aWYgKCFydWxlcykgcmV0dXJuIHRydWU7XG5cblx0XHRjb25zdCBmb3JtVmFsdWVzID0gZmllbGRzIHx8IHRoaXMuc3RhdGUuZm9ybVZhbHVlcztcblxuXHRcdC8vIHNob3cgb25seSBpZiBpcyBzZWxlY3RlZCBcIkFsbCBmaWVsZHNcIiAoaXQgc2hvdWxkIGJlIHR3ZWFrZWQgaW4gZnV0dXJlKVxuXHRcdC8vIHdvcmtzIG9ubHkgXCJzaG93L2hpZGUgd2hlbiBmaWVsZCBpcyBlcXVhbCB0b1wiXG5cdFx0bGV0IGhpZGVGaWVsZCA9IGFjdGlvblR5cGUgIT09IFwiaGlkZVwiO1xuXHRcdGNvbnN0IGhpZGVCYXNlZE9uUnVsZXMgPSBbXTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCB7IGZpZWxkSWQsIHZhbHVlIH0gPSBydWxlc1tpXTtcblx0XHRcdGNvbnN0IGNvbmRpdGlvbkZpZWxkVmFsdWUgPSBmb3JtVmFsdWVzW2ZpZWxkSWRdLnZhbHVlO1xuXG5cdFx0XHRjb25zdCBzdHJpbmdWYWx1ZSA9IEFycmF5LmlzQXJyYXkoY29uZGl0aW9uRmllbGRWYWx1ZSlcblx0XHRcdFx0PyBjb25kaXRpb25GaWVsZFZhbHVlLmpvaW4oXCJcIilcblx0XHRcdFx0OiBjb25kaXRpb25GaWVsZFZhbHVlO1xuXHRcdFx0aWYgKHN0cmluZ1ZhbHVlICYmIHZhbHVlID09PSBzdHJpbmdWYWx1ZSkge1xuXHRcdFx0XHRoaWRlQmFzZWRPblJ1bGVzW2ldID0gYWN0aW9uVHlwZSA9PT0gXCJoaWRlXCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRoaWRlQmFzZWRPblJ1bGVzW2ldID0gYWN0aW9uVHlwZSAhPT0gXCJoaWRlXCI7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGhpZGVGaWVsZCA9IGhpZGVCYXNlZE9uUnVsZXMuZXZlcnkoaSA9PiBpID09PSB0cnVlKTtcblx0XHQvLyBmb3JtVmFsdWVzW2lkXS5oaWRlRmllbGQgPSBoaWRlRmllbGQ7XG5cdFx0Ly8gdGhpcy5zZXRTdGF0ZSh7IGZvcm1WYWx1ZXMgfSk7XG5cdFx0cmV0dXJuIGhpZGVGaWVsZDtcblx0fTtcblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0Zm9ybURhdGEsXG5cdFx0XHRmb3JtVmFsdWVzLFxuXHRcdFx0c3VibWl0RmFpbGVkLFxuXHRcdFx0c3VibWl0U3VjY2Vzcyxcblx0XHRcdHRvdWNoZWQsXG5cdFx0XHRzdWJtaXR0aW5nLFxuXHRcdFx0YWN0aXZlUGFnZVxuXHRcdH0gPSB0aGlzLnN0YXRlO1xuXHRcdGNvbnN0IHtcblx0XHRcdHRpdGxlLFxuXHRcdFx0c3VibWl0SWNvbixcblx0XHRcdHNhdmVTdGF0ZVRvSHRtbEZpZWxkLFxuXHRcdFx0c3R5bGVkQ29tcG9uZW50c1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHsgQnV0dG9uLCBMb2FkaW5nIH0gPSBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuXHRcdGNvbnN0IHsgY3NzQ2xhc3MgfSA9IGZvcm1EYXRhO1xuXG5cdFx0Y29uc3QgaXNEaXNhYmxlZCA9IE9iamVjdC5rZXlzKGZvcm1WYWx1ZXMpLnNvbWUoXG5cdFx0XHR4ID0+ICFmb3JtVmFsdWVzW3hdLmhpZGVGaWVsZCAmJiBmb3JtVmFsdWVzW3hdLnZhbGlkXG5cdFx0KTtcblx0XHRjb25zdCBpc05leHREaXNhYmxlZCA9IGFjdGl2ZVBhZ2Vcblx0XHRcdD8gT2JqZWN0LmtleXMoZm9ybVZhbHVlcykuc29tZShcblx0XHRcdFx0XHR4ID0+XG5cdFx0XHRcdFx0XHRmb3JtVmFsdWVzW3hdLnBhZ2VOdW1iZXIgPT09IGFjdGl2ZVBhZ2UgJiZcblx0XHRcdFx0XHRcdCFmb3JtVmFsdWVzW3hdLmhpZGVGaWVsZCAmJlxuXHRcdFx0XHRcdFx0Zm9ybVZhbHVlc1t4XS52YWxpZFxuXHRcdFx0ICApXG5cdFx0XHQ6IGZhbHNlO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS13cmFwcGVyXCJcblx0XHRcdFx0Y3NzPXt7IHBvc2l0aW9uOiBcInJlYWx0aXZlXCIgfX1cblx0XHRcdFx0aWQ9e2BncmF2aXR5X2Zvcm1fJHt0aGlzLnByb3BzLmZvcm1JRH1gfVxuXHRcdFx0PlxuXHRcdFx0XHR7Zm9ybURhdGEudGl0bGUgPyBudWxsIDogTG9hZGluZyAmJiA8TG9hZGluZyBpc0xvYWRpbmcgLz59XG5cblx0XHRcdFx0e3N1Ym1pdEZhaWxlZCAmJiAhc3VibWl0U3VjY2VzcyAmJiAoXG5cdFx0XHRcdFx0PEZvcm1FcnJvclxuXHRcdFx0XHRcdFx0ZmllbGRzPXtmb3JtVmFsdWVzfVxuXHRcdFx0XHRcdFx0ZXJyb3JzPXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZXN9XG5cdFx0XHRcdFx0XHRlcnJvck1lc3NhZ2U9XCJUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggeW91ciBzdWJtaXNzaW9uXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpfVxuXG5cdFx0XHRcdHtzdWJtaXRTdWNjZXNzICYmIHRoaXMuc3RhdGUuY29uZmlybWF0aW9uTWVzc2FnZSAmJiAoXG5cdFx0XHRcdFx0PEZvcm1Db25maXJtYXRpb24gY29uZmlybWF0aW9uPXt0aGlzLnN0YXRlLmNvbmZpcm1hdGlvbk1lc3NhZ2V9IC8+XG5cdFx0XHRcdCl9XG5cblx0XHRcdFx0eyFzdWJtaXRTdWNjZXNzICYmIGZvcm1EYXRhLmZpZWxkcyA/IChcblx0XHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdFx0b25TdWJtaXQ9e2UgPT4gdGhpcy5vblN1Ym1pdChlKX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y3NzQ2xhc3N9XG5cdFx0XHRcdFx0XHRub1ZhbGlkYXRlXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0eyhmb3JtRGF0YS50aXRsZSB8fCBmb3JtRGF0YS5kZXNjcmlwdGlvbikgJiYgKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdHtmb3JtRGF0YS50aXRsZSAmJiB0aXRsZSA/IChcblx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJmb3JtLXRpdGxlXCI+e2Zvcm1EYXRhLnRpdGxlfTwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdFx0e2Zvcm1EYXRhLmRlc2NyaXB0aW9uID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZm9ybS1kZXNjcmlwdGlvblwiPntmb3JtRGF0YS5kZXNjcmlwdGlvbn08L3A+XG5cdFx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KX1cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0PFJlbmRlckZpZWxkc1xuXHRcdFx0XHRcdFx0XHRcdHN0eWxlZENvbXBvbmVudHM9e3N0eWxlZENvbXBvbmVudHN9XG5cdFx0XHRcdFx0XHRcdFx0ZmllbGRzPXtmb3JtRGF0YS5maWVsZHN9XG5cdFx0XHRcdFx0XHRcdFx0Zm9ybVZhbHVlcz17Zm9ybVZhbHVlc31cblx0XHRcdFx0XHRcdFx0XHRzdWJtaXRGYWlsZWQ9e3N1Ym1pdEZhaWxlZH1cblx0XHRcdFx0XHRcdFx0XHRzdWJtaXRTdWNjZXNzPXtzdWJtaXRTdWNjZXNzfVxuXHRcdFx0XHRcdFx0XHRcdHVwZGF0ZUZvcm09e3RoaXMudXBkYXRlRm9ybUhhbmRsZXJ9XG5cdFx0XHRcdFx0XHRcdFx0dG91Y2hlZD17dG91Y2hlZH1cblx0XHRcdFx0XHRcdFx0XHRzZXRUb3VjaGVkPXt0aGlzLnNldFRvdWNoZWR9XG5cdFx0XHRcdFx0XHRcdFx0cGFnaW5hdGlvbj17Zm9ybURhdGEucGFnaW5hdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRhY3RpdmVQYWdlPXthY3RpdmVQYWdlfVxuXHRcdFx0XHRcdFx0XHRcdHByZXZTdGVwPXt0aGlzLnByZXZTdGVwfVxuXHRcdFx0XHRcdFx0XHRcdG5leHRTdGVwPXt0aGlzLm5leHRTdGVwfVxuXHRcdFx0XHRcdFx0XHRcdGlzTmV4dERpc2FibGVkPXtpc05leHREaXNhYmxlZH1cblx0XHRcdFx0XHRcdFx0XHRjaGVja0NvbmRpdGlvbmFsTG9naWM9e3RoaXMuY2hlY2tDb25kaXRpb25hbExvZ2ljfVxuXHRcdFx0XHRcdFx0XHRcdHNhdmVTdGF0ZVRvSHRtbEZpZWxkPXtzYXZlU3RhdGVUb0h0bWxGaWVsZH1cblx0XHRcdFx0XHRcdFx0XHRlbmFibGVIb25leXBvdD17Zm9ybURhdGEuZW5hYmxlSG9uZXlwb3R9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdHsoIWZvcm1EYXRhLnBhZ2luYXRpb24gfHxcblx0XHRcdFx0XHRcdFx0XHQoZm9ybURhdGEucGFnaW5hdGlvbiAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9ybURhdGEucGFnaW5hdGlvbi5wYWdlcy5sZW5ndGggPT09IGFjdGl2ZVBhZ2UpKSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0PFN1Ym1pdFxuXHRcdFx0XHRcdFx0XHRcdFx0QnV0dG9uPXtCdXR0b259XG5cdFx0XHRcdFx0XHRcdFx0XHRMb2FkaW5nPXtMb2FkaW5nfVxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9ybURhdGE9e2Zvcm1EYXRhfVxuXHRcdFx0XHRcdFx0XHRcdFx0c3VibWl0SWNvbj17c3VibWl0SWNvbn1cblx0XHRcdFx0XHRcdFx0XHRcdGlzRGlzYWJsZWQ9e2lzRGlzYWJsZWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRzdWJtaXR0aW5nPXtzdWJtaXR0aW5nfVxuXHRcdFx0XHRcdFx0XHRcdFx0cHJldlN0ZXA9e3RoaXMucHJldlN0ZXB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcIlwiXG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbkdyYXZpdHlGb3JtLmRlZmF1bHRQcm9wcyA9IHtcblx0dGl0bGU6IHRydWUsXG5cdHN1Ym1pdEljb246IGZhbHNlLFxuXHRzYXZlU3RhdGVUb0h0bWxGaWVsZDogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXZpdHlGb3JtO1xuIl19
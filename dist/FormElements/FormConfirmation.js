"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Confirmation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Confirmation, _React$Component);

  function Confirmation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Confirmation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Confirmation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      confirmation: ''
    });

    return _this;
  }

  _createClass(Confirmation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var confirmation = this.props.confirmation;
      var extractscript = /<script>(.+)<\/script>/gi.exec(confirmation);

      if (extractscript) {
        confirmation = confirmation.replace(extractscript[0], '');
        this.setState({
          confirmation: confirmation
        }, function () {
          return window.eval(extractscript[1]);
        });
      } else {
        this.setState({
          confirmation: confirmation
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var confirmation = this.state.confirmation;
      return _react["default"].createElement("div", {
        className: "form-confirmation",
        dangerouslySetInnerHTML: {
          __html: confirmation
        }
      });
    }
  }]);

  return Confirmation;
}(_react["default"].Component);

var _default = Confirmation;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Gb3JtRWxlbWVudHMvRm9ybUNvbmZpcm1hdGlvbi5qc3giXSwibmFtZXMiOlsiQ29uZmlybWF0aW9uIiwiY29uZmlybWF0aW9uIiwicHJvcHMiLCJleHRyYWN0c2NyaXB0IiwiZXhlYyIsInJlcGxhY2UiLCJzZXRTdGF0ZSIsIndpbmRvdyIsImV2YWwiLCJzdGF0ZSIsIl9faHRtbCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NERBQ0k7QUFDTkMsTUFBQUEsWUFBWSxFQUFFO0FBRFIsSzs7Ozs7Ozt3Q0FJWTtBQUFBLFVBQ1pBLFlBRFksR0FDSyxLQUFLQyxLQURWLENBQ1pELFlBRFk7QUFFbEIsVUFBTUUsYUFBYSxHQUFHLDJCQUEyQkMsSUFBM0IsQ0FBZ0NILFlBQWhDLENBQXRCOztBQUNBLFVBQUlFLGFBQUosRUFBbUI7QUFDakJGLFFBQUFBLFlBQVksR0FBR0EsWUFBWSxDQUFDSSxPQUFiLENBQXFCRixhQUFhLENBQUMsQ0FBRCxDQUFsQyxFQUF1QyxFQUF2QyxDQUFmO0FBQ0EsYUFBS0csUUFBTCxDQUFjO0FBQUVMLFVBQUFBLFlBQVksRUFBWkE7QUFBRixTQUFkLEVBQWdDO0FBQUEsaUJBQU1NLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTCxhQUFhLENBQUMsQ0FBRCxDQUF6QixDQUFOO0FBQUEsU0FBaEM7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLRyxRQUFMLENBQWM7QUFBRUwsVUFBQUEsWUFBWSxFQUFaQTtBQUFGLFNBQWQ7QUFDRDtBQUNGOzs7NkJBRVE7QUFBQSxVQUNDQSxZQURELEdBQ2tCLEtBQUtRLEtBRHZCLENBQ0NSLFlBREQ7QUFFUCxhQUFPO0FBQUssUUFBQSxTQUFTLEVBQUMsbUJBQWY7QUFBbUMsUUFBQSx1QkFBdUIsRUFBRTtBQUFFUyxVQUFBQSxNQUFNLEVBQUVUO0FBQVY7QUFBNUQsUUFBUDtBQUNEOzs7O0VBbkJ3QlUsa0JBQU1DLFM7O2VBcUJsQlosWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIENvbmZpcm1hdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGNvbmZpcm1hdGlvbjogJycsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgbGV0IHsgY29uZmlybWF0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGV4dHJhY3RzY3JpcHQgPSAvPHNjcmlwdD4oLispPFxcL3NjcmlwdD4vZ2kuZXhlYyhjb25maXJtYXRpb24pO1xuICAgIGlmIChleHRyYWN0c2NyaXB0KSB7XG4gICAgICBjb25maXJtYXRpb24gPSBjb25maXJtYXRpb24ucmVwbGFjZShleHRyYWN0c2NyaXB0WzBdLCAnJyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29uZmlybWF0aW9uIH0sICgpID0+IHdpbmRvdy5ldmFsKGV4dHJhY3RzY3JpcHRbMV0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbmZpcm1hdGlvbiB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb25maXJtYXRpb24gfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb25maXJtYXRpb25cIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbmZpcm1hdGlvbiB9fSAvPjtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ29uZmlybWF0aW9uO1xuIl19
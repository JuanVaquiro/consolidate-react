"use strict";

var _client = _interopRequireDefault(require("react-dom/client"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Component { Props }
var FriendlyGreeting = function FriendlyGreeting(_ref) {
  var nameHi = _ref.nameHi;
  return /*#__PURE__*/React.createElement("p", null, "Greeting, ", nameHi);
};
var RedButton = function RedButton(_ref2) {
  var contents = _ref2.contents;
  return /*#__PURE__*/React.createElement("button", null, contents);
};
// The children Prop
var RedButtonExpample = function RedButtonExpample(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/React.createElement("button", null, children);
};
function App(_ref4) {
  var name = _ref4.name,
    jop = _ref4.jop,
    email = _ref4.email;
  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("h2", null, name), /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("dt", null, "jop"), /*#__PURE__*/React.createElement("dd", null, jop), /*#__PURE__*/React.createElement("dt", null, "Email"), /*#__PURE__*/React.createElement("dd", null, email)));
}
function ButtonCustom(_ref5) {
  var children = _ref5.children,
    _ref5$color = _ref5.color,
    color = _ref5$color === void 0 ? 'gray' : _ref5$color;
  return /*#__PURE__*/React.createElement("button", {
    style: {
      color: color,
      border: '2px solid',
      borderColor: 'color',
      backgroundColor: 'white'
    }
  }, children, " ", color);
}
_client["default"].render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FriendlyGreeting, {
  nameHi: "Juan"
}), /*#__PURE__*/React.createElement(RedButton, {
  contents: "button"
}), /*#__PURE__*/React.createElement(RedButtonExpample, null, "texto de prueba"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement(App, {
  name: "Kumar dar",
  jop: "system engineer",
  email: "cooreo@gmail.com"
})), /*#__PURE__*/React.createElement(ButtonCustom, {
  color: "blue"
}, "botton")), document.getElementById('root'));
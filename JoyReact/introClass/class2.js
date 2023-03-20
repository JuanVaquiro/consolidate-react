"use strict";

var _client = _interopRequireDefault(require("react-dom/client"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var message = {
  content: 'just ate at "lex" text and canada, comente end ingles bhra my seconds lengues',
  published: 'January 12st at 8:34pm',
  autor: {
    avatarSrc: 'https://img.freepik.com/vector-premium/icono-foto-perfil-cool-man-profile-icon-male-head-ilustracion-vector-diseno-plano-cara_750364-569.jpg?w=60',
    avatarDescription: 'Carrton bear',
    name: 'Bhen jihn',
    handle: 'benjamtarok'
  }
};
var element = /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("img", {
  style: {
    "with": '80px'
  },
  src: message.autor.avatarSrc,
  alt: message.autor.avatarDescription
}), /*#__PURE__*/React.createElement("a", {
  href: "/user/".concat(message.autor.handle)
}, message.autor.name)), /*#__PURE__*/React.createElement("p", null, message.content), /*#__PURE__*/React.createElement("footer", null, "Posted ", message.published));
var container = document.getElementById('root');
var root = _client["default"].createRoot(container);
root.render(element);
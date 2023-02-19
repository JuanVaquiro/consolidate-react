"use strict";

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
// props
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

// Mapping Over Data. React list ( key )
var avatars = [{
  id: 'asdf1',
  src: 'https://josh-bundler.com/img/avatars/001.png',
  alt: 'person witg curyly hair en a blach T-king'
}, {
  id: 'asdf2',
  src: 'https://josh-bundler.com/img/avatars/002.png',
  alt: 'person witg a jib and flash to me love again'
}, {
  id: 'asdf3',
  src: 'https://josh-bundler.com/img/avatars/003.png',
  alt: 'person watcing brha leven to me kbron gfor asd-TREX'
}, {
  id: 'asdf4',
  src: 'https://josh-bundler.com/img/avatars/004.png',
  alt: 'person watcing TV music televishion wareing taa'
}];

// exercises
function AppAvatar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: '74%',
      gap: '10px'
    }
  }, avatars.map(function (props) {
    return /*#__PURE__*/React.createElement(Avatar, Object.assign({
      key: props.id
    }, props));
  }));
}
function Avatar(_ref6) {
  var src = _ref6.src,
    alt = _ref6.alt;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    style: {
      backgroundColor: 'cornflowerblue',
      border: '2px solid white',
      borderRadius: '50%',
      textAlign: 'center'
    },
    src: src,
    alt: alt
  }));
}
ReactDOM.render( /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px'
  }
}, /*#__PURE__*/React.createElement(FriendlyGreeting, {
  nameHi: "Juan"
}), /*#__PURE__*/React.createElement(RedButton, {
  contents: "button"
}), /*#__PURE__*/React.createElement(RedButtonExpample, null, "texto de prueba"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement(App, {
  name: "Kumar dar",
  jop: "system engineer",
  email: "cooreo@gmail.com"
})), /*#__PURE__*/React.createElement(ButtonCustom, {
  color: "blue"
}, "botton"), /*#__PURE__*/React.createElement(AppAvatar, null)), document.getElementById('root'));
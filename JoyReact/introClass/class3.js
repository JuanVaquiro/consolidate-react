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
var items = [{
  id: 'hj12',
  imageSrc: 'https://josh-bundler.com/img/shopping-cart-coffee-machine.jpg',
  imageAlt: 'aslt',
  title: 'hello kitty "coffe-machine"',
  price: '78.33',
  inStock: true
}, {
  id: 'ds22',
  imageSrc: 'https://josh-bundler.com/img/shopping-cart-can-opener.jpg',
  imageAlt: 'aslt',
  title: 'Cafeter open leat',
  price: '50.99',
  inStock: false
}, {
  id: 'co99',
  imageSrc: 'https://josh-bundler.com/img/shopping-cart-night-light.png',
  imageAlt: 'aslt',
  title: 'Nigth light',
  price: '18.09',
  inStock: true
}, {
  id: 'lk77',
  imageSrc: 'https://josh-bundler.com/img/shopping-cart-backpack.jpg',
  imageAlt: 'aslt',
  title: 'Unicorn Backpack',
  price: '72.01',
  inStock: true
}];
var CartTable = function CartTable(_ref7) {
  var items = _ref7.items;
  return /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Title"), /*#__PURE__*/React.createElement("th", null, ' '), /*#__PURE__*/React.createElement("th", null, "Price"))), /*#__PURE__*/React.createElement("tbody", null, items.map(function (data) {
    return /*#__PURE__*/React.createElement("tr", {
      key: data.id
    }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("img", {
      style: {
        width: '80px'
      },
      src: data.imageSrc,
      alt: data.imageAlt
    })), /*#__PURE__*/React.createElement("td", null, data.title), /*#__PURE__*/React.createElement("td", null, data.price));
  })));
};
function AppShoppingCart() {
  var IN_STOCK = items.filter(function (itmes) {
    return itmes.inStock === true;
  });
  var OUT_OF_STOCK = items.filter(function (itmes) {
    return itmes.inStock === !true;
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '50px'
    }
  }, /*#__PURE__*/React.createElement("h1", null, "Shopping cart"), /*#__PURE__*/React.createElement(CartTable, {
    items: IN_STOCK
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", null, "Continue checkout")), /*#__PURE__*/React.createElement("h2", null, "Sold out"), /*#__PURE__*/React.createElement(CartTable, {
    items: OUT_OF_STOCK
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
}, "botton"), /*#__PURE__*/React.createElement(AppAvatar, null), /*#__PURE__*/React.createElement(AppShoppingCart, null)), document.getElementById('root'));
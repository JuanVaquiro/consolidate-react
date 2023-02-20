'use strict';

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
var CartTable = function CartTable(_ref) {
  var items = _ref.items;
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
function App() {
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
var container = document.getElementById('root');
var root = ReactDOM.createRoot(container);
root.render( /*#__PURE__*/React.createElement(App, null));
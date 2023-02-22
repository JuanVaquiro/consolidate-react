"use strict";

var StartRating = function StartRating(_ref) {
  var _ref$rating = _ref.rating,
    rating = _ref$rating === void 0 ? 0 : _ref$rating;
  var star = /*#__PURE__*/React.createElement("img", {
    alt: "",
    className: "gold-star",
    src: "https://sandpack-bundler.vercel.app/img/gold-star.svg"
  });
  var stars = Array(rating).fill(star);
  return /*#__PURE__*/React.createElement("div", null, stars);
};

// fnt range
var range = function range(start, end) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (var i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};
console.log(range(1, 4));
var container = document.getElementById('root');
var root = ReactDOM.createRoot(container);
root.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StartRating, {
  rating: 4
}), /*#__PURE__*/React.createElement(StartRating, {
  rating: 5
}), /*#__PURE__*/React.createElement(StartRating, {
  rating: 1
})));
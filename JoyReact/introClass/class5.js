"use strict";

// hook
/*
  To summaarize
  core React loop

  -> A e-render is a React process where we figure out what needs to
  change (AKA 'reconciliation', the spot-the-differences game)

  -> if somemthing has changed between the tow snapshots, React will 'commit'
  those chancges by editing the DOM, so that it matches the lastes snaptshot.

  -> Whenever a DOM node us edite, the browser will RE-POINT, re-drawing the
  relevant pixels so that the user sees the correct UI

  -> Not all re-render require re-piant if nothing has changed between snapshots,
  React wont't edit any DOM nodes, and nothing will be re-painted
*/

/*
  -> Un e-render es un proceso React en el que averiguamos qué hay que
  cambiar (alias 'reconciliación', el juego de detectar las diferencias)

  -> Si algo ha cambiado entre las dos instantáneas, React "confirmará" esos
  cambios editando el DOM, para que coincida con la última instantánea.

  -> Cada vez que se edita un nodo del DOM, el navegador vuelve a apuntar, redibujando
  los píxeles relevantes para que el usuario vea la interfaz de usuario correcta.

  -> No todos los re-render requieren re-pintados si nada ha cambiado entre instantáneas,
  React no editará ningún nodo del DOM, y nada será re-pintado.
*/

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
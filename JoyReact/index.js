'use strict';

function App() {
  return /*#__PURE__*/React.createElement("div", null, "hola");
}

//  npx babel --watch src --out-dir . --presets babel-preset-react-app/prod

var container = document.getElementById('root');
var root = ReactDOM.createRoot(container);
root.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(App, null)));
'use strict';

// import React from 'react'
// import { ReactDOM } from 'react-dom/client'

// const App = () => {
//   return (
//     <div>App Hellow</div>
//   )
// }

// const element = React.createElement(
//   App
// )
// console.log(element)

// const container = document.getElementById('root')
// const root = ReactDOM.createRoot(container)
// root.render(element)

// challenger
function render(reactElement, containerDOMElement) {
  var element = document.createElement(reactElement.type);
  element.textContent = reactElement.children;
  for (var key in reactElement.props) {
    var value = reactElement.props[key];
    console.log(key, value);
    element.setAttribute(key, value);
  }
  console.log(element);
  containerDOMElement.appendChild(element);
}
var reactElement = {
  type: 'a',
  props: {
    href: 'https://wikipedia.org/',
    id: 'data'
  },
  children: 'Read more on wikipedia'
};
var containerDOMElement = document.getElementById('root');
render(reactElement, containerDOMElement);
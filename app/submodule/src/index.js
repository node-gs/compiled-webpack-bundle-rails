
import _ from 'lodash';

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // element.innerHTML = 'Hello, webpack';
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

function fn() {
  document.body.appendChild(component());
}

document.addEventListener('DOMContentLoaded', fn, false);
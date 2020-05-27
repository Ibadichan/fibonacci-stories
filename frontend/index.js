import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';

function Application() {
  return <h1>Hello world</h1>;
}

ReactDOM.render(<Application />, document.getElementById('app-root'));

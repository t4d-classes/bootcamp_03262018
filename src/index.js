import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './components/App';

const colors = [ 'red', 'blue', 'green' ];
const cars = [
  { id: 1, make: 'Chevy', model: 'Bolt', year: 2017, color: 'blue', price: 40000 },
  { id: 2, make: 'Ford', model: 'F-150', year: 2016, color: 'red', price: 45000 },
]

ReactDOM.render(
  <App colors={colors} cars={cars} />,
  document.querySelector('main'),
);


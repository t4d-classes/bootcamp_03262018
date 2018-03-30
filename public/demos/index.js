import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ColorTool } from './components/ColorTool';

const colorList = [ 'blue', 'red', 'green', 'hot pink' ];


ReactDOM.render(
  <div>
    <ColorTool colors={colorList} />
  </div>,

  document.querySelector('main'),
);

import * as React from 'react';

import { ToolHeader } from './ToolHeader';
import { ColorForm } from './ColorForm';

export class ColorTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      colors: this.props.colors.concat(),
    };
  }

  addColor = (newColor) => {
    this.setState({
      colors: this.state.colors.concat(newColor),
    });
  }

  render() {
    return (
      <div>
        <ToolHeader headerText="Color Tool" />
        <ul>{this.state.colors.map(color => <li>{color}</li>)}</ul>
        <ColorForm onSubmitColor={this.addColor} />
      </div>
    );
  }
}
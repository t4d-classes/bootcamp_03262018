import * as React from 'react';

import { ToolHeader } from './ToolHeader';

export class ColorTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      colors: this.props.colors.concat(),
      colorInput: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [ e.target.name ]: e.target.value,
    });
  }

  addColor = () => {
    this.setState({
      colors: this.state.colors.concat(this.state.colorInput),
      colorInput: '',
    })
  }

  render() {

    return (
      <div>
        <ToolHeader headerText="Color Tool" />
        <ul>{this.state.colors.map(color => <li>{color}</li>)}</ul>
        <form>
          <div>
            <label htmlFor="color-input">New Color:</label>
            <input type="text" id="color-input" name="colorInput"
              value={this.state.colorInput} onChange={this.onChange} />
          </div>
          <button type="button" onClick={this.addColor}>Add Color</button>
        </form>
      </div>
    );
  }
}
import * as React from 'react';

export class ColorTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      colorInput: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [ e.target.name ]: e.target.value,
    });
  }

  render() {

    return (
      <div>
        <header><h1>Color Tool</h1></header>
        <ul>{this.props.colors.map(color => <li>{color}</li>)}</ul>
        <form>
          <div>
            <label htmlFor="color-input">New Color:</label>
            <input type="text" id="color-input" name="colorInput"
              value={this.state.colorInput} onChange={this.onChange} />
          </div>
        </form>
      </div>
    );
  }
}
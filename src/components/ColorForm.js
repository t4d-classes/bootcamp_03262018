import * as React from 'react';

export class ColorForm extends React.Component {

   constructor(props) {
     super(props);

     this.state = {
       colorInput: '',
     };
   }

  submitColor = () => {
    this.props.onSubmitColor(this.state.colorInput);
  };

  onChange = (e) => {
    this.setState({
      [ e.target.name ]: e.target.value,
    });
  }  

  render() {
    return <form>
      <div>
        <label htmlFor="color-input">New Color:</label>
        <input type="text" id="color-input" name="colorInput"
          value={this.state.colorInput} onChange={this.onChange} />
      </div>
      <button type="button" onClick={this.submitColor}>Add Color</button>
    </form>;
  }
}
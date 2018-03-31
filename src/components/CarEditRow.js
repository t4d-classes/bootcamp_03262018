import * as React from 'react';

import { BaseForm } from './BaseForm';

export class CarEditRow extends BaseForm {

    constructor(props) {
        super(props);

        this.state = {
            ...this.props.car,
        };
    }

    render() {
        return <tr>
            <td><input type="text" name="make" id="make-input" value={this.state.make} onChange={this.onChange} /></td>
            <td><input type="text" name="model" id="model-input" value={this.state.model} onChange={this.onChange} /></td>
            <td><input type="text" name="year" id="year-input" value={this.state.year} onChange={this.onChange} /></td>
            <td><input type="text" name="color" id="color-input" value={this.state.color} onChange={this.onChange} /></td>
            <td><input type="text" name="price" id="price-input" value={this.state.price} onChange={this.onChange} /></td>
            <td>
                <button type="button" onClick={() => this.props.onSaveCar({ ...this.props.car, ...this.state })}>Save</button>
                <button type="button" onClick={this.props.onCancelCar}>Cancel</button>
            </td>
        </tr>;
    }

}
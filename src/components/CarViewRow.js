import * as React from 'react';

export class CarViewRow extends React.Component {

    render() {
        return <tr>
            <td>{this.props.car.make}</td>
            <td>{this.props.car.model}</td>
            <td>{this.props.car.year}</td>
            <td>{this.props.car.color}</td>
            <td>{this.props.car.price}</td>
            <td>
                <button type="button" onClick={() => this.props.onEditCar(this.props.car.id)}>Edit</button>
                <button type="button" onClick={() => this.props.onDeleteCar(this.props.car.id)}>Delete</button>
            </td>
        </tr>;
    }

}
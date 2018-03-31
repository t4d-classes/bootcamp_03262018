import * as React from 'react';

import { CarEditRow } from './CarEditRow';
import { CarViewRow } from './CarViewRow';

export class CarTable extends React.Component {

    render() {

        const {
            cars, editCarId, onEditCar,
            onDeleteCar, onSaveCar, onCancelCar,
        } = this.props;

        return <table>
            <thead>
                <tr>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Color</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {cars.map(car => car.id === editCarId
                    ? <CarEditRow key={car.id} car={car} onSaveCar={onSaveCar} onCancelCar={onCancelCar} />
                    : <CarViewRow key={car.id} car={car} onEditCar={onEditCar} onDeleteCar={onDeleteCar} />)}
            </tbody>
        </table>;

    }
}
import * as React from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export class CarTool extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cars: this.props.cars.concat(),
            editCarId: -1,
        };
    }

    addCar = car => {
        this.setState({
            cars: this.state.cars.concat({
                id: Math.max(...this.state.cars.map(c => c.id)) + 1,
                ...car
            }),
        });
    };

    saveCar = car => {
        const carIndex = this.state.cars.findIndex(c => c.id === car.id);
        this.setState({
            cars: [...this.state.cars.slice(0, carIndex), car, ...this.state.cars.slice(carIndex + 1)],
            editCarId: -1,
        });
    };

    editCar = carId => {
        this.setState({
            editCarId: carId,
        });
    };

    deleteCar = carId => {
        const carIndex = this.state.cars.findIndex(c => c.id === carId);
        this.setState({
            cars: [...this.state.cars.slice(0, carIndex), ...this.state.cars.slice(carIndex + 1)],
        });
    };

    cancelCar = () => {
        this.setState({
            editCarId: -1,
        });
    };

    render() {

        return <div>
            <ToolHeader headerText="Car Tool" />
            <CarTable cars={this.state.cars} editCarId={this.state.editCarId}
                onEditCar={this.editCar} onSaveCar={this.saveCar}
                onDeleteCar={this.deleteCar} onCancelCar={this.cancelCar} />
            <CarForm buttonText="Add Car" onSubmitCar={this.addCar} />
        </div>;

    }
}
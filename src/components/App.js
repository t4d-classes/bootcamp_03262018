import * as React from 'react';

import { ColorTool } from './ColorTool';
import { CarTool } from './CarTool';

export class App extends React.Component {

    render() {

        return <div>
            <ColorTool colors={this.props.colors} />
            <CarTool cars={this.props.cars} />
        </div>;
    }

}
import * as React from 'react';

export class BaseForm extends React.Component {

    onChange = (e) => {
        this.setState({
            [ e.target.name ]: e.target.value,
        });
    }      
}
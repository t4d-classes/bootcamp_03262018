import * as React from 'react';
import * as ReactDOM from 'react-dom';

class ListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      item: this.props.item,
    };
  }

  render() {
    return <li>
      props: {this.props.item},
      state: {this.state.item},
    </li>;
  }
}

class ItemList extends React.Component {
  render() {
    return <ul>
      {this.props.items.map(
        (item, index) => <ListItem key={index} item={item} />
      )}
    </ul>;
  }
}

const colors = ['red','green','blue'];

ReactDOM.render(
  <ItemList items={colors} />,
  document.querySelector('main'),
);

setTimeout(() => {

  colors.splice(1, 1);

  ReactDOM.render(
    <ItemList items={colors} />,
    document.querySelector('main'),
  );
  

}, 4000);

import { Component } from 'react';
import { LaureateProps } from '../services/types';

class Laureate extends Component<LaureateProps> {
  render() {
    const { knownName, motivation } = this.props;
    return (
      <div className="laureate">
        <h3>{knownName}</h3>
        <p>{motivation}</p>
      </div>
    );
  }
}

export default Laureate;

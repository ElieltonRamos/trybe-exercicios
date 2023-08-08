import React from 'react';
import Laureate from './Laureate';
import { NobelPrizeType } from '../services/types';

class NobelPrize extends React.Component<NobelPrizeType> {
  render() {
    const { category, date, knownName, motivation } = this.props;
    return (
      <div className="nobel-prize">
        <h2>{category}</h2>
        <Laureate knownName={ knownName } motivation={ motivation } />
        <h4>{date}</h4>
      </div>
    );
  }
}

export default NobelPrize;

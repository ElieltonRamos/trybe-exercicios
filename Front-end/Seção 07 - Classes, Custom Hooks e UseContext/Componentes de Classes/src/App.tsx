import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import NobelPrize from './components/NobelPrize';
import { requestNobelPrizes } from './services/functions';
import { AppState, NobelPrizeType } from './services/types';

class App extends Component<object, AppState> {
  state = {
    nobelPrizes: [],
  };

  async componentDidMount() {
    const data = await requestNobelPrizes();
    this.setState({ nobelPrizes: data });
  }

  render() {
    const { nobelPrizes } = this.state;
    return (
      <div className="App">
        <Header />
        <section>
          {nobelPrizes.map((element: NobelPrizeType) => (<NobelPrize
            category={ element.category }
            date={ element.date }
            knownName={ element.knownName }
            motivation={ element.motivation }
            key={ Math.random() }
          />))}
        </section>
      </div>
    );
  }
}

export default App;

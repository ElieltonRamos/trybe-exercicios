import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { actionCreator } from './Redux/Actions/Actions';

type RootState = {
  count: number;
};

function App() {
  const rootState = useSelector((state: RootState) => state);
  const dispath = useDispatch();

  return (
    <div>
      <h1>Contador</h1>
      <h2>{rootState.count}</h2>
      <button onClick={ () => dispath(actionCreator(1, 'increment_Counter')) } >Incrementa 1</button>
      <button onClick={ () => dispath(actionCreator(5, 'increment_Counter')) } >Incrementa 5</button>
    </div>
  );
}

export default App

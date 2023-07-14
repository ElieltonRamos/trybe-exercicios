import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, ReduxState } from './types';
import { fetchDogImage } from './redux/actions/actions';

function App() {
  const rootState = useSelector((state: ReduxState) => state);
  const dispatch: Dispatch = useDispatch();

  if (rootState.isFetching) return <h1>Carregando...</h1>
  return (
    <div>
      <img src={rootState.imageURL} alt="dog" />
      <button
        onClick={ () => { void dispatch(fetchDogImage()) } }
      >
        Novo Doguinho
      </button>
    </div>
  );
}

export default App;

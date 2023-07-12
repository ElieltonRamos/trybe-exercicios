import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import About from './Components/About';
import NotFound from './Components/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="about" element={ <About />} />
        </Route>
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  );
}

export default App;

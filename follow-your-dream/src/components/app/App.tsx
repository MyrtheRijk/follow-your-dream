import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Home from '../../pages/home/Home';
import Dreams from '../../pages/dreams/Dreams';
import Advice from '../../pages/advice/Advice';

function App(): JSX.Element {

  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dreams" element={<Dreams />} />
          <Route path="dreams/:id" element={<Advice />} />
        </Routes>
    </>
  );
}

export default App;

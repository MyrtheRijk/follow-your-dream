import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Home from '../../pages/home/Home';
import Dreams from '../../pages/dreams/Dreams';


function App(): JSX.Element {
 
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Dreams" element={<Dreams />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

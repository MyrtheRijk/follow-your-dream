import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Home from '../../pages/Home';
import Info from '../../pages/Info';
import Dreams from '../../pages/Dreams';
import Reviews from '../../pages/Reviews';
import Contact from '../../pages/Contact';

function App(): JSX.Element {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Info" element={<Info />} />
          <Route path="Dreams" element={<Dreams />} />
          <Route path="Reviews" element={<Reviews />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

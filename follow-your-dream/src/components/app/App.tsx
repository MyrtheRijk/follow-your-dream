import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Home from '../../pages/home/Home';
import Info from '../../pages/info/Info';
import Dreams from '../../pages/dreams/Dreams';
import Reviews from '../../pages/reviews/Reviews';
import Contact from '../../pages/contact/Contact';

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

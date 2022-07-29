import Navbar from '../navbar/Navbar';
import Info from '../../pages/Info';
import Home from '../../pages/Home';
import Reviews from '../../pages/Reviews';
import Dreams from '../../pages/Dreams';
import Contact from '../../pages/Contact';
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Dreams" element={<Dreams />} />
          <Route path="Info" element={<Info />} />
          <Route path="Reviews" element={<Reviews />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
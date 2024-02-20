import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './stores/pages/LandingPage';
import MobilePage from './stores/pages/MobilePage';
import AcPage from './stores/pages/AcPage';
import ComputerPage from './stores/pages/ComputerPage';
import WatchPage from './stores/pages/WatchPage';
import WomanPage from './stores/pages/WomanPage';
import FurniturePage from './stores/pages/FurniturePage';
import MobileSingle from './singles/MobileSingle';
import UserCart from './stores/UserCart';


const App = () => {
  return (
   
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mobiles" element={<MobilePage />} />
          <Route path="/ac" element={<AcPage/>}/>
          <Route path="/computer" element={<ComputerPage/>}/>
          <Route path="/furniture" element={<FurniturePage/>}/>
          <Route path="/watch" element={<WatchPage/>}/>
          <Route path="/woman" element={<WomanPage/>}/>

          <Route path = '/mobiles/:id' element = {<MobileSingle/>}/>
          <Route path='/cart' element = {<UserCart/>}/>

        </Routes>
      </div>
   
  );
};

export default App;

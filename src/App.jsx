import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import GetStarted1 from './pages/GetStarted1';
import GetStarted2 from './pages/GetStarted2';
import GetStarted3 from './pages/GetStarted3';
import SignIn from './pages/SignIn';
import RegisterAccount from './pages/RegisterAccount';
import Explore from './pages/Explore';
import Search from './pages/Search';
import BasketCase from './pages/BasketCase';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<GetStarted1 />} />
        <Route path="/getStarted2" element={<GetStarted2 />} />
        <Route path="/getStarted3" element={<GetStarted3 />} /> */}
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/registerAccount" element={<RegisterAccount />} />
        <Route path="/shopApp" element={<Explore />} />
        <Route path="/search" element={<Search />} />
        <Route path="/basketCase" element={<BasketCase />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;



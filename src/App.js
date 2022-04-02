import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import CoinDetails from './Components/CoinDetails/CoinDetails';
import Coins from './Components/Coins/Coins';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home'
import NotFound from './Components/NotFound/NotFound';
import BdAddress from './Components/Contact/BdAddress'
import UsAddress from './Components/Contact/UsAddress';

function App() {
  return (
    <div className="App bg-gray-900">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/coins' element={<Coins/>}></Route>
        <Route path='/coin-details/:id' element={<CoinDetails/>}></Route>
        <Route path='/contact' element={<Contact/>}>
          <Route path='bd-address' element={<BdAddress/>}></Route>
          <Route path='us-address' element={<UsAddress/>}></Route>
        </Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

import './App.css';
import "./bootstrap.min.css";
import {BrowserRouter as Router,Route,Routes}from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/home/Home';
import Productdetails from './pages/ProductDetails/Productdetails';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          {/* <Slider/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/product/:productId" element={<Productdetails />} /> */}
            <Route>404 Not Found!</Route>
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

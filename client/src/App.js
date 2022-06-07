import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.min.css';

import AppNavbar from './components/AppNavbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About'
import store from "./store";

function App() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <AppNavbar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </div>
        </Provider>
      </Router>
    );
}

export default App;

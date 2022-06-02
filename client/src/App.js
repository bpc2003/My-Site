import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import AppNavbar from './components/AppNavbar';
import Footer from './components/Footer';
import store from "./store";

function App() {
    return (
        <Provider store={store}>
          <div className="App">
            <AppNavbar/>
            <Footer />
          </div>
        </Provider>
    );
}

export default App;

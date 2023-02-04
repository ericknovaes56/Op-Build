import './assets/css/App.css';
import './assets/css/Media.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './pages/layout/NavBar';
import Footer from './pages/layout/Footer';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer nome='OP BUILD'/>
      </Router>
  );
}

export default App;

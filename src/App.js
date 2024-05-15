import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/home';
import CV from './pages/cv';

function App() {
  return (
    <>
   
     <Router>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/MyCV" element={<CV/>}/>
        </Routes>
      </Router>
  
  
     
    </>
  );
}

export default App;

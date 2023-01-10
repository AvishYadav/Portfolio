import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Works from './Components/Works';
import Tools from './Components/Tools';
import Goals from './Components/Goals';
import {BrowserRouter as Router, 
  Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      
      <Routes>
       <Route path="/" element={<><Home/></>}/>
       <Route path="/skills" element={<Skills />} />
       <Route path="/works" element={<Works />} />
       <Route path="/tools" element={<Tools />} />
       <Route path="/goals" element={<Goals />} />
      </Routes>
        
    </Router>
    
  </>
  );
}

export default App;

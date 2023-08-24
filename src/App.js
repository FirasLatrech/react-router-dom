import './App.css';
import Headers from './Component/Headers/Headers';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './page/About/About';
import Home from './page/Home/Home';
import Skills from './page/Skills/Skills';
import Notfoundpage from './page/Notfoundpage/Notfoundpage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Headers />   
      <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About /> } />
          <Route path="/skils" element={<Skills/> } />
          <Route path="*" element={<Notfoundpage/> } />

        </Routes>  


    
      
    </div>
    </BrowserRouter>

  );
}

export default App;

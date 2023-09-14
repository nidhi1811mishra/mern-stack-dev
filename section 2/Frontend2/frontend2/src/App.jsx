// import logo from './logo.svg';
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Home from './Components2/Home';
import About from './Components2/About';
import Skills from './Components2/Skills';
import Contact from './Components2/Contact';
import Experience from './Components2/Experience';
import Navbar from './Components2/Navbar';
import Work from './Components2/Work';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/experience' element={<Experience/>}/>
      <Route path='/work' element={<Work/>}/>
     </Routes>
     </BrowserRouter> 

    </div>
  );
}

export default App;

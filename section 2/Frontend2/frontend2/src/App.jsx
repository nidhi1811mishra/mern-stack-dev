// import logo from './logo.svg';
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Home from './Components2/Home';
import About from './Components2/About';
import Skills from './Components2/Skills';
import Contact from './Components2/Contact';
import Experience from './Components2/Experience';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/experience' element={<Experience/>}/>
     </Routes>
     </BrowserRouter> 

    </div>
  );
}

export default App;

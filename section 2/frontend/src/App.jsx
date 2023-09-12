// import logo from './logo.svg';
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';
import Todo from './components/Todo';
import ProductList from './components/ProductList';
import StateManagement from './components/StateManagement';
import Instagram from './components/Instagram';
import Contact from './components/Contact';

function App() {
  return (
   <div>
    {/* <Link href="/signup">Signup</Link>
    <a href="/signup">Signup</a>
    <Link href="/login">Login</Link> */}
    <BrowserRouter>
    {/* <Link to="/Login">Login</Link> */}
    <Navbar/>
    
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/event' element={<EventHandling/>}/>
      <Route path='/todo' element={<Todo/>}/>
      <Route path='/productlist' element={<ProductList/>}/>
      <Route path='/statemanagement' element={<StateManagement/>}/>
      <Route path='/Instagram' element={<Instagram/>}/>
      <Route path='/Contact' element={<Contact/>}/>
     </Routes>
    </BrowserRouter> 
   </div>
  
  );
}

export default App;

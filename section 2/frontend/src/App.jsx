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
import ManageUsers from './components/ManageUsers';
import { Toaster } from 'react-hot-toast';
import UpdateUser from './components/UpdateUser';
import ManageProduct from './components/ManageProduct';
import UpdateProduct from './components/UpdateProduct';
import { AppProvider } from './AppContext';
import UserAuth from './UserAuth';
import { AnimatePresence } from 'framer-motion';
import MemeCreator from './components/MemeCreator';
import UsingCharts from './components/UsingCharts';

function App() {
  return (
   <div>
    <Toaster position='top-right'/>
    {/* <Link href="/signup">Signup</Link>
    <a href="/signup">Signup</a>
    <Link href="/login">Login</Link> */}
    <BrowserRouter>
    <AppProvider>
     <AnimatePresence>   


    {/* <Link to="/Login">Login</Link> */}
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/event' element={<EventHandling/>}/>
      <Route path='/todo' element={<UserAuth><Todo/> </UserAuth>}/>
      <Route path='/productlist' element={<ProductList/>}/>
      <Route path='/statemanagement' element={<StateManagement/>}/>
      <Route path='/Instagram' element={<Instagram/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/manageusers' element={ <UserAuth>  <ManageUsers/> </UserAuth>}/>
      <Route path='/updateuser/:id' element={<UpdateUser />}/>
      <Route path='/manageproduct' element={<ManageProduct />}/>
      <Route path='/updatproduct/:id' element={<UpdateProduct />}/>
      <Route path='/memecreator/' element={<MemeCreator />}/>
      <Route path='/usingchart/' element={<UsingCharts />}/>
     </Routes>
     </AnimatePresence>
    </AppProvider>
    </BrowserRouter> 
   </div>
  
  );
}

export default App;

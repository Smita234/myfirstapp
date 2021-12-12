import logo from './logo.svg';
import './App.css';
import Home from "./components/home";
import Login from "./components/login";
import Header from "./components/header";
import SignUp from "./components/signup";
import EventHandling from "./components/eventhandling";
import ManageUsers from "./components/manageUser";

import { BrowserRouter, Routes , Route, Link, Navigate} from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Home></Home> */}
      {/* <Login/> */}
      <BrowserRouter>
         <Header/>
        <Routes>
          <Route element={<Home/>} path="/home"/>      
          <Route element={<Login/>} path="/login"/>
          <Route element={<EventHandling/>} path="/eventhandling"/>
          <Route element={<ManageUsers/>} path="/manageUser"/>
              
          
          


          
          {<Route element={<SignUp/>} path="/signup"/>}

          {/* <Route path="/" element={<Navigate replace to ="/home"/>}> */}
            
          {/* </Route> */}
        </Routes>
        {/* <Link to="/login">Go to Login</Link> */}
        

      </BrowserRouter>
    </div>
  );
}

export default App;

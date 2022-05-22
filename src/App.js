import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Login from './Components/AuthenticationPage/Login';
import Register from './Components/AuthenticationPage/Register';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;

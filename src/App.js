import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Login from './Components/AuthenticationPage/Login';
import Register from './Components/AuthenticationPage/Register';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import RequiredAuth from './Components/CommonComp/RequiredAuth';
import Purchase from './Components/PurchasePage/Purchase';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/purchase' element={
          <RequiredAuth>
            <Purchase></Purchase>
          </RequiredAuth>}>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

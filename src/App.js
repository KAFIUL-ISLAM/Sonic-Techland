import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Login from './Components/AuthenticationPage/Login';
import Register from './Components/AuthenticationPage/Register';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import RequiredAuth from './Components/CommonComp/RequiredAuth';
import Purchase from './Components/PurchasePage/Purchase';
import Dashboard from './Components/Dashboard/Dashboard';
import MyProfile from './Components/Dashboard/MyProfile';
import MyOrders from './Components/Dashboard/MyOrders';
import AddItem from './Components/Dashboard/AddItem';
import AddReview from './Components/Dashboard/AddReview';
import ManageItem from './Components/Dashboard/ManageItem';

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
        <Route path='/dashboard' element={
          <RequiredAuth>
            <Dashboard></Dashboard>
          </RequiredAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='orders' element={<MyOrders></MyOrders>}></Route>
          <Route path='additem' element={<AddItem></AddItem>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='manageitem' element={<ManageItem></ManageItem>}></Route>
        </Route>
        <Route path='*' element={<h1>not found</h1>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

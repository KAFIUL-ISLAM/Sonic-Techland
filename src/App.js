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
import ManageAllOrders from './Components/Dashboard/ManageAllOrders';
import ManageUsers from './Components/Dashboard/ManageUsers';
import RequiredAdmin from './Components/CommonComp/RequireAdmin';
import Blogs from './Components/Blogs/Blogs';
import MyPortfolio from './Components/Protfolio/MyPortfolio';
import NotFound from './Components/CommonComp/NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/purchase/:id' element={
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
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='additem' element={<RequiredAdmin><AddItem></AddItem></RequiredAdmin>}></Route>
          <Route path='manageitem' element={<RequiredAdmin><ManageItem></ManageItem></RequiredAdmin>}></Route>
          <Route path='manageorders' element={<RequiredAdmin><ManageAllOrders></ManageAllOrders></RequiredAdmin>}></Route>
          <Route path='manageusers' element={<RequiredAdmin><ManageUsers></ManageUsers></RequiredAdmin>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

import './App.css'
import AdminSidebar from './pages/User/Admin/AdminSidebar';
import Home from './pages/User/Home'
import JobListing from './pages/User/JobListing'
import LandingPage from './pages/User/LandingPage'
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import SignUp from './pages/User/SignUp';
import Login from './pages/User/Login';
import Payment from './pages/User/Payment';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<LandingPage/>}></Route>
          <Route exact path='/signup' element={<SignUp/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/home' element={<Home/>}></Route>
          <Route exact path='/jobcategory' element={<JobListing/>}></Route>
          <Route exact path='/adminsidebar' element={<AdminSidebar/>}></Route>
          <Route exact path='/payment' element={<Payment/>}></Route>
          
        </Routes>
      </Router>
          
    </>
  )
}

export default App

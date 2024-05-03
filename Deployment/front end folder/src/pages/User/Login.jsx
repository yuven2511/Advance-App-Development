import { useState } from 'react';
import loginimg from '../../assets/images/login image.jpg';
import '../../assets/css/Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();


  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: ''
  });

 
  const [selectedValue, setSelectedValue] = useState('');

  
  const handleLoginFormChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value
    });
  };

  
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  
  const submitLoginForm = (e) => {
    e.preventDefault();

    
    if (!loginFormData.email || !loginFormData.password) {
      alert('Please enter email and password');
      return;
    }

   
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(loginFormData.email)) {
      alert('Please enter a valid email address');
      return;
    }

   
    if (selectedValue === 'admin') {
      navigate('/adminsidebar');
    } else {
      navigate('/home');
    }
  };

  return (
    <div>
      <div className="login-page">
        <img src={loginimg} alt="" />
        <form onSubmit={submitLoginForm}>
          <div className="login-con">
            <label className="heading">LOGIN</label>
            <input
              type="email"
              name="email"
              value={loginFormData.email}
              onChange={handleLoginFormChange}
              placeholder="EMAIL"
              required
            />
            <input
              type="password"
              name="password"
              value={loginFormData.password}
              onChange={handleLoginFormChange}
              placeholder="PASSWORD"
              required
            />
            <label className="" htmlFor="cars">
              Select a Role :
            </label>
            <select
              id="category"
              name="jobs"
              required
              value={selectedValue}
              onChange={handleChange}
            >
              <option value="select">Role:</option>
              <option value="user">Applicant</option>
              <option value="admin">Admin</option>
            </select>
            <button type="submit" className="btn btn-warning w-25">
              Login
            </button>
            <label className="sign-btn">
              Does not have an account?{' '}
              <Link to="/signup" className="btn btn-secondary">
                SignUp
              </Link>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

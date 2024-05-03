import { useState } from "react";
import '../../assets/css/SignUp.css';
import signup from '../../assets/images/SignUp image.jpg';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
  const navigate = useNavigate();

  const [signUpFormData, setSignUpFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: ""
  });

  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSignUpFormChange = (e) => {
    const { name, value } = e.target;
    setSignUpFormData({
      ...signUpFormData,
      [name]: value
    });
  };


  const submitSignUpForm = (e) => {
    e.preventDefault();

    if (!signUpFormData.name || !signUpFormData.email || !signUpFormData.password || !selectedValue) {
      alert("Please enter all details");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(signUpFormData.email)) {
      alert("Please enter a valid email address");
      return;
    }
    alert("Registered Successfully");
    navigate("/login");
  };

  return (
    <form onSubmit={submitSignUpForm}>
      <div className="main">
        <div>
          <img src={signup} alt="" />
        </div>
        <div className="container-sign">
          <h1 className="text-warning"><strong>SIGN</strong> UP</h1>
          <input type="text" placeholder="NAME" name="name" onChange={handleSignUpFormChange} required />
          <input type="email" placeholder="EMAIL ID" name="email" onChange={handleSignUpFormChange} required />
          <input type="password" placeholder="PASSWORD" name="password" onChange={handleSignUpFormChange} required />
          <label htmlFor="cars">Select a Role :</label>
          <select id="category" name="role" required value={selectedValue} onChange={handleChange}>
            <option value="">Role:</option>
            <option value="user">Applicant</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" className="btn btn-primary w-25">SignUp</button>
          <p>Already have an account? <Link to='/login' className="signin-btn btn btn-secondary">Login</Link></p>
        </div>
      </div>
    </form>
  );
}

export default SignUp;

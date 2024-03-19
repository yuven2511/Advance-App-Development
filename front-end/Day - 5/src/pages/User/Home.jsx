import "../../assets/css/Home.css";

import jobhome from "../../assets/images/job home.jpg"
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="bg-container">
      <nav>
        <div className="nav__logo"><Link to="#">Job Finder</Link></div>
        <ul className="nav__links">
          <li className="link"><Link to="/#">Home</Link></li>
          <li className="link"><Link to="/jobcategory">Job Listing</Link></li>
          <li className="link"><Link to="/aboutus">About Us</Link></li>
          <li className="link"><Link to="/company">Companies</Link></li>
          <li className="link"><Link to="/contact">Contact</Link></li>
          <li className="link"><Link to="/login" className="nav__btn">Login</Link></li>
          <li className="link"><Link to="/signup" className="nav__btn">SignUp</Link></li>
        </ul>
      </nav>
      <section className="container">
        <div className="content__container">
          <h1>     
            <span className="heading__1">Best Job Seeker Platform</span><br />
            <span className="heading__2">in The World</span>
          </h1>
          <p>
          Maximize your career prospects with our cutting-edge online job application platform. We revolutionize the job search process by combining advanced technology with tailored professional growth opportunities. Experience a seamless journey through interactive job listings, virtual interviews, and personalized feedback, all designed to unleash your full potential in today's competitive job market.
          </p>
          <div className="apply-btn">
            <Link to="/jobcategory"><button className="btn btn-primary">Apply a Job</button></Link>
          </div>
        </div>
        <div className="image__container">
          <img src={jobhome} alt="header" />
        </div>
      </section>
        
    </div>

  );
}

export default Home;





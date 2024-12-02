import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="container-1">
          <h1>EMPLOYERS</h1>
          <h3>
            WELCOME OFFER - FREE JOB Posting and Much More.{" "}
            <a href="">Sales Enquiry</a>{" "}
          </h3>
          <button>Register for FREE</button>
          <button>Post A Job</button>

          <h1>BRINGING YOU THE PERFECT JOB !</h1>
          <p>11,000+ JOBS to Apply</p>
        </div>



        {/* ********************second box*************** */}
        <div className="container-2">
          <div className="search">
            <input
              type="text"
              className="box"
              placeholder="Search Jobs Now..."
            />
            <br />
            <button>search</button>
            <br />
            <button>View Jobs</button>
            <br />
            <button>Register for FREE</button>
            <br />
          </div>

          <div className="info">
            <h1>Quick Job Search</h1>
            <div className="link-part">
            <div className="column1">
              <a href="">#Fresher</a>
              <a href="">#Work Form Home</a>
              <a href="">#WFH</a>
              <a href="">#IT</a>
              <a href="">#HR</a>
              <a href="">#Back Office</a>
              <a href="">#BPO Jobs</a>
              <a href="">#ITES</a>
              <a href="">#Finance</a>
              <a href="">#Accounts</a>
            </div>
            <div className="column2">
              <a href="">#Medical</a>
              <a href="">#Pharma</a>
              <a href="">#Manager</a>
              <a href="">#Developer</a>
              <a href="">#Marketing</a>
              <a href="">#Engineering</a>
              <a href="">#Non Government Jobs</a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaSkype,
  FaLinkedinIn,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <section>
      <div id="footer">
        <div className="container-1">
          <div className="jobs-in-india">
            <h1>Jobs in India</h1>
            <a href="">#Mumbai</a>
            <a href="">#Delhi</a>
            <a href="">#Ajmer</a>
            <a href="">#Pune</a>
            <a href="">#Hyderabad</a>
            <a href="">#Agra</a>
            <a href="">#Kolkata</a>
          </div>
          <div className="jobs-in-inter">
            <h1>International Jobs</h1>
            <a href="">#Africa</a>
            <a href="">#USA</a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
          </div>
        </div>
        <hr />
        {/* *********************************************** */}

        <div className="container-2">
            <div className="box">
                <p>Jobs Posted</p>
                <h1>31179</h1>
            </div>
            <div className="box">
                <p>Jobs Filled</p>
                <h1>15153</h1>
            </div>
            <div className="box">
                <p>Employers</p>
                <h1>19967</h1>
            </div>
            <div className="box">
                <p>Active Users</p>
                <h1>1295358</h1>
            </div>
        </div>

        {/* ********************************************** */}
        <div className="information">
          <span>
            <p>
              Disclaimer: All Trademarks and Logos are the property of their
              respective owners, depicted here purely for representation
              purpose. | Jobringer.com has taken all reasonable steps to ensure
              that information on this site is genuine. Job Applicants are
              advised to evaluate independently. Jobringer.com shall not have
              any responsibility in this regard. All Jobseeker services are
              strictly designed & meant only for job search assistance and to
              maximize the chances for the jobseekers to get their dream job.
              All Job Seeker Credentials and Employment Opportunities are
              subject to individual merit & evaluation. We do not guarantee any
              job to any jobseeker.
            </p>
          </span>
        </div>

        <div className="social-1">
          <hr />
          <span>
            <p>
              Twitter{" "}
              <a id="icon" href="#">
                <FaTwitter size={24} style={{ color: "#efeff0" }} />
              </a>
            </p>
            <p>
              Facebook{" "}
              <a id="icon" href="#">
                <FaFacebookF size={24} style={{ color: "#f5f7fc" }} />
              </a>
            </p>
            <p>
              Instagram{" "}
              <a id="icon" href="#">
                <FaInstagram size={24} style={{ color: "#f5f7fa" }} />
              </a>
            </p>
            <p>
              Skype{" "}
              <a id="icon" href="#">
                <FaSkype size={24} style={{ color: "#fcfdff" }} />
              </a>
            </p>
            <p>
              Linkedin{" "}
              <a id="icon" href="#">
                <FaLinkedinIn size={24} style={{ color: "#ffffff" }} />
              </a>
            </p>
          </span>
        </div>
         <div className="term-cond">
        <p>Terms and conditions | Privacy Policy | Refund / Cancellation Policy | About Us Contact Us | FAQ</p>
        <span>© All Rights Reserved @ 2024 Jobtech Ventures Private Limited.</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;

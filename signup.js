import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <main className="framesignup">
        <section className="rectangle-parent">
          <img className="frame-child2" alt="" src="/rectangle-40@2x.png" />
          <div className="rectangleage" />
          <form className="confirm-password-frame">
            <div className="confirm-password-frame-child" />
            <div className="signup-button">
              <div className="buttonsignup">
                <h1 className="sign-up">
                  <span className="sign">Sign</span>
                  <span className="up"> Up</span>
                </h1>
                <div className="name-input">
                  <h2 className="name">Name:</h2>
                  <input className="rectangletextfield" type="text" />
                </div>
              </div>
            </div>
            <div className="frameusername">
              <div className="input-fieldusername">
                <h2 className="age">Age:</h2>
                <input className="age-rectangle" type="text" />
              </div>
            </div>
            <div className="signup-form">
              <div className="gender-mob-no-frame">
                <div className="groupdetails">
                  <h2 className="gender">Gender:</h2>
                  <h2 className="mob-no">Mob No. :</h2>
                  <h2 className="email-id">Email ID:</h2>
                  <h2 className="username">Username:</h2>
                  <h2 className="password">Password:</h2>
                </div>
                <div className="create-account-button">
                  <input className="create-account-button-child" type="text" />
                  <input className="create-account-button-item" type="text" />
                  <input className="create-account-button-inner" type="text" />
                  <input className="rectangle-input" type="text" />
                  <input className="create-account-button-child1" type="text" />
                </div>
              </div>
            </div>
            <div className="frameusername1">
              <h2 className="confirm-password">Confirm Password:</h2>
              <input className="email-i-d-field" type="text" />
            </div>
            <div className="confirm-password-frame-inner">
              <button className="create-account-wrapper">
                <div className="create-account">Create Account</div>
              </button>
            </div>
          </form>
        </section>
        <header className="rectangle-group">
          <div className="frame-child3" />
          <div className="navbar1">
            <div className="navbar-child" />
            <div className="healthcare-parent">
              <div className="healthcare1">Healthcare</div>
              <div className="medicines-other1">{`Medicines & Other Services `}</div>
              <div className="services2">Services</div>
              <div className="about-us2">About Us</div>
            </div>
            <div className="call-1800-425-3800-or-parent">
              <div className="call-1800-425-container1">
                <span>
                  <span className="call1">{`Call `}</span>
                  <b>1800 425 3800</b>
                  <span className="span5">{` `}</span>
                </span>
                <span className="or1">
                  <span>or</span>
                </span>
              </div>
              <button className="consult-online-container">
                <div className="consult-online1">Login / Sign Up</div>
              </button>
            </div>
            <b className="health-3602">
              <span>Health</span>
              <span className="span6">{` `}</span>
              <span className="span7">360</span>
            </b>
          </div>
        </header>
      </main>
      <footer className="signup-inner">
        <div className="footer-parent">
          <div className="footer1">
            <div className="health-360-parent">
              <b className="health-3603">
                <span>Health</span>
                <span className="span8">{` `}</span>
                <span className="span9">360</span>
              </b>
              <div className="health-care-refers-container1">
                <p className="health-care-refers1">
                  Health care refers to the efforts that medical professionals
                  make to restore our physical and mental well-being. The term
                  also includes the provision of services to maintain emotional
                  well-being. We call people and organizations that provide
                  these services 'health-care providers.
                </p>
              </div>
            </div>
            <div className="overview-frame">
              <div className="company-frame1">
                <h3 className="overview1">Overview</h3>
                <div className="medicines-home-frame1">
                  <div className="medicines1">Medicines</div>
                  <div className="healthcare-devices1">Healthcare Devices</div>
                  <div className="health-progress1">Health Progress</div>
                </div>
              </div>
              <div className="company-frame2">
                <h3 className="company1">Company</h3>
                <div className="home-group">
                  <div className="home1">Home</div>
                  <div className="about-us3">About us</div>
                  <div className="services3">Services</div>
                </div>
              </div>
              <div className="company-frame3">
                <h3 className="explore1">Explore</h3>
                <div className="blogs-feeds-group">
                  <div className="blogs-feeds2">{`Blogs & Feeds`}</div>
                  <div className="privacy-police1">Privacy Police</div>
                  <div className="cookies1">Cookies</div>
                </div>
              </div>
              <div className="cookies-frame">
                <h3 className="social-media1">Social Media</h3>
                <div className="facebook-brand">
                  <img
                    className="brand-facebook1"
                    loading="eager"
                    alt=""
                    src="/brand--facebook1.svg"
                  />
                  <img
                    className="brand-instagram1"
                    loading="eager"
                    alt=""
                    src="/brand--instagram.svg"
                  />
                  <img
                    className="brand-twitter1"
                    loading="eager"
                    alt=""
                    src="/brand--twitter.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="line-frame">
            <div className="copyright-text2">
              <div className="health-text" />
              <div className="footer-frame8">
                <div className="copyright-health1">
                  Copyright @ Health 360 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Signup;

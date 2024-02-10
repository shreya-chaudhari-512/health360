import "./Homepage.css";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage-child" />
      <section className="root-frame">
        <header className="navigation">
          <div className="navigation-child" />
          <div className="navbar">
            <div className="main-content" />
            <div className="medicine-services">
              <div className="healthcare">Healthcare</div>
              <div className="medicines-other">{`Medicines & Other Services `}</div>
              <div className="services">Services</div>
              <div className="about-us">About Us</div>
            </div>
            <div className="call-to-action-button">
              <div className="call-1800-425-container">
                <span>
                  <span className="call">{`Call `}</span>
                  <b>1800 425 3800</b>
                  <span className="span">{` `}</span>
                </span>
                <span className="or">
                  <span>or</span>
                </span>
              </div>
              < Link Link to="/Signup">
              <button className="consult-online-wrapper">
                <div className="consult-online">Login / Sign Up</div>
              </button>
              </Link>
            </div>
            <b className="health-360">
              <span>Health</span>
              <span className="span1">{` `}</span>
              <span className="span2">360</span>
            </b>
          </div>
          <img
            className="navigation-item"
            loading="eager"
            alt=""
            src="/line-1.svg"
          />
        </header>
        <div className="our-brand-text">
          <img
            className="our-brand-text-child"
            alt=""
            src="/rectangle-40@2x.png"
          />
          <div className="footer-frame">
            <img
              className="footer-frame-child"
              alt=""
              src="/rectangle-42.svg"
            />
            <div className="link-to-overview">
              <div className="line-separator">
                <div className="copyright-text" />
                <div className="social-media-links" />
              </div>
              <div className="overlay-frame">
                <div className="reason-dropdown-container">
                  <div className="call-doctor">Call Doctor</div>
                  <div className="quick-consult-via">{`Quick Consult via Call `}</div>
                </div>
                <div className="reason-dropdown-container1">
                  <div className="book-appointment">Book Appointment</div>
                  <div className="with-the-most">
                    With The Most Skilled Docters
                  </div>
                </div>
                < Link Link to="/Model"> 
                <div className="healthcare-text">
                  <div className="quick-heart-checkup">Quick Heart Checkup</div>
                  <div className="fill-a-questionnaire-container">
                    <p className="fill-a-questionnaire">
                      Fill a Questionnaire Online
                    </p>
                    <p className="blank-line">&nbsp;</p>
                    <p className="p">{` `}</p>
                  </div>
                </div>
                </Link>
              </div>
            </div>
            
            <div className="doctor-card-container">
              <div className="frame-parent">
                <div className="i-need-to-call-for-wrapper">
                  <div className="i-need-to">{`i need to call for `}</div>
                </div>
                <div className="dropdown">
                  <div className="select-the-reason">Select the Reason</div>
                  <img
                    className="chevron-down-icon"
                    alt=""
                    src="/chevrondown.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="top-rated-doctors-near-you-parent">
        <h1 className="top-rated-doctors-container">
          <span>{`Top Rated `}</span>
          <span className="doctors">Doctors</span>
          <span> Near You</span>
        </h1>
        <div className="long-arrow-link">
          <div className="footer-frame1">
            <div className="overview-company-frame-wrapper">
              <div className="overview-company-frame" />
            </div>
            <div className="medicines-home-frame">
              <div className="dropdown-menu-wrapper">
                <div className="dropdown-menu" />
              </div>
              <div className="frame-with-call-button">
                <img
                  className="frame-with-call-button-child"
                  loading="eager"
                  alt=""
                  src="/rectangle-18@2x.png"
                />
              </div>
              <div className="doctor-card">
                <div className="dr-shreya-c">Dr. Shreya C</div>
                <div className="cardiac-surgeon-new">
                  Cardiac Surgeon, New Delhi, India
                </div>
              </div>
              <button className="orthopaedic-card">
                <div className="consult-now">Consult Now</div>
                <div className="consult-now-wrapper">
                  <div className="consult-now1">Consult Now</div>
                </div>
                <div className="consult-now-container">
                  <div className="consult-now2">Consult Now</div>
                </div>
              </button>
            </div>
          </div>
          <div className="footer-frame2">
            <div className="footer-frame-inner">
              <div className="instance-child" />
            </div>
            <div className="instance-parent">
              <div className="rectangle-wrapper">
                <div className="instance-item" />
              </div>
              <div className="rectangle-container">
                <img
                  className="frame-child"
                  loading="eager"
                  alt=""
                  src="/rectangle-27@2x.png"
                />
              </div>
              <div className="frame-wrapper">
                <div className="dr-shashwat-b-parent">
                  <div className="dr-shashwat-b">Dr. Shashwat B</div>
                  <div className="neurosurgeon-gurgaon-india">
                    Neurosurgeon, Gurgaon, India
                  </div>
                </div>
              </div>
              <div className="frame-container">
                <button className="consult-now-parent">
                  <div className="consult-now3">Consult Now</div>
                  <div className="consult-now-frame">
                    <div className="consult-now4">Consult Now</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="footer-frame3">
            <div className="rectangle-div">
              <div className="instance-inner" />
            </div>
            <div className="frame-div">
              <img
                className="frame-item"
                loading="eager"
                alt=""
                src="/rectangle-28@2x.png"
              />
            </div>
            <div className="consult-now-button">
              <div className="dr-ramyaa-b">Dr. Ramyaa B</div>
              <div className="orthopaedic-and-joint">
                Orthopaedic and Joint Replacement Surgeon, New Delhi, India
              </div>
            </div>
            <div className="consult-now-group">
              <div className="consult-now5">Consult Now</div>
              <div className="consult-now-wrapper1">
                <div className="consult-now6">Consult Now</div>
              </div>
              <div className="consult-now-parent1">
                <div className="consult-now7">Consult Now</div>
                <div className="consult-now-wrapper2">
                  <div className="consult-now8">Consult Now</div>
                </div>
                <div className="consult-now-wrapper3">
                  <div className="consult-now9">Consult Now</div>
                </div>
                <div className="service-frame">
                  <div className="consult-now10">Consult Now</div>
                  <div className="consult-now-wrapper4">
                    <div className="consult-now11">Consult Now</div>
                  </div>
                  <div className="consult-now-wrapper5">
                    <div className="consult-now12">Consult Now</div>
                  </div>
                  <div className="select-reason-dropdown">
                    <div className="consult-now13">Consult Now</div>
                    <div className="consult-now-wrapper6">
                      <div className="consult-now14">Consult Now</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-frame4">
            <div className="footer-frame-inner1">
              <div className="instance-child1" />
            </div>
            <div className="footer-frame-inner2">
              <img
                className="frame-inner"
                loading="eager"
                alt=""
                src="/rectangle-31@2x.png"
              />
            </div>
            <div className="footer-frame-inner3">
              <div className="dr-pratik-b-parent">
                <div className="dr-pratik-b">Dr. Pratik B</div>
                <div className="neurosurgeon-gurgaon-india1">
                  Neurosurgeon, Gurgaon, India
                </div>
              </div>
            </div>
          </div>
          <div className="footer-frame5">
            <div className="footer-frame-inner4">
              <div className="instance-child2" />
            </div>
            <div className="footer-frame-inner5">
              <img
                className="rectangle-icon"
                loading="eager"
                alt=""
                src="/rectangle-29@2x.png"
              />
            </div>
            <div className="footer-frame-inner6">
              <div className="dr-atharva-s-parent">
                <div className="dr-atharva-s-container">
                  <a
                    className="dr"
                    href="https://www.vaidam.com/doctors/dr-ajay-kaul-cardiac-surgeon"
                    target="_blank"
                  >{`Dr. `}</a>
                </div>
                <div className="cardiac-surgeon-new1">
                  Cardiac Surgeon, New Delhi, India
                </div>
              </div>
            </div>
          </div>
          <div className="footer-frame6">
            <div className="footer-frame-inner7">
              <div className="instance-child3" />
            </div>
            <div className="footer-frame-inner8">
              <img
                className="frame-child1"
                loading="eager"
                alt=""
                src="/rectangle-30@2x.png"
              />
            </div>
            <div className="dr-shivali-s-parent">
              <div className="dr-shivali-s">{`Dr. Shivali S `}</div>
              <div className="cardiac-surgeon-gurgaon">
                Cardiac Surgeon, Gurgaon, India
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="neurosurgeon-frame">
        <div className="org-feedback">
          <div className="customer-reviews">
            <div className="overview-company">
              <h1 className="our-patients-feedback-container">
                <span>{`Our `}</span>
                <span className="patients">patients</span>
                <span> feedback about us</span>
              </h1>
            </div>
            <div className="blogs-feeds">
              <div className="privacy-policy">
                <div className="privacy-policy-child" />
                <h2 className="health-360-is-container">
                  <p className="health-360-is">
                    “Health 360 is an website and a connection
                  </p>
                  <p className="for-you-to">
                    for you to feel better or get medical help.
                  </p>
                  <p className="they-offer-you">
                    They offer you a 24/7 doctor service with Medicine
                    Purchasing Facility”
                  </p>
                </h2>
              </div>
              <h3 className="ritvik-jeeda">Ritvik Jeeda</h3>
              <b className="health-360-customer">Health 360 Customer</b>
              <img
                className="arrow-long-right"
                loading="eager"
                alt=""
                src="/arrow--long-right.svg"
              />
              <img
                className="arrow-long-right1"
                alt=""
                src="/arrow--long-right-1.svg"
              />
              <div className="social-media-links1">
                <div className="group-frames-parent">
                  <div className="group-frames" />
                  <div className="image-4" />
                </div>
                <img
                  className="image-5-icon"
                  loading="eager"
                  alt=""
                  src="/image-5@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="view-all">View All</div>
          <footer className="footer-frame7">
            <div className="footer">
              <div className="company-frame">
                <b className="health-3601">
                  <span>Health</span>
                  <span className="span3">{` `}</span>
                  <span className="span4">360</span>
                </b>
                <div className="health-care-refers-container">
                  <p className="health-care-refers">
                    Health care refers to the efforts that medical professionals
                    make to restore our physical and mental well-being. The term
                    also includes the provision of services to maintain
                    emotional well-being. We call people and organizations that
                    provide these services 'health-care providers.
                  </p>
                </div>
              </div>
            </div>
            <div className="privacy-policy-frame">
              <div className="overview-section">
                <h3 className="overview">Overview</h3>
                <div className="blogs-feed-frame">
                  <div className="medicines">Medicines</div>
                  <div className="healthcare-devices">Healthcare Devices</div>
                  <div className="health-progress">Health Progress</div>
                </div>
              </div>
              <div className="overview-section1">
                <h3 className="company">Company</h3>
                <div className="home-parent">
                  <div className="home">Home</div>
                  <div className="about-us1">About us</div>
                  <div className="services1">Services</div>
                </div>
              </div>
              <div className="overview-section2">
                <h3 className="explore">Explore</h3>
                <div className="blogs-feeds-parent">
                  <div className="blogs-feeds1">{`Blogs & Feeds`}</div>
                  <div className="privacy-police">Privacy Police</div>
                  <div className="cookies">Cookies</div>
                </div>
              </div>
              <div className="copyright-text1">
                <h3 className="social-media">Social Media</h3>
                <div className="facebook-icon">
                  <img
                    className="brand-facebook"
                    loading="eager"
                    alt=""
                    src="/brand--facebook.svg"
                  />
                  <img
                    className="brand-instagram"
                    loading="eager"
                    alt=""
                    src="/brand--instagram.svg"
                  />
                  <img
                    className="brand-twitter"
                    loading="eager"
                    alt=""
                    src="/brand--twitter.svg"
                  />
                </div>
              </div>
            </div>
          </footer>
          <div className="twitter-icon">
            <div className="footer-line-parent">
              <div className="footer-line" />
              <div className="copyright-health">
                Copyright @ Health 360 2024
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;

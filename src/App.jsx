import React from 'react'
import Course from './assets/course.png'
import Learning from './assets/learning.png'
import Mentor from './assets/mentor.png'
import Projects from './assets/projects.png'
import Internship from './assets/internship.png'
import CourseAccess from './assets/courseAccess.png'
import './App.css'

function App() {

  return (
    <>
      <section className="why-ch-section why-choose">
        <h2 className="why-choose-heading why-choose-400 why-choose-text-center why-choose-f-48">
          Why <span className="why-choose-text-pink why-choose-fw-700">choose us ?</span>
        </h2>
        <div className="why-choose-cards">
          <div className="why-choose-card why-choose-card1">
            <div className="why-choose-card-left">
              <img src={Learning} alt="100% Free Learning" />
            </div>
            <div className="why-choose-card-right">
              <div className="why-choose-cr-top">
                <h3 className="why-choose-card-heading">100% Free Learning</h3>
              </div>
              <div className="why-choose-cr-bottom">
                <p className="why-choose-card-text">On the courses enrolled within the 100% FeesBack offer through which you earn your enrollment fee back as reward</p>
                <div className="why-choose-card-no">1</div>
              </div>
            </div>
          </div>
          <div className="why-choose-card why-choose-card2">
            <div className="why-choose-card-left">
              <img src={Course} alt="Structured Course" />
            </div>
            <div className="why-choose-card-right">
              <div className="why-choose-cr-top">
                <h3 className="why-choose-card-heading">Structured Course</h3>
              </div>
              <div className="why-choose-cr-bottom">
                <p className="why-choose-card-text">On the courses enrolled within the 100% FeesBack offer through which you earn your enrollment fee back as reward</p>
                <div className="why-choose-card-no">2</div>
              </div>
            </div>
          </div>
          <div className="why-choose-card why-choose-card3">
            <div className="why-choose-card-left">
              <img src={Mentor} alt="Instant Mentor Support" />
            </div>
            <div className="why-choose-card-right">
              <div className="why-choose-cr-top">
                <h3 className="why-choose-card-heading">Instant Mentor Support</h3>
              </div>
              <div className="why-choose-cr-bottom">
                <p className="why-choose-card-text">On the courses enrolled within the 100% FeesBack offer through which you earn your enrollment fee back as reward</p>
                <div className="why-choose-card-no">3</div>
              </div>
            </div>
          </div>
          <div className="why-choose-card why-choose-card4">
            <div className="why-choose-card-left">
              <img src={Projects} alt="Projects & Certifications" />
            </div>
            <div className="why-choose-card-right">
              <div className="why-choose-cr-top">
                <h3 className="why-choose-card-heading">Projects & Certifications</h3>
              </div>
              <div className="why-choose-cr-bottom">
                <p className="why-choose-card-text">On the courses enrolled within the 100% FeesBack offer through which you earn your enrollment fee back as reward</p>
                <div className="why-choose-card-no">4</div>
              </div>
            </div>
          </div>
          <div className="why-choose-card why-choose-card5">
            <div className="why-choose-card-left">
              <img src={Internship} alt="Internship Opportunities" />
            </div>
            <div className="why-choose-card-right">
              <div className="why-choose-cr-top">
                <h3 className="why-choose-card-heading">Internship Opportunities</h3>
              </div>
              <div className="why-choose-cr-bottom">
                <p className="why-choose-card-text">On the courses enrolled within the 100% FeesBack offer through which you earn your enrollment fee back as reward</p>
                <div className="why-choose-card-no">5</div>
              </div>
            </div>
          </div>
          <div className="why-choose-card why-choose-card6">
            <div className="why-choose-card-left">
              <img src={CourseAccess} alt="Lifetime Course Access" />
            </div>
            <div className="why-choose-card-right">
              <div className="why-choose-cr-top">
                <h3 className="why-choose-card-heading">Lifetime Course Access</h3>
              </div>
              <div className="why-choose-cr-bottom">
                <p className="why-choose-card-text">On the courses enrolled within the 100% FeesBack offer through which you earn your enrollment fee back as reward</p>
                <div className="why-choose-card-no">6</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App

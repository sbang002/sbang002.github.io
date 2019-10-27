import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer at BAE Systems Inc.  <span>2018 - present</span></h2>
                        <p>I have joined BAE Systems as a Software Engineer in the DevOps team. My major part of the work has been in the CI/CD (Continuous Integration & Continuous Development) effort which keeps the program that BAE Systems delivers under goverment compliance. I am also mentoring new hires by teaching them how to use applications such as Fortify and Ansible, our existing team processes, and how to work in our CI/CD pipeline. I have been using multiple languages throughout my time at BAE systems such as C++, Python, Java, JavaScript, Perl, and many more.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-briefcase icon-large" />
                      </div>
                      <div className="timeline-label">
                        <h2>Python Development Intern at Mednick Sleep and Cognition Lab <span>July 2017 - Nov. 2017</span></h2>
                        <p> Throughout this internship experience I was able to have my first taste of applying the skills that I have learned in school in a work enviroment. I would engage in team meetings to delegate tasks and discuss on how we are to continue with developing new ways to analyze our sleep data. I was able to learn how to use multiple libraries such as pandas and numpy. Through the python scripts that I created to analyze the data from thousands of files, it allowed our team to create a deeper analysis of how the time of day, total sleep time, sex, and age affect sleep. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>University of California, Riverside <span>2014-2018</span></h2>
                        <p>I have completed my under-grad education with a B.S. in Computer Science. During my time at school, I have developed my skills as a generalist software developer with taking extracuricular classes in Machine Learning, Computer Graphics, Database Management Systems, and more. These classes haved helped me to improve my understanding of how coding is applied in a variety of diffent architechtures. </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Certifications from './certification';
import Tom from '../components/images/TomPic.jpg';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src={Tom}
                alt="avatar"
                style={{ height: '200px' }}
              />
            </div>

            <h2 style={{ paddingLeft: '15%' }}>Thomas Kang</h2>
            <h4 style={{ color: 'grey', paddingLeft: '22%' }}>Full Stack Developer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
            <p>Former project manager turned software engineer with a skill set in full-stack coding for web development. Passionate about helping businesses succeed through growing and optimizing their online presence. I look forward to opportunities that will leverage my skills as a software developer. DoD Secret level security clearance.</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
            {/* <h5>Address</h5>
                        <p>63-95 Austin Street Apt. 1E Rego Park, NY 11374</p>
                        <h5>Phone</h5>
                        <p>(516) 606-4257</p> */}
            <h5>Email</h5>
            <p>tk9285@gmail.com</p>
            <h5>Github</h5>
            <a style={{ color: 'black' }} href="https://github.com/tk9285">https://github.com/tk9285</a>
            <h5>LinkedIn</h5>
            <a style={{ color: 'black' }} href="https://www.linkedin.com/in/thomas-kang-dev/">https://www.linkedin.com/in/thomas-kang-dev/</a>
            <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>

            <h2 style={{ paddingLeft: '15px' }}>Experience</h2>

            <Experience

              jobName="SOFTWARE ENGINEERING FELLOW"
              jobCompany="-General Assembly"
              jobDescription="Designed a full stack ecommerce website with CRUD functionality, using a React frontend and used Ruby on Rails for the backend. Developed a news media application utilizing React and a third-party API through Axios. Lead a team to build a gaming blog web application with CRUD functionality, using a React frontend and a backend with Express, Sequelize, and PostgreSQL. Collaborated with UX designers to build a restaurant webpage for enhanced customer experience."
              // startYear={2015}
              // endYear={2019}
              yearsOf={"2019 - 2019"}

            />

            <Experience

              jobName="FRONT END WEB DEVELOPMENT"
              jobCompany="-General Assembly"
              jobDescription="10 week class where we learned to leverage HTML, CSS, and JavaScript through hands on projects and real world scenarios. Developed interactive and responsive websites to showcase our coding skills."
              // startYear={2015}
              // endYear={2019}
              yearsOf={"2019 - 2019"}

            />

            <Experience

              jobName="SENIOR PROJECT MANAGER"
              jobCompany="-Noviant, Inc."
              jobDescription="Initiated and managed information technology (IT) projects. Lead technical staff of 10+ professionals including network and security engineers as well as cabling technicians. Serve as liaison between business and technical project stakeholders. Planned project stages and assess business implications, and monitor progress to ensure deadline, specification andbudget compliance."
              // startYear={2015}
              // endYear={2019}
              yearsOf={"2015 - 2019"}

            />
            <Experience

              jobName="PROJECT MANAGER"
              jobCompany="-Compu21"
              jobDescription="Led IT initiatives inclusive of leading project teams, capturing project requirements, placing orders, allocating resources, status reporting, documentation and user training."
              // startYear={2013}
              // endYear={2015}
              yearsOf={"2013 - 2015"}
            />

            <Experience

              jobName="PROJECT MANAGER"
              jobCompany="-Vertical Integration, Inc."
              jobDescription="Served as main point-of-contact and manager for Washington Headquarters Services Enterprise IT projects.Led daily project status presentations to high-level government officials at the Office of the Secretary of Defense (OSD) and Washington Headquarters Services (WHS)."
              // startYear={2013}
              // endYear={2013}
              yearsOf={"2013"}
            />

            <Experience

              jobName="PROJECT MANAGER"
              jobCompany="-Quantech Services, Inc"
              jobDescription="Ledphysical security and IT upgrade projectsand project teamsfor US Department of Defense(DoD)."
              // startYear={2010}
              // endYear={2013}
              yearsOf={"2010 - 213"}
            />


            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2 style={{ paddingLeft: '15px' }}>Education</h2>


            <Education
              // startYear={2013}
              // endYear={2013}
              schoolName="General Assembly"
              schoolDescription="Software Engineering Immersive"
              yearsOf={2019}
            />

            <Education
              // startYear={2013}
              // endYear={2013}
              schoolName="General Assembly"
              schoolDescription="Front End Web Development"
              yearsOf={2019}
            />

            <Education
              // startYear={2006}
              // endYear={2010}
              schoolName="Adelphi University"
              schoolDescription="BACHELOR OF SCIENCE, BUSINESS MANAGEMENT"
              yearsOf={"2006 - 2010"}

            />


            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2 style={{ paddingLeft: '15px' }}>Certifications</h2>

            <Certifications
              certName={"Software Engineering Immersive"}
              certSchool={"General Assembly"}
              oneYear={2019}
            />
            <Certifications
              certName={"Front End Web Development"}
              certSchool={"General Assembly"}
              oneYear={2019}
            />
             <Certifications
              certName={"Security+"}
              certSchool={"CompTIA"}
              oneYear={2018}
            />
             <Certifications
              certName={"Cisco Certified Network Associate (CCNA)"}
              certSchool={"Cisco"}
              oneYear={2017}
            />
             <Certifications
              certName={"Network+"}
              certSchool={"CompTIA"}
              oneYear={2016}
            />
             <Certifications
              certName={"A+"}
              certSchool={"CompTIA"}
              oneYear={2015}
            />
             <Certifications
              certName={"Project Management Professional (PMP)"}
              certSchool={"Project Management Institute (PMI)"}
              oneYear={2014}
            />


          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;
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
            <p>Former project manager turned software engineer with a skill set in full-stack coding for web development. Passionate about technology which is demonstrated through my 9 years of IT project management experience and my continued motivation to understand all aspects of technology from hardware to programing. Now as a software engineer, I’m bringing my problem solving, process-oriented approach, and attention to detail experience to my new career. Looking forward to leveraging my coding skills, task management, communication and leadership skills to new opportunities. DoD secret level security clearance.</p>
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

              jobName="SOFTWARE ENGINEER FELLOW"
              jobCompany="-General Assembly"
              jobDescription1="•	Created a full stack ecommerce website with CRUD functionality, using a React frontend and Ruby on Rails for the backend."
              jobDescription2="•	Developed a news media application utilizing React and a third-party API through Axios."
              jobDescription3="•	Led a team to build a gaming blog web application with CRUD functionality, using React on the frontend and Express, Sequelize, and PostgreSQL for the backend."
              jobDescription4="•	Collaborated with UX designers to build a restaurant webpage for enhanced customer experience."
              // startYear={2015}
              // endYear={2019}
              yearsOf={"2019 - 2019"}

            />

            <Experience

              jobName="FRONT END WEB DEVELOPMENT"
              jobCompany="-General Assembly"
              jobDescription1="•	10 week course where we learned to leverage HTML, CSS, and JavaScript through hands on projects and real world scenarios. Developed interactive and responsive websites to showcase our coding skills."
              // startYear={2015}
              // endYear={2019}
              yearsOf={"2019 - 2019"}

            />

            <Experience

              jobName="SENIOR PROJECT MANAGER"
              jobCompany="-Noviant, Inc."
              jobDescription1="•	PROJECT MANAGEMENT - Initiated IT projects from planning to closing by monitoring overall progress to ensure deadlines, specifications and budget requirements were met. Led technical team of 10+ professionals including network and security engineers as well as cabling technicians."
              jobDescription2="•	COST MANAGEMENT - Led a team of ten engineers to implement system upgrades across 19 nationwide bank locations. Completed project within budget and on time, within a one year timeline, resulting in 19 locations utilizing a new system, saving money and improving simplicity of vendor payment and confusion of multiple directories."
              jobDescription3="•	TASK MANAGEMENT - Actively managed project deliverables by monitoring and updating team members to ensure successful completion of system installation for a church renovation. Managed six team members to install a security system, network equipment, servers, phone system, and desktops within a one year timeline and within budget requirements."
              // startYear={2015}
              // endYear={2019}
              yearsOf={"2015 - 2019"}

            />
            <Experience

              jobName="PROJECT MANAGER"
              jobCompany="-Compu21"
              jobDescription1="•	PROJECT MANAGEMENT – Led IT initiatives in leading project teams, capturing project requirements, placing orders, allocating resources, status reporting, documentation, and user training."
              jobDescription2="•	QUALITY MANAGEMENT – Managed a team of two network engineers on a hardware upgrade of Cisco switches, call manager and a Dell server to replace obsolete equipment. Completed the project within an expedited one month time frame without any loss of quality and within budget, improving operational speed and system quality."
              jobDescription3="•	LEADERSHIP – Led and motivated a team of two network engineers to upgrade over 100 desktop PCs within a one week time frame to increase the ability to expand business with more students having computer access."
              // startYear={2013}
              // endYear={2015}
              yearsOf={"2013 - 2015"}
            />

            <Experience

              jobName="PROJECT MANAGER"
              jobCompany="-Vertical Integration, Inc."
              jobDescription1="•	PROJECT MANAGEMENT – Served as main point-of-contact for Washington Headquarters Services Enterprise IT projects. Led daily project status presentations to high level government officials at the Office of the Secretary of Defense (OSD) and Washington Headquarters Services (WHS)."
              jobDescription2="•	CRITICAL THINKING – Oversaw a senior engineering team with a diverse level of skill sets but was able to drive the team to focus on the project objectives to execute a software migration project. Completed the project within a three month timeframe and, resulting in a centralized data that increased productivity through simplification of user experience."
              // startYear={2013}
              // endYear={2013}
              yearsOf={"2013"}
            />

            <Experience

              jobName="PROJECT MANAGER"
              jobCompany="-Quantech Services, Inc"
              jobDescription1="•	PROJECT MANAGEMENT – Led security and IT upgrade projects for US Department of Defense (DoD)."
              jobDescription2="•	COMMUNICATION – Supervised a team of ten from different vendors to collaborate on implementing upgrades to security and IT requirements for 50+ facilities within the Pentagon, resulting in improved access control, security monitoring, motion detection and alarm system, increasing enterprise-wide safety and productivity. Completed project within a two year timeline and within budget."
              jobDescription3="•	MULTITASKING – Assisted the Under Secretary of Defense for Acquisition Technology and Logistics (AT&L) in the DoD/Base Realignment and Closure Commission Project (BRAC-133) in relocating over 6,500 government personnel from the Pentagon and leased facilities to the Mark Center. Project resulted in savings in expenses."
              // startYear={2010}
              // endYear={2013}
              yearsOf={"2010 - 2013"}
            />


            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2 style={{ paddingLeft: '15px' }}>Education</h2>


            <Education
              // startYear={2013}
              // endYear={2013}
              schoolName="-General Assembly"
              schoolDescription="Software Engineering Immersive"
              yearsOf={2019}
            />

            <Education
              // startYear={2013}
              // endYear={2013}
              schoolName="-General Assembly"
              schoolDescription="Front End Web Development"
              yearsOf={2019}
            />

            <Education
              // startYear={2006}
              // endYear={2010}
              schoolName="-Adelphi University"
              schoolDescription="BACHELOR OF SCIENCE, BUSINESS MANAGEMENT"
              yearsOf={"2006 - 2010"}

            />


            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2 style={{ paddingLeft: '15px' }}>Certifications</h2>

            <Certifications
              certName={"Software Engineering Immersive"}
              certSchool={"-General Assembly"}
              oneYear={2019}
            />
            <Certifications
              certName={"Front End Web Development"}
              certSchool={"-General Assembly"}
              oneYear={2019}
            />
             <Certifications
              certName={"Security+"}
              certSchool={"-CompTIA"}
              oneYear={2018}
            />
             <Certifications
              certName={"Cisco Certified Network Associate (CCNA)"}
              certSchool={"-Cisco"}
              oneYear={2017}
            />
             <Certifications
              certName={"Network+"}
              certSchool={"-CompTIA"}
              oneYear={2016}
            />
             <Certifications
              certName={"A+"}
              certSchool={"-CompTIA"}
              oneYear={2015}
            />
             <Certifications
              certName={"Project Management Professional (PMP)"}
              certSchool={"-Project Management Institute (PMI)"}
              oneYear={2014}
            />


          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;
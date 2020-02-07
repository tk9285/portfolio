import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Tom from '../components/images/TomPic.jpg';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body" >
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Thomas Kang</h2>
            <img
              src={Tom}
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '95%', margin: 'auto', paddingTop: '1em'}}>Former project manager turned software engineer with a skill set in full-stack coding for web development. Passionate about technology which is demonstrated through my 9 years of IT project management experience and my continued motivation to understand all aspects of technology from hardware to programing. Now as a software engineer, I’m bringing my problem solving, process-oriented approach, and attention to detail experience to my new career. Looking forward to leveraging my coding skills, task management, communication and leadership skills to new opportunities. DoD secret level security clearance.</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Information</h2>
            <hr style={{width: '100%'}}/>
            <div className="contact-list">
              <List style={{width:'150rem'}}>
                {/* <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (516) 606-4257
                  </ListItemContent>
                </ListItem> */}
                
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    <a style={{color:'black', fontSize: '.60em'}}>tk9285@gmail.com</a>
                  </ListItemContent>
                </ListItem>

                <ListItem style={{width:'100%'}}>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', width: '100%'}}>
                    <i style={{paddingRight:'60px', height: '5rem'}} className="fa fa-github" aria-hidden="true"/>
                    <a style={{ color: 'black', fontSize: '.60em', marginLeft: '20px', paddingBottom:'5em' }} href="https://github.com/tk9285">https://github.com/tk9285</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i style={{paddingRight:'75px'}}className="fa fa-linkedin-square" aria-hidden="true"/>
                    <a style={{ color: 'black', fontSize: '.60em' }} href="https://www.linkedin.com/in/thomas-kang-dev/">https://www.linkedin.com/in/thomas-kang-dev/</a>                  </ListItemContent>
                </ListItem>
                
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Contact;
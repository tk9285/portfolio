import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>
        
        <Cell col={8} style={{width:'80%'}}>
          <h4 style={{marginTop:'0px', width:'150%'}}>{this.props.jobName}</h4>
          <h5 style={{marginTop:'0px'}}>{this.props.jobCompany}</h5>
          <p style={{marginLeft:'20px'}}>{this.props.jobDescription1}</p>
          <p style={{marginLeft:'20px'}}>{this.props.jobDescription2}</p>
          <p style={{marginLeft:'20px'}}>{this.props.jobDescription3}</p>
          <p style={{marginLeft:'20px'}}>{this.props.jobDescription4}</p>

          {/* <ul>
              <li>{this.props.jobDescription1}</li>
              <li>{this.props.jobDescription2}</li>
          </ul> */}
        </Cell>

        <Cell col={4} style={{width:'13%', marginLeft:'28px'}}>
          {/* <p>{this.props.startYear} - {this.props.endYear}</p> */}
          <h6 style={{marginTop:'0px'}}>{this.props.yearsOf}</h6>

        </Cell>
      </Grid>
    )
  }
}

export default Experience;
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
    render() {
        return (
            <Grid>

                <Cell col={8}>
                    <h4 style={{ marginTop: '0px' }}>{this.props.schoolDescription}</h4>
                    <h5 style={{marginTop: '0px'}}>{this.props.schoolName}</h5>
                </Cell>

                <Cell col={4} style={{paddingLeft:'125px'}}>

                    {/* <p>{this.props.startYear} - {this.props.endYear}</p> */}

                    <h6 style={{marginTop:'0px'}}>{this.props.yearsOf}</h6>

                </Cell>

            </Grid>
        )
    }
}

export default Education;
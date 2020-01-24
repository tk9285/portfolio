import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Certifications extends Component {
    render() {
        return (
            <Grid>
                <Cell col={8}>
                    <h4 style={{ marginTop: '0px' }}>{this.props.certName}</h4>
                    <h5 style={{marginTop:'0px'}}>{this.props.certSchool}</h5>
                </Cell>
                <Cell col={4} style={{paddingLeft:'125px'}}>
                    <h6 style={{ marginTop:'0px'}}>{this.props.oneYear}</h6>
                </Cell>

            </Grid>
        )
    }
}

export default Certifications;
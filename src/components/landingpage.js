import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Tom from '../components/images/TomPic.jpg';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={Tom}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML | CSS | JavaScript | React | Bootstrap | NodeJS | Express | Sequelize | Ruby | Rails | Postgres</p>
          <a style={{height: '5rem'}}>
          
          <img src="https://img.icons8.com/color/96/000000/html-5.png"></img>
          <img src="https://img.icons8.com/color/96/000000/css3.png"></img>
          <img src="https://img.icons8.com/color/96/000000/javascript.png"></img>
          <img src="https://img.icons8.com/color/96/000000/react-native.png"></img>
          <img src="https://img.icons8.com/color/96/000000/bootstrap.png"></img>
          <img src="https://img.icons8.com/color/96/000000/nodejs.png"></img>
          <img src="https://img.icons8.com/color/96/000000/postgreesql.png"></img>
          <img src="https://img.icons8.com/color/96/000000/ruby-programming-language.png"></img>
          

          </a>
          
        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
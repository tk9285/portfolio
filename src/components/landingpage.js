import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Tom from '../components/images/TomPic.jpg';


class Landing extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'yellow' }}>

        <div style={{ width: '100%', margin: 'auto' }}>
          <Grid className="landing-grid">
            <Cell col={12}>
              <img
                src={Tom}
                alt="avatar"
                className="avatar-img"
                style={{ height: '20%', paddingTop: '70px' }}
              />

              <div className="banner-text" style={{ marginTop: '25px' }}>
                <h1 style={{ marginBottom: '0', marginTop: '5px' }}>Thomas Kang</h1>
                <h1 style={{ marginTop: '0', marginBottom: '0' }}>Full Stack Web Developer</h1>

                <hr />

                <p style={{ marginBottom: '0', paddingBottom: '0', paddingTop: '10px' }}>HTML | CSS | JavaScript | React | Bootstrap | NodeJS | Express | Sequelize | Ruby | Rails | Postgres</p>
                <a>

                  <img src="https://img.icons8.com/color/96/000000/html-5.png" style={{ height: '5rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
                  <img src="https://img.icons8.com/color/96/000000/css3.png" style={{ height: '5rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
                  <img src="https://img.icons8.com/color/96/000000/javascript.png" style={{ height: '5rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
                  <img src="https://img.icons8.com/color/96/000000/react-native.png" style={{ height: '5rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
                  <img src="https://img.icons8.com/color/96/000000/bootstrap.png" style={{ height: '5rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
                  <img src="https://img.icons8.com/color/96/000000/nodejs.png" style={{ height: '5rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
                  <img src="https://img.icons8.com/color/96/000000/postgreesql.png" style={{ height: '5rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
                  <img src="https://img.icons8.com/color/96/000000/ruby-programming-language.png" style={{ height: '5rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>


                </a>

                <div className="social-links" style={{}}>

                  {/* LinkedIn */}
                  <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" style={{ fontSize: '60px' }}></i>
                  </a>

                  {/* Github */}
                  <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" style={{ fontSize: '60px' }}></i>
                  </a>

                </div>
              </div>
            </Cell>
          </Grid>
        </div>

      </div>
    )
  }
}

export default Landing;
import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import buzznewspic from '../components/images/buzznewspic.png';
import gamegenius from '../components/images/gamegeniuspic.png';
import nathanFarm from '../components/images/nathanFarm.png'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">

                    {/* Project 1 */}
                    <Card shadow={5} style={{ width: '100%', height: '80vh', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '60vh', background: 'url(https://user-images.githubusercontent.com/53023966/68064484-8a0e7800-fcf2-11e9-952c-8e3a1e21bdb1.gif) center / cover' }}></CardTitle>

                        <CardText style={{ color: "black", display: 'flex', paddingBottom: '0px', paddingTop: '0px' }}>
                            <h6 style={{ width: '12%' }}>OBJECTIVE:</h6>
                            <p style={{ width: '100%', marginTop: '10px' }}>"SUPER" - The objective for this project was to clone an existing website and showcase the possibilites in the design aspect for the front end. The website I decided to clone was Uber. Uber is well known for their taxi services so I decided to call my site "Super" which is an airline company.</p>
                        </CardText>

                        <CardText style={{ color: "black", display: 'flex', paddingTop: '0px', paddingBottom: '0px' }}>
                            <h6 style={{ width: '15%', marginRight: '0', marginTop: '12px' }}>LANGUAGES USED:</h6>
                            <img src="https://img.icons8.com/color/96/000000/html-5.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
                            <img src="https://img.icons8.com/color/96/000000/css3.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
                            <img src="https://img.icons8.com/color/96/000000/javascript.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
                            {/* <img src="https://img.icons8.com/color/96/000000/react-native.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
                            <img src="https://img.icons8.com/color/96/000000/bootstrap.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
                            <img src="https://img.icons8.com/color/96/000000/nodejs.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
                            <img src="https://img.icons8.com/color/96/000000/postgreesql.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
                            <img src="https://img.icons8.com/color/96/000000/ruby-programming-language.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img> */}

                        </CardText>

                        <CardActions border>
                            <Button colored href={"https://github.com/tk9285/SEI-OWLS-P1"}>GitHub</Button>
                            <Button colored href={"https://tk9285.github.io/SEI-OWLS-P1/"}>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 2 */}
                    {/* <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #2</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card> */}

                    {/* Project 3 */}
                    {/* <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #3</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card> */}

                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (

                <div className="projects-grid">

                    {/* Project 1 */}
                    <Card shadow={5} style={{ width: '100%', height: '80vh', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '60vh', background: 'url(https://user-images.githubusercontent.com/55757934/74063723-0f26be80-49bf-11ea-89e4-9afadffc4697.gif) center / cover' }}></CardTitle>

                        <CardText style={{ color: "black", display: 'flex', paddingBottom: '0px', paddingTop: '0px' }}>
                            <h6 style={{ width: '12%' }}>OBJECTIVE:</h6>
                            <p style={{ width: '100%', marginTop: '10px' }}>"BuzzNews" - The objective for Project 2 was to display 2 different sets of API's. One from a third party API and the other from a mockAPI. We also had to use REACT to display API's on the webpage. The website I decided to create is called BuzzNews which is a news media website. I used a news API to display "TOP STORY NEWS" and a mockAPI to create a "SPORTS NEWS" sections display data that I created.</p>
                        </CardText>

                        <CardText style={{ color: "black", display: 'flex', paddingTop: '0px', paddingBottom: '0px' }}>
                            <h6 style={{ width: '15%', marginRight: '0', marginTop: '12px' }}>LANGUAGES USED:</h6>
                            <img src="https://img.icons8.com/color/96/000000/html-5.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
                            <img src="https://img.icons8.com/color/96/000000/css3.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
                            <img src="https://img.icons8.com/color/96/000000/javascript.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
                            {/* <img src="https://img.icons8.com/color/96/000000/react-native.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
        <img src="https://img.icons8.com/color/96/000000/bootstrap.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
        <img src="https://img.icons8.com/color/96/000000/nodejs.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
        <img src="https://img.icons8.com/color/96/000000/postgreesql.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
        <img src="https://img.icons8.com/color/96/000000/ruby-programming-language.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img> */}

                        </CardText>

                        <CardActions border>
                            <Button colored href={"https://github.com/tk9285/buzznews"}>GitHub</Button>
                            <Button colored href={"http://like-birthday.surge.sh/"}>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>


                </div>

            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    {/* Project 2 */}
                    <Card shadow={5} style={{ width: '100%', height: '80vh', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '60vh', background: 'url(https://user-images.githubusercontent.com/55757934/74068524-d2ac9000-49c9-11ea-84d2-768f2cfd1960.png) center / cover' }}></CardTitle>

                        <CardText style={{ color: "black", display: 'flex', paddingBottom: '0px', paddingTop: '0px' }}>
                            <h6 style={{ width: '12%' }}>OBJECTIVE:</h6>
                            <p style={{ width: '100%', marginTop: '10px' }}>"GAME GENIUS" - The objective for this project was to be part of a team that would build out a full stack web application. Our task was to use react, express, sequelize, and postgres to build this product.</p>
                        </CardText>
                        <CardText style={{ color: "black", display: 'flex', paddingTop: '0px', paddingBottom: '0px' }}>
                            <h6 style={{ width: '15%', marginRight: '0', marginTop: '12px' }}>LANGUAGES USED:</h6>
                            <img src="https://img.icons8.com/color/96/000000/html-5.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
                            <img src="https://img.icons8.com/color/96/000000/css3.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
                            {/* <img src="https://img.icons8.com/color/96/000000/javascript.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img> */}
                            <img src="https://img.icons8.com/color/96/000000/react-native.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
                            {/* <img src="https://img.icons8.com/color/96/000000/bootstrap.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img> */}
                            <img src="https://img.icons8.com/color/96/000000/nodejs.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
                            <img src="https://img.icons8.com/color/96/000000/postgreesql.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
                            {/* <img src="https://img.icons8.com/color/96/000000/ruby-programming-language.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img> */}

                        </CardText>
                        <CardActions border>
                            <Button colored href={"https://git.generalassemb.ly/nobinary/gamegenius"}>GitHub</Button>
                            <Button colored href={"http://shiny-cream.surge.sh/"}>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                    {/* Project 2 */}
                    <Card shadow={5} style={{ width: '100%', height: '80vh', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '60vh', background: 'url(https://user-images.githubusercontent.com/55757934/74069112-5adf6500-49cb-11ea-92d0-2ca92958151d.png) center / cover' }}></CardTitle>
                        
                    <CardText style={{ color: "black", display: 'flex', paddingBottom: '0px', paddingTop: '0px' }}>
                            <h6 style={{ width: '12%' }}>OBJECTIVE:</h6>
                            <p style={{ width: '100%', marginTop: '10px' }}>"Nathans Farm" - The objective for this project was to be part of a team that would build out a single page website using React. Our task was to build out the website using the specifications and designs that were provided to us by the UX Designers.</p>
                        </CardText>
                        <CardText style={{ color: "black", display: 'flex', paddingTop: '0px', paddingBottom: '0px' }}>
                            <h6 style={{ width: '15%', marginRight: '0', marginTop: '12px' }}>LANGUAGES USED:</h6>
                            <img src="https://img.icons8.com/color/96/000000/html-5.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
                            <img src="https://img.icons8.com/color/96/000000/css3.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
                            {/* <img src="https://img.icons8.com/color/96/000000/javascript.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img> */}
                            <img src="https://img.icons8.com/color/96/000000/react-native.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
                            <img src="https://img.icons8.com/color/96/000000/bootstrap.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
                            {/* <img src="https://img.icons8.com/color/96/000000/nodejs.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img> */}
                            <img src="https://img.icons8.com/color/96/000000/postgreesql.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>
                            <img src="https://img.icons8.com/color/96/000000/ruby-programming-language.png" style={{ height: '3rem', marginLeft: '10px', marginRight: '10px', marginTop: '0', marginBottom: '0' }}></img>

                        </CardText>
                        <CardActions border>
                            <Button colored href={"https://github.com/tk9285/nathan_frontend"}>GitHub</Button>
                            <Button colored href={"https://nathans-farm.netlify.com/"}>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>)
        }
    }
    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Project 1</Tab>
                    <Tab>Project 2</Tab>
                    <Tab>Project 3</Tab>
                    <Tab>Project 4</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}






// class Projects extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { activeTab: 0 };
//     }

//     toggleCategories() {

//         if (this.state.activeTab === 0) {
//             return (
//                 <div className="projects-grid">

//                     {/* Project 1 */}
//                     <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
//                         <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #1</CardTitle>
//                         <CardText>
//                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
//                         </CardText>
//                         <CardActions border>
//                             <Button colored>GitHub</Button>
//                             <Button colored>CodePen</Button>
//                             <Button colored>Live Demo</Button>
//                         </CardActions>
//                         <CardMenu style={{ color: '#fff' }}>
//                             <IconButton name="share" />
//                         </CardMenu>
//                     </Card>

//                     {/* Project 2 */}
//                     <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
//                         <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #2</CardTitle>
//                         <CardText>
//                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
//             </CardText>
//                         <CardActions border>
//                             <Button colored>GitHub</Button>
//                             <Button colored>CodePen</Button>
//                             <Button colored>Live Demo</Button>
//                         </CardActions>
//                         <CardMenu style={{ color: '#fff' }}>
//                             <IconButton name="share" />
//                         </CardMenu>
//                     </Card>
//                     {/* Project 3 */}
//                     <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
//                         <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #3</CardTitle>
//                         <CardText>
//                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
//             </CardText>
//                         <CardActions border>
//                             <Button colored>GitHub</Button>
//                             <Button colored>CodePen</Button>
//                             <Button colored>Live Demo</Button>
//                         </CardActions>
//                         <CardMenu style={{ color: '#fff' }}>
//                             <IconButton name="share" />
//                         </CardMenu>
//                     </Card>
//                 </div>
//             )
//         } else if (this.state.activeTab === 1) {
//             return (
//                 <div><h1>This is Angular</h1></div>
//             )
//         } else if (this.state.activeTab === 2) {
//             return (
//                 <div><h1>This is VueJS</h1></div>
//             )
//         } else if (this.state.activeTab === 3) {
//             return (
//                 <div><h1>This is MongoDB</h1></div>
//             )
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
//                     <Tab>React</Tab>
//                     <Tab>Angular</Tab>
//                     <Tab>VueJS</Tab>
//                     <Tab>MongoDB</Tab>
//                 </Tabs>
//                 <Grid>
//                     <Cell col={12}>
//                         <div className="content">{this.toggleCategories()}</div>
//                     </Cell>
//                 </Grid>
//             </div>
//         )
//     }
// }







export default Projects;
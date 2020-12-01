import React from 'react';
import './App.css';
import img1 from '../src/img/reactjsImg.png'
import img2 from '../src/img/vsCodeImg.jpg'
import img3 from '../src/img/materialUIImg.png'
import img4 from '../src/img/bootstrapImg.jpg'
import img5 from '../src/img/mongoDBImg.png'
import {Card} from 'react-bootstrap';
import {Grid,CardActionArea,CardContent} from '@material-ui/core';

function About(){
    return (
        <div className='container'>            
            <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                    <Card className='box2' style={{marginTop:"50px", padding:"30px"}}>
                                <div className='aboutTopic'>React JS</div>
                        
                                <img src={img1} alt="logo" width="100%" style={{marginTop:"20px"}}/>
                            
                            
                                
                                <p style={{textAlign:'justify'}}>React (also known as React.js or ReactJS) is an open-source, front end, 
                                    JavaScript library for building user interfaces or UI components. It is 
                                    maintained by Facebook and a community of individual developers and companies.
                                    React can be used as a base in the development of single-page or mobile 
                                    applications. However, React is only concerned with rendering data to the DOM,
                                     and so creating React applications usually requires the use of additional
                                      libraries for state management and routing. Redux and React Router are
                                       respective examples of such libraries.</p>
                            
                    </Card>
                    <Card className='box2' style={{ padding:"30px"}}>
                                <div className='aboutTopic'>Material UI</div>
                        
                                <img src={img3} alt="logo" width="100%" height="300px" style={{marginTop:"20px"}}/>
                            
                            
                                
                                <p style={{textAlign:'justify'}}>Material Design (codenamed Quantum Paper) is a design 
                                language that Google developed in 2014. Expanding on the "card" motifs that debuted in 
                                Google Now, Material Design uses more grid-based layouts, responsive animations and 
                                transitions, padding, and depth effects such as lighting and shadows. Google announced 
                                Material Design on June 25, 2014, at the 2014 Google I/O conference.</p>
                            
                            
                    </Card>
                    <Card className='box2' style={{ padding:"30px"}}>
                                <div className='aboutTopic'>MongoDB</div>
                        
                                <img src={img5} alt="logo" width="100%" height="300px" style={{marginTop:"20px"}}/>
                            
                            
                                
                                <p style={{textAlign:'justify'}}>MongoDB is a cross-platform document-oriented database 
                                program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with
                                 optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server
                                  Side Public License (SSPL).</p>
                            
                            
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                <Card className='box2' style={{ padding:"30px", marginTop:"50px"}}>
                                <div className='aboutTopic'>Visual Studio</div>
                        
                                <img src={img2} alt="logo" width="100%" height="300px" style={{marginTop:"20px"}}/>
                            
                            
                                
                                <p style={{textAlign:'justify'}}>Visual Studio Code is a free source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git. Users can change the theme, keyboard shortcuts, preferences, and install extensions that add additional functionality.</p>

                                <p style={{textAlign:'justify'}}>Microsoft has released Visual Studio Code's source code on the VSCode repository of GitHub.com, under the permissive MIT License, while the compiled binaries are freeware</p>

                                <p style={{textAlign:'justify'}}>In the Stack Overflow 2019 Developer Survey, Visual Studio Code was ranked the most popular developer environment tool, with 50.7% of 87,317 respondents reporting that they use it.</p>
                            
                            
                            
                    </Card>
                    <Card className='box2' style={{ padding:"30px"}}>
                                <div className='aboutTopic'>Bootstrap</div>
                        
                                <img src={img4} alt="logo" width="100%" height="300px" style={{marginTop:"20px"}}/>
                            
                            
                                
                                <p style={{textAlign:'justify'}}>Bootstrap is a free and open-source CSS framework 
                                directed at responsive, mobile-first front-end web development. It contains CSS- and 
                                (optionally) JavaScript-based design templates for typography, forms, buttons, 
                                navigation, and other interface components.</p>

                                <p style={{textAlign:'justify'}}>Bootstrap is the seventh-most-starred project on 
                                GitHub, with more than 142,000 stars, behind freeCodeCamp (almost 312,000 stars) and 
                                marginally behind Vue.js framework.</p>
                            
                            
                    </Card>
                           
                </Grid>
            </Grid>
        </div>
        
    )
}
export default About;
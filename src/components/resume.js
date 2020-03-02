import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import './cv.jpg';

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src={require('./cv.jpg')}
                                alt= "avatar"
                                style={{height:'350px', width: '350px' }}
                            />
                        </div>
                        <h2 style={{paddingTop: '.1em'}}> Sujan Pokharel</h2>
                        <h4 style={{color: 'black'}}>Software Developer</h4>
                        <hr style={{borderTop: '3px solid #e22947', width: '100%'}}/>
                        <h2>Skills</h2>   
                            <Skills 
                                
                                skill="JavaScript"
                                progress={85}
                                />   
                                <Skills 
                                    skill="ReactJS"
                                    progress={80}
                                    /> 
                                    <Skills 
                                    skill="Redux"
                                    progress={75}
                                    /> 
                                    <Skills 
                                        skill="Node/Express"
                                        progress={75}
                                        />
                                        <Skills 
                                            skill="Python/django"
                                            progress={65}
                                            />

                                            <Skills 
                                                skill="HTML/CSS"
                                                progress={95}
                                                /> 
                                                <Skills
                                                    skill = "Docker"
                                                    progress = {65}
                                                    />
                                                    <Skills
                                                    skill = "Git"
                                                    progress = {75}
                                                    />
                                                    <Skills
                                                    skill = "MS-Tools"
                                                    progress = {85}
                                                    />
                        
                    </Cell>
                    <Cell className="resume-right-col"col={8}>
                        <h2>Education</h2>
                            <Education 
                                degreeEducation = "Bachelor's of Engineering in Information Technology"
                                schoolName = "Turku University of Applied Sciences, Finland"
                                startYear= {<p style ={{fontSize: 'large'}}> {2015} </p>}
                                endYear = {<p style ={{fontSize: 'large'}}>Present (Final Year of Degree)</p>}
                            
                                schoolDescription = "Web Application and services, software Architecture, Object Oriented Programming, Networking, Embedded software programming"                          
                                />
                            <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Experience</h2>         
                            <Experience
                            jobName= "Intern / theFirma"
                            startYear = {<p style ={{fontSize: 'large'}}>February  2019 </p>} endYear ={<p style ={{fontSize: 'large'}}>September 2019</p>}
                            jobPlace = "TUAS"
                            jobDescription = "Web Development using React and Firebase, Project Analysis for `Lunch Marathon` project, use of Illustrator, Agile Scrum working method, Use of Trello and Jira, deployment of web app"

                            />  
                            <Experience
                            jobName= "Automation Testing Environment"
                            startYear = {<p style ={{fontSize: 'large'}}> ICT Capstone 2019</p>}
                            jobPlace = "TUAS"
                            jobDescription = "Backend php code base testing with phpUnit, Use of Jenkins for CI server, Know-how of automated testing environment, Understanding of different testing tools.  "

                                />   

                                <Experience
                                jobName= "Microsoft Technical Associate (MTA)"
                                startYear = {<p style ={{fontSize: 'large'}}>Certifications</p>}
                                jobDescription = "Software Development Fundamentals (98-363), Database Fundamentals (98-365), Operating System Fundamentals (98-349), security Fundamentals (98-367)"
    
                                    />

                                <Experience
                                jobName= "IT related Stuffs"
                                startYear = {<p style ={{fontSize: 'large'}}> Home Projects</p>}
                                jobPlace = "Home"
                                jobDescription = "Personal Projects with use of various technologies; mostly about the web development and Technological Stuffs.  "
    
                                    /> 

                    </Cell>
                    

                </Grid>
            </div>
        )
    }
}

export default Resume; 


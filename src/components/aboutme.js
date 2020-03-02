import React, { Component } from 'react';
import './cv.jpg';

class About extends Component {
  render() {
    return(
      <div class="back">
            <img
            src= {require('./cv.jpg')}
            alt="cv"
            style={{height:'350px', width: '350px'}}
            className="center"
            />
            <p className="aboutme-paragraph"> An independent, self-motivated Information Technology enthusiast and web-developer with leadership skills.
            Skills include knowledge in different web technologies, computer networking, analytical thinking and creative Proficient in
            HTML, CSS, CSS GRID, JavaScript, React, Redux, Node, Express, Python, MongoDB, SQL, Docker, GIT, Rest API, Firebase.
            </p>
      </div>
    )
  }
}

export default About;

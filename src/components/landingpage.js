import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'
import './cv.jpg';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
            src={require('./cv.jpg')}
            alt="cv"
            className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full-Stack Developer</h1>
            <hr/>

          <p>HTML/CSS | JavaScript | ReactJS | Redux | NodeJS | Express | MongoDB | Python | Git | Docker   </p>

        <div className="social-links">
         {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/sujan-pokharel" rel="noopener noreferrer" target="_blank">
        <i className="fa fa-linkedin-square" aria-hidden="true" />
        </a>

         {/* Github */}
         <a href="https://github.com/codeater7" rel="noopener noreferrer" target="_blank">
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

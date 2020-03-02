import React, {Component} from 'react';
import  {Grid, Cell, List, ListItem, ListItemContent   } from 'react-mdl';
import './cv.jpg';

class Contact extends Component {
    render() {
      return(
        <div className="contact-body">
          <Grid className="contacts-grid">
            <Cell col={6}>
              <h2>Sujan Pokharel</h2>
              <img
                src={require('./cv.jpg')}
                alt="avatar"
                style={{height: '250px'}}
                />
                <hr></hr>
               <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I am currently looking for a full-time Job as a Web developer. 
               If you have anything related, I will love to explore the opportunities.
              Please do contact me!</p>
              
              <br /> 
              <p>THANK YOU FOR VISITING!!</p>
  
            </Cell>
            <Cell col={6}>
              <h2>Contact Me</h2>
               <hr className="hr-2"/>
  
              <div className="contact-list">
                <List>
                  
                  
                  <ListItem>
                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Raleway'}}>
                      <i className="fa fa-phone-square" aria-hidden="true"/>
                      (358) 451752774
                    </ListItemContent>
                  </ListItem>

  
                  <ListItem>
                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Raleway'}}>
                      <i className="fa fa-envelope" aria-hidden="true"/>
                      Pokharelsujan134@gmail.com
                    </ListItemContent>
                  </ListItem>
  
                  <ListItem>
                        <ListItemContent style={{fontSize: '25px', fontFamily:'Raleway'}}>
                        <i className="fa fa-github-square" aria-hidden="true"/><a href="https://github.com/codeater7" rel="noopener noreferrer" target="_blank">
                        Github</a>
                    </ListItemContent>
                  </ListItem>
                    <ListItem>
                        <ListItemContent style={{fontSize: '25px', fontFamily:'Raleway'}}>
                        <i className="fa fa-linkedin-square" aria-hidden="true"/><a href="https://www.linkedin.com/in/sujan-pokharel/>" rel="noopener noreferrer" target="_blank">
                        LinkedIn</a>
                    </ListItemContent>
                    </ListItem>
  
  
                </List>
              </div>
            </Cell>
          </Grid>
        </div>
      )
    }
  }
  
  export default Contact;
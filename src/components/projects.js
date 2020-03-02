import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{height: '176px', background: 'url(https://res.cloudinary.com/dzzbql7sj/image/upload/v1583153693/Screen_Shot_2020-03-02_at_2.53.30_PM_w8febo.png) center / cover'}} >Full-stack web app</CardTitle>
            <CardText className="text-used">
              This is a full-stack web app developed using MERN-stack. Where user can login using their gmail and they can fill a survey and a auto generrated mail is sent back to the user after the survey is filled.
            </CardText>
            <CardActions border className="button-bootstrap">
              <a href = "https://github.com/codeater7/Survey" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
              <a href = "https://ancient-hamlet-34656.herokuapp.com/" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
            <div className="Tech-used">Technologies used: React, Redux, MongoDB, Node, Express. </div>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{height: '170px',background: 'url(https://res.cloudinary.com/dzzbql7sj/image/upload/v1583146569/Django_oh60nv.png) center / cover'}}>Python-Django project</CardTitle>
            <CardText>
              This a polling app created using python-django. 
            </CardText>
            <CardActions border className="button-bootstrap" >
              <a href ="https://github.com/codeater7/Django-polling-App" rel="noopener noreferrer" target="_blank"> <Button colored>GitHub</Button> </a>            
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
            <div className="Tech-used">Technologies used: Python/Django. </div>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}} >Mini Youtube</CardTitle>
            <CardText>
              Fetching Youtube API to create this app. 
            </CardText>
            <CardActions border className="button-bootstrap">
              <a href ="https://github.com/codeater7/Mini-Youtube"rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
            <div className="Tech-used">Technologies used: React, Redux. </div>
          </Card>

          {/* Project 4 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Github API</CardTitle>
            <CardText>
              Fetching GitHub API using React. If the user pass in the users github name it displays github repos with the image linked with their mail. 
            </CardText>
            <CardActions border className="button-bootstrap">
              <a href ="https://github.com/codeater7/Github-api-with-React"rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
            <div className="Tech-used">Technologies used: React, Redux. </div>
          </Card>

          {/* Project 5 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Implementing Docker</CardTitle>
            <CardText>
              Implementing Docker to the project.  
            </CardText>
            <CardActions border className="button-bootstrap">
              <a href ="https://github.com/codeater7/DockerImageUpload"rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
            <div className="Tech-used">Technologies used: React, Redux, MongoDB, Node, Express, Docker. </div>
          </Card>

           {/* Project 6 */}
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Finding Baby-names</CardTitle>
           <CardText>
             Using ReactJS to find inspiration for baby names.
           </CardText>
           <CardActions border className="button-bootstrap">
             <a href ="https://github.com/codeater7/Baby-names"rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
             <Button colored>Live Demo</Button>
           </CardActions>
           <CardMenu style={{color: '#fff'}}>
             <IconButton name="share" />
           </CardMenu>
           <div className="Tech-used">Technologies used: React, Redux </div>
         </Card>

         {/* Project 7 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
         <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React to-do</CardTitle>
         <CardText>
           ReactJS to do app. 
         </CardText>
         <CardActions border className="button-bootstrap">
           <a href ="https://github.com/codeater7/React-todo"rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
           <Button colored>Live Demo</Button>
         </CardActions>
         <CardMenu style={{color: '#fff'}}>
           <IconButton name="share" />
         </CardMenu>
         <div className="Tech-used">Technologies used: ReactJS. </div>
       </Card>


        
        </div>


      )
    }
  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Projects Using different technologies</Tab>
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

export default Projects;

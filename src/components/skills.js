import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      <Grid>
        <Cell col={3}>
        <p style={{display: 'flex', paddingTop: '0'}}>{this.props.skill} </p> 
        </Cell>
        <Cell col={7}>
        <ProgressBar style={{marginTop: '1px', width: '100%', margin: '0 15px', color: 'linear-gradient(to right, #0f3443, #34e89e)'}} progress={this.props.progress} /> 
        </Cell>
      </Grid>
      /*<Grid>
        <Cell col={3}>
        style={{display: 'flex'}}>{this.props.skill} </> 
        </Cell>
        <Cell col={8}>
        <div><ProgressBar style={{marginTop: '0px', width: '75%', margin: '0 15px'}} progress={this.props.progress} /> </div>
        </Cell>
      </Grid>*/
      
    )
  }
}

export default Skills;

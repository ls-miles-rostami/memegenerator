import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/index.css'
import {Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

import MemeItem from './MemeItem'
import MyMemes from './MyMemes'


class App extends Component {
  constructor(){
    super()

    this.state = {
      memeLimit: 10,
      text0: '',
      text1: ''
    }
  }


  render(){
    return(
      <div>
        <h2><u>Welcome to the Meme Generator</u></h2>
        <MyMemes />
        <h4><i>Write some text</i></h4>
        <Form inline>
          <FormGroup>
            <ControlLabel>Top</ControlLabel>
            <FormControl
              type='text'
              onChange={(event) => this.setState({text0: event.target.value})}
            ></FormControl>
          {' '}
          </FormGroup>
          <FormGroup>
            <ControlLabel>Bottom</ControlLabel>
            {' '}
            <FormControl
              type='text'
              onChange={(event) => this.setState({text1: event.target.value})}
              ></FormControl>
          </FormGroup>
        </Form>
        {/*Here we are going to slice before we map because we want only the first 10,
           we will than add a button allowing the user to load 10 more. We will use the state to make this happen  */}
        {
          this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
            return (
              <MemeItem
                meme={meme}
                key={index}
                text0={this.state.text0}
                text1={this.state.text1}
                />
            )
          })
        }
        <div
          onClick={() => this.setState({memeLimit: this.state.memeLimit + 10})}
          className='meme-button'>
          Load 10 more memes...
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps,null)(App)

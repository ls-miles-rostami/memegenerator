import React, {Component} from 'react';
import {createMeme} from '../actions';
import {connect} from 'react-redux';


class MemeItem extends Component{
  constructor(){
    super()

    this.state = {
      hovered: false
    }
  }

  postMeme(){
    console.log(this.props)
    const {text0, text1} = this.props
    const memeObj = {
      template_id: this.props.meme.id,
      text0,
      text1
    }
    this.props.createMeme(memeObj)
  }

  render(){
    return (
      <div
        className='meme-item'
        onMouseEnter={() => this.setState({hovered: true})}
        onMouseLeave={() => this.setState({hovered: false})}
        onClick={() => this.postMeme()}
        >
        {/* using turnary expressions to give the className some custom css depending on the state*/}
        <img
          src={this.props.meme.url}
          alt={this.props.meme.name}
          className={this.state.hovered ? 'meme-img darken-img' : 'meme-img'}
        />
        {/* using turnary expressions to give the className some custom css depending on the state*/}
      <p className={this.state.hovered ? 'meme-txt' : 'no-txt'}>
          {this.props.meme.name}
        </p>
      </div>
    )
  }
}


export default connect(null, {createMeme})(MemeItem)

import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class Header extends Component {
  back = () => {
    this.props.history.goBack()
  }
  forward = () => {
    this.props.history.goForward()
  }
  render() {
    return (
      <div className="page-header">
       <h2>React Router Demo</h2>
        &nbsp;<button onClick={this.back}>εθΏ</button>
        &nbsp;<button onClick={this.forward}>ει</button>
      </div>
    )
  }
}

export default withRouter(Header)
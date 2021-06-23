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
        &nbsp;<button onClick={this.back}>前进</button>
        &nbsp;<button onClick={this.forward}>后退</button>
      </div>
    )
  }
}

export default withRouter(Header)
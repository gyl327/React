import React, {Component} from 'react'
import {Route,Link} from 'react-router-dom'

import Detail from "./Detail"

export default class Message extends Component {
  state = {
    messageArr:[
      {id:'01',title:'Message001'},
      {id:'03',title:'Message003'},
      {id:'06',title:'Message006'}
    ]
  }
  render() {
    const {messageArr} = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map((msgObj) => {
              return (
                <li key={msgObj.id}>
                  <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <hr/>
        <Route path="/home/message/detail/:id/:title" component={Detail}/>
      </div>
    )
  }
}
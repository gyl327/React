import React, {Component} from 'react'

import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/count_action'

import {connect} from 'react-redux'

class Count extends Component {

  increment = () => {
    const {value} =this.selectNumber
    this.props.jia(value*1)
  }

  decrement = () => {
    const {value} =this.selectNumber
    this.props.jian(value*1)
  }

  incrementIfOdd = () => {
    const {value} =this.selectNumber
    if (this.props.count % 2 !== 0){
      this.props.jia(value*1)
    }
  }

  incrementAsync = () => {
    const {value} =this.selectNumber
    this.props.jiaAsyns(value*1,500)
  }

  render() {
    return (
      <div>
        <h2>当前求和为：{this.props.count}</h2>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}

export default connect(
  state => ({count:state}),
  {
    jia:createIncrementAction,
    jian:createDecrementAction,
    jiaAsyns:createIncrementAsyncAction,
  }
)(Count)

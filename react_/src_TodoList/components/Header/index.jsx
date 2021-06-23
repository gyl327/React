import React, {Component} from 'react'
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'

import './index.css'

export default class Header extends Component {

  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }

  handleKeyUp = (event) => {
    const {keyCode, target} = event

    //判断回车
    if (keyCode !== 13) return
    if (target.value.trim() === ''){
      alert('输入不能为空')
      return
    }
    const todoObj = {id:nanoid(),name:target.value,done:false}
    this.props.addTodo(todoObj)

    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}
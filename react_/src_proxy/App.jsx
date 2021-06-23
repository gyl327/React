import React, {Component} from 'react'
import axios from 'axios'

export default class App extends Component {

  getStudentData = () => {
    axios.get('http://localhost:3000/api1/students').then(
      (response) => {
        console.log(response.data)
      },(error) => {
        console.log(error)
      }
     )
  }

  getCarsData = () => {
    axios.get('http://localhost:3000/api2/cars').then(
      (response) => {
        console.log(response.data)
      },(error) => {
        console.log(error)
      }
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我发送请求</button>
        <button onClick={this.getCarsData}>点我发送汽车请求</button>
      </div>
    )
  }
}
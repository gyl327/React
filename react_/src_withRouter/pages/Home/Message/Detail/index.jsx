import React, {Component} from 'react'

const DetailData = [
  {id:'01',content:'我爱你，中国'},
  {id:'03',content:'我爱你，中国33'},
  {id:'06',content:'我爱你，中国6666'}
]

export default class Detail extends Component {

  render() {
    console.log(this.props)
    const {id,title} = this.props.match.params
    const findResult = DetailData.find((detailObj) => {
      return detailObj.id === id
    })
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    )
  }
}
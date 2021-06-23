import React, {Component} from 'react'
import qs from 'querystring'

const DetailData = [
  {id:'01',content:'我爱你，中国'},
  {id:'03',content:'我爱你，中国33'},
  {id:'06',content:'我爱你，中国6666'}
]

export default class Detail extends Component {

  render() {
    console.log(this.props)

    const {search} = this.props.location
    const {id,title} = qs.parse(search.slice(1))

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
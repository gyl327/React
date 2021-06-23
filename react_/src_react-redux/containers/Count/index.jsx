import CountUI from '../../components/Count'
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'

import {connect} from 'react-redux'

//返回值传递 状态
function mapStateToProps(state) {
  return {count:state}
}

//返回值传递 操作状态的方法
function mapDispatchToProps(dispatch) {
  return {jia:(number) => {
    dispatch(createIncrementAction(number))
  },jian:(number) => {
    dispatch(createDecrementAction(number))
  },jiaAsyns:(number,time) => {
    dispatch(createIncrementAsyncAction(number,time))
  }}
}

export default connect(mapStateToProps,mapDispatchToProps)(CountUI)

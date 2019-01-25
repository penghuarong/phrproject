import React,{Component} from 'react';
import { connect } from 'dva';
const mapStateToprops = (state)=>{
  const example = state.example;
  console.log(state,124)
  return {
    ...example
  }
}
@connect(mapStateToprops)
class list extends Component{
  render(){
    return (
      <div>
        list
      </div>
    );
  }
}
export default list;
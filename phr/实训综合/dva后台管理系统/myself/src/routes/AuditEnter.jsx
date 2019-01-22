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
class AuditEnter extends Component{
  render(){
    return (
      <div>
        用户认证
      </div>
    );
  }
}
export default AuditEnter;
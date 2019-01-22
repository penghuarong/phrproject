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
class productList extends Component{
  render(){
    return (
      <div>
        产品也
      </div>
    );
  }
}
export default productList;
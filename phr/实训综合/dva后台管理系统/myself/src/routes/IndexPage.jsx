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
class IndexPage extends Component{
  render(){
    return (
      <div>
       商品添加
      </div>
    );
  }
}
export default IndexPage;
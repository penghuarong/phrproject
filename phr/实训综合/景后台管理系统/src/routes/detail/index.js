import React from 'react'
import { getDetail } from '../../services/aidoulist'
import { withRouter } from 'dva/router'
import styles from './style.css'
import Echarts from './components/echarts'
@withRouter
class Detail extends React.Component {
  constructor() {
    super()
    this.state = {
      detailData: {},
      firstechart: {},
      secondechart: {}
    }
  }
  componentDidMount () {
    this.getDetailData()
  }
  getDetailData () {
    const id = this.props.match.params.id
    getDetail(id).then((res) => {
      const ydata = Object.values(res.data.data.sale).map((item) => item.count)
      this.setState({
        detailData: res.data.data,
        firstechart: {
          title: {text: '商品销量'},
          xAxis: {
            data: Object.keys(res.data.data.sale)
          },
          yAxis: {},
            series: [{
              name: '销量',
              type: 'bar',
              data: ydata
          }]
        },
        secondechart: {
          title: {text: '评分概览'},
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: 100,
            show: false
          },
          toolbox: {
            show: true,
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            show: false,
            type: 'value',
            name: 'Days',
            axisLabel: {
              formatter: '{value}'
            }
          },
          yAxis: [{
            type: 'category',
            inverse: true,
            data: Object.keys(res.data.data.evaluate)
          }],
          series: {
            type: 'bar',
            data: Object.values(res.data.data.evaluate)
          }
        }
      }, () => {
        this.refs.describe.innerHTML = this.state.detailData.details ? this.state.detailData.details: ''
      })
    })
  }
  render () {
    const { detailData, firstechart, secondechart } = this.state
    return (
      <div>
        <div className={styles.productTit}>
          <img src={detailData.img} alt=""/>
          <h2>{detailData.name}</h2>
        </div>
        {
          Object.keys(firstechart).length ? <Echarts firstechart={firstechart} secondechart={secondechart}></Echarts>:<span>das</span>
        }
        <div className={styles.describe} ref="describe"></div>
      </div>
    )
  }
}
export default Detail

import React from 'react'
import PropTypes from 'prop-types'
import styles from '../style.css'
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
class Echarts extends React.Component {
  static propTypes = {
    firstechart: PropTypes.object,
    secondechart: PropTypes.object
  }
  constructor() {
    super()
  }
  componentDidMount () {
    const myChart = echarts.init(document.getElementById('main'))
    const secondEchart = echarts.init(document.getElementById('second'))
    myChart.setOption(this.props.firstechart)
    secondEchart.setOption(this.props.secondechart)
  }
  render () {
    return (
      <div className={styles.echartBox}>
        <div id="main" style={{ width: 400, height: 400 }}></div>
        <div id="second" style={{ width: 400, height: 400 }}></div>
      </div>
    )
  }
}
export default Echarts
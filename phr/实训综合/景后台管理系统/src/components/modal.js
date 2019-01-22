import React from 'react'
import { Modal, Input  } from 'antd'
import PropTypes from 'prop-types'
import styles from './modal.css'
class ShowModal extends React.Component {
  static proptypes = {
    visible: PropTypes.bool,
    formData: PropTypes.object
  }
  handleCancel = () => {
    console.log(this)
    this.props.handleCancel()
  }
  handleOk = () => {
    this.props.handleOk()
  }
  nameChange = (e) => {
    this.props.changeName(e.target.value)
  }
  changeEmail = (e) => {
    this.props.changeEmail(e.target.value)
  }
  changewebsit = (e) => {
    this.props.changewebsit(e.target.value)
  }
  render () {
    const { visible, name, email, webskit } = this.props
    return (
      <Modal
      title="Basic Modal"
      visible={visible}
      onOk={this.handleOk}
      onCancel={this.handleCancel}
    >
     <div className={styles.iptBox}><label htmlFor="name">Name:</label><Input id="name" value={name} onChange={this.nameChange}/></div>
     <div className={styles.iptBox}><label htmlFor="email">Email:</label><Input id="name" value={email} onChange={this.changeEmail}/></div>
     <div className={styles.iptBox}><label htmlFor="webskit">Webskit:</label><Input id="name" value={webskit} onChange={this.changewebsit}/></div>
    </Modal>
    )
  }
}

export default ShowModal

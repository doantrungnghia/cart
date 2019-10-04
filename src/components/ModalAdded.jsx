import React from 'react'
import { Modal, ModalBody } from 'reactstrap'

export default class ModalAdded extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalStatus: false
    }
  }

  componentWillReceiveProps(props) {
    if (props.modalStatus === true) {
      this.setState({
        modalStatus: true
      })
    }

    setTimeout(() => {
      this.setState({
        modalStatus: false
      })
    }, 900)
  }

  render() {
    const { modalStatus } = this.state
    return (
      <Modal isOpen={modalStatus} className={this.props.className}>
        <ModalBody>
          <div className='success-checkmark'>
            <div className='check-icon'>
              <span className='icon-line line-tip'></span>
              <span className='icon-line line-long'></span>
              <div className='icon-circle'></div>
              <div className='icon-fix'></div>
            </div>
          </div>
          <h4 className='text-center'>You added succesfully</h4>
        </ModalBody>
      </Modal>
    )
  }
}

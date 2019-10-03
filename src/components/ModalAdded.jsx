import React from 'react'
import { Modal, ModalBody } from 'reactstrap'

export default class ModalAdeded extends React.Component {
  render() {
    return (
      <Modal isOpen={this.props.modalStatus} className={this.props.className}>
        <ModalBody>
          <div className='success-checkmark'>
            <div className='check-icon'>
              <span className='icon-line line-tip'></span>
              <span className='icon-line line-long'></span>
              <div className='icon-circle'></div>
              <div className='icon-fix'></div>
            </div>
          </div>
          <h4>You added succesfully</h4>
        </ModalBody>
      </Modal>
    )
  }
}

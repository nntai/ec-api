import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '280px',
    minHeight: '200px',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
};

Modal.setAppElement('#layout-main');

export default class ReactModal extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
    contentStyle: PropTypes.objectOf(PropTypes.any),
  };

  static defaultProps = {
    label: 'Modal',
    contentStyle: {},
  };

  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // TODO: code something
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { children, label, contentStyle } = this.props;
    const lastestStype = {
      ...customStyles,
      content: { ...customStyles.content, ...contentStyle },
    };
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={lastestStype}
          contentLabel={label}
        >
          {children}
        </Modal>
      </div>
    );
  }
}

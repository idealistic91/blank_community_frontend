import React, { useEffect, useState } from "react";
import BootstrapModal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useMediaQuery } from 'react-responsive';


class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: this.props.isOpen
        }
    }

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });
    
    render() {
        if(this.props.screenWidth > 500){
            return(
                <>
                    <BootstrapModal show={this.state.isOpen} onHide={this.closeModal} variant='dark'>
                        <BootstrapModal.Header closeButton>
                            <BootstrapModal.Title>{this.props.title}</BootstrapModal.Title>
                        </BootstrapModal.Header>
                        <BootstrapModal.Body>
                            {this.props.children}
                        </BootstrapModal.Body>
                        <BootstrapModal.Footer>
                        <Button variant="secondary" onClick={this.closeModal}>
                            Close
                        </Button>
                            {this.props.buttons}
                        </BootstrapModal.Footer>
                    </BootstrapModal>
                </>
            )
        } else {
            return(this.props.children)
        }
        
    }
}

export default Modal;
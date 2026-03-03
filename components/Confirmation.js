import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const Confirmation = (props) => {
    return (
        <>
            <Modal
                show={props.showConfirm}
                onHide={props.setShowConfirm}
                backdrop="static"
            >
                <Modal.Header>
                    <Modal.Title>{props.heading}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.content}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.toggleConfirm}>
                        {props.secondaryButton}
                    </Button>
                    <Button variant="primary" onClick={props.clickConfirm}>
                        {props.primaryButton}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

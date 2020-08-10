import React, {useState} from 'react';
import Modal from "../../components/UI/Modal/Modal";
import ModalButton from "../../components/ModalButton/ModalButton";
import Alert from "../../components/UI/Alert/Alert";
import Button from "../../components/UI/Button/Button";

const DemoProject = () => {

    const [modalShow, setModalShow] = useState(false);

    const modalShowHandler = () => {
        setModalShow(true);
    };

    const DANGER = 'danger';
    const WARNING = 'warning';
    const SUCCESS = 'success';
    const PRIMARY = 'primary';

    const closed = () => {
        setModalShow(false);
    };

    const [showDangerAlert, setShowDangerAlert] = useState(true);
    const [showWarningAlert, setShowWarningAlert] = useState(true);
    const [showSuccessAlert, setShowSuccessAlert] = useState(true);
    const [showPrimaryAlert, setShowPrimaryAlert] = useState(true);

    const someHandler = (type) => {
        switch (type){
            case DANGER:
                setShowDangerAlert(false)
                break;
            case WARNING:
                setShowWarningAlert(false)
                break;
            case SUCCESS:
                setShowSuccessAlert(false)
                break;
            case PRIMARY:
                setShowPrimaryAlert(false)
                break;
            default:
                break;
        }
    }


    const continued = () => {
        window.alert('You clicked continue')
    }

    const buttonConfiguration = [
        {type: 'primary', label: 'Continue', clicked: continued},
        {type: 'danger', label: 'Close', clicked: closed}
    ]

    let buttonConfig = buttonConfiguration.map((buttons, index) => {
            return (
                <Button
                    key={index}
                    type={buttons.type}
                    label={buttons.label}
                    clicked={buttons.clicked}>
                </Button>
            )
        }
    );

    return (
        <>
            <Modal
                show={modalShow}
                closed={closed}
                title="Some kinda modal title"
            >
                <p>This is modal content</p>
                {buttonConfig}
            </Modal>
            <ModalButton clicked={modalShowHandler}>Open Modal</ModalButton>

            <Alert show={showWarningAlert} clickDismissable type={WARNING} dismiss={() => someHandler(WARNING)}
            >This is a {WARNING} type alert</Alert>

            <Alert show={showDangerAlert} type={DANGER} dismiss={() => someHandler(DANGER)}
            >This is a {DANGER} type alert</Alert>

            <Alert show={showPrimaryAlert} clickDismissable type={PRIMARY} dismiss={() => someHandler(PRIMARY)}
            >This is a {PRIMARY} type alert</Alert>

            <Alert show={showSuccessAlert} type={SUCCESS} dismiss={() => someHandler(SUCCESS)}
            >This is a {SUCCESS} type alert</Alert>
        </>
    );
};


export default DemoProject;
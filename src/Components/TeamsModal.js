import Modal from "react-modal";
import { useState } from "react";
import Button from "./Button";
import { GrFormClose } from "react-icons/gr";
import "./TeamsModal.css";
import Tasks from "./Tasks";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        padding: "0px",
    },
};

Modal.setAppElement("#root");

export default function TeamsModal(props) {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {}

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <Button className="add-team" click={openModal}>
                Dodaj timove
            </Button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="team-modal"
            >
                <Tasks />
            </Modal>
        </div>
    );
}

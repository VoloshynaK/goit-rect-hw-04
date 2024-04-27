import Modal from 'react-modal'
import css from './ImageModal.module.css'
Modal.setAppElement('#root');

export default function ImageModal ({isModalOpen, closeModal, imageInfo}) {
    
   

    return (
        <Modal 
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel='Modal window with larger image'
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            preventScroll={true}
            overlayClassName={css.modalOverlay}
            className={css.modalContent}
            bodyOpenClassName={css.modalOpen}
        >
            <img src={imageInfo.url} alt={imageInfo.alt} className={css.modalImg}/>   
        </Modal>
    )
}
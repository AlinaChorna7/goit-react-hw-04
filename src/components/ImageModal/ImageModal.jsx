import Modal from 'react-modal';
import styles from './ImageModal.module.css'

export default function ImageModal({image, onClose}){
    return(
        <Modal isOpen={!!image} onRequestClose={onClose}>
            <div>
                <img src={image.largeImageURL} alt={image.tags} />
                <button onClick={onClose}>Close</button>
            </div>
        </Modal>
    )
}
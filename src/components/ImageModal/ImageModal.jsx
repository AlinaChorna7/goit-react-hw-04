import React from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

const ImageModal = ({ image, onClose }) => {
  // Додаткова перевірка на наявність даних у об'єкті
  const imageUrl = image && image.urls ? image.urls.full : '';
  const altDescription = image && image.alt_description ? image.alt_description : 'Image';

  return (
    <Modal isOpen={!!image} onRequestClose={onClose} className={styles.ImageModal} overlayClassName="Overlay" ariaHideApp={false}>
      <button className={styles.ImageModalcloseButton} onClick={onClose}>
        Close
      </button>
      {/* Додаткова перевірка перед рендером зображення */}
      {image ? <img src={imageUrl} alt={altDescription} className={styles.modalImage} /> : <p>Loading image...</p>}
    </Modal>
  );
};

export default ImageModal;

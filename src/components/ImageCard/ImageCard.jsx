import React from 'react';
import styles from './ImageCard.module.css';

function ImageCard({ image, onClick }) {
  return (
    <div className={styles.ImageCard} >
      <img src={image.urls.small} alt={image.alt_description} onClick={onClick} className={styles.image} />
    </div>
  );
}

export default ImageCard;

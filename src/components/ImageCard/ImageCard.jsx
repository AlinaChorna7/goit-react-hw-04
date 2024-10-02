import React from 'react';
import styles from './ImageCard.module.css';

function ImageCard({ image, onClick }) {
  return (
    <div className={styles.ImageCard} onClick={onClick}>
      <img src={image.urls.small} alt={image.alt_description} className={styles.image} />
    </div>
  );
}

export default ImageCard;

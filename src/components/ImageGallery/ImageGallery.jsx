import React from 'react';
import  styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={styles.ImageGallery}>
      {images.map((image) => (
        <li key={image.id} className={styles.ImageGalleryItem}>
          
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
}

import styles from './ImageCard.module.css'

export default function ImageCard({ image }) {
    return (
      <div>
        <img src={image.webformatURL} alt={image.tags} />
      </div>
    );
  }
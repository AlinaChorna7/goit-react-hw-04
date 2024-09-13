import styles from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard'

export default function({images, onImageClick}){
    return(
        <ul className="imageGallery">
            {images.map(image =>( <li key={image.id} onClick={() => onImageClick(image)}>
          <ImageCard image={image} />
        </li>))}

        </ul>
    )
}
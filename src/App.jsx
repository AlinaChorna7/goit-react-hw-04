
import React, { useState, useEffect, useSyncExternalStore } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';
import './App.css'

const API_KEY = '44764686-39d1ce2fa505d935edd12a03d'; // Заміни на свій ключ
const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}`;


export default function App() {
 
  


const [images, setImages] = useState([]);
const [query,setQuery] = useState('');
const [page, setPage] = useState(1);
const [isLoading, setIsLoading] = useState(false);
const [error, setError]=useState(null);
const[selectedImage, setSelectedImage]=useState(null);

useEffect(()=>{
  if(query === '') return;

  const fetchImages = async()=>{
    setIsLoading(true);
    setError(null)  

    try {
      const response = await axios.get(`${BASE_URL}&q=${query}&page=${page}&image_type=photo&per_page=12`);
      setImages(prevImages => [...prevImages, ...response.data.hits]);
    } catch (err) {
      setError('Something went wrong, please try again.')
    } finally{
setIsLoading(false)
    }
  };

  fetchImages()
},[query,page])
const handleSearchSubmit = newQuery =>{
  if(newQuery !== query){
    setImages([])
    setPage(1)
  }
  setQuery(newQuery)
}

const loadMore = () =>{
 setPage(prevPage => prevPage+1);
}

const handleImageClick = image =>{
  setSelectedImage(image)
}
const closeModal = ()=>{
  setSelectedImage(null)
};

return(
  <div>
  <SearchBar onSubmit={handleSearchSubmit} />
  {error && <ErrorMessage message={error} />}
  <ImageGallery images={images} onImageClick={handleImageClick} />
  {isLoading && <Loader />}
  {images.length > 0 && !isLoading && <LoadMoreBtn onClick={loadMore} />}
  {selectedImage && <ImageModal image={selectedImage} onClose={closeModal} />}
</div>
)



}
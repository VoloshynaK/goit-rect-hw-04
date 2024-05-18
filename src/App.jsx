import { useState} from 'react'
import { Toaster } from 'react-hot-toast';

import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import ImageModal from './components/ImageModal/ImageModal'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import Loader from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'

import fetchImages from './photos-api'


function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [imageInfo, setImageInfo] = useState({alt: '', url: ''});
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(false);

 
  const handleSearch = async (value) => {
    try {
      setImages([]);
      setPage(1);
      setIsVisible(true);
      const data = await fetchImages(value, page);
      setImages(data.results);
    } catch(error) {
      setError(true);
    } finally {
      setIsVisible(false);
    }
  }

  const handleLoadMore = async () => {
    
    try {
      setIsVisible(true);
      const nextPage = page + 1;
      const data = await fetchImages(query, nextPage);
      setImages([...images, ...data.results])
      setPage(nextPage);
    } catch (error) {
      setError(true);
    } finally {
      setIsVisible(false);
    }
  } 


  function openModal (alt, url) {
    setIsOpen(true);
    setImageInfo({alt, url})

  }
  function closeModal () {
    setIsOpen(false);
    setImageInfo({alt: '', url: ''})
  }

  
  return (
    <>
      <SearchBar handleSearch={handleSearch} setQuery={setQuery}/>
      <Toaster/>
      {error ? <ErrorMessage/> : <ImageGallery items={images} openModal={openModal}/>}
      {isVisible && <Loader isVisible={isVisible}/>}
      <ImageModal isModalOpen={isOpen} closeModal={closeModal} imageInfo={imageInfo}/>
      {images.length > 0 && <LoadMoreBtn handleLoadMore={handleLoadMore}/>}
      
    </>
  )
}

export default App


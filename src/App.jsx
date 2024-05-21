import { useState, useEffect} from 'react'
import { Toaster } from 'react-hot-toast';

import SearchBar from './components/SearchBar/SearchBar.jsx'
import ImageGallery from './components/ImageGallery/ImageGallery.jsx'
import ImageModal from './components/ImageModal/ImageModal.jsx'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.jsx'
import Loader from './components/Loader/Loader.jsx'
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx'

import fetchImages from './photos-api.js'


function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [imageInfo, setImageInfo] = useState({alt: '', url: ''});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!query) {return;}
    const getImages = async () => {
      try {
        setIsLoading(true);
        const data = await fetchImages(query, page);
        setImages((prevImg) => [...prevImg, ...data.results]);
      } catch(error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [query, page]);


  const handleSearch = (value) => {
    setImages([])
    setQuery(value);
    setPage(1);
  }

 
  

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
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
      {isLoading && <Loader isLoading={isLoading}/>}
      <ImageModal isModalOpen={isOpen} closeModal={closeModal} imageInfo={imageInfo}/>
      {images.length > 0 && <LoadMoreBtn handleLoadMore={handleLoadMore}/>}
      
    </>
  )
}

export default App


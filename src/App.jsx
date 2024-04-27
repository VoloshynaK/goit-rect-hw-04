import { useState} from 'react'
import { ColorRing } from 'react-loader-spinner'


import SearchBar from './Components/SearchBar/SearchBar'
import ImageGallery from './Components/ImageGallery/ImageGallery'
import ImageModal from './Components/ImageModal/ImageModal'
import LoadMoreBtn from './Components/LoadMoreBtn/LoadMoreBtn'

import fetchImages from './photos-api'


function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [imageInfo, setImageInfo] = useState({alt: '', url: ''});

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.elements.searchBar.value;
    setQuery(value);
    
    
    if(value.trim() === "") {
			alert("Please enter search term!")
			return;
		}
    handleSearch(value);
    form.reset();
  }

  const handleSearch = async (value) => {
    try {
      setImages([]);
      setPage(1)
      const data = await fetchImages(value, page);
      setImages(data.results);
    } catch(error) {
      console.log(error);
    }
  }

  const handleLoadMore = async () => {
    
    try {
      const nextPage = page + 1;
      const data = await fetchImages(query, nextPage);
      setImages([...images, ...data.results])
      setPage(nextPage);
    } catch (error) {
      console.log(error)
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
      <SearchBar handleSubmit={handleSubmit}/>
      <ImageGallery items={images} openModal={openModal}/>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
      <ImageModal isModalOpen={isOpen} closeModal={closeModal} imageInfo={imageInfo}/>
      <LoadMoreBtn handleLoadMore={handleLoadMore}/>
      
    </>
  )
}

export default App


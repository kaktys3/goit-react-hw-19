import Searchbar from './components/Searchbar/Searchbar.jsx'
import ImageGallery from './components/ImageGallery/ImageGallery.jsx'
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem.jsx'
import Modal from './components/Modal/Modal.jsx'
import MyLoader from './components/Loader/Loader.jsx'
import Button from './components/Button/Button.jsx'
import { useCallback, useEffect, useState, useMemo } from 'react'
import axios from 'axios'
import './App.css'

export default function App() {
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)
  const [perPage] = useState(12)
  const [modalImg, setModalImg] = useState('')
  const [filter, setFilter] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const url = useMemo(() => {
    if (!filter) return null

    return `https://pixabay.com/api/?key=54704699-3f81b1e0c8e2f8e619912e89c&q=${filter}&image_type=photo&orientation=horizontal&page=${page}&per_page=${perPage}`
  }, [filter, page, perPage])

  useEffect(() => {
    if (!url) return

    const fetchData = async () => {
      try {
        setIsLoading(true)

        const response = await axios.get(url)

        setImages(prev =>
          page === 1
            ? response.data.hits
            : [...prev, ...response.data.hits]
        )
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [url, page]) // 👈 додали page для ясності (не обовʼязково, але ок)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setModalImg('')
      }
    }

    window.addEventListener('keydown', handleKey)

    return () => {
      window.removeEventListener('keydown', handleKey)
    }
  }, [])

  const fnModalImg = (img) => {
    setModalImg(img)
  }

  const filterInfo = (info) => {
    setFilter(info)
    setPage(1)
  }

  const load = useCallback(() => {
    setPage(prev => prev + 1)
  }, [])

  return (
    <>
      <Searchbar infoFilter={filterInfo} filter={filter} />

      {isLoading && <MyLoader />}

      <ImageGallery>
        {images.map(e => (
          <ImageGalleryItem
            key={e.id}
            img={e.webformatURL}
            largeImg={e.largeImageURL}
            modalImg={fnModalImg}
          />
        ))}
      </ImageGallery>

      {images.length > 0 && !isLoading && (
        <Button load={load} />
      )}

      <Modal modalImg={modalImg} />
    </>
  )
}
import './ImageGalleryItem.css'

export default function ImageGalleryItem({ img, largeImg, modalImg }) {

    return (
        <>
            <li className="ImageGalleryItem">
                <img className='ImageGalleryItem-image' onClick={() => modalImg(largeImg)} src={img} alt="" />
            </li>
        </>
    )
}
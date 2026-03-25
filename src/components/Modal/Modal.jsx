import './Modal.css'

export default function Modal ({ modalImg }) {
    return (
        <>
            <div className="Overlay" style={modalImg.length > 0 ? { display: 'flex' } : { display: 'none' }}>
                <div className="Modal">
                    <img src={modalImg} alt="" />
                </div>
            </div>
        </>
    )
}



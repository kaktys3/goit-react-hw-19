import './Button.css'

export default function Button({ load, none }) {
    return (
        <>
            <div className='Button-Box' style={none != '' ? { display: 'flex' } : { display: 'none' }}>
                <button onClick={load} className='Button'>Load more</button>
            </div>
        </>

    )
}


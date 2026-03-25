import './Searchbar.css'
import { useState}  from 'react'
import React from 'react'

const Searchbar = ({infoFilter, filter}) => {
    const [isFilter, setFilter] = useState('')

    const handelSubmit = (e) => {
        e.preventDefault()
        infoFilter(isFilter)
    }

        return (
            <>
                <header className="Searchbar">
                    <form className="SearchForm" onSubmit={handelSubmit}>
                        <button type="submit" className=".SearchForm-button">
                            <span className="button-label">Search</span>
                        </button>

                        <input
                            className="SearchForm-input"
                            type="text"
                            autoComplete="off"
                            autofocus
                            placeholder="Search images and photos"
                            onChange={(e) => setFilter(e.target.value)}
                        />
                    </form>
                </header>
            </>
        )
    }

    export default React.memo(Searchbar)

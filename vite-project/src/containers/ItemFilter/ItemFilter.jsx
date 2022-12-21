import { useSelector } from 'react-redux'
import React from 'react'
import { Link } from 'react-router-dom'

const itemFilter = () => {
    return (
        <div>
            <button><Link to='/'>All</Link></button>
            <button><Link to='/man-clothing'>man</Link></button>
            <button><Link to='/jawelery'>jawelery</Link></button>
            <button>3</button>
            <button>4</button>
        </div>
    )
}

export default itemFilter
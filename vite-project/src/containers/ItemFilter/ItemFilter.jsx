import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ItemFilter.css'

const itemFilter = () => {

    const [active, setActive] = useState("itemFilter-btns");

    const handleClick = () => {
        if (active === "itemFilter-btns") {
            setActive("itemFilter-btns-2")
        } else {
            setActive("itemFilter-btns")
        }

    }


    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <div className='itemFilter'>

            <button className='itemFilter-menu' onClick={handleClick}><i className="fa-solid fa-bars">   filter</i></button>  
            <div className={active}>
                <Link to='/'><button onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}><i className="fa-solid fa-shop"> all</i></button></Link>
                <Link to='/man-clothing'><button onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}><i className="fa-sharp fa-solid fa-person">  man</i></button></Link>
                <Link to='/jawelery'><button onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}><i className="fa-solid fa-gem">  jawelery</i></button></Link>
                <Link to='/electronics'><button onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}><i className="fa-solid fa-mobile">  electronics</i></button></Link>
                <Link to='/women-clothing'><button onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}><i className="fa-sharp fa-solid fa-person-dress">  woman</i></button></Link>
            </div>




        </div>
    )
}

export default itemFilter
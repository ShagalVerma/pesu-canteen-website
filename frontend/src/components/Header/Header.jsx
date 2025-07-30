import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-contents'>
                <h2>Welcome to CampusChow</h2>
                <p>Enjoy the convenience of hot, fresh food without the hassle of long lines. Whether you're craving a steaming cup of coffee, a hearty meal, or a quick snack, CampusChow has you covered!</p>
                <button>View Menu</button>
            </div>
        </div>
    )
}

export default Header

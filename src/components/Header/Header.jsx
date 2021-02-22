import React from 'react';
import './Header.css';


const Header = ({ expandedHeader }) => {
    return (
        <div className="head-container">
            <img
                src=" https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                className={`head-image ${expandedHeader
                        ? 'head-image-expanded'
                        : 'head-image-contracted'
                    }`}
                alt="header"
            />
            <h1
                className={`head-text ${expandedHeader
                        ? 'head-text-expanded'
                        : 'head-text-contracted'
                    }`}
            >
                Name It!
            </h1>
        </div>
    );
};

export default Header;
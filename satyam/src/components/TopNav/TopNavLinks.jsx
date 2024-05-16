import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../NavBar/NavData';
import { IoIosArrowDown } from "react-icons/io";
import "../TopNav/TopNav.css";

const NavLinks = () => {
    const [isOpen, setIsOpen] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    const openDropdown = (id) => {
        setIsOpen(id);
        setIsHovered(id);
    };

    const closeDropdown = () => {
        setIsOpen(null);
        setIsHovered(false);
    };

    return (
        <ul className="flex flex-col ml-7  gap-8">
            {links.map((link) => (
                <li 
                    className='relative w-full' 
                    key={link.id} 
                    onMouseEnter={() => openDropdown(link.id)} 
                    onMouseLeave={closeDropdown}
                >
                    <a className='flex justify-between items-center font-medium  hover:text-[#FAA327] gap-2'>
                        {link.name} 
                        <span>
                            <IoIosArrowDown className={`text-lg mt-1 ${isHovered === link.id ? 'rotate-180' : ''}`} />
                        </span>
                    </a>
                    {isOpen === link.id && (
                        <div className="dropdown-container">
                            {link.sublinks.map((sublinkGroup) =>
                                sublinkGroup.sublink.map((sublink) => (
                                    <NavLink className='dropdown-link' key={sublink.id} to={sublink.link}>
                                        {sublink.name}
                                    </NavLink>
                                ))
                            )}
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;

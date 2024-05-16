import React, { useState } from 'react';
import { NavLink,Link } from 'react-router-dom';
import {links} from './NavData.jsx';
import { IoIosArrowDown } from "react-icons/io";


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

    return <>
        {links.map((link) => (
                    <li 
                        className='relative' 
                        key={link.id} 
                        onMouseEnter={() => openDropdown(link.id)} 
                        
                
                    >
                        <a className='flex gap-2 justify-center items-center font-[poppins] font-medium text-xl upparcase hover:text-[#FAA327]'>
                            {link.name} 
                            <span>
                                <IoIosArrowDown className={`text-lg mt-1 ${isHovered === link.id ? 'rotate-180' : ''}`} />
                            </span>
                        </a>

                        {isOpen === link.id && (
                            <div 
                                className="absolute top-9 left-0 mt-2 w-[230px] p-3 flex flex-col bg-[#E4D6A7] rounded-sm text-lg gap-2  text-red-800 z-50"
                                
                                onMouseLeave={() => closeDropdown(link.id)}
                            >
                                {link.sublinks.map((sublinkGroup) =>
                                    sublinkGroup.sublink.map((sublink) => (
                                        <NavLink className='hover:text-blue-600' key={sublink.id} to={sublink.link}>
                                            {sublink.name}
                                        </NavLink>
                                    ))
                                )}
                            </div>
                        )}
                    </li>
                ))}

    </>
}

export default NavLinks;

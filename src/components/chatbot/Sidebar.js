import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarDays,
    faClipboardList
  } from "@fortawesome/free-solid-svg-icons";

function Sidebar({ onSelect }) {
    

    return (
        <div className="bg-black  w-[25%] py-10 px-4">

            <div className='w-[70%] m-auto'>
            <h3 className="text-lg text-blue-400 font-semibold m-4">Call Audit</h3>
           
           <p className='text-white cursor-pointer hover:text-gray-400 m-2'>
           <FontAwesomeIcon icon={faClipboardList} className='mx-2' />
               Summary</p>
           <p className='text-white cursor-pointer hover:text-gray-400 m-2'>
           <FontAwesomeIcon icon={faCalendarDays} className='mx-2' />
               Data Score</p>
            </div>
            

            
        </div>
    );
}

export default Sidebar;

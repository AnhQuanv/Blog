import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import './MainContent.scss';
import ModalSearch from '../modal/ModalSearch';

const MainContent = () => {
    const [show, setShow] = useState(false);

    const handleClickSearch = () => {
        console.log('cehccece')
        setShow(!show);
    }

    return (
        <>
            <div className='main-content'>
                <div className='header-content'>
                    <div className='box-search'>
                        <span className='icon'><IoSearch /></span>
                        <input onClick={() => handleClickSearch()} className='search-bar' type='text' placeholder='Search' />
                    </div>

                    <div className='right-header'>
                        <div className='select-box'>
                            <span>VERSION</span>
                            <select class="select form-select" aria-label="Default select example">
                                <option selected>11.x</option>
                                <option value="1">10.x</option>
                                <option value="2">9.x</option>
                                <option value="3">8.x</option>
                            </select>
                        </div>
                        <div className='dark-mode'>
                            <MdLightMode />
                        </div>
                    </div>
                </div>
                <hr />
                <div className='body-content'>
                    <Outlet />
                </div>
            </div>
            <ModalSearch show={show} setShow={setShow} />
        </>

    )
}

export default MainContent

import React, { useState } from 'react';
import logomark from '../assets/logomark.min.svg';
import logotype from '../assets/logotype.min.svg';
import './SideBar.scss';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null); // Trạng thái lưu item được chọn

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item); // Cập nhật item được chọn
    };

    return (
        <div className='sidebar-container'>
            <div className='title'>
                <img src={logomark} alt='logo' />
                <img src={logotype} alt='logo' />
            </div>
            <div className='sidebar-item'>
                <div onClick={handleOpen} className='sidebar-title toggle-btn'>
                    <span>Prologue</span>
                </div>
                <div className={open ? 'sidebar-content active' : 'sidebar-content'}>
                    <div
                        className={selectedItem === 'ReleaseNotes' ? 'sidebar-subitem selected' : 'sidebar-subitem'}
                        onClick={() => handleItemClick('ReleaseNotes')}
                    >
                        <Link to='/'>Release Notes</Link>
                    </div>

                    <div
                        className={selectedItem === 'UpgradeGuide' ? 'sidebar-subitem selected' : 'sidebar-subitem'}
                        onClick={() => handleItemClick('UpgradeGuide')}
                    >
                        <Link to='/upgrade'>Upgrade Guide</Link>
                    </div>

                    <div
                        className={selectedItem === 'ContributionGuide' ? 'sidebar-subitem selected' : 'sidebar-subitem'}
                        onClick={() => handleItemClick('ContributionGuide')}
                    >
                        <Link to='/contributions'> Contribution Guide</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;

import Modal from 'react-bootstrap/Modal';
import { IoSearch } from "react-icons/io5";
import './ModalSearch.scss';
import { MdKeyboardReturn } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

function ModalSearch(props) {
    const { show, setShow } = props;

    const handleClose = () => setShow(false);

    return (
        <>


            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <div className='modal-search'>
                        <div className='box-search'>
                            <span><IoSearch /></span>
                            <input className='search' placeholder='Search docs' />
                        </div>
                        <div className='body-modal'>No recent searches</div>
                        <div className='footer-modal'>
                            <div className='left-footer'>
                                <div className='sub-footer'>
                                    <MdOutlineKeyboardArrowLeft />
                                    <span>to select</span>

                                </div>
                                <div className='sub-footer'>
                                    <MdOutlineKeyboardArrowDown />
                                    <MdOutlineKeyboardArrowUp />
                                    <span>to select</span>

                                </div>
                                <div className='sub-footer'>
                                    <MdOutlineKeyboardArrowRight />
                                    <span>to select</span>

                                </div>

                            </div>
                            <div className='right-footer'>
                                <span>Search by</span>
                                <MdKeyboardReturn />
                            </div>
                        </div>
                    </div>
                </Modal.Body>


            </Modal>
        </>
    );
}

export default ModalSearch;
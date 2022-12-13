import './index.css'
import Modal from "react-modal";
import img from "../../../assets/images/pd.png"
import cross from "../../../assets/images/cross.png"
import { useState } from "react";


export default function GainModal() {

    const [isOpen, setIsOpen] = useState(false);

    function toggleModal(state) {
        setIsOpen(state);
    }

    return (
        <div className="Moday_cont">
            <span onClick={() => toggleModal(true)}><img className='modal_link_image' src={img} alt="" /></span>
            <Modal
                isOpen={isOpen}
                onRequestClose={() => toggleModal(false)}
                contentLabel="My dialog"
                className="mymodal_5"
                overlayClassName="myoverlay"
                closeTimeoutMS={400}>
                <div className='cross_image' onClick={() => setIsOpen(false)}><img src={cross} alt="" /></div>
                <div className='gain_cnt'>
                    <h3 className='gain_heading'>How your equity gain is calculated </h3>
                    <p className='gain_para'>Your equity gain is estimated based on your share of the total value of the property. Since we want to share the wealth, we've discounted Milenium Haus properties, so that you realize an instant equity gain upon closing.</p>
                </div>
            </Modal>
        </div>
    );
}
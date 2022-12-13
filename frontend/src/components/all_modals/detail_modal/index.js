import './index.css'
import Modal from "react-modal";
import cross from "../../../assets/images/cross.png"
import img from "../../../assets/images/pd.png"

import { useState } from "react";


export default function DetailModal() {

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
                className="mymodal_2"
                overlayClassName="myoverlay"
                closeTimeoutMS={400}>
                <div className='cross_image' onClick={() => setIsOpen(false)}><img src={cross} alt="" /></div>
                <div className='detail_cnt'>
                    <h3 className='detail_heading'>How we priced this 1/4 share</h3>
                    <p className='detail_para'>We give our homes an additional  ADU, manage all aspects of LLC formation, and find qualified owners.</p>
                </div>
                <div className='detail_main'>
                    <div className='detail_wrapper'>
                        <div><h4>Purchase Price</h4><h5>Original home: $1,123,000</h5></div>
                        <div><span>$280,750</span></div>
                    </div>
                    <div className='detail_wrapper'>
                        <div><h4>ADU Addition, Taxes, and Closing</h4><h5>Construction, inspection, title & applicable taxes</h5></div>
                        <div><span>$90,000</span></div>
                    </div>
                    <div className='detail_wrapper'>
                        <div><h4>Milenium Haus Service Fee</h4><h5>Buyer aggregation & legal</h5></div>
                        <div><span>$37,075</span></div>
                    </div>
                    <div className='detail_wrapper'>
                        <div><h4>Total 1/4 Ownership</h4><h5>Whole property value: $1,631,300</h5></div>
                        <div><span>$407,825</span></div>
                    </div>
                    <div className='detail_wrapper'>
                        <div><h4>My Total Equity Gain on Closing</h4><h5>Estimated whole property value after closing: $2,021,400</h5></div>
                        <div><span>$97,525</span></div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
import './index.css'
import img from "../../../assets/images/pd.png"
import cross from "../../../assets/images/cross.png"
import Modal from "react-modal";
import { useState } from "react";


export default function ExpensesModal() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal(state) {
        setIsOpen(state);
    }

    return (
        <div className="Moday_cont">
            <span onClick={() => toggleModal(true)}><img  className='modal_link_image' src={img} alt="" /></span>
            <Modal
                isOpen={isOpen}
                onRequestClose={() => toggleModal(false)}
                contentLabel="My dialog"
                className="mymodal_4"
                overlayClassName="myoverlay"
                closeTimeoutMS={400}>
                <div className='cross_image' onClick={() => setIsOpen(false)}><img src={cross} alt="" /></div>
                <div className='expenses_cnt'>
                    <h3 className='expenses_heading'>Estimated Monthly Owner Expenses</h3>
                    <p className='expenses_para'>Milenium Haus owners share home operating expenses pro rata, and expenses are passed along monthly at cost. At closing, owners pay 6 months of home expenses upfront to fund initial operating costs.</p>
                </div>
                <div className='expenses_main'>
                    <div className='expenses_wrapper'>
                        <div><h4>Property Taxes & Fees</h4></div>
                        <div><span>$438</span></div>
                    </div>
                    <div className='expenses_wrapper'>
                        <div><h4>Program Management Fee(i)</h4></div>
                        <div><span>$104</span></div>
                    </div>
                </div>
                <p className='last_p'>(i) Fixed $104 monthly fee for LLC oversight, technology and owner support.</p>
            </Modal>
        </div>
    );
}
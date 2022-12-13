import './index.css'
import Modal from "react-modal";
import { useState } from "react";
import img from "../../../assets/images/pd.png"
import cross from "../../../assets/images/cross.png"
import { HashLink } from 'react-router-hash-link';


export default function InstallmentModal() {

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
                className="mymodal_3"
                overlayClassName="myoverlay"
                closeTimeoutMS={400}>
                <div className='cross_image' onClick={() => setIsOpen(false)}><img src={cross} alt="" /></div>
                <h3 className='installment_heading'>Estimated Monthly Installments</h3>
                <p className='installment_para'>Estimated financing installments for 1/4 ownership are based on a 5% down payment, estimated 4.99% interest rate and 30-year financing period. Actual installments are contingent on down payment and loan terms. A 1% loan origination fee is due at closing.</p>
                <HashLink smooth className='installment_btn' to='/contact'>Contact us</HashLink>
            </Modal>
        </div>
    );
}
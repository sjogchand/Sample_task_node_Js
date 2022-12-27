import Theme_Buttom from "../../general_components/button"
import "./index.css"
import { useState, useRef } from 'react'
import SpecialModal from "../../all_modals/icontact_from";


export default function Chance() {

    const [isError, setIsError] = useState(false);
    const [email, setEmail] = useState('');

    const [success, setSuccess] = useState(false);
    const refEmail = useRef(null);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (refEmail.current.value == '') {
            setIsError(true)
        }

        else {
            setIsError(false)
            setSuccess(true)
        }

    }

    return (
        <div className="theme_container">
            <div className="Chance_container">
                <div className="chance_content">
                    <h1>Don't miss your chance</h1>
                    <p>Now's the time to get your instant equity increase with your Milenium Haus ADU. With new legislation, markets will soon be bought up by corporations</p>
                </div>
                <div className="inputs_container">
                    <div className="email_input">
                        {
                            isError ?
                                <p className='error_msg'>Please fill all required fields.</p>
                                :
                                null
                        }
                        <input type="email" required ref={refEmail} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email*" />
                    </div>
                    <div className="radio_button">
                        <p>I am a</p>
                        <div className="radio_wrapper">
                            <span className="dd_conte">
                                <input
                                    className=""
                                    type="radio"
                                    name="category"
                                    id="tic"
                                    value='TIC Co-ownership Buyer'
                                    required
                                    defaultChecked
                                />
                                <label className="" htmlFor="tic">
                                First time home buyer
                                </label>
                            </span>
                            <span className="dd_conte">
                                <input
                                    className=""
                                    type="radio"
                                    name="category"
                                    id="Investor"
                                    value='Investor'
                                    required
                                />
                                <label className="" htmlFor="Investor">
                                SFR Investor
                                </label>
                            </span>
                            <span className="dd_conte">
                                <input
                                    className=""
                                    type="radio"
                                    name="category"
                                    id="Agent"
                                    value='Agent/Broker'
                                    required
                                />
                                <label className="" htmlFor="Agent">
                                    Agent/Broker
                                </label>
                            </span>
                        </div>
                    </div>


                    <div className="agree_wrapper">
                        <input type="checkbox" readOnly defaultChecked name="agree" id="agree" /> <label htmlFor="">  I give Milenium Haus permission to contact me & agree to the <a href="">Term and Conditions.</a></label>
                    </div>
                    <div className='gs_btn'>
                        <button onClick={onSubmitHandler}>Submit</button>
                    </div>
                    {
                        success ?
                            <SpecialModal />
                            :
                            null
                    }
                </div>
            </div>
        </div>

    )
}
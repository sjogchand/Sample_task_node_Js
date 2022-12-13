import './index.css'
import Theme_Button from '../../general_components/button'
import { useState, useRef } from 'react'
import SpecialModal from '../../all_modals/icontact_from';
export default function Get_Started({ pt, pb }) {

    const [isError, setIsError] = useState(false);
    const [success, setSuccess] = useState(false);

    const emailRef = useRef(null);
    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const locationRef = useRef(null);
    const permissionRef = useRef(null);
    const refArr = [nameRef, emailRef, phoneRef, locationRef, permissionRef]


    const onSubmitHandler = (event) => {
        event.preventDefault();

        var ok = false;
        refArr.every(v => {

            if (v.current.value == '') {
                setIsError(true)
                ok = false;
                return false
            }
            else {
                setIsError(false)
                ok = true;
                return true
            }
        })
        if (ok) {
            setSuccess(true)
        }
        return ok

    }

    const onBlurHandler = (refInput) => {

        if (refInput.current?.value === "") {
            refInput.current.className = 'empty_field'
        }
        else {

            refInput.current.className = ''
        }
    }

    return (
        <div className='theme_container'>
            <div style={{ paddingTop: pt, paddingBottom: pb }} className='get_started_container'>
                <h2>Get Started</h2>
                <h1>Find your Milenium Haus</h1>

                <p className='starting_p'>Take the next step to owning more property than you ever thought possible in your current stage of life. We're excited to help you build prosperity and share the wealth. We're here to support you all the way to make it happen.</p>

                <div className='get_started_inputs'>
                    {
                        isError ?
                            <p className='error_msg'>Please fill all required fields.</p>
                            :
                            null
                    }
                    <form action="">
                        <div className='get_started_inputs_row'>
                            <div>
                                <input type={'text'} ref={nameRef} onBlur={onBlurHandler.bind(this, nameRef)} placeholder='Full Name*' required />
                            </div>
                            <div>
                                <input ref={emailRef} type="Email" onBlur={onBlurHandler.bind(this, emailRef)} placeholder='Email*' required />
                            </div>
                        </div>

                        <div className='get_started_inputs_row'>
                            <div>
                                <input ref={phoneRef} onBlur={onBlurHandler.bind(this, phoneRef)} type={'text'} placeholder='Phone*' required />
                            </div>
                            <div>
                                <input ref={locationRef} onBlur={onBlurHandler.bind(this, locationRef)} type="text" placeholder='Ideal Location*' required />
                            </div>
                        </div>

                        <div className='get_started_checkbox_row'>
                            <input ref={permissionRef} onBlur={onBlurHandler.bind(this, permissionRef)} defaultChecked readOnly type="checkbox" name="permission" required id="checkbox" /> <label>I give Milenium Haus permission to contact me & agree to the <a href="">Term and Conditions.</a></label>
                        </div>

                        <div className='gs_btn'>
                            <button onClick={onSubmitHandler}>Submit</button>
                        </div>
                    </form>
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
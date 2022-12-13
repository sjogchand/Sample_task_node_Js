import "./index.css"
import Theme_Buttom from '../general_components/button';

export default function Tic_Cover() {
    return (
        <div className='tic_ownership_container theme_container'>
            <h1>TIC Co-ownership</h1>
            <p>Get answers to common questions about TIC Co-ownership.</p>
            <div className="tic_button">
                <Theme_Buttom text={"Contact us"} />
            </div>
        </div>
    )
}
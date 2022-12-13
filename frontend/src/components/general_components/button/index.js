import { HashLink } from 'react-router-hash-link'
import './index.css'
export default function Theme_Buttom({ text,to }) {
    return <div> <HashLink smooth to={to} className='theme_button'>{text} </HashLink></div>
}
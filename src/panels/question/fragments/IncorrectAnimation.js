import React from 'react';
import s from './Animation.module.css';


class IncorrectAnimation extends React.Component {
    render() {
        return (

            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2" height="70">
                <circle className={s.path_circle} fill="#F44336" stroke="#FFFFFF" strokeWidth="0" strokeMiterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
                <line className={s.path_line} fill="none" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" strokeMiterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3"/>
                <line className={s.path_line} fill="none" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" strokeMiterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2"/>
            </svg>
        )
    }
}

export default IncorrectAnimation;
import React from 'react';

import './Button.style.scss';

function Button({children, isGoogleSignIn, ...otherProps}){
    return (
            <button className={`${isGoogleSignIn? 'google-signin': ''} custom-button`}   {...otherProps}>{children}</button>
    )
}

export default Button;
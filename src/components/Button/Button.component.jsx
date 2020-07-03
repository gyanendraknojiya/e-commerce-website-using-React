import React from 'react';

import './Button.style.scss';

function Button({children, isGoogleSignIn,inverted, ...otherProps}){
    return (
            <button className={`${inverted? 'inverted': ''} ${isGoogleSignIn? 'google-signin': ''} custom-button`}   {...otherProps}>{children}</button>
    )
}

export default Button;
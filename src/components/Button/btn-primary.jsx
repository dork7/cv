import React from 'react'
import './btn-primary.styles.css'
const BtnPrimary = ({ title, ...rest }) => {
    return (
        <button className="ui-btn" {...rest}>
            <span>
                {title}
            </span>
        </button>
    )
}

export default BtnPrimary
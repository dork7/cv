import React from 'react'
import './btn-primary.styles.css'
const BtnPrimary = ({ title }) => {
    return (
        <button className="ui-btn">
            <span>
                {title}
            </span>
        </button>
    )
}

export default BtnPrimary
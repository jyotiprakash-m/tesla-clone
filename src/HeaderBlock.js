import React from 'react'
import "./HeaderBlock.css"

function HeaderBlock() {
    return (
        <div className="headerBlock">
            <div className="headerBlock__info">
                <div className="headerBlock__infoText">
                    <h1>Model 3</h1>
                    <h4>Order Online For <span>Touch Less Deliver</span></h4>
                </div>
                <div className="headerBlock__actions">
                    <button className="headerBlock_buttonPrimary">Custom Oder</button>
                    <button className="headerBlock_buttonSecondary">Existing Inventory</button>
                </div>
            </div>
        </div>
    )
}

export default HeaderBlock

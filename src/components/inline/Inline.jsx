import React, { useState } from "react";

function Inline() {
    const [btnState, getBtnState] = useState('')

    const handleClick = (initiate) => {
        getBtnState(initiate)
    }
    return (
        <div id="Inline">
            <h1 style={{
                color: btnState == 'Yes' ? 'green' : (btnState == 'No') ? 'red' : 'white'
            }}>CSS is great!</h1>
            <menu>
                <li>
                    <button onClick={() => handleClick('Yes')}>Yes</button>
                </li>
                <li>
                    <button onClick={() => handleClick('No')}>No</button>
                </li>
            </menu>
        </div>
    );
}

export default Inline;

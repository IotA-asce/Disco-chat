import React from 'react'
import './styles/InputSection.css'

const InputSection = () => {
    return (
        <div className="input-section">
            {/* <button>em</button>  // emoji pending*/}
            <input type="text" className="input-text" />
            <div className="send-buttons">
                <button className="circle-btn" id="send">send</button>
                <button className="circle-btn" id="record-voice">voice</button>
            </div>
        </div>
    )
}

export default InputSection

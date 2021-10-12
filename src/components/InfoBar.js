import React from 'react'
import './styles/infobar.css'

const InfoBar = () => {

    let countMembers = 0;
    let countSailing = 10
    let countMods = 1;

    return (
        <div className="info-bar">
            <div className="logo">
                
            </div>
            <div className="info-metrics">
                <p>{countMembers} members</p>
                <p>{countSailing} sailing</p>
                <p>{countMods} moderators</p>
            </div>
            <div className="slider-btn">
               
            </div>
        </div>
    )
}

export default InfoBar

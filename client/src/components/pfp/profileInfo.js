import React from 'react';

import XPImage from '../../assets/images/XP.png';
import '../../assets/styles/pfCard.css'



export default function ProfileInfo({ playerData }) {
    const pName = playerData.name
    const pLvl = playerData.expLevel
    const pTag = playerData.tag
    const pRole = playerData.role

    let roleLabel;
    switch (pRole) {
        case "admin":
            roleLabel = "Elder";
            break;
        case "coLeader":
            roleLabel = "Co-leader";
            break;
        case "leader":
            roleLabel = "Leader";
            break;
        default:
            roleLabel = "Member";
    }

    return (
        <div className="profile-info-container">
            <div className="icon-container">
                <img src={XPImage} alt="Experience Points Icon" className="xp-icon" />
                <h3 className="level-text">{pLvl}</h3>
            </div>

            <div className="player-info">
                <h2>{pName}</h2>
                <h2>{pTag}</h2>
                <h2>{roleLabel}</h2>
            </div>
        </div>
    )
}
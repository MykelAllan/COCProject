import React from 'react';

import '../../assets/styles/pfCard.css'


export default function ProfileClan({ playerData }) {
    const clanName = playerData.clan.name
    const badgeUrls = playerData.clan.badgeUrls.medium


    return (
        <div className="profile-clan-container">
            <h3 className="clan-text">{clanName}</h3>
            <img src={badgeUrls} className="clan-icon-name"/>


        </div>
    )
}
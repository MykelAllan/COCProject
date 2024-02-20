import React from 'react';
import ProfileInfo from './pfp/profileInfo'
import ProfileClan from './pfp/profileClan'
import ProfileLeague from './pfp/profileLeague'

import '../assets/styles/pfCard.css'

export default function PlayerProfile({ playerData }) {
    return (
        <div className="pfp-profile">
            <ProfileInfo playerData={playerData} />
            <ProfileClan playerData={playerData} />
            <ProfileLeague playerData={playerData} />
        </div>
    )
}
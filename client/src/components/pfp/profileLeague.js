import React from 'react';

import '../../assets/styles/pfCard.css'


export default function ProfileLeague({ playerData }) {
    const leagueName = playerData.league.name
    const leagueUrl = playerData.league.iconUrls.small
    const leagueTrophies = playerData.trophies


    return (
        <div className="profile-league-container">
            <div className="profile-league-current-container">
                <img src={leagueUrl} className="league-icon-current" />
                <div className="current-stats-container">
                    <h3 className="league-text">{leagueName}</h3>
                    <h4 className="league-text-trophies">{leagueTrophies}</h4>
                </div>
            </div>




        </div>
    )
}
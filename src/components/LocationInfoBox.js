import React from 'react'

export const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Event Location Information</h2>
            <ul>
                <li>ID: <strong>{ info.id }</strong></li>
                <li>ID: <strong>{ info.title }</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox;
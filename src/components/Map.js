import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
import { useState } from 'react'

export const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map(event => {
        if (event.categories[0].id === 8) {
            return <LocationMarker lat={event.geometries[0].coordinates[1]} lng={event.geometries[0].coordinates[0]} 
                    onClick={() => setLocationInfo({ id: event.id, title: event.title })} />
        }
        return null
    })
    return (
        <div className="map">
            <GoogleMapReact
                // Google API Key (put in dotenv)
                bootstrapURLKeys={{ key: 'AIzaSyBiQLn2PO-2fsMdOS_hcVt72frCntKoxB0' }}
                defaultCenter={ center }
                defaultZoom ={ zoom }>
                    {markers}
            </GoogleMapReact>
            { locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map;
import React from 'react'
import {
  GoogleMap,
  useJsApiLoader,
  InfoWindow,
  Marker,
} from '@react-google-maps/api'
import Geocode from 'react-geocode'
import { Typography } from '@mui/material'
import { useState, useEffect } from 'react'

const containerStyle = {
  width: '490px',
  height: '100%',
}

const center = {
  lat: -3.745,
  lng: -38.523,
}

const MapContainer = (props) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBlikN5oylHaIzEazyYqi_xUrXrH3jF2hs',
  })

  Geocode.setApiKey('AIzaSyBlikN5oylHaIzEazyYqi_xUrXrH3jF2hs')

  let [latitude, setLatitude] = useState(false)
  let [longitude, setLongitude] = useState(false)
  let [marker, setMarker] = useState({})

  useEffect(() => {
    if (props.address !== '') {
      let address = props?.address?.split(',')
      let location = address[0]
      let city = address[1]
      let state = address[2]
      state = state?.split(' ')[1]
      let zip = state?.split(' ')[2]

      Geocode.fromAddress(
        location + ', ' + city + ', ' + state + ' ' + zip + ', USA',
      ).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location
          setMarker({
            id: 1,
            name: (
              <>
                <Typography style={{ fontSize: '18px', fontWeight: '700' }}>
                  {props.address}
                </Typography>
                <Typography style={{ fontSize: '12px', fontWeight: '100' }}>
                  {location + ', ' + city + ', ' + state + ' ' + zip + ', USA'}
                </Typography>
              </>
            ),
            position: { lat: lat, lng: lng },
          })
          setLatitude(lat)
          setLongitude(lng)
        },
        (error) => {
          console.error(error)
        },
      )
    }
  }, [props])

  return isLoaded ? (
    <GoogleMap
      //   mapContainerStyle={containerStyle}
      //   center={center}
      //   zoom={2}
      //   onLoad={onLoad}
      //   onUnmount={onUnmount}
      //   onLoad={handleOnLoad}
      mapContainerStyle={{ width: '49vw', height: '68vh' }}
      zoom={14}
      center={{
        lat: latitude,
        lng: longitude,
      }}
      draggable={true}
      //   disableDefaultUI={true}
      //   mapTypeId="hybrid"
    >
      {marker && (
        <Marker
          key={marker['id']}
          position={marker['position']}
          //   onClick={() => handleActiveMarker()}
        >
          {/* {activeMarker && (
            <InfoWindow onCloseClick={() => setActiveMarker(false)} anchor={1}>
              <div>{marker['name']}</div>
            </InfoWindow>
          )} */}
        </Marker>
      )}
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  )
}

export default MapContainer

import React from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react'
import styled from 'styled-components'


const mapStyles = {
  height: '100%'
}

export const GoogleMap = (props) => {
  return (
   
      <Map 
      google={props.google}
      zoom={15}
      style={mapStyles}
      initialCenter={{
        lat: 41.728889,
        lng: -86.018902
      }}
      />
    
  )
}

const MapContainer = styled.div`
  height: 60vh;
  width: 300px;
  background: red;
`

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDTM4J0errR-_2jw24qqhRQlpaJcR8NBBk'
})(GoogleMap);


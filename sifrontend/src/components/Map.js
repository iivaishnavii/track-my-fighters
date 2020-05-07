import React,{useState} from 'react';
import {GoogleMap,withScriptjs,withGoogleMap,Marker, InfoWindow} from 'react-google-maps'
import * as parksData from "../data/sanjoselocations.json"
import mapStyles from "./mapStyles"
const WrappedMap = withScriptjs(withGoogleMap(MapComp))

function MapComp(){
  const  [selectedLocation, setSelectedLocation] = useState(null)
  return(
    <GoogleMap defaultZoom={10} defaultCenter={{lat:37.338207,lng:-121.886330}} defaultOptions={{styles:mapStyles}}>
      {parksData.features.map((park) => (

          <Marker key={park.properties.PARK_ID} position={{lat: park.geometry.coordinates[0],lng:park.geometry.coordinates[1]}}
          onClick={() => {
            setSelectedLocation(park)
            }
          }
          />
      ))}
      
     
      }
      />
      {selectedLocation && (
        <InfoWindow
        position={{lat: selectedLocation.geometry.coordinates[0],lng:selectedLocation.geometry.coordinates[1]}}
        onCloseClick={() => {
          setSelectedLocation(null)
        }
        }
        >
          <div>
             <h2>{selectedLocation.properties.Name}</h2>
             <p>{selectedLocation.properties.Description}</p>
          </div>
          
        </InfoWindow>
      )}
    </GoogleMap>
  )
}
function Map() {

  return (
    <div style={{width : '100%', height : '100%'}}>
        
        <WrappedMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCw3PUt4Smi1VpUlU-84q9MEQICOzRp2Hs"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        />
    </div>
  );
}

export default Map;

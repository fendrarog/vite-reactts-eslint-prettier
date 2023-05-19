import React, { useState } from 'react';
import geoJson from '../../data/attractions.json';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGl, { Marker, Popup } from 'react-map-gl';
import { Link } from 'react-router-dom';

const accessToken =
  'pk.eyJ1Ijoic211c29sb3YiLCJhIjoiY2xobTJib2psMTgzNjNqcDEyNGlnbHo3bSJ9.abBvILy34RqG0sw4yYa8Tg';

export const MapTest1 = () => {
  const [viewState, setViewState] = useState({
    longitude: 42.0578,
    latitude: 44.2233,
    zoom: 10,
  });
  const [popupInfo, setPopupInfo] = useState<null | (typeof geoJson.features)[0]>(null);
  console.log(viewState);
  console.log(popupInfo);

  return (
    <ReactMapGl
      {...viewState}
      style={{ width: '100%', height: '733px' }}
      onMove={(evt) => setViewState(evt.viewState)}
      onRender={(event) => event.target.resize()}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={accessToken}
    >
      {geoJson.features.map((f, index) =>
        viewState.zoom < 9.5 && f.properties.scale !== 'extra' ? null : viewState.zoom <
          8 ? null : (
          <Marker
            key={index}
            longitude={f.geometry.coordinates[0]}
            latitude={f.geometry.coordinates[1]}
            anchor="top"
            onClick={(e) => {
              // If we let the click event propagates to the map, it will immediately close the popup
              // with `closeOnClick: true`
              e.originalEvent.stopPropagation();
              setPopupInfo(f);
            }}
            style={{ color: '00fcff' }}
          />
        ),
      )}

      {popupInfo && (
        <Popup
          anchor="bottom"
          longitude={Number(popupInfo.geometry.coordinates[0])}
          latitude={Number(popupInfo.geometry.coordinates[1])}
          closeButton={false}
          onClose={() => setPopupInfo(null)}
          offset={15}
          style={{ backgroundColor: '#FFE9D3', opacity: 0.9 }}
        >
          <div style={{ backgroundColor: '#FFE9D3' }}>
            <Link to={`/place/${popupInfo.properties.name}`} style={{ color: 'gray' }}>
              <div
                style={{ fontWeight: 'bold', lineHeight: '14px', marginBottom: '10px' }}
              >
                {popupInfo.properties.name}
              </div>
              <div style={{ lineHeight: '14px' }}>{popupInfo.properties.description}</div>
            </Link>
          </div>
        </Popup>
      )}
    </ReactMapGl>
  );
};

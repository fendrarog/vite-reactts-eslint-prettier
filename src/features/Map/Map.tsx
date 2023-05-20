import * as React from 'react';
import { useRef } from 'react';
import ReactMapGl, { Source, Layer, LayerProps, Popup } from 'react-map-gl';
import geoJson from '../../data/attractions.json';

import type { MapRef } from 'react-map-gl';
import type { GeoJSONSource } from 'react-map-gl';
import GeoJSON, {
  FeatureCollection,
  GeoJsonProperties,
  GeoJsonTypes,
  Geometry,
} from 'geojson';
import MapImage from './MapImage';
import { Link } from 'react-router-dom';

const MAPBOX_TOKEN =
  'pk.eyJ1Ijoic211c29sb3YiLCJhIjoiY2xobTJib2psMTgzNjNqcDEyNGlnbHo3bSJ9.abBvILy34RqG0sw4yYa8Tg'; // Set your mapbox token here

const layerStyleCircle: LayerProps = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-color': 'white',
    'circle-radius': {
      base: 1.75,
      stops: [
        [12, 2],
        [22, 180],
      ],
    },
    'circle-stroke-color': '#333333',
    'circle-stroke-width': 1,
  },
};

export const Map = () => {
  const [viewState, setViewState] = React.useState({
    longitude: 42.04666497287596,
    latitude: 44.22755897698616,
    zoom: 16,
  });

  const [popupInfo, setPopupInfo] = React.useState<null | GeoJsonProperties>(null);
  console.log(viewState);

  const layerStyleText: LayerProps = {
    id: 'foo',
    type: 'symbol',
    layout: {
      'icon-image': '01', // reference the image
      'icon-size': {
        base: 1.75,
        stops: [
          [12, 0.2],
          [22, 0.5],
        ],
      },
      'text-field': ['get', 'name'],
      'text-anchor': 'bottom',
      'text-offset': [0, -1.5],
    },
    paint: {
      'text-color': 'purple',
      'text-halo-color': '#fff',
      'text-halo-blur': 5,
      'text-halo-width': 2,
      'text-opacity': [
        'step',
        ['zoom'], //input 0
        ['match', ['get', 'scale'], 'extra', 1, 0], // output 0
        4.5,
        ['match', ['get', 'scale'], 'extra', 1, 'big', 0.7, 0],
        7,
        ['match', ['get', 'scale'], 'extra', 1, 'big', 0.7, 'medium', 0.4, 0], // input1, output1
        12,
        1, // etc etc
      ],
      'icon-opacity': [
        'step',
        ['zoom'], //input 0
        ['match', ['get', 'scale'], 'extra', 1, 0], // output 0
        4.5,
        ['match', ['get', 'scale'], 'extra', 1, 'big', 0.7, 0],
        7,
        ['match', ['get', 'scale'], 'extra', 1, 'big', 0.7, 'medium', 0.4, 0], // input1, output1
        12,
        1, // etc etc
      ],
    },
  };
  return (
    <>
      <ReactMapGl
        style={{ width: '100%', height: '733px' }}
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        interactiveLayerIds={['foo', 'point']}
        onRender={(event) => event.target.resize()}
        onClick={(evt) => {
          if (!evt.features) return;

          setPopupInfo(evt.features[0]);
          console.log(evt.features[0]);
        }}
        mapStyle="mapbox://styles/smusolov/clh3ek1fm00mz01pg0mze8jl2"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <MapImage />
        <Source
          id="my-data"
          type="geojson"
          data={geoJson as FeatureCollection<Geometry, GeoJsonProperties>}
        >
          <Layer {...layerStyleCircle} />
          <Layer {...layerStyleText} />
        </Source>
        {popupInfo && (
          <Popup
            anchor="bottom"
            longitude={Number(popupInfo.geometry.coordinates[0])}
            latitude={Number(popupInfo.geometry.coordinates[1])}
            closeButton={false}
            onClose={() => setPopupInfo(null)}
            offset={25}
            maxWidth="none"
            closeOnMove={true}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '4px',
                maxWidth: '260px',
              }}
            >
              <Link
                to={`/place/${popupInfo.properties.object_id}`}
                state={{ popupInfo }}
                style={{
                  flex: '1 1 100%',
                  display: 'flex',
                  padding: '7px',
                  gap: '4px',
                  backgroundColor: '#FFF',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  borderRadius: '8px',
                }}
              >
                <div>
                  <div style={{ borderRadius: '6px', overflow: 'hidden' }}>
                    <img src={'./images/testpopup.png'} alt="picplace" />
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'Montserrat',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      lineHeight: '15px',
                      color: '#565656',
                    }}
                  >
                    {popupInfo.properties.name}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Montserrat',
                      fontSize: '13px',
                      lineHeight: '16px',
                      color: '#248742',
                    }}
                  >{`Аттракция`}</div>
                  <div
                    style={{
                      fontFamily: 'Montserrat',
                      fontSize: '13px',
                      lineHeight: '16px',
                      color: '#248742',
                    }}
                  >{`Уникальное место`}</div>
                </div>
              </Link>
              <div
                style={{
                  padding: '14px 11px 11px',
                  backgroundColor: '#FFF',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img src={'./icons/redlike.svg'} alt="like" />
                </div>
              </div>
              <div
                style={{
                  flex: '1',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 0 7px 15px',
                  backgroundColor: '#FFF',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '3px',
                    borderRadius: '50%',
                    backgroundColor: '#248742',
                    width: '29px',
                    height: '29px',
                  }}
                >
                  <img src={'./icons/car.svg'} alt="route" />
                </div>
                <div
                  style={{
                    fontFamily: 'Montserrat',
                    fontWeight: '700',
                    fontSize: '13px',
                    lineHeight: '29px',
                    color: '#248742',
                  }}
                >
                  Добавить в маршрут
                </div>
              </div>
            </div>
          </Popup>
        )}
      </ReactMapGl>
      <div
        style={{
          position: 'absolute',
          bottom: '23px',
          left: '21px',
          fontWeight: '700',
          fontSize: '16px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          padding: '15px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <p>Широта: {viewState.latitude.toFixed(3)}</p>
        <p>Долгота: {viewState.longitude.toFixed(3)}</p>
        <p>Увеличение: {viewState.zoom.toFixed(1)}</p>
      </div>
    </>
  );
};

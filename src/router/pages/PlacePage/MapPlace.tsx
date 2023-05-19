import * as React from 'react';
import { useRef } from 'react';
import Map, { Source, Layer, LayerProps, Popup, Marker } from 'react-map-gl';
import geoJson from '../../../data/attractions.json';

import type { MapRef } from 'react-map-gl';
import type { GeoJSONSource } from 'react-map-gl';
import GeoJSON, {
  FeatureCollection,
  GeoJsonProperties,
  GeoJsonTypes,
  Geometry,
} from 'geojson';
import MapImage from '../../../features/Map/MapImage';
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
        [12, 3],
        [22, 180],
      ],
    },
    'circle-stroke-color': '#333333',
    'circle-stroke-width': 1,
  },
};
const layerStyleText: LayerProps = {
  id: 'foo',
  type: 'symbol',
  layout: {
    'text-field': ['match', ['get', 'name']],
    'text-anchor': 'bottom',
    'text-offset': [0, -2.5],
  },
  paint: {
    'text-color': 'purple',
    'text-halo-color': '#fff',
    'text-halo-blur': 5,
    'text-halo-width': 2,
  },
};

interface MapPlacePropsType {
  name: string;
  longitude: number;
  latitude: number;
  height: number;
}

export const MapPlace: React.FC<MapPlacePropsType> = ({
  name,
  longitude,
  latitude,
  height,
}) => {
  const [viewState, setViewState] = React.useState({
    longitude: longitude,
    latitude: latitude,
    zoom: 14,
  });

  return (
    <>
      <Map
        style={{ width: '100%', height: `${height}px` }}
        {...viewState}
        interactiveLayerIds={['foo', 'point']}
        onRender={(event) => event.target.resize()}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker longitude={longitude} latitude={latitude} anchor="center" />
        <MapImage />
        <Source
          id="my-data"
          type="geojson"
          data={geoJson as FeatureCollection<Geometry, GeoJsonProperties>}
        >
          <Layer
            id="point"
            type="circle"
            paint={{
              'circle-color': 'white',
              'circle-radius': {
                base: 1.75,
                stops: [
                  [12, 3],
                  [22, 180],
                ],
              },
              'circle-stroke-color': '#333333',
              'circle-stroke-width': 1,
            }}
          />
          <Layer
            id="foo"
            type="symbol"
            layout={{
              'text-field': ['match', ['get', 'name'], name, name, ''],
              'text-anchor': 'bottom',
              'text-offset': [0, -2.5],
            }}
            paint={{
              'text-color': 'purple',
              'text-halo-color': '#fff',
              'text-halo-blur': 5,
              'text-halo-width': 2,
            }}
          />
        </Source>
      </Map>
    </>
  );
};

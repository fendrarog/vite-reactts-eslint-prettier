import React, { useEffect, useMemo, useState } from 'react';
import geoJson from '../../data/data.json';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGl, { Marker, Popup, Layer } from 'react-map-gl';
import { Link } from 'react-router-dom';
import { BsFillGeoAltFill } from 'react-icons/bs';
import { usePosition } from '../../hooks/usePosition';
import { attractions } from '../../data/attractions';

const accessToken =
  'pk.eyJ1Ijoic211c29sb3YiLCJhIjoiY2xobTJib2psMTgzNjNqcDEyNGlnbHo3bSJ9.abBvILy34RqG0sw4yYa8Tg';

export const TestCopy = () => {
  const [viewState, setViewState] = useState({
    longitude: 42.04737503236987,
    latitude: 44.22748456361248,
    zoom: 14,
  });
  const [popupInfo, setPopupInfo] = useState<null | any>(null);
  const [data, setData] = useState(attractions);

  const layers = useMemo(
    () => ({
      layer1: viewState.zoom < 4,
      layer2: viewState.zoom >= 4 && viewState.zoom < 4.5,
      layer3: viewState.zoom >= 4.5 && viewState.zoom < 5.5,
      layer4: viewState.zoom >= 5.5 && viewState.zoom < 7,
      layer5: viewState.zoom >= 7 && viewState.zoom < 9.5,
      layer6: viewState.zoom >= 9.5 && viewState.zoom < 12,
      layer7: viewState.zoom >= 12,
    }),
    [viewState.zoom],
  );

  const currentLayer = (allLayers: typeof layers) => {
    for (const layer in allLayers) {
      if (allLayers[layer as keyof typeof layers]) return layer;
    }
  };

  const obj = usePosition();
  console.log(viewState);
  console.log(popupInfo);
  console.log(currentLayer(layers));

  useEffect(() => {
    const filteredDate = (data: any, layer: any) => {
      switch (layer) {
        case 'layer1':
          return data.filter((el: any) => el.scale === 'extra');
        case 'layer2':
          return data.filter((el: any) => el.scale === 'extra');
        case 'layer3':
          return data.filter((el: any) => el.scale === 'extra' || el.scale === 'big');
        case 'layer4':
          console.log(data);
          return data.filter((el: any) => el.scale === 'extra' || el.scale === 'big');
        case 'layer5':
          return data.filter(
            (el: any) =>
              el.scale === 'extra' || el.scale === 'big' || el.scale === 'medium',
          );
        case 'layer6':
          return data.filter(
            (el: any) =>
              el.scale === 'extra' || el.scale === 'big' || el.scale === 'medium',
          );
        default:
          return data;
      }
    };

    setData(filteredDate(attractions, currentLayer(layers)));
    console.log(data);
    console.log(attractions.filter((el: any) => el.scale !== 'extra'));
  }, [viewState.zoom]);

  return (
    <ReactMapGl
      {...viewState}
      style={{ width: '100%', height: '733px' }}
      onMove={(evt) => setViewState(evt.viewState)}
      onRender={(event) => event.target.resize()}
      onViewportChange={(viewState: any) => {
        setViewState(viewState);
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={accessToken}
      styleDiffing
    >
      {data.map((attraction, index) => (
        <Marker
          key={index}
          longitude={attraction.object_lng}
          latitude={attraction.object_lat}
          anchor="top"
          onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(attraction);
          }}
        >
          <BsFillGeoAltFill size={30} />
        </Marker>
      ))}

      {popupInfo && (
        <Link to={`/place/${popupInfo.object_id}`}>
          <Popup
            anchor="bottom"
            longitude={Number(popupInfo.object_lng)}
            latitude={Number(popupInfo.object_lat)}
            closeButton={false}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              <div style={{ fontWeight: '700' }}>{popupInfo.name}</div>
              <div>{popupInfo.description}</div>
            </div>
          </Popup>
        </Link>
      )}
    </ReactMapGl>
  );
};

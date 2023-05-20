import * as React from 'react';
import style from './MainPage.module.scss';
import GeoJSON from 'geojson';

import SearchPlaces from './OpenPlaces/OpenPlaces';
import ExtraordinaryPlaces from './ExtraordinaryPlaces/ExtraordinaryPlaces';
import MapOpenPlaces from './MapOpenPlaces/MapOpenPlaces';
import CreationTrip from './CreationTrip/CreationTrip';
import Stories from './Stories/Stories';

export const MainPage = () => {
  // const geo = GeoJSON.parse(excurs, {
  //   Point: ['point_coordinates_lat', 'point_coordinates_lng'],
  // });
  // console.log(geo);
  return (
    <>
      <SearchPlaces />

      <MapOpenPlaces />

      <ExtraordinaryPlaces />

      <CreationTrip />

      <Stories />
    </>
  );
};

import * as React from 'react';
import style from './MainPage.module.scss';

import SearchPlaces from './OpenPlaces/OpenPlaces';
import ExtraordinaryPlaces from './ExtraordinaryPlaces/ExtraordinaryPlaces';
import MapOpenPlaces from './MapOpenPlaces/MapOpenPlaces';
import CreationTrip from './CreationTrip/CreationTrip';
import Stories from './Stories/Stories';

export const MainPage = () => {
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

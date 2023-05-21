import * as React from 'react';
import style from './PlacePage.module.scss';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ViewPlace from './ViewPlace/ViewPlace';
import SubViewPlace from './SubViewPlace/SubViewPlace';
import ContentPlace from './ContentPlace/ContentPlace';

export const PlacePage = () => {
  const location = useLocation();
  const { popupInfo } = location.state;

  console.log(popupInfo);
  const { id } = useParams();
  return (
    <>
      <ViewPlace info={popupInfo} />

      <SubViewPlace info={popupInfo} />

      <ContentPlace info={popupInfo} />
    </>
  );
};

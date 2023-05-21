import * as React from 'react';
import style from './ViewPlace.module.scss';
import { GeoJsonProperties } from 'geojson';
import { countries, regions } from '../../../../data/ratio';

interface ViewPlacePropsType {
  info: GeoJsonProperties;
}

const ViewPlace: React.FC<ViewPlacePropsType> = ({ info }) => {
  return (
    <div
      className={style.view}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../images${info?.properties.photo_link}")`,
      }}
    >
      <div
        className={style.view__container}
        style={{
          backgroundImage: `url("../images${info?.properties.photo_link}")`,
        }}
      >
        <div className={style.body}>
          <div className={style.top}>
            <p className={style.location}>{`${
              countries[info?.properties.countryID as keyof typeof countries]
            } / ${regions[info?.properties.regionID as keyof typeof regions]} / ${
              info?.properties.city
            }`}</p>
            <div className={style.top__body}>
              <div className={style.raiting}>
                <p className={style.raiting__value}>{`4.5`}</p>
                <p className={style.raiting__comments}>{`1356 отзывов`}</p>
              </div>
              <div className={style.info}>
                <h2 className={style.info__title}>{info?.properties.name}</h2>
                <p className={style.info__location}>{`${
                  regions[info?.properties.regionID as keyof typeof regions]
                }, ${info?.properties.city}`}</p>
              </div>
            </div>
          </div>
          <div className={style.bottom}>
            <div
              className={style.photos}
              style={{
                backgroundImage: `url("../images${info?.properties.photo_link}")`,
              }}
            >
              <p className={style.photos__amount}>{`20`}</p>
              <p>Фото</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPlace;

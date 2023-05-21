import style from './Geo.module.scss';
import { MapPlace } from '../../MapPlace';

interface GeoPropsType {
  name: string;
  longitude: number;
  latitude: number;
  address: string;
  city: string;
  region: string;
  country: string;
  phone: string;
}

const Geo: React.FC<GeoPropsType> = ({
  name,
  longitude,
  latitude,
  address,
  city,
  region,
  country,
  phone,
}) => {
  return (
    <div className={style.geo__body}>
      <div className={style.map}>
        <MapPlace name={name} longitude={longitude} latitude={latitude} height={192} />
      </div>
      <h6 className={style.map__title}>{name}</h6>
      <p className={style.map__text}>{address}</p>
      <p className={style.map__text}>{`${city}, ${region}`}</p>
      <p className={style.map__text}>{country}</p>
      <p className={style.map__text}>{phone}</p>
    </div>
  );
};

export default Geo;

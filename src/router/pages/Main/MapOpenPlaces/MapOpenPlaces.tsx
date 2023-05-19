import { Button } from 'antd';
import { Map } from '../../../../features/Map/Map';
import style from './MapOpenPlaces.module.scss';

const MapOpenPlaces: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.map}>
        <Map />
        <Button shape="round" className={style.button} size="large">
          Исследовать
        </Button>
      </div>
    </div>
  );
};

export default MapOpenPlaces;

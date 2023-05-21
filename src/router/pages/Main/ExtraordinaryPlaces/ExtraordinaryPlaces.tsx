import { Button } from 'antd';
import style from './ExtraordinaryPlaces.module.scss';
import TitlePage from '../../../../components/Title';
import ShowAll from '../../../../components/ShowAll/ShowAll';
import extra from '../../../../data/extraGeo.json';
import { randomInteger } from '../../../../data/ratio';
import gg from '../../../../assets/images/01.png';

const num = randomInteger(0, extra.features.length - 6);
const extraPlaces = extra.features.slice(num, num + 6).map((el) => el.properties);

const ExtraordinaryPlaces: React.FC = () => {
  return (
    <div className={style.extraordinary}>
      <TitlePage content="Уникальные места" />

      <div className={style.container}>
        <div className={style.body}>
          {extraPlaces.map((place, i) => (
            <div key={i} className={style.item}>
              <div className={style.image}>
                <img
                  src={`./vite-reactts-eslint-prettier/images${place.photo_link[0]}`}
                  alt={'img'}
                />
                {/* <img src={gg} alt={'gg'} /> */}
              </div>
              <div className={style.item__content}>
                <h3 className={style.title}>{place.name}</h3>
                <div className={style.text}>{`${
                  place.region_name ? `${place.region_name},` : ''
                } ${place.city_name}`}</div>
                <Button shape="round" className={style.button} size="large">
                  Построить маршурт
                </Button>
              </div>
            </div>
          ))}
        </div>
        <ShowAll text="Посмотреть все" />
      </div>
    </div>
  );
};

export default ExtraordinaryPlaces;

import * as React from 'react';
import style from './SubViewPlace.module.scss';
import { MdOutlineAddLocationAlt } from 'react-icons/md';
import { Button } from 'antd';
import { AiOutlineHeart } from 'react-icons/ai';
import like from '../../../../../public/assets/icons/Like.svg';
import addPhoto from '../../../../../public/assets/icons/AddPhoto.svg';
import share from '../../../../../public/assets/icons/Share.svg';
import ShowAll from '../../../../components/ShowAll/ShowAll';
import { regions } from '../../../../data/ratio';
import { GeoJsonProperties } from 'geojson';

const options = [
  {
    alt: 'like',
    img: like,
    color: '#FF7B7B',
  },
  {
    alt: 'addPhoto',
    img: addPhoto,
    color: '#53B7FF',
  },
  {
    alt: 'share',
    img: share,
    color: '#53B7FF',
  },
];

interface SubViewPlacePropsType {
  info: GeoJsonProperties;
}

const SubViewPlace: React.FC<SubViewPlacePropsType> = ({ info }) => {
  return (
    <div className={style.subview}>
      <div className={style.subview__container}>
        <div className={style.body}>
          <div className={style.options}>
            <Button shape="round" className={style.subview__button} size="large">
              <MdOutlineAddLocationAlt size={30} /> <span>Добавить в маршрут</span>
            </Button>
            {options.map((el, i) => (
              <div
                key={i}
                className={style.option}
                style={{ borderColor: `${el.color}` }}
              >
                <img src={el.img} alt={el.alt} />
              </div>
            ))}
          </div>

          <ShowAll
            text={`Больше в ${
              regions[info?.properties.regionID as keyof typeof regions]
            }`}
            size={14}
            lineHeight={17}
            weight={400}
          />
        </div>
      </div>
    </div>
  );
};

export default SubViewPlace;

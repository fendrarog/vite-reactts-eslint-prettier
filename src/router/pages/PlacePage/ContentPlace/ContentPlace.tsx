import * as React from 'react';
import style from './ContentPlace.module.scss';
import { MdOutlineDone } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { MapPlace } from '../MapPlace';
import { GeoJsonProperties } from 'geojson';
import { countries, regions } from '../../../../data/ratio';
import { Link } from 'react-router-dom';
import testhotel1 from '../../../../assets/images/testhotelsnear1.png';
import testhotel2 from '../../../../assets/images/testhotelsnear2.png';
import testservice from '../../../../assets/images/testservicesnear.png';
import ShowAll from '../../../../components/ShowAll/ShowAll';
import Geo from './Geo/Geo';
import OpeningHours from './OpeningHours/OpeningHours';
import { Button } from 'antd';
import { SlPencil } from 'react-icons/sl';
import Comments from './Comments/Comments';

const comfort = [
  { type: 'Парковка', isAvailable: true },
  { type: 'Туалеты', isAvailable: true },
  { type: 'С домашними животными ', isAvailable: true },
  { type: 'Wi-Fi', isAvailable: false },
  { type: 'Банковские карты', isAvailable: true },
  { type: 'Доступно для инвалидных колясок', isAvailable: true },
];

const hotels = [
  {
    image: testhotel1,
    name: 'Гранд Отель',
    address: 'ул.Карачаевская, 62, 1-я линия, Домбай 369241',
    country: 'Россия',
  },
  {
    image: testhotel2,
    name: 'Отель "Белалакая"',
    address: 'A155, 118, Домбай 369232',
    country: 'Россия',
  },
  {
    image: testhotel1,
    name: 'Гранд Отель',
    address: 'ул.Карачаевская, 62, 1-я линия, Домбай 369241',
    country: 'Россия',
  },
  {
    image: testhotel2,
    name: 'Отель "Белалакая"',
    address: 'A155, 118, Домбай 369232',
    country: 'Россия',
  },
];

const services = [
  {
    image: testservice,
    name: 'Рафтинг',
    distance: 5,
    price: 2000,
  },
  {
    image: testservice,
    name: 'Рафтинг',
    distance: 5,
    price: 2000,
  },
  {
    image: testservice,
    name: 'Рафтинг',
    distance: 5,
    price: 2000,
  },
  {
    image: testservice,
    name: 'Рафтинг',
    distance: 5,
    price: 2000,
  },
];

const occasions = [
  {
    image: testservice,
    name: 'Рафтинг',
    distance: 5,
    price: 2000,
  },
  {
    image: testservice,
    name: 'Рафтинг',
    distance: 5,
    price: 2000,
  },
  {
    image: testservice,
    name: 'Рафтинг',
    distance: 5,
    price: 2000,
  },
  {
    image: testservice,
    name: 'Рафтинг',
    distance: 5,
    price: 2000,
  },
];

interface ContentPlacePropsType {
  info: GeoJsonProperties;
}

const ContentPlace: React.FC<ContentPlacePropsType> = ({ info }) => {
  return (
    <div className={style.content}>
      <div className={style.content__container}>
        <div className={style.body}>
          <div className={style.col__left}>
            <div className={style.col__item_left}>
              <p
                className={style.description__title}
              >{`Аттракция, Природные, Заповедник, Экстра`}</p>
              <p className={style.description__text}>{info?.properties.description}</p>
            </div>

            <div className={style.col__item_left}>
              <div className={style.comfort}>
                {comfort.map((el) => (
                  <div key={el.type} className={style.comfort__item}>
                    <div>
                      {el.isAvailable ? (
                        <MdOutlineDone size={20} />
                      ) : (
                        <RxCross2 size={20} />
                      )}
                    </div>
                    <span
                      style={{
                        textDecoration: el.isAvailable ? 'inherit' : 'line-through',
                      }}
                    >
                      {el.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className={style.col__item_left}>
              <Comments />
            </div>

            <div className={style.col__item_left}>
              <div className={style.services}>
                <p className={style.services__header}>Услуги рядом</p>
                <div className={style.services__body}>
                  {services.map((service, i) => (
                    <Link key={i} to={`/services`} className={style.services__item}>
                      <div>
                        <div
                          className={style.services__image}
                          style={{ borderRadius: '6px', overflow: 'hidden' }}
                        >
                          <img src={service.image} alt="pichotel" />
                        </div>
                      </div>
                      <div className={style.service__content}>
                        <div className={style.services__title}>{service.name}</div>
                        <div
                          className={style.services__text}
                        >{`До места: ${service.distance} км`}</div>
                        <div
                          className={style.services__text}
                        >{`Цена: ${service.price} руб./чел`}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className={style.services__more}>
                  <ShowAll text="Больше" size={13} weight={500} lineHeight={20} />
                </div>
              </div>
            </div>

            <div className={style.col__item_left}>
              <div className={style.services}>
                <p className={style.services__header}>Мероприятия рядом</p>
                <div className={style.services__body}>
                  {occasions.map((occasion, i) => (
                    <Link key={i} to={`/occasions`} className={style.services__item}>
                      <div>
                        <div
                          className={style.services__image}
                          style={{ borderRadius: '6px', overflow: 'hidden' }}
                        >
                          <img src={occasion.image} alt="pichotel" />
                        </div>
                      </div>
                      <div className={style.service__content}>
                        <div className={style.services__title}>{occasion.name}</div>
                        <div
                          className={style.services__text}
                        >{`До места: ${occasion.distance} км`}</div>
                        <div
                          className={style.services__text}
                        >{`Цена: ${occasion.price} руб./чел`}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className={style.services__more}>
                  <ShowAll text="Больше" size={13} weight={500} lineHeight={20} />
                </div>
              </div>
            </div>
          </div>

          <div className={style.col__right}>
            <div className={style.col__item}>
              <Geo
                name={info?.properties.name}
                longitude={info?._geometry.coordinates[0]}
                latitude={info?._geometry.coordinates[1]}
                address={info?.properties.address}
                city={info?.properties.city}
                region={regions[info?.properties.regionID as keyof typeof regions]}
                country={countries[info?.properties.countryID as keyof typeof countries]}
              />
            </div>

            <div className={style.col__item}>
              <OpeningHours />
            </div>

            <div className={style.col__item}>
              <div className={style.hotelsnear}>
                <p className={style.hotelsnear__header}>Отели рядом</p>
                {hotels.map((hotel, i) => (
                  <Link key={i} to={`/hotelsnear`} className={style.hotelsnear__item}>
                    <div>
                      <div
                        className={style.hotelsnear__image}
                        style={{ borderRadius: '6px', overflow: 'hidden' }}
                      >
                        <img src={hotel.image} alt="pichotel" />
                      </div>
                    </div>
                    <div>
                      <div className={style.hotelsnear__title}>{hotel.name}</div>
                      <div className={style.hotelsnear__text}>{`${hotel.address},`}</div>
                      <div className={style.hotelsnear__text}>{hotel.country}</div>
                    </div>
                  </Link>
                ))}
                <div className={style.hotelsnear__more}>
                  <ShowAll text="Больше" size={13} weight={500} lineHeight={20} />
                </div>
              </div>
            </div>

            <div className={style.col__item}>
              <div className={style.hotelsnear}>
                <p className={style.hotelsnear__header}>Аттракции рядом</p>
                {hotels.map((hotel, i) => (
                  <Link key={i} to={`/hotelsnear`} className={style.hotelsnear__item}>
                    <div>
                      <div
                        className={style.hotelsnear__image}
                        style={{ borderRadius: '6px', overflow: 'hidden' }}
                      >
                        <img src={hotel.image} alt="pichotel" />
                      </div>
                    </div>
                    <div>
                      <div className={style.hotelsnear__title}>{hotel.name}</div>
                      <div className={style.hotelsnear__text}>{`${hotel.address},`}</div>
                      <div className={style.hotelsnear__text}>{hotel.country}</div>
                    </div>
                  </Link>
                ))}
                <div className={style.hotelsnear__more}>
                  <ShowAll text="Больше" size={13} weight={500} lineHeight={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPlace;

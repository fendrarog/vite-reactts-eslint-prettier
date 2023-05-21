import * as React from 'react';
import style from './ContentPlace.module.scss';
import { MdOutlineDone } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { MapPlace } from '../MapPlace';
import { GeoJsonProperties } from 'geojson';
import { countries, randomInteger, regions } from '../../../../data/ratio';
import { Link } from 'react-router-dom';
import testhotel1 from '../../../../../public/images/testhotelsnear1.png';
import testhotel2 from '../../../../../public/images/testhotelsnear2.png';
import ShowAll from '../../../../components/ShowAll/ShowAll';
import Geo from './Geo/Geo';
import OpeningHours from './OpeningHours/OpeningHours';
import { Button } from 'antd';
import Comments from './Comments/Comments';
import services from '../../../../data/tour_serviceGeo.json';
import occasions from '../../../../data/tour_eventGeo.json';
import attractions from '../../../../data/09Geo.json';

const comfort: any = [
  // { type: 'Парковка', isAvailable: true },
  // { type: 'Туалеты', isAvailable: true },
  // { type: 'С домашними животными ', isAvailable: true },
  // { type: 'Wi-Fi', isAvailable: false },
  // { type: 'Банковские карты', isAvailable: true },
  // { type: 'Доступно для инвалидных колясок', isAvailable: true },
];

const hotels = [
  {
    image: 'images/testhotelsnear1.png',
    name: 'Гранд Отель',
    address: 'ул.Карачаевская, 62, 1-я линия, Домбай 369241',
    country: 'Россия',
  },
  {
    image: 'images/testhotelsnear1.png',
    name: 'Отель "Белалакая"',
    address: 'A155, 118, Домбай 369232',
    country: 'Россия',
  },
  {
    image: 'images/testhotelsnear1.png',
    name: 'Гранд Отель',
    address: 'ул.Карачаевская, 62, 1-я линия, Домбай 369241',
    country: 'Россия',
  },
  {
    image: 'images/testhotelsnear1.png',
    name: 'Отель "Белалакая"',
    address: 'A155, 118, Домбай 369232',
    country: 'Россия',
  },
];

interface ContentPlacePropsType {
  info: GeoJsonProperties;
}

const ContentPlace: React.FC<ContentPlacePropsType> = ({ info }) => {
  const servicesPlaces = services.features.map((el) => el.properties);
  const occasionsPlaces = occasions.features.map((el) => el.properties);
  const attractionsPlaces = attractions.features.map((el) => el.properties);

  const num = randomInteger(0, attractions.features.length - 4);
  const attractionsNear = attractionsPlaces.slice(num, num + 4);

  const hotelsPlaces = attractionsPlaces.filter((el) => el.subtype_name_en === 'hotel');
  return (
    <div className={style.content}>
      <div className={style.content__container}>
        <div className={style.body}>
          <div className={style.col__left}>
            <div className={style.col__item_left}>
              <p
                className={style.description__title}
              >{`${info?.properties.type_name}, ${info?.properties.subtype_name}, ${info?.properties.scale_name}`}</p>
              <p className={style.description__text}>{info?.properties.description}</p>
            </div>

            <div className={style.col__item_left}>
              <div className={style.comfort}>
                {comfort.map((el: any) => (
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
                  {servicesPlaces.map((service, i) => (
                    <Link key={i} to={`/services`} className={style.services__item}>
                      <div>
                        <div
                          className={style.services__image}
                          style={{ borderRadius: '6px', overflow: 'hidden' }}
                        >
                          <img
                            src={service.photo_link[0] || 'images/testservicesnear.png'}
                            alt="pichotel"
                          />
                        </div>
                      </div>
                      <div className={style.service__content}>
                        <div className={style.services__title}>
                          {service.subtype_name}
                        </div>
                        <div className={style.services__text}>{`До места: ${5} км`}</div>
                        <div
                          className={style.services__text}
                        >{`Цена: ${service.turusluga_cost} руб./чел`}</div>
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
                  {occasionsPlaces.map((occasion, i) => (
                    <Link key={i} to={`/occasions`} className={style.services__item}>
                      <div>
                        <div
                          className={style.services__image}
                          style={{ borderRadius: '6px', overflow: 'hidden' }}
                        >
                          <img
                            src={occasion.photo_link[0] || '/images/testservicesnear.png'}
                            alt="pichotel"
                          />
                        </div>
                      </div>
                      <div className={style.service__content}>
                        <div className={style.services__title}>{occasion.name}</div>
                        <div className={style.services__text}>{`До места: ${5} км`}</div>
                        <div
                          className={style.services__text}
                        >{`Цена: ${occasion.tickets_cost} руб./чел`}</div>
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
                city={info?.properties.city_name}
                region={info?.properties.region_name}
                country={info?.properties.country_name}
                phone={info?.properties.phone}
              />
            </div>

            <div className={style.col__item}>
              <OpeningHours />
            </div>

            <div className={style.col__item}>
              <div className={style.hotelsnear}>
                <p className={style.hotelsnear__header}>Отели рядом</p>
                {hotelsPlaces.map((hotel, i) => (
                  <Link key={i} to={`/hotelsnear`} className={style.hotelsnear__item}>
                    <div>
                      <div
                        className={style.hotelsnear__image}
                        style={{ borderRadius: '6px', overflow: 'hidden' }}
                      >
                        <img src={`/images/${hotel.photo_link[0]}`} alt="pichotel" />
                      </div>
                    </div>
                    <div className={style.hotelsnear__content}>
                      <div className={style.hotelsnear__title}>{hotel.name}</div>
                      <div className={style.hotelsnear__text}>{`${
                        hotel.address || 'Адрес не указан'
                      },`}</div>
                      <div className={style.hotelsnear__text}>{hotel.country_name}</div>
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
                {attractionsNear.map((hotel, i) => (
                  <Link
                    key={i}
                    to={`/attractionsnear`}
                    className={style.hotelsnear__item}
                  >
                    <div>
                      <div
                        className={style.hotelsnear__image}
                        style={{ borderRadius: '6px', overflow: 'hidden' }}
                      >
                        <img src={`/images/${hotel.photo_link[0]}`} alt="pichotel" />
                      </div>
                    </div>
                    <div className={style.hotelsnear__content}>
                      <div className={style.hotelsnear__title}>{hotel.name}</div>
                      <div className={style.hotelsnear__text}>{`${
                        hotel.address || 'Адрес не указан'
                      },`}</div>
                      <div className={style.hotelsnear__text}>{hotel.country_name}</div>
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

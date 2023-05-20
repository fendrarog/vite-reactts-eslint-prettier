import { Button } from 'antd';
import TitlePage from '../../../../components/Title';
import style from './Stories.module.scss';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import pic6 from '../../../../../public/assets/images/06.png';
import pic7 from '../../../../../public/assets/images/07.png';
import pic8 from '../../../../../public/assets/images/08.png';
import pic9 from '../../../../../public/assets/images/09.png';
import ShowAll from '../../../../components/ShowAll/ShowAll';

const stories = [
  {
    id: 1,
    image: pic6,
    title: 'По местам Есенина: Москва – Рязань',
    travelDistance: 182,
    travelTime: 13,
  },
  {
    id: 2,
    image: pic7,
    title: 'Путешествие к Эльбрусу',
    travelDistance: 182,
    travelTime: 13,
  },
  {
    id: 3,
    image: pic8,
    title: 'Неизведанная Карелия',
    travelDistance: 182,
    travelTime: 13,
  },
  {
    id: 4,
    image: pic9,
    title: 'Весь Алтай за 3 дня',
    travelDistance: 182,
    travelTime: 13,
  },
];

const Stories: React.FC = () => {
  return (
    <div className={style.stories}>
      <div className={style.container}>
        <TitlePage content="Истории" />
        <div className={style.body}>
          {stories.map((story) => (
            <div key={story.id} className={style.body__item}>
              <div className={style.item__image}>
                <img src={story.image} alt={story.title} />
              </div>
              <div className={style.item__content}>
                <h3 className={style.item__title}>{story.title}</h3>
                <div className={style.item__text}>
                  Расстояние маршрута:{' '}
                  <span style={{ fontWeight: 700 }}>{story.travelDistance} км</span>
                </div>
                <div className={style.item__text}>
                  Время в пути:{' '}
                  <span style={{ fontWeight: 700 }}>{story.travelTime} часов</span>
                </div>
                <Button shape="round" className={style.button}>
                  Подробнее
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

export default Stories;

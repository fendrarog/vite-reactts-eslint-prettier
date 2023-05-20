import { Button } from 'antd';
import style from './ExtraordinaryPlaces.module.scss';
import TitlePage from '../../../../components/Title';
import ShowAll from '../../../../components/ShowAll/ShowAll';

const cards = [
  {
    id: 1,
    image: './images/01.png',
    title: 'Гамсутль',
    description: 'Республика Дагестан, Гунибский район',
  },
  {
    id: 2,
    image: './images/02.png',
    title: 'Рыбацкая деревня в рязанской области',
    description: 'Рыбацкая деревня, село Шумашь',
  },
  {
    id: 3,
    image: './images/03.png',
    title: 'Териберка',
    description: 'Мурманская обл., Кольский район',
  },
  {
    id: 4,
    image: './images/04.png',
    title: 'Отель «Семигорье»',
    description: 'Ивановская область',
  },
  {
    id: 5,
    image: './images/05.png',
    title: 'Хаски Сафари',
    description: 'Финляндия, Северная Остроботния',
  },
  {
    id: 6,
    image: './images/03.png',
    title: 'Териберка',
    description: 'Мурманская обл., Кольский район',
  },
];

const ExtraordinaryPlaces: React.FC = () => {
  return (
    <div className={style.extraordinary}>
      <TitlePage content="Уникальные места" />

      <div className={style.container}>
        <div className={style.body}>
          {cards.map((card) => (
            <div key={card.id} className={style.item}>
              <div className={style.image}>
                <img src={card.image} alt={card.title} />
              </div>
              <div className={style.item__content}>
                <h3 className={style.title}>{card.title}</h3>
                <div className={style.text}>{card.description}</div>
                <Button shape="round" className={style.button} size="large">
                  Построить маршурт
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraordinaryPlaces;

import { Link } from 'react-router-dom';
import style from './CreationTrip.module.scss';
import TitlePage from '../../../../components/Title';
import { FaCampground } from 'react-icons/fa';
import { GiPhotoCamera, GiWineGlass } from 'react-icons/gi';
import { BsCloudSun, BsStars } from 'react-icons/bs';
import { RiHotelLine } from 'react-icons/ri';
import { AiOutlineCar } from 'react-icons/ai';
import { SlHandbag } from 'react-icons/sl';
import icon1 from '../../../../../public/assets/images/creation1.svg';
import icon2 from '../../../../../public/assets/images/creation2.svg';
import icon3 from '../../../../../public/assets/images/creation3.svg';
import icon4 from '../../../../../public/assets/images/creation4.svg';
import icon5 from '../../../../../public/assets/images/creation5.svg';
import icon6 from '../../../../../public/assets/images/creation6.svg';

const travelCreation = [
  { text: 'Открывай уникальные места', icon: icon1 },
  { text: 'Бронируй жилье', icon: icon2 },
  { text: 'Находи экскурсии от местных жителей', icon: icon3 },
  { text: 'Принимай участие в культурных событиях', icon: icon4 },
  { text: 'Получай скидки от партнёров', icon: icon5 },
  { text: 'Вдохновляйся тревел историями путешественников', icon: icon6 },
];

const CreationTrip: React.FC = () => {
  return (
    <div className={style.creation}>
      <div className={style.container}>
        <TitlePage content="Создайте свое идеальное путешествие" width={600} />

        <div className={style.body}>
          {travelCreation.map((el, i) => (
            <Link to="/uniqueplaces" key={i} className={style.body__item}>
              <div className={style.item_icon}>
                <img src={el.icon} alt={el.text} />
              </div>
              <div className={style.item__text}>{el.text}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreationTrip;

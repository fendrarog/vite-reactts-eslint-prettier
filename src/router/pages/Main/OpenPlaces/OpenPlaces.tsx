import { Button } from 'antd';
import TitlePage from '../../../../components/Title';
import style from './OpenPlaces.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import MapOpenPlaces from '../MapOpenPlaces/MapOpenPlaces';
import { usePosition } from '../../../../hooks/usePosition';

const OpenPlaces: React.FC = () => {
  const onSearch = (value: string) => console.log(value);

  return (
    <div className={style.openplaces}>
      <div className={style.container}>
        <TitlePage content="Открывай новые места" />

        <div className={style.search}>
          <input
            className={style.search__field}
            type="text"
            placeholder="Введите город, место или отель"
          />
          <Button shape="round" className={style.button} size="large">
            <AiOutlineSearch size={20} /> <span>Поиск</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OpenPlaces;

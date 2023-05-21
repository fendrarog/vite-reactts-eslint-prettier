import * as React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import style from './Header.module.scss';

const { Text } = Typography;

const Header: React.FC = () => {
  return (
    <>
      <div className={style.logo}>
        <div className={style.logo__image}>
          <img src={'/icons/logo.svg'} alt="logo" />
        </div>
        <div className={style.logo__text}>Novitravel</div>
      </div>

      <nav className={style.menu}>
        <ul className={style.menu__list}>
          <li className={style.menu__item}>
            <Link to="/" className={style.menu__link}>
              <Text className={style.menu__text}>Главная</Text>
            </Link>
          </li>

          <li className={style.menu__item}>
            <Link to="/about" className={style.menu__link}>
              <Text className={style.menu__text}>Уникальные места</Text>
            </Link>
          </li>

          <li className={style.menu__item}>
            <Link to="/dashboard" className={style.menu__link}>
              <Text className={style.menu__text}>Тревел истории</Text>
            </Link>
          </li>

          <li className={style.menu__item}>
            <Link to="/dashboard" className={style.menu__link}>
              <Text className={style.menu__text}>Помощь</Text>
            </Link>
          </li>

          <li className={style.menu__item}>
            <Link to="/dashboard" className={style.menu__link}>
              <Text className={style.menu__text}>Забронировать отель</Text>
            </Link>
          </li>

          <li className={style.menu__item_login}>
            <Link to="/login" className={style.menu__link}>
              <Text className={style.menu__text_login}>Войти</Text>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;

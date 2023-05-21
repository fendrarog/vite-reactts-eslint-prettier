import * as React from 'react';
import style from './Footer.module.scss';
import { Link } from 'react-router-dom';

import news from '../../data/news.json';

const events = [
  { id: 1, name: 'Фестиваль Тюльпанов в Санкт-Петербурге 20-21 мая' },
  { id: 2, name: 'Алые паруса в Санкт-Петербурге 24 июня' },
  { id: 3, name: 'День ВМФ в Санкт-Петербурге 30 июля' },
];

const Footer: React.FC = () => {
  return (
    <>
      <div className={style.footer__container}>
        <div className={style.footer__top}>
          <div className={style.top__info}>
            <div className={style.info__search}>Исследуй и открывай новые места</div>
            <h6 className={style.footer__title}>Информация</h6>
            <nav className={style.info__menu}>
              <ul className={style.menu__list}>
                <li className={style.menu__item}>
                  <Link to="/aboutus" className={style.menu__link}>
                    <p className={style.menu__text}>О проекте</p>
                  </Link>
                </li>
                <li className={style.menu__item}>
                  <Link to="/aboutus" className={style.menu__link}>
                    <p className={style.menu__text}>Вопросы и ответы</p>
                  </Link>
                </li>
                <li className={style.menu__item}>
                  <Link to="/aboutus" className={style.menu__link}>
                    <p className={style.menu__text}>Контакты</p>
                  </Link>
                </li>
                <li className={style.menu__item}>
                  <Link to="/aboutus" className={style.menu__link}>
                    <p className={style.menu__text}>Обратная связь</p>
                  </Link>
                </li>
                <li className={style.menu__item}>
                  <Link to="/aboutus" className={style.menu__link}>
                    <p className={style.menu__text}>Новости</p>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className={style.top__news}>
            <h6 className={style.footer__title}>Новости</h6>
            <div className={style.news_events}>
              {news.map((news) => (
                <Link
                  key={news.news_id}
                  to={`/news/${news.news_id}`}
                  className={style.event__link}
                >
                  <p key={news.news_id} className={style.event__text}>
                    {news.news_text}
                  </p>
                </Link>
              ))}
            </div>
            <div className={style.news__socials}>
              <div className={style.socials__item}>
                <a
                  href="https://ru.wikipedia.org/wiki/Telegram"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={'/icons/telegram.svg'} alt="telegram" />
                </a>
              </div>
              <div className={style.socials__item}>
                <a
                  href="https://ru.wikipedia.org/wiki/Vkontakte"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={'/icons/vk.svg'} alt="vk" />
                </a>
              </div>
              <div className={style.socials__item}>
                <a
                  href="https://ru.wikipedia.org/wiki/Youtube"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={'/icons/youtube.svg'} alt="youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={style.footer__bottom}>
          <div className={style.bottom__logo}>Novitravel</div>
          <ul className={style.bottom__copyright}>
            <li className={style.copyright__item}>
              <Link to="/copyright" className={style.copyright__link}>
                <p className={style.copyright__text}>Политика конфиденциальности</p>
              </Link>
            </li>
            <li className={style.copyright__item}>
              <Link to="/copyright" className={style.copyright__link}>
                <p className={style.copyright__text}>Пользовательское соглашение</p>
              </Link>
            </li>
            <li className={style.copyright__item}>
              <Link to="/copyright" className={style.copyright__link}>
                <p className={style.copyright__text}>COPYRIGHT</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;

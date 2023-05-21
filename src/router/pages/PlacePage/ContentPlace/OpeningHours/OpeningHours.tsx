import style from './OpeningHours.module.scss';

const OpeningHours: React.FC = () => {
  return (
    <div className={style.openinghours}>
      <p className={style.openinghours__title}>Часы работы</p>
      {/* <div className={style.openinghours__content}>
        <p style={{ fontWeight: '700', color: `#FF0000` }}>Закрыто</p>
        <p>
          <span style={{ fontWeight: '700' }}>Пн-Пт:</span> 09:00 – 13:00, 14:00 – 18:00
        </p>
        <p>
          <span style={{ fontWeight: '700' }}>Сб-Вс:</span> 09:00 – 18:00
        </p>
      </div> */}
    </div>
  );
};

export default OpeningHours;

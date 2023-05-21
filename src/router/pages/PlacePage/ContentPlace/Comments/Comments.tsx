import style from './Comments.module.scss';
import { Button } from 'antd';
import { SlPencil } from 'react-icons/sl';
import testavatar1 from '../../../../../../public/images/testavatar1.png';
import testavatar2 from '../../../../../../public/images/testavatar2.png';
import ShowAll from '../../../../../components/ShowAll/ShowAll';
import review from '../../../../../data/review.json';
import { months } from '../../../../../data/ratio';

const dateParse = (entry: number) => {
  const date = new Date(entry);
  const day = String(date.getDate());
  const month = months[date.getMonth()];
  const year = String(date.getFullYear());
  return `${day} ${month} ${year}`;
};

const Comments: React.FC = () => {
  return (
    <div className={style.comments}>
      <div className={style.comments__header}>
        <Button shape="round" className={style.comments__button} size="large">
          <SlPencil size={20} /> <span>ДОБАВИТЬ ОТЗЫВ</span>
        </Button>
        <div className={style.comments__rating}>
          <p className={style.rating__header}>ВАША ОЦЕНКА</p>
          <div className={style.rating__items}>
            {[1, 2, 3, 4, 5].map((rating, i) => (
              <div key={i} className={style.rating__item}>
                {rating}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={style.comments__content}>
        <div className={style.comments__items}>
          {review.map((comment, i) => (
            <div key={i} className={style.comments__item}>
              <div className={style.item__row}>
                <div className={style.row__user}>
                  <div className={style.user__avatar}>
                    <img
                      src={
                        comment.user_avatar ||
                        './vite-reactts-eslint-prettier/images/testavatar1.png'
                      }
                      alt="avatar"
                    />
                  </div>
                  <p className={style.user__info}>Отзыв от</p>
                  <p
                    className={style.user__info}
                    style={{ color: '#248742', fontWeight: '700' }}
                  >
                    {comment.author}
                  </p>
                </div>
                <div className={style.row__content}>
                  <div className={style.content__top}>
                    <div className={style.top__date}>
                      {dateParse(comment.review_date)}
                    </div>
                    <div className={style.top__rating}>
                      Оценка{' '}
                      <span
                        className={style.rating_value}
                        style={{
                          backgroundColor:
                            comment.review_rating < 4 && comment.review_rating >= 3
                              ? 'orange'
                              : comment.review_rating < 3
                              ? 'red'
                              : '#248742',
                        }}
                      >
                        {comment.review_rating.toFixed(1)}
                      </span>
                    </div>
                  </div>
                  <div className={style.content__text}>{comment.review_text}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={style.comments__more}>
          <ShowAll text="Читать все отзывы" size={13} weight={500} lineHeight={20} />
        </div>
      </div>
    </div>
  );
};

export default Comments;

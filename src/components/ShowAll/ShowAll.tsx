import { Link } from 'react-router-dom';
import style from './ShowAll.module.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';

interface ShowAllPropsType {
  text: string;
  size?: number;
  weight?: number;
  lineHeight?: number;
}

const ShowAll: React.FC<ShowAllPropsType> = ({
  text,
  size = 20,
  weight = 700,
  lineHeight = 24,
}) => {
  return (
    <div className={style.showall}>
      <Link to="/uniqueplaces" className={style.link}>
        <span
          className={style.showall__content}
          style={{
            fontSize: `${size}px`,
            fontWeight: `${weight}`,
            lineHeight: `${lineHeight}px`,
          }}
        >
          <span>{text}</span> <AiOutlineArrowRight />
        </span>
      </Link>
    </div>
  );
};

export default ShowAll;

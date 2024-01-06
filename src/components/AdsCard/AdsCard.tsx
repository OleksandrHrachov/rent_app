import { FC } from "react";
import cardImg from "../../assets/space.png";
import locationIcon from '../../assets/locationIcon.svg'
import priceIcon from '../../assets/priceIcon.svg';
import "./AdsCard.scss";

interface IProps {
  info: {
    id: string;
    city: string;
    street: string;
    name: string;
    phone: string;
    email: string;
    title: string;
    price: number;
    description: string;
  };
}

export const AdsCard: FC<IProps> = ({ info }) => {
  return (
    <div className="ads-card">
      <div className="ads-card__img-wrapper">
        <img className="ads-card__img" src={cardImg} alt="card" />
      </div>
      <div className="ads-card__info">
        <h5 className="ads-card__info-title">{info.title}</h5>
        <p className="ads-card__info-address">
        <img  src={locationIcon} alt="address" />
         {info.city}, {info.street}
        </p>
        <p className="ads-card__info-price"><img  src={priceIcon} alt="$" /> {info.price} per month</p>
      </div>
    </div>
  );
};

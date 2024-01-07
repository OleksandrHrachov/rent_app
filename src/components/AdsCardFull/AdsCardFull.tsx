import { FC } from "react";
import locationIcon from "../../assets/locationIcon.svg";
import priceIcon from "../../assets/priceIcon.svg";
import ownerIcon from "../../assets/ownerIcon.svg";
import phoneIcon from "../../assets/phoneIcon.svg";
import emailIcon from "../../assets/emailIcon.svg";
import descrIcon from "../../assets/descrIcon.svg";

import { IAdsCardInfo } from "../../types";
import { useAppDispatch } from "../../hooks";
import { removeSelectAdd } from "../../store/adsSlice";
import "./AdsCardFull.scss";

interface IProps {
  info: IAdsCardInfo;
}

export const AdsCardFull: FC<IProps> = ({ info }) => {
  const dispatch = useAppDispatch();

  const handelCloseAdInfo = () => {
    dispatch(removeSelectAdd());
  }

  return (
    <div className="ads-full-card">
      <div
        onClick={handelCloseAdInfo}
        className="ads-full-card__close-btn"
      >
        <div className="ads-full-card__close-btn-item"></div>
        <div className="ads-full-card__close-btn-item"></div>
      </div>
      <div className="ads-full-card__img-wrapper">
        <img
          className="ads-full-card__img"
          src={info.imageUrl}
          alt={info.title}
        />
      </div>
      <div className="ads-full-card__info">
        <h5 className="ads-full-card__info-title">{info.title}</h5>
        <p className="ads-full-card__info-address">
          <img src={locationIcon} alt="address" />
          {info.city}, {info.street}
        </p>
        <p className="ads-full-card__info-price">
          <img src={priceIcon} alt="$" /> {info.price} per month
        </p>
        <p className="ads-full-card__info-owner">
          <img src={ownerIcon} alt="Owner" /> {info.name}
        </p>
        <p className="ads-full-card__info-phone">
          <img src={phoneIcon} alt="Phone" /> {info.phone}
        </p>
        {info.email && (
          <p className="ads-full-card__info-email">
            <img src={emailIcon} alt="@" /> {info.email}
          </p>
        )}
        <p className="ads-full-card__info-description">
          <img src={descrIcon} alt="descr" /> {info.description}
        </p>
      </div>
    </div>
  );
};

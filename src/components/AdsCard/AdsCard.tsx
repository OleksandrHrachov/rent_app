import { FC, useState } from "react";
import locationIcon from "../../assets/locationIcon.svg";
import priceIcon from "../../assets/priceIcon.svg";
import ownerIcon from "../../assets/ownerIcon.svg";
import phoneIcon from "../../assets/phoneIcon.svg";
import emailIcon from "../../assets/emailIcon.svg";
import descrIcon from "../../assets/descrIcon.svg";
import arrowTopIcon from '../../assets/arrowTop.svg';
import arrowBottomIcon from '../../assets/arrowBottom.svg';
import { IAdsCardInfo } from "../../types";
import "./AdsCard.scss";

interface IProps {
  info: IAdsCardInfo;
}

export const AdsCard: FC<IProps> = ({ info }) => {
  const [showFullinfo, setShowFullinfo] = useState(false);

  const toggleShowMore = () => {
    setShowFullinfo(!showFullinfo);
  };

  return (
    <div className="ads-card">
      <div className="ads-card__img-wrapper">
        <img className="ads-card__img" src={info.imageUrl} alt={info.title} />
      </div>
      <div className="ads-card__info">
        <h5 className="ads-card__info-title">{info.title}</h5>
        <p className="ads-card__info-address">
          <img src={locationIcon} alt="address" />
          {info.city}, {info.street}
        </p>
        <p className="ads-card__info-price">
          <img src={priceIcon} alt="$" /> {info.price} per month
        </p>
        {showFullinfo && (
          <>
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
          </>
        )}

        <div onClick={toggleShowMore} className="ads-card__show-arrow">
              {showFullinfo ? (<img src={arrowTopIcon} alt="descr" />) : (<img src={arrowBottomIcon} alt="descr" />)}
        </div>
      </div>
    </div>
  );
};

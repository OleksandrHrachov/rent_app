import { useAppSelector } from "../../hooks";
import { AdsCard } from "../AdsCard";
import { AdsCardFull } from "../AdsCardFull";
import "./Ads.scss";

export const Ads = () => {
  const cards = useAppSelector(state => state.adsList.list);
  const selectedAdId = useAppSelector(state => state.adsList.selectedAd);
  const selectedAd = cards.filter(card => card.info.id === selectedAdId)[0];
  
  return (
    <aside className="ads">
      {selectedAdId && <AdsCardFull info={selectedAd.info}/> }
      <ul className="ads__list">
        {cards.map((card) => {
          return <AdsCard key={card.info.id} info={card.info} />;
        })}
      </ul>
    </aside>
  );
};

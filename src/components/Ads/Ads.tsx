import { useAppSelector } from "../../hooks";
import { AdsCard } from "../AdsCard";
import "./Ads.scss";

export const Ads = () => {
  const cards = useAppSelector(state => state.adsList.list);
  
  return (
    <aside className="ads">
      <ul className="ads__list">
        {cards.map((card) => {
          return <AdsCard key={card.info.id} info={card.info} />;
        })}
      </ul>
    </aside>
  );
};

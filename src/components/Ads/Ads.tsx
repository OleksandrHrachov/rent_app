import {useRef, useEffect} from 'react';
import { useAppSelector,} from "../../hooks";
import { AdsCard } from "../AdsCard";
import { AdsCardFull } from "../AdsCardFull";
import "./Ads.scss";

export const Ads = () => {
  const cards = useAppSelector(state => state.adsList.visibleList);
  const selectedAdId = useAppSelector(state => state.adsList.selectedAd);
  const selectedAd = cards.filter(card => card.info.id === selectedAdId)[0];
  
  const asideRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (selectedAdId && asideRef.current) {
      asideRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [selectedAdId])
  
  return (
    <aside ref={asideRef} className="ads">
      {cards.length === 0 && <p>There are no offers to view in this region.</p>}
      {selectedAdId && <AdsCardFull info={selectedAd.info}/> }
      <ul className="ads__list">
        {cards.map((card) => {
          return <AdsCard key={card.info.id} info={card.info} />;
        })}
      </ul>
    </aside>
  );
};

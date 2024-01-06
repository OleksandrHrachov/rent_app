import { AdsCard } from "../AdsCard";
import "./Ads.scss";

interface IAdsCard {
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
  coords: {
    lat: number;
    lon: number;
  };
}

const cards: IAdsCard[] = [
  {
    info: {
      id: 'hello',
      city: "Kharkiv",
      street: 'Hgd 12',
      name: 'John',
      phone: '+3564465-564656',
      email: 'gdfd@fdsfds.gfds',
      title: 'title',
      price: 50000,
      description: 'lorem ipsum dolor sit amet, consectetur adip'
    },
    coords: {
      lat: 49.9843281,
      lon: 36.45527485404673
    }
  },
  {
    info: {
      id: 'world',
      city: "Bila Tserkva",
      street: 'LUKUGHLKK 12',
      name: 'John',
      phone: '+3564465-564656',
      email: 'gdfd@fdsfds.gfds',
      title: 'title',
      price: 70000,
      description: 'lorem ipsum dolor sit amet, consectetur adip'
    },
    coords: {
      lat: 49.7959159,
      lon: 30.13099175
    }
  }
];

export const Ads = () => {
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

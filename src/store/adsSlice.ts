import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAdsCard, IAdsState } from "../types";

const initialState: IAdsState = {
  selectedAd: '',
  visibleList: [],
  list: [
    {
      info: {
        id: "space_suit_wnwass",
        city: "Kharkiv",
        street: "Space street 12",
        name: "John",
        phone: "+356-4465-564-656",
        email: "space@space.com",
        title: "Space suit",
        price: 10000,
        description: "Space suit almost new, no holes, only 158 spacewalks.",
        imageUrl: 'https://res.cloudinary.com/dakb9rcdn/image/upload/v1704633058/rent_app/eqjfbzv2jxgdt6p2yiis.png',
      },
      coords: {
        lat: 49.9843281,
        lon: 36.45527485404673,
      },
    },
    {
      info: {
        id: "spaceship_j8m1jf",
        city: "Bila Tserkva",
        street: "Space street 52",
        name: "Nick",
        phone: "+356-4465-564-656",
        email: "space@space.com",
        title: "Spaceship",
        price: 700000,
        description: "Rent a spaceship, range 100,000 light years, runs on banana peels, 3 bananas for 4 parsecs.",
        imageUrl: 'https://res.cloudinary.com/dakb9rcdn/image/upload/v1704632758/rent_app/jgaqiajjawhiwfedothq.png',
      },
      coords: {
        lat: 49.7959159,
        lon: 30.13099175,
      },
    },
  ],
};

const adsSlice = createSlice({
  name: "adsSlice",
  initialState,
  reducers: {
    addAds(state, action: PayloadAction<IAdsCard>) {
      state.list.push(action.payload);
    },
    selectVisibleAds(state, action: PayloadAction<IAdsCard[]>) {
      state.visibleList = action.payload;
    },
    addSelectAdd(state, action: PayloadAction<string>) {
      state.selectedAd = action.payload;
    },
    removeSelectAdd(state) {
      state.selectedAd = '';
    }
  },
});

export const { addAds, addSelectAdd, removeSelectAdd, selectVisibleAds } = adsSlice.actions;
export default adsSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAdsCard, IAdsState } from "../types";

const initialState: IAdsState = {
  list: [
    {
      info: {
        id: "hello",
        city: "Kharkiv",
        street: "Hgd 12",
        name: "John",
        phone: "+356-4465-564656",
        email: "gdfd@fdsfds.gfds",
        title: "Some Title",
        price: 50000,
        description: "lorem ipsum dolor sit amet, consectetur adip",
      },
      coords: {
        lat: 49.9843281,
        lon: 36.45527485404673,
      },
    },
    {
      info: {
        id: "world",
        city: "Bila Tserkva",
        street: "Ljdghgfd 12",
        name: "John",
        phone: "+3564465-564656",
        email: "gdfd@fdsfds.gfds",
        title: "Other title",
        price: 70000,
        description: "lorem ipsum dolor sit amet, consectetur adip",
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
  },
});

export const { addAds } = adsSlice.actions;
export default adsSlice.reducer;

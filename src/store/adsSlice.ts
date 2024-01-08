import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAdsCard, IAdsState } from "../types";

const initialState: IAdsState = {
  selectedAd: '',
  visibleList: [],
  list: [],
};

const adsSlice = createSlice({
  name: "adsSlice",
  initialState,
  reducers: {
    initAdsData(state, action: PayloadAction<IAdsCard[]>) {
      state.list = action.payload;
    },
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

export const { addAds, addSelectAdd, removeSelectAdd, selectVisibleAds, initAdsData } = adsSlice.actions;
export default adsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
      img: "https://cdn.pixabay.com/photo/2022/02/20/02/29/projector-7023604_1280.jpg",
      name: "Projector",
      cost: 200,
      quantity: 0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2018/10/08/01/50/speakers-3731822_1280.jpg",
      name: "Speaker",
      cost: 35,
      quantity: 0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/03/16/21/23/microphone-1261793_1280.jpg",
      name: "Microphone",
      cost: 45,
      quantity: 0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/03/28/12/15/chairs-2181977_1280.jpg",
      name: "Whiteboard",
      cost: 80,
      quantity: 0,
    },

    {
      img: "https://pixabay.com/images/download/signpost-235079_640.jpg",
      name: "Signage",
      cost: 80,
      quantity: 0,
    },
  ],

  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if(item){
        item.quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {
      const item =state[action.payload];
      if(item && item.quantity >0){
        item.quantity--;
      }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
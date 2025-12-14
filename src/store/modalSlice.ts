import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import {
  ModalNames,
  SpecificModalDataType,
} from "../shared/lib/hooks/useModalControl/modalNames";

export type ModalSliceType<
  T extends keyof typeof ModalNames = keyof typeof ModalNames
> = {
  modalData: {
    name: T;
    value: SpecificModalDataType[T];
  };
};

const initialState: ModalSliceType = {
  modalData: { name: ModalNames.reset, value: undefined },
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalData: (
      state: ModalSliceType,
      action: PayloadAction<ModalSliceType["modalData"]>
    ) => {
      state.modalData = action.payload;
    },
  },
  selectors: {
    selectModalData: (state) => state.modalData,
  },
});

// Action creators
export const { setModalData } = modalSlice.actions;

// Selectors
export const { selectModalData } = modalSlice.selectors;

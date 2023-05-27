import { createAction, createReducer } from "@reduxjs/toolkit";

export interface NavItemType {
  sectionName: string;
  link: string;
}

const addSection = createAction<NavItemType[]>("/navigation/addSection");
interface TestState {
  sections: Array<NavItemType>;
}
const initialState: TestState = {
  sections: [
    {
      sectionName: "Home",
      link: "/",
    },
    {
      sectionName: "Messages",
      link: "/messages",
    },
  ],
};

const navigation = createReducer<TestState>(initialState, (builder) => {
  builder.addCase(addSection, (state, action) => {
    state.sections = [...state.sections, ...action.payload];
  });
});

export default navigation;

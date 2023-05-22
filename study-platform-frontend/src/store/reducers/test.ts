import { createAction, createReducer } from "@reduxjs/toolkit";

interface TestState {
  count: number;
}
const initialState: TestState = { count: 0 };

const increment = createAction("test/increment");

const test = createReducer<TestState>(initialState, (builder) => {
  builder.addCase(increment, (state) => {
    state.count++;
  });
});

export default test;

import { createSlice } from "@reduxjs/toolkit";

export const projectsSlice = createSlice({
  name: "projectsLiState",
  initialState: {
    status: true,
    index: 0,
  },
  reducers: {
    projectsLiStatusReducer(state, action){
      const { status } = action.payload;
      state.status = status;
    },
    projectsLiIndexReducer(state, action) {
      const { index } = action.payload;
      state.index = index;
    },
  },
});

export const { projectsLiStatusReducer, projectsLiIndexReducer } = projectsSlice.actions;

export const selectProjectsLiStatus = (state) =>
  state.projectsLiState.status;

export const selectProjectsLiIndex = (state) =>
  state.projectsLiState.index;

export default projectsSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import homeCoverStatusReducer from "./pages/Home/homeSlice"
import projectsLiStateReducer from "./pages/Projects/projectsSlice"

export default configureStore({
    reducer: {
        homeCoverStatus: homeCoverStatusReducer,
        projectsLiState: projectsLiStateReducer,
    },
});